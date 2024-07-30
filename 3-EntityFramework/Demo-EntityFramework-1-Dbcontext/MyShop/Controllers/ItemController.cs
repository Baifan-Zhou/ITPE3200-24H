using Microsoft.AspNetCore.Mvc;
using MyShop.Models;
using MyShop.ViewModels;

namespace MyShop.Controllers;

public class ItemController : Controller
{
    private readonly ItemDbContext _itemDbContext;

    public ItemController(ItemDbContext itemDbContext)
    {
        _itemDbContext = itemDbContext;
    }

    public IActionResult Table()
    {
        List<Item> items = _itemDbContext.Items.ToList();
        var itemsViewModel = new ItemsViewModel(items, "Table");
        return View(itemsViewModel);
    }

    public IActionResult Grid()
    {
        List<Item> items = _itemDbContext.Items.ToList();
        var itemsViewModel = new ItemsViewModel(items, "Grid");
        return View(itemsViewModel);
    }
    
    public IActionResult Details(int id)
    {
        List<Item> items = _itemDbContext.Items.ToList();
        var item = items.FirstOrDefault(i => i.ItemId == id);
        if (item == null)
            return NotFound();
        return View(item);
    }
}
    // public List<Item> GetItems()
    // {
    //     var items = new List<Item>();
    //     var item1 = new Item
    //     {
    //         ItemId = 1,
    //         Name = "Pizza",
    //         Price = 150,
    //         Description = "Delicious Italian dish with a thin crust topped with tomato sauce, cheese, and various toppings.",
    //         ImageUrl = "/images/pizza.jpg"
    //     };

    //     var item2 = new Item
    //     {
    //         ItemId = 2,
    //         Name = "Fried Chicken Leg",
    //         Price = 20,
    //         Description = "Crispy and succulent chicken leg that is deep-fried to perfection, often served as a popular fast food item.",
    //         ImageUrl = "/images/chickenleg.jpg"
    //     };

    //     var item3 = new Item
    //     {
    //         ItemId = 3,
    //         Name = "French Fries",
    //         Price = 50,
    //         Description = "Crispy, golden-brown potato slices seasoned with salt and often served as a popular side dish or snack.",
    //         ImageUrl = "/images/frenchfries.jpg"
    //     };

    //     var item4 = new Item
    //     {
    //         ItemId = 4,
    //         Name = "Grilled Ribs",
    //         Price = 250,
    //         Description = "Tender and flavorful ribs grilled to perfection, usually served with barbecue sauce.",
    //         ImageUrl = "/images/ribs.jpg"
    //     };

    //     var item5 = new Item
    //     {
    //         ItemId = 5,
    //         Name = "Tacos",
    //         Price = 150,
    //         Description = "Tortillas filled with various ingredients such as seasoned meat, vegetables, and salsa, folded into a delicious handheld meal.",
    //         ImageUrl = "/images/tacos.jpg"
    //     };

    //     var item6 = new Item
    //     {
    //         ItemId = 6,
    //         Name = "Fish and Chips",
    //         Price = 180,
    //         Description = "Classic British dish featuring battered and deep-fried fish served with thick-cut fried potatoes.",
    //         ImageUrl = "/images/fishandchips.jpg"
    //     };

    //     var item7 = new Item
    //     {
    //         ItemId = 7,
    //         Name = "Cider",
    //         Price = 50,
    //         Description = "Refreshing alcoholic beverage made from fermented apple juice, available in various flavors.",
    //         ImageUrl = "/images/cider.jpg"
    //     };

    //     var item8 = new Item
    //     {
    //         ItemId = 8,
    //         Name = "Coke",
    //         Price = 30,
    //         Description = "Popular carbonated soft drink known for its sweet and refreshing taste.",
    //         ImageUrl = "/images/coke.jpg"
    //     };


    //     items.Add(item1);
    //     items.Add(item2);
    //     items.Add(item3);
    //     items.Add(item4);
    //     items.Add(item5);
    //     items.Add(item6);
    //     items.Add(item7);
    //     items.Add(item8);
    //     return items;
    // }
