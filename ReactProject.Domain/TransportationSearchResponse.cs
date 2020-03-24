namespace ReactProject.Domain
{
    using System;
    using System.Collections.Generic;
    public class TransportationSearchResponse
    {
        public List<Transportation> Transportations { get; set; }
    }
    public class Transportation
    {
        public string Token { get; set; }
        public string Vendor { get; set; }
        public string Provider { get; set; }
        public string CompanyName { get; set; }
        public string CompanyNameAr { get; set; }
        public string RouteName { get; set; }
        public string RouteNameAr { get; set; }
        public DateTime StartDate { get; set; }
        public string TermsAndConditions { get; set; }
        public List<Vehicle> Vehicles { get; set; }
        public List<Policy> Policies { get; set; }
        public List<DisplayRateInfo> DisplayRateInfo { get; set; }
    }
    public class DisplayRateInfo
    {
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public string CurrencyCode { get; set; }
        public string Purpose { get; set; }
    }
    public class AdditionalService
    {
        public string Description { get; set; }
        public string DescriptionAr { get; set; }
        public decimal Amount { get; set; }
    }
    public class Vehicle
    {
        public string VehicleTypeName { get; set; }
        public string CategoryName { get; set; }
        public string ModelFrom { get; set; }
        public string ModelTo { get; set; }
        public List<DisplayRateInfo> DisplayRateInfo { get; set; }
        public List<AdditionalService> AdditionalServices { get; set; }
    }
    public class Policy
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string ActiveFrom { get; set; }
        public string ActiveTo { get; set; }
        public string Summary { get; set; }
    }
}