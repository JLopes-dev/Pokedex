import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  private listaPokemon: any[] = []
  private allNames: string[] = []
  private allPokeInfos: string[] = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(data => {
      this.listaPokemon.push(...data.results)
      this.listaPokemon.forEach(pokemon => this.allNames.push(pokemon.name))
      this.listaPokemon.forEach(pokemon => this.apiService.getOnePokemon(pokemon.url)
      .subscribe(data => {
        this.allPokeInfos.push(data.sprites.back_default)
      }))
      console.log(this.allPokeInfos);
    })
  }
}
