using MyShop.Models;

namespace MyShop.DAL;

public interface IItemRepository
{
	Task<IEnumerable<Item>> GetAll();
    Task<Item?> GetItemById(int id);
	Task Create(Item item);
    Task Update(Item item);
    Task<bool> Delete(int id);
}

