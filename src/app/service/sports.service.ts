import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SportsListService {

  public baseRefUrl = environment.baseRefUrl;

  constructor(private http: HttpClient) { }

  getSports(): Observable<any> {
    return this.http.get(`${this.baseRefUrl}/` + 'data');
  }

  addSport(sport: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'data', sport);
  }

  deleteSportsById(id: any): Observable<any> {
    return this.http.delete(`${this.baseRefUrl}/` + 'data/' + id);
  }

  updateSport(sport: any): Observable<any> {
    return this.http.put(`${this.baseRefUrl}/` + 'data/' + sport.id, sport);
  }

  getLoginCheck(): Observable<any> {
    return this.http.get(`${this.baseRefUrl}/` + 'login');
  }

  addLogin(userLogin: any): Observable<any> {
    return this.http.post(`${this.baseRefUrl}/` + 'login', userLogin);
  }
}
