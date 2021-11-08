import { UserRoleEnum } from './app/enums/userRoleEnum';
import { UserModel } from './app/models/entities/user/user-model';
import { ItemService } from './app/services/itens/item-service';
import { OrderService } from './app/services/orders/order-service';

const itemService = new ItemService();
const orderService = new OrderService(itemService);
const user = new UserModel("Antônio", 26);
const firstItem = itemService.getAll()[1];

orderService.placeOrder(user, firstItem);

const orderManager = new UserModel("Amanda", 22, UserRoleEnum.ORDER_MANAGER);
const orderPlaced = orderService.getOrderByItemId(firstItem.id);
orderService.approveOrder(orderManager, orderPlaced.id);

console.log(orderService.getAllOrders());

orderService.rejectOrder(orderPlaced.id);