<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\RecipeIngredient;

class JsonDataSeeder extends Seeder
{
public function run()
{
// Lire le fichier JSON
$jsonData = file_get_contents(database_path('seeders/recettes.json'));

// Décoder les données JSON
$data = json_decode($jsonData, true);

// Vérifiez si le JSON est bien formaté
if (json_last_error() !== JSON_ERROR_NONE) {
throw new \Exception('Erreur lors du décodage du JSON : ' . json_last_error_msg());
}

// Insérer les données décodées dans la base de données
foreach ($data as $item) {
$recipe = Recipe::create([
'title' => $item['name'],
'description' => $item['description'],
'instructions' => $item['description'], // Utiliser la description comme instructions, si applicable
'servings' => $item['servings'],
'user_id' => 1, // Remplacer par une valeur dynamique si nécessaire
'category_id' => 1 // Remplacer par une valeur dynamique si nécessaire
]);

foreach ($item['ingredients'] as $ingredient) {
$ingredientModel = Ingredient::firstOrCreate(['name' => $ingredient['ingredient']]);
RecipeIngredient::create([
'recipe_id' => $recipe->id,
'ingredient_id' => $ingredientModel->id,
'quantity' => $ingredient['quantity'] ?? null,
'unit' => $ingredient['unit'] ?? null, // Ajouter l'unité si nécessaire
]);
}
}
}
}
