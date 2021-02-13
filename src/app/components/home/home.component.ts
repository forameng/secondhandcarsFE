import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../lib/services/http.service';
import { StoreService } from '../../lib/services/store.service';
import { ActionService } from '../../lib/services/action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  warehouses: any[] = []
  constructor(private http: HttpService, private store: StoreService, private action: ActionService) { }

  showVehicle(vehicle: any): void{
    if(!vehicle.licensed){
      return;
    }
    this.store.setStore('vehicle', vehicle);
    this.action.navigateAction('vehicle-details');
  }

  ngOnInit(): void {
    this.http.request(
      {method: 'GET', url: '/warehouse'}
    ).subscribe((dt:any)=>{
      this.warehouses = dt;
    })
  }

}
