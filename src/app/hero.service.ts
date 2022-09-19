import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';

import { Hero }           from './hero'
import { HEROES }         from './mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  constructor(
    private http:           HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!
    // idを埋め込むためのJSのテンプレートリテラルを定義するため、``(バッククォート)を用いる
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}

private log(message: string) {
  this.messageService.add(`HeroService: ${message}`)
}