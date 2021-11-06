import { StateEnum } from "../../enums/stateEnum";
import { UserRoleEnum } from "../../enums/userRoleEnum";
import { ItemModel } from "../../models/entities/itens/item-model";
import { OrderModel } from "../../models/entities/order/order-model";
import { UserModel } from "../../models/entities/user/user-model";
import { ItemService } from "../itens/item-service";


export class OrderService {
    private readonly itemService : ItemService
    private orders : Array<OrderModel> = [];

    constructor(itemService : ItemService){
        this.itemService = itemService;
    }

    public getOrderByItemId(itemId : string) : OrderModel {
        return this.orders.find(o => o.Item.id == itemId);
    }
    
    public getIndexOfOrderById(orderId : string) : number {
        return this.orders.findIndex(o => o.id == orderId);
    }

    public getAllOrders() : Array<OrderModel> {
        return this.orders;
    }

    public placeOrder(user: UserModel, item : ItemModel) : void {
        const itemAssociateWithUser = this.itemService.associateUserToItem(item.id, user);
        if (itemAssociateWithUser) {
            this.orders.push(new OrderModel(itemAssociateWithUser));
            console.log(`Purcharse of ${ item.description } costing ${ item.getPrice() } made for user: ${ user.name }`);
        }          
    }
    
    public approveOrder(requestByUser : UserModel, orderId : string) : void {
        if (!this.validateOrderRequestedByOrderManager(requestByUser)) return;
        const indexOfOrderToBeApproved = this.getIndexOfOrderById(orderId);
        if (!this.validateOrderExists(indexOfOrderToBeApproved, orderId)) return;
        const orderToBeApproved = this.orders[indexOfOrderToBeApproved];

        if (orderToBeApproved.State == StateEnum.APPROVED) {
            console.log(`Order with id ${orderId} was already approved`);
            return;
        } 
        if (orderToBeApproved.State == StateEnum.REJECTED) {
            console.log(`Order with id ${orderId} was rejected and can not be approved`);
            return;
        } 
        if (orderToBeApproved.State == StateEnum.DONE) {
            console.log(`Order with id ${orderId} was closed and can not be approved`);
            return;
        } 
        if (orderToBeApproved.State == StateEnum.CREATED) {
            this.orders[indexOfOrderToBeApproved].approve();
            console.log(`Order with id ${orderId} was approved successfully`);
        }
    }

    private validateOrderRequestedByOrderManager(requestByUser : UserModel) : boolean {
        if (requestByUser.role != UserRoleEnum.ORDER_MANAGER) {
            console.log(`User ${requestByUser.name} is not a Order Manager`);
            return false;
        }
        return true;
    }

    private validateOrderExists(indexOfOrder : number, orderId : string) : boolean {
        if (indexOfOrder == -1) {
            console.log(`Order with id ${orderId} not found`);
            return false;
        }
        return true;
    }
}