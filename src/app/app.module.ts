import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UserService } from './user.service';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'index', component: HomeComponent },
  { path: '**', component:PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    TabbarComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    WeUiModule,
    BrowserAnimationsModule,
    GalleryModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
