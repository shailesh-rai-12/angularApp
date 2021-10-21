import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
// @ViewChild('nameInput') nameInputRef!:ElementRef;
// @ViewChild('amountInput') amountInputRef!:ElementRef;

// @Output() ingredientAdded=new EventEmitter<Ingredient>();
@ViewChild('f') slForm!:NgForm;
editMode=false;
editItemIndex!:number;
editedItem!:Ingredient;
subscription!:Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe((id:number)=>{
            this.editItemIndex=id;
            this.editMode=true;
            this.editedItem=this.slService.getIngredient(id);
            this.slForm.setValue({
              name:this.editedItem.name,
              amount:this.editedItem.amount
            })

    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form:NgForm){
    const value =form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
      // this.ingredientAdded.emit(newIngredient);
      //console.log(newIngredient);
    if(!this.editMode){
      this.slService.addIngredient(newIngredient);
    }else{
      this.slService.updateIngredients(this.editItemIndex,newIngredient);
      this.editMode=false;
    }

    form.reset();
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode=false;
  }

  OnDeleteItem()
  {
     this.slService.deleteIngredient(this.editItemIndex);
     this.onClear();
  }
}
