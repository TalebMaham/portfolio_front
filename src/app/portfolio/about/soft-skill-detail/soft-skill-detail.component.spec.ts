import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillDetailComponent } from './soft-skill-detail.component';

describe('SoftSkillDetailComponent', () => {
  let component: SoftSkillDetailComponent;
  let fixture: ComponentFixture<SoftSkillDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftSkillDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
