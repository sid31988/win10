using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Win10WebApp.DataLayer
{
    public class DataInterfaceSQL
    {
        string strConnectionString = string.Empty;
        public DataInterfaceSQL()
        {
            strConnectionString = ConfigurationManager.ConnectionStrings["dbConnection"].ToString();
        }

        public DataSet GetDataSet(string strSelectedCommand, SqlParameter[] parameters, bool isGetCommandName,
            bool isStoredProcedure = true, int? intTimeout = null)
        {
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
            DataSet dataSet = new DataSet();
            sqlDataAdapter.SelectCommand = new SqlCommand();
            if (isStoredProcedure)
            {
                sqlDataAdapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                if (parameters != null)
                {
                    sqlDataAdapter.SelectCommand.Parameters.AddRange(parameters);
                }
            }

            if (isGetCommandName)
            {
                sqlDataAdapter.SelectCommand.CommandText = ConfigurationManager.AppSettings.Get(strSelectedCommand);
            }
            else
            {
                sqlDataAdapter.SelectCommand.CommandText = strSelectedCommand;
            }



            sqlDataAdapter.SelectCommand.CommandTimeout = Convert.ToInt32(ConfigurationManager.AppSettings["SQLCommandTimeout"]);

            using (SqlConnection connection = new SqlConnection())
            {
                connection.ConnectionString = strConnectionString;
                if (connection.State != ConnectionState.Open)
                {
                    connection.Open();
                }

                sqlDataAdapter.SelectCommand.Connection = connection;
                sqlDataAdapter.Fill(dataSet);

                for (int index = 0; index < dataSet.Tables.Count; index++)
                {
                    string strTableName = "Table" + index;
                    dataSet.Tables[index].TableName = strTableName;
                }
                connection.Close();
                sqlDataAdapter.SelectCommand.Parameters.Clear();
            }
            return dataSet;
        }


        public int ExecuteNonQueryDB(string strProcedureName, SqlParameter[] parameters, int? intTimeout = null)
        {
            //Declare result as 0
            int intResult = 0;
            //use a connection object
            using (SqlConnection connection = new SqlConnection())
            {
                //Use a commond objects
                using (SqlCommand command = new SqlCommand())
                {
                    //If timeout is not a null then set it to SQL commond 
                    if (intTimeout != null)
                    {
                        command.CommandTimeout = (int)intTimeout;
                    }
                    else //Added SQL Command Timeout
                    {
                        command.CommandTimeout = Convert.ToInt32(ConfigurationManager.AppSettings["SqlCommandTimeOut"]);
                    }

                    //Get or set a connection string
                    connection.ConnectionString = strConnectionString;
                    //if connection state is already colsed then open the connection
                    if (connection.State == ConnectionState.Closed)
                    {
                        connection.Open();
                    }
                    //Set commond text
                    command.CommandText = strProcedureName;
                    //Set commond type
                    command.CommandType = CommandType.StoredProcedure;
                    //Set a connection
                    command.Connection = connection;
                    //If parameters is not null then set the parameters.
                    if (parameters != null)
                    {
                        command.Parameters.AddRange(parameters);
                    }
                    //Excecute the query
                    intResult = command.ExecuteNonQuery();
                    // Make sure the Command is closed
                    command.Dispose();
                    // Make sure the connection is closed
                    connection.Dispose();
                    // Make sure the objects get disposed.                        
                }
            }
            return intResult;
        }

    }
}