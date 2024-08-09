import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat02',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mat02.component.html',
  styleUrl: './mat02.component.css'
})
export class MAT02Component {


  w:boolean=false
  r:boolean=false
  Answer:string=""

 boxcolorright:String="white"
 boxcolorwrong1:String="white"
 boxcolorwrong2:String="white"
 boxcolorwrong3:String="white"

  constructor(private router: Router) {}
onclick(answer:string){
  this.Answer=answer
  console.log(this.Answer)
  if(this.Answer=="elephant"){
    this.w=false
    this.r=true

     this.boxcolorwrong1="white"
     this.boxcolorwrong2="white"
     this.boxcolorwrong3="white"
     
     this.boxcolorright="green"

  }
  else if(this.Answer=="dog"){
    this.r=false
    this.w=true

         this.boxcolorwrong2="white"
         this.boxcolorwrong3="white"
         this.boxcolorright="white"

         this.boxcolorwrong1="red"
  }
  else if(this.Answer=="giraffe"){

    this.r=false
    this.w=true

    this.boxcolorwrong1="white"
    this.boxcolorwrong3="white"
    this.boxcolorright="white"

    this.boxcolorwrong2="red"
}
else if(this.Answer=="monkey"){

  this.r=false
  this.w=true

  this.boxcolorwrong1="white"
  this.boxcolorwrong2="white"
  this.boxcolorright="white"

  this.boxcolorwrong3="red"
}

}


}




