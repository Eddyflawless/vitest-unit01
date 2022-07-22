import { validateEmail, validateStringNotEmpty } from "./validation";

export class User {

    constructor(email){
       this.updateEmail(email)
    }

    updateEmail(newEmail){
        validateStringNotEmpty(newEmail); // validate if its an empty email
        
        if(!validateEmail(newEmail)) {
            throw new Error("Invalid email format");
        } 

        this.email = newEmail;
    }

    clearEmail(){
        this.email = '';
    }
}