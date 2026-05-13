export const dashboardData = [
  {
    id: "sled-platforms",
    title: "1. SLED Procurement Platforms",
    description: "Daily search portals for Allegheny County and national SLED opportunities.",
    items: [
      { name: "GovTribe", purpose: "Federal + SLED tracking", url: "https://govtribe.com/" },
      { name: "HigherGov", purpose: "SLED + federal intelligence", url: "https://www.highergov.com/" },
      { name: "BidNet Direct", purpose: "Municipal/school bids", url: "https://www.bidnetdirect.com/" },
      { name: "DemandStar", purpose: "Local government bids", url: "https://www.demandstar.com/" },
      { name: "GovWin IQ", purpose: "Enterprise capture", url: "https://iq.govwin.com/" },
      { name: "SAM.gov", purpose: "Federal procurement", url: "https://sam.gov/" },
      { name: "PennBid", purpose: "Pennsylvania bids", url: "https://pennbid.procureware.com/" },
      { name: "Bonfire", purpose: "Allegheny County portal", url: "https://alleghenycounty.bonfirehub.com/" },
      { name: "OpenGov", purpose: "PRT & City portal", url: "https://procurement.opengov.com/" },
      { name: "IonWave", purpose: "School district purchasing", url: "https://www.ionwave.net/" },
      { name: "Public Purchase", purpose: "National school bids", url: "https://www.publicpurchase.com/" },
      { name: "Beacon Bid", purpose: "Pittsburgh City/School portal", url: "https://www.pghschools.org/Page/5453" },
      { name: "PA eMarketplace", purpose: "State-wide bids", url: "http://www.emarketplace.state.pa.us/" }
    ]
  },
  {
    id: "pa-sites",
    title: "2. Pennsylvania Procurement Sites",
    description: "Official state-level agency procurement portals.",
    items: [
      { name: "PA eMarketplace", purpose: "Main state bid board", url: "http://www.emarketplace.state.pa.us/" },
      { name: "COSTARS", purpose: "Cooperative purchasing program", url: "https://www.dgs.pa.gov/COSTARS/" },
      { name: "PennDOT ECMS", purpose: "Transportation & infrastructure", url: "https://www.ecms.penndot.pa.gov/" },
      { name: "PA Turnpike", purpose: "Turnpike specific contracts", url: "https://www.paturnpike.com/business/procurement" },
      { name: "DCNR Procurement", purpose: "State parks and forestry", url: "https://www.dcnr.pa.gov/Business/" },
      { name: "PA Treasury", purpose: "Treasury and financial bids", url: "https://www.patreasury.gov/bureau/purchasing/" }
    ]
  },
  {
    id: "pgh-sites",
    title: "3. Local Allegheny County Sites",
    description: "Regional agencies, authorities, and municipal boards.",
    items: [
      { name: "City of Pittsburgh", purpose: "City-wide contracts", url: "https://pittsburghpa.gov/beacon/opportunities.html" },
      { name: "Allegheny County", purpose: "County-wide services/goods", url: "https://alleghenycounty.bonfirehub.com/" },
      { name: "PWSA", purpose: "Water and sewer authority", url: "https://www.pgh2o.com/about-us/procurement/" },
      { name: "PRT (Transit)", purpose: "Bus/Light Rail procurement", url: "https://www.rideprt.org/business-center/procurement/" },
      { name: "URA", purpose: "Redevelopment projects", url: "https://www.ura.org/pages/proposals-bids" },
      { name: "Airport Authority", purpose: "Airport infrastructure", url: "https://flypittsburgh.com/business-opportunities/" },
      { name: "Public Schools (PPS)", purpose: "K-12 education supplies/services", url: "https://www.pghschools.org/Page/5453" },
      { name: "CCAC", purpose: "College procurement", url: "https://www.ccac.edu/business/purchasing/" }
    ]
  },
  {
    id: "current-sled",
    title: "4. Current SLED Opportunities",
    description: "Active high-value solicitations for goods and supplies.",
    items: [
      { name: "Traffic Signal Equipment", entity: "City of PGH", scope: "Signal heads, controllers, cabinets, poles, wiring", status: "Active", source: "Beacon" },
      { name: "American Flags (IFB 9422)", entity: "Allegheny County", scope: "Annual supply of US and State flags", status: "Active", source: "Bonfire" },
      { name: "Specialty Gases (IFB)", entity: "Allegheny County", scope: "Industrial, calibration, and lab gases", status: "Active", source: "Bonfire" },
      { name: "Janitorial Supplies", entity: "PRT", scope: "Disinfectants, chemicals, restroom supplies", status: "Active", source: "OpenGov" },
      { name: "Water/Sewer Materials", entity: "PWSA", scope: "Valves, hydrants, castings, piping", status: "Active", source: "PWSA Portal" },
      { name: "Fleet Tires & Parts", entity: "PWSA", scope: "Industrial tires and fleet electronics", status: "Active", source: "PWSA Portal" },
      { name: "Warehouse Lift Truck", entity: "PPS", scope: "Electric forklift for warehouse ops", status: "Due 5/15/26", source: "Beacon Bid" },
      { name: "Traffic Control Rental", entity: "Allegheny County", scope: "Rental of message boards and cones", status: "Active", source: "Bonfire" },
      { name: "Engine Replacement Parts", entity: "Allegheny County", scope: "Ongoing supply for heavy fleet", status: "Active", source: "Bonfire" }
    ]
  },
  {
    id: "construction",
    title: "5. Infrastructure & Construction",
    description: "Current site work, renovation, and repair contracts.",
    items: [
      { name: "Boiler Upgrades (#202601)", entity: "PPS", scope: "HVAC modernization at multiple sites", status: "Due 5/18/26", source: "Beacon Bid" },
      { name: "Playground Renovations", entity: "Allegheny County", scope: "North Park site improvements", status: "Active", source: "Bonfire" },
      { name: "ACJ Detention Center Reno", entity: "Allegheny County", scope: "HVAC and security upgrades", status: "Active", source: "Bonfire" },
      { name: "Roof Replacement", entity: "Allegheny County", scope: "South Park facility roofing", status: "Active", source: "Bonfire" },
      { name: "Biology Lab Reno", entity: "CCAC", scope: "Lab modernizations and equipment", status: "Active", source: "Bonfire" },
      { name: "Smithfield St Reconstruction", entity: "City", scope: "Streetscape, lighting, signage", status: "Active", source: "Beacon" },
      { name: "Structured Data Cabling", entity: "City", scope: "Fiber and copper network install", status: "Active", source: "Beacon" }
    ]
  },
  {
    id: "real-estate",
    title: "6. Real Estate & Development",
    description: "Property redevelopment and housing opportunities.",
    items: [
      { name: "OMI Building Redevelopment", entity: "URA", scope: "Mixed-use building renovation", status: "Active", source: "URA" },
      { name: "Lower Hill Housing", entity: "URA", scope: "Residential development and smart systems", status: "Active", source: "URA" },
      { name: "Brushton Station ETOD", entity: "PRT", scope: "Transit-oriented mixed-use design", status: "Active", source: "OpenGov" },
      { name: "Appraisal Pool", entity: "HACP", scope: "Real estate appraisal services", status: "Rolling", source: "HACP" }
    ]
  },
  {
    id: "current-ai",
    title: "7. Current AI Opportunities",
    description: "Active AI, automation, and data modernization contracts.",
    items: [
      { name: "Enterprise AI Platform", entity: "Sourcewell", scope: "AI consulting, workflow automation, LLM deploy", source: "Sourcewell" },
      { name: "State AI Chatbot", entity: "Michigan", scope: "Citizen service automation", source: "MI Portal" },
      { name: "AI Education Platforms", entity: "Ed Tech JPA", scope: "Classroom AI and learning systems", source: "Ed Tech JPA" },
      { name: "Digital Credentialing", entity: "PASSHE", scope: "AI analytics for workforce tracking", source: "PASSHE" },
      { name: "Invoice Automation", entity: "PA DOE", scope: "OCR and workflow automation", source: "PA eMarketplace" }
    ]
  },
  {
    id: "ai-intel",
    title: "8. AI Market Intelligence",
    description: "Platforms and strategies for AI procurement.",
    items: [
      { name: "Starbridge AI", purpose: "AI-specific RFP tracking", url: "https://starbridge.ai/" },
      { name: "Civic IQ", purpose: "City-level AI contracts", url: "https://civiciq.com/" },
      { name: "AI Governance/Compliance", demand: "Extremely High", service: "Policy & Risk" },
      { name: "AI Training", demand: "Extremely High", service: "Workforce Dev" }
    ]
  },
  {
    id: "suppliers",
    title: "9. Supplier Accounts",
    description: "Net 30/60 vendors for goods and materials.",
    items: [
      { name: "Grainger", category: "Industrial/MRO", terms: "Net 30" },
      { name: "HD Supply", category: "Facilities", terms: "Net 30" },
      { name: "Wesco", category: "Electrical", terms: "Net 30-60" },
      { name: "Ferguson", category: "Plumbing", terms: "Net 30-60" },
      { name: "Uline", category: "Shipping", terms: "Net 30" }
    ]
  },
  {
    id: "search-terms",
    title: "10. Capture Search Terms",
    description: "Exact strings to find high-probability contracts.",
    items: [
      "annual supply", "term contract", "IDIQ", "traffic equipment", 
      "AI governance", "Copilot", "workflow automation", "records automation"
    ]
  },
  {
    id: "business-model",
    title: "11. Business Model: Broker/PM",
    description: "The workflow for your Prime Contractor operations.",
    workflow: [
      "Find Bid", "Source Vendor", "Get Pricing", "Submit Prime Bid", "Manage Delivery"
    ]
  }
];
