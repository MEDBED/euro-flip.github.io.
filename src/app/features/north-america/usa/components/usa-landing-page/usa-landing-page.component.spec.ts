import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaLandingPageComponent } from './usa-landing-page.component';

describe('UsaLandingPageComponent', () => {
  let component: UsaLandingPageComponent;
  let fixture: ComponentFixture<UsaLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsaLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
