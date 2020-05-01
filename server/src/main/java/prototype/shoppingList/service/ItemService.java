package prototype.shoppingList.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import prototype.shoppingList.dao.ItemDao;
import prototype.shoppingList.model.Item;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemService {

    private final ItemDao itemDao;

    @Autowired
    public ItemService(@Qualifier("postgres") ItemDao itemDao) {
        super();
        this.itemDao = itemDao;
    }

    public void addItem(Item item) { itemDao.insertItem(item);}

    public List<Item> getAllItems() {
        try {
            return itemDao.selectAllItems();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;

    }

    public Optional<Item> getItemById(UUID id) {
        return itemDao.getItemById(id);
    }

    public void deleteItemById(UUID id) {
        itemDao.deleteItemById(id);
    }

    public void updateItemById(UUID id, Item item) {
        itemDao.updateItemById(id, item);
    }
}
