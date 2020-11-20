import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDTO } from '../models';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private static readonly APIPATHPREFIX: string = 'orders/';

  constructor(
      private _api: ApiService,
      private _authService: AuthService
  ) { }

  getAllOrders(): Observable<OrderDTO[]> {
    return this._api.get<OrderDTO[]>(OrderService.APIPATHPREFIX);
  }

  getOrderById(id: number): Observable<OrderDTO>{
    return this._api.get<OrderDTO>(OrderService.APIPATHPREFIX + id);
  }

  getOrdersForCurrentUser(): Observable<OrderDTO[]>{
    var user = this._authService.getUserInfo();
    return this.getOrdersByMembers([user.id]);
  }

  getOrdersByMembers(memberIds: number[]): Observable<OrderDTO[]>{
    var paramString = "?"
    memberIds.forEach((id, i) => {
        paramString = paramString + "members=" + id;
        if(i != memberIds.length - 1){
            paramString = paramString + "&";
        }
    })
    return this._api.get<OrderDTO[]>(OrderService.APIPATHPREFIX + paramString);
  }

  getOrderByBinNumber(bin: number): Observable<OrderDTO>{
    return this._api.get<OrderDTO>(OrderService.APIPATHPREFIX + '?bin_number=' + bin);
  }
}
