import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import {RouterModule,Routes} from '@angular/router';

const appRoutes : Routes = [
  // {path:'signup',component:SignupComponent},
  // {path: 'signin', component:SigninComponent},
  // {path:'users',component: DSNDComponent},
  // {path: 'home',component: TrangchuComponent,children:[
  //   {path:'demo1',component:Demo1Component},
  //   {path:'demo2',component:Demo2Component}
  // ]},
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
