import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "movie/:id", component: MovieDetailsComponent },
];
