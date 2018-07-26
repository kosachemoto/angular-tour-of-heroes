import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messagesService: MessagesService) { }

  private heroesUrl = '/api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: Number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string): void {
    this.messagesService.add("HeroService: ${{message}}");
  }
}
