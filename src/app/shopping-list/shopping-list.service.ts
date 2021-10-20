import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientsChanged=new EventEmitter<Ingredient[]>();
  ingredientsChanged=new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients:Ingredient[]=[
    new Ingredient("Chicken",1),new Ingredient("Butter",1)
  ];

  constructor() { }

  getIngredients(){ 
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.getIngredients())
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    // ingredients.forEach((ingredient)=>{
    //   this.addIngredient(ingredient);
    // }) 
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.getIngredients());
    this.ingredientsChanged.next(this.ingredients.slice());

  }
}
