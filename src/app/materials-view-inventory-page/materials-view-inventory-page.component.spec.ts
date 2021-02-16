import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsViewInventoryPageComponent } from './materials-view-inventory-page.component';

describe('MaterialsViewInventoryPageComponent', () => {
  let component: MaterialsViewInventoryPageComponent;
  let fixture: ComponentFixture<MaterialsViewInventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsViewInventoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsViewInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
