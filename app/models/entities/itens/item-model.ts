import { ItemTypeEnum } from '../../../enums/itemTypeEnum';
import { EntityModel } from '../entity-model';
import { UserModel } from '../user/user-model';

export abstract class ItemModel extends EntityModel {
    description : string;
    user : UserModel;
    // protected so devired classes can access it.
    protected type : ItemTypeEnum;

    public get Type() {
        return this.type;
    }

    constructor(description : string) {
        super();
        this.description = description;
    }

    public abstract getPrice();
}