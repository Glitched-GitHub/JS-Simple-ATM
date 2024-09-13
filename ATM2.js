let rlSync = require("readline-sync");

let accountBalance = 0;
const transactionType = ["Balance", "Deposit", "Withdrawal"]



ATM = () => {
    let operation = rlSync.keyInSelect(transactionType, "Which function would you like to use?");
    operation = operation + 1
    if (operation === 1){
        console.log(`Your current balance is £${accountBalance}`);
        another();
    } else if (operation === 2){
        let deposit = rlSync.questionFloat("How much would you like to deposit? £");
        accountBalance += deposit;
        console.log(`Your new account balance is now £${accountBalance}`);
        another();
    } else if (operation === 3){
        let withdraw = rlSync.questionFloat("How much would you like to withdraw? £");
        if ((accountBalance - withdraw) < 0) {
            console.log("You do not currently have sufficient funds in your account for this transaction.");
            another();
        } else {
            accountBalance -= withdraw;
            console.log(`You have withdrawn £${withdraw}, your new account balance is £${accountBalance}.`)
            another();
        }
    } else {
        console.log("Transaction cancelled");
        return false;
    }


}

another = () => {
    if (rlSync.keyInYNStrict("Would you like to do another transaction? ")) {
        ATM();
    } else {
        console.log("Closing");
        return false;
    }
}

ATM();