import { AuthService } from './auth.service';
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

  private basePath: string = '/uploads';
  uploads: Observable<Upload[]>;
  selectedFiles: FileList;
  private downLoadUrl;
  constructor(private storage: AngularFireStorage,private router:Router,
    private nfs: AngularFirestore, private database: AngularFireDatabase) { }
  addDiseaseWithPhoto(files, id: string, name: string, signs: string, measures: string, effects: string) {
    console.log('uploading started');
    const file = files;
    if (file.type.split('/')[0] !== 'image') {
      alert('Picked file is not an image');
      return;
    }

    //set a storage location
    const path = `diseaseimages/${new Date().getTime()}_${file.name}`;
    const ref = this.storage.ref(path);
    const task = ref.putString(file);
    const idd = this.nfs.createId();
    id = idd;

    task.snapshotChanges().pipe(
      finalize(() => {
        this.downLoadUrl = ref.getDownloadURL()
    
    const disease: Disease = {
      name: name,
      signs: signs,
      measures: measures,
      effects: effects,
      storepath: path,
      photo: this.downLoadUrl,
      id: id
    }

    this.database.object(`diseases/${id}`).set(disease);
    this.nfs.collection('diseases').doc(id).set(disease).catch(err => console.log(err)).then(function () {
      document.forms[0].reset();
      this.router.navigateByUrl('');
      alert('Added successfully');
     
}
 );
  

}))

  }

      
}  
