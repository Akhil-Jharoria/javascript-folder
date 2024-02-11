//here we are learning about the getter and setter method 

class User{

    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email=value;
    }
    get password(){
        return this._password;
    }

    set password(value){
        this._password=value;
    }
};


const chai= new User('chai@gmail.com','123456789');

console.log(chai.email);
console.log(chai.password);