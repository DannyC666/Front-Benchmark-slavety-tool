import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyQuestion } from './surveyQuestion';


const baseUrl = 'http://127.0.0.1:8000/survey_questions/';

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  

constructor(private http: HttpClient ) { }
getAll(): Observable<SurveyQuestion[]> {
  return this.http.get<SurveyQuestion[]>(baseUrl);
}
}
