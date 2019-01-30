import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NewComponent } from './components/new/new.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { AuthService } from './services/auth.service';
import { UploadService } from './services/upload.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ForgotComponent } from './components/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FileUploadComponent,
    NewComponent,
    DiseaseComponent,
    DiseasesComponent,
    PageNotFoundComponent,
    DropZoneDirective,
    FileSizePipe,
    SummaryPipe,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule,
    FormsModule

  ],
  providers: [AngularFireAuth, AngularFirestore, SummaryPipe, FileSizePipe],
  bootstrap: [AppComponent]
})


export class AppModule { }
