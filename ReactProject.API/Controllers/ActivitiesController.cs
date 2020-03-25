using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ReactProject.Application.Activities;
using ReactProject.Data;
using ReactProject.Domain;

namespace ReactProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController: ControllerBase
    {
        private readonly ILogger<ActivitiesController> _logger;
        private readonly IMediator _mediator;

        public ActivitiesController(ILogger<ActivitiesController> logger,IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }
        [HttpGet()]
        public async Task<ActionResult<List<Activity>>> List()
        {
            return Ok( await _mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return Ok( await _mediator.Send(new Details.Query(){Id = id}));
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create([FromBody] Create.Command activity)
        {
            activity.Date = DateTime.Now;
            return Ok(await _mediator.Send(activity));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id,[FromBody] Edit.Command activity)
        {
            activity.Id = id;
            return Ok(await _mediator.Send(activity));
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return Ok(await _mediator.Send(new Delete.Command(){Id = id}));
        }

    }
}