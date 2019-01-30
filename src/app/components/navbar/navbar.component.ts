import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.title = 'CoffeePro';
  }

  ngOnInit() {
  }


  logoutClicked() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('login').then(res => {


    });
  }



}
