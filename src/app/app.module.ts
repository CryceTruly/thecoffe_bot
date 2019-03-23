import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ForgotComponent } from './components/forgot/forgot.component';
import { UploadService } from './services/upload.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { GalleryComponent } from './component/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NewComponent,
    DiseaseComponent,
    DiseasesComponent,
    PageNotFoundComponent,
    FileSizePipe,
    SummaryPipe,
    ForgotComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    FormsModule

  ],
  providers: [AngularFireAuth, AngularFirestore, SummaryPipe,
     FileSizePipe,UploadService,AngularFireStorage,AngularFireDatabase],
  bootstrap: [AppComponent]
})


export class AppModule { }
