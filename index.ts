import { UserModel } from './app/models/user-model';
import { ItemService } from './app/services/itens/item-service';
import { OrderService } from './app/services/orders/order-service';

const itemService = new ItemService();
const orderService = new OrderService(itemService);
const user = new UserModel("Antônio", 26);
const firstItem = itemService.getAll()[0];

orderService.placeOrder(user, firstItem);