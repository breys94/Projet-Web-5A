import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
  
}