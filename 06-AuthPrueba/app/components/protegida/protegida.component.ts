import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "../../services/authservice.service";

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

  profile:any;

  constructor(private auth:AuthserviceService) {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
   }

  ngOnInit() {

  }

}
