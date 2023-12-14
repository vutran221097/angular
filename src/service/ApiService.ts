import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; // Thay đổi thành URL của API thực tế

  constructor() {}

  // Ví dụ hàm gọi API GET
  getSomeData(url: string): Observable<any> {
    return new Observable((observer) => {
      axios
        .get(`${this.apiUrl}${url}`)
        .then((response: AxiosResponse<any>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
