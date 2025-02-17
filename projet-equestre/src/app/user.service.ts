import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { userResponse } from './response_api/userResponse';
import { horseResponse } from './response_api/horseResponse';
import { repriseResponse } from './response_api/repriseResponse';
import { affiliationResponse } from './response_api/affiliationResponse';
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

  getUserById(id:string):Observable<userResponse>{
    let param = new HttpParams().set("id", id)
    return this.httpClient.get<userResponse>("http://localhost:8080/rest/user/api/searchUserById/", {params:param})
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

  addReprise(emailMonitor:string, title:string, level:string, beginDate:string, endDate:string, nbMaxHorseRider:number){
    let jsonToSend = {"emailMonitor":emailMonitor,"beginDate":beginDate, "endDate":endDate, "nbHorseRider":0, "nbMaxHorseRider":nbMaxHorseRider, "level":level, "title":title}
    return this.httpClient.post("http://localhost:8080/rest/reprise/api/addReprise/", jsonToSend)
  }

  getReprises():Observable<repriseResponse>{
    return this.httpClient.get<repriseResponse>("http://localhost:8080/rest/reprise/api/searchReprises/")
  }

  inscriptionReprise(idReprise:number, emailUser:string){
    let jsonToSend = {idReprise:idReprise, idHorse:null,emailUser:emailUser}
    return this.httpClient.post("http://localhost:8080/rest/reprise/api/inscriptionReprise/", jsonToSend)
  }

  getHorses():Observable<horseResponse>{
    return this.httpClient.get<horseResponse>("http://localhost:8080/rest/horse/api/searchHorses/")
  }

  getHorseRiderByReprise(idReprise:number):Observable<affiliationResponse>{
    let param = new HttpParams().set("id", idReprise.toString())
    return this.httpClient.get<affiliationResponse>("http://localhost:8080/rest/reprise/api/searchInscriptionsByReprise/", {params:param})   
  }

  deleteReprise(idReprise:number){
    let param = new HttpParams().set("id", idReprise.toString())
    return this.httpClient.get("http://localhost:8080/rest/reprise/api/deleteReprise/", {params:param})   
  }

  addUserToHorse(emailUser:string, idHorse:number){
    let param = new HttpParams().set("id", idHorse.toString()).set("email", emailUser)
    return this.httpClient.get("http://localhost:8080/rest/horse/api/addUserToHorse/", {params:param})       
  }

  getRepriseByUser(emailUser:string):Observable<affiliationResponse>{
    let param = new HttpParams().set("emailUser", emailUser)
    return this.httpClient.get<affiliationResponse>("http://localhost:8080/rest/reprise/api/searchInscriptionsByUser/", {params:param}) 
  }

  getRepriseById(id:number):Observable<repriseResponse>{
    let param = new HttpParams().set("id", id.toString())
    return this.httpClient.get<repriseResponse>("http://localhost:8080/rest/reprise/api/searchRepriseById/", {params:param}) 
  }

  getReprises24Hours():Observable<repriseResponse>{
    return this.httpClient.get<repriseResponse>("http://localhost:8080/rest/reprise/api/searchReprises24hours/")
  }

  getHorseByEmailUser(emailUser:string):Observable<horseResponse>{
    let param = new HttpParams().set("emailUser", emailUser)
    return this.httpClient.get<horseResponse>("http://localhost:8080/rest/horse/api/searchHorsesByEmailUser/", {params:param})
  }

  addRepriseRecur(nbRecurs:string, typeRecurs:string, emailMonitor:string, title:string, level:string, beginDate:string, endDate:string, nbMaxHorseRider:number){
    let param = new HttpParams().set("nbRecurs", nbRecurs).set("typeRecurs",typeRecurs)
    let jsonToSend = {"emailMonitor":emailMonitor,"beginDate":beginDate, "endDate":endDate, "nbHorseRider":0, "nbMaxHorseRider":nbMaxHorseRider, "level":level, "title":title}
    return this.httpClient.post("http://localhost:8080/rest/reprise/api/addRepriseRecur/", jsonToSend, {params:param})
  }

}
