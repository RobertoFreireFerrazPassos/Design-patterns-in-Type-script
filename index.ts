import { UserModel } from './app/models/user-model';
import { UserSingletonService } from './app/services/users/user-service';

/* 
Singleton is a creational design pattern that allows you to ensure 
that a class has only one instance, while providing a global access point for that instance.
*/

// Error: Constructor of class 'UserSingletonService' is private
// const userService3 = new UserSingletonService();

const userService = UserSingletonService.getInstance();
const userService2 = UserSingletonService.getInstance();

userService.add(new UserModel("Antônio", 26));

let users = userService.getAll();
let users2 = userService2.getAll();

console.log(users);
console.log(users2);