import { Component, OnInit } from '@angular/core';

import { Account } from '../account';

@Component({
  selector: 'app-account-list-component',
  templateUrl: './account-list-component.component.html',
  styleUrls: ['./account-list-component.component.scss']
})
export class AccountListComponentComponent implements OnInit {

compte1 = new Account(1,"Checking",3650,"Hilda")
compte2 = new Account(2,"Saving",4166,"Vicki")
compte3 = new Account(3,"Checking",1903,"Collestine")
compte4 = new Account(4,"TFSA",120003,"Zollie")

  constructor() {
    this.comptes.push
   }

  ngOnInit(): void {
  }

}
