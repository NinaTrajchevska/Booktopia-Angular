// src/app/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
// cart.component.ts
export class CartComponent implements OnInit {
  selectedBook: any;
  showCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to changes in the showCart flag
    this.cartService.showCart.subscribe((showCart) => {
      this.showCart = showCart;
      if (showCart) {
        // Retrieve the selected book from the CartService
        this.selectedBook = this.cartService.getSelectedBookId();
      }
    });
  }
}
