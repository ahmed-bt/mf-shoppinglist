package prototype.shoppingList.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Item {

	private UUID id;
	private String name;
	private int amount;

	public Item(@JsonProperty("id") UUID id,
				@JsonProperty("name") String name,
				@JsonProperty("amount") int amount) {
		super();
		this.id = id;
		this.name = name;
		this.amount = amount;
	}

	public Item(UUID id, @NotBlank String name) {
		this.amount = 0;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

}
