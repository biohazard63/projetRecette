<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\FavoriteRecipeController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// User routes
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{user}', [UserController::class, 'show']);
Route::put('users/{user}', [UserController::class, 'update']);
Route::delete('users/{user}', [UserController::class, 'destroy']);

// Recipe routes
Route::get('recipes', [RecipeController::class, 'index']);
Route::post('recipes', [RecipeController::class, 'store']);
Route::get('recipes/{recipe}', [RecipeController::class, 'show']);
Route::put('recipes/{recipe}', [RecipeController::class, 'update']);
Route::delete('recipes/{recipe}', [RecipeController::class, 'destroy']);

// Category routes
Route::get('categories', [CategoryController::class, 'index']);
Route::post('categories', [CategoryController::class, 'store']);
Route::get('categories/{category}', [CategoryController::class, 'show']);
Route::put('categories/{category}', [CategoryController::class, 'update']);
Route::delete('categories/{category}', [CategoryController::class, 'destroy']);

// Ingredient routes
Route::get('ingredients', [IngredientController::class, 'index']);
Route::post('ingredients', [IngredientController::class, 'store']);
Route::get('ingredients/{ingredient}', [IngredientController::class, 'show']);
Route::put('ingredients/{ingredient}', [IngredientController::class, 'update']);
Route::delete('ingredients/{ingredient}', [IngredientController::class, 'destroy']);

// Favorite Recipe routes
Route::get('favorite-recipes', [FavoriteRecipeController::class, 'index']);
Route::post('favorite-recipes', [FavoriteRecipeController::class, 'store']);
Route::get('favorite-recipes/{favoriteRecipe}', [FavoriteRecipeController::class, 'show']);
Route::put('favorite-recipes/{favoriteRecipe}', [FavoriteRecipeController::class, 'update']);
Route::delete('favorite-recipes/{favoriteRecipe}', [FavoriteRecipeController::class, 'destroy']);

// Recipe Ingredient routes
Route::get('recipe-ingredients', [RecipeIngredientController::class, 'index']);
Route::post('recipe-ingredients', [RecipeIngredientController::class, 'store']);
Route::get('recipe-ingredients/{recipeIngredient}', [RecipeIngredientController::class, 'show']);
Route::put('recipe-ingredients/{recipeIngredient}', [RecipeIngredientController::class, 'update']);
Route::delete('recipe-ingredients/{recipeIngredient}', [RecipeIngredientController::class, 'destroy']);

Route::post('login', [AuthController::class, 'login']);
