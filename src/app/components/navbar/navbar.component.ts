import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
title:string;
  constructor(private router:Router) {
    this.title='CoffeePro'
   }

  ngOnInit() {
  }


logoutClicked(){
  this.router.navigateByUrl('login').then(res=>{
    console.log('routed to '+this.router.url);
    
  })
}
}
