import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsHomePageComponent } from './materials-home-page.component';

describe('MaterialsHomePageComponent', () => {
  let component: MaterialsHomePageComponent;
  let fixture: ComponentFixture<MaterialsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
