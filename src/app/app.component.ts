import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(public messagesService: MessagesService, private heroService: HeroService) {

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
    this.messagesService.add("HeroService: hero " + hero.name + " was selected");
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
