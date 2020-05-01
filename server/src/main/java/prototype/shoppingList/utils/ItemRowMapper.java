package prototype.shoppingList.utils;

import org.springframework.jdbc.core.RowMapper;
import prototype.shoppingList.model.Item;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ItemRowMapper implements RowMapper<Item> {

    @Override
    public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
        Item item = new Item(null, null);
        item.setId(rs.getObject("id", java.util.UUID.class));
        item.setName(rs.getString("name"));
        item.setAmount(rs.getInt("amount"));
        return item;
    }

}