import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserServiceService } from 'src/app/Service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent  implements OnInit{

  constructor(private  UserService:UserServiceService){}
  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  };
  ngOnInit(): void {}


 
getdata(){
  console.log(this.user);
          // if(this.user.username=='' || this.user.username==null){
  //    alert('user is not required');
  //     //     this._snack.open("user name requored","",{
  //     // duration:3000,
  //     // verticalPosition:'top'
  //     // }
    
  //     // ) 
  //     return;
          //    }
      this.UserService.getuser(this.user).subscribe(
      (data:any)=>{

      console.log(data);
      // alert("Sucess");
       
      Swal.fire('sucessfully  done!!','total no user count data is:-'+data.length +' sucess');
      },
     (error)=>{
      console.log(error);
      alert("something went wrong");
     }
     ); 
    }

}
