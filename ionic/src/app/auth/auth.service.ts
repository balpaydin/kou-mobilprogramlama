import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Storage } from  '@ionic/storage';
import User from  '../models/User';
import Result from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER_ADDRESS:string  =  'http://localhost:8080';
  authSubject  =  new  BehaviorSubject(false);
  constructor(private  httpClient:  HttpClient, private  storage:  Storage) { }




  register(user: User): Observable<Result<String>> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
      tap(async (res:  Result<String> ) => {
        console.log(res);
        if (res.success) {
          await this.storage.set("ACCESS_TOKEN", res.data);
          this.authSubject.next(true);
        }
      })
    );
  }
  
  login(user: User): Observable<Result<User>> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: Result<User>) => {
        console.log(res);
        if (res.success) {
          await this.storage.set("ACCESS_TOKEN", res.data);
          this.authSubject.next(true);
        }
      })
    );
  }
  async logout() {
    try {
      await this.storage.remove("ACCESS_TOKEN");
      this.authSubject.next(false);
    } catch (error) {
      console.log(error.message);
      return false;
    }

    return true;
    
  }
  async isLoggedIn() {
    const ACCESS_TOKEN = await this.storage.get("ACCESS_TOKEN");
    if(ACCESS_TOKEN)
      this.authSubject.next(true);
    else this.authSubject.next(false);
    return this.authSubject.asObservable();
  }
}
