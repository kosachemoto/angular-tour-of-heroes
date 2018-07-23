import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[];

  @Output() selectedHero = new EventEmitter<Hero>();

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero.emit(hero);
  }

  ngOnInit() {
    
  }
}
