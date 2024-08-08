import { Component, ChangeDetectionStrategy, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReqApiService } from '../services/req-api.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, NgIf, RouterModule], changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})

export class MovieDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute)

  // Variabili
  movieId = 0 // Variabile per memorizzare l'ID del film
  result: any// Variabile per memorizzare i dettagli del film
  loading: boolean = false
  // Variabile per l'errore
  errorMessage: string | undefined

  constructor(private ricercaFilm: ReqApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.params['id']) // Recupera l'ID del film 
    this.loading = true
    
    // Chiamatas API per ottenere i dettagli del film passando l'id
    this.ricercaFilm.ricercaFilmById(this.movieId).subscribe({
      next: (data: any) => {
        this.result = data; // Assegna i dati ricevuti alla variabile result
        this.loading = false
        this.cdr.markForCheck(); //Ricontrolliamo il componente 
      },
      error: (error) => {
        console.error('Errore durante il recupero dei dati', error);
        this.errorMessage = error.error.message
        console.error(this.errorMessage)
        this.loading = false
        this.cdr.markForCheck();
      }
    });
  }

} 
