import { Injectable } from '@angular/core';
import { Router, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate } from "@angular/router";

import { AuthserviceService } from "./authservice.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthserviceService) { }
  
  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    if(this.auth.isAuthenticated())
    {
      console.log(next);
      console.log("Paso el guard");
      return true;
    }
    else{
      console.error("Bloqueado en el guard");
      return false;
    }
    
  }

}
