import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemDTO, OrderContentDTO, OrderDTO, UserDTO } from '../models';
import { AuthService } from '../services/auth.service';
import { ItemsService, OrderService } from '../services';

@Component({
  selector: 'app-materials-order-page',
  templateUrl: './materials-order-page.component.html',
  styleUrls: ['./materials-order-page.component.scss']
})
export class MaterialsOrderPageComponent implements OnInit {

  private user: UserDTO;

  public items: ItemDTO[];

  id: number;
  order: OrderDTO;
  orderContents: OrderContentDTO[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService,
    private _itemsService: ItemsService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this._authService.getUserInfo();

    this._route.params.subscribe(params => {
      this._orderService.getOrderById(+params['id']).subscribe(order =>{
        this.order = order;

        // Makes sure student has permission for order
        if(this.user.classification == 0 && this.order.members.some(member => member.id != this.user.id)){
          this._router.navigateByUrl('/error');
        }

      })

      this._orderService.getOrderContentsByOrder(+params['id']).subscribe(contents => {
        this.orderContents = contents;
        console.log(this.orderContents)
      })
    });

    this._itemsService.getAll().subscribe(items => {
      this.items = items;
    })

  }

}

