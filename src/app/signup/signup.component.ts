import { Component, OnInit ,ViewChild, Input} from '@angular/core';
import { User } from '../Model/model.user';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { UploaderOptions, FileItem, Uploader, UploaderHeaders } from 'ngx-weui';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private auth: AuthService) { }

  ngOnInit() {
  }
  res:any = {
    username:"",
    password:"",
    re_password:"",
    gender:"",
    bio:"",
    
  }
  user: User = new User('','');
  
  onSignup(event) {
    
    localStorage.clear()
    let formData:FormData = new FormData();

    // let fileList: FileList = event.target.files;
    let file: File = event.target.file;
    console.log("sign up a new user")
    if (this.res.username != "") {
      if (this.res.re_password == this.res.password && this.res.password != "") {
        
        // this.user.username = this.res.username;
        // this.user.password = this.res.password;
        formData.append('username',this.res.username)
        formData.append('password', this.res.password)
        formData.append('gender', this.res.gender)
        formData.append('bio', this.res.bio)
        formData.append('avatar', file)
        this.auth.signup(formData)
        .then((data)=>{
          console.log(data);
          console.log(data.ok);

        })

      }
    }
  }
onRedirToLogin(){
  this.router.navigate(['/login']);
  
}
  itemGroup: any = [
    [
        {
            label: '女',
            value: 0
        },
        {
            label: '男',
            // disabled: true,
            value: 1
        }
    ]
];
@Input() url: string = 'example';

uploader: Uploader = new Uploader(<UploaderOptions>{
    url: 'http://localhost:5000/api/user/signup',
    headers: [
        { name: 'auth', value: 'test' }
    ],
    params: {
        a: 1,
        b: new Date(),
        c: 'test',
        d: 12.123
    },
    limit:1,

    // 自定义transport
    // uploadTransport: function(item: FileItem) {
    //     return Observable.create(observer => {
    //         setTimeout(() => {
    //             observer.next(true);
    //             observer.complete();
    //         }, 1000 * 3);
    //     });
    // },
    onFileQueued: function() {
        console.log('onFileQueued', arguments);
    },
    onFileDequeued: function() {
        console.log('onFileDequeued', arguments);
    },
    onStart: function() {
        console.log('onStart', arguments);
    },
    onCancel: function() {
        console.log('onCancel', arguments);
    },
    onFinished: function() {
        console.log('onFinished', arguments);
    },
    onUploadStart: function() {
        console.log('onUploadStart', arguments);
    },
    onUploadProgress: function() {
        console.log('onUploadProgress', arguments);
    },
    onUploadSuccess: function() {
        console.log('onUploadSuccess', arguments);
    },
    onUploadError: function() {
        console.log('onUploadError', arguments);
    },
    onUploadComplete: function() {
        console.log('onUploadComplete', arguments);
    },
    onUploadCancel: function() {
        console.log('onUploadCancel', arguments);
    },
    onError: function() {
        console.log('onError', arguments);
    }
});

  img: any;
  imgShow: boolean = false;
  onGallery(item: any) {
      this.img = [{ file: item._file, item: item }];
      this.imgShow = true;
  }
  onDel(item: any) {
    console.log(item);
    this.uploader.removeFromQueue(item.item);
  }
}
