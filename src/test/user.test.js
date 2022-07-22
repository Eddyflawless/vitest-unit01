import { describe, it , expect, beforeAll, beforeEach, afterAll } from 'vitest';

import { User } from '../app/util/user';

describe.concurrent('User model',() => {

    const testUserEmail = "test@test.com";
    let user;

    beforeAll(()=>{
        user = new User(testUserEmail);
    })
    
    beforeEach(()=>{
        //resetting values that might have been modified
    })

    afterAll(()=>{
        //perform cleanup work for dabases, files etc
    });
    
    it('should have an email property', () => {
        //
        expect(user).toHaveProperty("email");
    
    })
    
    it('should create a user with specified email', () => {
        //
        expect(user.email).toBe(testUserEmail);
    
    })
    
    it('should update user with a new email', () => {
    
        //update user with a new email
        const testNewUserEmail = "goblin@test.com";
        user.updateEmail(testNewUserEmail);
        expect(user.email).toBe(testNewUserEmail);
        
    })
    
    it('should clear and set user email to an empty string', () => {
    
        user.clearEmail();
        expect(user.email).toBe('');
        
    })
    
    it('should yield an email of string when email is cleared ', () => {
    
        user.clearEmail();
        expect(user.email).toBeTypeOf('string');
        
    })
})
