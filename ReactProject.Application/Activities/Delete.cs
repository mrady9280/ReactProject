using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using ReactProject.Data;

namespace ReactProject.Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            //Add Params here
            public Guid Id { get; set; }
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
                _context.Activities.Remove(activity);
                
                //Add Command Logic Here
                var success = await _context.SaveChangesAsync(cancellationToken) > 0;
                return success ? Unit.Value : throw new Exception("Problem Saving the Activity");
            }
        }
    }
}