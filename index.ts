import { UserService } from './app/services/users/user-service';

const userService = new UserService();

let users = userService.getAll();

console.log(users);