import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email='';
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
    document.querySelector('.errors').style.display='block';
    document.querySelector('.errors').classList.add(cls);
    document.querySelector('.errors').innerHTML=msg;

    setTimeout(() => {
      
    document.querySelector('.errors').innerHTML='';
    
    document.querySelector('.errors').style.display='none';
    }, 3000);
  }
}
