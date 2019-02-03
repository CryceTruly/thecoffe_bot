import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap,finalize } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() id: string;
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: any;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {

  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type ');
      return;
    }

    // The storage path
    const path = `pics/${this.id}/${new Date().getTime()}_${file.name}`;
    let ref=this.storage.ref(path);

    // Totally optional metadata
    const customMetadata = { app: 'specialist pwa' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
    // Progress monitoring
    this.percentage = this.task.percentageChanges();


    this.task.snapshotChanges().pipe(
      finalize(() => {
  this.db.list(`photos/${this.id}`).push({ path: path, data: customMetadata, 
    downloadUri:  ref.getDownloadURL() }).then(e => {
          alert('Photo Uploaded');      
        }  )
      }))
    }
  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  ngOnInit() {
    console.log('FRM PERO ' + this.id);
  }

}
