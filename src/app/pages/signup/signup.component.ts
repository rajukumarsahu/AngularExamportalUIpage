import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/Service/login.service';
 
import { UserServiceService } from 'src/app/Service/user-service.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  constructor(private UserService:UserServiceService,private snack:MatSnackBar){}
 

public user={
  username:'',
  password:'',
  firstname:'',
  lastname:'',
  email:'',
  phone:'',
};
ngOnInit(): void {} 

   formSubmit(){
   // this.signup.GenerateToken(this.signup).subscribe((data:any)=>{
     
       
    
    console.log(this.user); 
    if(this.user.username=='' || this.user.username==null){
       alert('user is required');
      
          return;
        } 

        //user service 
        this.UserService.adduser(this.user).subscribe(
      
        (data:any)=>{

        console.log(data);
      
        // alert("Sucess");
        Swal.fire(
          'sucessfully  done!!',
          'Your User Id:-'+data.id +
          'success'
          
        )
        window.location.reload();
        // Swal.fire('sucessfully  done!!','user id is:-'+data.id  +' sucess');
      },
      (error)=>{
        console.log(error)
        this.snack.open('User is already present','',{
          duration:3000,
          
         // this.snack.open({ error() 'Invalid User' }, 'Try Again', { duration: 3000 });
          
         
        })
        // {{error|Object}}
         
      }
    );



  }

  
  
}
