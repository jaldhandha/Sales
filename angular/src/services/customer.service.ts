import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sale } from 'src/models/isale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class saleService {

  constructor(private http: HttpClient) { }
  getsales(): Observable<sale[]> {
    return this.http.get<sale[]>(`${environment.baseUrl}sales`);
  }

  getsaleById(id: number): Observable<sale> {
    return this.http.get<sale>(`${environment.baseUrl}sales/${id}`);
  }

  createsale(sale: any) {
    return this.http.post(`${environment.baseUrl}sales`, sale, { responseType: 'text' });
  }

  updatesale(sale: any, id: number) {
    return this.http.put(`${environment.baseUrl}sales/${id}`, sale, { responseType: 'text' });
  }

  deletesaleById(id: number) {
    return this.http.delete(`${environment.baseUrl}sales/${id}`, { responseType: 'text' });
  }
}

