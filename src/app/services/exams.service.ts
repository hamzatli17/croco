import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  getAllExams() {
    const examsUrl = `${this.url}/api/exams`;
    return this.httpClient.get<{ message: string, exams: any }>(examsUrl);
  }
}
