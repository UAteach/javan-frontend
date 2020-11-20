import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsOrderPageComponent } from './materials-order-page.component';

describe('MaterialsOrderPageComponent', () => {
  let component: MaterialsOrderPageComponent;
  let fixture: ComponentFixture<MaterialsOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
