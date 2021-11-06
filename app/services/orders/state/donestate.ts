import { StateEnum } from "../../../enums/stateEnum";
import { IOrderState } from "./iorderstate";
import { OrderStateContext } from "./orderstatecontext";

export class DoneState implements IOrderState {
    context : OrderStateContext;
    value = StateEnum.DONE;
    
    public approve() : boolean {
        console.log(`Order with id ${this.context.orderId} was closed and can not be approved`);
        return false;
    }
}