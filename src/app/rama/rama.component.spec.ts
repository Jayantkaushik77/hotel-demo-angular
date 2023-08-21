import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaComponent } from './rama.component';

describe('RamaComponent', () => {
  let component: RamaComponent;
  let fixture: ComponentFixture<RamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamaComponent]
    });
    fixture = TestBed.createComponent(RamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
