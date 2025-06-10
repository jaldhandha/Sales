using System.ComponentModel.DataAnnotations;

namespace webapi
{
    public class sale
    {
        [Key]
        public int saleId { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Lastname { get; set; }
    }
}