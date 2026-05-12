export const dashboardData = [
  {
    id: "sled-platforms",
    title: "1. SLED Procurement Platforms",
    description: "National platforms for daily search and tracking.",
    items: [
      { name: "GovTribe", purpose: "Federal + SLED tracking", url: "https://govtribe.com/" },
      { name: "HigherGov", purpose: "SLED + federal intelligence", url: "https://www.highergov.com/" },
      { name: "BidNet Direct", purpose: "Municipal/school bids", url: "https://www.bidnetdirect.com/" },
      { name: "DemandStar", purpose: "Local government bids", url: "https://www.demandstar.com/" },
      { name: "GovWin IQ", purpose: "Enterprise capture", url: "https://iq.govwin.com/" },
      { name: "SAM.gov", purpose: "Federal procurement", url: "https://sam.gov/" },
      { name: "PennBid", purpose: "Pennsylvania bids", url: "https://pennbid.procureware.com/" },
      { name: "Bonfire", purpose: "Municipal procurement", url: "https://gobonfire.com/" },
      { name: "OpenGov", purpose: "City/county procurement", url: "https://procurement.opengov.com/" },
      { name: "IonWave", purpose: "Government purchasing", url: "https://www.ionwave.net/" },
      { name: "Public Purchase", purpose: "School/municipal bids", url: "https://www.publicpurchase.com/" },
      { name: "Beacon Bid", purpose: "Pittsburgh procurement", url: "https://beaconbid.com/" },
      { name: "FindRFP", purpose: "Broad RFP search", url: "https://www.findrfp.com/" },
      { name: "RFPDB", purpose: "RFP aggregation", url: "https://www.rfpdb.com/" },
      { name: "InstantMarkets", purpose: "PA public bids", url: "https://www.instantmarkets.com/" }
    ]
  },
  {
    id: "pa-sites",
    title: "2. Pennsylvania Procurement Sites",
    description: "State-level agencies and systems.",
    items: [
      { name: "PA eMarketplace", purpose: "Pennsylvania procurement", url: "http://www.emarketplace.state.pa.us/" },
      { name: "COSTARS", purpose: "Cooperative purchasing", url: "https://www.dgs.pa.gov/COSTARS/" },
      { name: "PennDOT ECMS", purpose: "Transportation projects", url: "https://www.ecms.penndot.pa.gov/" },
      { name: "PA Turnpike Procurement", purpose: "Turnpike contracts", url: "https://www.paturnpike.com/business/procurement" },
      { name: "DCNR Procurement", purpose: "Parks/facilities", url: "https://www.dcnr.pa.gov/Business/" },
      { name: "PA Treasury Procurement", purpose: "Treasury bids", url: "https://www.patreasury.gov/bureau/purchasing/" }
    ]
  },
  {
    id: "pgh-sites",
    title: "3. Pittsburgh / Allegheny County Sites",
    description: "Local agencies and utility authorities.",
    items: [
      { name: "City of Pittsburgh", purpose: "City contracts", url: "https://pittsburghpa.gov/beacon/opportunities.html" },
      { name: "Allegheny County", purpose: "County contracts", url: "https://alleghenycounty.bonfirehub.com/" },
      { name: "PWSA", purpose: "Water/sewer", url: "https://www.pgh2o.com/about-us/procurement/" },
      { name: "PRT", purpose: "Transit", url: "https://www.rideprt.org/business-center/procurement/" },
      { name: "URA RFP Portal", purpose: "Redevelopment", url: "https://www.ura.org/pages/proposals-bids" },
      { name: "Sports & Exhibition Authority", purpose: "Venue infrastructure", url: "http://www.pgh-sea.com/" },
      { name: "Airport Authority", purpose: "Airport", url: "https://flypittsburgh.com/business-opportunities/" },
      { name: "Pittsburgh Public Schools", purpose: "Education", url: "https://www.pghschools.org/Page/5453" },
      { name: "CCAC", purpose: "Higher education", url: "https://www.ccac.edu/business/purchasing/" },
      { name: "University of Pittsburgh", purpose: "University procurement", url: "https://www.purchase.pitt.edu/" }
    ]
  },
  {
    id: "current-sled",
    title: "4. Current Pittsburgh SLED Opportunities",
    description: "Active contracts for traffic, fleet, and utilities.",
    items: [
      { name: "Traffic Signal Equipment", entity: "City of Pittsburgh", scope: "Signal heads, controllers, cabinets, poles, wiring, electrical components", source: "Beacon" },
      { name: "Arrow Board RFQ", entity: "DOMI", scope: "Portable arrow boards", source: "Beacon" },
      { name: "Equipment Trailer RFQ", entity: "DOMI", scope: "Towing trailers", source: "Beacon" },
      { name: "Janitorial Supplies", entity: "PRT", scope: "Disinfectants, paper products, chemicals, restroom supplies", source: "PRT Portal" },
      { name: "Specialty Gases", entity: "Allegheny County", scope: "Industrial, calibration, and lab gases", source: "Bonfire" },
      { name: "Fleet Procurement", entity: "PWSA", scope: "Tires, fleet electronics, truck accessories, replacement parts", source: "PWSA Portal" },
      { name: "Water/Sewer Materials", entity: "PWSA", scope: "Valves, hydrants, sewer materials, utility castings, piping", source: "PWSA Portal" }
    ]
  },
  {
    id: "real-estate",
    title: "5. Real Estate & Redevelopment",
    description: "Property, housing, and infrastructure redevelopment.",
    items: [
      { name: "OMI Building Redevelopment", entity: "URA", scope: "Construction, interiors, HVAC, electrical, lighting, site work", source: "URA RFP" },
      { name: "Lower Hill Redevelopment", entity: "URA", scope: "Mixed-use housing, infrastructure, landscaping, security, smart building systems, FF&E", source: "Lower Hill Housing RFP" },
      { name: "Smithfield St Reconstruction", entity: "City", scope: "Streetscape, signage, lighting, retail buildout, outdoor infrastructure", source: "Smithfield Reconstruction" },
      { name: "Brushton Station ETOD", entity: "PRT", scope: "Mixed-use development, engineering, transit retail, construction management", source: "Brushton Station ETOD" }
    ]
  },
  {
    id: "ai-platforms",
    title: "6. AI Government Platforms",
    description: "Where to find AI-specific solicitations.",
    items: [
      { name: "Starbridge AI", purpose: "AI-specific RFPs", url: "https://starbridge.ai/" },
      { name: "Civic IQ", purpose: "City AI contracts", url: "https://civiciq.com/" },
      { name: "Sourcewell", purpose: "Cooperative purchasing", url: "https://www.sourcewell-mn.gov/" },
      { name: "DemandStar", purpose: "Municipal AI", url: "https://www.demandstar.com/" },
      { name: "BidNet Direct", purpose: "Local government AI", url: "https://www.bidnetdirect.com/" }
    ]
  },
  {
    id: "current-ai",
    title: "7. Current AI Opportunities",
    description: "Active AI and automation contracts.",
    items: [
      { name: "Enterprise AI Platform", entity: "Sourcewell", scope: "AI consulting, workflow automation, AI deployment, LLM implementation", source: "Sourcewell RFP" },
      { name: "Michigan AI Chatbot", entity: "State of Michigan", scope: "AI chatbots, citizen service automation, internal AI systems", source: "MI AI Chatbot RFP" },
      { name: "AI Education Platforms", entity: "Ed Tech JPA", scope: "Classroom AI, district AI systems, AI learning platforms", source: "Ed Tech JPA RFP" },
      { name: "AI Consultant Opportunity", entity: "Various", scope: "AI strategy, implementation, workforce development, AI training", source: "DemandStar" },
      { name: "District AI Training", entity: "Providence SD", scope: "AI literacy, AI ethics, staff workshops, GenAI training", source: "AI Education Training RFP" }
    ]
  },
  {
    id: "pa-ai",
    title: "8. Pennsylvania AI Opportunities",
    description: "State-level AI and data projects.",
    items: [
      { name: "PASSHE Digital Credentialing", entity: "PASSHE", scope: "AI analytics, workforce tracking, digital credentialing", source: "PASSHE" },
      { name: "PASSHE Data Environment", entity: "PASSHE", scope: "AI analytics, reporting automation, business intelligence", source: "PASSHE" },
      { name: "Invoice Automation", entity: "PA DOE", scope: "OCR, workflow automation, invoice tracking, compliance systems", source: "PA DOE" }
    ]
  },
  {
    id: "ai-services",
    title: "9. Best AI Services to Offer",
    description: "High-demand service categories for government.",
    items: [
      { name: "AI Governance/Compliance", demand: "Extremely High" },
      { name: "AI Training", demand: "Extremely High" },
      { name: "Copilot Deployment", demand: "Very High" },
      { name: "AI Workflow Automation", demand: "Very High" },
      { name: "AI Chatbots", demand: "High" },
      { name: "AI Records Management", demand: "High" },
      { name: "AI Procurement Automation", demand: "High" },
      { name: "AI Analytics", demand: "High" },
      { name: "AI Policy Consulting", demand: "Very High" }
    ]
  },
  {
    id: "suppliers",
    title: "10. Supplier Accounts to Open",
    description: "Verified vendors with Net 30/60 terms.",
    categories: [
      {
        name: "Industrial / MRO",
        suppliers: [
          { name: "Grainger", terms: "Net 30" },
          { name: "Fastenal", terms: "Net 30" },
          { name: "MSC Industrial", terms: "Net 30" },
          { name: "Global Industrial", terms: "Net 30" }
        ]
      },
      {
        name: "Janitorial / Facility",
        suppliers: [
          { name: "HD Supply", terms: "Net 30" },
          { name: "SupplyWorks", terms: "Net 30" },
          { name: "Uline", terms: "Net 30" },
          { name: "Quill", terms: "Net 30" }
        ]
      },
      {
        name: "Electrical / Infra",
        suppliers: [
          { name: "Wesco", terms: "Net 30-60" },
          { name: "Graybar", terms: "Net 30-60" },
          { name: "Sonepar", terms: "Net 30-60" }
        ]
      },
      {
        name: "Water / Sewer",
        suppliers: [
          { name: "Core & Main", terms: "Net 30-60" },
          { name: "Ferguson", terms: "Net 30-60" },
          { name: "Fortiline Waterworks", terms: "Net 30-60" }
        ]
      }
    ]
  },
  {
    id: "ai-partners",
    title: "11. Government AI Partners",
    description: "Core technology providers for Gov AI.",
    items: [
      { name: "Microsoft Azure AI", purpose: "Government AI" },
      { name: "AWS GovCloud", purpose: "Secure hosting" },
      { name: "Google Public Sector", purpose: "Public-sector AI" },
      { name: "OpenAI", purpose: "LLM integrations" },
      { name: "Anthropic", purpose: "Claude integrations" }
    ]
  },
  {
    id: "it-distributors",
    title: "12. Government IT Distributors",
    description: "Wholesale aggregators for tech hardware/software.",
    items: [
      { name: "Carahsoft", purpose: "Largest gov IT distributor" },
      { name: "SHI", purpose: "Government reseller" },
      { name: "CDW Government", purpose: "SLED IT" },
      { name: "Insight Public Sector", purpose: "Gov integrations" }
    ]
  },
  {
    id: "search-terms",
    title: "13. Best Search Terms",
    description: "Exact strings to find high-probability contracts.",
    items: [
      "annual supply", "term contract", "IDIQ", "maintenance materials", 
      "municipal hardware", "traffic equipment", "fleet parts", 
      "janitorial supplies", "electrical supplies", "utility materials", 
      "emergency procurement", "cooperative purchasing", "facility supplies", 
      "AI governance", "AI implementation", "AI training", "Copilot", 
      "workflow automation", "records automation", "chatbot", "digital transformation"
    ]
  },
  {
    id: "target-categories",
    title: "14. Best Contract Categories",
    description: "Sectors with highest growth and margin.",
    items: [
      { cat: "SLED Supply", sub: "traffic, water/sewer, janitorial, fleet, electrical" },
      { cat: "Real Estate", sub: "FF&E, lighting, signage, smart building, security" },
      { cat: "AI Services", sub: "governance, training, automation, chatbots, policy" }
    ]
  },
  {
    id: "business-model",
    title: "15. Best Business Model",
    description: "Broker / Project Manager Model.",
    workflow: [
      "Find bid", "Source vendors", "Get pricing", "Add markup", 
      "Submit bid", "Supplier fulfills", "Manage project", "Invoice government"
    ]
  }
];
