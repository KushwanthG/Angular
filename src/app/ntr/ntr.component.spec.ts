import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtrComponent } from './ntr.component';

describe('NtrComponent', () => {
  let component: NtrComponent;
  let fixture: ComponentFixture<NtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
