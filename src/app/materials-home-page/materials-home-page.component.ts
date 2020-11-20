import { Component, OnInit } from '@angular/core';
import { OrderDTO } from '../models';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-materials-home-page',
  templateUrl: './materials-home-page.component.html',
  styleUrls: ['./materials-home-page.component.scss']
})
export class MaterialsHomePageComponent implements OnInit {

  public orders: OrderDTO[];

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    // TODO Loading spinner
    this._orderService.getOrdersForCurrentUser().subscribe(orders => {
      this.orders = orders;
      console.log(this.orders)
    });
  }

}
