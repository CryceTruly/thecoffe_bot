import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Disease } from 'src/app/models/disease/disease';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {

  diseases: Disease[];
  constructor(private afs:AngularFirestore) {
    this.afs.collection('diseases').valueChanges().subscribe(data=>{
     this.diseases =  data;
    });
   }

  ngOnInit() {

  }

}
