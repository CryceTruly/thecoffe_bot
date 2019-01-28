import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { NewComponent } from './components/new/new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [
  {path:'',component:DiseasesComponent},
  {path:'login',component:LoginComponent},
  {path:'diseases/:disease',component:DiseaseComponent},
  {path:'diseases',component:DiseasesComponent},
  {path:'new',component:NewComponent},
  {path:'**',component:PageNotFoundComponent},
  {path:'upload',component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
