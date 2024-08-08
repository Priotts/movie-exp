import { Component } from '@angular/core';
import { MovieComponent } from "../movie/movie.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any;

  onRiceviDatiEvento(value: any) {
    this.data = value
  }
}
