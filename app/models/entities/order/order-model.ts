import { StateEnum } from "../../../enums/stateEnum";
import { EntityModel } from "../entity-model";
import { ItemModel } from "../itens/item-model";

export class OrderModel extends EntityModel {
    private item : ItemModel;
    private state : StateEnum;

    public get Item() {
        return this.item;
    }

    public get State() {
        return this.state;
    }

    constructor(item : ItemModel) {
        super();
        this.state = StateEnum.CREATED;
        this.item = item;
    }

    public approve() {
        this.state = StateEnum.APPROVED;
    }
}