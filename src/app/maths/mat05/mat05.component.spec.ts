import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat05Component } from './mat05.component';

describe('Mat05Component', () => {
  let component: Mat05Component;
  let fixture: ComponentFixture<Mat05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mat05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mat05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
