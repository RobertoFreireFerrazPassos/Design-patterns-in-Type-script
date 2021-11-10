import { EventHub } from '../../infra/eventhub';
import { ItemModel } from '../../models/entities/itens/item-model';
import { ProductModel } from '../../models/entities/itens/product-model';
import { ServiceModel } from '../../models/entities/itens/service-model';
import { UserModel } from '../../models/entities/user/user-model';
import { ItemToXml } from './itemtoxml';

export class ItemService {
    private itens : Array<ItemModel> = [
        new ServiceModel("Locar Quadra",100,2),
        new ProductModel("Bola",10.30)
    ];

    constructor(){
    }

    public addItem(item : ItemModel) : void {
        this.itens.push(item);
        //EventHub.send(item.getDetails()); // ERROR: eventub only accepts xml string now
        // It needs to adapt from json to xml
        const itemToXml = new ItemToXml(item); // this approach works but it generates code duplication
        EventHub.send(itemToXml.convert());
    }

    public getAll() : Array<ItemModel> {
        return this.itens;
    }

    public associateUserToItem(itemId : string, user : UserModel) : ItemModel {
        const itemIndex = this.getIndexOfItemById(itemId);
        if (this.validateIndex(itemIndex, itemId) && this.validateUserInItem(itemIndex)) {
            this.itens[itemIndex].user = user;
            return this.itens[itemIndex];
        }        
        return null;
    }

    private getIndexOfItemById(itemId : string) : number {
        return this.itens.findIndex(i => i.id == itemId);
    }

    private validateIndex(itemIndex : number, itemId : string) : boolean {
        if (itemIndex != -1) return true
        console.log(`Item ${ itemId } doesn't exist`);
        return false;
    }

    private validateUserInItem(itemIndex : number) : boolean {
        if (!this.itens[itemIndex].user) return true
        console.log(`Item ${ this.itens[itemIndex].description } already has a user`);
        return false;
    }
}