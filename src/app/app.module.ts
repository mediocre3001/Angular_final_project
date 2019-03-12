import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import {RouterModule,Routes} from '@angular/router';
import { MainHomepageComponent } from './homepage/main-homepage/main-homepage.component';

const appRoutes : Routes = [
  // {path:'signup',component:SignupComponent},
  // {path: 'signin', component:SigninComponent},
  // {path:'users',component: DSNDComponent},
  {path: 'home',component: MainHomepageComponent,children:[

  ]},
  // {path: 'chitiet/:maphim',component:ChitietComponent,canActivate:[LoginGuard,]},
  // {path:'**', redirectTo:'home'}
]



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HomepageModule
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
