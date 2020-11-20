import { Component, Input, OnInit } from '@angular/core';
import { ItemDTO } from 'src/app/models';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.scss']
})
export class MaterialsListComponent implements OnInit {

  @Input() Items: ItemDTO[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
