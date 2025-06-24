import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceDetailComponentComponent } from './competence-detail-component.component';

describe('CompetenceDetailComponentComponent', () => {
  let component: CompetenceDetailComponentComponent;
  let fixture: ComponentFixture<CompetenceDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
