import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReqApiService {

  constructor(private http: HttpClient) { }

  // API KEY
  private RAPID_API_KEY = environment.API_KEY;
  
  // Ricerca film per titolo
  ricercaFilm(value: string) {
    console.log("API KEY ", this.RAPID_API_KEY)
    // URL per la richiesta
    const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?country=gb&title=${value}&series_granularity=show&show_type=movie&output_language=en`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.RAPID_API_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    };
    // Esegue la richiesta HTTP GET e ritorna l'observablr
    return this.http.get(url, options)
  }

  // Ricerca film per ID
  ricercaFilmById(id: number) {
    // URL per la richiesta
    const url = `https://streaming-availability.p.rapidapi.com/shows/${id}?output_language=en`
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.RAPID_API_KEY,
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    };
    // Esegue la richiesta e ritorna l'observable
    return this.http.get(url, options)
  }
}


