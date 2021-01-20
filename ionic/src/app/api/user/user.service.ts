import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient,private storage : Storage) { }

  getUsersByUsername(username:String){
    return this.http.get("http://localhost:8080/user/s/" + username);
  }
  get(userId:String){
    return this.http.get("http://localhost:8080/user/"+userId);
  }
  async getHomeworks(){
    const result = await this.storage.get("ACCESS_TOKEN");
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
      
    console.log(headers);
    return this.http.get("http://localhost:8080/user/homeworks/get",{headers});
  }

}
