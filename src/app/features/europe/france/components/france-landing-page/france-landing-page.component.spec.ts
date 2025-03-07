import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceLandingPageComponent } from './france-landing-page.component';

describe('FranceLandingPageComponent', () => {
  let component: FranceLandingPageComponent;
  let fixture: ComponentFixture<FranceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FranceLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
