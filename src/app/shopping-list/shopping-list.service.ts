import { Subject } from "rxjs";
import { Ingredient } from "../Shared/Ingredient.model";

export class ShoppingListService{
    ingredientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngeridients(){
          return  this.ingredients.slice();
      }

      addIngeridient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChange.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
      }
}