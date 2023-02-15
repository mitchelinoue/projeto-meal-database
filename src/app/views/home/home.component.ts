import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public countryList = { 
    ar: 'Argentinian', 
    ca: 'Canadian', 
    cn: 'Chinese', 
    dz: 'Algerian', 
    eg: 'Egyptian', 
    es: 'Spanish', 
    fr: 'French', 
    gb: 'British', 
    gr: 'Greek', 
    hr: 'Croatian', 
    ie: 'Irish', 
    in: 'Indian', 
    it: 'Italian', 
    jm: 'Jamaican', 
    jp: 'Japanese', 
    kn: 'Kenyan', 
    ma: 'Moroccan', 
    mx: 'Mexican', 
    my: 'Malaysian', 
    nl: 'Dutch', 
    no: 'Norwegian', 
    pl: 'Polish', 
    pt: 'Portuguese', 
    ru: 'Russian', 
    sa: 'Saudi Arabian', 
    sk: 'Slovakian', 
    sy: 'Syrian', 
    th: 'Thai', 
    tn: 'Tunisian', 
    tr: 'Turkish', 
    us: 'American', 
    vn: 'Vietnamese',
  }

  public alphaList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  constructor(
    private router: Router,
  ){} 

  ngOnInit(): void {
  }

  public searchByCountry(name: string) {
    this.router.navigate([`/list/country/${name}`]);
  }

  public searchByLetter(letter: string) {
    this.router.navigate([`/list/country/${letter}`]);
  }

}
