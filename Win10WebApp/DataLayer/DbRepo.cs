using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Win10WebApp.DataLayer
{
    public class DbRepo<T> : DbContext, IDbRepo<T> where T : class
    {
        public DbRepo() : base("dbConnection")
        {
        }

        public DbSet<T> Masters { get; set; }
    }
}