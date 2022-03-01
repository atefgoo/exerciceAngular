import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.scss']
})
export class EtudiantsComponent implements OnInit {
  etudiants: any = [];

  constructor(private service: ServiceService, private router: Router) {
    this.getEtudiants();
  }

  ngOnInit(): void {}

  getEtudiants() {
    this.service.getAllEtudiants().subscribe({
      next: (data: any) => {
        this.etudiants = data;
      },
      error: (error: any) => {},
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe({
      next: (data: any) => {
        this.getEtudiants();
      },
      error: (error: any) => {},
      complete: () => {},
    });
  }

}
