import { UserModel } from '../../models/user-model';

export class UserService {
    users : Array<UserModel> = [
        new UserModel("João", 23),
        new UserModel("Maria", 22)
    ];

    constructor(){
    }

    public getAll() : Array<UserModel> {
        return this.users;
    }

    public add(user : UserModel) : void {
        this.users.push(user);
    }
}