import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlockList } from 'node:net';
@Component({
  selector: 'app-mat04',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mat04.component.html',
  styleUrl: './mat04.component.css'
})



export class MAT04Component {

  r:boolean=false
  w:boolean=false

  selectedColor: string = 'white';


  rightanswer1:boolean=false
  rightanswer2:boolean=false

  drowcircle1: string = "white"
  drowcircle2: string = "white"
  drowcircle3: string = "white"
  drowcircle4: string = "white"

  objectnumberhover: number = 0
  objectnumbermousedown: number = 0
  objectnumbermouseup: number = 0
  constructor(private router: Router) { }


  onhover(option: number) {
    console.log("hover function call")
    this.objectnumberhover = option
    console.log(this.objectnumberhover)
    // this.drowcircle1
    // this.drowcircle1="black"
  }
  mouseclick(option: number) {
    console.log("mouseclick function call")
    this.objectnumbermousedown = option
    console.log(this.objectnumbermousedown)
  }
  mouseup(option: number) {
    console.log("mouseup function call")
    this.objectnumbermouseup = option
    console.log(this.objectnumbermouseup)


    if (this.objectnumberhover == 1 && this.objectnumbermousedown == 1 && this.objectnumbermouseup == 1) {
      this.drowcircle2="white"
      this.drowcircle3="white"
      // this.drowcircle4="white"
        this.drowcircle1 = "green"
      this.r=false
        // this.w=true
        this.rightanswer1=true
        this.rightanswer()
    }
    else if (this.objectnumberhover == 2 && this.objectnumbermousedown == 2 && this.objectnumbermouseup == 2) {
      // this.drowcircle1="white"
      this.drowcircle3="white"
      // this.drowcircle4="white" 
        this.drowcircle2 = "red"
      this.r=false
         this.w=true
    }
    else if (this.objectnumberhover == 3 && this.objectnumbermousedown ==3 && this.objectnumbermouseup == 3) {
      // this.drowcircle1="white"
      this.drowcircle2="white"
      this.drowcircle4="white"
        this.drowcircle3 = "red"
      this.r=false
        this.w=true
    }
    else if (this.objectnumberhover == 4 && this.objectnumbermousedown ==4 && this.objectnumbermouseup == 4) {
      // this.drowcircle1="white"
      this.drowcircle2="white"
      this.drowcircle3="white"
        this.drowcircle4 = "green"
      this.w=false
      this.rightanswer2=true
        this.rightanswer()
        // this.r=true


    }


    

    }
    rightanswer(){
   if(this.rightanswer1==true && this.rightanswer2==true){
    this.r=true
   }
  }





}
