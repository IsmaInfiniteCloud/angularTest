import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../models/data.service';
import { Employe } from '../models/employe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employes:Employe[] = []
  employe:Employe = new Employe(1, 'David Bédard', new Date(2010,10,15), 45000.00)
  constructor(private route:ActivatedRoute,private service:DataService) {
    this.employes =service.retournerEmployes();
  }

  ngOnInit(): void {
    // this.employes.push(new Employe(1, 'David Bédard', new Date(2010,10,15), 45000.00))
    // this.employes.push(new Employe(2, 'Annie Lavictoire', new Date(2012,9,25), 60000.00))
    // this.employes.push(new Employe(3, 'Samuel Lam', new Date(2012,3,5), 55000.00))
    // this.employes.push(new Employe(4, 'Alexis Diamond', new Date(2015,8,15), 68000.00))
    //trouver l'id dans l'adresse URL
    let param = this.route.snapshot.paramMap.get('id')
    if (param != null){
      let id  = parseInt(param)
      //recherche de l'employé avec cet id
      for (let index = 0; index < this.employes.length; index++) {
        if(this.employes[index].id == id){
          this.employe = this.employes[index]
          break
        }
      }
    }
  }

}
