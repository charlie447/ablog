import { Component, OnInit ,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
  srcList = [{alt:"img1",url:"./assets/images/img1.jpeg"},{alt:"img2",url:"./assets/images/img2.jpeg"},{alt:"img3",url:"./assets/images/img3.jpeg"},{alt:"img4",url:"./assets/images/img4.jpeg"},{alt:"img5",url:"./assets/images/img5.jpeg"},{alt:"img6",url:"./assets/images/img6.jpeg"},{alt:"img7",url:"./assets/images/img7.jpeg"},{alt:"img8",url:"./assets/images/img8.jpeg"},{alt:"img9",url:"./assets/images/img9.jpeg"}];

  // test = ["./assets/images/img1.jpeg","./assets/images/img2.jpeg","./assets/images/img3.jpeg","./assets/images/img4.jpeg"];
  like_num = 25;
  comments_num = 38;
  ngOnInit() {
  }
  
  img: any;
  img_url: any;
  imgShow: boolean = false;
  onGallery(item: any) {
      this.img = [{ file: item.url, item: item }];
      this.imgShow = true;
      this.img_url = item.url;
      // console.log(this.img_url)
  }
  // show: boolean = true;
  onDelete(item: any) {
      console.log(item);
  }
}

