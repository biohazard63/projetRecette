
<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        return Recipe::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'instructions' => 'required|string',
            'user_id' => 'required|exists:users,id',
            'category_id' => 'required|exists:categories,id',
        ]);

        $recipe = Recipe::create($request->all());

        return response()->json($recipe, 201);
    }

    public function show($id)
    {
        return Recipe::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);

        $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'instructions' => 'sometimes|string',
            'user_id' => 'sometimes|exists:users,id',
            'category_id' => 'sometimes|exists:categories,id',
        ]);

        $recipe->update($request->all());

        return response()->json($recipe, 200);
    }

    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();

        return response()->json(null, 204);
    }
}
