import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-mat05',
  standalone: true,
  imports: [NgIf],
  templateUrl: './mat05.component.html',
  styleUrl: './mat05.component.css'
})
export class Mat05Component {
  r: boolean = false
  w: boolean = false

  display1: string = "display: none;"
  display2: string = "display: none;"
  display3: string = "display: none;"
  display4: string = "display: none;"
  display5: string = "display: none;"
  display6: string = "display: none;"


  color1:string="#ff3131"
  color2:string="#ff3131"
  color3:string="#ff313f"
  color4:string="#ff3131"
  color5:string="#ff3131"
  color6:string="#ff3131"



  counter: number = 0

  count1: boolean = false
  count2: boolean = false
  count3: boolean = false
  count4: boolean = false
  count5: boolean = false
  count6: boolean = false

  answer: number = 0
  onclick(option: number) {
    console.log("onclick function called")
    // this.display5="display: block"
    this.answer = option
    console.log(this.answer)

    // console.log("compaere",this.answer == 1 && this.count1==false)
    if (this.answer == 1 && this.count1==false) {
    
        this.counter += 1;
        this.color1="green"
        this.count1=true
        this.displaycount()
    

    }
    else if (this.answer == 2 && this.count2==false) {
      console.log("2 calling")
        this.counter += 1;
        this.color2="green"
        this.count2=true
        this.displaycount()
      

    }
    else if (this.answer == 3 && this.count3==false) {
      console.log("3 calling")
        this.counter += 1;
        this.color3="green"
        this.count3=true
        this.displaycount()
    

    }

    else if (this.answer == 4 && this.count4==false) {
        console.log(this.answer == 4 && this.count4==false)
        this.counter += 1;
        this.color4="green"
        this.count4=true
        this.displaycount()
      

    }
    
    else if (this.answer == 5 && this.count5==false ) {
 
        this.counter += 1;
        this.color5="green"
        this.count5=true
        this.displaycount()
     

    }

    else if (this.answer == 6 && this.count6==false ) {
    
        this.counter += 1;
        this.color6="green"
        this.count6=true
        this.displaycount()
      

    }




  }

  displaycount() {
    if (this.counter == 1) {
      this.display2 = "display: none;"
      this.display3 = "display: none;"
      this.display4 = "display: none;"
      this.display5 = "display: none;"
      this.display6 = "display: none;"

      this.display1 = "display: block"
      // this.count1=true
      console.log("count1",this.count1)
    }
    else if (this.counter == 2) {

      this.display1 = "display: none;"
      this.display3 = "display: none;"
      this.display4 = "display: none;"
      this.display5 = "display: none;"
      this.display6 = "display: none;"

      this.display2 = "display: block"

      // this.count2=true
      console.log("count2",this.count2)
    }
    else if (this.counter == 3) {

      this.display1 = "display: none;"
      this.display2 = "display: none;"
      this.display4 = "display: none;"
      this.display5 = "display: none;"
      this.display6 = "display: none;"

      this.display3 = "display: block"
      // this.count3=true
      console.log("count3",this.count3)
    }
    else if (this.counter == 4) {

      this.display1 = "display: none;"
      this.display2 = "display: none;"
      this.display3 = "display: none;"
      this.display5 = "display: none;"
      this.display6 = "display: none;"

      this.display4 = "display: block"
      // this.count4=true
    }
    else if (this.counter == 5) {
      this.display1 = "display: none;"
      this.display2 = "display: none;"
      this.display3 = "display: none;"
      this.display4 = "display: none;"
      this.display6 = "display: none;"

      this.display5 = "display: block"
      //this.count5=true
    }
    else if (this.counter == 6) {


      this.display1 = "display: none;"
      this.display2 = "display: none;"
      this.display3 = "display: none;"
      this.display4 = "display: none;"
      this.display5 = "display: none;"
      
      this.display6 = "display: block"
      // this.count6=true
    }
  }


}
 