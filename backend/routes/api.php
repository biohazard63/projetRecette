<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\FavoriteRecipeController;
use App\Http\Controllers\RecipeIngredientController;


/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="API de Gestion des Recettes",
 *     description="API pour gérer les utilisateurs, recettes, catégories, ingrédients et favoris.",
 *     @OA\Contact(
 *         email="support@votreapp.com"
 *     ),
 *     @OA\License(
 *         name="MIT",
 *         url="https://opensource.org/licenses/MIT"
 *     )
 * )
 */

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('users', UserController::class);
Route::apiResource('recipes', RecipeController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('ingredients', IngredientController::class);
Route::apiResource('favorite-recipes', FavoriteRecipeController::class);
Route::resource('recipe-ingredients', RecipeIngredientController::class);
