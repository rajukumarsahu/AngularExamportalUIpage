import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  //add user
  public adduser(user:any){
   this.generateToken;
   console.log(this.generateToken)
    return this.http.post(`${baseUrl}/user/save`,user);
  }
  public generateToken(logindata:any){
    return this.http.post(`${baseUrl}/generatetoken`,localStorage)
    }
  public getuser(user:any){
    return this.http.get(`${baseUrl}/user/UserDetails`,user);
  }
}
