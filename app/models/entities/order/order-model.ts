import { OrderStateEnum } from "../../../enums/stateEnum";
import { ApprovedState } from "../../../services/orders/state/approvedstate";
import { CreatedState } from "../../../services/orders/state/createdstate";
import { DoneState } from "../../../services/orders/state/donestate";
import { IOrderState } from "../../../services/orders/state/iorderstate";
import { RejectedState } from "../../../services/orders/state/rejectedstate";
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

    private getOrderStateByEnum(stateEnum : OrderStateEnum)  : IOrderState  {
        switch(stateEnum){
            case OrderStateEnum.CREATED:
                return new CreatedState();
            case OrderStateEnum.APPROVED:
                return new ApprovedState(); 
            case OrderStateEnum.DONE:
                return new DoneState();
            case OrderStateEnum.REJECTED:
                return new RejectedState(); 
            default:
                throw "State not found";
        }
    }

    constructor(item : ItemModel) {
        super();
        if (!this.state) this.state = OrderStateEnum.CREATED;
        this.item = item; 
        this.changeState(this.state);      
    }

    changeState(stateEnum : OrderStateEnum) {
        this.orderState = this.getOrderStateByEnum(stateEnum);
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