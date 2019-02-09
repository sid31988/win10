using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Win10WebApp.DataLayer;
using Win10WebApp.Models;
using Win10WebApp.Repository;

namespace Win10WebApp.ViewModels
{
    public class BulkPurchaseViewModel
    {
        private MasterQueries _master = null;
        private Repository<OtherMaster> _otherRepository = null;
        private Repository<CurrencyMaster> _currencyRepository = null;
        private Repository<BulkPurchase> _bulkpurchaseRepository = null;
        private Repository<BulkPurchaseForex> _bulkpurchaseforexRepository = null;
        private Repository<BulkPurchasePayment> _bulkpurchasepaymentRepository = null;
        public BulkPurchaseViewModel()
        {
            _master = new MasterQueries();
            _otherRepository = new Repository<OtherMaster>();
            _currencyRepository = new Repository<CurrencyMaster>();
            _bulkpurchaseRepository = new Repository<BulkPurchase>();
            _bulkpurchaseforexRepository = new Repository<BulkPurchaseForex>();
            _bulkpurchasepaymentRepository = new Repository<BulkPurchasePayment>();
        }

        public BulkPurchase BulkPurchase { get; set; }
        public BulkPurchaseForex BulkPurchaseForex { get; set; }
        public BulkPurchasePayment BulkPurchasePayment { get; set; }

        public List<KeyValuePair> FFMCAD { get; set; } //Type: F 
        public List<KeyValuePair> Broker { get; set; } //Type: R Broker
        public List<KeyValuePair> SubBroker { get; set; } //Type: R SubBroker

        public List<KeyValuePair> CurrencyName { get; set; } //Column: CurrencyName
        public List<KeyValuePair> CurrencyNotes { get; set; }//Column: CurrencyNotes

        public List<KeyValuePair> DeliveryIn { get; set; }//Type:DeliveryIn(new)
        public List<KeyValuePair> CostCentre { get; set; } //Type: CostCentre
        public List<KeyValuePair> Quota { get; set; }//Type:Quota(new)
        public List<KeyValuePair> ChargesTax { get; set; } //Type:ChargesTax(new)
        public List<KeyValuePair> SrvChrg { get; set; }//Type:SrvCharge(new)
        public List<KeyValuePair> ForexPaiseQty { get; set; } //Type:BrokerPaise(new) applicable to both Broker and Sub Broker Paise/Qty ddl

        public List<KeyValuePair> CashBank { get; set; }
        public List<KeyValuePair> PaymentReceipt { get; set; }
        public List<KeyValuePair> Bank { get; set; }

        public BulkPurchaseViewModel SetModel()
        {
            return new BulkPurchaseViewModel
            {
                BulkPurchase = new BulkPurchase(),
                BulkPurchaseForex = new BulkPurchaseForex(),
                BulkPurchasePayment = new BulkPurchasePayment(),
                FFMCAD = GetPartyMasterBytype('F'),
                Broker = GetPartyMasterBytype('R'),
                SubBroker = GetPartyMasterBytype('R'),
                CurrencyName = GetCurrencyMasterBytype("CurrencyName"),
                CurrencyNotes = GetOtherMasterBytype("CurrencyNote"),
                DeliveryIn = GetOtherMasterBytype("DeliveryIn"),
                CostCentre = GetOtherMasterBytype("Cost Center"),
                Quota = GetOtherMasterBytype("Quota"),
                ChargesTax = GetOtherMasterBytype("ChargesTax"),
                SrvChrg = GetOtherMasterBytype("SrvCharge"),
                ForexPaiseQty = GetOtherMasterBytype("ForexPaiseQty"),
                CashBank = GetOtherMasterBytype("CashBank"),
                PaymentReceipt = GetOtherMasterBytype("PaymentReceipt"),
                Bank = GetOtherMasterBytype("Bank")
            };

        }

        private List<KeyValuePair> GetPartyMasterBytype(char type)
        {
            switch (type)
            {
                case 'F':
                    return _master.GetAllPartyMaster(type).Where(p => p.Type.ToString().Equals(type.ToString(), StringComparison.OrdinalIgnoreCase) && p.IsDeleted == false).Select(p => new KeyValuePair() { Id = p.Id, Value = p.Name }).ToList<KeyValuePair>();
                case 'R':
                    return _master.GetAllPartyMaster(type).Where(p => p.Type.ToString().Equals(type.ToString(), StringComparison.OrdinalIgnoreCase) && p.IsDeleted == false).Select(p => new KeyValuePair() { Id = p.Id, Value = p.Broker }).ToList<KeyValuePair>();
                default:
                    throw new Exception("Invalid Party master type passed....!");
            }
        }

        private List<KeyValuePair> GetCurrencyMasterBytype(string type)
        {
            switch (type)
            {
                case "CurrencyName":
                    return _currencyRepository.GetAll().Where(c => c.IsDeleted == false).Select(c => new KeyValuePair() { Id = c.Id, Value = c.CurrencyName }).ToList<KeyValuePair>();
                case "CurrencyNote":
                    return _currencyRepository.GetAll().Where(c => c.IsDeleted == false).Select(c => new KeyValuePair() { Id = c.Id, Value = c.CurrencyName }).ToList<KeyValuePair>();
                default:
                    throw new Exception("Invalid Currency master type passed....!");
            }
        }

        private List<KeyValuePair> GetOtherMasterBytype(string type)
        {
            return _otherRepository.GetAll().Where(o => o.Type.Equals(type) && o.IsDeleted == false).Select(o => new KeyValuePair() { Id = o.Id, Value = o.Name }).ToList<KeyValuePair>();
        }

        public BulkPurchaseViewModel Add()
        {
            BulkPurchaseViewModel model = null;
            model = SetModel();
            BulkPurchaseForexViewModel.ClearSession();
            BulkPurchasePaymentViewModel.ClearSession();
            return model;
        }

        public void Save(BulkPurchaseViewModel model)
        {
            model.BulkPurchase.IsDeleted = false;
            _bulkpurchaseRepository.Insert(model.BulkPurchase);
            _bulkpurchaseRepository.Save();

            model.BulkPurchaseForex.BulkPurchaseId = model.BulkPurchase.Id;
            model.BulkPurchaseForex.IsDeleted = false;
            _bulkpurchaseforexRepository.Insert(model.BulkPurchaseForex);
            _bulkpurchaseforexRepository.Save();
            BulkPurchaseForexViewModel.ClearSession();

            model.BulkPurchasePayment.BulkPurchaseId = model.BulkPurchase.Id;
            model.BulkPurchasePayment.IsDeleted = false;
            _bulkpurchasepaymentRepository.Insert(model.BulkPurchasePayment);
            _bulkpurchasepaymentRepository.Save();
            BulkPurchasePaymentViewModel.ClearSession();

        }
    }

    public class KeyValuePair
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public enum EventSource { Forex, Payment }
    public enum ActionMode { Add, Edit, Delete, Cancel }
}