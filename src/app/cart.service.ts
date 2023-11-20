import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedBookId: string | null = null; 
  private showCartSource = new BehaviorSubject<boolean>(false);
  showCart = this.showCartSource.asObservable();

  setSelectedBookId(bookId: string): void {
    this.selectedBookId = bookId;
  }

  getSelectedBookId(): string | null {
    return this.selectedBookId;
  }

  toggleShowCart(showCart: boolean): void {
    this.showCartSource.next(showCart);
  }
}
