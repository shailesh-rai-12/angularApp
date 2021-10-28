import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingEditComponent } from 'src/app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeResolverService } from '../recipes/recipe-resolver.service';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../auth/auth.guard';

const appRoutes:Routes=[
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,canActivate:[AuthGuard],
    children:[
      {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolverService]},
      {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]}
    ]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'auth',component:AuthComponent}


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
