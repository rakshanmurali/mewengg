export interface ServiceItem {
  code: string
  title: string
  copy: string
}

export interface ServiceGroup {
  id: string
  eyebrow: string
  title: string
  intro: string
  items: ServiceItem[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'civil',
    eyebrow: 'DIVISION 01',
    title: 'Civil Work',
    intro:
      'High-quality civil construction across residential, commercial and infrastructure projects — from the ground up.',
    items: [
      {
        code: 'CVL-EX',
        title: 'Excavation',
        copy: 'Precise digging, trenching and earth-moving for construction, mining and infrastructure sites, run by skilled operators on modern equipment with minimal disruption to surrounding areas.',
      },
      {
        code: 'CVL-SF',
        title: 'Soil Filling',
        copy: 'Careful selection and compaction of soil to build firm, load-bearing bases for residential, commercial and industrial sites, in line with project specification.',
      },
      {
        code: 'CVL-RD',
        title: 'Road Works',
        copy: 'End-to-end road construction and maintenance — site preparation, asphalt laying and finishing — for urban and rural infrastructure projects of any scale.',
      },
      {
        code: 'CVL-FN',
        title: 'Foundation',
        copy: 'Foundations engineered to withstand load and environmental factors, built with premium materials and meticulous attention to safety standards.',
      },
      {
        code: 'CVL-PL',
        title: 'Pillar Work',
        copy: 'Durable pillars built to structural and architectural specification, delivered on schedule with strict adherence to safety protocol.',
      },
    ],
  },
  {
    id: 'mechanical',
    eyebrow: 'DIVISION 02',
    title: 'Mechanical & Structural Work',
    intro:
      'Installation, repair and maintenance of industrial and mechanical systems, from fabrication through to final erection.',
    items: [
      {
        code: 'MEC-FB',
        title: 'Structure Fabrication',
        copy: 'Steel and structural fabrication for warehouses, bridges and complex industrial structures, built to durability and quality standards using advanced tooling.',
      },
      {
        code: 'MEC-PT',
        title: 'Structure Painting',
        copy: 'Surface preparation and protective coating application that guards against corrosion, weathering and wear on industrial and commercial structures.',
      },
      {
        code: 'MEC-ER',
        title: 'Structure Erection',
        copy: 'Seamless assembly and installation of prefabricated components, from small installations to large industrial structures, handled with accuracy and safety.',
      },
    ],
  },
  {
    id: 'piping',
    eyebrow: 'DIVISION 03',
    title: 'Piping & Pipeline Work',
    intro:
      'Fabrication, erection and long-distance pipeline services built to industry standard, from plant piping to cross-country and city gas networks.',
    items: [
      {
        code: 'PIP-FB',
        title: 'Piping Fabrication',
        copy: 'Custom fabrication of pipes across sizes and materials, from initial design through final assembly, for reliable long-term performance.',
      },
      {
        code: 'PIP-ER',
        title: 'Piping Erection',
        copy: 'Installation of complex piping systems for industrial plants, refineries and infrastructure, with precise alignment and secure fittings.',
      },
      {
        code: 'PIP-PT',
        title: 'Piping Painting',
        copy: 'Protective coating of piping systems for durability and aesthetic finish, matched to project and environmental requirements.',
      },
      {
        code: 'PLN-CC',
        title: 'Cross Country Piping',
        copy: 'Full-cycle cross-country pipeline execution — route planning, trenching, pipe laying and backfilling — to stringent industry and regulatory standards.',
      },
      {
        code: 'PLN-CG',
        title: 'City Gas Pipelines',
        copy: 'Design, installation and maintenance of city gas distribution pipelines serving residential, commercial and industrial users safely and reliably.',
      },
    ],
  },
  {
    id: 'maintenance',
    eyebrow: 'DIVISION 04',
    title: 'Maintenance Work',
    intro:
      'Keeping facilities and equipment running smoothly with civil, mechanical and manpower support services.',
    items: [
      {
        code: 'MNT-CV',
        title: 'Civil Maintenance',
        copy: 'Repairs and renovations covering masonry, plastering and painting, keeping residential, commercial and industrial properties in excellent condition.',
      },
      {
        code: 'MNT-MC',
        title: 'Mechanical Maintenance',
        copy: 'Preventive maintenance, troubleshooting and repair for machinery and equipment across industrial plants and manufacturing units, minimising downtime.',
      },
      {
        code: 'MNT-MP',
        title: 'Manpower Supply',
        copy: 'Skilled and unskilled manpower — from construction labour to technical staff — trained and ready to support your project across industries.',
      },
    ],
  },
  {
    id: 'supply',
    eyebrow: 'DIVISION 05',
    title: 'Material Supply',
    intro:
      'A dependable source of aggregate, construction, mechanical and pond ash materials, delivered on time without compromising quality.',
    items: [
      {
        code: 'SUP-CV',
        title: 'Civil Material Supply',
        copy: 'Bricks, cement, sand and aggregate sourced through a wide supplier network, delivered on schedule and to industry standard.',
      },
      {
        code: 'SUP-CN',
        title: 'Construction Material Supply',
        copy: 'High-grade steel, concrete and essential materials for residential, commercial and industrial projects of any scale, at competitive pricing.',
      },
      {
        code: 'SUP-MC',
        title: 'Mechanical Material Supply',
        copy: 'Pipes, fittings and machinery parts supplied reliably to keep industrial operations running without interruption.',
      },
      {
        code: 'SUP-AS',
        title: 'Pond Ash Supply',
        copy: 'Superior-grade ash for concrete production, road construction and landfill applications, supplied consistently to project specification.',
      },
    ],
  },
  {
    id: 'transport',
    eyebrow: 'DIVISION 06',
    title: 'Transportation & Logistics',
    intro:
      'Efficient, timely movement of goods, vehicles and machinery, with safe delivery guaranteed on every run.',
    items: [
      {
        code: 'TRN-CV',
        title: 'Commercial Vehicle Supply',
        copy: 'A fleet of trucks, lorries and heavy-duty vehicles with experienced drivers, supporting construction, logistics and industrial operations.',
      },
      {
        code: 'TRN-MM',
        title: 'Machinery & Materials',
        copy: 'Advanced equipment, tools and raw materials supplied on time and at competitive pricing to support construction, manufacturing and industrial projects.',
      },
    ],
  },
]

