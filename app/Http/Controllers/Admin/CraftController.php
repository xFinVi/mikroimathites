<?php

// app/Http/Controllers/Admin/CraftController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CraftResource;
use App\Models\Craft;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CraftController extends Controller
{
    public function index()
    {
        $paginated = Craft::latest()->paginate();
        return Inertia::render('Craft/Index', [
            'pageTitle' => 'Δημιουργίες',
            'crafts' => CraftResource::collection($paginated), // Passing cards to the Inertia page
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/AddCraft', [
            'pageTitle' => 'Προσθήκη εργασίας',
        ]);
    }


    public function store(Request $request) //+
    {
        // Validate the incoming data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'img_url' => 'required|file|image|max:2048',  // Ensure the image is valid
            'pdf_url' => 'required|file|mimes:pdf,jpeg,png,jpg,gif,svg|max:10240', // Ensure the PDF is valid
        ]);

        $validatedData['user_id'] = Auth::id();

        // Store the files in the 'public' disk and get their paths
        $validatedData['img_url'] = $request->file('img_url')->store('craft_images', 'public');
        $validatedData['pdf_url'] = $request->file('pdf_url')->store('craft_pdfs', 'public');

        // Create the craft record with the file paths
        Craft::create($validatedData);

        // Return a response with the newly created craft

        // Backend response for successful craft creation
        return response()->json([
            'success' => true,
            'redirectUrl' => route('Δημιουργίες')  // Redirect to the crafts index page
        ]);
    }


    public function show(Craft $craft)
    {
        return Inertia::render('Craft/Craft', [
            'craft' => (new CraftResource($craft))->resolve(),
        ]);
    }




    public function edit(Craft $craft)
    {
        return Inertia::render('Admin/EditCraft', [
            'craft' => (new CraftResource($craft))->resolve(),
        ]);
    }



    public function update(Request $request, Craft $craft) //+
    {


        $validatedData = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'img_url' => 'nullable|image|max:2048',
            'pdf_url' => 'nullable|mimes:pdf,jpeg,png,jpg,gif,svg|max:10240',
        ]);




        // Store paths of the old files for deletion//-
        $oldImgPath = $craft->img_url ? str_replace('public/', '', $craft->img_url) : null;
        $oldPdfPath = $craft->pdf_url ? str_replace('public/', '', $craft->pdf_url) : null;


        // Handle image update//-
        if ($request->hasFile('img_url')) {
            // Delete old image if exists//-
            if ($oldImgPath) {
                Storage::delete($oldImgPath); // Deletes from 'storage/app/public'//-
                Storage::delete($oldImgPath); //+
                $publicOldImgPath = public_path('storage/' . $oldImgPath);
                if (File::exists($publicOldImgPath)) {
                    File::delete($publicOldImgPath); // Deletes from 'public/storage'//-
                    File::delete($publicOldImgPath); //+
                }
            }

            // Store new image and save the relative path//-
            $newImagePath = $request->file('img_url')->store('craft_images', 'public');
            $validatedData['img_url'] = $newImagePath; // Ensure this is saved correctly//-
            $validatedData['img_url'] = $newImagePath; //+
        }

        // Handle PDF update//-
        if ($request->hasFile('pdf_url')) {
            // Delete old PDF if exists//-
            if ($oldPdfPath) {
                Storage::delete($oldPdfPath);
                $publicOldPdfPath = public_path('storage/' . $oldPdfPath);
                if (File::exists($publicOldPdfPath)) {
                    File::delete($publicOldPdfPath);
                }
            }

            // Store new PDF//-
            $newPdfPath = $request->file('pdf_url')->store('craft_pdfs', 'public');
            $validatedData['pdf_url'] = $newPdfPath;
        }

        $craft->update($validatedData);

        // Redirect or return response//-
        return response()->json([
            'success' => true,
            'message' => 'Craft updated successfully',
            'craft' => $craft,
            'redirectUrl' => route('craft.show', ['craft' => $craft->id]), //+
        ]);
    }




    // Delete method to remove a craft
    public function destroy(Craft $craft)
    {
        // Image deletion
        if ($craft->img_url) {
            $imgPath = 'craft_images/' . basename($craft->img_url); // Adjust according to your actual file path

            if (Storage::exists($imgPath)) {
                Storage::delete($imgPath);
            }

            // Also delete from public folder if you have a symbolic link
            $publicImgPath = public_path('storage/' . $imgPath);
            if (File::exists($publicImgPath)) {
                File::delete($publicImgPath);
            }
        }

        // PDF deletion
        if ($craft->pdf_url) {
            $pdfPath = 'craft_pdfs/' . basename($craft->pdf_url); // Adjust according to your actual file path

            if (Storage::exists($pdfPath)) {
                Storage::delete($pdfPath);
            }

            // Also delete from public folder if you have a symbolic link
            $publicPdfPath = public_path('storage/' . $pdfPath);
            if (File::exists($publicPdfPath)) {
                File::delete($publicPdfPath);
            }
        }

        // Delete the craft record
        $craft->delete();

        return response()->json([
            'success' => true,
            'message' => 'Craft deleted successfully',
            'redirectUrl' => route('Δημιουργίες'),
        ]);
    }
}
