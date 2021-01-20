import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Response from "../../models/Response";

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http : HttpClient,private storage : Storage) {
    this.http = http;
   }
   async add(response : object){
    const result = await this.storage.get("ACCESS_TOKEN");
    console.log(result);
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
      
      return this.http.post("http://localhost:8080/response/add",response,{headers});
   }
   async get(id:String){
    return this.http.get("http://localhost:8080/response/get/"+id);
   }
   async getByQuery(id : String){
    const result = await this.storage.get("ACCESS_TOKEN");
    console.log(result);
    let headers : HttpHeaders;
    if(result) 
      headers = new HttpHeaders({Authorization:result});
     return this.http.get("http://localhost:8080/response/getByQuery?homeworkId="+id,{headers});
   }
}
