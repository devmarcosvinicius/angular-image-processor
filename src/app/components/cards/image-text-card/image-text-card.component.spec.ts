import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextCardComponent } from './image-text-card.component';

describe('ImageTextCardComponent', () => {
  let component: ImageTextCardComponent;
  let fixture: ComponentFixture<ImageTextCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTextCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTextCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
