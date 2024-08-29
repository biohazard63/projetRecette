<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Ingredient",
 *     description="Ingredient model",
 *     title="Ingredient",
 *     @OA\Xml(name="Ingredient")
 * )
 */
class Ingredient extends Model
{
    use HasFactory;

    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID of the ingredient",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    public $id;

    /**
     * @OA\Property(
     *     title="Name",
     *     description="Name of the ingredient",
     *     example="Sugar"
     * )
     *
     * @var string
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @OA\Property(
     *     title="Recipes",
     *     description="List of recipes that include this ingredient",
     *     type="array",
     *     @OA\Items(ref="#/components/schemas/Recipe")
     * )
     *
     * @var \App\Models\Recipe[]
     */
    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'recipe_ingredients')->withPivot('quantity');
    }
}
