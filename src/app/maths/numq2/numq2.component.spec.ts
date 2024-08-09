import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numq2Component } from './numq2.component';

describe('Numq2Component', () => {
  let component: Numq2Component;
  let fixture: ComponentFixture<Numq2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Numq2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Numq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
