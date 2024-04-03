import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightImageCardComponent } from './right-image-card.component';

describe('RightImageCardComponent', () => {
  let component: RightImageCardComponent;
  let fixture: ComponentFixture<RightImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightImageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
