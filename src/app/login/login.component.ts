import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res:any = {
    username:"",
    password:""
  }
  constructor() { }

  ngOnInit() {
  }
  onSave() {
    alert('请求数据：' + JSON.stringify(this.res));
  }

}
