import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe("Butter Chicken","Chicken with butter","https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"),
    new Recipe("Butter Chicken","Chicken with butter","https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
