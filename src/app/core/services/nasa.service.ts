import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NASA_URL, NASA_API_KEY } from '../../../../env';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiKey = NASA_API_KEY;
  private apiUrl = NASA_URL;

  constructor(private httpCliente: HttpClient) {}

  getAPOD(): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}`;
    return this.httpCliente.get<any>(url);
  }

  getAPODByDate(date: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&date=${date}`;
    return this.httpCliente.get<any>(url);
  }
}
