import { Ingredient } from "../Shared/Ingredient.model";

export class ShoppingListService{
    ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngeridients(){
          return  this.ingredients.slice();
      }

      addIngeridient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
      }
}