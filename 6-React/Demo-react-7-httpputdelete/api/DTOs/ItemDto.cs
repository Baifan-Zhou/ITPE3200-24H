using System.ComponentModel.DataAnnotations;

namespace MyShop.DTOs
{
    public class ItemDto
    {
        public int ItemId { get; set; }

        [Required]
        [RegularExpression(@"[0-9a-zA-ZæøåÆØÅ. \-]{2,20}", ErrorMessage = "The Name must be numbers or letters and between 2 to 20 characters.")]
        [Display(Name = "Item name")]
        public string Name { get; set; } = string.Empty;

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "The Price must be greater than 0.")]
        public decimal Price { get; set; }

        [StringLength(200)]
        public string? Description { get; set; }

        public string? ImageUrl { get; set; }
    }
}
