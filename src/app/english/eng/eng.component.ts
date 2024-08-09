import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Question } from './question.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-eng',
  standalone: true,
  imports: [RouterLink, RouterOutlet,NgFor],
  templateUrl: './eng.component.html',
  // styleUrl: './eng.component.css',

})
export class EngComponent {


  color: string[] = [
    'bg-primary',
    'bg-warning',
    'bg-danger',
    'bg-success'
  ];

   // creating the array of objects
   qset: Array<Question> = [
  { qid: 1, qname: "eng 01", desc:"/eng/1" },
  { qid: 2, qname: "eng 02", desc:"/eng/2" },
  { qid: 3, qname: "eng 03", desc:"/eng/3" },
  { qid: 4, qname: "eng 04", desc:"/eng/4" },
  { qid: 5, qname: "eng 05", desc:"/eng/5" },
  // { qid: 6, qname: "eng 04", desc:"/eng/6" },
];



  currentq: number = 0;
  nextq: string = '';
  constructor(private router: Router) { }


  gonext() {
    if (this.currentq < 5) {
      this.currentq++;
      this.nextq = this.currentq.toString();
    }
    else {
      console.log("you are on last question");
    }
  }

  goprivious() {
    if (this.currentq > 1) {
      this.currentq--;
      this.nextq = this.currentq.toString();
    }
    else {
      console.log("you are on first question");
    }
  }

  currentindex(currnetQ: number) {
    this.currentq = currnetQ;
    console.log("in currentindex " + this.currentq)

  }

  gotoPage() {
    this.router.navigate([`/eng/${this.nextq}`]);
  }



}
