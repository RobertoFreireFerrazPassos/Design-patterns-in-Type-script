import { ItemModel } from '../../models/item-model';
import { UserModel } from '../../models/user-model';

export class ItemService {
    itens : Array<ItemModel> = [
        new ItemModel("bola"),
        new ItemModel("pipa")
    ];

    constructor(){
    }

    public getAll() : Array<ItemModel> {
        return this.itens;
    }

    public associateUserToItem(itemId : string, user : UserModel) : void {
        const itemIndex = this.itens.findIndex(i => i.id = itemId);

        this.itens[itemIndex].user = user;
    }
}