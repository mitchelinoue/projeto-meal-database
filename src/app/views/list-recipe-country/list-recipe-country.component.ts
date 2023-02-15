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

  public countryName: string = ''
  public listRecipes: Meal[] = []

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.initializeList()
  }

  public initializeList() {
    this.route.paramMap.subscribe((params: any) => {
      this.countryName = params.get('country')

      if(this.countryName.length > 1){
        this.mealService.filterByCountry(this.countryName).subscribe((info: any) => {
          this.listRecipes = info.meals;
        });
      }
      else
      {
        this.mealService.filterByLetter(this.countryName).subscribe((info: any) => {
          this.listRecipes = info.meals;
        });
      }
      
    });
  }

}
