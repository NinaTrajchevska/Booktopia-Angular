
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  selectedBook: any;
  showBookDetails: boolean = false;

  constructor(private bookService: BookService) {}

  viewDetails(book: any): void {
    this.selectedBook = book;
    this.showBookDetails = true;
  }

  ngOnInit(): void {
    this.searchBooks('angular');
  }

  searchBooks(query: string): void {
    this.bookService.searchBooks(query).subscribe((data) => {
      this.books = data.items || [];
    });
  }
}
