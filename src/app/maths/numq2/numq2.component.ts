import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-numq2',
  standalone: true,
  imports: [NgIf],
  templateUrl: './numq2.component.html',
  styleUrl: './numq2.component.css'
})
export class Numq2Component {
  w:boolean=false
  r:boolean=false
  selectedanswer:string=""

  boxcolorright:string="#ffffff"
  // boxcolorwrong1:string="#ffffff"
  // boxcolorwrong2:string="#ffffff"
  chaircolor:string="#000000     "
  constructor(private router: Router) {}
  selctanswer(Answer:string){
    console.log("Select answer function called")
    this.selectedanswer=Answer
    console.log(this.selectedanswer)
    if(this.selectedanswer=="right"){
      this.w=false
      this.r=true
      this.boxcolorright="#008000"
      this.chaircolor="#008001"
    }
    else{
      this.r=false
      this.w=true
      this.chaircolor="#000000"
      // this.boxcolorwrong1="#EF0000"
    }
  }
  nextPage(){
    this.router.navigate(['/mat02']);
  }
  
  previousPage(){
    // this.router.navigate(['/mat02']);
  }
}
