import { EntityModel } from '../entity-model';
import { UserModel } from '../user/user-model';

export abstract class ItemModel extends EntityModel {
    description : string;
    user : UserModel;

    constructor(description : string) {
        super();
        this.description = description;
    }

    public abstract getPrice();
}