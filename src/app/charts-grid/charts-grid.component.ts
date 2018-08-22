import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'node_modules/angularfire2/firestore';
import { Observable } from 'rxjs';
import { Question } from '../admin-results/question.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-charts-grid',
  templateUrl: './charts-grid.component.html',
  styleUrls: ['./charts-grid.component.css']
})
export class ChartsGridComponent implements OnInit {
  questions: Observable<Question[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.questions = this.afs.collection<Question>('questions').valueChanges();
  }
}
