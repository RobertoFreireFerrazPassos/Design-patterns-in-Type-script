import { ItemTypeEnum } from '../../../enums/itemTypeEnum';
import { EntityModel } from '../entity-model';
import { UserModel } from '../user/user-model';

export abstract class ItemModel extends EntityModel {
    description : string;
    user : UserModel;
    protected type : ItemTypeEnum;

    public get Type() {
        return this.type;
    }

    constructor(description : string) {
        super();
        this.description = description;
    }

    public abstract getPrice();

    public getDetails() : Object {
        return {
            description : this.description,
            price : this.getPrice()
        };
    }
}