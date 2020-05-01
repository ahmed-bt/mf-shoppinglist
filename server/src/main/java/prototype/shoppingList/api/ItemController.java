package prototype.shoppingList.api;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import prototype.shoppingList.model.Item;
import prototype.shoppingList.service.ItemService;


@RequestMapping("api/v1/item")
@RestController
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @PostMapping
    public void addFoodItem(@Valid @NonNull @RequestBody Item item) {
        itemService.addItem(item);
    }

    @GetMapping
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping(path = "{id}")
    public Item getItemById(@PathVariable("id") UUID id) {
        return itemService.getItemById(id)
                .orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteItemById(@PathVariable("id") UUID id) {
        itemService.deleteItemById(id);
    }

    @PutMapping(path = "{id}")
    public void updateItemById(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Item item) {
        itemService.updateItemById(id, item);
    }
}
