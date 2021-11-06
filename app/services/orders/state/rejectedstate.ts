import { StateEnum } from "../../../enums/stateEnum";
import { IOrderState } from "./iorderstate";
import { OrderStateContext } from "./orderstatecontext";

export class RejectedState implements IOrderState {
    context : OrderStateContext;
    value = StateEnum.REJECTED;
    
    public approve() : boolean {
        console.log(`Order with id ${this.context.orderId} was rejected and can not be approved`);
        return false;
    }
}