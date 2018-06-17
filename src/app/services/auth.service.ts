import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Urls } from '../Model/model.url';
import { Result } from '../Model/model.result';

@Injectable()
export class AuthService {
  // private BASE_URL: string = 'http://localhost:5000/auth';
  private urls = Urls;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  login(data:any): Promise<any> {
    // let url: string = `${this.BASE_URL}/login`;
    // return this.http.post(Urls.login, user).toPromise();
    return this.post(this.urls.login,data)
    
  }
  signup(data:any):Promise<any>{
    return this.post(this.urls.signup,data);
  }
  register(user): Promise<any> {   //暂时没用
    // let url: string = `${this.BASE_URL}/register`;
    return this.http.post(Urls.signup, user, {headers: this.headers}).toPromise();
  }

    // 对get请求进行封装
    private  get(url: string, data: URLSearchParams = null): Promise<Result>  {
      return this.http.get(url, { search: data} )
      .toPromise().then(r => r.json() as Result)
      .catch(this.handleError);
    }
    // 对post请求进行封装
    private  post(url: string, data: any): Promise<Result>  {
      return this.http.post(url, data)
        .toPromise().then(r => r.json() as Result)
        .catch(this.handleError);
    }
  
    // 捕获异常并输出
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
