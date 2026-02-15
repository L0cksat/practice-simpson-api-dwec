import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-characters-detail',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './characters-detail.html',
  styleUrl: './characters-detail.css',
})
export class CharactersDetailComponent {
  character$!: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router
  ){
    this.character$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'))
        return this.charactersService.getById(id)
      }),

      map((character: any) => {
        if ( character.phrases && character.phrases.length > 0){
          const randomIndex = Math.floor(Math.random() * character.phrases.length)
          character.randomPhrase = character.phrases[randomIndex]
        } else {
          character.randomPhrase = "No quotes available for this character."
        }
        return character
      })
    )
  }
}
