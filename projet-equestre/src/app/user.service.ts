import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { userResponse } from './response_api/userResponse';
import { horseResponse } from './response_api/horseResponse';
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

  getUsers():Observable<userResponse>{
    return this.httpClient.get<userResponse>("http://localhost:8080/rest/user/api/searchUsers/")
  }

  getUsersRole(role:string):Observable<userResponse>{
    let param = new HttpParams().set("role", role)
    return this.httpClient.get<userResponse>("http://localhost:8080/rest/user/api/searchUsersRole/", {params:param})
  }

  updateUser(id:number, email:string, firstName:string, lastName:string, phone:string){
    let jsonToSend = {id:id, email:email, firstName:firstName, lastName:lastName, phone:phone}
    return this.httpClient.post("http://localhost:8080/rest/user/api/updateUser/", jsonToSend)
  }

  addHorse(name:string, sexe:string, age:number, weight:number, height:number, nbWins:number, nbLoses:number){
    let jsonToSend = {name:name, sexe:sexe, age:age, weight:weight, height:height, nbWins:nbWins, nbLoses:nbLoses}
    return this.httpClient.post("http://localhost:8080/rest/horse/api/addHorse/", jsonToSend)
  }

}
