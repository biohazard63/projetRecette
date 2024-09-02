<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Recipe",
 *     description="Recipe model",
 *     title="Recipe",
 *     @OA\Xml(name="Recipe")
 * )
 */
class Recipe extends Model
{
    use HasFactory;

    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID of the recipe",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    public $id;

    /**
     * @OA\Property(
     *     title="Title",
     *     description="Title of the recipe",
     *     example="Delicious Pancakes"
     * )
     *
     * @var string
     */
    public $title;

    /**
     * @OA\Property(
     *     title="Description",
     *     description="Brief description of the recipe",
     *     example="A simple and quick pancake recipe."
     * )
     *
     * @var string
     */
    public $description;

    /**
     * @OA\Property(
     *     title="Instructions",
     *     description="Detailed cooking instructions for the recipe",
     *     example="1. Mix ingredients... 2. Cook on medium heat..."
     * )
     *
     * @var string
     */
    public $instructions;

    /**
     * @OA\Property(
     *     title="User ID",
     *     description="ID of the user who created the recipe",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    public $user_id;

    /**
     * @OA\Property(
     *     title="Category ID",
     *     description="ID of the category this recipe belongs to",
     *     format="int64",
     *     example=2
     * )
     *
     * @var integer
     */
    public $category_id;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'servings',
        'description',
        'instructions',
        'user_id',
        'category_id',
    ];

    /**
     * Get the user who created the recipe.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the category this recipe belongs to.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the ingredients used in the recipe.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredients')->withPivot('quantity');
    }

    /**
     * Get the users who have favorited this recipe.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function favorites()
    {
        return $this->hasMany(FavoriteRecipe::class);
    }
}
