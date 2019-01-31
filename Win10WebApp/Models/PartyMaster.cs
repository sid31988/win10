using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.Repository;

namespace Win10WebApp.Models
{
    public class PartyMaster : ICustomColumns
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Peraddress1 { get; set; }
        public string Peraddress2 { get; set; }
        public string Peraddress3 { get; set; }
        public string Percity { get; set; }
        public string Perpincode { get; set; }
        public string Perstate { get; set; }
        public string Percountry { get; set; }
        public string Nationality { get; set; }
        public string Contactperson1 { get; set; }
        public string Tel1 { get; set; }
        public string Email1 { get; set; }
        public string Contactperson2 { get; set; }
        public string Tel2 { get; set; }
        public string Email2 { get; set; }
        public string Primaryid { get; set; }
        public string Panno { get; set; }
        public string Aadharno { get; set; }
        public string Gst { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public bool IsDeleted { get; set; }
        public string Residency { get; set; }
        public char Type { get; set; }  //To identify type of PartyMaster
        public List<AdditionalData> AdditionalData { get; set; }    //To store additional data pertaining to Profile
        public string Mobile { get; set; }
        public string OpeningBalance { get; set; }
        public string BalancePost { get; set; }
        public string AddressInBill { get; set; }
        public string Lock { get; set; }
        public string Category { get; set; }
        public string Broker { get; set; }
        public string Location { get; set; }
        public string CollectGST { get; set; }
        public string RBILICNo { get; set; }
        public DateTime? RBIExp { get; set; }
        public string ControlAC { get; set; }
    }
}