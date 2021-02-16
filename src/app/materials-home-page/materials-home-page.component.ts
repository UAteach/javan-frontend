import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderDTO } from '../models';
import { OrderService } from '../services/order.service';
import { NavComponent } from '../shared/nav/nav.component';

@Component({
  selector: 'app-materials-home-page',
  templateUrl: './materials-home-page.component.html',
  styleUrls: ['./materials-home-page.component.scss']
})
export class MaterialsHomePageComponent implements OnInit {
  @ViewChild(NavComponent) nav : NavComponent; 

  public orders: OrderDTO[];
  public isLoading: boolean = true;

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this._orderService.getOrdersForCurrentUser().subscribe(orders => {
      this.orders = orders;
      this.isLoading = false;
    });
  }

}
