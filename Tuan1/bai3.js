var Account = /** @class */ (function () {
    function Account(accountNumber, name, balance) {
        this.setAccountNumber(accountNumber);
        this.setName(name);
        this.setBalance(balance);
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.setAccountNumber = function (accountNumber) {
        if (accountNumber > 0) {
            this.accountNumber = accountNumber;
        }
        else {
            this.accountNumber = 999999;
        }
    };
    Account.prototype.setName = function (name) {
        if (name.length > 0) {
            this.name = name;
        }
        else {
            this.name = "Chua xac dinh";
        }
    };
    Account.prototype.setBalance = function (balance) {
        if (balance > 0) {
            this.balance = balance;
        }
        else {
            this.balance = 5000;
        }
    };
    Account.prototype.deposit = function (amount) {
        if (this.balance > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && (amount + fee) <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    };
    Account.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * 0.35;
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (amount > 0 && amount <= this.balance) {
            this.withdraw(amount, 0);
            acc2.deposit(amount);
            return true;
        }
        return false;
    };
    Account.prototype.toString = function () {
        return "Ho ten: ".concat(this.name, ", So tien: ").concat(this.balance, ", STK: ").concat(this.accountNumber);
    };
    return Account;
}());
function main_3() {
    var acc1 = new Account(123456, "A", 1000000);
    var acc2 = new Account(567890, "B", 500000);
    console.log(acc1.deposit(500000));
    console.log(acc2.deposit(200000));
    console.log(acc1.withdraw(100000, 5000));
    console.log(acc2.withdraw(150000, 3000));
    console.log(acc1.addInterest());
    console.log(acc2.addInterest());
    console.log(acc1.transfer(acc2, 100000));
    console.log(acc1);
    console.log(acc2);
}
main_3();
