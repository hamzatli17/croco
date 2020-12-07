import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtdProfileService {
  url='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }
  getEtudiant(email:any)
{
  const Url='http://localhost:3000/api/et-profile';
  return this.httpClient.get<{message:string,etudiant:any}>(Url,email);

}
updateEtd(etudiant: any) {
  const matchesUrl = `${this.url}/api/etudiant/${etudiant.id}`;
  return this.httpClient.put<{ updatedetudiant: any }>(matchesUrl, etudiant);
}
}

