<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

/**
 * @OA\Tag(
 *     name="Recipes",
 *     description="Operations related to recipes"
 * )
 */
class RecipeController extends Controller
{
    /**
     * @OA\Get(
     *     path="/recipes",
     *     tags={"Recipes"},
     *     summary="Get a list of all recipes",
     *     description="Returns a list of all recipes in the system.",
     *     @OA\Response(
     *         response=200,
     *         description="A list of recipes",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Recipe"))
     *     )
     * )
     */
    public function index()
    {
        return Recipe::all();
    }

    /**
     * @OA\Post(
     *     path="/recipes",
     *     tags={"Recipes"},
     *     summary="Create a new recipe",
     *     description="Creates a new recipe with the provided data.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title","description","instructions","user_id","category_id"},
     *             @OA\Property(property="title", type="string", example="Delicious Pancakes"),
     *             @OA\Property(property="description", type="string", example="A simple and quick pancake recipe."),
     *             @OA\Property(property="instructions", type="string", example="1. Mix ingredients... 2. Cook on medium heat..."),
     *             @OA\Property(property="user_id", type="integer", example=1),
     *             @OA\Property(property="category_id", type="integer", example=2)
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Recipe created successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Recipe")
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="The given data was invalid."))
     *     )
     * )
     */
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

    /**
     * @OA\Get(
     *     path="/recipes/{id}",
     *     tags={"Recipes"},
     *     summary="Get recipe by ID",
     *     description="Returns a recipe by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the recipe",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Recipe data",
     *         @OA\JsonContent(ref="#/components/schemas/Recipe")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Recipe not found"))
     *     )
     * )
     */
    public function show($id)
    {
        return Recipe::findOrFail($id);
    }

    /**
     * @OA\Put(
     *     path="/recipes/{id}",
     *     tags={"Recipes"},
     *     summary="Update recipe by ID",
     *     description="Updates a recipe's details by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the recipe to update",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="title", type="string", example="Updated Pancake Recipe"),
     *             @OA\Property(property="description", type="string", example="Updated description of the recipe."),
     *             @OA\Property(property="instructions", type="string", example="Updated instructions..."),
     *             @OA\Property(property="user_id", type="integer", example=1),
     *             @OA\Property(property="category_id", type="integer", example=2)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Recipe updated successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Recipe")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Recipe not found"))
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="The given data was invalid."))
     *     )
     * )
     */
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

    /**
     * @OA\Delete(
     *     path="/recipes/{id}",
     *     tags={"Recipes"},
     *     summary="Delete recipe by ID",
     *     description="Deletes a recipe by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the recipe to delete",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Recipe deleted successfully",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Recipe not found"))
     *     )
     * )
     */
    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();

        return response()->json(null, 204);
    }
}
