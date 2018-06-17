import { Component, OnInit ,ViewChild } from '@angular/core';
import { UserService } from '../user.service'
import { CookieService } from 'ngx-cookie';
import { User } from '../Model/model.user'; 
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { ToastComponent, ToastService, ToastConfig } from "ngx-weui/toast";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('success') successToast: ToastComponent;
  @ViewChild('loading') loadingToast: ToastComponent;

  res:any = {
    username:"",
    password:""
  }
  user: User = new User('','');
  constructor(private service : UserService,private auth: AuthService,private _cookieService:CookieService,private router : Router, private srv: ToastService, private toastConfig: ToastConfig) { 
    // service.getUser().then(r => {console.log(r)});  //调用service
  }

  ngOnInit() {

  }
  onSave() {
    // alert('请求数据：' + JSON.stringify(this.res));
    const resJson = JSON.stringify(this.res)
    console.log(resJson)
    // this.service.postValidation(resJson)
    
  }

  onLogin(): void {
    console.log("login user");
    this.user.username = this.res.username;
    this.user.password = this.res.password;
    this.auth.login(JSON.stringify(this.res))
    .then((data) => {
      console.log(data);
      console.log(data.ok)
      if(data.ok == 1){
        if(data.ok == 1){
          this.onShowBySrv('loading')
          localStorage.setItem('token', JSON.stringify(data));
          
          // this._cookieService.put('token', JSON.stringify(data));
          // const token = this._cookieService.get('token');
          const token = localStorage.getItem('token');
          console.log(token);
          this.router.navigate(['index']);
        }else{
          console.log('Invalid Credentials');
        }
      }
      else{
        this.onShowBySrv('success')
        console.log("Some error occured")
      }
      // localStorage.setItem('token', user.json().auth_token);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  onSignup():void{

    this.router.navigate(["/signup"])
  }


  onShowBySrv(type: 'success' | 'loading', forceHide: boolean = false) {
    this.toastConfig['success'] = {text:"登录失败！",icon:"weui-icon-warn",time:2000}
    this.toastConfig['loading'] = {text:"成功，加载中！",icon:"weui-icon-success",time:2000}
    this.srv[type]();
    
    if (forceHide === true) {
        setTimeout(() => {
            this.srv.hide();
        }, 1000)
    }
}

}
