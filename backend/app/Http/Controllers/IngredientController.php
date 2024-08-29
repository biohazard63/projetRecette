<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use Illuminate\Http\Request;

/**
 * @OA\Tag(
 *     name="Ingredients",
 *     description="Operations related to ingredients"
 * )
 */
class IngredientController extends Controller
{
    /**
     * @OA\Get(
     *     path="/ingredients",
     *     tags={"Ingredients"},
     *     summary="Get a list of all ingredients",
     *     description="Returns a list of all ingredients in the system.",
     *     @OA\Response(
     *         response=200,
     *         description="A list of ingredients",
     *         @OA\JsonContent(type="array", @OA\Items(ref="#/components/schemas/Ingredient"))
     *     )
     * )
     */
    public function index()
    {
        return Ingredient::all();
    }

    /**
     * @OA\Post(
     *     path="/ingredients",
     *     tags={"Ingredients"},
     *     summary="Create a new ingredient",
     *     description="Creates a new ingredient with the provided data.",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name"},
     *             @OA\Property(property="name", type="string", example="Sugar")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Ingredient created successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Ingredient")
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
            'name' => 'required|string|max:255',
        ]);

        $ingredient = Ingredient::create($request->all());

        return response()->json($ingredient, 201);
    }

    /**
     * @OA\Get(
     *     path="/ingredients/{id}",
     *     tags={"Ingredients"},
     *     summary="Get ingredient by ID",
     *     description="Returns an ingredient by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the ingredient",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Ingredient data",
     *         @OA\JsonContent(ref="#/components/schemas/Ingredient")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Ingredient not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Ingredient not found"))
     *     )
     * )
     */
    public function show($id)
    {
        return Ingredient::findOrFail($id);
    }

    /**
     * @OA\Put(
     *     path="/ingredients/{id}",
     *     tags={"Ingredients"},
     *     summary="Update ingredient by ID",
     *     description="Updates an ingredient's details by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the ingredient to update",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="string", example="Brown Sugar")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Ingredient updated successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Ingredient")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Ingredient not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Ingredient not found"))
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
        $ingredient = Ingredient::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|string|max:255',
        ]);

        $ingredient->update($request->all());

        return response()->json($ingredient, 200);
    }

    /**
     * @OA\Delete(
     *     path="/ingredients/{id}",
     *     tags={"Ingredients"},
     *     summary="Delete ingredient by ID",
     *     description="Deletes an ingredient by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the ingredient to delete",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="Ingredient deleted successfully",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Ingredient not found",
     *         @OA\JsonContent(@OA\Property(property="message", type="string", example="Ingredient not found"))
     *     )
     * )
     */
    public function destroy($id)
    {
        $ingredient = Ingredient::findOrFail($id);
        $ingredient->delete();

        return response()->json(null, 204);
    }
}
