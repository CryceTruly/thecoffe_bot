import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email='';
showErrors=false;
  constructor(private af:AngularFireAuth) { }

  ngOnInit() {
  }
  sendPasswordResetEmail(){
this.af.auth.sendPasswordResetEmail(this.email).then(sucess=>{

  this.setFeedbach('alert-success','A reset email has been sent with instructions');
}).catch(err=>{
  this.setFeedbach('alert-danger',err);
})
  }

  setFeedbach(cls,msg){
    this.showErrors=true;
    document.querySelector('.errors').classList.add(cls);
    document.querySelector('.errors').innerHTML=msg;

    setTimeout(() => {
      
    document.querySelector('.errors').innerHTML='';
    
    this.showErrors=false;
    }, 3000);
  }
}
