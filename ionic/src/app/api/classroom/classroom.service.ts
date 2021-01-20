import { Injectable } from '@angular/core';
import ClassRoom from 'src/app/models/ClassRoom';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from  '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http : HttpClient,private  storage:  Storage) {
    this.http = http;
   }

  async getOwnClassRooms(){
    const result = await this.storage.get("ACCESS_TOKEN");
    console.log(result);
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
    return this.http.get("http://localhost:8080/class/getByUserId",{headers});
  }
  async getClassRooms(){
    const result = await this.storage.get("ACCESS_TOKEN");
    console.log(result);
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
    return this.http.get("http://localhost:8080/class/getByRegisterId",{headers});
  }
  async addClass(classRoom : ClassRoom){
    const result = await this.storage.get("ACCESS_TOKEN");
    console.log(result);
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
      
    console.log(headers);
    return this.http.post("http://localhost:8080/class",classRoom,{headers});
  }
  get(id:String){
    return this.http.get("http://localhost:8080/class/get/"+id);
  }
  removeUser(classId:String , userId : String){
    return this.http.post("http://localhost:8080/class/removeUser",{id : classId , userId});
  }
  addUser(id:String,userId:String|String[]){
    return this.http.post("http://localhost:8080/class/addUser",{id , userId});
  }
  getHomeworks(id:String){
    return this.http.get("http://localhost:8080/class/homeworks/" + id);
  }

}
