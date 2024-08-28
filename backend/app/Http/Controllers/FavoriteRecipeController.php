<?php

namespace App\Http\Controllers;

use App\Models\FavoriteRecipe;
use Illuminate\Http\Request;

class FavoriteRecipeController extends Controller
{
    public function index()
    {
        return FavoriteRecipe::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        $favoriteRecipe = FavoriteRecipe::create($request->all());

        return response()->json($favoriteRecipe, 201);
    }

    public function show($id)
    {
        return FavoriteRecipe::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $favoriteRecipe = FavoriteRecipe::findOrFail($id);

        $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'recipe_id' => 'sometimes|exists:recipes,id',
        ]);

        $favoriteRecipe->update($request->all());

        return response()->json($favoriteRecipe, 200);
    }

    public function destroy($id)
    {
        $favoriteRecipe = FavoriteRecipe::findOrFail($id);
        $favoriteRecipe->delete();

        return response()->json(null, 204);
    }
}
