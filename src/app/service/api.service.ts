import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NASA_URL, NASA_API_KEY } from '../../../env';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = NASA_API_KEY;
  private apiUrl = NASA_URL;

  constructor(private http: HttpClient) {}

  getAPOD(): Observable<any> {
    const url = `${this.apiUrl}/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
