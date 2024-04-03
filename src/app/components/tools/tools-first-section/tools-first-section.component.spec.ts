import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsFirstSectionComponent } from './tools-first-section.component';

describe('ToolsFirstSectionComponent', () => {
  let component: ToolsFirstSectionComponent;
  let fixture: ComponentFixture<ToolsFirstSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsFirstSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
