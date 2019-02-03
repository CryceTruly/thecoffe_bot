import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Upload } from '../models/Upload';
import { Disease } from '../models/disease/disease';
import { finalize } from 'rxjs/operators';
import {AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Injectable()
export class UploadService {
  uploads: Observable<Upload[]>;
  selectedFiles: FileList;
  downLoadUrl:Observable<any>;
  constructor(private storage: AngularFireStorage,public router:Router,
    private nfs: AngularFirestore, private database: AngularFireDatabase) { }
  addDiseaseWithPhoto(file, id: string, name: string, signs: string, measures: string, effects: string) {
    console.log('uploading started for '+file);
    //set a storage location
    const path = `diseaseimages/${new Date().getTime()}_${file.name}`;
const ref=this.storage.ref(path);
    const task= this.storage.upload(path, file);
    task.snapshotChanges().pipe(
      finalize(() => {

        this.downLoadUrl = ref.getDownloadURL();
         this.downLoadUrl.subscribe(str=>{
      const idd = this.nfs.createId();
      id = idd;
    const disease: Disease = {
      name: name,
      signs: signs,
      measures: measures,
      effects: effects,
      storepath: path,
      photo: str,
      id: id
    }

    this.database.object(`diseases/${id}`).set(disease);
    this.nfs.collection('diseases').doc(id).set(disease).catch(err => console.log(err)).then(function () {
      document.forms[0].reset();
      alert('Added successfully');
     console.log('success');
     
}
 );




         });
        
      } )
   )
  .subscribe()


//     const ref = this.storage.ref(path);
//     // const task = ref.putString(file);
//     ref.putString(file).catch(err=>console.log(err)).then(res=>console.log('uploaded'));
//     const idd = this.nfs.createId();
//     id = idd;
//     console.log('new id '+id);
    

//     task.snapshotChanges().pipe(
//       finalize(() => {
//         console.log('download url '+ref.getDownloadURL());
        
//         this.downLoadUrl = ref.getDownloadURL();
    
//     const disease: Disease = {
//       name: name,
//       signs: signs,
//       measures: measures,
//       effects: effects,
//       storepath: path,
//       photo: this.downLoadUrl,
//       id: id
//     }
// console.log('to set '+disease);

//     this.database.object(`diseases/${id}`).set(disease);
//     this.nfs.collection('diseases').doc(id).set(disease).catch(err => console.log(err)).then(function () {
//       document.forms[0].reset();
//       this.router.navigateByUrl('');
//       alert('Added successfully');
//      console.log('success');
     
// }
//  );
  

// }))

  }

      
}  
