using System.Collections.Generic;

namespace ReactProject.Domain
{
    public class TransportationSearchRequest
    {
        public string Token { get; set; }
        public string RouteCode { get; set; }
        public string StartDate { get; set; }
        public int Adults { get; set; }
        public int Children { get; set; }
        public string ModelFrom { get; set; }
        public string ModelTo { get; set; }
        public string VehicleTypeCode { get; set; }
        public List<string> AdditionalServices { get; set; }
        public string CategoryCode { get; set; }
    }
}