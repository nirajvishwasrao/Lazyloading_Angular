import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mar01',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mar01.component.html',
  styleUrl: './mar01.component.css'
})
export class MAR01Component {
  w:boolean=false
  r:boolean=false
  warning:boolean=false
  
  
  circlecolor :string ="white"
  stroke :string="white"

  pickedcolor:string=""
  
  mouseover : boolean=false
  
  constructor(private router: Router) {}
  
  pickcolor(color: string){
     this.pickedcolor=color
     console.log(this.pickedcolor)
     this.stroke="black"
     
  }
  
  onMouseOver(){
  this.mouseover=true
  }
  
  paint(){
    console.log("mousedown function call")
    console.log("true or false",this.pickedcolor!="" &&  this.mouseover==true)
    if(this.pickedcolor!="" &&  this.mouseover==true){
      this.circlecolor=this.pickedcolor
      console.log(this.circlecolor)
      this.warning=false
      if(this.circlecolor=="orange"){
        this.w=false
        this.r=true
  
      }
      else{
      
        this.r=false
        this.w=true
      }
    }
    else{
      this.warning=true
    }
  }
  
  onmouseout(){
    console.log("Mouseout functio called");
    // document.getElementById("element").classList.add("custom-cursor");
  
  }
   
  
  
  
  
  
  
  
    nextPage(){
      this.router.navigate(['/mat02']);
    }
    
    previousPage(){
      // this.router.navigate(['/mat02']);
    }
  }

