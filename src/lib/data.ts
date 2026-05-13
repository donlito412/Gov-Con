export const PORTALS = [
  { name: "Allegheny County Bonfire", url: "https://alleghenycounty.bonfirehub.com/portal/?tab=openOpportunities", category: "Local Government", focus: "County Level Bids" },
  { name: "City of Pittsburgh Beacon", url: "https://pittsburghpa.gov/beacon/opportunities.html", category: "City Level", focus: "Beacon Bids" },
  { name: "PRT Procurement (OpenGov)", url: "https://procurement.opengov.com/portal/rideprt", category: "Regional Transit", focus: "Transit/Fleet Bids" },
  { name: "PPS Beacon Bid", url: "https://www.pghschools.org/Page/5453", category: "School District", focus: "Educational Supplies" },
  { name: "URA Proposals & Bids", url: "https://www.ura.org/pages/proposals-bids", category: "Redevelopment", focus: "Real Estate/Infra" },
  { name: "PWSA Procurement", url: "https://www.pgh2o.com/about-us/procurement/current-opportunities", category: "Water / Sewer", focus: "Utility Materials" },
  { name: "PA eMarketplace", url: "http://www.emarketplace.state.pa.us/Search.aspx", category: "State Level", focus: "Statewide Contracts" },
  { name: "PennDOT ECMS", url: "https://www.ecms.penndot.pa.gov/", category: "Construction", focus: "Infrastructure" },
  { name: "CCAC Procurement", url: "https://www.ccac.edu/business/purchasing/index.php", category: "Higher Ed", focus: "College Supplies" },
  { name: "BidNet Direct (PA Group)", url: "https://www.bidnetdirect.com/pennsylvania", category: "Aggregator", focus: "Regional Aggregate" },
  { name: "GovTribe (SLED)", url: "https://govtribe.com/", category: "Aggregator", focus: "Market Intelligence" },
];

export const SUPPLIERS = [
  { name: "Grainger", category: "Industrial / MRO", terms: "Net 30", rating: 5, focus: "Tools, Safety" },
  { name: "Fastenal", category: "Industrial / MRO", terms: "Net 30", rating: 5, focus: "Fasteners, Tools" },
  { name: "MSC Industrial", category: "Industrial / MRO", terms: "Net 30", rating: 4, focus: "Machining" },
  { name: "HD Supply", category: "Janitorial / Facility", terms: "Net 30", rating: 4, focus: "Cleaning" },
  { name: "Uline", category: "Janitorial / Facility", terms: "Net 30", rating: 5, focus: "Shipping" },
  { name: "Quill", category: "Janitorial / Facility", terms: "Net 30", rating: 4, focus: "Office" },
  { name: "Wesco", category: "Electrical", terms: "Net 30-60", rating: 5, focus: "Lighting, Infr" },
  { name: "Graybar", category: "Electrical", terms: "Net 30-60", rating: 4, focus: "Networking" },
  { name: "Ferguson", category: "Water / Sewer", terms: "Net 30-60", rating: 5, focus: "Pipes, Valves" },
  { name: "Core & Main", category: "Water / Sewer", terms: "Net 30-60", rating: 4, focus: "Utility" },
  { name: "NAPA Auto Parts", category: "Fleet / Parts", terms: "Net 30", rating: 5, focus: "Vehicles" },
  { name: "FleetPride", category: "Fleet / Parts", terms: "Net 30", rating: 4, focus: "Heavy-duty" },
  { name: "Airgas", category: "Fleet / Parts", terms: "Net 30-60", rating: 4, focus: "Specialty Gases" },
  { name: "Amazon Business", category: "IT / Electronics", terms: "Net 30", rating: 5, focus: "General Tech" },
  { name: "CDW-G", category: "IT / Electronics", terms: "Net 30", rating: 5, focus: "Hardware" },
];

