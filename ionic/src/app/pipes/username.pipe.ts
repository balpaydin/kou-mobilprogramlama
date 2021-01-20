import { Pipe, PipeTransform } from '@angular/core';
import User from '../models/User';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(username: String): unknown {
    console.log("pipe",username);
    if(username)
      return "@" + username;
    return false;
    
  }

}
