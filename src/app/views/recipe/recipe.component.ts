import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{

  public dataSource: any
  public img: string = ''
  public instruction: string[] = []
  public name: string = ''
  public id: string = ''
  public category : string = ''
  public area: string = ''
  public tags: string = ''
  public video: string = ''
  public source: string = ''
  public videoId: any
  public imgUrl: string = 'https://www.themealdb.com/images/ingredients/'


  public regexInstruction =  /[^\.!\?]+[\.!\?]+/g
  public regexVideo = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

  public ingredientImg: string[] = []
  public ingredientQnt: string[] = []
  public ingredients: {} = {}

  public apiLoaded = false;

  constructor(
    private http: HttpClient,
    private mealService: MealService,
    private router: Router,
    private route: ActivatedRoute,
  ){} 

  ngOnInit(): void {
    this.initializePage();
  }

  private initializePage(): void{
    const id = this.route.snapshot.params["id"];

    this.mealService.findRecipeById(id).subscribe(
      (info:any) => {
        this.dataSource = info.meals[0]
        console.log(this.dataSource)

        this.img = this.dataSource.strMealThumb
        this.instruction = (this.dataSource.strInstructions).match(this.regexInstruction);
        this.name = this.dataSource.strMeal
        this.id = this.dataSource.idMeal
        this.category = this.dataSource.strCategory
        this.area = this.dataSource.strArea
        this.tags = this.dataSource.strTags
        this.video = this.dataSource.strYoutube
        this.source = this.dataSource.strSource
        

        this.ingredientImg = Object.keys(this.dataSource).filter( key => key.startsWith("strIngredient") && this.dataSource[key] != "" && this.dataSource[key] != null).map(key => this.dataSource[key])

        this.ingredientQnt = Object.keys(this.dataSource).filter( key => key.startsWith("strMeasure") && this.dataSource[key] != "" && this.dataSource[key] != null).map(key => this.dataSource[key])

        this.ingredients = Object.fromEntries(this.ingredientImg.map((_: any, i: any) => [this.ingredientImg[i], this.ingredientQnt[i]]))
        
        if (!this.apiLoaded) {
          const tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          document.body.appendChild(tag);
          const params = new URL(this.video).searchParams;
          const vid = params.get('v');
          if (vid) {
            this.videoId = vid;
          }
          this.apiLoaded = true;
        }
      } 
    )
  }





}
