namespace MyShop.Models;

public class OrderItem
{
	public int OrderItemId { get; set; }
	public int ItemId { get; set; }
	//navigation property
	public virtual Item Item { get; set; } = default!;
    public int Quantity { get; set; }
	public int OrderId { get; set; }
    //navigation property
    public virtual Order Order { get; set; } = default!;
	public decimal OrderItemPrice { get; set; }
}

