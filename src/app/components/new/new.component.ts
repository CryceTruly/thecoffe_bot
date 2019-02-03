import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { UploadService } from '../../services/upload.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Disease } from 'src/app/models/disease/disease';
import { Upload } from 'src/app/models/Upload';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  disease: Disease = {
    id: '',
    name: '',
    signs: '',
    effects: '',
    photo: '',
    measures: '',

  };

  errors=[]
disable=false;
text='Submit';
  task: AngularFireUploadTask;
  photoDownloadUrl: Observable<String>;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private afs: AngularFirestore,
     private ups: UploadService, 
     private database: AngularFireDatabase) { }

  ngOnInit() {
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  addDisease() {
    
    if (this.selectedFiles == undefined) {
      this.errors.push('Please choose an image');
    }

    const file1 = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file1);
    if (file1.name == '') {
      this.errors.push('Please choose an image');
      
    }

    if (file1.type.split('/')[0] !== 'image') {
      this.errors.push('Picked file is not an image');
     
    }
    if ((this.disease.name.length) < 2) {
      this.errors.push('Disease Name is required');
     

    }

    if ((this.disease.measures.length) < 15) {
      this.errors.push('Add more control measures');
     

    }
    if ((this.disease.effects.length) < 2) {
      this.errors.push('Add more Disease Effects');
     

    }




    if ((this.disease.signs.length) < 5) {
      this.errors.push('Add more signs');
     

    }
if(this.errors.length){
 this.errors.forEach(err => {
   
  document.querySelector('#error').classList.add('alert-danger');
   document.querySelector('#errors').innerHTML+=
   `<li>${err}</li>`
    
  });

  setTimeout(() => {
    
    document.querySelector('#error').classList.remove('alert-danger');
    document.querySelector('#errors').innerHTML='';
    this.errors=[]
  }, 3000);

  return false;
}else{
  document.querySelector('.spinners').classList.add('spinner');
  console.log(this.disease);
  this.disable=true;
  this.text='Please wait...';
  
  this.ups.addDiseaseWithPhoto(file1, this.disease.id, this.disease.name, this.disease.signs, 
    this.disease.measures,
    this.disease.effects);
 
}
    
  }

}
