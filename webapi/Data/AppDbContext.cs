using Microsoft.EntityFrameworkCore;

namespace webapi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<sale> sales { get; set; }
    }
}