import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { OrderContentDTO } from 'src/app/models/order-content.dto';
import { OrderService } from 'src/app/services';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss']
})
export class OrderContentComponent implements OnInit {
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  @Input() set OrderContent(value: OrderContentDTO[]){
    this.orderContents = value;
  }

  orderContents: OrderContentDTO[];
  displayedColumns: string[] = ['quantity', 'name', 'action'];

  constructor(
    public dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'OrderContent-Delete'){
        this.deleteOrderContent(result.data);
      }
    });
  }

  private deleteOrderContent(data){
    this._orderService.deleteOrderContentById(data.id).subscribe(result => {
      this.orderContents = this.orderContents.filter((value)=>{
        return value.id != data.id;
      });
      this.openSnackBar("Item deleted", null);
    }, error => {
      console.error(error)
      this.openSnackBar("Failed to delete item", null);
    })
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
