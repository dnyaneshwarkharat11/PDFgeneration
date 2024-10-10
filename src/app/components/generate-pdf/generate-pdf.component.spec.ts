import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePdfComponent } from './generate-pdf.component';

describe('GenereatePdfComponent', () => {
  let component: GeneratePdfComponent;
  let fixture: ComponentFixture<GeneratePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
