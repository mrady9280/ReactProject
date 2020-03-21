using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using ReactProject.Domain;

namespace ReactProject.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options): base(options)
        {
            
        }
        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Value>().HasData(new List<Value>()
            {
                new Value(){Id = 1, Name = "Value 101"},
                new Value(){Id = 2, Name = "Value 102"},
                new Value(){Id = 3, Name = "Value 103"}
            });
            base.OnModelCreating(modelBuilder);
        }
    }
    
}
