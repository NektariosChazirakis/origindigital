import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {

  private header = new HttpHeaders()
    .set('Content-Type', 'application/json')

  private params: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {}

  /**
   * Gets http request service
   * @param url
   * @param [header]
   * @param [params]
   * @returns get
   */
  public get<T>(
    url: string,
    header?: HttpHeaders,
    params?: HttpParams,
  ): Observable<T> {
    header = header ?? this.header;
    params = params ?? this.params;
    return this.http.get<T>(url, { headers: header, params: params });
  }

  /**
   * Posts http request service
   * @param url
   * @param body
   * @param [header]
   * @returns post
   */
  public post<T>(url: string, body: object, header?: object): Observable<T> {
    header = header ?? this.header;
    return this.http.post<T>(url, body, header);
  }

  /**
   * Puts http request service
   * @param url
   * @param [body]
   * @param [header]
   * @returns put
   */
  public put<T>(url: string, body?: object, header?: object): Observable<T> {
    header = header ?? this.header;
    return this.http.put<T>(url, body, header);
  }

  /**
   * Deletes http request service
   * @param url
   * @param [header]
   * @param [requestBody]
   * @returns delete
   */
  public delete<T>(
    url: string,
    header?: object,
    requestBody?: object,
  ): Observable<T> {
    const options = {
      headers:
        header === undefined
          ? this.header
          : new HttpHeaders(header as { [key: string]: string | string[] }),
      body: requestBody,
    };
    return this.http.request<T>('delete', url, options);
  }
}
