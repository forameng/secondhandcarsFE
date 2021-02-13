import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: Observable<any>;
  private cartSource: Subject<any>;

  constructor() {
    this.cartSource = new Subject<any>();
    this.cart$ = this.cartSource.asObservable();
   }

  getCart(): Observable<any>{
    return this.cart$;
  }

  setCart(cart: any){
    this.cartSource.next(cart);
  }
}
