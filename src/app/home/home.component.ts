import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername = "Angular 14"
  salary = 2000

  isdisabled=true

  colorName="red"
  font="50px"

  className="headclass"

  ngOnInit(): void {
  }

  Functionclick(name:string) {
    console.log(name)
  }

}
