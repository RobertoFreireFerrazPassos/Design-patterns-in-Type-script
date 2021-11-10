import { UserRoleEnum } from "../../enums/userRoleEnum";
import { ItemModel } from "../../models/entities/itens/item-model";
import { OrderModel } from "../../models/entities/order/order-model";
import { ManagerModel } from "../../models/entities/user/manager-model";
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
    
    public approveOrder(requestByUser : ManagerModel, orderId : string) : void {
        console.log(`Beginning approval request for order ${orderId}`);
        const indexOfOrderToBeApproved = this.getIndexOfOrderById(orderId);
        const orderToBeApproved = this.orders[indexOfOrderToBeApproved];
        if (!this.doesOrderExist(indexOfOrderToBeApproved, orderId) ||
            !this.isOrderManager(requestByUser) ||
            !this.isManagerResponsibleForRegion(requestByUser,orderToBeApproved)) {
            console.log("Order was not approved!");
            return;
        }       
        orderToBeApproved.approve();
    }

    public rejectOrder(orderId : string) : void {
        const indexOfOrderToBeApproved = this.getIndexOfOrderById(orderId);
        if (!this.doesOrderExist(indexOfOrderToBeApproved, orderId)) return;
        this.orders[indexOfOrderToBeApproved].reject();
    }

    private isOrderManager(requestByUser : UserModel) : boolean {
        if (requestByUser.role != UserRoleEnum.ORDER_MANAGER) {
            console.log(`User ${requestByUser.name} is not a Order Manager`);
            return false;
        }
        return true;
    }

    private isManagerResponsibleForRegion(requestByUser : ManagerModel, order : OrderModel) : boolean {
        if (requestByUser.Region !== order.Item.region) {
            console.log(`User ${requestByUser.name} is not responsible for the region of this order item ${order.Item.id}`);
            return false;
        }
        return true;
    }

    private doesOrderExist(indexOfOrder : number, orderId : string) : boolean {
        if (indexOfOrder == -1) {
            console.log(`Order with id ${orderId} not found`);
            return false;
        }
        return true;
    }
}