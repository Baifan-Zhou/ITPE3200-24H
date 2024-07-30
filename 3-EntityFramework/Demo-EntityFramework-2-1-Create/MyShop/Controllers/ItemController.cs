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
    
    [HttpGet]
    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Create(Item item)
    {
        if (ModelState.IsValid)
        {
            _itemDbContext.Items.Add(item);
            _itemDbContext.SaveChanges();
            return RedirectToAction(nameof(Table));
        }
        return View(item);
    }    
}
