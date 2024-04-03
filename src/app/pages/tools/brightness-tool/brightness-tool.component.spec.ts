import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessToolComponent } from './brightness-tool.component';

describe('BrightnessToolComponent', () => {
  let component: BrightnessToolComponent;
  let fixture: ComponentFixture<BrightnessToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrightnessToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrightnessToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
