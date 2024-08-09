import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAR01Component } from './mar01.component';

describe('MAT01Component', () => {
  let component: MAR01Component;
  let fixture: ComponentFixture<MAR01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MAR01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MAR01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
