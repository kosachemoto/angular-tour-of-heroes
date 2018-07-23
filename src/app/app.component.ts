import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {

  }

  title = 'Heroes Of The Storm';

  heroes: Hero[];
  selectedHero: Hero;

  // Нужны некоторые пояснения по данному модулю
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
