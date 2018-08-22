import { Component, OnInit } from '@angular/core';
import { Question } from '../admin-results/question.model';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Answer } from '../admin-results/answer.model';

export interface QuestionId extends Question {
  id: string;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  private questionsCollection: AngularFirestoreCollection<Question>;
  private questions: Observable<QuestionId[]>;
  private questionsList: QuestionId[];
  private currentQuestionIndex: number;

  currentQuestion: QuestionId;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.questionsCollection = this.afs.collection<Question>('questions');

    this.questions = this.questionsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Question;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    this.questions.subscribe(q => {
      if (q.length && !this.questionsList) {
        this.currentQuestion = q[0];
        this.currentQuestionIndex = 0;
        this.questionsList = q;
      }
    });
  }

  getNextQuestion(): QuestionId {
    if (this.isNextQuestionAvailable()) {
      return this.questionsList[++this.currentQuestionIndex];
    }
  }

  isNextQuestionAvailable(): boolean {
    return (
      this.questionsList &&
      this.questionsList.length &&
      this.currentQuestionIndex < this.questionsList.length - 1
    );
  }

  vote(answer: Answer) {
    const docRef = this.afs.firestore
      .collection('questions')
      .doc(this.currentQuestion.id);

    this.afs.firestore
      .runTransaction(transaction =>
        transaction.get(docRef).then(docToUpdate => {
          const answers = docToUpdate.data().answers;
          const answerToUpdate = answers.find(a => a.name === answer.name);
          answerToUpdate.count = answerToUpdate.count + 1;

          transaction.update(docRef, { answers: answers });
        })
      )
      .then(() => console.log('Transaction successfully committed!'))
      .catch(error => console.log('Transaction failed: ', error));

    if (this.isNextQuestionAvailable()) {
      this.currentQuestion = this.getNextQuestion();
    } else {
      this.currentQuestion = null;
    }
  }
}
