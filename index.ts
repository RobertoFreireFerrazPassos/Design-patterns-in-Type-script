import { ServiceModel } from './app/models/entities/itens/service-model';
import { ItemService } from './app/services/itens/item-service';
import { ItemJsonToXmlAdapter } from './app/services/itens/itemjsontoxmladapter';

const itemJsonToXmlAdapter = new ItemJsonToXmlAdapter();
const itemService = new ItemService(itemJsonToXmlAdapter);
const newServiceItem = new ServiceModel("Locar Auditorio",1000,4);
itemService.addItem(newServiceItem);
