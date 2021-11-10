import { ItemModel } from "../../models/entities/itens/item-model";

// Code Duplication

export class ItemToXml {

    constructor(private item : ItemModel) {}

    public convert() : string {
        return `<item><description>${this.item.description}</description><price>${this.item.getPrice()}</price></item>`;
    }
}