export interface ProjectRow {
  name: string
  work: string
  value: string
}

export const ongoingProjects: ProjectRow[] = [
  { name: 'Varam Construction', work: 'Piping & Structural Works', value: '15,00,00,000' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Biennial Contract for Jungle Cleaning and Monsoon Preparation Work at NTECL', value: '1,45,69,561' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Hiring of Vehicles', value: '80,41,266' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Biennial Maintenance Contract for Civil Housekeeping Services at NTECL', value: '1,79,87,131' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Sale of Pond Ash', value: '1,92,00,000' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Transporting and Distribution of Drinking Water', value: '30,12,160' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Construction of RCC Box Culvert Work', value: '31,19,254' },
  { name: 'NRP Projects Pvt Ltd', work: 'Mainline work of 16" dia pipe — mechanical and civil works in allotted soft-soil ROW', value: '11,82,95,000' },
  { name: 'Aniruth Enterprises', work: 'Earth work in excavation by mechanical/manual means, including shoring, strutting, dewatering and disposal of surplus soil', value: '5,00,00,000' },
]

export const completedProjects: ProjectRow[] = [
  { name: 'Ocean Life Spaces Ltd', work: 'Execution of Supply & Laying of Road Works', value: '16,79,16,680' },
  { name: 'Apra Infraprojects', work: 'Piping & Structural Works', value: '1,50,00,000' },
  { name: 'Apra Infraprojects', work: 'Mainline Works for 30" RLNG Pipeline from Ennore to IP101', value: '7,50,00,000' },
  { name: 'Keller Ground Engg', work: 'Material Supply of Aggregate, 75mm Down Well Graded Mix', value: '97,12,500' },
  { name: 'IOCL Vallur', work: 'Piping & Structural Works', value: '84,00,000' },
  { name: 'Bauer Engg India', work: 'Material Supply of Aggregate / Stone, Size 70mm Down', value: '99,00,000' },
  { name: 'Keller Ground Engg', work: 'Material Supply of Aggregate, 75mm Down Well Graded Mix', value: '48,56,250' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Hiring of Vehicles', value: '30,74,684.76' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Hiring of Vehicles', value: '24,83,290.56' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Hiring of Vehicles', value: '24,83,290.56' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Biennial Contract — Jungle Cleaning and Monsoon Preparation Work', value: '1,45,69,516' },
  { name: 'NTPC Tamilnadu Energy Co. Ltd', work: 'Housekeeping Services', value: '1,79,87,131' },
]

export interface TurnoverRow {
  year: string
  value: number
  label: string
}

export const turnover: TurnoverRow[] = [
  { year: '2021–22', value: 88874528, label: '₹8,88,74,528' },
  { year: '2022–23', value: 192985066, label: '₹19,29,85,066' },
  { year: '2023–24', value: 186634233, label: '₹18,66,34,233' },
]

export const teamMembers = [
  {
    name: 'T.V Ramesh Babu',
    role: 'Founder',
    bio: 'A visionary leader with decades of expertise, driving innovation and excellence in engineering solutions.',
    initials: 'RB',
  },
  {
    name: 'R Suriya Prakash',
    role: 'CEO',
    bio: 'An exceptional strategist committed to delivering sustainable growth and client-focused results.',
    initials: 'SP',
  },
  {
    name: 'S Yamini',
    role: ' Managing Director',
    bio: 'A client-focused professional committed to delivering reliable solutions and long-term business value.',
    initials: 'YS',
  },
]

export const clients = [
  { name: "NTPC", short: "NT" },
  { name: "APRA", short: "AP" },
  { name: "CPCL", short: "CP" },
  { name: "IMC", short: "IM" },
  { name: "OCEAN", short: "OC" },
  { name: "NRP PROJECTS", short: "NR" },
  { name: "KELLER", short: "KE" },
  { name: "DP WORLD", short: "DP" },
  { name: "BAUER", short: "BA" },
  { name: "BHARAT PETROLEUM", short: "BP" },
  { name: "INDIANOIL", short: "IO" },
  { name: "ANIRUTH", short: "AN" },
];

export const contact = {
  phone: '+91 9952018384',
  email: 'maheswariengg72@gmail.com',
  website: 'www.maheswariengineering.com',
  addressLines: [
    '53/1, Perumal Kovil Street,',
    'Kondakkarai Village, S.R Palayam Post,',
    'N.C.T.P.S, Chennai – 600 120.',
  ],
}
