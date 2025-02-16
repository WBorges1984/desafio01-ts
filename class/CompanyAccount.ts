import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): string => {
    if(!this.getStatus()){
      return `Sua conta está inativa!`
    }
    let balanceMoment = this.getBalance();
    this.setBalance(balanceMoment + value);

    return `Empresa fez um emprestimo de ${value} e agora esta com saldo de R$ ${this.getBalance()}`;
  }
}
