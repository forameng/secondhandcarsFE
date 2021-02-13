import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../lib/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count: number = 0;
  amount: number = 0;
  constructor(private cart: CartService) { }

  calculate(data: any){
    this.count = 0;
    this.amount = 0;
    Object.keys(data).forEach((vehicle: any)=>{
      this.count++;
      this.amount = this.amount + parseInt(data[vehicle].price);
    })
  }

  ngOnInit(): void {
    this.cart.getCart().subscribe((data: any)=>{
      this.calculate(data)
    });
  }

}
