import { StateEnum } from "../../../enums/stateEnum";
import { ApprovedState } from "./approvedstate";
import { IOrderState } from "./iorderstate";
import { OrderStateContext } from "./orderstatecontext";

export class CreatedState implements IOrderState {
    context : OrderStateContext;
    value = StateEnum.CREATED;

    public approve()  : boolean  {
        console.log(`Order with id ${this.context.orderId} was approved successfully`);
        this.context.changeState(new ApprovedState());
        return true;
    }
}