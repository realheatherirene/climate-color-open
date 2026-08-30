// directory-data.js

const styles = {
    "All Styles": { color: "#334155", pAnchor: "" },
    Driver: { color: "#DC2626", pAnchor: "PACE" },
    Advocate: { color: "#EA580C", pAnchor: "PEOPLE" },
    Visionary: { color: "#D97706", pAnchor: "PURPOSE" },
    Stabilizer: { color: "#16A34A", pAnchor: "PACE" },
    Architect: { color: "#0284C7", pAnchor: "PLACE" },
    Keeper: { color: "#4F46E5", pAnchor: "PURPOSE" },
    Connector: { color: "#9333EA", pAnchor: "PEOPLE" },
    Guardian: { color: "#7C3AED", pAnchor: "PLACE" }
};

const resources = [
    // --- 1. DRIVER (RED) ---
    { title: "Sunrise Movement", styles: ["Driver", "Advocate"], type: "Direct Action", desc: "Youth-led movement organizing rapid political and local action for climate solutions.", url: "https://www.sunrisemovement.org" },
    { title: "350.org", styles: ["Driver", "Guardian"], type: "Campaigning", desc: "Global grassroots network taking direct action on fossil fuel infrastructure.", url: "https://350.org" },
    { title: "Extinction Rebellion", styles: ["Driver"], type: "Civil Resistance", desc: "International movement using non-violent civil disobedience to compel climate action.", url: "https://rebellion.global" },
    { title: "Rainforest Action Network", styles: ["Driver", "Guardian"], type: "Corporate Action", desc: "Direct market campaigns targeting global corporate drivers of deforestation.", url: "https://www.ran.org" },
    { title: "Climate Defiance", styles: ["Driver"], type: "Direct Action", desc: "Youth-led rapid-response network conducting peaceful blockades and disruption.", url: "https://www.climatedefiance.org" },
    { title: "Drawdown Solutions Library", styles: ["Architect", "Visionary", "Driver"], type: "General Field", desc: "Comprehensive catalog detailing evidence-based climate solutions spanning energy, land use, and community action.", url: "https://drawdown.org" },
    { title: "Clean Energy States Alliance (CESA)", styles: ["Architect", "Driver"], type: "General Field", desc: "Research and practical technical guides on transitioning community spaces and public institutions to clean energy.", url: "https://www.cesa.org" },
    { title: "Patagonia Environmental Grants", styles: ["Architect", "Driver"], type: "Funding", desc: "Funding for small, action-oriented grassroots groups focused on protecting local ecosystems and regional climate solutions.", url: "https://www.patagonia.com/how-we-fund/" },
    { title: "Youth Climate Justice Fund Resources", styles: ["Driver", "Guardian"], type: "Youth & Student", desc: "Capacity-building tools, youth mentorship frameworks, and micro-granting models for youth-led groups.", url: "https://ycjf.org" },
    { title: "Clif Family Foundation Grants", styles: ["Architect", "Driver"], type: "Funding", desc: "Supports community-based organizations working to protect community health and preserve natural resources.", url: "https://cliffamilyfoundation.org" },

    // --- 2. ADVOCATE (ORANGE) ---
    { title: "Climate Reality Project", styles: ["Advocate", "Connector"], type: "Public Outreach", desc: "Trainings and communication hubs for public climate advocates and storytellers.", url: "https://www.climaterealityproject.org" },
    { title: "Citizen's Climate Lobby", styles: ["Advocate", "Architect", "Connector"], type: "Civic Advocacy", desc: "Building relationships with lawmakers and training citizen lobbyists across local chapters.", url: "https://citizensclimatelobby.org" },
    { title: "Climate Voices", styles: ["Advocate"], type: "Speakers Bureau", desc: "Connecting local scientists and communicators directly with community audiences.", url: "https://climatevoices.org" },
    { title: "EcoAmerica", styles: ["Advocate", "Connector"], type: "Faith & Civic", desc: "Building broad-based leadership across faith, health, and local civic sectors.", url: "https://ecoamerica.org" },
    { title: "The Climate Mobilization", styles: ["Advocate", "Driver"], type: "Policy Mobilization", desc: "Campaigning to declare climate emergencies and mobilize municipal action.", url: "https://www.theclimatemobilization.org" },
    { title: "InsideClimate News", styles: ["Advocate", "Guardian"], type: "Journalism", desc: "Independent, non-profit news organization covering energy, environmental law, and climate.", url: "https://insideclimatenews.org" },
    { title: "ACE Youth Action Network", styles: ["Advocate"], type: "Youth & Student", desc: "Civic leadership fellowships and digital toolkits designed to support high school and college students in local organizing.", url: "https://ourclimateourfuture.org" },
    { title: "Yale Program on Climate Change Communication", styles: ["Advocate"], type: "General Field", desc: "Data-driven insights, public opinion maps, and communication guides to effectively discuss climate topics across diverse audiences.", url: "https://climatecommunication.yale.edu" },
    { title: "CLEAN (Climate Literacy Network)", styles: ["Advocate"], type: "General Field", desc: "Peer-reviewed collection of K–16 educational resources and lesson plans aligned with science standards.", url: "https://cleanet.org" },
    { title: "NOAA Teaching Climate", styles: ["Advocate"], type: "General Field", desc: "Professional development opportunities, climate data visualizers, and interactive tools for educators.", url: "https://www.climate.gov" },
    { title: "Citizens' Climate Education Youth", styles: ["Advocate"], type: "Youth & Student", desc: "Youth-focused education modules, advocacy curricula, campus organizing kits, and leadership training.", url: "https://citizensclimateeducation.org" },

    // --- 3. VISIONARY (YELLOW) ---
    { title: "B Lab / B Corp Directory", styles: ["Visionary", "Architect"], type: "Economic Design", desc: "Framework and directory supporting sustainable business and ethical economic design.", url: "https://www.bcorporation.net" },
    { title: "Rocky Mountain Institute", styles: ["Visionary", "Architect"], type: "Clean Tech", desc: "Accelerating market-driven transitions to clean energy and zero-carbon building systems.", url: "https://rmi.org" },
    { title: "Ecovillage Network", styles: ["Visionary", "Stabilizer"], type: "Living Systems", desc: "Global network of regenerative intentional communities and ecological housing.", url: "https://ecovillage.org" },
    { title: "Dark Mountain Project", styles: ["Visionary", "Keeper"], type: "Cultural Design", desc: "Cultural collective framing new narratives for an age of ecological transition.", url: "https://dark-mountain.net" },
    { title: "Climate Color Community", styles: ["Visionary"], type: "General Field", desc: "An ecosystem of peers and projects that make climate action feel clear, grounded, and aligned with your strengths.", url: "https://climatecolor.com" },
    { title: "Museums for Climate Action", styles: ["Visionary"], type: "Key Org", desc: "Global initiative providing open-source exhibition concepts and creative research models for cultural institutions.", url: "https://www.museumsforclimateaction.org" },
    { title: "Young Voices for the Planet", styles: ["Visionary"], type: "Youth & Student", desc: "Short films and lesson plans showcasing student-led environmental projects to reframe youth agency.", url: "https://celfeducation.org/yvfp/" },
    { title: "StoryCorps Climate Collection", styles: ["Visionary"], type: "Storytelling", desc: "Curated archive of first-person narratives capturing local landscape changes and personal environmental stewardship.", url: "https://storycorps.org" },
    { title: "NCA5 Teaching & Engagement Resources", styles: ["Advocate", "Visionary"], type: "General Field", desc: "Fifth National Climate Assessment summaries, visual aids, and regional impact data.", url: "https://cleanet.org/clean/literacy/tools/nca/index.html" },

    // --- 4. STABILIZER (GREEN) ---
    { title: "National Wildlife Federation", styles: ["Stabilizer", "Keeper"], type: "Conservation", desc: "Hands-on habitat protection, local garden certifications, and practical conservation.", url: "https://www.nwf.org" },
    { title: "Local Food Hubs & USDA Directory", styles: ["Stabilizer", "Keeper"], type: "Agriculture", desc: "Practical local agriculture networks for building ongoing neighborhood food resilience.", url: "https://www.usda.gov" },
    { title: "Community Garden Association", styles: ["Stabilizer", "Connector"], type: "Community Care", desc: "Resources and neighborhood network maps for building and tending shared gardens.", url: "https://communitygarden.org" },
    { title: "TreePeople", styles: ["Stabilizer", "Driver"], type: "Urban Forestry", desc: "Hands-on urban tree planting, canopy restoration, and local watershed care.", url: "https://www.treepeople.org" },
    { title: "Xerces Society", styles: ["Stabilizer", "Keeper"], type: "Invertebrate Care", desc: "Invertebrate conservation, pollinator habitat restoration, and pesticide reduction.", url: "https://www.xerces.org" },
    { title: "Compost Coalition", styles: ["Stabilizer"], type: "Soil Health", desc: "Decentralized community composting networks converting urban waste to living soil.", url: "https://ilsr.org/composting" },
    { title: "USDA Conservation Program (CSP)", styles: ["Stabilizer", "Keeper"], type: "Gov Archive", desc: "Practices and guidelines for land management, soil health, and agricultural stewardship.", url: "https://www.nrcs.usda.gov/programs-initiatives/csp-conservation-stewardship-program" },
    { title: "dPlan / ArtsReady", styles: ["Stabilizer"], type: "Resilience", desc: "Online disaster preparedness planning tool designed for cultural institutions and community centers.", url: "https://www.dplan.org" },
    { title: "AAM Facilities & Risk Management", styles: ["Stabilizer"], type: "Facilities", desc: "Operational guides covering energy efficiency, historic building retrofits, and disaster preparedness.", url: "https://www.aam-us.org" },
    { title: "U.S. Climate Resilience Toolkit", styles: ["Architect", "Stabilizer"], type: "Resilience", desc: "Interagency federal framework offering case studies and decision-support tools to build adaptation into master planning.", url: "https://toolkit.climate.gov" },
    { title: "AAM Environment & Climate Network", styles: ["Stabilizer"], type: "Key Org", desc: "Operational frameworks and toolkits from AAM to help cultural sites integrate sustainability into operations.", url: "https://www.aam-us.org" },
    { title: "EPA ARC-X Adaptation Center (EDGI)", styles: ["Architect", "Stabilizer"], type: "Resilience", desc: "Community-archived climate projection datasets and risk assessment workflows preserved by EDGI.", url: "https://envirodatagov.org" },
    { title: "FEMA Community Resilience (Smithsonian)", styles: ["Stabilizer"], type: "Resilience", desc: "Smithsonian-hosted community resilience frameworks and risk management resources adapted from federal models.", url: "https://ssec.si.edu" },

    // --- 5. ARCHITECT (BLUE) ---
    { title: "Sierra Club Volunteer Portal", styles: ["Connector", "Driver", "Architect"], type: "Volunteer Operations", desc: "Database for finding localized outdoor stewardship, cleanups, and watchdogs.", url: "https://www.sierraclub.org" },
    { title: "ICLEI Local Governments", styles: ["Architect"], type: "Municipal Logistics", desc: "Global network of local governments dedicated to systemic municipal sustainability.", url: "https://iclei.org" },
    { title: "Global Footprint Network", styles: ["Architect", "Visionary"], type: "Data Metrics", desc: "Providing accounting frameworks and footprint indicators for resource management.", url: "https://www.footprintnetwork.org" },
    { title: "Climate Policy Initiative", styles: ["Architect", "Guardian"], type: "Financial Systems", desc: "Analyzing energy policy and public finance systems to maximize investment efficiency.", url: "https://www.climatepolicyinitiative.org" },
    { title: "Carbon Disclosure Project", styles: ["Architect"], type: "Corporate Reporting", desc: "Managing global disclosure systems for investors, companies, and city operations.", url: "https://www.cdp.net" },
    { title: "EPA Local Climate Program", styles: ["Architect", "Guardian"], type: "Gov Portal", desc: "Frameworks for local government climate action, energy efficiency, and municipal planning.", url: "https://www.epa.gov/statelocalclimate" },
    { title: "Climate Data Initiative", styles: ["Architect", "Guardian"], type: "Data Archive", desc: "Open-data repositories mapping coastal flooding, ecosystem vulnerability, and urban heat.", url: "https://www.data.gov/climate/" },
    { title: "DSIRE Renewable Incentives", styles: ["Architect"], type: "Legal & Policy", desc: "Searchable database tracking federal, state, and utility incentives, tax credits, and policies for clean energy.", url: "https://www.dsireusa.org" },
    { title: "State Climate Policy Dashboard (C2ES)", styles: ["Architect"], type: "Legal & Policy", desc: "State-by-state policy maps and tracking tools for clean energy standards and climate action plans.", url: "https://www.c2es.org" },
    { title: "USGBC LEED for Existing Buildings", styles: ["Architect"], type: "Facilities", desc: "Standards and verification toolkits for green building maintenance, water conservation, and sustainable purchasing.", url: "https://www.usgbc.org" },
    { title: "The Climate Toolkit", styles: ["Architect"], type: "Key Org", desc: "Collaborative network for cultural institutions offering practical goals, tracking metrics, and shared operational strategies.", url: "https://climatetoolkit.org" },
    { title: "ENERGY STAR Non-Profit Workbook (RMI)", styles: ["Architect"], type: "Facilities", desc: "Independent building efficiency guides, benchmarking tools, and energy-saving checklists for non-profit facilities.", url: "https://rmi.org" },

    // --- 6. KEEPER (INDIGO) ---
    { title: "Land Trust Alliance", styles: ["Keeper", "Architect"], type: "Land Conservation", desc: "National network guiding local land trusts in permanent conservation easement protection.", url: "https://www.landtrustalliance.org" },
    { title: "Society for Ecological Restoration", styles: ["Keeper", "Stabilizer"], type: "Ecology Protection", desc: "Restoring native ecosystem balance and protecting ecological heritage worldwide.", url: "https://www.ser.org" },
    { title: "Old Growth Forest Network", styles: ["Keeper"], type: "Forest Protection", desc: "Identifying and preserving protected ancient forests across national county networks.", url: "https://www.oldgrowthforest.net/" },
    { title: "Indigenous Climate Hub", styles: ["Keeper"], type: "Storytelling", desc: "Indigenous-led platform sharing traditional ecological knowledge and community climate adaptation projects.", url: "https://indigenousclimatehub.ca" },
    { title: "World Monuments Fund Resilience", styles: ["Keeper"], type: "Resilience", desc: "Global initiative providing climate risk assessment models and technical guidance to safeguard historic green spaces.", url: "https://www.wmf.org" },
    { title: "Oral History Association Guides", styles: ["Keeper"], type: "Storytelling", desc: "Methodology guides and best practices for documenting community memories of environmental change and land use.", url: "https://oralhistory.org" },
    { title: "Heritage Emergency Task Force (Smithsonian)", styles: ["Keeper"], type: "Resilience", desc: "Smithsonian Institution disaster response guides, salvage procedures, and technical assistance for cultural sites.", url: "https://culturalrescue.si.edu" },

    // --- 7. CONNECTOR (PURPLE) ---
    { title: "Transition Network", styles: ["Connector", "Visionary"], type: "Community Building", desc: "Grassroots movement helping communities rebuild local resilience and cooperation.", url: "https://transitionnetwork.org" },
    { title: "VolunteerMatch Climate Hub", styles: ["Connector", "Architect"], type: "Volunteering", desc: "Connecting skilled volunteers with local environmental non-profits and groups.", url: "https://www.volunteermatch.org" },
    { title: "Idealist Environmental Index", styles: ["Connector", "Architect"], type: "Network Portal", desc: "Searchable directory connecting individuals with local climate projects and jobs.", url: "https://www.idealist.org" },
    { title: "Climate Resilience Leadership Network", styles: ["Connector", "Advocate"], type: "Community Coalitions", desc: "Facilitating cross-sector dialogues and neighborhood resilience circles.", url: "https://resilience.org" },
    { title: "Green Faith Alliance", styles: ["Connector", "Keeper"], type: "Interfaith Networks", desc: "Mobilizing multi-faith communities for shared local stewardship and justice.", url: "https://greenfaith.org" },
    { title: "SciStarter", styles: ["Connector"], type: "Community Sci", desc: "Global community science hub connecting the public with searchable research projects in environmental monitoring.", url: "https://scistarter.org" },
    { title: "CoCoRaHS Network", styles: ["Connector"], type: "Community Sci", desc: "Grassroots network of volunteer observers measuring precipitation to provide high-resolution data for climate researchers.", url: "https://www.cocorahs.org" },
    { title: "Resilience Hubs Toolkit (USDN)", styles: ["Connector"], type: "Resilience", desc: "Urban Sustainability Directors Network guide for developing community facilities that support residents during climate disruptions.", url: "https://www.usdn.org" },
    { title: "Climate Toolkit Youth Network", styles: ["Connector"], type: "Youth & Student", desc: "Youth Climate Summit toolkits and frameworks for engaging young people in institutional decision-making.", url: "https://climatetoolkit.org" },
    { title: "iNaturalist", styles: ["Connector"], type: "Community Sci", desc: "Joint initiative allowing citizens to log plant and animal observations to map local biodiversity shifts.", url: "https://www.inaturalist.org" },
    { title: "Just Transition Alliance Resources", styles: ["Connector"], type: "Justice", desc: "Popular education tools, organizing frameworks, and policy briefs created jointly by labor and community groups.", url: "https://jtalliance.org" },

    // --- 8. GUARDIAN (VIOLET) ---
    { title: "Community Environmental Legal Defense Fund", styles: ["Guardian"], type: "Legal Watchdog", desc: "Legal assistance and advocacy protecting rights of nature and community self-governance.", url: "https://celdf.org" },
    { title: "Earthjustice", styles: ["Guardian", "Driver"], type: "Environmental Law", desc: "Nonprofit environmental law organization wielding the power of law to protect health.", url: "https://earthjustice.org" },
    { title: "NRDC Action Fund", styles: ["Guardian", "Advocate"], type: "Policy Accountability", desc: "Holding elected officials accountable for environmental justice and clean energy laws.", url: "https://www.nrdcactionfund.org" },
    { title: "Environmental Justice Health Alliance", styles: ["Guardian", "Connector"], type: "Fence-line Protection", desc: "Grassroots coalition monitoring industrial pollution impacts on vulnerable communities.", url: "https://ej4all.org" },
    { title: "FracTracker Alliance", styles: ["Guardian", "Architect"], type: "Data Watchdog", desc: "Tracking extraction risks through map datasets to inform public health advocates.", url: "https://fractracker.org/" },
    { title: "Center for Biological Diversity", styles: ["Guardian", "Keeper"], type: "Species Protection", desc: "Legal advocacy securing protections for endangered species and public lands.", url: "https://www.biologicaldiversity.org" },
    { title: "Climate Emergency Fund", styles: ["Guardian", "Driver"], type: "Rapid Funding", desc: "Providing rapid grant funding to disruptive grassroots legal action networks.", url: "https://www.climateemergencyfund.org" },
    { title: "Sabin Center Litigation Database", styles: ["Guardian"], type: "Legal & Policy", desc: "Maintained by Columbia Law School, tracking climate litigation cases and administrative petitions across courts.", url: "https://climatecasechart.com" },
    { title: "Equitable & Just National Climate Platform", styles: ["Guardian"], type: "Justice", desc: "Collaborative platform detailing policy frameworks to address environmental pollution and economic resilience simultaneously.", url: "https://ajustclimate.org" },
    { title: "EJScreen Archive (End-of-Term)", styles: ["Guardian"], type: "General Field", desc: "Archived high-resolution demographic and environmental indicator mapping tool preserved via the End of Term Archive.", url: "https://eotarchive.org" },
    { title: "Climate Policy Radar", styles: ["Guardian"], type: "General Field", desc: "Open-access research platform tracking climate laws, policies, and legal framework data globally.", url: "https://climatepolicyradar.org" },
    { title: "The Solutions Project Frontline Hub", styles: ["Guardian"], type: "Funding", desc: "National grassroots funding platform and accelerator supporting climate justice solutions created by frontline community leaders.", url: "https://thesolutionsproject.org" },
    { title: "Global Greengrants EJ Hub", styles: ["Guardian"], type: "Justice", desc: "Global network providing direct micro-grants, grassroots toolkits, and local governance resources for frontline defenders.", url: "https://www.greengrants.org" },
    { title: "NAACP Environmental Justice Program", styles: ["Guardian"], type: "Justice", desc: "Research reports, policy toolkits, and civic engagement guides focusing on energy access and environmental equity.", url: "https://naacp.org" }
];
