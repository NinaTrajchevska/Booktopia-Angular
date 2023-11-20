
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book: any;
  showCart: boolean = false; // Initialize showCart to false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId !== null) {
      this.bookService.getBookDetails(bookId).subscribe((data) => {
        this.book = data;
      });
    } else {
      console.error('Book ID is null.');
    }
  }

 
addToCart(): void {
  console.log('Book:', this.book);
  if (this.book && this.book.id) {
    this.cartService.setSelectedBookId(this.book.id);
    this.cartService.toggleShowCart(true);
  } else {
    console.error('Book ID is null.');
  }
}




}



