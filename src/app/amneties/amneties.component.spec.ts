import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmnetiesComponent } from './amneties.component';

describe('AmnetiesComponent', () => {
  let component: AmnetiesComponent;
  let fixture: ComponentFixture<AmnetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmnetiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmnetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
