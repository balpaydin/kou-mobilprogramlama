import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Homework from 'src/app/models/Homework';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private http : HttpClient) {
    this.http = http;
   }
   async add(homework : Homework){
      return this.http.post("http://localhost:8080/homework/add",homework);
   }
   async remove(id : String){
     return this.http.get("http://localhost:8080/homework/delete/"+id);
   }
   async get(id:String){
     return this.http.get("http://localhost:8080/homework/get/"+id);
   }
   getResponseById(homeworkId : String){
    return this.http.get("http://localhost:8080/response/getByHomeworkId/"+homeworkId);
   }
}
