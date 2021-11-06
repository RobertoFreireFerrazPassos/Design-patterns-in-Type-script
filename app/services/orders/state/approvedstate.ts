import { StateEnum } from "../../../enums/stateEnum";
import { IOrderState } from "./iorderstate";
import { OrderStateContext } from "./orderstatecontext";

export class ApprovedState implements IOrderState {
    context : OrderStateContext;
    value = StateEnum.APPROVED;
     
    public approve()  : boolean {
        console.log(`Order with id ${this.context.orderId} was already approved`);
        return false;
    }
}

