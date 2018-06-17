import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { UploaderOptions, FileItem, Uploader, UploaderHeaders } from 'ngx-weui';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  subTitle: string = `
  上传组件，一般配合<a class="link" href="#/example/gallery">组件Gallery</a>来使用。`;

  @Input() url: string = 'example';

  uploader: Uploader = new Uploader(<UploaderOptions>{
      url: '/post/create_post',
      headers: [
          { name: 'auth', value: 'test' },
          {
            "Access-Control-Allow-Origin":"*"
          }
      ],
      method:"POST",
      params: {
          a: 1,
          b: new Date(),
          c: 'test',
          d: 12.123
      },
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
          // let files = arguments[0];
          // console.log(files)
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
