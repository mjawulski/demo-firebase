import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartsModule } from 'ng2-charts';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AdminResultsComponent } from './admin-results/admin-results.component';
import { QuestionAnswersChartComponent } from './question-answers-chart/question-answers-chart.component';
import { ChartsGridComponent } from './charts-grid/charts-grid.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';

const appRoutes: Routes = [
  { path: 'results', component: AdminResultsComponent },
  { path: 'survey', component: SurveyComponent },
  {
    path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/survey' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminResultsComponent,
    QuestionAnswersChartComponent,
    ChartsGridComponent,
    AddQuestionComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
