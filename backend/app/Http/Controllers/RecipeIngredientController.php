<?php

namespace App\Http\Controllers;

use App\Models\RecipeIngredient;
use Illuminate\Http\Request;

class RecipeIngredientController extends Controller
{
    public function index()
    {
        return RecipeIngredient::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
            'ingredient_id' => 'required|exists:ingredients,id',
            'quantity' => 'nullable|string',
            'unit' => 'nullable|string',
        ]);

        $recipeIngredient = RecipeIngredient::create($request->all());

        return response()->json($recipeIngredient, 201);
    }

    public function show($id)
    {
        return RecipeIngredient::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);

        $request->validate([
            'recipe_id' => 'sometimes|exists:recipes,id',
            'ingredient_id' => 'sometimes|exists:ingredients,id',
            'quantity' => 'nullable|string',
            'unit' => 'nullable|string',
        ]);

        $recipeIngredient->update($request->all());

        return response()->json($recipeIngredient, 200);
    }

    public function destroy($id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);
        $recipeIngredient->delete();

        return response()->json(null, 204);
    }
}
