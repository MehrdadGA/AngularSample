import { EventEmitter } from "@angular/core";
import { Ingredient } from "../Shared/Ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
                   'This is simply a test',
                   'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                   [
                        new Ingredient('maat', 1),
                        new Ingredient('french fries', 20)
                   ]),
        new Recipe('Another Test Recipe',
                   'This is simply a test', 
                   'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                   [
                        new Ingredient('buns', 2),
                        new Ingredient('meat', 1)
                   ])
      ];

      getRecipe(){
          return this.recipes.slice();
      }
}