import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { emit } from 'process';
import { ItemDTO, OrderContentDTO } from 'src/app/models';
import { OrderService } from 'src/app/services';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.scss']
})
export class MaterialsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  items: MatTableDataSource<ItemDTO>;
  @Input() set Items(value: ItemDTO[]){
    this.items = new MatTableDataSource<ItemDTO>(value);
    setTimeout(() => this.items.paginator = this.paginator);
    this.items.sort = this.sort;
  }
    
  @Output() ItemAdded = new EventEmitter();

  displayedColumns: string[] = ['name', 'category', 'location', 'action'];

  private orderNumber: number = null;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _orderService: OrderService,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      this.orderNumber = +params['id'];
    });
  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.items.filter = filterValue.trim().toLowerCase();

    if (this.items.paginator) {
      this.items.paginator.firstPage();
    }
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      height: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Details-Add'){
        this.addToOrder(result.data);
      }
    });
  }

  private addToOrder(data){
    if (this.orderNumber) {
      let orderContent = new OrderContentDTO();

      orderContent.order = this.orderNumber;

      orderContent.item = data.id;
  
      orderContent.name = data.name;
      orderContent.quantity = data.quantity;
      orderContent.other_notes = data.notes;

      this._orderService.postOrderContent(orderContent).subscribe(response => {
        this.ItemAdded.emit();    
        this.openSnackBar("Item added", null);
      }, error => {
        console.error(error);
        this.openSnackBar("Failed to add item", null);
      });
    }else {
      this.openSnackBar("Failed to add item", null);
    }
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}


