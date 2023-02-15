import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  public recipe: any
  public input:string = ''

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  public searchByName(name: string) {
    this.router.navigate([`/list/name/${name}`]);
    this.input = '';
  }





}
