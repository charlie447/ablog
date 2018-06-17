import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';

export const ROUTES: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'index', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'test', component: TestComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  exports: [ RouterModule ],  // Mind this exports, if don't export RouterModule, then errors pop up
  declarations: []
})
export class AppRoutingModule { }
