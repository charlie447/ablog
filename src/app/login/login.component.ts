import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

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
  constructor(private service : UserService) { 
    service.getUser().then(r => {console.log(r)});  //调用service
  }

  ngOnInit() {
  }
  onSave() {
    // alert('请求数据：' + JSON.stringify(this.res));
    const resJson = JSON.stringify(this.res)
    console.log(resJson)
    this.service.postValidation(resJson)
  }

}
