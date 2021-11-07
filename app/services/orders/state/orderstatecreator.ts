import { OrderStateEnum } from "../../../enums/stateEnum";
import { ApprovedState } from "./approvedstate";
import { CreatedState } from "./createdstate";
import { DoneState } from "./donestate";
import { IOrderState } from "./iorderstate";
import { RejectedState } from "./rejectedstate";

/*
Single responsibility principle: A creation of OrderState in a separated class
*/

export class OrderStateCreator {
    public static getOrderStateByEnum(stateEnum : OrderStateEnum)  : IOrderState  {
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
}