import { ItemTypeEnum } from "../../../enums/itemTypeEnum";
import { ItemModel } from "./item-model";

export class ProductModel extends ItemModel {
    private price : number;

    constructor(description : string, price : number) {
        super(description);
        this.price = price;
        this.type = ItemTypeEnum.PRODUCT;
    }

    public getPrice() : number {
        return this.price;
    }    
}