import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Specialist } from 'src/app/models/specialist/specialist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Specialist = {
    email: '',
    password: ''
  }
  showErrors = false;
  constructor(private authServic: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore) {

  }

  ngOnInit() {
  }


  checkUserSignIn() {
    if (!this.user.email.length){
      this.setErrors('Email is required');
      return false;
    }
     if(!this.user.password){
      this.setErrors('Password is required');
      return false;
    }
    if (this.user.password.length < 6) {
      this.setErrors('Password should be atleast 6 characters');
      return false;
    }
    this.authServic.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch(e => {
      console.log(e);

      this.setErrors(e);
      return false;
    }).then(user => {

      this.router.navigateByUrl('diseases');

    });

  }

  setErrors(e) {
    this.showErrors = true;
    document.querySelector('#errors').innerHTML = e;

    setTimeout(() => {
      this.showErrors = false;
      document.querySelector('#errors').innerHTML = '';
    }, 3000);

  }
}
