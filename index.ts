import { ServiceModel } from './app/models/entities/itens/service-model';
import { ItemService } from './app/services/itens/item-service';

const itemService = new ItemService();
const newServiceItem = new ServiceModel("Locar Auditorio",1000,4);
itemService.addItem(newServiceItem);
