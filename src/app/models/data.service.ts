import { Employe } from './employe';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  employes:Employe[]=[];
  constructor() {
    this.employes.push(new Employe(1, 'David Bédard', new Date(2010,10,15), 45000.00))
    this.employes.push(new Employe(2, 'Annie Lavictoire', new Date(2012,9,25), 60000.00))
    this.employes.push(new Employe(3, 'Samuel Lam', new Date(2012,3,5), 55000.00))
    this.employes.push(new Employe(4, 'Alexis Diamond', new Date(2015,8,15), 68000.00))
    this.employes.push(new Employe (5,'Adam Guianni',new Date(2011,2,1),34000.00))
  }
  retournerEmployes():Employe[]{
    return this.employes;
  }
  ajouterEmploye(employe:Employe):void{
    this.employes.push(employe)
  }
}

