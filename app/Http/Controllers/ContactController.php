<?php

namespace App\Http\Controllers;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
class ContactController extends Controller
{
     public function sendEmail(Request $request)
    {
        {
            
            $name = $request->input('name');
            $email = $request->input('email');
            $subject = $request->input('subject');
            $message = $request->input('message');
        
            // Envoyez l'e-mail
            Mail::to('mseddimariam41@gmail.com')->send(new ContactMail(compact('name', 'email', 'subject', 'message')));
        
            return response()->json(['message' => 'E-mail envoyé avec succès']);
        }}
}

