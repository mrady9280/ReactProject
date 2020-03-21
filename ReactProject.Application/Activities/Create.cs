using System;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactProject.Data;
using ReactProject.Domain;

namespace ReactProject.Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid? Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                this._context.Activities.Add(new Activity()
                {
                    Category = request.Category,
                    City = request.City,
                    Date = request.Date.Value,
                    Description = request.Description,
                    Id = request.Id.Value,
                    Title = request.Title,
                    Venue = request.Venue
                });
                var success = await _context.SaveChangesAsync(cancellationToken) > 0;
                return success ? Unit.Value : throw new Exception("Problem Saving the Activity");
            }
        }
    }
}