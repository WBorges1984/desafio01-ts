export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean =>{
    return this.status;
  }

  deposit = (money: number): string => {
    if(this.validateStatus()){
      this.balance = this.balance + money;
      return `Voce depositou: ${money} e agora esta com saldo de R$ ${this.balance}`;
    }
    return 'Sua conta está inativa.'
  }

  withdraw = (money: number): string  => {
    if(!this.validateStatus()){
      return `Sua conta está inativa`
    }
    
    if(!this.validateWithdraw(money)){
      return `Saldo insuficiente`
    }
    this.balance = this.balance - money;
    return `Voçê sacou ${money} e ficou com saldo de ${this.balance}`
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (num: number) => {
    this.balance = num;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    return false
  }
  
  private validateWithdraw = (money: number): boolean => {
    if (this.balance < money) {
      throw new Error('Saldo insuficiente')
    }
    
    return true

  }
}
