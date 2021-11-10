import { RegionEnum } from './app/enums/regionEnum';
import { UserRoleEnum } from './app/enums/userRoleEnum';
import { ManagerModel } from './app/models/entities/user/manager-model';
import { UserModel } from './app/models/entities/user/user-model';
import { ItemService } from './app/services/itens/item-service';
import { ItemJsonToXmlAdapter } from './app/services/itens/itemjsontoxmladapter';
import { OrderService } from './app/services/orders/order-service';

const itemJsonToXmlAdapter = new ItemJsonToXmlAdapter();
const itemService = new ItemService(itemJsonToXmlAdapter);
const orderService = new OrderService(itemService);
const user = new UserModel("Antônio", 26);
const firstItem = itemService.getAll()[1];

orderService.placeOrder(user, firstItem);

const orderManager = new ManagerModel("Amanda", 22, RegionEnum.NORTH, UserRoleEnum.ORDER_MANAGER);
const orderPlaced = orderService.getOrderByItemId(firstItem.id);
orderService.approveOrder(orderManager, orderPlaced.id);
console.log(orderService.getAllOrders());