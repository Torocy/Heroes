import { Injectable } from '@angular/core';
import { Hero} from './heroes';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    //send the message after fetching the heroes
    this.messageService.add('HeroService:fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
