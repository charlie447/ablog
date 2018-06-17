import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import { Routes,RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { WeUiModule } from 'ngx-weui';
import { GalleryModule } from 'ngx-weui/gallery';
import { TabModule } from 'ngx-weui';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TestComponent } from './test/test.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    TabbarComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignupComponent,
    UserInfoComponent,
    TestComponent,
    TimelineComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule.forRoot(), //must forRoot(). Otherwise get NullInjectionError
    BrowserAnimationsModule,
    GalleryModule,
    TabModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [ 
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
