import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
ingredients!:Ingredient[];

private subscription!:Subscription;
  constructor(private slService:ShoppingListService) {
   }
  
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    });
  }
  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient);
  }

  onEdit(id:number){

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
