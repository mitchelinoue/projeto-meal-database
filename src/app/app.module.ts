import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeComponent } from './views/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { ListRecipeIngredientComponent } from './views/list-recipe-ingredient/list-recipe-ingredient.component';
import { FormsModule } from '@angular/forms';
import { ListRecipeNameComponent } from './views/list-recipe-name/list-recipe-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    HeaderComponent,
    ListRecipeIngredientComponent,
    ListRecipeNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
