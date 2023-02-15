import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/'
  private readonly byName: string = 'search.php?s='
  private readonly byId: string = 'lookup.php?i='
  private readonly byIngredient: string = 'filter.php?i='
  private readonly byCountry: string = 'filter.php?a='
  private readonly byLetter: string = 'search.php?f='


  constructor(
    private http: HttpClient,
  ) { }

  findRecipeByName(name: string){
    return this.http.get<Meal>(`${this.baseUrl}${this.byName}${name}`)
  }

  findRecipeById(id: number){
    return this.http.get<Meal>(`${this.baseUrl}${this.byId}${id}`)
  }

  filterByIngredient(ingredient: string){
    return this.http.get<Meal[]>(`${this.baseUrl}${this.byIngredient}${ingredient}`)
  }

  filterByCountry(country: string){
    return this.http.get<Meal[]>(`${this.baseUrl}${this.byCountry}${country}`)
  }

  filterByLetter(letter: string){
    return this.http.get<Meal[]>(`${this.baseUrl}${this.byLetter}${letter}`)
  }

  
}
