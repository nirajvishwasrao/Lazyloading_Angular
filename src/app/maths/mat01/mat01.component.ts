import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat01',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mat01.component.html',
  styleUrl: './mat01.component.css'
})
export class MAT01Component {
  w:boolean=false
  r:boolean=false
  selectedanswer:string=""

  boxcolorright:string="#ffffff"
  boxcolorwrong1:string="#ffffff"
  boxcolorwrong2:string="#ffffff"
  chaircolor:string="#000000"
  

  
  constructor(private router: Router) {}
  selctanswer(Answer:string){
    console.log("Select answer function called")
    this.selectedanswer=Answer
    console.log(this.selectedanswer)
    if(this.selectedanswer=="right"){
      this.w=false
      this.r=true
          this.boxcolorwrong1="#ffffff" //reset another box color to white
          this.boxcolorwrong2="#ffffff" //reset another box color to white
      this.boxcolorright="#008000"
      this.chaircolor="#008001"
    }
    else if(this.selectedanswer=="wrong1"){
      this.r=false
      this.w=true
      this.chaircolor="#000000"
          this.boxcolorright="#ffffff"
          this.boxcolorwrong2="#ffffff"  //reset another box color to white
      this.boxcolorwrong1="#EF0000"
    }
    else if (this.selectedanswer=="wrong2"){
      this.r=false
      this.w=true
      this.chaircolor="#000000"
           this.boxcolorright="#ffffff"
           this.boxcolorwrong1="#ffffff" //reset another box color to white
      this.boxcolorwrong2="#EF0000"
    }
  } 
  }
   
  
  
  
  
  
  
  
 

