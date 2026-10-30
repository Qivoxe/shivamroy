/*
  Project content for the portfolio.
  All projects are explicitly identified as concepts or independent demonstrations;
  no client relationships or commercial outcomes are fabricated.
*/

const PROJECTS = [
  {
    id: "atelier",
    name: "Atelier",
    category: "Website Development",
    status: "Concept Project",
    short: "A premium restaurant digital experience with an editorial menu, reservations, and private dining storytelling.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Elegant restaurant dining room with warm neutral tones",
    overview: "Atelier is an independent concept for a high-end restaurant website. It explores how hospitality, photography, and reservation-led design can work together without feeling like a template.",
    objective: "To design a restaurant digital experience that communicates atmosphere, makes the menu easy to explore, and turns interest into a reservation or private dining inquiry.",
    approach: "The concept uses a calm editorial structure, generous whitespace, restrained typography, and food-led photography. The user journey moves from atmosphere to menu, then to reservation details or private dining information.",
    features: ["Sophisticated homepage", "Interactive menu", "Reservation experience", "Food photography", "Private dining section", "Location and contact details"],
    process: "Designed as a responsive static website concept with semantic HTML, custom CSS, and vanilla JavaScript interactions. The focus is clarity, hierarchy, and a booking path that feels natural on every screen size.",
    statusNote: "Independent website concept. Imagery is representative and no restaurant client is implied.",
    gallery: [
      ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80", "Restaurant table setting with soft evening light"],
      ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80", "Restaurant interior designed around warm hospitality"],
      ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80", "Carefully plated food photographed in a warm editorial style"]
    ]
  },
  {
    id: "forma",
    name: "Forma",
    category: "Website Development",
    status: "Concept Project",
    short: "An architectural editorial website for an interior design and home improvement service.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Modern home exterior with strong architectural lines",
    overview: "Forma is a concept website for an interior design and home improvement business. It focuses on helping visitors understand services, review past work, and start a qualified inquiry.",
    objective: "To create a premium service website that feels architectural and personal, while making scope, budget, and consultation requests simple to communicate.",
    approach: "The layout uses an editorial project-gallery structure with clear service categories. The inquiry flow gathers business name, project type, budget range, and consultation preference so the first conversation starts with useful context.",
    features: ["Service catalogue", "Project gallery", "Interactive inquiry form", "Budget selection", "Consultation booking", "Responsive experience"],
    process: "Planned as a mobile-first static website with lightweight JavaScript for filtering, form states, and gallery navigation. The visual language draws from architectural publications: quiet typography, measured grids, and strong photography.",
    statusNote: "Independent website concept. No interior design client is claimed.",
    gallery: [
      ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80", "Refined living room with architectural furniture and natural light"],
      ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80", "Minimal interior composition with warm materials"],
      ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", "Home interior with balanced proportions and muted colors"]
    ]
  },
  {
    id: "leadflow-os",
    name: "LeadFlow OS",
    category: "Business Automation",
    status: "Working Independent Demonstration",
    short: "A lead management and follow-up workflow designed to organize inquiries from first contact to booked appointment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Analytics dashboard with charts and business workflow data",
    overview: "LeadFlow OS is an independent automation demonstration built around a practical question: what happens to a business inquiry after it arrives, and how can that process become more reliable?",
    objective: "To turn scattered leads into an organized workflow with categorization, scoring, follow-up timing, CRM storage, appointment management, and a clear operational view.",
    approach: "The workflow starts with lead capture, then assigns category and score based on defined business rules. Higher-priority leads receive faster follow-ups, while all records are stored in a structured CRM table. Appointment status and basic analytics make the pipeline visible.",
    features: ["Lead capture", "Lead categorization", "Lead scoring", "CRM storage", "Follow-up automation", "Appointment management", "Analytics dashboard"],
    process: "Designed as a practical technical system using Python and FastAPI for workflow logic, SQL/PostgreSQL for structured storage, and API integrations for capture and notifications. The demonstration focuses on workflow behavior rather than decorative dashboards.",
    statusNote: "Working independent demonstration. Sample data only; no real client leads are shown or claimed.",
    flow: ["Lead captured from form or API", "Lead categorized by service and source", "Score assigned from business rules", "Record stored in CRM database", "Follow-up task and reminder created", "Appointment status and pipeline updated"],
    gallery: [
      ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80", "Dashboard-style interface used to explain workflow visibility"],
      ["https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=700&q=80", "Technical planning and systems workflow"],
      ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80", "Code and workflow implementation detail"]
    ]
  },
  {
    id: "opspilot",
    name: "OpsPilot",
    category: "Business Automation",
    status: "Working Independent Demonstration",
    short: "A business operations and client onboarding system for managing inquiries, projects, tasks, and invoice status.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Business planning workspace with notes, diagrams, and laptop",
    overview: "OpsPilot is an independent operations workflow concept for service businesses that need more structure after a client says yes. It connects inquiry handling, onboarding, project setup, task assignment, and payment tracking in one practical system.",
    objective: "To reduce manual coordination by turning each new inquiry into a consistent operational sequence with visible ownership and status.",
    approach: "The system models the path from first inquiry to project delivery. Inquiries are qualified, converted into client records, and used to generate projects. Tasks are assigned with deadlines, statuses are tracked, invoices are monitored, and reminders reduce the chance of follow-ups being missed.",
    features: ["Inquiry management", "Client onboarding", "Project creation", "Task assignment", "Status tracking", "Invoice tracking", "Automated reminders"],
    process: "Built as a workflow-first demonstration with Python, FastAPI, SQL/PostgreSQL, and integration points for notifications. The dashboard is intentionally straightforward: current work, overdue items, invoice state, and upcoming reminders.",
    statusNote: "Working independent demonstration. All records and workflows are sample concepts only.",
    flow: ["New inquiry recorded", "Client details and requirements captured", "Project and milestones created", "Tasks assigned with due dates", "Status and invoice tracking updated", "Automated reminders sent when needed"],
    gallery: [
      ["https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80", "Operations planning workspace with process notes"],
      ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80", "Laptop and project workspace representing an operations dashboard"],
      ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80", "Business metrics interface used as a visual reference"]
    ]
  },
  {
    id: "serein",
    name: "Serein",
    category: "AI Video Advertising",
    status: "Independent Creative Concept",
    short: "A luxury skincare advertising campaign built around texture, light, and quiet product storytelling.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Premium skincare products photographed in soft natural light",
    overview: "Serein is an independent advertising concept for a luxury skincare launch. It explores how macro photography, calm pacing, and minimal copy can make a product campaign feel premium without becoming overproduced.",
    objective: "To design a campaign system that could deliver one 30-second commercial, short promotional edits, vertical concepts, and storyboards while keeping a consistent art direction.",
    approach: "The creative direction favors close-up texture, water-like reflections, soft natural light, and restrained typography. Each scene is designed to communicate a feeling first, then a product detail, with enough visual rhythm for short-form formats.",
    features: ["30-second commercial", "Short promotional videos", "Vertical video concepts", "Storyboards", "Product cinematography", "Creative direction"],
    process: "The production process combines creative direction, AI-assisted visual development, editorial editing, sound selection, and format-specific framing for reels and vertical placements. The concept is presented as a campaign system, not a client case study.",
    statusNote: "Independent creative concept. No skincare client, launch, or commercial results are implied.",
    gallery: [
      ["https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80", "Minimal skincare composition with soft light"],
      ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80", "Beauty product detail with clean editorial styling"],
      ["https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=700&q=80", "Skincare texture and product detail in a premium composition"]
    ]
  },
  {
    id: "ember-grain",
    name: "Ember & Grain",
    category: "AI Video Advertising",
    status: "Independent Creative Concept",
    short: "A cinematic restaurant advertising concept focused on fire, texture, atmosphere, and appetite.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Cinematic food photography with warm highlights and fresh ingredients",
    overview: "Ember & Grain is an independent restaurant advertising concept designed around warmth, craft, and appetite. It treats food cinematography as the center of the campaign rather than a supporting element.",
    objective: "To create a campaign package for a restaurant brand: one 30-second commercial, two short-form edits, storyboards, and atmospheric visuals that could work across social placements.",
    approach: "The creative direction uses warm practical light, close textures, steam, fire, and natural restaurant sound cues. The edit rhythm is designed to feel cinematic but still immediate enough for reels and short promotional formats.",
    features: ["30-second commercial", "Short-form promotional videos", "Food cinematography", "Restaurant atmosphere", "Storyboards", "Advertising concepts"],
    process: "The process combines campaign planning, shot-list development, AI-assisted food and atmosphere visuals, editing, and format adaptation. All presented work is a concept package with representative imagery.",
    statusNote: "Independent creative concept. No restaurant client or campaign performance is claimed.",
    gallery: [
      ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80", "Warm restaurant atmosphere prepared for evening service"],
      ["https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=700&q=80", "Fresh ingredients arranged for cinematic food storytelling"],
      ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80", "Prepared dish photographed with warm editorial styling"]
    ]
  }
];
