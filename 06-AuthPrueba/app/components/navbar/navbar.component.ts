import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "../../services/authservice.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthserviceService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
  }
  
  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }
}
