import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // isLogin=false;
  // user=null;
 // constructor(private UserService:UserServiceService ){}
    constructor(public login:LoginService){}
  ngOnInit(): void {
    // this.isLogin=this.login.isLogin();

    // this.user1=this.login.getuser();
  }

  // public user={
  //   username:'',
  //   password:'',
  //   firstname:'',
  //   lastname:'',
  //   email:'',
  //   phone:'',
  // };
    public logout(){
      this.login.Logout();
      //this.isLogin=false;
      //this.user1=null;
      window.location.reload();
    }


}
