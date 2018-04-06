import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { WeUiModule } from 'ngx-weui';
import { GalleryModule } from 'ngx-weui/gallery';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    TabbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(),
    BrowserAnimationsModule,
    GalleryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
