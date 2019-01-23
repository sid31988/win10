using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Win10WebApp.Repository
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(object Id);
        void Insert(T obj);
        void Update(T obj);
        void Delete(Object Id);
        void Save();

        Boolean IsDeleted { get; set; }
    }
    public interface ISoftDelete
    {
        Boolean IsDeleted { get; set; }
    }
}
