import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Eng4 } from './english4.module';

@Component({
  selector: 'app-eng5',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eng4.component.html',
  styleUrl: './eng4.component.css'
})
export class Eng4Component {

  r: boolean = false;
  w: boolean = false;

  backcolor1: string = "#FFFFFF";
  backcolor2: string = "#FFFFFF";
  backcolor3: string = "#FFFFFF";
  backcolor4: string = "#FFFFFF";




  circlecolor1: string = "#ffffff";
  circlecolor2: string = "#ffffff";
  circlecolor3: string = "#ffffff";
  circlecolor4: string = "#ffffff";


  clickedloc1: string = "";
  clickedloc2: string = "";


  selected1: string = "";
  selected2: string = "";
  index: number = 0;

  constructor() { }

  // color code for green #43f00a
  //colour code for red   #FF0000
  //puurple color  #FF0099	








  selected(rORw: string, location: string) {

    console.log("in selected")
    if (this.index == 0) {

      this.selected1 = rORw;
      this.clickedloc1 = location;
      this.index++;
      console.log("first selected" + this.clickedloc1)


      this.circlecolor1 = "#ffffff";
      this.circlecolor2 = "#ffffff";
      this.circlecolor3 = "#ffffff";
      this.circlecolor4 = "#ffffff";


      this.backcolor1 = "#FFFFFF"
      this.backcolor2 = "#FFFFFF"
      this.backcolor3 = "#FFFFFF"
      this.backcolor4 = "#FFFFFF"

      if (this.clickedloc1 === "1") {
        this.circlecolor1 = "#FF0099"
      }
      else if (this.clickedloc1 === "2") {
        this.circlecolor2 = "#FF0099"

      }
      else if (this.clickedloc1 === "3") {
        this.circlecolor3 = "#FF0099"

      }
      else if (this.clickedloc1 === "4") {
        this.circlecolor4 = "#FF0099"

      }



    }

    /////    /////    /////    /////    /////    /////    /////    /////    /////    /////
    else {
      this.selected2 = rORw;
      this.clickedloc2 = location;
      this.index = 0;
      console.log(this.selected1 + "  and we have  " + this.selected2);
      //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


      if ((this.selected1 === "r" && this.selected2 === "r") || (this.selected2 === "r" && this.selected1 === "r")) {

        this.r = true;
        this.w = false;
        console.log("right  selected")

        /////
        if ((this.clickedloc1 === "1" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor2 = "#FF0099"
          this.backcolor1 = "#43f00a"
          this.backcolor2 = "#43f00a"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "3") || (this.clickedloc1 === "3" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor3 = "#FF0099"
          this.backcolor1 = "#43f00a"
          this.backcolor3 = "#43f00a"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor1 = "#43f00a"
          this.backcolor4 = "#43f00a"
        }
        /////////////////////////////////////

        else if ((this.clickedloc1 === "2" && this.clickedloc2 === "3") || (this.clickedloc1 === "3" && this.clickedloc2 === "2")) {
          this.circlecolor2 = "#FF0099"
          this.circlecolor3 = "#FF0099"
          this.backcolor2 = "#43f00a"
          this.backcolor3 = "#43f00a"
        }
        else if ((this.clickedloc1 === "2" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "2")) {
          this.circlecolor2 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor2 = "#43f00a"
          this.backcolor4 = "#43f00a"
        }
        /////////////////////////////////////

        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "3")) {
          this.circlecolor3 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor3 = "#43f00a"
          this.backcolor4 = "#43f00a"
        }
      }
      else {
        this.w = true;
        this.r = false;
        console.log("selected  wrong ");

        /////
        if ((this.clickedloc1 === "1" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor2 = "#FF0099"
          this.backcolor1 = "#FF0000"
          this.backcolor2 = "#FF0000"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "3") || (this.clickedloc1 === "3" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor3 = "#FF0099"
          this.backcolor1 = "#FF0000"
          this.backcolor3 = "#FF0000"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "1")) {
          this.circlecolor1 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor1 = "#FF0000"
          this.backcolor4 = "#FF0000"
        }
        /////////////////////////////////////

        else if ((this.clickedloc1 === "2" && this.clickedloc2 === "3") || (this.clickedloc1 === "3" && this.clickedloc2 === "2")) {
          this.circlecolor2 = "#FF0099"
          this.circlecolor3 = "#FF0099"
          this.backcolor2 = "#FF0000"
          this.backcolor3 = "#FF0000"
        }
        else if ((this.clickedloc1 === "2" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "2")) {
          this.circlecolor2 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor2 = "#FF0000"
          this.backcolor4 = "#FF0000"
        }
        /////////////////////////////////////

        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "3")) {
          this.circlecolor3 = "#FF0099"
          this.circlecolor4 = "#FF0099"
          this.backcolor3 = "#FF0000"
          this.backcolor4 = "#FF0000"
        }
      }
    }
  }
}



