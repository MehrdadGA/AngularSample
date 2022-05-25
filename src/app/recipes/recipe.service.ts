import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../Shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
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
      constructor(private slService: ShoppingListService){}
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient){
        this.slService.addIngredients(ingredients);
      }
}