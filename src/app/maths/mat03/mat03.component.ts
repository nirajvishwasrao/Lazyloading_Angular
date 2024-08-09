import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mat03',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mat03.component.html',
  styleUrl: './mat03.component.css'
})
export class MAT03Component {
  answer: string | null = null; 
  r:boolean=false;
  w:boolean=false;
  circlecolor:string="#d9d9d9"
  circlecolorinside:string="#d9d9d9"
  constructor(private router: Router) {}
  onclick(Answer:string){
 
  console.log("onclick function call")
  this.answer=Answer
  console.log(this.answer)
  if(this.answer=="outside"){
    this.r=false
    this.w=true
    this.circlecolorinside="#d9d9d9"

    this.circlecolor="red"
  }
  else if(this.answer=="inside"){
      this.w=false
      this.r=true
     
       this.circlecolor="#d9d9d9"

       this.circlecolorinside="green"
  }
 }
}
