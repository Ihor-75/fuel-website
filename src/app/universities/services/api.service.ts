import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Univercity } from './university.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getUnivercitys(): Observable<Univercity[]> {
    return this.http.get<Univercity[]>(`${this.apiUrl}/univercities`);
  }
  createUnivercity(univercity: Univercity): Observable<Univercity> {
    return this.http.post<Univercity>(
      `${this.apiUrl}/univercities`,
      univercity
    );
  }

  updateUnivercity(id: number, univercity: Univercity): Observable<Univercity> {
    return this.http.put<Univercity>(
      `${this.apiUrl}/univercities/${id}`,
      univercity
    );
  }

  deleteUnivercity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/univercities/${id}`);
  }
}
