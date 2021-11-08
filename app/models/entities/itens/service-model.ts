import { ItemTypeEnum } from "../../../enums/itemTypeEnum";
import { ItemModel } from "./item-model";

export class ServiceModel extends ItemModel {
    private pricePerHour : number;
    private hours : number;

    constructor(description : string, pricePerHour : number, hours : number) {
        super(description);
        this.pricePerHour = pricePerHour;
        this.hours = hours;
        this.type = ItemTypeEnum.SERVICE;
    }

    public getPrice() : number {
        return this.pricePerHour * this.hours;
    } 
}