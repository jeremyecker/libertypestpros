export interface CityLayer7 {
  neighborhoods?: string[];
  nearbyTowns?: string[];
  cityFaqs?: Array<{ q: string; a: string }>;
}

export const CITY_LAYER7: Record<string, CityLayer7> = {
  'long-beach': {
    neighborhoods: ['West End', 'East End', 'Lido Beach Area', 'Reynolds Channel Waterfront', 'North Long Beach', 'Beachfront District'],
    nearbyTowns: ['Atlantic Beach', 'Island Park', 'Oceanside', 'East Rockaway', 'Lido Beach'],
    cityFaqs: [
      {
        q: 'What moisture-related pests are most common in Long Beach barrier island homes?',
        a: 'Long Beach homes face elevated pressure from carpenter ants, silverfish, and moisture-loving cockroaches due to constant ocean and bay exposure. Salt-air accelerates wood decay, creating ideal nesting sites for carpenter ants in window frames, deck structures, and sill plates. Liberty Pest Pros treats these conditions with targeted exclusion and moisture-source elimination.'
      },
      {
        q: 'Does pest activity increase in Long Beach during the summer rental season?',
        a: 'Yes. High summer tenant turnover in Long Beach creates significant pest transfer risk — bed bugs and cockroaches introduced by renters from various locations can spread to adjacent units. We recommend seasonal inspections between tenancies and proactive bed bug monitoring for property owners with seasonal rental units on the barrier island.'
      },
      {
        q: 'What are the biggest pest challenges specific to Long Beach&apos;s barrier island geography?',
        a: 'Long Beach faces unique challenges: Norway rat pressure from Reynolds Channel marina and waterfront commercial activity, extreme coastal mosquito pressure from nearby salt marshes, and accelerated wood decay from salt-air that creates carpenter ant harborage faster than inland Nassau County communities. Our Long Beach programs are specifically designed for barrier island conditions.'
      },
    ],
  },

  'oceanside': {
    neighborhoods: ['Brower Park', 'Oceanside Bay Area', 'Lawson Boulevard Corridor', 'South Oceanside', 'East Oceanside'],
    nearbyTowns: ['Long Beach', 'Baldwin', 'Rockville Centre', 'Island Park', 'East Rockaway'],
    cityFaqs: [
      {
        q: 'How does Oceanside&apos;s South Shore waterfront location affect pest activity?',
        a: 'Oceanside&apos;s proximity to the South Shore bay system and wetlands drives elevated mosquito pressure from late spring through early fall. Waterfront homeowners also deal with higher moisture pest activity — silverfish, centipedes, and moisture-loving cockroaches — due to the coastal humidity. Liberty Pest Pros adjusts treatment timing and protocols for South Shore conditions.'
      },
      {
        q: 'Are Cape Cod homes in Oceanside more vulnerable to pests than newer construction?',
        a: 'Yes. Oceanside&apos;s many aging Cape Cod homes have accumulated structural vulnerabilities over decades — settling foundation walls, deteriorated sill plates, and outdated utility penetrations that provide entry points for rodents and insects. Older construction also tends to have crawl spaces with moisture issues that attract termites and moisture pests. Annual inspections are especially important for pre-1980 Oceanside homes.'
      },
      {
        q: 'What South Shore humidity challenges affect pest control programs in Oceanside?',
        a: 'Oceanside&apos;s consistently high humidity — amplified by proximity to South Shore bays and wetlands — supports pest populations year-round rather than just seasonally. Cockroaches, silverfish, and ants all benefit from the sustained moisture environment. Effective Oceanside pest control combines treatment with moisture management recommendations for basements and crawl spaces.'
      },
    ],
  },

  'hempstead': {
    neighborhoods: ['Village of Hempstead', 'North Hempstead', 'Lakeview Area', 'Franklin Square Corridor', 'West Hempstead Border'],
    nearbyTowns: ['Garden City', 'Uniondale', 'West Hempstead', 'Elmont', 'Franklin Square'],
    cityFaqs: [
      {
        q: 'How does Hempstead&apos;s urban density affect pest pressure compared to other Nassau County communities?',
        a: 'Hempstead&apos;s dense urban environment concentrates pest pressure significantly. Close-proximity housing, shared infrastructure, and the continuous movement of people and goods create conditions where pests — particularly rodents, cockroaches, and bed bugs — spread rapidly between properties. Dense urban areas require more frequent treatment cycles and stronger emphasis on exclusion to break reinfestation cycles.'
      },
      {
        q: 'What commercial district pest control challenges are common in Hempstead?',
        a: 'Hempstead&apos;s active commercial corridors sustain significant Norway rat populations from restaurant refuse, loading dock activity, and dumpster sites. These commercial rodent populations exert constant pressure on adjacent residential blocks. Liberty Pest Pros provides coordinated commercial and residential programs that address the full pest pressure landscape in mixed-use Hempstead neighborhoods.'
      },
      {
        q: 'How do you manage pests in Hempstead&apos;s multi-family housing buildings?',
        a: 'Multi-family buildings in Hempstead require building-wide programs that prevent cross-unit pest migration. Cockroaches and bed bugs travel through shared wall voids and utility chases between units, making individual unit treatment insufficient without building-wide monitoring and exclusion. We design portfolio programs for Hempstead property managers that address the full building, not just reported units.'
      },
    ],
  },

  'garden-city': {
    neighborhoods: ['Garden City South', 'Stewart Manor Area', 'Cathedral Avenue', 'Adelphi University Vicinity', 'Garden City Park'],
    nearbyTowns: ['Mineola', 'Hempstead', 'Carle Place', 'New Hyde Park', 'Westbury'],
    cityFaqs: [
      {
        q: 'What pest challenges do Garden City&apos;s historic homes face that newer construction doesn&apos;t?',
        a: 'Garden City&apos;s older colonials, Tudors, and cape-style homes have decades of accumulated structural vulnerabilities — aging wood framing, settled foundations, and original utility penetrations that have developed clearance over time. Carpenter ants, termites, and rodents specifically exploit these older construction characteristics. Annual professional inspections are especially valuable for pre-1970 Garden City homes.'
      },
      {
        q: 'Does Garden City&apos;s tree canopy increase wildlife and pest pressure?',
        a: 'Absolutely. Garden City&apos;s mature oak, maple, and linden tree canopy supports carpenter ant parent colonies in natural tree hollows, provides raccoon and squirrel harborage adjacent to homes, and generates heavy leaf drop that creates rodent nesting material near foundations. Our Garden City programs account for the specific pest pressure that urban forest coverage creates.'
      },
      {
        q: 'How do you protect high-value Garden City homes from pest damage?',
        a: 'Upscale Garden City properties benefit from proactive prevention programs rather than reactive treatment. We recommend annual termite inspections, spring and fall perimeter treatments, and quarterly monitoring programs that identify pest activity early — before it becomes structural damage. Prevention is far more cost-effective than remediation in high-value historic homes.'
      },
    ],
  },

  'great-neck': {
    neighborhoods: ['Great Neck Estates', 'Great Neck Plaza', 'Kings Point', 'Kensington', 'Saddle Rock'],
    nearbyTowns: ['Manhasset', 'Port Washington', 'Roslyn', 'Glen Head', 'Roslyn Heights'],
    cityFaqs: [
      {
        q: 'What are the specific pest management needs of Gold Coast estates in Great Neck?',
        a: 'Great Neck&apos;s larger properties require comprehensive estate pest management programs: termite monitoring, rodent exclusion for carriage houses and outbuildings, tick control for wooded and landscaped grounds, and mosquito barrier spray programs for outdoor entertaining areas. We design customized programs for estate-scale properties that cover all structures and all pest categories.'
      },
      {
        q: 'Why do Great Neck&apos;s waterfront areas see elevated rodent pressure?',
        a: 'Great Neck&apos;s peninsula geography and waterfront access — particularly around Kings Point and the marina areas — sustains Norway rat populations linked to waterfront commercial activity and watercraft storage. Waterfront rodent pressure is compounded by the natural cover that shoreline vegetation provides. Quarterly perimeter monitoring and exclusion are particularly important for Great Neck waterfront properties.'
      },
      {
        q: 'Are older Tudor and Colonial homes in Great Neck at higher termite and pest risk?',
        a: 'Yes. Great Neck&apos;s significant inventory of older Tudor and Colonial homes — many built in the 1920s through 1950s — has accumulated structural vulnerabilities that increase pest risk. Original wood framing, settled foundations, and aging utility penetrations are common entry points. Great Neck&apos;s North Shore woodland setting also elevates tick and wildlife pest pressure beyond typical Nassau County levels.'
      },
    ],
  },

  'freeport': {
    neighborhoods: ['Nautical Mile', 'South Freeport', 'Village of Freeport', 'Randall Bay Area', 'North Freeport'],
    nearbyTowns: ['Merrick', 'Baldwin', 'Oceanside', 'Bellmore', 'South Merrick'],
    cityFaqs: [
      {
        q: 'How do Liberty Pest Pros serve Freeport&apos;s marina and Nautical Mile waterfront businesses?',
        a: 'Freeport&apos;s Nautical Mile concentration of waterfront restaurants, fish markets, and marina businesses requires commercial pest programs that address the unique challenges of waterfront food service — heavy fly pressure, Norway rat populations sustained by waterfront activity, and cockroach pressure in kitchen environments near open water. We provide Nassau County health department-compliant IPM programs designed for waterfront commercial operations.'
      },
      {
        q: 'What pest compliance requirements apply to Nautical Mile restaurants?',
        a: 'Freeport Nautical Mile restaurants are subject to Nassau County Department of Health inspection, which includes documented pest control as a compliance requirement. Our commercial programs provide written service documentation after every visit — including inspection findings, treatments applied, and corrective action recommendations — that supports your health department compliance record.'
      },
      {
        q: 'What moisture pests are most common in Freeport&apos;s canal-front homes?',
        a: 'Freeport&apos;s canal-front residential neighborhoods face elevated pressure from silverfish, house centipedes, and moisture-loving cockroaches due to the high humidity environment adjacent to tidal canals. Carpenter ants exploit moisture-damaged wood in dock structures, boathouses, and home exteriors facing the water. We recommend annual inspections for all Freeport canal-front properties.'
      },
    ],
  },

  'levittown': {
    neighborhoods: ['Island Trees Area', 'North Levittown', 'Levitt Homes Section', 'South Levittown', 'East Meadow Border'],
    nearbyTowns: ['Hicksville', 'Bethpage', 'Wantagh', 'Seaford', 'East Meadow'],
    cityFaqs: [
      {
        q: 'Why are Levittown&apos;s postwar Cape Cod homes more vulnerable to rodent entry than newer construction?',
        a: 'The original Levitt Cape Cods, built rapidly beginning in 1947, used block foundation walls and construction practices that develop vulnerabilities over nearly 80 years. Block wall mortar joints crack and fail, sill plates deteriorate in crawl spaces, and utility penetrations develop clearance as pipes shift and caulk ages. These characteristics are consistent across Levittown and make comprehensive exclusion work essential alongside any rodent treatment.'
      },
      {
        q: 'Are crawl space issues in Levittown homes a major pest concern?',
        a: 'Levittown homes with crawl spaces face specific moisture and pest challenges. Inadequate vapor barriers allow moisture to accumulate, creating conditions that attract termites, carpenter ants, and moisture pests. Crawl spaces also provide harborage for rodents and provide direct access to sill plates and floor framing. A crawl space inspection is recommended as part of any Levittown pest evaluation.'
      },
      {
        q: 'How does older neighborhood density affect rodent control in Levittown?',
        a: 'Levittown&apos;s closely spaced homes and shared infrastructure create rodent reinfestation cycles that make exclusion critical. Even after eliminating rodents from inside your home, replacement from neighboring properties or the outdoor population is rapid without proper gap sealing. Our Levittown rodent programs combine thorough exclusion with interior trapping and exterior monitoring to break the reinfestation cycle.'
      },
    ],
  },

  'hicksville': {
    neighborhoods: ['Downtown Hicksville', 'Broadway Mall Area', 'Newbridge Road Corridor', 'West John Street', 'Hicksville Industrial'],
    nearbyTowns: ['Levittown', 'Bethpage', 'Plainview', 'Jericho', 'Old Bethpage'],
    cityFaqs: [
      {
        q: 'Does Hicksville&apos;s LIRR transit hub create elevated rodent activity?',
        a: 'Yes. Transit hubs generate concentrated rodent pressure from food vendors, commuter traffic, and the infrastructure surrounding rail facilities. The Hicksville LIRR station area sustains Norway rat populations that exert pressure on nearby commercial and residential properties. Regular exterior monitoring and exclusion are especially important for businesses and homes within several blocks of the station.'
      },
      {
        q: 'How do you manage pest control in Hicksville&apos;s mix of commercial and residential areas?',
        a: 'Hicksville&apos;s commercial corridors and residential neighborhoods are closely intermixed, meaning restaurant and retail pest pressure directly affects adjacent homes. Our Hicksville programs address both commercial and residential settings — coordinating treatment approaches that break the pest movement cycle between commercial and residential zones along major corridors like Broadway and Newbridge Road.'
      },
      {
        q: 'What foundation vulnerabilities do older Hicksville homes typically have?',
        a: 'Like much of central Nassau County, Hicksville has substantial inventory of post-war block foundation homes that have developed mortar joint failures, settling cracks, and outdated utility penetrations over decades. These vulnerabilities are systematic rather than isolated — our Hicksville technicians know the specific structural patterns common in the area and conduct thorough inspections that cover all typical entry points.'
      },
    ],
  },

  'massapequa': {
    neighborhoods: ['Massapequa Park', 'Merrick Road Corridor', 'Massapequa Lake Area', 'South Massapequa', 'North Massapequa'],
    nearbyTowns: ['Seaford', 'Wantagh', 'Bellmore', 'North Bellmore', 'Amityville'],
    cityFaqs: [
      {
        q: 'Why is mosquito pressure especially high near the Massapequa Preserve?',
        a: 'The Massapequa Preserve&apos;s 400+ acres of wetland, forest, and meadow habitat provides extensive mosquito breeding and resting habitat immediately adjacent to residential neighborhoods. South Shore salt marsh mosquito populations — capable of traveling up to 25 miles — add to local breeding pressure. Homes bordering the preserve typically experience season-long mosquito pressure requiring monthly barrier spray programs from May through September.'
      },
      {
        q: 'Does proximity to the Massapequa Preserve increase wildlife pest problems?',
        a: 'Significantly. The Massapequa Preserve corridor sustains dense raccoon, opossum, and skunk populations that regularly press into residential neighborhoods bordering the preserve. Attic raccoon intrusions, deck and crawl space denning by opossums and skunks, and elevated tick populations from deer movement are all characteristic wildlife pest challenges for Massapequa homeowners near the preserve edge.'
      },
      {
        q: 'What pest vulnerabilities do older Massapequa subdivision homes have?',
        a: 'Massapequa&apos;s postwar subdivision homes — built in the same era as Levittown — share similar construction-era vulnerabilities: block foundations, crawl spaces, and older utility penetrations. Combined with the South Shore moisture environment, these homes can develop termite and carpenter ant activity in moisture-damaged framing. Annual inspections are the most cost-effective protection for Massapequa&apos;s older housing stock.'
      },
    ],
  },

  'merrick': {
    neighborhoods: ['North Merrick', 'South Merrick', 'Merrick Road Waterfront', 'East Merrick', 'Merrick Landing'],
    nearbyTowns: ['Bellmore', 'Freeport', 'Baldwin', 'Wantagh', 'Seaford'],
    cityFaqs: [
      {
        q: 'How does Merrick&apos;s boating community create unique pest control challenges?',
        a: 'Merrick&apos;s active boating community and canal-front properties face pest challenges common to waterfront environments: Norway rat activity near marinas and boat storage, elevated moisture pest pressure from canal proximity, and the pest transfer risk that comes with boat storage in sheds and garages. We recommend seasonal inspections for Merrick canal-front homeowners and boat storage facilities.'
      },
      {
        q: 'What makes canal-front Merrick homes especially vulnerable to moisture pests?',
        a: 'Canal-front homes in Merrick experience sustained high humidity from adjacent water, frequent tidal flooding in low-lying areas, and salt-air exposure that accelerates wood decay. These conditions support silverfish, centipedes, carpenter ants, and moisture-loving cockroaches at higher levels than inland Nassau County homes. Moisture management — dehumidifiers, vapor barriers, drainage improvements — works alongside pest treatment for lasting results.'
      },
      {
        q: 'When is mosquito season most intense in South Merrick?',
        a: 'South Merrick&apos;s proximity to South Shore salt marshes and tidal wetlands means mosquito pressure builds from mid-May and peaks through August. Salt marsh mosquitoes breeding in nearby wetland systems can be active even during drier periods when local container breeding is reduced. Merrick homeowners near the waterfront benefit from monthly barrier spray programs starting no later than late May.'
      },
    ],
  },

  'valley-stream': {
    neighborhoods: ['Valley Stream North', 'Gibson Area', 'South Valley Stream', 'Valley Stream Central', 'Green Acres Area'],
    nearbyTowns: ['Elmont', 'Lynbrook', 'Malverne', 'Hewlett', 'West Hempstead'],
    cityFaqs: [
      {
        q: 'How does Valley Stream&apos;s proximity to the Queens border affect pest activity?',
        a: 'Valley Stream&apos;s position on the Nassau-Queens border means pest pressure from New York City&apos;s dense urban environment crosses into the community. NYC rodent populations — which are highly adapted to urban environments — migrate along infrastructure corridors into Nassau&apos;s western edge communities. Valley Stream homeowners near the Queens border typically see higher rodent pressure than comparable Nassau communities further east.'
      },
      {
        q: 'What dense suburban pest challenges are most common in Valley Stream?',
        a: 'Valley Stream&apos;s village density creates concentrated pest pressure — closely spaced homes, shared infrastructure, and proximity to commercial corridors along Sunrise Highway all contribute. Rodents, German cockroaches, and ants are the most common pests, with bed bugs an increasing concern in multi-family housing. Our Valley Stream programs emphasize exclusion to break reinfestation cycles in densely developed areas.'
      },
      {
        q: 'Are older row-house style homes in Valley Stream more vulnerable to certain pests?',
        a: 'Valley Stream&apos;s older attached and semi-attached housing stock has shared wall systems that facilitate cockroach and rodent movement between units without a common exterminator program. Party walls, shared utility chases, and aging foundations create pest migration pathways that individual unit treatment alone cannot address. Building-wide or coordinated multi-unit programs are significantly more effective for attached housing in Valley Stream.'
      },
    ],
  },

  'mineola': {
    neighborhoods: ['Downtown Mineola', 'Mineola Heights', 'Nassau County Courthouse Vicinity', 'Willis Avenue Corridor', 'North Mineola'],
    nearbyTowns: ['Garden City', 'Carle Place', 'New Hyde Park', 'Williston Park', 'Herricks'],
    cityFaqs: [
      {
        q: 'What commercial pest control services do Mineola&apos;s courthouse and hospital district businesses need?',
        a: 'Mineola&apos;s concentration of government buildings, medical offices, and healthcare facilities around the Nassau County Courthouse and Winthrop University Hospital campus requires commercial pest programs meeting the specific standards of those environments — healthcare-facility compliant treatments, comprehensive documentation for regulatory review, and disruption-free scheduling around court and medical operations.'
      },
      {
        q: 'Does Mineola&apos;s LIRR station create rodent pressure similar to other transit hubs?',
        a: 'Yes. Mineola&apos;s busy LIRR station concentrates the conditions that attract and sustain rodent populations — food vendors, commuter foot traffic, and the infrastructure around a major transit facility. Downtown Mineola businesses and residences within several blocks of the station experience elevated rodent pressure that benefits from regular exterior perimeter monitoring and exclusion work.'
      },
      {
        q: 'What challenges do older downtown Mineola buildings face that newer construction doesn&apos;t?',
        a: 'Mineola&apos;s older commercial and mixed-use downtown building stock has decades of accumulated structural vulnerabilities — legacy utility penetrations, aged foundation systems, and shared wall configurations that allow pest movement between tenants. Cockroaches are particularly persistent in older commercial buildings near food service. Our Mineola commercial programs address these structural factors alongside targeted treatment.'
      },
    ],
  },

  'rockville-centre': {
    neighborhoods: ['Lakeview', 'South Rockville Centre', 'Village Core', 'North Rockville Centre', 'Maple Avenue Corridor'],
    nearbyTowns: ['Lynbrook', 'Oceanside', 'Malverne', 'Baldwin', 'Freeport'],
    cityFaqs: [
      {
        q: 'How does Rockville Centre&apos;s village tree canopy affect wildlife and pest activity?',
        a: 'Rockville Centre&apos;s mature urban forest — a signature of the village aesthetic — supports carpenter ant parent colonies in tree hollows, provides squirrel and raccoon harborage adjacent to homes, and generates heavy seasonal leaf accumulation near foundations that creates rodent nesting habitat. Our Rockville Centre programs account for the specific pest pressures that village-scale urban tree coverage creates.'
      },
      {
        q: 'What pest prevention approaches work best for Rockville Centre&apos;s established homes?',
        a: 'Rockville Centre homeowners benefit most from proactive, prevention-focused programs: annual termite inspections, spring and fall perimeter treatments timed to seasonal pest activity peaks, and quarterly monitoring that identifies activity early. Prevention-based programs protect the architectural character of established Rockville Centre homes better than reactive treatment after damage has occurred.'
      },
      {
        q: 'When should Rockville Centre residents start seasonal mosquito programs?',
        a: 'Mosquito programs in Rockville Centre should begin by mid-May to stay ahead of seasonal population buildup. The village&apos;s mature landscaping and proximity to South Shore mosquito source areas on the Great South Bay mean early-season treatment provides significantly better protection than programs started after populations have peaked in July. Monthly retreatment through September is recommended.'
      },
    ],
  },

  'port-washington': {
    neighborhoods: ['Sands Point', 'Port Washington North', 'Manorhaven', 'Baxter Estates', 'Port Washington Harbor'],
    nearbyTowns: ['Manhasset', 'Great Neck', 'Roslyn', 'Roslyn Heights', 'Glen Head'],
    cityFaqs: [
      {
        q: 'What harbor and marina-related moisture pests affect Port Washington homes?',
        a: 'Port Washington&apos;s active harbor and marina environment sustains Norway rat populations from marine commercial activity and creates the elevated humidity that supports moisture pests in nearby residences. Carpenter ants, silverfish, and moisture-loving cockroaches are common in Port Washington waterfront homes where salt-air exposure accelerates wood decay and humidity remains consistently high near the harbor.'
      },
      {
        q: 'How are Gold Coast estate pest programs in Port Washington different from standard residential service?',
        a: 'Port Washington&apos;s significant Gold Coast estate properties — particularly in Sands Point — require comprehensive estate-scale programs covering all structures, extensive grounds, waterfront areas, and outbuildings. Estate programs include termite monitoring, tick and mosquito management for large landscaped areas, wildlife exclusion for carriage houses and outbuildings, and annual full-property assessments that smaller residential programs don&apos;t provide.'
      },
      {
        q: 'What tick threats are specific to Port Washington&apos;s North Shore wooded setting?',
        a: 'Port Washington&apos;s North Shore woodland character — with abundant mature trees, natural understory, and proximity to wooded preserve areas — creates some of Nassau County&apos;s highest tick exposure risk. Deer tick nymph activity from May through July and adult tick activity in fall are most dangerous. Properties with wooded edges or adjacent to open space benefit from spring, summer, and fall tick barrier treatments and tick tube programs.'
      },
    ],
  },

  'manhasset': {
    neighborhoods: ['Manhasset Hills', 'Plandome', 'Miracle Mile Area', 'Strathmore', 'North Manhasset'],
    nearbyTowns: ['Port Washington', 'Great Neck', 'Roslyn', 'Roslyn Heights', 'Albertson'],
    cityFaqs: [
      {
        q: 'What commercial pest control does the Miracle Mile shopping district in Manhasset need?',
        a: 'Manhasset&apos;s Miracle Mile — one of Long Island&apos;s premier upscale retail destinations — requires commercial pest programs that protect merchandise, customer experience, and brand reputation. We provide disruption-free IPM programs for Miracle Mile retailers and restaurants that keep pest activity invisible to customers while meeting Nassau County health department compliance standards.'
      },
      {
        q: 'What pest prevention programs are appropriate for upscale Manhasset residences?',
        a: 'Manhasset&apos;s upscale residential communities benefit from prevention-focused quarterly programs: perimeter barrier treatments, annual termite inspections, tick and mosquito management for extensive landscaped grounds, and proactive monitoring that identifies activity before it becomes visible. Preventive maintenance programs are both more cost-effective and more protective than reactive service for high-value properties.'
      },
      {
        q: 'How does North Shore wildlife create pest pressure in Manhasset neighborhoods?',
        a: 'Manhasset&apos;s North Shore setting and proximity to wooded areas supports active deer, raccoon, and squirrel populations. Deer browsing in residential gardens drives tick populations on properties with deer traffic. Raccoons and squirrels enter attics through deteriorated soffits and roof-line gaps. Our Manhasset programs include wildlife exclusion and tick management alongside standard pest control.'
      },
    ],
  },

  'syosset': {
    neighborhoods: ['Woodbury Road Corridor', 'Cold Spring Hills', 'Syosset-Woodbury Border', 'Bayville Road Area', 'South Syosset'],
    nearbyTowns: ['Woodbury', 'Jericho', 'Hicksville', 'Bethpage', 'Old Bethpage'],
    cityFaqs: [
      {
        q: 'What pest prevention programs work best for executive homes in Syosset?',
        a: 'Syosset&apos;s executive home market benefits most from comprehensive prevention programs — quarterly perimeter treatments, annual termite inspections, tick and mosquito management for larger wooded lots, and proactive wildlife exclusion for properties near open space. Prevention-focused programs protect property values and eliminate the disruption of reactive pest emergencies in high-end Syosset residences.'
      },
      {
        q: 'How do wooded lots in Syosset increase tick and wildlife pest pressure?',
        a: 'Syosset&apos;s wooded residential lots — particularly those bordering Syosset-Woodbury Park or wooded buffer areas — face significantly elevated tick and wildlife pressure. Deer movement through properties introduces deer tick populations to yards. Raccoons and squirrels find entry points in attic soffits and roof-line junctions of older homes. Spring through fall tick barrier spray programs are strongly recommended for Syosset properties with wooded edges.'
      },
      {
        q: 'Are new construction homes in Syosset protected from pests, or do they still need treatment?',
        a: 'New construction in Syosset brings its own pest entry vulnerabilities — gaps around new utility penetrations before caulking fully cures, disturbed soil from excavation that attracts ants and rodents, and incomplete exterior finishing that leaves temporary openings. New homes should receive a professional inspection and perimeter treatment within the first year. Construction activity can also displace established pest populations from adjacent properties into new structures.'
      },
    ],
  },

  'bethpage': {
    neighborhoods: ['Old Bethpage Area', 'Central Avenue Corridor', 'South Bethpage', 'Bethpage State Park Edge', 'North Bethpage'],
    nearbyTowns: ['Hicksville', 'Levittown', 'Old Bethpage', 'Plainview', 'Farmingdale'],
    cityFaqs: [
      {
        q: 'Does proximity to Bethpage State Park affect pest management for nearby homes?',
        a: 'Bethpage State Park&apos;s extensive wooded and open-space acreage creates significant edge-effect pressure for homes bordering or near the park. Deer populations introduce tick pressure, raccoons and other wildlife move between park habitat and residential areas, and mosquito breeding in park water features affects adjacent neighborhoods. Our Bethpage programs account for the elevated pest pressure that park proximity creates.'
      },
      {
        q: 'What mid-Island suburban pest challenges are most common in Bethpage?',
        a: 'Bethpage shares the mid-Island Nassau County pest profile: postwar housing stock with accumulated structural vulnerabilities, sustained rodent pressure from commercial corridors, and South Shore mosquito impact from breeding sources in the barrier island wetlands that affects communities up to 25 miles inland. Spring ant activity and fall rodent entry are the most consistent seasonal pest events for Bethpage homeowners.'
      },
      {
        q: 'How does living near golf courses in Bethpage affect pest exposure?',
        a: 'Golf courses create specific pest pressure for neighboring residential properties — extensive turf management, water features and ponds used as mosquito breeding habitat, and the wildlife corridors that golf course rough and wooded edges create. Bethpage State Park golf course proximity means elevated mosquito pressure in season and increased wildlife movement through adjacent residential neighborhoods.'
      },
    ],
  },

  'lynbrook': {
    neighborhoods: ['East Lynbrook', 'Lynbrook West End', 'Irving Place Corridor', 'North Lynbrook', 'Greis Park Area'],
    nearbyTowns: ['Valley Stream', 'Rockville Centre', 'Malverne', 'East Rockaway', 'Oceanside'],
    cityFaqs: [
      {
        q: 'What rodent control challenges does Lynbrook&apos;s South Shore village density create?',
        a: 'Lynbrook&apos;s dense South Shore village character — closely spaced homes, shared infrastructure, and active commercial areas — creates rodent pressure that individual-home treatment alone cannot fully resolve. Norway rat activity from Sunrise Highway commercial areas, house mice moving through shared infrastructure, and the aging housing stock&apos;s structural vulnerabilities combine to require robust exclusion programs alongside any rodent treatment.'
      },
      {
        q: 'Are Victorian-era homes in Lynbrook at higher pest risk than postwar construction?',
        a: 'Yes. Lynbrook&apos;s stock of older Victorian and early 20th century homes presents significant structural pest vulnerabilities — original wood framing exposed to a century of moisture cycles, foundation systems without modern waterproofing, and utility penetrations from multiple eras of renovation that have created numerous entry points. These homes benefit most from thorough annual inspections and prevention-focused programs.'
      },
      {
        q: 'Does the Lynbrook LIRR station affect rodent activity in surrounding neighborhoods?',
        a: 'Lynbrook&apos;s busy LIRR station creates a zone of elevated rodent pressure in the surrounding blocks — a pattern consistent across Nassau County transit hubs. Businesses and homes near the Lynbrook station should include exterior monitoring and regular exclusion inspection in their pest management approach, particularly in fall when outdoor rodents begin seeking indoor harborage.'
      },
    ],
  },

  'farmingdale': {
    neighborhoods: ['Fulton Street Downtown', 'South Farmingdale', 'Route 110 Commercial Corridor', 'Conklin Street Area', 'North Farmingdale'],
    nearbyTowns: ['Bethpage', 'Massapequa', 'Levittown', 'Amityville', 'Old Bethpage'],
    cityFaqs: [
      {
        q: 'What commercial pest management do Route 110 industrial businesses in Farmingdale require?',
        a: 'Farmingdale&apos;s Route 110 industrial and commercial corridor hosts warehouses, distribution centers, and light manufacturing operations that require large-footprint pest programs. Industrial facilities need loading dock rodent management, interior monitoring station programs scaled to large square footage, and food safety documentation packages for facilities under FDA or third-party audit requirements. Liberty Pest Pros has served Nassau County industrial accounts since 1982.'
      },
      {
        q: 'What pest programs are appropriate for Farmingdale warehouses and distribution centers?',
        a: 'Warehouse pest control in Farmingdale requires monitoring-dense IPM programs: tamper-resistant rodent stations deployed in a grid pattern throughout the facility, pheromone traps for flying insects in storage areas, loading dock perimeter treatment, and comprehensive service documentation meeting food safety audit standards. We design programs scaled to the specific layout and operational requirements of each Farmingdale industrial facility.'
      },
      {
        q: 'How does Farmingdale&apos;s industrial corridor affect pest pressure in adjacent residential areas?',
        a: 'Residential neighborhoods adjacent to Farmingdale&apos;s industrial zones experience elevated pest pressure from the commercial activity next door — particularly rodent populations sustained by warehouse and food distribution activity. Edge-of-industrial residential properties benefit from stronger perimeter exclusion and more frequent exterior monitoring than typical residential programs, especially in fall when outdoor rodents begin seeking indoor harborage.'
      },
    ],
  },

  'westbury': {
    neighborhoods: ['New Cassel', 'Carle Place Border Area', 'Commercial Avenue', 'Old Country Road Corridor', 'North Westbury'],
    nearbyTowns: ['Garden City', 'Mineola', 'New Hyde Park', 'Old Westbury', 'East Meadow'],
    cityFaqs: [
      {
        q: 'How do you serve Westbury&apos;s diverse community with effective pest control?',
        a: 'Westbury&apos;s diverse community includes residential areas with varying housing types and commercial corridors with food service, retail, and light industrial operations. We provide pest control programs in English and Spanish, and our technicians understand the specific pest challenges — multi-family housing, commercial corridor rodent pressure, and the New Cassel neighborhood&apos;s housing stock — that define Westbury&apos;s residential service needs.'
      },
      {
        q: 'What commercial corridor rodent activity affects Westbury neighborhoods?',
        a: 'Westbury&apos;s active commercial corridors along Old Country Road and Commercial Avenue sustain Norway rat populations from restaurant refuse, loading dock activity, and commercial dumpster sites. These commercial rodent populations exert constant pressure on residential neighborhoods immediately adjacent to commercial zones. Homes within a few blocks of commercial activity benefit from stronger perimeter programs with regular exterior monitoring.'
      },
      {
        q: 'What pest challenges do Westbury&apos;s multi-family residential buildings face?',
        a: 'Multi-family buildings in Westbury require building-wide pest programs that address the cross-unit migration pathways — shared walls, utility chases, and common corridors — that allow cockroaches, rodents, and bed bugs to spread between apartments. Individual unit treatment without building-wide monitoring and exclusion creates a cycle of reinfestation. We design portfolio programs for Westbury property managers that address the full building.'
      },
    ],
  },

  'plainview': {
    neighborhoods: ['Central Plainview', 'Old Country Road Corridor', 'Plainview Heights', 'South Plainview', 'North Plainview'],
    nearbyTowns: ['Syosset', 'Bethpage', 'Hicksville', 'Jericho', 'Old Bethpage'],
    cityFaqs: [
      {
        q: 'What pest entry vulnerabilities do Plainview&apos;s newer suburban developments have?',
        a: 'Newer Plainview construction has different but real pest entry vulnerabilities compared to postwar housing — gaps around new utility penetrations before caulking fully sets, disturbed soil from development that attracts ants and rodents, and landscaping that&apos;s planted close to foundations. As homes age into the 10-20 year range, these entry points need reassessment. Regular exterior inspections catch developing vulnerabilities early.'
      },
      {
        q: 'How significant is mid-Island rodent pressure in Plainview neighborhoods?',
        a: 'Plainview sits in central Nassau County, where mid-Island rodent pressure is sustained by commercial corridors, dense residential development, and the mature landscape plantings adjacent to homes that provide nesting habitat. Fall is the peak rodent entry period — house mice and Norway rats begin moving indoors as October temperatures drop. A fall exclusion inspection before October is the most cost-effective rodent prevention step for Plainview homeowners.'
      },
      {
        q: 'What landscaping factors near the foundation increase pest risk in Plainview homes?',
        a: 'Dense foundation plantings, wood chip mulch beds, and irrigation systems that maintain soil moisture near the foundation are the most common pest risk factors in Plainview&apos;s well-landscaped suburban properties. Ants and subterranean termites are attracted to moist soil adjacent to the foundation. We recommend maintaining a 6-inch clearance between mulch and foundation and keeping foundation plantings trimmed away from the structure.'
      },
    ],
  },

  'glen-cove': {
    neighborhoods: ['Morgan Park Area', 'Glen Cove City Center', 'Sea Cliff Border Area', 'Dosoris Area', 'Lattingtown Border'],
    nearbyTowns: ['Sea Cliff', 'Roslyn', 'Old Westbury', 'Locust Valley', 'Bayville'],
    cityFaqs: [
      {
        q: 'What North Shore city pest challenges does Glen Cove face that suburbs don&apos;t?',
        a: 'Glen Cove&apos;s city status — one of the few incorporated cities in Nassau County — means denser development, older infrastructure, and a range of housing types from historic estates to apartment buildings, all in close proximity. This diversity creates concentrated pest pressure similar to urban environments: commercial corridor rodent activity, multi-family bed bug transfer risk, and legacy building infrastructure vulnerabilities that suburban areas have fewer of.'
      },
      {
        q: 'How does Glen Cove&apos;s diverse housing stock from estates to apartments affect pest service needs?',
        a: 'Glen Cove&apos;s range from Gold Coast estate properties to urban apartment buildings means no single pest program fits all residents. Estates need comprehensive programs covering multiple structures and extensive grounds. Apartment buildings need building-wide monitoring and exclusion. Older residential neighborhoods need foundation and structural vulnerability assessment. Liberty Pest Pros designs programs specific to each property type and pest profile in Glen Cove.'
      },
      {
        q: 'What waterfront moisture pests are common in Glen Cove harbor-area homes?',
        a: 'Glen Cove&apos;s harbor and waterfront areas face moisture pest pressure from the sustained high humidity environment adjacent to the water. Carpenter ants exploit salt-air-accelerated wood decay in dock structures and waterfront home exteriors. Silverfish, centipedes, and moisture-loving cockroaches are more prevalent near the harbor than in Glen Cove&apos;s inland neighborhoods. Annual waterfront property inspections are recommended.'
      },
    ],
  },

  'baldwin': {
    neighborhoods: ['North Baldwin', 'Baldwin Harbor', 'South Baldwin', 'Grand Avenue Corridor', 'Milburn Creek Area'],
    nearbyTowns: ['Freeport', 'Rockville Centre', 'Merrick', 'Oceanside', 'East Rockaway'],
    cityFaqs: [
      {
        q: 'What waterfront pest challenges do Baldwin Harbor homeowners face?',
        a: 'Baldwin Harbor&apos;s canal-front homes and waterfront properties face elevated moisture pest pressure from proximity to tidal waterways — carpenter ants in moisture-damaged dock and exterior wood, silverfish and centipedes in high-humidity crawl spaces, and Norway rat activity from marina and waterfront commercial operations. Annual waterfront home inspections are especially important in Baldwin Harbor.'
      },
      {
        q: 'Does Baldwin&apos;s fishing and boating community create specific pest issues?',
        a: 'Baldwin&apos;s active boating and fishing community creates pest transfer risk through boat storage facilities, bait and tackle storage, and the organic material associated with fishing activity that attracts flies and rodents. Waterfront commercial areas sustain rodent populations that pressure adjacent residential neighborhoods. We provide specialized programs for waterfront commercial and residential properties throughout Baldwin.'
      },
      {
        q: 'When should Baldwin South Shore homeowners start seasonal mosquito and tick programs?',
        a: 'Baldwin South Shore homeowners should begin mosquito programs by mid-May to stay ahead of peak season pressure from South Shore salt marsh populations. Tick programs should include spring activation (May), a mid-summer application (July), and a fall treatment (September-October) to coincide with the nymph and adult tick activity periods. Baldwin properties near Milburn Creek and wetland areas benefit most from early seasonal starts.'
      },
    ],
  },

  'wantagh': {
    neighborhoods: ['Wantagh Park Area', 'Jones Beach Corridor', 'Marine Basin Vicinity', 'North Wantagh', 'Wantagh Shores'],
    nearbyTowns: ['Seaford', 'Levittown', 'Massapequa', 'Bellmore', 'North Bellmore'],
    cityFaqs: [
      {
        q: 'How does the Jones Beach causeway environment create moisture pest pressure in Wantagh?',
        a: 'Wantagh&apos;s position as the gateway to Jones Beach — with the Wantagh Parkway causeway crossing through South Shore wetlands — means the community is deeply embedded in coastal mosquito and moisture pest territory. The extensive wetland system surrounding the causeway is a major mosquito breeding source. Homes near the parkway and bay areas experience season-long mosquito pressure requiring regular barrier spray programs.'
      },
      {
        q: 'What South Shore recreational area pest challenges affect Wantagh homeowners?',
        a: 'Wantagh&apos;s proximity to Jones Beach State Park, Wantagh Park, and the South Shore bay system creates elevated seasonal pest pressure — particularly mosquitoes, ticks, and wildlife moving from recreational areas into residential neighborhoods. The extensive green corridor between Wantagh and Jones Beach supports deer, raccoon, and skunk populations that regularly cross into residential areas bordering parkway greenways.'
      },
      {
        q: 'What tick control programs are most effective for Wantagh properties near parkway greenbelts?',
        a: 'Wantagh properties adjacent to parkway greenbelts and open space corridors benefit from three-season tick control: spring barrier spray activation in May, a mid-summer treatment in July, and a fall application in September-October targeting adult deer tick activity. Properties with wooded edges or those where deer regularly pass through the yard are at highest risk and may benefit from tick tube supplemental programs to reduce nymph populations.'
      },
    ],
  },

  'seaford': {
    neighborhoods: ['Seaford Harbor', 'Tackapausha Area', 'Seaford-Oyster Bay Expressway Corridor', 'South Seaford', 'North Seaford'],
    nearbyTowns: ['Wantagh', 'Massapequa', 'Levittown', 'Bellmore', 'North Bellmore'],
    cityFaqs: [
      {
        q: 'How does Tackapausha Preserve proximity affect pest and wildlife pressure in Seaford?',
        a: 'The Tackapausha Museum and Preserve — a protected freshwater and upland habitat corridor running through Seaford — creates significant edge-effect wildlife and pest pressure for adjacent residential properties. Raccoon, opossum, and skunk populations are dense in the preserve corridor and regularly press into Seaford neighborhoods bordering the preserve. Deer movement from the preserve also introduces elevated tick populations to adjacent yards.'
      },
      {
        q: 'What canal-front home pest challenges are specific to Seaford Harbor?',
        a: 'Seaford Harbor&apos;s canal-front homes face the same South Shore moisture pest challenges as other Nassau County waterway communities — elevated humidity, salt-air wood decay, and Norway rat activity from marina and waterfront areas — with the added proximity to Tackapausha Preserve wildlife corridors. Annual inspections for Seaford Harbor homes should cover both standard pest entry points and waterfront-specific moisture and structural vulnerabilities.'
      },
      {
        q: 'What residential mosquito and tick prevention is most effective in Seaford?',
        a: 'Seaford homeowners near South Shore wetlands and the Tackapausha Preserve corridor benefit from comprehensive seasonal mosquito and tick programs. Mosquito barrier spray programs should run monthly from May through September. Tick programs should include at minimum spring and fall treatments, with mid-summer applications for properties with wooded edges or deer traffic. Combined mosquito and tick programs are available at reduced cost through Liberty Pest Pros.'
      },
    ],
  },
};

// County-level fallback for all other towns
export const NASSAU_FALLBACK: CityLayer7 = {
  nearbyTowns: ['Hempstead', 'Garden City', 'Oceanside', 'Long Beach', 'Great Neck'],
  cityFaqs: [
    {
      q: 'How long has Liberty Pest Pros served Nassau County?',
      a: 'Liberty Pest Pros has been Nassau County&apos;s trusted family-owned exterminator since 1982 — over 40 years of local service.'
    },
    {
      q: 'Do you offer same-day service throughout Nassau County?',
      a: 'Yes. We offer same-day appointments for most pest situations throughout Nassau County. Call before noon for same-day service.'
    },
    {
      q: 'What pests are most common in Nassau County?',
      a: 'Nassau County homeowners most frequently deal with ants, termites, rodents, mosquitoes, and bed bugs. Coastal areas also see more moisture pests and wildlife intrusions.'
    },
  ],
};
