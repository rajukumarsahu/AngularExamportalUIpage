import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private login:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    debugger;
      if(this.login.isLogin() && this.login.getuserRole()=='Admin'){
        
        return true;
      }
      this.router.navigate(['login']);
    
      return false;
  }
  
}
