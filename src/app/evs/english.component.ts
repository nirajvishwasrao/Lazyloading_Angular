import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english',
  templateUrl: './english.svg',
  standalone: true,
})
export class EnglishComponent implements OnInit {
  colors: string[] = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'black',
  ];

  strokeColor: string | undefined;

  constructor() {}

  getRandomColor() {
    const randomNumber = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomNumber];
  }

  ngOnInit(): void {
    this.strokeColor = this.getRandomColor();
  }
}
