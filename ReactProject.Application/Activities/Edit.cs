using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactProject.Data;

namespace ReactProject.Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            //Add Params here
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
                var activity = await _context.Activities.FindAsync(request.Id);
                if (activity == null)
                {
                    throw new Exception("Activity is not found");
                }

                activity.Category = request.Category;
                activity.City = request.City;
                activity.Date = request.Date.Value;
                activity.Description = request.Description;
                activity.Title = request.Title;
                activity.Venue = request.Venue;
                activity.Id = request.Id.Value;
                //Add Command Logic Here
                var success = await _context.SaveChangesAsync(cancellationToken) > 0;
                return success ? Unit.Value : throw new Exception("Problem Saving the Activity");
            }
        }
    }
}