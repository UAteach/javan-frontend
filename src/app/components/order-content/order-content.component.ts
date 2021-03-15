import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { OrderContentDTO } from 'src/app/models/order-content.dto';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
      // if(result.event == 'Add'){
      //   this.addRowData(result.data);
      // }else if(result.event == 'Update'){
      //   this.updateRowData(result.data);
      // }else if(result.event == 'Delete'){
      //   this.deleteRowData(result.data);
      // }
    });
  }

  // addRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();
  // }

  // updateRowData(row_obj){
  //   this.dataSource = this.dataSource.filter((value,key)=>{
  //     if(value.id == row_obj.id){
  //       value.name = row_obj.name;
  //     }
  //     return true;
  //   });
  // }

  deleteRowData(row_obj){
    this.orderContents = this.orderContents.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

  //deleteRowData(row_obj){
  //  this.orderContents.splice(row_obj, 1)
  //    return true;
  //  };
  //}

}
