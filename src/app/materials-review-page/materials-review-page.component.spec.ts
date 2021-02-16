import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsReviewPageComponent } from './materials-review-page.component';

describe('MaterialsReviewPageComponent', () => {
  let component: MaterialsReviewPageComponent;
  let fixture: ComponentFixture<MaterialsReviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsReviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
