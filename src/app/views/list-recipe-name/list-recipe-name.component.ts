import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-list-recipe-name',
  templateUrl: './list-recipe-name.component.html',
  styleUrls: ['./list-recipe-name.component.css'],
})
export class ListRecipeNameComponent implements OnInit {
  public recipeName: string = '';
  public listRecipes: Meal[] = [];

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeList();
  }

  public initializeList() {
    this.route.paramMap.subscribe((params: any) => {
      this.recipeName = params.get('name');
      this.mealService
        .findRecipeByName(this.recipeName)
        .subscribe((info: any) => {
          this.listRecipes = info.meals;
          console.log(JSON.stringify(this.listRecipes));
        });
    });
  }
}
