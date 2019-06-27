import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  constructor(private db: AngularFireDatabase){}
  ngOnInit(){
    console.log(this.db.list('/users').valueChanges().subscribe(users=>{console.log(users)}));
    
  }
}
