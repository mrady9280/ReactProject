using System.Collections.Generic;
using System.Linq;
using ReactProject.Domain;

namespace ReactProject.Data
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Activities.Any())
            {
                var activities = new List<Activity>()
                {

                };
            }
        }
    }
}