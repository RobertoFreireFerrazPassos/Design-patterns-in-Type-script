import { UserModel } from './app/models/user-model';
import { UserService } from './app/services/users/user-service';

const userService = new UserService();
const userService2 = new UserService();

userService.add(new UserModel("Antônio", 26));

let users = userService.getAll();
let users2 = userService2.getAll();

console.log(users);
console.log(users2);