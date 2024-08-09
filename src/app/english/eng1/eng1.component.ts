import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-eng2',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eng1.component.html',
  styleUrl: './eng1.component.css'
})

export class Eng1Component     {
  r: boolean = false;
  w: boolean = false;


  color_1: string = '#ffffff';
  color_2: string = "#ffffff";
  color_3: string = "#ffffff"



  
  // Adjust properties based on your actual use case or what your application expects

  


  constructor() {}



  

  selected(tOrf: string, positon: string) {

    //////

    if (tOrf === "true") {

      this.r = true;
      this.w = false;

      if (positon == "1") {
        this.color_1 = "#43f00a";

      }
      else if (positon == "2") {
        this.color_2 = "#43f00a";

      }
      else if (positon == "3") {
        this.color_3 = "#43f00a";

      }

      this.r = true;
      this.w = false;
    }

    //

    else if (tOrf === "true") {

      this.r = true;
      this.w = false;

      if (positon == "1") {
        this.color_1 = "#43f00a";

      }
      else if (positon == "2") {
        this.color_2 = "#43f00a";

      }
      else if (positon == "3") {
        this.color_3 = "#43f00a";

      }

    }

    //

    else if (tOrf === "false") {

      this.r = false;
      this.w = true;

      if (positon == "1") {
        this.color_1 = "#FF0000";

      }
      else if (positon == "2") {
        this.color_2 = "#FF0000";

      }
      else if (positon == "3") {
        this.color_3 = "#FF0000";

      }

    }

    //////
  }








}



