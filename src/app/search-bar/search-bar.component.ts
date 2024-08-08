import { Component, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ReqApiService } from '../services/req-api.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatProgressSpinnerModule, FormsModule, MatFormFieldModule, MatInputModule, NgFor, MatButtonModule, MatDividerModule, MatIconModule, NgIf],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() xMandaDatiEvento = new EventEmitter<any>() // Emissione dell'evento con i dati dei film

  // Variabile per i dati dei film
  moviesData: object | undefined

  // Variabile per gestire lo stato del caricamento
  loading: boolean = false

  // Variabile per l'errore
  errorMessage: string | undefined

  // Servizi
  constructor(private ricerca: ReqApiService, private route: ActivatedRoute) { }

  // Gestosce oil submit del form di ricerca 
  onSubmit(form: any) {
    if (form.value.inputValue.length > 0) {
      this.errorMessage = undefined
      this.loading = true // Imposta lo stato di caricamento a true

      const title = encodeURIComponent(form.value.inputValue) //Codifica del parametro

      // Chiama il servizio per cercare il film in base al titolo
      this.ricerca.ricercaFilm(title).subscribe({
        next: (data: any) => {
          this.moviesData = data; // Assegna i dati dei film
          this.xMandaDatiEvento.emit(this.moviesData); // Emette l'evento con i dati dei film
          this.loading = false; // Imposta lo stato di caricamento a false
        },
        error: (error) => {
          this.loading = false; // Imposta lo stato di caricamento a false in caso di errore 
          this.errorMessage = error.error.message
          console.error('Errore durante il recupero dei dati', error);
        }
      });
    }
    else {
      this.errorMessage = "Inserisci il titolo del film" // Messaggio di errore
    }
  }

}

