import { Component, OnInit } from '@angular/core';
import { Question } from '../admin-results/question.model';
import { Answer } from '../admin-results/answer.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  private questionsCollection: AngularFirestoreCollection<Question>;

  questionToAdd: Question;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.questionsCollection = this.afs.collection<Question>('questions');

    this.questionToAdd = new Question();
  }

  addAnswer() {
    this.questionToAdd.answers.push(new Answer());
  }

  addQuestion() {
    const document = JSON.parse(JSON.stringify(this.questionToAdd)); // needs to be object. not custom object
    this.questionsCollection.add(document);
    this.questionToAdd = new Question();
  }
}
