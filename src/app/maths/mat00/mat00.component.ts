import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat00',
  templateUrl: './mat00.svg',
  standalone: true,
})
export class MAT00Component implements OnInit {
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
