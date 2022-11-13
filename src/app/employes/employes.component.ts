import { Component, OnInit } from '@angular/core';

import { DataService } from '../models/data.service';
import { Employe } from '../models/employe';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes:Employe[] = []
  constructor(private service:DataService) {
    this.employes= service.retournerEmployes();
  }

  ngOnInit(): void {
    // this.employes.push(new Employe(1, 'David Bédard', new Date(2010,10,15), 45000.00))
    // this.employes.push(new Employe(2, 'Annie Lavictoire', new Date(2012,9,25), 60000.00))
    // this.employes.push(new Employe(3, 'Samuel Lam', new Date(2012,3,5), 55000.00))
    // this.employes.push(new Employe(4, 'Alexis Diamond', new Date(2015,8,15), 68000.00))
  }

}
