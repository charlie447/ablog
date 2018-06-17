import { Component, OnInit, NgModule , ViewChild} from '@angular/core';
import { InfiniteLoaderComponent } from 'ngx-weui/infiniteloader';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent implements OnInit {
    @ViewChild(InfiniteLoaderComponent) il;
    restartBtn = false;
  time: number;
  onSelect() {
      this.time = new Date().getTime();
  }
  items: any[] = Array(2).fill(0).map((v: any, i: number) => i);
  onLoadMore(comp: InfiniteLoaderComponent) {
    this.restartBtn = false;
      Observable.timer(1500).subscribe(() => {

          this.items.push(...Array(2).fill(this.items.length).map((v, i) => v + i));

          if (this.items.length >= 20) {
            this.restartBtn = true;
            comp.setFinished();
            return;
          }
          comp.resolveLoading();
      });
  }
  restart() {
    this.items.length = 0;
    this.il.restart();
}
  constructor() { }

  ngOnInit() {
  }

}
