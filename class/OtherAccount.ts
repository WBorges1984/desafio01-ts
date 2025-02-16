import { DioAccount } from "./DioAccount";


export class OtherAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (money: number): string => {
        let balanceAtual = this.getBalance();
        if(this.getStatus()){
          this.setBalance(balanceAtual + money + 10) ;
          return `Voce depositou: ${money} teve um bonus de R$ 10,00 e agora esta com saldo de R$ ${this.getBalance()}`;
        }
        return 'Sua conta está inativa.'
      }
}