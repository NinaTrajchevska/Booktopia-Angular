import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleComponent } from './pages/sale/sale.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
 
  {
    path: 'sale',
    component: SaleComponent,
  },
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/book/:id',
    component: BookDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

