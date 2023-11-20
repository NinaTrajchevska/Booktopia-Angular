
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  selectedBook: any;
  showCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
   
    this.cartService.showCart.subscribe((showCart) => {
      this.showCart = showCart;
      if (showCart) {

        this.selectedBook = this.cartService.getSelectedBookId();
      }
    });
  }
}
