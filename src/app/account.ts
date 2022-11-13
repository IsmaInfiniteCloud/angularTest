export class Account {
  id !:number  ;
  type !:string ;
  balance !:number;
  owner!:string ;


  constructor(id:number,type:string,balance:number,owner:string){
    this.id = id ;
    this.type = type;
    this.balance = balance ;
    this.owner = owner;

  }
}
