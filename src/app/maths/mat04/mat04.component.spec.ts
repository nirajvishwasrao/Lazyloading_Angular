import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT04Component } from './mat04.component';

describe('MAT04Component', () => {
  let component: MAT04Component;
  let fixture: ComponentFixture<MAT04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAT04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MAT04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
