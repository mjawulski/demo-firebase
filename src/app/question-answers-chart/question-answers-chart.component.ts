import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Question } from '../admin-results/question.model';
import { Answer } from '../admin-results/answer.model';

@Component({
  selector: 'app-question-answers-chart',
  templateUrl: './question-answers-chart.component.html',
  styleUrls: ['./question-answers-chart.component.css']
})
export class QuestionAnswersChartComponent implements OnInit, OnChanges {
  @Input()
  public answers: Answer[];

  public chartLabels: string[] = [];
  public chartData: number[] = [];

  public chartType = 'pie';
  public chartOptions = {
    animation: {
      animateRotate: false,
      animateScale: true
    }
  };

  @ViewChild(BaseChartDirective)
  chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.chartLabels.length = 0;
    this.chartData.length = 0;
    const labels = this.answers.map(a => a.name);
    const counts = this.answers.map(a => a.count);
    this.chartLabels.push(...labels);
    this.chartData.push(...counts);
    this.chart.ngOnChanges({});
  }
}
