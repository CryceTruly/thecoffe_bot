import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
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
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [AuthService,UploadService,SummaryPipe,FileSizePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
