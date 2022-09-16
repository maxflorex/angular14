import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h2>
      Saul Goodman
    </h2>
  `,
  styles: [
    "h2{color:green}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
