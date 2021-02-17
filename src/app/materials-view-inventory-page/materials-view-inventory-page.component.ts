import { Component, OnInit } from '@angular/core';
import { ItemDTO } from '../models';
import { ItemsService } from '../services';

@Component({
  selector: 'app-materials-view-inventory-page',
  templateUrl: './materials-view-inventory-page.component.html',
  styleUrls: ['./materials-view-inventory-page.component.scss']
})
export class MaterialsViewInventoryPageComponent implements OnInit {

  items: ItemDTO[];
  isLoading: boolean = true;

  

  constructor(
    private _itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
    this._itemsService.getAll().subscribe(items => {
      this.items = items;
      this.isLoading = false;
    })
  }

}
