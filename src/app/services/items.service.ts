import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDTO } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private static readonly APIPATHPREFIX: string = 'items/';

  constructor(private api: ApiService) { }

  getAll(): Observable<ItemDTO[]> {
    return this.api.get<ItemDTO[]>(ItemsService.APIPATHPREFIX);
  }

  get(id: number): Observable<ItemDTO>{
    return this.api.get<ItemDTO>(ItemsService.APIPATHPREFIX + id);
  }
}
