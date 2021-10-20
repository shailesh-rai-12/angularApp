import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe-item') recipe!:Recipe;
  @Input() index!:number;
  // @Output() recipeSelected=new EventEmitter<void>();
  //recipe!:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    
  }

  // onItemClicked()
  // {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
