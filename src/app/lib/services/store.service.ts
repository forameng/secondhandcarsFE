import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  store: any = {};

  constructor() { }

  setStore(key: string, value: any): void{
    this.store[key] = value
  }

  getStore(key: string): any{
    return this.store[key];
  }
}
