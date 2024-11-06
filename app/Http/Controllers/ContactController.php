<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public  function store(Request $request)
    {
        // Validate the input data

        try {

            $validatedData = $request->validate([
                'name' => 'required|string|max:55',
                'last_name' => 'required|string|max:55',
                'email' => 'required|email|max:50',
                'message' => 'required|string|max:1000'
            ]);

            Contact::create($validatedData);
            return response()->json(['message' => 'Message sent successfully!'], 201);
        } catch (\Exception $e) {
            Log::error('Error storing feedback: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to submit feedback.'], 500);
        }
    }
}
