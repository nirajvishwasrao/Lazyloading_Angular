import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
;

@Component({
  selector: 'app-eng4',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eng3.component.html',
  styleUrl: './eng3.component.css'
})
export class Eng3Component  {

  r: boolean = false;
  w: boolean = false;

  greencolor: string = "#ffffff";
  redcolor: string = "#ffffff"

  ticcolorgreen: string = "#000000";
  ticcolorred: string = "#000000";




 
  

  

  constructor() {}


  anstik(ans: string) {

    if (ans === "green") {
      this.greencolor = "#008000";
      this.redcolor = "#ffffff";

      this.ticcolorgreen = "#ffffff";
      this.ticcolorred = "#000000";

      this.r = true;
      this.w = false;
    }

    else {
      this.greencolor = "#ffffff";
      this.redcolor = "#FF0000";

      this.ticcolorgreen = "#000000";
      this.ticcolorred = "#ffffff";
      this.r = false;
      this.w = true;
    }
  }
}


