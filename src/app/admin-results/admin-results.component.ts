import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable, timer } from 'rxjs';
import { auth } from 'firebase';
import { Question } from './question.model';
import { BaseChartDirective } from 'ng2-charts';
import { debounce } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-admin-results',
  templateUrl: './admin-results.component.html',
  styleUrls: ['./admin-results.component.css']
})
export class AdminResultsComponent implements OnInit {
  isAuthorized = false;

  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(u => {
      if (u && u.email === 'mjawulski@gmail.com') {
        this.isAuthorized = true;
      }
    });
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
