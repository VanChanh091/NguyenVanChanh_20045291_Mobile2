class Account{
    private accountNumber: number;
    private name:string;
    private balance:number;

    constructor(accountNumber: number, name:string, balance:number){
       this.setAccountNumber(accountNumber);
       this.setName(name);
       this.setBalance(balance);
    }

    getAccountNumber(): number{
        return this.accountNumber;
    }

    getName():string{
        return this.name;
    }

    getBalance(): number{
        return this.balance;
    }

    setAccountNumber(accountNumber: number): void{
        if(accountNumber > 0){
            this.accountNumber = accountNumber;
        }else{
            this.accountNumber = 999999;
        }
    }

    setName(name: string): void{
        if(name.length > 0){
            this.name = name;
        }else{
            this.name = "Chua xac dinh";
        }
    }

    setBalance(balance: number):void{
        if(balance > 0){
            this.balance = balance;
        }else{
            this.balance = 5000;
        }
    }

    deposit(amount: number): boolean{
        if(this.balance > 0){
            this.balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount: number, fee: number): boolean{
        if(amount > 0 && (amount + fee) <= this.balance){
            this.balance -= (amount + fee);
            return true;
        }
        return false;
    }

    addInterest():void{
        this.balance = this.balance + this.balance*0.35;
    }

    transfer(acc2: Account, amount:number): boolean{
        if(amount > 0 && amount <= this.balance){
            this.withdraw(amount, 0);
            acc2.deposit(amount);
            return true;
        }
        return false;
    }

    toString():string{
        return `Ho ten: ${this.name}, So tien: ${this.balance}, STK: ${this.accountNumber}`;
    }
}

function main_3():void{
    const acc1 = new Account(123456, "A", 1000000);
    const acc2 = new Account(567890, "B", 500000);

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