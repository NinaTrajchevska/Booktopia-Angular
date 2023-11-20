import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaleComponent } from './pages/sale/sale.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BookstoreHeadingComponent } from './bookstore-heading/bookstore-heading.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
   
    SaleComponent,
    NavbarComponent,
    BookstoreHeadingComponent,
    BookListComponent,
    BookDetailsComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [CartService],
    bootstrap: [AppComponent]
})
export class AppModule { }
