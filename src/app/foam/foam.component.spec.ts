import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoamComponent } from './foam.component';

describe('FoamComponent', () => {
  let component: FoamComponent;
  let fixture: ComponentFixture<FoamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
