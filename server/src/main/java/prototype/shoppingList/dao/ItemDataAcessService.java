package prototype.shoppingList.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import prototype.shoppingList.model.Item;
import prototype.shoppingList.utils.ItemRowMapper;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;

@Repository("postgres")
public class ItemDataAcessService implements ItemDao {

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public ItemDataAcessService(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void insertItem(UUID id, Item item) {
        final String sql = "INSERT INTO Item values(:id, :name, :amount)";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
                .addValue("id", item.getId())
                .addValue("name", item.getName())
                .addValue("amount", item.getAmount());
        jdbcTemplate.update(sql, param, holder);

    }

    @Override
    public List<Item> selectAllItems() {
        String sql = "SELECT * FROM Item";
        return jdbcTemplate.query(sql, new ItemRowMapper());
    }

    @Override
    public Optional<Item> getItemById(UUID id) {
        String sql = "SELECT * FROM Item WHERE id=:id";
        SqlParameterSource param = new MapSqlParameterSource().addValue("id", id);
        return jdbcTemplate.query(sql, param, new ItemRowMapper()).stream().findFirst();
    }

    @Override
    public void deleteItemById(UUID id) {
        final String sql = "DELETE FROM Item where id=:id";
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", id);
        jdbcTemplate.execute(sql, map, new PreparedStatementCallback<Object>() {
            public Object doInPreparedStatement(PreparedStatement ps) throws SQLException, DataAccessException {
                return ps.executeUpdate();
            }
        });

    }

    @Override
    public void updateItemById(UUID id, Item item) {
        final String sql = "UPDATE Item set name=:name, amount=:amount where id=:id";
        KeyHolder holder = new GeneratedKeyHolder();
        SqlParameterSource param = new MapSqlParameterSource()
                .addValue("id", id)
                .addValue("name", item.getName())
                .addValue("amount", item.getAmount());
        jdbcTemplate.update(sql, param, holder);
    }

    @Override
    public void executeUpdateItem(Item item) {
        final String sql = "update Item set name=:name, , amount=:amount where id=:id";
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", item.getId());
        map.put("name", item.getName());
        map.put("amount", item.getAmount());
        jdbcTemplate.execute(sql, map, new PreparedStatementCallback<Object>() {
            @Override
            public Object doInPreparedStatement(PreparedStatement ps) throws SQLException, DataAccessException {
                return ps.executeUpdate();
            }
        });
    }

}

