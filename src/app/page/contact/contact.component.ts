import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user: any

  check: boolean;
  resetFrom = document.getElementById('contactFrom')

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onclick(){
  }

}
