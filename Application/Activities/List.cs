using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;
using static Application.Activities.List;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler
        {
        }
    }

    public class Handler : IRequestHandler<Query, List<Activity>>
    {
        private readonly DataContext _context;
        
        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Activity>> Handle(Query request, CancellationToken token)
        {
            return await _context.Activities.ToListAsync();
        }
    }
}