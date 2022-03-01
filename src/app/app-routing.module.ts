import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';

const routes: Routes = [
  {path:"etudiants",component:EtudiantsComponent},
  {path:"add",component:AddEtudiantComponent},
  {path:"",component:EtudiantsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
