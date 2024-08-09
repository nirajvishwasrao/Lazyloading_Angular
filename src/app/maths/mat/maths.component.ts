import { NgIf } from '@angular/common';
import {NgFor} from '@angular/common';
import {Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import {Question} from "./question.model";

@Component({
  selector: 'app-maths',
  templateUrl: './maths.html',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgIf, NgFor]
})
export class MathsComponent implements OnInit {


  color: string[] = [
    'bg-primary',
    'bg-warning',
    'bg-danger',
    'bg-success'
  ];

   // creating the array of objects
   qset: Array<Question> = [
  { qid: "mat01", qname: "MAT 01", desc:"/maths/mat01" },
  { qid: "mat02", qname: "MAT 02", desc:"/maths/mat02" },
  { qid: "mat03", qname: "MAT 03", desc:"/maths/mat03" },
  { qid: "mat04", qname: "MAT 04", desc:"/maths/mat04" },
  { qid: "mat03", qname: "MAT 03", desc:"/maths/mat03" },
  { qid: "mat04", qname: "MAT 04", desc:"/maths/mat04" },
];


  displayquestionno:boolean=false;
  qid:string="";
  route:string="/maths/mat";

  constructor(private router: Router) {}
  ngOnInit(): void {
  
  }


  Questionno(QNO:string){
      this.displayquestionno=true
      console.log(this.displayquestionno)
      this.qid=QNO;
      console.log(typeof(this.qid))
      this.route="/maths/mat"
      this.route=this.route+this.qid;
      console.log(this.qid);
      this.router.navigate([this.route]);
}



share(){
  console.log("share function call")
}
save(){
  console.log("save function call")
}

Previous(){
  console.log("Previous function call")
  // if(this.qno>1){

  
  //   this.qno-=1
  //   this.route="/maths/mat"
  //   this.route=this.route+this.qno
  //   this.router.navigate([this.route]);
  // }
}
Next(){
  console.log("next function call")
  // if(this.qno<5){

  
  // this.qno+=1
  // this.route="/maths/mat"
  // this.route=this.route+this.qno
  // this.router.navigate([this.route]);
// }
}






  // getRandomColor() {
  //   const randomNumber = Math.floor(Math.random() * this.colors.length);
  //   return this.colors[randomNumber];
  // }

  // ngOnInit(): void {
  //   this.strokeColor = this.getRandomColor();
  // }
}
