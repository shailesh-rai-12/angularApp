import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';

const appRoutes:Routes=[
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,
    children:[
      {path:'',component:RecipeStartComponent},
      {path:':id',component:RecipeDetailComponent}
    ]},
  {path:'shopping-list',component:ShoppingEditComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRouteModule { }