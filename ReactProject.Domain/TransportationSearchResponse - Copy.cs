using System;
using System.Collections.Generic;

namespace ReactProject.Domain
{
    public class TranspostationSearchResponse
    {
        public List<Transportation> Transportations { get; set; }
    }

    public partial class Transportation
    {
        public string Token { get; set; }
        public string Vendor { get; set; }
        public string Provider { get; set; }
        public string CompanyName { get; set; }
        public string RouteName { get; set; }
        public string TermsAndConditions { get; set; }
        public string StartDate { get; set; }
        public List<VehicleType> VehicleTypes { get; set; }
        public List<Policy> Policies { get; set; }
    }
    public partial class VehicleType
    {
        public string VehicleTypeCode { get; set; }
        public List<Category> Categories { get; set; }
    }
    public partial class Category
    {
        public string CategoryCode { get; set; }
        public string CategoryName { get; set; }
        public Model Model { get; set; }
        public int AvailableQuantity { get; set; }
        public int MaxPaxCapacity { get; set; }
        public List<ItemBreakdown> DisplayRateInfo { get; set; }
        public List<AdditionalService> AdditionalServices { get; set; }
    }
    public class ItemBreakdown
    {
        public DateTime? Date { get; set; }

        public decimal ExchangeRate { get; set; }

        public BreakdownItemId ItemId { get; set; }

        public decimal LocalAmount { get; set; }

        public string LocalCurrencyCode { get; set; }

        public int Quantity { get; set; }

        public int RoomNumber { get; set; }

        public int SurchargeTypeId { get; set; }

        public int TaxTypeId { get; set; }

        public BreakdownType Type { get; set; }

        public decimal UsdAmount { get; set; }
            
        public int TaxProtoTypeId { get; set; }

    }
    public partial class AdditionalService
    {
        public long Code { get; set; }
        public string Description { get; set; }
        public List<ItemBreakdown> DisplayRateInfo { get; set; }
    }
    public class Config
    {
        public string Key { get; set; }
        public string Value { get; set; }
    }

    public partial class Policy
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public DateCriteria DateCriteria { get; set; }
        public List<Config> Criteria { get; set; }
        public bool IsCurrentPolicy { get; set; }
        public bool IsNoShow { get; set; }
    }

    public class DateCriteria
    {
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
    public enum BreakdownType
    {
        None = 0,

        RoomCharge = 1,

        Surcharge = 2,

        CancellationFee = 3,

        ExtraBed = 4,

        Discount = 5,

        BestPriceGuarantee = 6,

        StaffDiscount = 7,

        CancellationPolicy = 8,

        Other = 9,

        NoshowFee = 10,

        TravelVisa = 11,

        GroundTransportation = 12,
    }
    public enum BreakdownItemId
    {
        
        None = 0,
        
        NetExclusive = 1,
        
        Tax = 2,
        
        Margin = 3,
        
        Commission = 4,
        
        ProcessingFee = 5,
        
        DiscountPromotion = 6,
        
        Uplift = 7,
        
        AffiliateCommission = 8,
        
        Downlift = 9,
        
        NetInclusive = 10,
        
        SalesExclusive = 11,
        
        SalesInclusive = 12,
        
        Payment = 13,
        
        AccruedRewardPoints = 14,
        
        YcsPromotion = 15,
        
        Fee = 16,
        
        PartnerDiscount = 17,
        
        PartnerDiscountToBePaid = 18,
        
        ExchangeRateDifference = 19,
        
        BankCharges = 20,
        
        ConcurExpense = 21,
        
        ConcurTax = 22,
        
        ConcurAdvance = 23,
        
        UpcPayment = 24,
        
        UpcAdjustment = 25,
        
        StaffDiscount = 26,
        
        BestPrice = 27,
        
        OtherAdjustment = 28,
        
        Ebe = 29,
        
        UpcOvercharge = 30,
        
        APClearing = 31,
        
        InputGst = 32,
        
        FxGainAndLoss = 33,
        
        WexUplift = 34,
        
        TransactionCost = 35,
        
        CashInTransit = 36,
        
        UpcCostAdjustment = 37,
        
        B2BCommission = 38,
        
        LoyaltyDiscount = 39,
        
        AccRateDifference = 40,
        
        ReferenceSalesInclusive = 41,
        
        AgodaAgencyCommission = 42,
        
        TotMarginTaxCollected = 43,
        
        TotMarginFeeCollected = 44
    }
    public partial class Model
    {
        public long From { get; set; }
        public long To { get; set; }
    }
}
