class Customer{

    constructor(private _fistName: string,
        private _lastName: string){
     
    }
     get firstName():string{
        return this._fistName;
    }
    set firstName(value:string){
        this._fistName = value;
    }
    get lastName():string{
        return this._lastName
    }
    set lastName(value:string){
        this._lastName= value;
    }
}

// creating an instance
let myCustomer = new Customer("Martin","Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);