// if (this.index === 0) {
//   this.selected1 = ans
//   this.index++;

//   this.backcolorsnake = "#FFFFFF";
//   this.backcolormonkey = "#FFFFFF";
//   this.backcolordog = "#FFFFFF";
//   this.backcolorswing = "#FFFFFF";

//   if ((this.selected1 === "snake")) {


//     this.snakecolor = "#FF0099	";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#ffffff";
//   }



//   else if ((this.selected1 === "dog")) {


//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#FF0099	";
//   }



//   else if ((this.selected1 === "monkey")) {


//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#FF0099	";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#ffffff";
//   }



//   else if ((this.selected1 === "swing")) {


//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#FF0099	";
//     this.dogcolor = "#ffffff";
//   }


// }


// //  //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //

// else {
//   this.selected2 = ans
//   this.index = 0;




//   if ((this.selected1 === "snake" && this.selected2 === "swing") || (this.selected2 === "snake" && this.selected1 === "swing")) {
//     this.r = true;
//     this.w = false;

//     this.snakecolor = "#FF0099	";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#FF0099	";
//     this.dogcolor = "#ffffff";


//     this.backcolorsnake = "#43f00a";
//     this.backcolorswing = "#43f00a";
//   }

//   else if ((this.selected1 === "snake" && this.selected2 === "dog") || (this.selected2 === "snake" && this.selected1 === "dog")) {
//     this.r = false;
//     this.w = true;

//     this.snakecolor = "#FF0099	";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#FF0099	";


//     this.backcolorsnake = "#FF0000";
//     this.backcolordog = "#FF0000";


//   }

//   else if ((this.selected1 === "snake" && this.selected2 === "monkey") || (this.selected2 === "snake" && this.selected1 === "monkey")) {
//     this.r = false;
//     this.w = true;

//     this.snakecolor = "#FF0099	";
//     this.monkeycolor = "#FF0099	";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#ffffff";

//     this.backcolorsnake = "#FF0000";
//     this.backcolormonkey = "#FF0000";
//   }

//   else if ((this.selected1 === "monkey" && this.selected2 === "dog") || (this.selected2 === "monkey" && this.selected1 === "dog")) {
//     this.r = false;
//     this.w = true;

//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#FF0099	";
//     this.swingcolor = "#ffffff";
//     this.dogcolor = "#FF0099	";


//     this.backcolormonkey = "#FF0000";
//     this.backcolordog = "#FF0000";
//   }

//   else if ((this.selected1 === "monkey" && this.selected2 === "swing") || (this.selected2 === "monkey" && this.selected1 === "swing")) {
//     this.r = false;
//     this.w = true;

//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#FF0099	";
//     this.swingcolor = "#FF0099	";
//     this.dogcolor = "#ffffff";


//     this.backcolormonkey = "#FF0000";
//     this.backcolorswing = "#FF0000";
//   }

//   else if ((this.selected1 === "dog" && this.selected2 === "swing") || (this.selected2 === "dog" && this.selected1 === "swing")) {
//     this.r = false;
//     this.w = true;
//     console.log("wrong ans");

//     this.snakecolor = "#ffffff";
//     this.monkeycolor = "#ffffff";
//     this.swingcolor = "#FF0099	";
//     this.dogcolor = "#FF0099	";


//     this.backcolordog = "#FF0000";
//     this.backcolorswing = "#FF0000";
//   }
// }




