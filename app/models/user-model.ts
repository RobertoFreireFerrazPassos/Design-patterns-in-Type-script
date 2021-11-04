import { EntityModel } from './entity-model';

export class UserModel extends EntityModel {
    name : string;
    age : number;

    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
}