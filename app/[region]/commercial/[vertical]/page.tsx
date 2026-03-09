import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';

type VerticalData = {
  title: string;
  metaDesc: string;
  intro: string;
  whyMatters: string;
  nassauContext: string;
  services: { name: string; icon: string; desc: string }[];
  faqs: { q: string; a: string }[];
  internalLinks: { label: string; href: string }[];
};

const VERTICALS: Record<string, VerticalData> = {
  restaurants: {
    title: 'Restaurant & Food Service Pest Control',
    metaDesc: 'Restaurant pest control in Nassau County, NY. Health department-compliant IPM programs for restaurants, cafes & food service. Liberty Pest Pros since 1982. Call (516) 763-4600.',
    intro: `Nassau County&apos;s food service industry is one of the most vibrant on Long Island — from the storied restaurants along the Nautical Mile in Freeport to the diners and bistros lining Sunrise Highway, Jericho Turnpike, and the village main streets from Mineola to Rockville Centre. With that vibrancy comes one of the most demanding environments for pest control: food, warmth, moisture, and constant deliveries create conditions that attract cockroaches, rodents, flies, and stored product pests year-round. A single pest sighting by a customer, a failed Nassau County Department of Health inspection, or a violation on a surprise audit can shut your doors and destroy a reputation built over decades. Liberty Pest Pros has provided regulation-compliant pest control to Nassau County restaurants since 1982. Our restaurant programs are built on Integrated Pest Management — thorough inspection of kitchens, dry storage, receiving areas, and mechanical spaces, targeted treatment where needed, and proactive monitoring designed to catch issues before they become violations. We schedule service around your hours so there&apos;s zero disruption to your operation, and we provide full written documentation to support your health department compliance records.`,
    whyMatters: `Restaurant pest control is a regulatory, reputational, and operational necessity. Nassau County health inspectors cite pest evidence as a critical violation — the kind that triggers immediate corrective action orders or forced closures. Your Nassau County restaurant&apos;s health inspection score is publicly visible and directly affects customer decisions. Beyond inspections, a cockroach spotted by a diner or a mouse crossing a dining room floor ends up on Yelp, Google, and social media within minutes. The reputational damage from a single pest incident can far exceed the cost of an entire year of professional pest control.`,
    nassauContext: `Nassau County restaurant operators face pest pressure shaped by the region&apos;s climate and geography. Coastal communities like Freeport, Long Beach, and Oceanside deal with moisture-driven cockroach and fly pressure. High-traffic corridors like Hempstead Turnpike and Merrick Road concentrate food establishments close together, increasing the risk of pest migration between neighboring businesses. Dense multi-tenant commercial strips in communities like Valley Stream, Hicksville, and Westbury mean pests in one unit can quickly reach yours.`,
    services: [
      { name: 'Kitchen IPM Program', icon: '🍳', desc: 'Monthly monitoring & treatment' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Gel baiting & targeted treatment' },
      { name: 'Rodent Exclusion', icon: '🐭', desc: 'Entry point sealing & trapping' },
      { name: 'Fly Control', icon: '🪰', desc: 'ILTs, drain treatments & exclusion' },
      { name: 'Stored Product Pests', icon: '🌾', desc: 'Dry storage inspection & treatment' },
      { name: 'Compliance Documentation', icon: '📋', desc: 'Written records for health dept' },
    ],
    faqs: [
      {
        q: 'How often does a Nassau County restaurant need pest control service?',
        a: 'Most Nassau County restaurants require monthly service at minimum. High-volume operations, facilities with known pest pressure, or businesses in multi-tenant commercial buildings may benefit from bi-monthly or weekly service. We&apos;ll assess your specific operation and recommend a program frequency that keeps you compliant and pest-free.'
      },
      {
        q: 'Can you service our restaurant without disrupting our hours?',
        a: 'Yes. We schedule commercial restaurant service during off-hours — early morning before prep begins, late at night after closing, or on scheduled closure days. All our technicians are trained to work around operational requirements without interfering with your staff or customers.'
      },
      {
        q: 'What documentation do you provide for health department inspections?',
        a: 'Every service visit generates a written service report documenting what was inspected, what was found, what was treated, and any recommendations for corrective action. We maintain a service log for your account that you can present to Nassau County health inspectors as evidence of an ongoing, active pest control program.'
      },
      {
        q: 'What pests are most common in Nassau County restaurants?',
        a: 'German cockroaches are the most common — they thrive in the warmth and moisture of commercial kitchens and multiply rapidly. Norway rats and house mice are frequent in ground-level operations with delivery access. Fruit flies and phorid flies are seasonal issues in bar areas and produce storage. Stored product pests appear in dry storage areas with infrequent stock rotation. Our IPM programs address all of these systematically.'
      },
    ],
    internalLinks: [
      { label: 'Freeport Pest Control', href: '/nassau/freeport/' },
      { label: 'Hempstead Pest Control', href: '/nassau/hempstead/' },
      { label: 'Mineola Pest Control', href: '/nassau/mineola/' },
    ],
  },

  offices: {
    title: 'Office & Corporate Pest Control',
    metaDesc: 'Office pest control in Nassau County, NY. Disruption-free IPM programs for corporate offices, business parks & co-working spaces. Liberty Pest Pros since 1982. Call (516) 763-4600.',
    intro: `Nassau County&apos;s corporate and professional landscape spans some of Long Island&apos;s most established business districts — the offices and professional parks of Garden City and Mineola, the corporate campuses along the Nassau Expressway corridor, the professional towers in Uniondale near Nassau Coliseum, and the mixed-use commercial developments in communities like Great Neck and Roslyn. Office environments may seem less susceptible to pest problems than food-service operations, but they face real and recurring challenges: mice and rats enter through utility penetrations and loading docks, cockroaches arrive in cardboard packaging and employee belongings, ants exploit break room spills, and bed bugs increasingly appear in office settings through employee bags and coats. A pest sighting in a corporate office disrupts productivity, undermines employee confidence, and can generate the kind of internal complaints or external press that no facility manager wants to deal with. Liberty Pest Pros has provided disruption-free commercial pest control to Nassau County office buildings and corporate facilities since 1982. Our office programs are built around your hours, your access requirements, and your building management team&apos;s documentation needs — with treatments scheduled to have zero impact on your employees or tenants.`,
    whyMatters: `Office pest control matters for three reasons: operational continuity, employee wellbeing, and tenant retention. A mouse running through an open-plan office, cockroaches in the break room, or a bed bug found in a workstation generates immediate HR and facilities issues. Employees and tenants expect a clean, professional environment — pest activity directly contradicts that expectation and can affect lease renewals and employee satisfaction scores.`,
    nassauContext: `Garden City, Mineola, and Uniondale are Nassau County&apos;s primary commercial office hubs — multi-story buildings with complex utility infrastructure, loading docks, and food service areas that create multiple pest entry and harborage points. Business parks along the Nassau Expressway and Old Country Road corridor include mixed-use buildings with ground-floor retail that increases pest pressure for upper-floor office tenants. Many Nassau County office buildings were constructed decades ago and have legacy infrastructure gaps that require professional exclusion to address.`,
    services: [
      { name: 'IPM Program', icon: '📊', desc: 'Proactive monitoring & prevention' },
      { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion, trapping & monitoring' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Break room & kitchen treatment' },
      { name: 'Ant Control', icon: '🐜', desc: 'Interior & perimeter treatment' },
      { name: 'Bed Bug Detection', icon: '🛏️', desc: 'Inspection & targeted treatment' },
      { name: 'Exterior Perimeter', icon: '🏢', desc: 'Building-wide pest prevention' },
    ],
    faqs: [
      {
        q: 'Can you service our office building outside of business hours?',
        a: 'Yes — after-hours, early-morning, and weekend service is standard for our commercial office accounts. We coordinate with your building management or facilities team to ensure access and minimize any disruption to tenants and employees.'
      },
      {
        q: 'How do you handle bed bug concerns in an office setting?',
        a: 'Office bed bug situations are treated with discretion. We conduct a confidential inspection of the reported area, determine whether an active infestation is present, and treat with targeted methods if needed — all scheduled to avoid exposure to other employees. We can also provide staff education on identification and prevention.'
      },
      {
        q: 'We have multiple tenants in our building — how does a commercial program work?',
        a: 'For multi-tenant office buildings, we offer a master pest control program covering all common areas, perimeter, mechanical spaces, and individual suites. This portfolio approach is more cost-effective than individual tenant programs and provides comprehensive coverage that single-tenant treatments can&apos;t achieve.'
      },
      {
        q: 'What is IPM and why is it the right approach for office buildings?',
        a: 'Integrated Pest Management (IPM) is a science-based approach that prioritizes inspection, monitoring, and prevention over routine chemical application. For office buildings, IPM means less chemical exposure for employees and tenants, documented pest activity data that helps your facilities team address structural issues, and better long-term pest suppression than spray-only programs.'
      },
    ],
    internalLinks: [
      { label: 'Garden City Pest Control', href: '/nassau/garden-city/' },
      { label: 'Mineola Pest Control', href: '/nassau/mineola/' },
      { label: 'Uniondale Pest Control', href: '/nassau/uniondale/' },
    ],
  },

  retail: {
    title: 'Retail Store Pest Control',
    metaDesc: 'Retail pest control in Nassau County, NY. Protect merchandise, customers & reputation in retail stores. IPM programs from Liberty Pest Pros since 1982. Call (516) 763-4600.',
    intro: `Nassau County&apos;s retail corridors are among the most active on Long Island — Hempstead Turnpike, Sunrise Highway, Merrick Road, and the county&apos;s many shopping centers and strip malls from Valley Stream to Hicksville host thousands of retail operations serving millions of customers annually. For retail businesses, pest control is a direct customer experience issue. A cockroach spotted near a display case, a mouse dropping found on a shelf, or a fly hovering over merchandise doesn&apos;t just create a single unhappy customer — it generates social media posts, Google reviews, and word-of-mouth that can empty a store faster than any competitor. Retail environments present unique pest challenges: constant foot traffic introduces pests on bags and packaging, delivery receiving creates entry opportunities, food and beverage components attract insects and rodents, and back-of-house storage areas often harbor pest activity that eventually migrates to the sales floor. Liberty Pest Pros has delivered effective, disruption-free pest control to Nassau County retail operations since 1982. Our retail programs are designed to keep pest activity invisible to your customers and your staff — with monitoring, targeted treatment, and proactive exclusion work that addresses problems before they reach the sales floor.`,
    whyMatters: `Retail pest control is a customer experience and brand reputation imperative. In Nassau County&apos;s competitive retail environment, customers have choices — and a pest encounter in your store will drive them permanently to a competitor while generating damaging online reviews. For retailers carrying food, personal care products, or home goods, pest contamination also creates potential product liability exposure.`,
    nassauContext: `Nassau County&apos;s retail landscape includes large-format anchored shopping centers in Hicksville, Westbury, and Massapequa; high-density strip mall corridors along Hempstead Turnpike and Sunrise Highway; and walkable downtown retail districts in communities like Rockville Centre, Garden City, and Great Neck. High-density shopping centers with multiple food tenants create pest pressure that affects neighboring non-food retailers. Nassau County&apos;s coastal climate drives seasonal surges in fly and ant activity that directly impact open retail environments.`,
    services: [
      { name: 'Store IPM Program', icon: '🛍️', desc: 'Proactive monitoring & prevention' },
      { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion & interior trapping' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Back-of-house & storage treatment' },
      { name: 'Fly Control', icon: '🪰', desc: 'Entrance ILTs & exterior treatment' },
      { name: 'Ant Control', icon: '🐜', desc: 'Perimeter & interior treatment' },
      { name: 'Receiving Area Inspection', icon: '📦', desc: 'Delivery dock pest prevention' },
    ],
    faqs: [
      {
        q: 'How do you treat a retail store without closing it or exposing customers to chemicals?',
        a: 'Our retail programs use targeted, low-disruption methods — gel baiting in back-of-house areas, tamper-resistant monitoring stations in non-public spaces, and exterior perimeter treatments applied outside of store hours. Treatments requiring customer-area access are scheduled before store opening or after closing.'
      },
      {
        q: 'What pests most commonly affect Nassau County retail stores?',
        a: 'Rodents (mice especially) are the most common retail pest in Nassau County — they enter through utility penetrations, gaps under doors, and delivery docks. German cockroaches are prevalent in retail with food components. Stored product pests affect retailers carrying consumables. Ants are a seasonal issue in stores along Nassau&apos;s commercial corridors, especially in spring and summer.'
      },
      {
        q: 'We share a shopping center with food tenants — does that increase our pest risk?',
        a: 'Yes. Multi-tenant retail environments with food anchors concentrate pest pressure that migrates to all tenants in the center. A proactive IPM program with perimeter monitoring and exclusion creates a pest barrier around your specific unit regardless of what neighboring tenants are dealing with.'
      },
      {
        q: 'Can you provide pest control for a retail chain with multiple Nassau County locations?',
        a: 'Absolutely. We offer multi-location commercial programs for retail chains throughout Nassau County, with standardized service protocols, centralized reporting, and consistent documentation across all locations.'
      },
    ],
    internalLinks: [
      { label: 'Hicksville Pest Control', href: '/nassau/hicksville/' },
      { label: 'Valley Stream Pest Control', href: '/nassau/valley-stream/' },
      { label: 'Massapequa Pest Control', href: '/nassau/massapequa/' },
    ],
  },

  healthcare: {
    title: 'Healthcare & Medical Facility Pest Control',
    metaDesc: 'Healthcare pest control in Nassau County, NY. Stringent IPM programs for hospitals, clinics & medical offices. Regulation-compliant service from Liberty Pest Pros. Call (516) 763-4600.',
    intro: `Nassau County is home to a dense network of healthcare facilities — from major hospitals like NYU Langone Long Island and Mercy Medical Center to the hundreds of medical offices, urgent care centers, outpatient clinics, nursing homes, assisted living facilities, and rehabilitation centers distributed across the county. Healthcare environments represent the most demanding setting for commercial pest control: patients with compromised immune systems cannot tolerate even minimal pest exposure, strict regulatory frameworks govern pest control methods and chemical use, infection control requirements constrain treatment options, and the reputational stakes of a pest incident are severe. Liberty Pest Pros has provided regulation-compliant pest control to Nassau County healthcare facilities since 1982. Our healthcare programs are built around your facility&apos;s specific requirements — coordinated with your infection control officer, compliant with Joint Commission and CMS standards, documented for regulatory review, and scheduled to protect patient areas at all times. We treat healthcare pest control as the specialized, high-stakes service it is, with technicians trained in healthcare facility protocols.`,
    whyMatters: `Healthcare pest control carries the highest stakes of any commercial vertical. Pest activity in a patient care area is a patient safety incident, a regulatory finding, and a liability exposure simultaneously. CMS conditions of participation, Joint Commission standards, and New York State DOH regulations all address pest control in healthcare settings. A single substantiated pest complaint can trigger a regulatory survey, a findings report, and mandatory corrective action plans that consume significant administrative resources.`,
    nassauContext: `Nassau County&apos;s major healthcare corridors — the medical campuses in Hempstead, the hospital clusters in Mineola and Manhasset, the nursing home concentration in communities like Woodbury, Great Neck, and Rockville Centre — represent high-density, high-stakes pest control territory. Nassau County&apos;s older healthcare infrastructure includes legacy buildings with aging utility systems that require professional exclusion work. The county&apos;s high concentration of food service areas within healthcare campuses creates additional pest pressure that must be managed within the constraints of patient care environments.`,
    services: [
      { name: 'Healthcare IPM Program', icon: '🏥', desc: 'Patient-safe monitoring & treatment' },
      { name: 'Rodent Exclusion', icon: '🐭', desc: 'Entry point sealing & trapping' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Kitchen & utility area treatment' },
      { name: 'Fly Control', icon: '🪰', desc: 'Food service & entry treatments' },
      { name: 'Bed Bug Response', icon: '🛏️', desc: 'Rapid, discreet inspection & treatment' },
      { name: 'Compliance Documentation', icon: '📋', desc: 'Joint Commission & DOH records' },
    ],
    faqs: [
      {
        q: 'Are your pest control treatments safe for use in patient care areas?',
        a: 'Our healthcare programs use only products and methods appropriate for patient care environments. We coordinate treatment with your infection control team, schedule service to avoid patient exposure, and use non-chemical methods (monitoring stations, exclusion, sanitation recommendations) wherever possible. Chemical treatments in patient areas are never applied while patients are present.'
      },
      {
        q: 'Can you provide documentation that meets Joint Commission and CMS requirements?',
        a: 'Yes. Every service visit generates a detailed written report. We maintain a complete service log for your account documenting all inspections, findings, treatments, and recommendations. This documentation package is designed to satisfy the pest control record-keeping requirements of Joint Commission, CMS, and New York State DOH surveys.'
      },
      {
        q: 'How do you handle a bed bug report in a patient room?',
        a: 'Healthcare bed bug situations are treated as urgent incidents requiring immediate, discreet response. We respond within 24 hours for confirmed or suspected healthcare bed bug reports, conduct a thorough inspection of the affected room and surrounding areas, and implement a targeted treatment protocol that is safe for the healthcare environment and coordinated with your infection control and facilities teams.'
      },
      {
        q: 'Our facility has a dietary department — how do you manage pest control there within healthcare constraints?',
        a: 'Healthcare dietary departments require pest control that meets both food service standards and healthcare regulatory requirements simultaneously. Our approach uses IPM methods proven effective in food service environments while adhering to the stricter chemical-use restrictions that apply in healthcare settings — gel baiting, monitoring stations, exclusion work, and drain maintenance, all scheduled to avoid food preparation periods.'
      },
    ],
    internalLinks: [
      { label: 'Mineola Pest Control', href: '/nassau/mineola/' },
      { label: 'Manhasset Pest Control', href: '/nassau/manhasset/' },
      { label: 'Hempstead Pest Control', href: '/nassau/hempstead/' },
    ],
  },

  schools: {
    title: 'Schools & Educational Facility Pest Control',
    metaDesc: 'School pest control in Nassau County, NY. New York State IPM-compliant programs for K-12 schools, colleges & educational facilities. Liberty Pest Pros. Call (516) 763-4600.',
    intro: `Nassau County is served by dozens of public school districts and numerous private and parochial schools, collectively educating hundreds of thousands of students across facilities ranging from century-old elementary buildings to modern high school campuses. Schools present a distinct combination of pest pressures: the constant movement of students, staff, and deliveries; cafeterias and food service operations that attract insects and rodents; vast building footprints with complex utility infrastructure; and the presence of children that demands the most careful approach to pest control methods. New York State mandates that schools follow an Integrated Pest Management (IPM) approach under the New York State School IPM Program, requiring notification of parents and staff before pesticide applications, maintaining pest control records, and using non-chemical methods as a first line of defense. Liberty Pest Pros has delivered New York State IPM-compliant pest control to Nassau County schools since 1982. We understand the regulatory framework, the notification requirements, and the treatment constraints that school pest control demands — and we design programs that keep Nassau County students and staff in clean, pest-free learning environments while fully meeting state compliance requirements.`,
    whyMatters: `School pest control is a compliance, public health, and community trust issue. New York State&apos;s School IPM law requires active pest management programs with documented IPM practices, mandated parent and staff notification before pesticide applications, and formal record-keeping. Districts that fail to comply face regulatory exposure. Beyond compliance, pest activity in schools directly affects student health and learning — cockroach allergens are a documented asthma trigger, rodent activity in food service areas creates real contamination risks, and pest incidents in schools generate intense parent concern and media coverage.`,
    nassauContext: `Nassau County&apos;s school districts span an enormous range of facility types and ages — from brand-new suburban campus schools in Syosset and Jericho to older urban buildings in Hempstead and Freeport. Older school buildings in Nassau County&apos;s urban core often have legacy infrastructure — aging utility penetrations, outdated cafeteria equipment, and foundation issues — that create persistent pest entry points requiring ongoing exclusion work. Nassau County&apos;s agricultural history and proximity to green space also create higher pressure from outdoor pests like stinging insects, ants, and rodents that regularly attempt to enter school buildings.`,
    services: [
      { name: 'NYS IPM Compliance', icon: '📋', desc: 'State-mandated program documentation' },
      { name: 'Cafeteria Pest Control', icon: '🍱', desc: 'Food service area monitoring & treatment' },
      { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion, trapping & monitoring' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Kitchen & utility treatment' },
      { name: 'Stinging Insect Removal', icon: '🐝', desc: 'Nest removal & seasonal prevention' },
      { name: 'Pest Notification Program', icon: '📢', desc: 'Required parent & staff notices' },
    ],
    faqs: [
      {
        q: 'What is New York State&apos;s requirement for school pest control?',
        a: 'New York State requires all schools to implement an Integrated Pest Management (IPM) program under the School IPM program administered by Cornell Cooperative Extension. Schools must designate an IPM coordinator, maintain pest sighting logs, use non-chemical methods as a first response, notify parents and staff at least 48 hours before any pesticide application, and keep records of all pest control activities. We design our school programs to fully meet all of these requirements.'
      },
      {
        q: 'How do you manage pest control in a school cafeteria safely?',
        a: 'School cafeteria pest control uses methods appropriate for food service environments that are also safe for students: gel baiting in inaccessible areas, tamper-resistant monitoring stations positioned away from student contact, and targeted crack-and-crevice treatments applied when students are not present. All cafeteria services are scheduled outside of meal service hours and after students have left the building.'
      },
      {
        q: 'We have a wasp nest near our school entrance — how quickly can you respond?',
        a: 'Stinging insect nests near school entrances and student activity areas are treated as urgent situations. We offer same-day response for active wasp and hornet nest removal when the nest creates an immediate risk to students or staff. Nassau County&apos;s late summer and fall season sees peak yellowjacket and bald-faced hornet activity near school buildings.'
      },
      {
        q: 'Can you provide the parent and staff notification letters required by NYS?',
        a: 'Yes. We provide template notification letters and can coordinate with your district&apos;s IPM coordinator on notification procedures. We also maintain complete service records for your district that satisfy the recordkeeping requirements of the New York State School IPM program.'
      },
    ],
    internalLinks: [
      { label: 'Syosset Pest Control', href: '/nassau/syosset/' },
      { label: 'Freeport Pest Control', href: '/nassau/freeport/' },
      { label: 'Hempstead Pest Control', href: '/nassau/hempstead/' },
    ],
  },

  warehouses: {
    title: 'Warehouse & Industrial Pest Control',
    metaDesc: 'Warehouse pest control in Nassau County, NY. Large-footprint IPM programs for warehouses, distribution centers & industrial facilities. Liberty Pest Pros. Call (516) 763-4600.',
    intro: `Nassau County&apos;s industrial and warehouse corridor — concentrated in communities like Bethpage, Farmingdale, and along the Nassau-Queens border in Elmont and Valley Stream — supports a significant portion of Long Island&apos;s logistics, light manufacturing, and distribution infrastructure. Warehouses and industrial facilities present pest control challenges at a scale that most commercial operations don&apos;t face: large open footprints with numerous potential entry points, loading docks that receive constant delivery traffic, stored goods that attract rodents and stored product pests, and mechanical and utility areas that provide ideal harborage conditions. Pest activity in a warehouse or distribution center isn&apos;t just an operational nuisance — it represents a direct product contamination risk, a potential regulatory finding for facilities operating under food safety standards, and a worker safety concern. Liberty Pest Pros has been designing and delivering large-footprint pest control programs for Nassau County industrial and warehouse facilities since 1982. Our warehouse programs use monitoring-dense IPM approaches scaled to the challenges of large square footage, active loading docks, and high-value stored inventory.`,
    whyMatters: `Warehouse and industrial pest control directly affects product integrity, food safety compliance, and worker safety. For facilities storing food or food-adjacent products, rodent or insect activity can trigger FDA findings, product recalls, and customer contract terminations. For all warehouse operations, pest activity near loading docks, in product storage areas, or in break rooms creates both contamination risks and OSHA-relevant sanitation concerns. The scale of warehouse facilities means that pest problems, once established, can become difficult to eradicate without a systematic, large-footprint program.`,
    nassauContext: `Nassau County&apos;s industrial zones in Bethpage, Farmingdale, Mineola, and along the Nassau-Queens border include legacy industrial facilities that have significant infrastructure challenges — aging loading docks, outdated utility penetrations, and foundation issues that require ongoing exclusion management. Nassau County&apos;s position as a logistics hub for eastern Long Island means high truck and delivery traffic that consistently introduces new pest pressure, particularly rodents that hitchhike on pallets and shipping materials.`,
    services: [
      { name: 'Loading Dock Control', icon: '🚛', desc: 'Dock perimeter & rodent management' },
      { name: 'Interior Rodent Program', icon: '🐭', desc: 'Monitoring stations & trapping' },
      { name: 'Stored Product Pests', icon: '📦', desc: 'Inventory area inspection & treatment' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Break room & utility treatment' },
      { name: 'Exclusion Work', icon: '🏗️', desc: 'Entry point sealing & structural fixes' },
      { name: 'Food Safety Documentation', icon: '📋', desc: 'FSMA & customer audit records' },
    ],
    faqs: [
      {
        q: 'How do you manage pest control across a large warehouse footprint?',
        a: 'Large warehouse pest control programs use a grid-based monitoring station deployment — tamper-resistant rodent stations positioned at regular intervals along walls and near entry points, supplemented by pheromone traps for flying insects in storage areas. Every service visit includes a full station inspection with data recorded, giving your facilities team a real-time picture of pest pressure levels across the entire building.'
      },
      {
        q: 'Our warehouse receives multiple deliveries daily — how do you control the pest pressure that creates?',
        a: 'Loading dock pest control requires a multi-layer approach: physical barriers (dock seals, door sweeps, strip curtains), exterior monitoring stations positioned to intercept rodents before they reach dock entries, interior monitoring along dock walls, and routine inspection of incoming pallets and shipping materials for signs of pest activity. We&apos;ll work with your receiving team on best practices for reducing hitchhiker pest introductions.'
      },
      {
        q: 'We store food products — what documentation do you provide for food safety audits?',
        a: 'We provide complete pest control documentation packages designed for food safety audit requirements including FDA FSMA, BRC, SQF, and customer-specific audit standards. Documentation includes service reports, station inspection records, pest activity trending data, corrective action documentation, and technician certification records.'
      },
      {
        q: 'What pests are most common in Nassau County warehouses?',
        a: 'Norway rats and house mice are the primary pest challenges in Nassau County warehouses — they enter through loading docks, utility penetrations, and foundation gaps. Stored product pests (grain beetles, flour moths, Indian meal moths) are common in facilities storing food or agricultural products. Cockroaches concentrate in break rooms, utility areas, and around cardboard storage. German yellowjackets and paper wasps commonly nest in eave and roof areas of older industrial buildings.'
      },
    ],
    internalLinks: [
      { label: 'Farmingdale Pest Control', href: '/nassau/farmingdale/' },
      { label: 'Bethpage Pest Control', href: '/nassau/bethpage/' },
      { label: 'Valley Stream Pest Control', href: '/nassau/valley-stream/' },
    ],
  },

  hotels: {
    title: 'Hotel & Hospitality Pest Control',
    metaDesc: 'Hotel pest control in Nassau County, NY. Reputation-protecting IPM programs for hotels, motels & hospitality properties. Liberty Pest Pros since 1982. Call (516) 763-4600.',
    intro: `Nassau County&apos;s hospitality sector ranges from major hotel properties near JFK Airport in communities like Garden City and Uniondale to independent motels along Sunrise Highway and the branded hotels serving the county&apos;s business and leisure travelers. For hotels, pest control is inseparable from guest experience and brand reputation — a single guest complaint about bed bugs, cockroaches, or mice generates a TripAdvisor review that stays online permanently and is read by thousands of future guests before they book. The hotel environment creates concentrated pest pressure: guests arriving from around the world introduce bed bugs through luggage and personal belongings; food and beverage operations attract insects and rodents; laundry facilities create warmth and moisture that supports pest activity; and the 24/7 operational nature of hotels constrains when and how service can be delivered. Liberty Pest Pros has provided reputation-protecting pest control to Nassau County hotels and hospitality properties since 1982. Our hotel programs combine proactive bed bug monitoring, comprehensive IPM for food and beverage operations, and rapid-response protocols for guest complaints — designed to resolve pest issues before they become public-facing incidents.`,
    whyMatters: `Hotel pest control is a brand protection and revenue issue. Bed bug reviews on TripAdvisor, Google, and Booking.com are among the most damaging content a hotel can receive — they directly reduce booking conversion, trigger rate pressure, and in severe cases lead to removal from OTA platforms. Nassau County hotel operators near JFK Airport face particularly high bed bug introduction risk from international travelers. Beyond bed bugs, cockroach or rodent activity in food and beverage outlets creates the same kind of review-driven reputational damage.`,
    nassauContext: `Nassau County&apos;s hotel market includes major branded properties in Garden City, Uniondale, and along the Nassau Expressway corridor; airport-adjacent hotels in communities close to JFK; seasonal leisure properties near the south shore beaches; and independent operators along Sunrise Highway and Hempstead Turnpike. Hotels near JFK Airport face the highest bed bug introduction frequency in Nassau County due to the volume of international travelers. Uniondale and Garden City hotel clusters hosting corporate and event traffic have significant food and beverage operations that require dedicated kitchen pest programs.`,
    services: [
      { name: 'Bed Bug Monitoring', icon: '🛏️', desc: 'Proactive room inspection program' },
      { name: 'Bed Bug Treatment', icon: '🌡️', desc: 'Heat & chemical protocols' },
      { name: 'Kitchen IPM Program', icon: '🍳', desc: 'F&B area monitoring & treatment' },
      { name: 'Rodent Control', icon: '🐭', desc: 'Exclusion & interior trapping' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Targeted kitchen & utility treatment' },
      { name: 'Guest Response Protocol', icon: '📞', desc: 'Rapid response for guest complaints' },
    ],
    faqs: [
      {
        q: 'How do you proactively prevent bed bugs in hotel guest rooms?',
        a: 'Proactive hotel bed bug programs include regular inspection of high-turnover rooms (prioritizing rooms recently occupied by international travelers), installation of bed bug interceptor monitors under bed legs, inspection protocols for housekeeping staff, and immediate escalation procedures when signs are found. Early detection allows us to treat a single room before an infestation spreads to adjacent rooms.'
      },
      {
        q: 'A guest has complained about bed bugs — what is your response protocol?',
        a: 'Guest bed bug complaints require an immediate, discreet response. We treat hotel bed bug calls as urgent — typically responding within 24 hours for an inspection. If bed bugs are confirmed, we treat the room and inspect all adjacent rooms. We provide written documentation of the inspection and treatment findings for your records and can assist your team with the guest communication process.'
      },
      {
        q: 'How do you manage pest control in a hotel restaurant or banquet facility?',
        a: 'Hotel food and beverage operations are treated as a full commercial kitchen pest control program within the context of the broader hotel account — regular service visits, comprehensive monitoring, documented service reports, and treatments scheduled around meal service periods and event bookings.'
      },
      {
        q: 'Can you provide pest control for our entire hotel portfolio in Nassau County?',
        a: 'Yes. We offer multi-property programs for hotel groups and management companies operating multiple Nassau County properties. Standardized service protocols, centralized reporting, and consistent documentation across all properties simplifies compliance management and ensures consistent guest experience protection.'
      },
    ],
    internalLinks: [
      { label: 'Garden City Pest Control', href: '/nassau/garden-city/' },
      { label: 'Uniondale Pest Control', href: '/nassau/uniondale/' },
      { label: 'Rockville Centre Pest Control', href: '/nassau/rockville-centre/' },
    ],
  },

  'property-management': {
    title: 'Property Management Pest Control',
    metaDesc: 'Property management pest control in Nassau County, NY. Portfolio-wide IPM programs for residential & commercial property managers. Liberty Pest Pros. Call (516) 763-4600.',
    intro: `Nassau County&apos;s property management sector oversees an enormous and diverse portfolio — from the apartment complexes and cooperative buildings in communities like Great Neck, Hempstead, and Long Beach to the commercial strip centers along Hempstead Turnpike and the mixed-use developments in Nassau&apos;s village centers. Property managers face pest control challenges that individual owners never encounter: pest activity migrates between units in multi-family buildings, tenant complaints about pests create legal exposure under New York State warranty of habitability law, HOA boards demand documented pest programs, and portfolio scale creates operational complexity that ad-hoc pest service can&apos;t address efficiently. Liberty Pest Pros has provided portfolio-scale pest control to Nassau County property managers since 1982. We design programs that address the full complexity of managed properties — building-wide monitoring that identifies infestation sources, unit-level treatment protocols that prevent cross-contamination, tenant communication that reduces friction, and documentation systems that protect property managers in warranty of habitability disputes.`,
    whyMatters: `Property management pest control is a legal compliance and portfolio management issue. New York State warranty of habitability law requires landlords to maintain habitable conditions — pest infestations are explicitly covered. A documented, ongoing pest control program is a property manager&apos;s strongest defense in warranty of habitability disputes and housing court proceedings. For commercial property managers, pest activity affects tenant retention and lease renewal decisions. Proactive portfolio-wide programs are dramatically more cost-effective than reactive unit-by-unit responses.`,
    nassauContext: `Nassau County&apos;s rental housing stock includes older multi-family buildings in Hempstead, Freeport, Long Beach, and Valley Stream that have persistent structural pest pressure — foundation gaps, aging utility penetrations, and interconnected wall cavities that allow pests to move freely between units. Nassau County&apos;s co-op and condo stock in more affluent communities like Great Neck, Manhasset, and Roslyn presents different challenges: building-wide programs coordinated with co-op boards that require thorough documentation and board-level reporting.`,
    services: [
      { name: 'Portfolio IPM Program', icon: '🏘️', desc: 'Building-wide monitoring & treatment' },
      { name: 'Unit-Level Treatment', icon: '🚪', desc: 'Tenant coordination & service' },
      { name: 'Rodent Exclusion', icon: '🐭', desc: 'Building-wide entry point sealing' },
      { name: 'Bed Bug Program', icon: '🛏️', desc: 'Inspection, treatment & prevention' },
      { name: 'Common Area Control', icon: '🏢', desc: 'Lobbies, laundry & utility areas' },
      { name: 'Compliance Documentation', icon: '📋', desc: 'Housing court & HOA records' },
    ],
    faqs: [
      {
        q: 'How do you manage pest control across a multi-family building when access to individual units is required?',
        a: 'We work with your property management team on tenant notification and access scheduling. For recurring service visits, we coordinate through your office to provide required advance notice to tenants, handle cases where access is denied, and maintain documentation of all attempted and completed service visits. Our programs are designed to minimize the operational burden on your management team.'
      },
      {
        q: 'A tenant is threatening housing court over a rodent problem — can you help?',
        a: 'Yes. We can conduct an immediate inspection to document the current condition of the unit and building, provide written findings, and implement a treatment and exclusion program. Complete service documentation — inspection reports, treatment records, and corrective action plans — is your strongest protection in warranty of habitability proceedings.'
      },
      {
        q: 'How do you prevent bed bugs from spreading between units in an apartment building?',
        a: 'Multi-family bed bug programs go beyond treating the reported unit. When bed bugs are found in one unit, we inspect all adjacent units (above, below, and to each side) and treat any that show evidence of activity. We also identify and seal common utility chase penetrations that allow bed bugs to migrate between units — the most common pathway for cross-unit spread in Nassau County apartment buildings.'
      },
      {
        q: 'We manage both residential and commercial properties — can you handle both under one program?',
        a: 'Yes. We provide unified property management pest control programs that cover both residential multi-family and commercial assets under a single account. This simplifies billing, centralizes documentation, and ensures consistent service standards across your entire Nassau County portfolio.'
      },
    ],
    internalLinks: [
      { label: 'Hempstead Pest Control', href: '/nassau/hempstead/' },
      { label: 'Long Beach Pest Control', href: '/nassau/long-beach/' },
      { label: 'Great Neck Pest Control', href: '/nassau/great-neck/' },
    ],
  },

  'food-processing': {
    title: 'Food Processing & Distribution Pest Control',
    metaDesc: 'Food processing pest control in Nassau County, NY. FDA/USDA-aligned IPM for food manufacturers & distributors. Liberty Pest Pros since 1982. Call (516) 763-4600.',
    intro: `Nassau County&apos;s food processing and distribution sector — spanning facilities in Bethpage, Farmingdale, Mineola, and along the Nassau-Queens border — operates under some of the strictest regulatory frameworks in any commercial environment. The FDA Food Safety Modernization Act (FSMA), USDA regulations, and third-party food safety certification standards (BRC, SQF, GFSI) all impose specific, documented pest control requirements that go far beyond what standard commercial pest control delivers. A single rodent dropping in a production area, an insect in finished product, or pest evidence found during a third-party audit can trigger a product recall, a regulatory action, or the loss of a major customer contract. Liberty Pest Pros has provided documentation-intensive, compliance-driven pest control to Nassau County food processing and distribution facilities since 1982. Our food processing programs are designed specifically for the regulatory environment: comprehensive HACCP-aligned IPM programs, AIB and third-party audit-ready documentation, rapid response protocols for critical control point pest events, and ongoing monitoring systems that give your quality assurance team real-time pest activity data.`,
    whyMatters: `Food processing pest control is a regulatory, food safety, and business continuity imperative. FDA FSMA requires food facilities to implement verified pest control as part of their food safety plan. Third-party audits (BRC, SQF, AIB) include detailed pest control assessments that directly affect your certification score and your ability to supply major retailers. A substantiated pest finding during an audit or inspection can cascade into customer notifications, product holds, and recalls with costs that dwarf the entire annual pest control budget.`,
    nassauContext: `Nassau County&apos;s food processing facilities operate in industrial zones in Bethpage, Farmingdale, and along the county&apos;s major transportation corridors. Many of these facilities are in older industrial buildings with legacy infrastructure — aging loading docks, outdated utility penetrations, and structural issues that require ongoing exclusion management as part of the pest control program. Nassau County&apos;s position in the Long Island food distribution chain means high inbound and outbound truck traffic that consistently introduces rodent pressure to loading dock areas.`,
    services: [
      { name: 'FSMA-Compliant IPM', icon: '🏭', desc: 'Regulatory-standard documentation' },
      { name: 'Production Floor Monitoring', icon: '📊', desc: 'CCP pest activity tracking' },
      { name: 'Rodent Program', icon: '🐭', desc: 'Perimeter, dock & interior control' },
      { name: 'Flying Insect Control', icon: '🪰', desc: 'ILTs & exclusion management' },
      { name: 'Stored Product Pests', icon: '🌾', desc: 'Pheromone traps & treatment' },
      { name: 'Audit Documentation', icon: '📋', desc: 'BRC, SQF & AIB audit packages' },
    ],
    faqs: [
      {
        q: 'What documentation do you provide for BRC and SQF food safety audits?',
        a: 'Our food processing pest control documentation packages include: service reports for every visit, station inspection logs with pest activity data, pest trend analysis reports, corrective action records, product labels and SDS sheets for all materials used, technician certification documentation, facility pest maps, and a written Pest Control Program document meeting BRC and SQF requirements. We can also attend pre-audit reviews and audits themselves if needed.'
      },
      {
        q: 'How do you manage pest control in an active food production facility?',
        a: 'Food production pest control requires strict operational coordination: all services are scheduled around production windows, treatments in production areas use only materials approved for food processing environments, application records are maintained with lot traceability, and any service near food contact surfaces follows specific protocols. We work directly with your quality assurance team to integrate our program with your food safety plan.'
      },
      {
        q: 'We found a rodent in our production area — what is your response protocol?',
        a: 'A rodent finding in a production area is treated as a critical event requiring same-day response. We conduct an emergency inspection to assess the scope, implement immediate control measures, document all findings and actions taken, and provide a written corrective action plan. This documentation supports your FSMA deviation procedures and customer notification requirements if applicable.'
      },
      {
        q: 'Do your technicians have food safety training?',
        a: 'Yes. Our technicians serving food processing accounts receive training in food safety fundamentals including HACCP principles, GMP requirements for pest control contractors, proper behavior in food processing environments (hygiene protocols, tool control, product protection), and the regulatory framework under FDA FSMA and third-party food safety standards.'
      },
    ],
    internalLinks: [
      { label: 'Farmingdale Pest Control', href: '/nassau/farmingdale/' },
      { label: 'Bethpage Pest Control', href: '/nassau/bethpage/' },
      { label: 'Mineola Pest Control', href: '/nassau/mineola/' },
    ],
  },

  daycare: {
    title: 'Daycare & Childcare Center Pest Control',
    metaDesc: 'Daycare pest control in Nassau County, NY. Safe, effective IPM for childcare centers & preschools. NYS Office of Children & Family Services compliant. Call (516) 763-4600.',
    intro: `Nassau County is home to hundreds of licensed daycare centers, preschools, and childcare facilities — from large commercial childcare chains to small home-based programs — serving tens of thousands of Nassau County families. Childcare facilities face a unique combination of pest control requirements: New York State Office of Children and Family Services (OCFS) regulations govern pest control practices in licensed facilities, the presence of infants and young children demands the most cautious approach to any treatment, and parents of children enrolled in Nassau County daycare centers have zero tolerance for pest activity. A cockroach spotted in a daycare classroom, rodent activity in a kitchen, or ants in a playground area can trigger OCFS complaints, facility closure reviews, and an immediate loss of enrolled families that directly threatens viability. Liberty Pest Pros has provided child-safe, regulation-compliant pest control to Nassau County daycare and childcare facilities since 1982. Our childcare programs are built around the specific requirements of OCFS licensing, the developmental vulnerability of young children, and the zero-tolerance standard that Nassau County parents rightfully hold for the facilities that care for their children.`,
    whyMatters: `Daycare pest control is a licensing, child safety, and parent trust issue. New York State OCFS licensing regulations require daycare facilities to maintain pest-free environments and to use pest control methods that are safe for children. An OCFS inspector finding pest evidence can result in a deficiency citation, required corrective action, and in serious cases license suspension. For daycare operators, parent trust is everything — a single credible pest complaint shared in a parent Facebook group or NextDoor community can empty a facility faster than any regulatory action.`,
    nassauContext: `Nassau County&apos;s daycare sector is concentrated in areas with high density of young families — communities like Syosset, Plainview, Great Neck, and Massapequa have high concentrations of licensed childcare facilities. Nassau County daycare facilities in older commercial or residential buildings face structural pest pressure — aging foundations, utility penetrations, and outdated kitchen equipment — that requires proactive exclusion work. Nassau County&apos;s seasonal pest pressure (ants and stinging insects in spring and summer, rodents in fall and winter) creates recurring challenges for childcare facilities with outdoor play areas.`,
    services: [
      { name: 'Child-Safe IPM Program', icon: '👶', desc: 'OCFS-compliant monitoring & treatment' },
      { name: 'Cockroach Control', icon: '🪳', desc: 'Kitchen & classroom treatment' },
      { name: 'Rodent Exclusion', icon: '🐭', desc: 'Entry point sealing & trapping' },
      { name: 'Ant Control', icon: '🐜', desc: 'Perimeter & interior treatment' },
      { name: 'Stinging Insect Removal', icon: '🐝', desc: 'Playground & perimeter nest removal' },
      { name: 'OCFS Compliance Records', icon: '📋', desc: 'Licensing inspection documentation' },
    ],
    faqs: [
      {
        q: 'What pest control methods are safe for use in a daycare with infants and toddlers?',
        a: 'Our daycare pest control programs prioritize non-chemical methods: tamper-resistant monitoring stations placed in inaccessible locations (inside cabinets, in utility spaces, behind equipment), exclusion to seal entry points, sanitation recommendations, and thorough inspection to identify and eliminate pest harborage conditions. When chemical treatment is needed, we use only products with favorable toxicity profiles, apply them in locations children cannot access, and schedule service when children are not present — typically evenings or weekends.'
      },
      {
        q: 'Does your service meet New York State OCFS daycare licensing requirements?',
        a: 'Yes. We design our daycare programs specifically around OCFS licensing requirements for pest control. We provide written service documentation for every visit, maintain records that satisfy OCFS inspection requirements, and can brief your facility director on pest control practices that meet licensing standards. If you receive an OCFS deficiency related to pests, we can respond with an expedited inspection and corrective action program.'
      },
      {
        q: 'We have a wasp nest near our playground — can you respond quickly?',
        a: 'Stinging insect nests near playgrounds and outdoor areas where children play are treated as urgent situations requiring same-day or next-day response. We remove wasp, yellowjacket, and hornet nests safely and can treat the area to prevent re-nesting. Nassau County daycare facilities should inspect outdoor areas for nest activity at the start of each day during peak stinging insect season (late July through September).'
      },
      {
        q: 'How do you notify parents about pest control treatments as required by regulations?',
        a: 'We provide your facility director with written service reports after every visit documenting what was inspected, what was found, and what was done. For any pesticide applications, we provide the product name, application location, and re-entry information. Your facility can use these reports to communicate with parents as required and to maintain the pest control records that OCFS inspectors review during licensing inspections.'
      },
    ],
    internalLinks: [
      { label: 'Syosset Pest Control', href: '/nassau/syosset/' },
      { label: 'Plainview Pest Control', href: '/nassau/plainview/' },
      { label: 'Massapequa Pest Control', href: '/nassau/massapequa/' },
    ],
  },
};

const VERTICAL_SLUGS = ['restaurants','offices','retail','healthcare','schools','warehouses','hotels','property-management','food-processing','daycare'];

export async function generateStaticParams() {
  return VERTICAL_SLUGS.map(v => ({ vertical: v }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string; vertical: string }> }): Promise<Metadata> {
  const { vertical } = await params;
  const data = VERTICALS[vertical];
  if (!data) return {};
  return {
    title: `${data.title} Nassau County, NY | Liberty Pest Pros`,
    description: data.metaDesc,
  };
}

export default async function CommercialVerticalPage({ params }: { params: Promise<{ region: string; vertical: string }> }) {
  const { vertical } = await params;
  const data = VERTICALS[vertical];
  if (!data) notFound();

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Liberty Pest Pros",
        "telephone": "+15167634600",
        "url": "https://libertypestpros.com",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Nassau County, New York"
        },
        "description": `${data.title} in Nassau County, NY. Regulation-compliant, disruption-free commercial pest control.`,
        "priceRange": "$$",
        "openingHours": "Mo-Sa 07:00-19:00"
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a.replace(/&apos;/g, "'")
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/nassau/" className="hover:text-brand-primary">Nassau County</Link>
          {' → '}
          <Link href="/nassau/commercial/" className="hover:text-brand-primary">Commercial Pest Control</Link>
          {' → '}
          <span className="text-gray-900">{data.title}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title} in Nassau County, NY
        </h1>

        {/* Intro */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Nassau County&apos;s Commercial Pest Control Specialists Since 1982</h2>
          <p className="text-blue-800 mb-4" dangerouslySetInnerHTML={{ __html: data.intro }} />
          <div className="flex flex-wrap gap-4 text-sm text-blue-700">
            <span>✅ Regulation-compliant</span>
            <span>✅ Disruption-free scheduling</span>
            <span>✅ Nassau County licensed &amp; insured</span>
            <span>✅ IPM-based approach</span>
          </div>
        </div>

        {/* Why It Matters */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Commercial Pest Control Matters for {data.title.split(' Pest Control')[0]}</h2>
        <div className="prose prose-gray max-w-none mb-8">
          <p dangerouslySetInnerHTML={{ __html: data.whyMatters }} />
        </div>

        {/* Nassau Context */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nassau County Context</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: data.nassauContext }} />
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our {data.title} Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {data.services.map(s => (
            <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Dual CTA */}
        <div className="bg-brand-primary rounded-xl p-6 mb-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Request a Commercial Quote for Your Nassau County Business</h2>
          <p className="text-blue-100 mb-4">Regulation-compliant, disruption-free pest control. Same-day consultations available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/nassau/contact/"
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Commercial Quote
            </Link>
            <a
              href="tel:+15167634600"
              className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              📞 (516) 763-4600
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions — {data.title}</h2>
        <div className="space-y-4 mb-10">
          {data.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="text-sm text-gray-500 flex flex-wrap gap-3">
          <Link href="/nassau/" className="hover:underline text-brand-primary">← Nassau County Home</Link>
          <Link href="/nassau/commercial/" className="hover:underline text-brand-primary">All Commercial Services</Link>
          {data.internalLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:underline text-brand-primary">{link.label}</Link>
          ))}
        </div>
      </div>
      <CTABanner />
    </>
  );
}
