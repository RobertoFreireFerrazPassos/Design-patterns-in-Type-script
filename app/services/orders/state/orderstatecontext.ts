import { StateEnum } from "../../../enums/stateEnum";
import { CreatedState } from "./createdstate";
import { ApprovedState } from "./approvedstate";
import { DoneState } from "./donestate";
import { RejectedState } from "./rejectedstate";
import { IOrderState } from "./iorderstate";
import { OrderModel } from "../../../models/entities/order/order-model";

export class OrderStateContext {
    private state : IOrderState;
    orderId : string;

    public get State(){
        return this.state;
    }

    constructor(order : OrderModel) {
        this.orderId = order.id;

        switch(order.State){
            case StateEnum.CREATED:
                this.changeState(new CreatedState());
                break;
            case StateEnum.APPROVED:
                this.changeState(new ApprovedState()); 
                break;
            case StateEnum.DONE:
                this.changeState(new DoneState());
                break;
            case StateEnum.REJECTED:
                this.changeState(new RejectedState()); 
                break;
            default:
                throw "State not found";
        }
    }

    changeState(state : IOrderState) {
        this.state = state;
        this.state.context = this;
    }

    approve() : boolean {
        console.log(`Initial State:  ${this.State.value}`);
        const isApproved = this.state.approve();
        console.log(`Final State: ${this.State.value}`);
        return isApproved;
    }
}