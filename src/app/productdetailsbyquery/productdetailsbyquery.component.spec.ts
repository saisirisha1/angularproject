import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsbyqueryComponent } from './productdetailsbyquery.component';

describe('ProductdetailsbyqueryComponent', () => {
  let component: ProductdetailsbyqueryComponent;
  let fixture: ComponentFixture<ProductdetailsbyqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsbyqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailsbyqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
