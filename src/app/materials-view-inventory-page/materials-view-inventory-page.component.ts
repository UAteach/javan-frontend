import { Component, OnInit } from '@angular/core';
import { ItemDTO } from '../models';
import { ItemsService } from '../services';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-materials-view-inventory-page',
  templateUrl: './materials-view-inventory-page.component.html',
  styleUrls: ['./materials-view-inventory-page.component.scss']
})
export class MaterialsViewInventoryPageComponent implements OnInit {

  items: ItemDTO[];
  isLoading: boolean = true;
  isAuthenticated = false;

  constructor(
    private _itemsService: ItemsService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this._authService.isAuthenticated();

    this._itemsService.getAll().subscribe(items => {
      this.items = items;
      this.isLoading = false;
    })
  }
}
