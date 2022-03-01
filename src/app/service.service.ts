import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllEtudiants(): Observable<any> {
    return this.http.get("http://localhost:8080/etudiants");
  }

  addEtudiant(produit:any): Observable<any> {
    return this.http.post("http://localhost:8080/addEtudiant",produit);
  }

  delete(id:number): Observable<any> {
    return this.http.delete("http://localhost:8080/deleteEtudiant/"+id);
  }

}
