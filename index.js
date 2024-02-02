//Module package CORE
//Module package EXTERNAL

//Module package FILE
//const calculate = require("./hisob.js");

//const natija = calculate.kopaytrish(80, 20);
//console.log("Natija", natija);
//console.log("************");

//const natija2 = calculate.qoshish(70, 20);
//console.log("Natija", natija2);
//console.log("************");

//const natija3 = calculate.ayirish(80, 20);
//console.log("Natija", natija3);

//const  moment = require("moment"); bular alohida
//console.log(require("module").wrapper);  bular alohida
//console.log(arguments); bular alohida
const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("==================");

const myAccount = new Account("Shoxrux", 200000, 97455485485554);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

//Mercedes cls 2.4 mln
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
