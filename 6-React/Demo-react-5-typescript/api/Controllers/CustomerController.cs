using Microsoft.AspNetCore.Mvc;
using MyShop.Models;
using Microsoft.EntityFrameworkCore;
using MyShop.DAL;

namespace MyShop.Controllers;

public class CustomerController : Controller
{
    private readonly ItemDbContext _itemDbContext;

    public CustomerController(ItemDbContext itemDbContext)
    {
        _itemDbContext = itemDbContext;
    }

    public async Task<IActionResult> Table()
    {
        List<Customer> customers = await _itemDbContext.Customers.ToListAsync();
        return View(customers);
    }
}
