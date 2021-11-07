import { OrderStateEnum } from "../../../enums/stateEnum";
import { IOrderState } from "../../../services/orders/state/iorderstate";
import { OrderStateCreator } from "../../../services/orders/state/orderstatecreator";
import { EntityModel } from "../entity-model";
import { ItemModel } from "../itens/item-model";
export class OrderModel extends EntityModel {
    private item : ItemModel;
    private state : OrderStateEnum;
    private orderState : IOrderState;

    public get Item() {
        return this.item;
    }

    public get State() {
        return this.state;
    }

    public get OrderState(){
        return this.orderState;
    }

    constructor(item : ItemModel) {
        super();
        if (!this.state) this.state = OrderStateEnum.CREATED;
        this.item = item; 
        this.changeState(this.state);      
    }

    changeState(stateEnum : OrderStateEnum) {
        this.orderState = OrderStateCreator.getOrderStateByEnum(stateEnum);
        this.orderState.context = this;
        this.state = stateEnum;
    }

    public approve() : void {        
        this.orderState.approve();
    }

    public reject() : void {
        this.orderState.reject();
    }
}