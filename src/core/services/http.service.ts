import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  create(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiHost}${environment.apiUrl}${endPoint}`, data);
  }
  getAll(endPoint: string): Observable<any>{
    return this.httpClient.get(`${environment.apiHost}${environment.apiUrl}${endPoint}`);
  }
}
