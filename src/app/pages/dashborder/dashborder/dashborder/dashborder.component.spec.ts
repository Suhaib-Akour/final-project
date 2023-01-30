import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashborderComponent } from './dashborder.component';

describe('DashborderComponent', () => {
  let component: DashborderComponent;
  let fixture: ComponentFixture<DashborderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashborderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
