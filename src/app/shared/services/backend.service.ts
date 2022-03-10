import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const defHeaders = environment.api.headers;
    return new HttpHeaders({
      'Accept-Language': 'en-us,en;q=0.5',
      ...defHeaders,
    });
  }

  public getCall(url: string): Observable<any> {
    return this.http.get(`${url}.json`, {
      headers: this.getHeaders(),
      observe: 'body',
      responseType: 'json',
    });
  }

  public postCall(url: string, body: any): Observable<any> {
    return this.http.post(`${url}.jso`, body, {
      headers: this.getHeaders(),
      observe: 'body',
      responseType: 'json',
    });
  }

  public putCall(url: string, body: any): Observable<any> {
    return this.http.put(`${url}.json`, body, {
      headers: this.getHeaders(),
      observe: 'body',
      responseType: 'json',
    });
  }
}
