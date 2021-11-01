import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRouteModule } from './app-route.module';
// import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    HeaderComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ShoppingListModule,
    SharedModule,
    CoreModule,
    // AuthModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
