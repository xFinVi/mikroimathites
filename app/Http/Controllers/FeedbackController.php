<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FeedbackController extends Controller
{

    public function index(Request $request, $token)
    {
        $user = User::where('feedback_token', $token)->first();
        if (!$user || $user->feedback_token_used_at) {
            abort(404);
        }
        $user->update(['feedback_token_used_at' => now()]);
        return view('feedback.index', ['token' => $token]);
    }
    // Handles feedback form submissions
    public function store(Request $request)
    {
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'surname' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'like' => 'nullable|string',
                'dont_like' => 'nullable|string',
                'rating' => 'required|integer|min:1|max:5',
            ]);
            // Check if the token is valid
            $user = User::where('feedback_token', $validatedData['token'])->first();
            // Check if the email already exists in the feedback database
            $existingEmail = Feedback::where('email', $validatedData['email'])->first();

            if ($existingEmail) {
                return response()->json(['error' => 'This email has already been used.'], 409);
            }

            // Save the validated feedback data to the database
            Feedback::create($validatedData);
            $user->update(['feedback_token_used_at' => now()]);

            // Return success response
            return response()->json(['message' => 'Feedback submitted successfully!'], 201);
        } catch (\Exception $e) {
            // Log any errors that occur during processing
            Log::error('Error storing feedback: ' . $e->getMessage());

            // Return error response
            return response()->json(['error' => 'Failed to submit feedback.'], 500);
        }
    }
}
