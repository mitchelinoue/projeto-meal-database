import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-list-recipe-ingredient',
  templateUrl: './list-recipe-ingredient.component.html',
  styleUrls: ['./list-recipe-ingredient.component.css']
})
export class ListRecipeIngredientComponent implements OnInit{

  public listMeals:any
  public ingredient: string = ''
  public imgUrl: string = 'https://www.themealdb.com/images/ingredients/'

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
  ){} 

  ngOnInit(): void {
    this.initializeList()

  }

  private initializeList(){
    this.ingredient = this.route.snapshot.params['ingredient']

    this.mealService.filterByIngredient(this.ingredient).subscribe(
      (info:any) => {
        this.listMeals = info.meals
        console.log(this.listMeals)
      }
    )
  }

}
