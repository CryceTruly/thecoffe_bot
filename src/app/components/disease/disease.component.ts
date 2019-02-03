import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
disease:any;
id:string;
  constructor(private router:ActivatedRoute,private afs:AngularFirestore,private routerr:Router) {
   router.paramMap.subscribe(params=>{
    this.id = params.get('id');
this.afs.collection('diseases').doc(this.id).valueChanges().subscribe(data=>{
this.disease = data;
});


    });

   }

  ngOnInit() {


  }
  deleteDisease(id:string){
console.log('deleting disese '+id);
this.afs.collection('diseases').doc(id).delete().then(event => {
  this.routerr.navigate(['/diseases']).catch(err => console.log(err));
}).catch(eror => console.log(eror));
this.routerr.navigate(['/diseases']);
alert('Disease removed');
  }
}
