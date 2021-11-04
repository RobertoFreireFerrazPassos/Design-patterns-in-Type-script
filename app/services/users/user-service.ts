import { UserModel } from '../../models/user-model';

export class UserSingletonService {
    static userService : UserService = null;

    // there is not static class in typescript, so the constructor must be private
    private constructor(){
    };

    public static getInstance() {
        if (this.userService == null) {
            this.userService = new UserService();
        } 
        return this.userService;
    }
}

// It is not exported
class UserService {
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