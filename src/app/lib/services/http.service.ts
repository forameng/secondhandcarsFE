import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  request(details: any = {}) {
    return this.httpClient.request(details.method, `${environment.url}${details.url}`, {
      params: details.requestParams,
      body: details.body,
    });
  }

}
