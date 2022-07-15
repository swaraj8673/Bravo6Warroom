import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [
    new Contact('dog','@dog123','../assets/images/dog.jpg'),
    new Contact('cat','@cat123','../assets/images/cat.jpg'),
    new Contact('horse','@horse123','../assets/images/horse.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
