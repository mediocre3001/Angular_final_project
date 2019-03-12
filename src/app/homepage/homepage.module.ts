import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmComponent } from './film/film.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { DiscountItemComponent } from './discount-item/discount-item.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';

@NgModule({
  declarations: [HeaderComponent, SliderComponent,  FilmListComponent, FilmComponent, DiscountComponent, DiscountItemComponent , InformationComponent, FooterComponent, MainHomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    HeaderComponent,
    SliderComponent,
    FilmListComponent,
    FilmComponent,
    DiscountComponent,
    InformationComponent,
    FooterComponent,
    MainHomepageComponent
  ]
})
export class HomepageModule { }
