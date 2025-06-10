using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Contracts;
using webapi.Data;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class salesController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IMainHub mainHub;
        public salesController(AppDbContext context, IMainHub mainHub)
        {
            this.mainHub = mainHub;
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var sales = await context.sales.ToListAsync();

            return Ok(sales);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var sale = await context.sales.FindAsync(id);

            return Ok(sale);
        }

        [HttpPost]
        public async Task<IActionResult> Create(sale sale)
        {
            try
            {
                context.sales.Add(sale);
                await context.SaveChangesAsync();
                await mainHub.UpdateClients();
                return Ok("Successfully created");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, sale sale)
        {
            try
            {
                context.sales.Update(sale);
                await context.SaveChangesAsync();
                await mainHub.UpdateClients();
                return Ok("Successfully updated");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            try
            {
                var sale = await context.sales.FindAsync(id);

                context.sales.Remove(sale);
                await context.SaveChangesAsync();
                await mainHub.UpdateClients();
                return Ok("Successfully deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}