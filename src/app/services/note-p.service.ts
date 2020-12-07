import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotePService {

  url= 'http://localhost:3000'
  constructor(private httpClient:HttpClient) { }


  create(noteP:any) {
    const usersUrl = `${this.url}/api/noteP`;    
    return this.httpClient.post(usersUrl, noteP);
}
}
