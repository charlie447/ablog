import { Injectable } from '@angular/core';
import { Urls } from './Model/model.url'
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Result } from './Model/model.result';
import { promise } from 'protractor';
@Injectable()
export class UserService {
  private urls = Urls;
  constructor(private http:Http) {

    // console.log("Result:"+Result);
   }
  getUser(){
    console.log(this.urls.getUser)
    return this.http.get(this.urls.getUser)
                  .toPromise()
                  .then(response => response.json() as Result)
                  .catch(this.handleError);
    // console.log('获得用户名和密码!!');
    
  }
  // postValidation(data:any):Promise<Result> {
  //   return this.post(this.urls.postValidation,data)
  // }
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
