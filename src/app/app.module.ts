import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WeUiModule } from 'ngx-weui';
import { GalleryModule } from 'ngx-weui/gallery';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
