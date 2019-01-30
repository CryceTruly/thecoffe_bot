import { Component, OnInit } from '@angular/core';
import { FirebaseFirestore } from '@angular/fire';
import {FirebaseStorage } from '@angular/fire';
import { UploadService } from '../../services/upload.service';
import { FirebaseDatabase } from '@angular/fire';
import { Disease } from '../../models/disease/disease';
import { Observable } from 'rxjs';
import { Upload } from '../../models/Upload';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
disease: Disease = {
  id:'',
  name: '',
  signs: '',
  effects: '',
  photo: '',
  measures: '',
}
// };

// task:FirebaseStorage;
//   photoDownloadUrl:Observable<String>;
//   selectedFiles: FileList;
//   currentUpload: Upload;
//   constructor(private afs: FirebaseFirestore,private ups: UploadService,
//     private database: FirebaseDatabase) { }

  ngOnInit() {
  }
//   detectFiles(event) {
//     console.log('detectFiles');
//     this.selectedFiles = event.target.files;
// }

//   addDisease(){
//     const file1 = this.selectedFiles.item(0);
//     this.currentUpload = new Upload(file1);
//     if(file1.name==''){
//       alert('Please pick a photo');
//       return false;
//     }

//     if(file1.type.split('/')[0]!=='image'){
//       alert('Picked file is not an image');
//       return false;
//     }
//     if((this.disease.name.length)<2){
//       alert('Disease Name is required');
//       return false;

//     }

// if((this.disease.measures.length)<15){
//   alert('Add more control measures');
//   return false;

// }
// if((this.disease.effects.length)<2){
//   alert('Add more Disease Effects');
//   return false;

// }




// if((this.disease.signs.length)<5){
//   alert('Add more signs');
//   return false;

// }



// if(this.selectedFiles == undefined){
//   alert('Please choose an image');
//       return false;
//      }


// // this.ups.addDiseaseWithPhoto(file1,this.disease.id, this.disease.name,this.disease.signs,this.disease.measures,
// //   this.disease.effects);
// //      alert('Adding disease');



















//   }
}

