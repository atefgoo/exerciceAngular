import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from './components/delete-etudiant/delete-etudiant.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEtudiantComponent,
    DeleteEtudiantComponent,
    EtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
