import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponentRecruiter } from './recruiter/main-layout/main-layout.component';
import { MainLayoutComponentEmployer } from './employer/main-layout/main-layout.component';


const routes: Routes = [
  { path: 'recruiter', component: MainLayoutComponentRecruiter },
  { path: 'employer', component: MainLayoutComponentEmployer }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
