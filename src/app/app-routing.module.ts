import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DiseaseComponent } from './components/disease/disease.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { NewComponent } from './components/new/new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';
import { ForgotComponent } from './components/forgot/forgot.component';

const routes: Routes = [
  { path: '', component: DiseasesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'diseases/:id', component: DiseaseComponent, canActivate: [AuthGuard] },
  { path: 'diseases', component: DiseasesComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewComponent, canActivate: [AuthGuard] },

  {path:'forgot',component:ForgotComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
