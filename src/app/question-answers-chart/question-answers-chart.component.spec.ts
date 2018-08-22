import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswersChartComponent } from './question-answers-chart.component';

describe('QuestionAnswersChartComponent', () => {
  let component: QuestionAnswersChartComponent;
  let fixture: ComponentFixture<QuestionAnswersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
