import { ItemModel } from "../../models/entities/itens/item-model";
/*
    Use the Adapter class when you want to keep using an existing class (in this case ItemModel), 
    but its interface isn't compatible with the rest of your code (ItemModel.getDetails doesn't work for the method EventHub.send)
    The adapter pretends to be an item details in xml. 
    But, actually it encapsulates the item, get the details in json and converts xml (It adapts item details json to xml)

    Open/closed principle: 
    You can introduce new types of adapters into the program without modifying the ItemModel code.
*/

export class ItemJsonToXmlAdapter {
    private item: ItemModel;

    constructor(item : ItemModel) {
        this.item = item;
    }

    public convert() : string {   
        const jsonItem = this.item.getDetails();
        let xmlContent = "";
        Object.keys(jsonItem).forEach(key => {
            xmlContent += `<${key}>${jsonItem[key]}</${key}>`;
        });
        return `<item>${xmlContent}</item>`;
    }
}