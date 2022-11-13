import { Component, OnInit } from '@angular/core';

import { DataService } from '../models/data.service';
import { Employe } from '../models/employe';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  employes:Employe[] = []
  employe:Employe = new Employe(0,'',new Date(), 0)
  constructor(private service :DataService) {
    this.employes = service.retournerEmployes();
   }

  ngOnInit(): void {
    // this.employes.push(new Employe(1, 'David Bédard', new Date(2010,10,15), 45000.00))
    // this.employes.push(new Employe(2, 'Annie Lavictoire', new Date(2012,9,25), 60000.00))
    // this.employes.push(new Employe(3, 'Samuel Lam', new Date(2012,3,5), 55000.00))
    // this.employes.push(new Employe(4, 'Alexis Diamond', new Date(2015,8,15), 68000.00))
    this.employe.id = this.employes[this.employes.length - 1].id + 1
  }

  ajout():void{
    this.service.ajouterEmploye(this.employe)
  }
}
