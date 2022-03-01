import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {

  etudiant: any = {
    id: 0,
    nom: '',
    prenom: ''
  };
  constructor(private service: ServiceService, private route: Router) {}
ngOnInit(): void {
}
add() {
  this.service.addEtudiant(this.etudiant).subscribe({
    next: (data: any) => {
      this.route.navigate(['/etudiants']);
    },
    error: (error: any) => {},
  });}
}
