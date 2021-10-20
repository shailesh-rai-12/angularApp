import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @ViewChild('nameInput') nameInputRef!:ElementRef;
// @ViewChild('amountInput') amountInputRef!:ElementRef;

// @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(form:NgForm){
    const value =form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
      // this.ingredientAdded.emit(newIngredient);
      //console.log(newIngredient);
      
      this.slService.addIngredient(newIngredient);
  }
}