export const OPPORTUNITIES = [
  // Goods & Supplies
  { title: "Traffic Signal Equipment", agency: "City of Pittsburgh", category: "Goods", dueDate: "Active", value: "TBD", portal: "Beacon", tags: ["Traffic", "Electrical"] },
  { title: "Arrow Board RFQ", agency: "DOMI", category: "Goods", dueDate: "Active", value: "RFQ", portal: "Beacon", tags: ["Fleet", "Safety"] },
  { title: "Equipment Trailer RFQ", agency: "DOMI", category: "Goods", dueDate: "Active", value: "RFQ", portal: "Beacon", tags: ["Fleet", "Logistics"] },
  { title: "Janitorial Supplies", agency: "PRT", category: "Goods", dueDate: "Active", value: "TBD", portal: "OpenGov", tags: ["Facilities"] },
  { title: "Specialty Gases (IFB)", agency: "Allegheny County", category: "Goods", dueDate: "Active", value: "IFB", portal: "Bonfire", tags: ["Industrial"] },
  { title: "Water/Sewer Materials", agency: "PWSA", category: "Goods", dueDate: "Active", value: "TBD", portal: "PWSA", tags: ["Infrastructure"] },
  { title: "American Flags (IFB# 9422)", agency: "Allegheny County", category: "Goods", dueDate: "Active", value: "Annual", portal: "Bonfire", tags: ["General"] },
  { title: "Warehouse Lift Truck", agency: "PPS", category: "Goods", dueDate: "May 15, 2026", value: "$45k est", portal: "Beacon", tags: ["Equipment"] },
  { title: "Engine Replacement Parts", agency: "Allegheny County", category: "Goods", dueDate: "Active", value: "Ongoing", portal: "Bonfire", tags: ["Fleet"] },
  
  // Real Estate & Development
  { title: "OMI Building Redevelopment", agency: "URA", category: "Real Estate", dueDate: "Active", value: "Mixed-use", portal: "URA", tags: ["Development"] },
  { title: "Lower Hill Redevelopment", agency: "URA", category: "Real Estate", dueDate: "Active", value: "Infrastructure", portal: "URA", tags: ["Security", "FF&E"] },
  { title: "Brushton Station ETOD", agency: "PRT", category: "Real Estate", dueDate: "Active", value: "Transit-oriented", portal: "OpenGov", tags: ["Development"] },
  { title: "Real Estate Appraisal Pool", agency: "HACP", category: "Real Estate", dueDate: "Rolling", value: "Multiple", portal: "HACP", tags: ["Appraisal"] },
  { title: "Lower Hill Housing RFP", agency: "URA", category: "Real Estate", dueDate: "Active", value: "Smart Building", portal: "URA", tags: ["Residential"] },

  // AI & Professional Services
  { title: "Enterprise AI Platform", agency: "Sourcewell", category: "AI / Tech", dueDate: "Active", value: "National", portal: "Sourcewell", tags: ["AI", "Automation"] },
  { title: "State Government AI Chatbot", agency: "Michigan", category: "AI / Tech", dueDate: "Active", value: "Statewide", portal: "MI Portal", tags: ["AI", "UX"] },
  { title: "AI Education Platforms", agency: "Ed Tech JPA", category: "AI / Tech", dueDate: "Active", value: "Multiple", portal: "Ed Tech JPA", tags: ["EdTech", "AI"] },
  { title: "Invoice Automation", agency: "PA DOE", category: "AI / Tech", dueDate: "Active", value: "OCR", portal: "eMarketplace", tags: ["AI", "Finance"] },
  { title: "Workforce Analysis (RFP 26-23)", agency: "PRT", category: "AI / Tech", dueDate: "Active", value: "Consulting", portal: "OpenGov", tags: ["Analytics"] },
  { title: "Industrial Hygiene Consulting", agency: "PPS", category: "Professional", dueDate: "May 15, 2026", value: "Service", portal: "Beacon Bid", tags: ["Safety"] },
];
