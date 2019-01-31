using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Reflection;
using System.Web;
using Win10WebApp.DataLayer;

namespace Win10WebApp.Repository
{
    public class Repository<T> : IRepository<T> where T : class, ICustomColumns
    {
        private DbRepo<T> db;
        private DbSet<T> dbSet;

        public bool IsDeleted { get; set; }

        public Repository()
        {
            db = new DbRepo<T>();
            dbSet = db.Set<T>();
        }
        public IEnumerable<T> GetAll()
        {
            //if (db.Database.Connection.State == ConnectionState.Open) {
            //    db.Database.Connection.Close();
            //}
            //db.Database.Connection.Open(); //delete during production
            //var ret = dbSet.ToList();//IsDeleted flag was not considered
            var ret = dbSet.Where(e => e.IsDeleted == false);
            return ret.ToList();
        }

        public T GetById(object Id)
        {
            return dbSet.Find(Id);
        }

        public void Insert(T obj)
        {
            dbSet.Add(obj);
            Save();
        }
        public void Update(T obj)
        {
            db.Entry(obj).State = EntityState.Modified;
            db.Entry(obj).Property(x => x.CreatedDate).IsModified = false;
            Save();
        }

        public void Delete(object Id)
        {
            T getObjById = dbSet.Find(Id);

            dbSet.Remove(getObjById);
        }
        public void Save()
        {
            db.SaveChanges();
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.db != null)
                {
                    this.db.Dispose();
                    this.db = null;
                }
            }
        }
    }

    //

    public class ReturnViewModel<T> where T : class
    {
        List<T> ViewModel = new List<T>();
        //T model1;
        //T model2;

        public List<T> getModel(T m1, T m2)
        {
            ViewModel.Add(m1);
            ViewModel.Add(m2);
            return ViewModel;
        }
    }

    // Generic Data To List
    public class DataToList
    {
        //DataTable dt = new DataTable();
        public List<T> ConvertDataTable<T>(DataTable dt)
        {
            List<T> data = new List<T>();
            foreach (DataRow row in dt.Rows)
            {
                T item = GetItem<T>(row);
                data.Add(item);
            }
            return data;
        }
        public T GetItem<T>(DataRow dr)
        {
            Type temp = typeof(T);
            T obj = Activator.CreateInstance<T>();

            foreach (DataColumn column in dr.Table.Columns)
            {
                foreach (PropertyInfo pro in temp.GetProperties())
                {
                    if (pro.Name == column.ColumnName)
                        pro.SetValue(obj, dr[column.ColumnName], null);
                    else
                        continue;
                }
            }
            return obj;
        }
    }
}