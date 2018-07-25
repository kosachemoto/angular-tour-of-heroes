import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { };

  ngOnInit() {
    this.getHero();
  };

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}
