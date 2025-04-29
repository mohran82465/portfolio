import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAndEductionComponent } from './experience-and-eduction.component';

describe('ExperienceAndEductionComponent', () => {
  let component: ExperienceAndEductionComponent;
  let fixture: ComponentFixture<ExperienceAndEductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceAndEductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAndEductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
