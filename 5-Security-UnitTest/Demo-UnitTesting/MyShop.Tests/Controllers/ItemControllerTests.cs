using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using MyShop.Controllers;
using MyShop.DAL;
using MyShop.Models;
using MyShop.ViewModels;

namespace MyShop.Test.Controllers;

public class ItemControllerTests
{
    [Fact]
    public async Task TestTable()
    {
        // arrange
        var itemList = new List<Item>()
        {
            new Item
            {
            ItemId = 1,
            Name = "Fried Chicken Wing",
            Price = 20,
            Description = "Delicious spicy chicken wing",
            ImageUrl = "/images/chickenwing.jpg"
            },
            new Item
            {
            ItemId = 2,
            Name = "Brown Cheese",
            Price = 20,
            Description = "Typical Norwegian cheese",
            ImageUrl = "/images/brunost.jpg"
            }
        };
        var mockItemRepository = new Mock<IItemRepository>();
        mockItemRepository.Setup(repo => repo.GetAll()).ReturnsAsync(itemList);
        var mockLogger = new Mock<ILogger<ItemController>>();
        var itemController = new ItemController(mockItemRepository.Object, mockLogger.Object);

        // act
        var result = await itemController.Table();

        // assert
        var viewResult = Assert.IsType<ViewResult>(result);
        var itemsViewModel = Assert.IsAssignableFrom<ItemsViewModel>(viewResult.ViewData.Model);
        Assert.Equal(2, itemsViewModel.Items.Count());
        Assert.Equal(itemList, itemsViewModel.Items);
    }
    
    [Fact]
    public async Task TestCreateNotOk()
    {
        // arrange
        var testItem = new Item
        {
            ItemId = 1,
            Price = 20,
            Description = "Delicious spicy chicken wing",
            ImageUrl = "/images/chickenwing.jpg"
        };
        var mockItemRepository = new Mock<IItemRepository>();
        mockItemRepository.Setup(repo => repo.Create(testItem)).ReturnsAsync(false);
        var mockLogger = new Mock<ILogger<ItemController>>();
        var itemController = new ItemController(mockItemRepository.Object, mockLogger.Object);

        // act
        var result = await itemController.Create(testItem);

        // assert
        var viewResult = Assert.IsType<ViewResult>(result);
        var viewItem = Assert.IsAssignableFrom<Item>(viewResult.ViewData.Model);
        Assert.Equal(testItem, viewItem);
    }
}

