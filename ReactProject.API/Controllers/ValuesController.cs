using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactProject.Data;
using ReactProject.Domain;

namespace ReactProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController: ControllerBase
    {
        private readonly ILogger<ValuesController> _logger;
        private readonly DataContext _context;

        public ValuesController(ILogger<ValuesController> logger,DataContext context)
        {
            _logger = logger;
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            return Ok( await _context.Values.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> Get(int id)
        {
            return Ok(await _context.Values.FindAsync(id));
        }
        [HttpPost]
        public async void Post([FromBody]string value)
        {
            _context.Values.Add(new Value(){Name = value});
            await _context.SaveChangesAsync();
        }
        [HttpPut]
        public void Put(int id,[FromBody]string value)
        {
            
        }
        [HttpDelete]
        public async void Delete(int id)
        {
            var entity = await _context.Values.FirstOrDefaultAsync(e=> e.Id == id);
            _context.Values.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }
}