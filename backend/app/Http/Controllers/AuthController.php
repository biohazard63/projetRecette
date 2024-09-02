<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            if ($user) {
                return response()->json([
                    'message' => 'Connexion réussie !',
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->name,
                        'role' => $user->role,
                    ]
                ], 200);
            } else {
                return response()->json(['message' => 'User not found.'], 404);
            }
        } else {
            return response()->json(['message' => 'Identifiants invalides.'], 401);
        }
    }
}
