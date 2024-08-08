import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NgFor, NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  img: number;
  info: string;
}

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatListModule, MatTableModule, MatDividerModule, MatIconModule, MatButtonModule, NgFor, RouterModule, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnChanges {
  displayedColumns: string[] = ['img', 'name', 'info'];
  dataSource: PeriodicElement[] = [];

  @Input() movieData: any

  // ngOnInit(): void {
  //   this.dataSource = this.movieData;
  // }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieData'] && changes['movieData'].currentValue) {
      this.dataSource = changes['movieData'].currentValue;
    }
  }
}
