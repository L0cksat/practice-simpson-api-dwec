import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../../services/characters';

@Component({
  selector: 'app-characters-list',
  imports: [RouterLink],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.css',
})
export class CharactersListComponent {

  characters: any[] = []

  constructor(private charactersService: CharactersService){
    this.charactersService.getAll().subscribe(data =>{console.log("Here is the API data", data), this.characters = data.results})
  }
}
