import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private router: Router) {

   }

   navigateAction(action: string){
    this.router.navigateByUrl(action);
   }
}
