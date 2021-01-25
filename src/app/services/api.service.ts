import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    protected http: HttpClient,
    private _authService: AuthService
  ) { }

  get<T>(relativeUrl: string, params?: object): Observable<T> {
    let httpParams = new HttpParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        if (Array.isArray(params[key])) {
          params[key].forEach(paramValue => {
            httpParams = httpParams.append(key, paramValue);
          });
        } else {
          httpParams = httpParams.append(key, params[key]);
        }
      }
    }

    if (this._authService.isAuthenticated){
      var headers_object = new HttpHeaders().set("Authorization", "JWT " + this._authService.getToken());

      return this.http.get<T>(this.getUrl(relativeUrl),
                        { params: httpParams, headers: headers_object });
    }else{
      return null
    }
  }

  post<T>(relativeUrl: string, body: any): Observable<T> {
    // return this.http.post<T>(this.getUrl(relativeUrl), body);

    if (this._authService.isAuthenticated){
      debugger
      let headers_object = new HttpHeaders()
              .set('Authorization', "JWT " + this._authService.getToken())
              .set('Content-Type', 'application/json'); 

      return this.http.post<T>(this.getUrl(relativeUrl), body, { headers: headers_object });
    }else{
      return null
    }
  }

  put<T>(relativeUrl: string, body?: any): Observable<T> {
    return this.http.put<T>(this.getUrl(relativeUrl), body);
  }

  delete(relativeUrl: string) {
    return this.http.delete(this.getUrl(relativeUrl));
  }

  buildPath(...parts: string[]) {
    if (parts && parts.length) {
      let path = parts.join('/');

      // Ensure path starts with a forward slash
      if (path.length && path[0] !== '/') {
        path = '/' + path;
      }

      return path;
    }

    return '';
  }

  // TODO: make based on environment
  protected getUrl(relativeUrl: string) {
    return "http://127.0.0.1:8000/" + relativeUrl;
  }
}