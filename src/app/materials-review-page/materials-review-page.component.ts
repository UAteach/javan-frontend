import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO, OrderContentDTO, UserDTO } from '../models';
import { OrderService } from '../services';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-materials-review-page',
  templateUrl: './materials-review-page.component.html',
  styleUrls: ['./materials-review-page.component.scss']
})
export class MaterialsReviewPageComponent implements OnInit {

  private user: UserDTO;

  id: number;
  order: OrderDTO;
  orderContents: OrderContentDTO[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this._authService.getUserInfo();

    this._route.params.subscribe(params => {
      this.id = +params['id'];
      this._orderService.getOrderById(+params['id']).subscribe(order =>{
        this.order = order;

        // Makes sure student has permission for order
        if(this.user.classification == 0 && this.order.members.findIndex(member => member.id == this.user.id) == -1){
          this._router.navigateByUrl('/error');
        }
      })

      this._orderService.getOrderContentsByOrder(this.id).subscribe(contents => {
        this.orderContents = contents;
        console.log(this.orderContents)
      })
    });
  }

}
