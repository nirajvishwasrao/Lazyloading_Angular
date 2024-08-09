import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-eng6',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eng5.component.html',
  styleUrl: './eng5.component.css'
})
export class Eng5Component  {
 
  constructor() {} 
 
  r: boolean = false;
  w: boolean = false;

  clickedloc1: string = '';
  clickedloc2: string = '';

  index: number = 0;
  selected1: string = ""
  selected2: string = ""


  // perple color
  squrecolor1: string = "#5e17eb";
  squrecolor2: string = "#5e17eb";
  squrecolor3: string = "#5e17eb";

  squrecolor4: string = "#5e17eb";
  squrecolor5: string = "#5e17eb";
  squrecolor6: string = "#5e17eb";


  //white color
  lineFrom_1_2: string = "#FFFFFF"
  lineFrom_1_4: string = "#FFFFFF"
  lineFrom_1_6: string = "#FFFFFF"

  lineFrom_3_2: string = "#FFFFFF"
  lineFrom_3_4: string = "#FFFFFF"
  lineFrom_3_6: string = "#FFFFFF"

  lineFrom_5_2: string = "#FFFFFF"
  lineFrom_5_4: string = "#FFFFFF"
  lineFrom_5_6: string = "#FFFFFF"


  // 1  2
  // 3  4
  // 5  6
 
  ClickedAns(tORf: string, location: string) {

    console.log("in selected")


    if (this.index == 0) {

      this.clickedloc1 = location;
      this.selected1 = tORf;
      this.index++;
      console.log("first selected" + this.clickedloc1)

      if (this.clickedloc1 === "1") {
        this.squrecolor1 = "#fb7b7b"
      }
      else if (this.clickedloc1 === "2") {
        this.squrecolor2 = "#fb7b7b"
      }
      else if (this.clickedloc1 === "3") {
        this.squrecolor3 = "#fb7b7b"
      }
      else if (this.clickedloc1 === "4") {
        this.squrecolor4 = "#fb7b7b"
      }
      else if (this.clickedloc1 === "5") {
        this.squrecolor5 = "#fb7b7b"
      }
      else if (this.clickedloc1 === "6") {
        this.squrecolor6 = "#fb7b7b"

      }
    }

    /////    /////    /////    /////    /////    /////    /////    /////    /////    /////
    else {
      this.selected2 = tORf;
      this.clickedloc2 = location;
      this.index = 0;
      console.log(this.selected1 + "  and we have  " + this.selected2);
      //
      if ((this.selected1 === "id_1" && this.selected2 === "id_1") || (this.selected2 === "id_1" && this.selected1 === "id_1") ||
        (this.selected1 === "id_2" && this.selected2 === "id_2") || (this.selected2 === "id_2" && this.selected1 === "id_2") ||
        (this.selected1 === "id_3" && this.selected2 === "id_3") || (this.selected2 === "id_3" && this.selected1 === "id_3")) {

        this.r = true;
        this.w = false;
        console.log("right  selected")
        //
        if ((this.clickedloc1 === "1" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#fb7b7b"
          this.squrecolor2 = "#fb7b7b"
          this.lineFrom_1_2 = "#43f00a"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#fb7b7b"
          this.squrecolor4 = "#fb7b7b"
          this.lineFrom_1_4 = "#43f00a"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#fb7b7b"
          this.squrecolor6 = "#fb7b7b"
          this.lineFrom_1_6 = "#43f00a"
        }

        ////////////////////////////////////

        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "3")) {
          console.log('snake to snake')
          this.squrecolor3 = "#fb7b7b"
          this.squrecolor2 = "#fb7b7b"
          this.lineFrom_3_2 = "#43f00a"
        }
        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#fb7b7b"
          this.squrecolor4 = "#fb7b7b"
          this.lineFrom_3_4 = "#43f00a"
        }
        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#fb7b7b"
          this.squrecolor6 = "#fb7b7b"
          this.lineFrom_3_6 = "#43f00a"
        }

        ////////////////////////////////////

        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#fb7b7b"
          this.squrecolor2 = "#fb7b7b"
          this.lineFrom_5_2 = "#43f00a"
        }
        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#fb7b7b"
          this.squrecolor4 = "#fb7b7b"
          this.lineFrom_5_4 = "#43f00a"
        }
        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#fb7b7b"
          this.squrecolor6 = "#fb7b7b"
          this.lineFrom_5_6 = "#43f00a"
        }

      }

      //------------------------------------------------------------------------------------------------------------------------------------

      else {

        this.w = true;
        this.r = false;
        console.log("selected are wrong ");

        if ((this.clickedloc1 === "1" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#5e17eb"
          this.squrecolor2 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#5e17eb"
          this.squrecolor4 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#5e17eb"
          this.squrecolor6 = "#5e17eb"
        }

        ////////////////////////////////////

        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#5e17eb"
          this.squrecolor2 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#5e17eb"
          this.squrecolor4 = "#5e17eb"
        }

        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#5e17eb"
          this.squrecolor6 = "#5e17eb"
        }

        ////////////////////////////////////

        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "2") || (this.clickedloc1 === "2" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#5e17eb"
          this.squrecolor2 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#5e17eb"
          this.squrecolor4 = "#5e17eb"
        }

        else if ((this.clickedloc1 === "5" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "5")) {
          this.squrecolor5 = "#5e17eb"
          this.squrecolor6 = "#5e17eb"
        }


        // code for same side selection cenario
        //image side
        if ((this.clickedloc1 === "1" && this.clickedloc2 === "3") || (this.clickedloc1 === "3" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#5e17eb"
          this.squrecolor3 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "1" && this.clickedloc2 === "5") || (this.clickedloc1 === "5" && this.clickedloc2 === "1")) {
          this.squrecolor1 = "#5e17eb"
          this.squrecolor5 = "#5e17eb"
        }
      
        else if ((this.clickedloc1 === "3" && this.clickedloc2 === "5") || (this.clickedloc1 === "5" && this.clickedloc2 === "3")) {
          this.squrecolor3 = "#5e17eb"
          this.squrecolor5 = "#5e17eb"
        }

        // text side

        if ((this.clickedloc1 === "2" && this.clickedloc2 === "4") || (this.clickedloc1 === "4" && this.clickedloc2 === "2")) {
          this.squrecolor2 = "#5e17eb"
          this.squrecolor4 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "2" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "2")) {
          this.squrecolor2 = "#5e17eb"
          this.squrecolor6 = "#5e17eb"
        }
        else if ((this.clickedloc1 === "4" && this.clickedloc2 === "6") || (this.clickedloc1 === "6" && this.clickedloc2 === "4")) {
          this.squrecolor4 = "#5e17eb"
          this.squrecolor6 = "#5e17eb"
        }
      

      }
    }



















  }











}
