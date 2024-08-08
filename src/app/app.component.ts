import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, NavbarComponent, MovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-explorer';
  
  // data: any;

  // onRiceviDatiEvento(value: any) {
  //   this.data = value
  //   console.log("data", this.data)
  // }
}

