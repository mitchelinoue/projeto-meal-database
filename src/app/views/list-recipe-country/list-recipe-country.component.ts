import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-list-recipe-country',
  templateUrl: './list-recipe-country.component.html',
  styleUrls: ['./list-recipe-country.component.css']
})
export class ListRecipeCountryComponent implements OnInit{

  public urlName: any
  public listRecipes: Meal[] = []
  public isIngredient: boolean = false
  public isCountry: boolean = false
  public isLetter: boolean = false
  public isCategory: boolean = false
  public countryFlag: any
  public imgUrl: string = 'https://www.themealdb.com/images/ingredients/'
  public countryList = { 
    'ar': 'Argentinian', 
    'ca': 'Canadian', 
    'cn': 'Chinese', 
    'dz': 'Algerian', 
    'eg': 'Egyptian', 
    'es': 'Spanish', 
    'fr': 'French', 
    'gb': 'British', 
    'gr': 'Greek', 
    'hr': 'Croatian', 
    'ie': 'Irish', 
    'in': 'Indian', 
    'it': 'Italian', 
    'jm': 'Jamaican', 
    'jp': 'Japanese', 
    'kn': 'Kenyan', 
    'ma': 'Moroccan', 
    'mx': 'Mexican', 
    'my': 'Malaysian', 
    'nl': 'Dutch', 
    'no': 'Norwegian', 
    'pl': 'Polish', 
    'pt': 'Portuguese', 
    'ru': 'Russian', 
    'sa': 'Saudi Arabian', 
    'sk': 'Slovakian', 
    'sy': 'Syrian', 
    'th': 'Thai', 
    'tn': 'Tunisian', 
    'tr': 'Turkish', 
    'us': 'American', 
    'vn': 'Vietnamese',
  }
  public tagsList = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian"
  ]

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.initializeList()
  }

  public initializeList() {
    this.route.paramMap.subscribe((params: any) => {
      this.urlName = params.get('country')

      if(Object.values(this.countryList).includes(this.urlName)){
        this.mealService.filterByCountry(this.urlName).subscribe((info: any) => {
          this.listRecipes = info.meals;
          this.isCountry = true
          this.countryFlag = Object.keys(this.countryList).find(key => (this.countryList as any)[key] == this.urlName)
        });
      }
      else if(this.tagsList.includes(this.urlName)){
        this.mealService.filterByCategory(this.urlName).subscribe((info: any) => {
          this.listRecipes = info.meals;
          this.isCategory = true
        });
      }
      else if(this.urlName.length == 1)
      {
        this.mealService.filterByLetter(this.urlName).subscribe((info: any) => {
          this.listRecipes = info.meals;
          this.isLetter = true
        });
      }
      else
      {
        this.mealService.filterByIngredient(this.urlName).subscribe(
          (info:any) => {
            this.listRecipes = info.meals
            this.isIngredient = true
          }
        )
      }
      
    });
  }

}
