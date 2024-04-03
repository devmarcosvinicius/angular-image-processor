import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageCardComponent } from './left-image-card.component';

describe('LeftImageCardComponent', () => {
  let component: LeftImageCardComponent;
  let fixture: ComponentFixture<LeftImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftImageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
