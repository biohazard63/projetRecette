<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Category",
 *     type="object",
 *     title="Category",
 *     required={"name"},
 *     @OA\Property(property="id", type="integer", format="int64"),
 *     @OA\Property(property="name", type="string")
 * )
 */
class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    /**
     * @OA\Property(
     *     property="recipes",
     *     type="array",
     *     @OA\Items(ref="#/components/schemas/Recipe")
     * )
     */
    public function recipes()
    {
        return $this->hasMany(Recipe::class);
    }
}
