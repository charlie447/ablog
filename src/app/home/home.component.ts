import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // localStorage.clear();
    const token = localStorage.getItem('token');
    console.log(token)
    if( token == null){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['index']);
    }
  }

}
