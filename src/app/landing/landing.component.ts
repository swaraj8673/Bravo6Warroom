import { Component, Input, OnInit } from '@angular/core';
import { Cred } from './cred.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

   credentials: Cred = new Cred('bird','@bird123','bird@gmail.com','bird@123');

   @Input() credentialEntered: Cred = new Cred('','','','');

  constructor() {
   }

  ngOnInit(): void {
  }

}
