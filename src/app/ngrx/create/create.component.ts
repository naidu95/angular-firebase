import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Tutorial } from '../../models/tutorial.model'
import * as TutorialActions from '../../actions/tutorial.actions';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  userId:any;
  constructor(private store: Store<AppState>,public auth:AngularFireAuth) {
    this.tutorials = store.select('tutorial');
    
    this.userId=firebase.auth().currentUser.uid;
  }
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }
  addTutorial(name, url) {
    
    firebase.database().ref('users/'+this.userId).push({
      username: "Hai users",
    });
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}) )
  }

  ngOnInit() {
  }

}
