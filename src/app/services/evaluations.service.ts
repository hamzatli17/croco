import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  getAllEval() {
    const evalsUrl = `${this.url}/api/evaluations`;
    return this.httpClient.get<{ message: string, evaluations: any }>(evalsUrl);
  }
}
