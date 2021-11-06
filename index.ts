import { UserRoleEnum } from './app/enums/userRoleEnum';
import { UserModel } from './app/models/entities/user/user-model';
import { ItemService } from './app/services/itens/item-service';
import { OrderService } from './app/services/orders/order-service';

/* 
State is a behavioral design pattern that allows an object to change its behavior when its internal state changes.
Particular states can be aware of each other and initiate transitions from one state to another
*/

const itemService = new ItemService();
const orderService = new OrderService(itemService);
const user = new UserModel("Antônio", 26);
const firstItem = itemService.getAll()[0];
orderService.placeOrder(user, firstItem);

const orderManager = new UserModel("Amanda", 22, UserRoleEnum.ORDER_MANAGER);
const orderPlaced = orderService.getOrderByItemId(firstItem.id);
orderService.approveOrder(orderManager, orderPlaced.id);

console.log(orderService.getAllOrders());