import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListRecipeCountryComponent } from './views/list-recipe-country/list-recipe-country.component';
import { ListRecipeIngredientComponent } from './views/list-recipe-ingredient/list-recipe-ingredient.component';
import { ListRecipeNameComponent } from './views/list-recipe-name/list-recipe-name.component';

import { RecipeComponent } from './views/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | Meal'
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent,
    title: 'Recipe'
  },
  {
    path: 'list/ingredient/:ingredient',
    component: ListRecipeIngredientComponent,
    title: 'List'
  },
  {
   path: 'list/name/:name', 
   component: ListRecipeNameComponent,
   title: 'List'
  },
  {
    path: 'list/country/:country',
    component: ListRecipeCountryComponent,
    title: 'List'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
