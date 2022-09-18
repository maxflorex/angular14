import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h2>
       Page Not Found
    </h2>
  `,
  styles: [
    "h2{color:red}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
