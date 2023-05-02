import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  //current user which is login
  public currentuser(){
    return this.http.get(`${baseUrl}/get-currentuser`);
  }


  //generate token
  public generateToken(logindata:any){
  return this.http.post(`${baseUrl}/generatetoken`,logindata)
  }
  public loginUser(token:any){
    localStorage.setItem('token',token)
    return true;

  }
  public getData(logindata:any){
    return this.http.get(`${baseUrl}/user/UserDetails`,logindata);
  }

  //user is login or not
  public isLogin(){
    let tokenstr=localStorage.getItem("token");
    if(tokenstr==undefined||tokenstr==null||tokenstr=='')
    {
      return false;
    }
    else{
      return true;
    }
  }
  public Logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true;
  }

  //add user
  
  //gettoken
  public GetToken(){
    return localStorage.getItem('token')
  }
  public setuser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
  }
  public getuser(){
    let userstr=localStorage.getItem('user');
      if(userstr!=null){
        return JSON.parse(userstr);
      }
      else{
        this.Logout();
        return null;
      }

    }


    public getuserRole(){
      let user=this.getuser();
      return user.authorities[0].authority;
    }
}
