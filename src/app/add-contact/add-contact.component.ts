import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  // ACTIVATE ROUTE
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // GET PARAMS
    const routeid=this.route.snapshot.paramMap.get('id');
    console.log(routeid);

  }

}
