package prototype.shoppingList.dao;


import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import prototype.shoppingList.model.Item;


public interface ItemDao {


		void insertItem(UUID id, Item item);

		default void insertItem(Item item) {
			UUID id = UUID.randomUUID();
			insertItem(id, item);
		}

		List<Item> selectAllItems() throws SQLException;

		Optional<Item> getItemById(UUID id);
		
		void deleteItemById(UUID id);
		
		void updateItemById(UUID id, Item item);

		void executeUpdateItem(Item item);
	}



