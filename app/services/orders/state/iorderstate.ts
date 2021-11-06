import { StateEnum } from "../../../enums/stateEnum";
import { OrderStateContext } from "./orderstatecontext";

export interface IOrderState  {
    context : OrderStateContext;
    value : StateEnum;

    approve() : boolean;
}