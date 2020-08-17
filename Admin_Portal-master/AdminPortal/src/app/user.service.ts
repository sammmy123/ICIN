import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {

  constructor (private http:HttpClient){}

  getUsers() {
    let url = "http://localhost:8090/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }

   getPrimaryTransactionList(username: string) {
     let url = "http://localhost:8090/api/user/primary/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   getSavingsTransactionList(username: string) {
     let url = "http://localhost:8090/api/user/savings/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   enableUser (username: string) {
     let url = "http://localhost:8090/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8090/api/user/"+username+"/disable";
     return this.http.get(url, { withCredentials: true });
   }

}
