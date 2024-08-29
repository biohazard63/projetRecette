<?php

namespace App\Http\Controllers;

use App\Models\FavoriteRecipe;
use Illuminate\Http\Request;


class FavoriteRecipeController extends Controller
{
    /**
     * @OA\Get(
     *     path="/favorite-recipes",
     *     tags={"Favorite Recipes"},
     *     summary="Get a list of all favorite recipes",
     *     description="Returns a list of all favorite recipes saved by users.",
     *     @OA\Response(
     *         response=200,
     *         description="A list of favorite recipes",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/FavoriteRecipe"))
     *     )
     * )
     */
    public function index()
    {
        return FavoriteRecipe::all();
    }

    /**
     * @OA\Post(
     *     path="/favorite-recipes",
     *     tags={"Favorite Recipes"},
     *     summary="Add a recipe to favorites",
     *     description="Adds a recipe to the user's list of favorite recipes.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id", "recipe_id"},
     *             @OA\Property(property="user_id", type="integer", example=1),
     *             @OA\Property(property="recipe_id", type="integer", example=5)
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Recipe added to favorites successfully",
     *         @OA\JsonContent(ref="#/components/schemas/FavoriteRecipe")
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
            'user_id' => 'required|exists:users,id',
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        $favoriteRecipe = FavoriteRecipe::create($request->all());

        return response()->json($favoriteRecipe, 201);
    }

    /**
     * @OA\Get(
     *     path="/favorite-recipes/{id}",
     *     tags={"Favorite Recipes"},
     *     summary="Get favorite recipe by ID",
     *     description="Returns a favorite recipe by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the favorite recipe",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Favorite recipe data",
     *         @OA\JsonContent(ref="#/components/schemas/FavoriteRecipe")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Favorite recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Favorite recipe not found"))
     *     )
     * )
     */
    public function show($id)
    {
        return FavoriteRecipe::findOrFail($id);
    }

    /**
     * @OA\Put(
     *     path="/favorite-recipes/{id}",
     *     tags={"Favorite Recipes"},
     *     summary="Update favorite recipe by ID",
     *     description="Updates the details of a favorite recipe by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the favorite recipe to update",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="user_id", type="integer", example=1),
     *             @OA\Property(property="recipe_id", type="integer", example=5)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Favorite recipe updated successfully",
     *         @OA\JsonContent(ref="#/components/schemas/FavoriteRecipe")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Favorite recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Favorite recipe not found"))
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
        $favoriteRecipe = FavoriteRecipe::findOrFail($id);

        $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'recipe_id' => 'sometimes|exists:recipes,id',
        ]);

        $favoriteRecipe->update($request->all());

        return response()->json($favoriteRecipe, 200);
    }

    /**
     * @OA\Delete(
     *     path="/favorite-recipes/{id}",
     *     tags={"Favorite Recipes"},
     *     summary="Delete favorite recipe by ID",
     *     description="Removes a recipe from the user's list of favorite recipes by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the favorite recipe to delete",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Favorite recipe deleted successfully",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Favorite recipe not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Favorite recipe not found"))
     *     )
     * )
     */
    public function destroy($id)
    {
        $favoriteRecipe = FavoriteRecipe::findOrFail($id);
        $favoriteRecipe->delete();

        return response()->json(null, 204);
    }
}
