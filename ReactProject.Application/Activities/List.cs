using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ReactProject.Data;
using ReactProject.Domain;

namespace ReactProject.Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {
            //Add Query Params Here
        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                //Add Handler logic here
                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}