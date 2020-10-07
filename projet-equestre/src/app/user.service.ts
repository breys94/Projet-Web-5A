import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { userResponse } from './response_api/userResponse';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(login:string):Observable<userResponse>{
    let param = new HttpParams().set("login", login)
    return this.httpClient.get<userResponse>("http://localhost:8080/rest/user/api/searchUser/", {params:param})
  }

  updatePassword(email:string, password:string){
    let jsonToSend = {email:email, password:password}
    return this.httpClient.post("http://localhost:8080/rest/user/api/updatePassword/", jsonToSend)
  }

  login(email:string, password:string){
    let jsonToSend = {email:email, password:password}
    return this.httpClient.post("http://localhost:8080/rest/user/api/login/", jsonToSend)
  }

}
