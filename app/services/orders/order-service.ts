import { ItemModel } from "../../models/item-model";
import { UserModel } from "../../models/user-model";
import { ItemService } from "../itens/item-service";


export class OrderService {
    private readonly itemService : ItemService

    constructor(itemService : ItemService){
        this.itemService = itemService;
    }

    public placeOrder(user: UserModel, item : ItemModel) : void {
        if (this.itemService.associateUserToItem(item.id, user)) {
            console.log(`Purcharse of ${ item.description } costing ${ item.getPrice() } made for user: ${ user.name }`);
        }          
    }        
}