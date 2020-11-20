import { Component, Input, OnInit } from '@angular/core';
import { OrderDTO } from 'src/app/models';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  @Input() Order: OrderDTO;

  constructor() { }

  ngOnInit(): void {

  }

}
