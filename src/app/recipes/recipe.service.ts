import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>();
  
  recipes:Recipe[]=[
    new Recipe("Butter Chicken",
                "Chicken with butter",
                "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
                [new Ingredient("chicken",1),new Ingredient("butter",1)]),
   new Recipe("Soya Chaap",
                "Soya and cream",
                "https://www.theeasyeating.com/wp-content/uploads/2020/07/Veg-frozen-soya-chaap-4.jpg",
                [new Ingredient("soyabean",1),new Ingredient("cream",1)]),
  ]
  constructor(private slService:ShoppingListService) { }

  getRecipes()
  {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
  }

  getRecipe(id:number){
    return this.recipes[id];
  }
}
