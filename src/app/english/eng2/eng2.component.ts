import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-eng3',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eng2.component.html',
  styleUrl: './eng2.component.css'
})
export class Eng2Component {

  constructor() {}
    r: boolean = false;


  w: boolean = false;

  // white color
  color_1: string = '#ffffff';
  color_2: string = '#ffffff';
  color_3: string = '#ffffff';

  //black color
  color_1_latter: string = '#000000';
  color_2_latter: string = '#000000';
  color_3_latter: string = '#000000';

  // green color #43f00a
  // red color #FF0000 




  

  


  sound(ans: string, boxno: string) {
    console.log("method called")
    if (ans === "true") {

      if (boxno === "1") {
        this.color_1 = "#43f00a"; this.color_1_latter = "#ffffff"


        this.color_2 = "#ffffff"; this.color_2_latter = '#000000';
        this.color_3 = "#ffffff"; this.color_3_latter = "#000000";
        this.r = true;
        this.w = false;

      }
      else if (boxno === "2") {
        this.color_2 = "#43f00a"; this.color_2_latter = "#ffffff"


        this.color_1 = "#ffffff"; this.color_1_latter = '#000000';
        this.color_3 = "#ffffff"; this.color_3_latter = "#000000";
        this.r = true;
        this.w = false;

      }
      else if (boxno === "3") {
        this.color_3 = "#43f00a"; this.color_3_latter = "#ffffff"


        this.color_1 = "#ffffff"; this.color_1_latter = '#000000';
        this.color_2 = "#ffffff"; this.color_2_latter = "#000000";
        this.r = true;
        this.w = false;

      }

    }


    else if (ans === "false") {
      if (boxno === "1") {
        this.color_1 = "#FF0000"; this.color_1_latter = "#ffffff"


        this.color_2 = "#ffffff"; this.color_2_latter = '#000000';
        this.color_3 = "#ffffff"; this.color_3_latter = "#000000";
        this.r = false;
        this.w = true;

      }
      else if (boxno === "2") {
        this.color_2 = "#FF0000"; this.color_2_latter = "#ffffff"


        this.color_1 = "#ffffff"; this.color_1_latter = '#000000';
        this.color_3 = "#ffffff"; this.color_3_latter = "#000000";
        this.r = false;
        this.w = true;

      }
      else if (boxno === "3") {
        this.color_3 = "#FF0000"; this.color_3_latter = "#ffffff"


        this.color_1 = "#ffffff"; this.color_1_latter = '#000000';
        this.color_2 = "#ffffff"; this.color_2_latter = "#000000";
        this.r = false;
        this.w = true;


      }
    }











  }










}
