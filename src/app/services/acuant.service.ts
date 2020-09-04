import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcuantService {

  constructor(private httpClient: HttpClient) {
  };
  getDocInstance(data): Observable<any> {
    return this.httpClient.post('https://services.assureid.net/AssureIDService/Document/Instance' , data , { headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Basic YWpheS5zYXByZUBhc3BlbmRlbnRhbC5jb206YWUwMzRxOTVjeTRwN3JvbQ==' }) });
  }
  getResults(instanceId): Observable<any> {
    return this.httpClient.get(`https://services.assureid.net/AssureIDService/Document/${instanceId}` , { headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Basic YWpheS5zYXByZUBhc3BlbmRlbnRhbC5jb206YWUwMzRxOTVjeTRwN3JvbQ==' }) });
  }

  
 processFaceMatch(data): Observable<any> {
    return this.httpClient.post('https://frm.acuant.net/api/v1/facematch', data , { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json;charset=utf-8', Authorization: 'Basic YWpheS5zYXByZUBhc3BlbmRlbnRhbC5jb206YWUwMzRxOTVjeTRwN3JvbQ==' }) });
  }
}
