import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmnetiesComponent } from './amneties/amneties.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddtitlePipe } from './custom-pipes/addtitle.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { MessageaddComponent } from './messageadd/messageadd.component';
import { MessagelistComponent } from './messagelist/messagelist.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailsbyqueryComponent } from './productdetailsbyquery/productdetailsbyquery.component'


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HotelComponent,
    AmnetiesComponent,
    FooterComponent,
    CarouselComponent,
    AddtitlePipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    CommentsComponent,
 
    MessageaddComponent,
    MessagelistComponent,
    TemplatedrivenformComponent,
    ProductdetailsComponent,
    ProductdetailsbyqueryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
