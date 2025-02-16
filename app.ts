import { CompanyAccount } from './class/CompanyAccount'
import { OtherAccount} from './class/OtherAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.deposit(10))
console.log(peopleAccount.withdraw(1))

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount.deposit(5))
// console.log(companyAccount.getLoan(100))

// const otherAccount: OtherAccount = new OtherAccount('Other', 30);
// otherAccount.deposit(35)
// console.log(otherAccount.deposit(35))