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

    /*
     It won't be a good approach to convert to Xml (Single responsibility principle)
    public convert() : string {
        return `<item><description>${this.description}</description><price>${this.getPrice()}</price></item>`;
    }
    */
}