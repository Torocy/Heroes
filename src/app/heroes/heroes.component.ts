import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1,
    name :'Torocy'
  };

  //selectedHero : Hero;
  heroes: Hero[];

  constructor( private heroService : HeroService) { }

  ngOnInit() {
    //call the function.
    this.getHeroes();
  }
  
  //onSelect(hero: Hero): void {
    //this.selectedHero = hero;
  //s}
  //function to retrieve the heroes from the service.
  getHeroes(): void{
    //subscribe in heroes component.
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); 
  }

}
