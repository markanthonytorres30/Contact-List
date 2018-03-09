import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

var config = {
  apiKey: "AIzaSyDzrnf9AnGjs6ogjs9freIK3Luy2Bj4E9M",
  authDomain: "contact-list-ad5a9.firebaseapp.com",
  databaseURL: "https://contact-list-ad5a9.firebaseio.com",
  projectId: "contact-list-ad5a9",
  storageBucket: "contact-list-ad5a9.appspot.com",
  messagingSenderId: "491428068888"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),  // Add this
    AngularFirestoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
