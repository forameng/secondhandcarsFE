import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../lib/services/http.service';
import { StoreService } from '../../lib/services/store.service';
import { ActionService } from '../../lib/services/action.service';
import { CartService } from '../../lib/cart/cart.service';

@Component({
  selector: 'app-vehical-details',
  templateUrl: './vehical-details.component.html',
  styleUrls: ['./vehical-details.component.scss']
})
export class VehicalDetailsComponent implements OnInit {
  vehicle: any;
  incart: boolean = false;
  cartDetais: any;
  constructor(private http: HttpService, private store: StoreService, private action: ActionService, private cart: CartService) { }

  updateCart(){
    let cart = Object.keys(this.cartDetais).map(key=> this.cartDetais[key]);
    cart.push(this.vehicle);
    this.http.request({
      method: 'POST',
      url: '/addToCart',
      body: cart
    }).subscribe(dt=>{
      if(this.incart){
        delete this.cartDetais[this.vehicle.vid];
      }else{
        this.cartDetais[this.vehicle.vid] = this.vehicle;
      }
      this.incart = !this.incart
      this.store.setStore('cart', this.cartDetais);
      this.cart.setCart(this.cartDetais);
    })
  }

  goHome(){
    this.action.navigateAction('home');
  }

  ngOnInit(): void {
    this.vehicle = this.store.getStore('vehicle');
    if(!this.vehicle){
      this.action.navigateAction('home');
      return;
    };
    this.cartDetais = this.store.getStore('cart') || {};
    this.incart = this.cartDetais[this.vehicle.vid]?true:false;
  }

}
