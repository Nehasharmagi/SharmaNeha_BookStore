using NehaBooks.DataAccess.Repository.IRepository;
using NehaBooks.Models;
using SharmaNeha_BookStore.DataAccess.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NehaBooks.DataAccess.Repository
{
   public class CategoryRepository :Repository<Category>,ICategoryRepository
    {
        private readonly ApplicationDbContext _db;
        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

    }
}
