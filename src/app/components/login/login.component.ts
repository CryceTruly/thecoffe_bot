import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
  constructor(private authServic: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore) {

  }

  ngOnInit() {
  }


  checkUserSignIn() {
    if( this.user.email.length<1 
      
      || this.user.password.length<1
      ){
      this.setErrors('all fields are required');
      return false;
    }
    if( this.user.password.length<6){
      this.setErrors('Password should be atleast 6 characters');
      return false;
    }
    this.authServic.auth.signInWithEmailAndPassword(this.user.email, this.user.password).catch(e => {
      console.log(e);

      this.setErrors(e);
    }).then(user => {
      this.router.navigateByUrl('diseases');
    });

  }

  setErrors(e) {

    document.querySelector('.errors').style.display='block';
    document.querySelector('.errors').innerHTML=e;

    setTimeout(() => {
      
    document.querySelector('.errors').innerHTML='';
    
    document.querySelector('.errors').style.display='none';
    }, 3000);

  }
}
