import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  logindata={
    username:'',
    password:''
  };

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router){}
  

  ngOnInit(): void {}

  formsubmit(){
    console.log('login button click');
    // alert("ht");
    if(this.logindata.username.trim()==''||this.logindata.username==null){
        this.snack.open("user name is required!!",'ok',{
          duration:3000,
        });
        return;
    }
    //request server to generate token
   
   
    this.login.generateToken(this.logindata).subscribe((data:any)=>{
      console.log('sucess');
      console.log(data)
      
      //login token stored and validate
      this.login.loginUser(data.token);
      this.login.currentuser().subscribe((user:any)=>{
          this.login.setuser(user);
          console.log(user)
          //redirect to admin and normal page

          if(this.login.getuserRole()=='Admin') 
          {
            this.router.navigate(['admin']);
        //  window.location.href= '/admin';
          }else if(this.login.getuserRole()=='Normal'){
              // window.location.href= '/user-dashboard'
              this.router.navigate(['user-dashboard'])
          }
          else{
            this.login.Logout();
            
          }

        });
    },
    (error)=>{
      console.log("Error");
      console.log(error)
      this.snack.open('Invalid User','Try Again',{
        duration:3000,
      })
    }
    );
    
  }
   
}
