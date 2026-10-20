import { PlotItem, GalleryItem, ServiceItem } from './types';

export const BRAND_INFO = {
  name: 'Jai Construction',
  tagline: 'Engineered Permanence',
  owner: 'Balaji R',
  designation: 'Business Owner & Principal Contractor',
  phone: '+91 9176409244',
  phoneClean: '919176409244',
  email: 'cloudvr14@gmail.com',
  address: 'Vengaivasal, Chennai, Tamil Nadu 600126, India',
  operatingHours: 'Mon – Sat: 8:00 AM – 7:30 PM',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VWW-COaHeRlV-F9qWtAUh5YWm2zwlIba1VSTBVb0E026gCmd81LVXsyDWcfi5JEjj4SHb2wSQoHGmrHYSHMhhzonhUVM12G2klujxZ8wJHNL4t34c1ppqALTqQ4gs1v5zVlU-CS8xEIDJwG7ADmtZfPaATz9LeHV28I6x04TS-l3_vauCas7UypLUE71a7lS5vdVINW6bEyWbtd3KwC-LWqzMuFBdcrXD7m7u2q_T63LqjQ-T2nPI8Qyg',
  heroBgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH1tIuHV4ZiqIs7NZceLi6fJvfz5cRNFPJqykKykYCFQMd37yoo4i7aOl919NTrso_Yu1qt8LvaFYHAUDTcXg2JtErEIQVvOssHzazw-HMicojqaqFf2tYjF4ZSKPXBQYXb0s9gZDIvqzFazdPsxtlKQy9ympfzR3hDKlStEEqsnNz7yfDj04R5_35yuw4T_7om518c8d9rD_29hlWBoGv-91jVCmHkj5k68r9eRbktJLAkNBoxgct3Q',
  aboutImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1NXWsBtIxidXLppETwjKBS8Gs4fcjPgK15h0nhG3_3BO1-daFZcBz9I5dJJnL11ls4Vf90YiEVAJJ_Ne65eEqJ4x2uxP_HWR9YyNM-H--nOG6jE8ntmgGKmqzqzShzHbO6L8715_3ui_S0HvXNq0BEJPS-2cCRDbrKWdT9UNiNf9WUwyY94zlqupe3KwrsGB0AoJM5vAxXbSVZHT0yC5e7pis5aTvGLo4-y9LiIRwmygEb-rmH280kw',
  mapImgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtk7tVyD0ZHvaymPf2t83U6e0kQf9UwBGypwkTQEeh3RqVdAj84MZk0xVsF4Ct7OsPLw2XJig8IveHa14EGDTakqsz_FvPGsl9Za8_OMgXnL2TNcxnAh__ycKLfBWCL8mULDBsQekKfVWqIeT6iBqdZFESe4tfSqpobOQAlAQ7Y6CT3UQ_wniXh2hD1C0X3wt9OeG-sLIQ-xu3thYv6gmQVjPs4qZAdAAqfgerqm5WE5MDzoI-zQsriw',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'plot-sales',
    title: 'Real Estate & Plot Sales',
    tag: 'CMDA / DTCP Verified',
    tagColor: 'bg-[#0e1c2f]',
    description: 'Hand-picked DTCP and CMDA approved residential plots in growing suburban corridors of Chennai. Clear titles, demarcated boundaries, and investment-ready parcels.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97z_gRfs9qFoxZUmyNOX9qFZqG7GUiNB5eIkKFSiSRrX-oJyXmWwRe1gN5JhpB5Jv-CCiDVlhTd5Jjn9zD6QjEf7SUBs8t1pfeOyKsEUVh6k1wp-yHaqNxeU_aULN725tFE480zTJ3RWFJdi8sJLN1Z5digaC9FgUlUwW8U1VOu3nCGygxIkq2FanE90xZmiJOjPJhhNjkvI0BVGwUUT_MX6Lhup0_jiA_DxXhhRIE29SWnlqIAjKGQ',
    ctaText: 'Enquire About Land',
    icon: 'foundation',
    features: ['100% Clear Legal Title & Parent Deeds', 'Stone Boundary Demarcations', 'Ready for Immediate Registration', 'Bank Loan Support via Nationalized Banks']
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    tag: 'Turnkey Villas',
    tagColor: 'bg-[#B45309]',
    description: 'End-to-end residential homes, independent villas, and commercial structures from soil testing and RCC foundations to brickwork, plastering, and turnkey handover.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9hVz534tR2c6Un6C-1cCmZKRsq0yiuAysC7p4g-wiNHr3c1XB1DMqcxtBjTzDf08DHgXpsOvyPaanEFqJhPQT_wL1Cykz6d6US1ValvTlhq94RXOafl5eN-5sY-S4WX7uSnAE33z-EfrbUnmzOxP5tScNjvP1QVNFX322PQKPx9ZNvRrwJJiAf0gB263VsZYOdpXA4LhEgw_LYDhe5JStsUgNduIF9l93sBckPQTJbUsf1jSLgBodug',
    ctaText: 'Request Construction Quote',
    icon: 'home_work',
    features: ['Soil Bearing Capacity & Structural Analysis', '53 Grade Cement & Fe 550D TMT Steel', 'Phase-wise Stage Inspection by Balaji R', 'Complete Turnkey Architectural Delivery']
  },
  {
    id: 'painting-contracts',
    title: 'Painting Contracts',
    tag: 'Weather-Shield',
    tagColor: 'bg-[#426086]',
    description: 'Premium interior and exterior wall painting, waterproof primer coating, textured finishes, surface preparation, and putty application with top-grade materials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUC117s0zjmym0sLtXTMuVlP7SR88Y-qe20-o-ygbD934_FE7l87QN6Nh3MlDW49kLvTgu2OlPU6I9ESzCHJBYwr-1a7TH5HyjTApwjkVRiF4O3HYVprM0Ex5Akg_EtkU-eFmNvIZ9hLxJK7W5rLliBmjXkHklrdpBebeM5LvBXfRZ_XlZU-T8wQFu1AVpF5kyq1p0Rttkr0aJeWMZvcBphDtb9feqbZjNsPZWfejAC9dJKHWGpdvrBg',
    ctaText: 'Get Painting Estimate',
    icon: 'format_paint',
    features: ['3-Coat Putty & Primer Surface Prep', 'Weatherproof Siliconized Exterior Emulsions', 'Architectural Stucco & Texture Finishes', 'Branded Asian Paints / Berger Certified']
  },
  {
    id: 'electrical-contracts',
    title: 'Electrical Contracts',
    tag: 'Certified Standards',
    tagColor: 'bg-[#426086]',
    description: 'Comprehensive building wiring, phase distribution boards, architectural concealed lighting, switchgear fittings, inverter wiring, and safety earthing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfiPf5NMJGbSYUcpuRhpc2vaIv9v_RMW4SchVl9Y06aTLpenmSxl7z6YTm_uSKhWYzNjR2hqAhQCK7bDBJHaboLuXMxiLkSVAiFnr2SdpJJ7jkolS7j6BeZXlWAJGOOPD3_xhRGIaWa01xTrmtrxZRmUGixm-QLJrsKWmVJebGbRE9C2zxWr5ZROv9APJ7w7NfMF-X51M3LfvQiQ1okUHz1OZL6baQOxjgs2DUEmcTtsfP6JIgUdvzxg',
    ctaText: 'Enquire Electrical Work',
    icon: 'bolt',
    features: ['FR-grade Multi-strand Copper Conduits', '3-Phase Heavy Load Distribution Boards', 'Architectural Concealed Profile & LED Rigs', 'Surge Protection & Copper Plate Earthing']
  }
];

export const PLOTS_DATA: PlotItem[] = [
  {
    id: 'plot-1',
    title: '2,400 Sq.Ft Residential Villa Plot',
    location: 'Vengaivasal, Chennai',
    areaSqFt: 2400,
    facing: 'East Facing',
    status: 'Available',
    approval: 'CMDA & Local Body',
    roadWidth: '30 Feet Blacktop',
    groundwaterOrAccess: 'Sweet Water @ 28 Ft',
    loanEligibility: 'Nationalized & Private Banks (up to 80%)',
    priceNote: '[Contact for Price]',
    estimatedPrice: '₹ 1.25 Cr - 1.45 Cr (approx. guide)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97z_gRfs9qFoxZUmyNOX9qFZqG7GUiNB5eIkKFSiSRrX-oJyXmWwRe1gN5JhpB5Jv-CCiDVlhTd5Jjn9zD6QjEf7SUBs8t1pfeOyKsEUVh6k1wp-yHaqNxeU_aULN725tFE480zTJ3RWFJdi8sJLN1Z5digaC9FgUlUwW8U1VOu3nCGygxIkq2FanE90xZmiJOjPJhhNjkvI0BVGwUUT_MX6Lhup0_jiA_DxXhhRIE29SWnlqIAjKGQ',
    highlights: [
      'Prime Vengaivasal residential layout surrounded by independent luxury villas',
      'Abundant pure potable sweet water table tapped at just 28 feet',
      'Wide 30ft asphalt paved access road with street lighting',
      'Ideal for spacious G+2 villa with private garden and car porch'
    ]
  },
  {
    id: 'plot-2',
    title: '1,800 Sq.Ft Corner Residential Plot',
    location: 'Medavakkam / Vengaivasal Ext.',
    areaSqFt: 1800,
    facing: 'North-East Facing Corner',
    status: 'Available',
    approval: 'DTCP / CMDA Sanctioned',
    roadWidth: 'Dual Road (30ft x 24ft)',
    groundwaterOrAccess: 'EB Poles Installed & Clear Access',
    loanEligibility: 'SBI, HDFC, ICICI, Canara Bank Approved',
    priceNote: '[Contact for Price]',
    estimatedPrice: '₹ 95 Lakhs - 1.10 Cr (approx. guide)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97z_gRfs9qFoxZUmyNOX9qFZqG7GUiNB5eIkKFSiSRrX-oJyXmWwRe1gN5JhpB5Jv-CCiDVlhTd5Jjn9zD6QjEf7SUBs8t1pfeOyKsEUVh6k1wp-yHaqNxeU_aULN725tFE480zTJ3RWFJdi8sJLN1Z5digaC9FgUlUwW8U1VOu3nCGygxIkq2FanE90xZmiJOjPJhhNjkvI0BVGwUUT_MX6Lhup0_jiA_DxXhhRIE29SWnlqIAjKGQ',
    highlights: [
      'Highly auspicious North-East corner orientation with dual street frontage',
      'Connected to Medavakkam High Road and Velachery connectivity corridor',
      'Dedicated electricity poles and storm water culverts already constructed',
      'Perfect dimensions (30ft x 60ft) offering maximum cross-ventilation'
    ]
  },
  {
    id: 'plot-3',
    title: '1,200 Sq.Ft Compact Home Plot',
    location: 'Tambaram-Velachery Corridor',
    areaSqFt: 1200,
    facing: 'North Facing',
    status: 'Booking Open',
    approval: 'CMDA Frame Layout',
    roadWidth: '24 Feet Concrete Road',
    groundwaterOrAccess: 'Gated Residential Colony',
    loanEligibility: 'Nationalized Banks',
    priceNote: '[Contact for Price]',
    estimatedPrice: '₹ 62 Lakhs - 72 Lakhs (approx. guide)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97z_gRfs9qFoxZUmyNOX9qFZqG7GUiNB5eIkKFSiSRrX-oJyXmWwRe1gN5JhpB5Jv-CCiDVlhTd5Jjn9zD6QjEf7SUBs8t1pfeOyKsEUVh6k1wp-yHaqNxeU_aULN725tFE480zTJ3RWFJdi8sJLN1Z5digaC9FgUlUwW8U1VOu3nCGygxIkq2FanE90xZmiJOjPJhhNjkvI0BVGwUUT_MX6Lhup0_jiA_DxXhhRIE29SWnlqIAjKGQ',
    highlights: [
      'Gated secure residential community with compound wall perimeter',
      'Quick transit to Tambaram railway junction, Chromepet, and OMR IT corridor',
      'Immediate construction clearance with ready electricity and water mains',
      'High capital appreciation potential and quick builder-friendly footprint'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Villa Turnkey Delivery',
    category: 'Civil Construction',
    subtitle: 'Structural civil framework & architectural finishes',
    description: 'Completed contemporary luxury villa in Chennai featuring clean geometric lines, glass railings, contemporary stone cladding, exposed teak louvers, and warm ambient illumination.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsS6t6yEgt26jElZ34InJmUj6MxMB31zV4_9AEXbE8Z7DmlKqwDyFFRtGmf5pkKbKs0z7CZ3BbuATA9nwAz4vcpSvcRs1Of7vyQ1hxmggEMpuop5qZJDy_SDBGI8ZIT4eL0ardcbbjxxDS2btGIOm6-ITv0i18g-OGDcd9QuFbEygvnKZ99CSuGpwveMcm8Wka2RxNCwq1fmk3ZLi6x9kF-GXnQywzwnCNWKpvpxYGIadZcy4yg8c1CA',
    tag: 'Illustrative Work Sample'
  },
  {
    id: 'gal-2',
    title: 'Site Supervision & RCC Casting',
    category: 'Civil Construction',
    subtitle: 'Precision structural framing and quality checks',
    description: 'Balaji R and civil engineering crew reviewing blueprints on site, conducting slump tests, checking reinforcement rebar spacing, and monitoring slab casting.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1NXWsBtIxidXLppETwjKBS8Gs4fcjPgK15h0nhG3_3BO1-daFZcBz9I5dJJnL11ls4Vf90YiEVAJJ_Ne65eEqJ4x2uxP_HWR9YyNM-H--nOG6jE8ntmgGKmqzqzShzHbO6L8715_3ui_S0HvXNq0BEJPS-2cCRDbrKWdT9UNiNf9WUwyY94zlqupe3KwrsGB0AoJM5vAxXbSVZHT0yC5e7pis5aTvGLo4-y9LiIRwmygEb-rmH280kw',
    tag: 'Illustrative Work Sample'
  },
  {
    id: 'gal-3',
    title: 'Demarcated Residential Layout',
    category: 'Plot Demarcation',
    subtitle: 'Vengaivasal clear survey stone installation',
    description: 'Hand-measured survey pegs and permanent concrete boundary markers aligned with municipal DTCP approved drawings for clear boundary clarity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD97z_gRfs9qFoxZUmyNOX9qFZqG7GUiNB5eIkKFSiSRrX-oJyXmWwRe1gN5JhpB5Jv-CCiDVlhTd5Jjn9zD6QjEf7SUBs8t1pfeOyKsEUVh6k1wp-yHaqNxeU_aULN725tFE480zTJ3RWFJdi8sJLN1Z5digaC9FgUlUwW8U1VOu3nCGygxIkq2FanE90xZmiJOjPJhhNjkvI0BVGwUUT_MX6Lhup0_jiA_DxXhhRIE29SWnlqIAjKGQ',
    tag: 'Illustrative Work Sample'
  },
  {
    id: 'gal-4',
    title: 'Interior Emulsion Finishing',
    category: 'Painting & Finish',
    subtitle: '3-coat putty prep and architectural paint',
    description: 'Flawless smooth wall putty surface sanding, anti-fungal primer coat, and double roller-applied royal luxury emulsion with razor-sharp ceiling line masking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsGmQtIPmSNDUnVIE1-T43FKz5clCQrUxAInQaQ6MFydAVmAoFlX0QQ3EHWG-0OhasBxSrvIw1_gJzp3tEmFcwQ79OJw1iH58F7PUnHqGsdxouuHXGFiaOt5W7279iVdCBBWyr6UU5piraWd70HmWs7_sXexBW4i6UlbBINxsrXzUlGs6_HywabCJVnUh7qJQp-MdrrsEUKUncbF2cBjqagSX-UC6LIgVgMw9XjmsQgO-Ofhgfr-lImQ',
    tag: 'Illustrative Work Sample'
  },
  {
    id: 'gal-5',
    title: 'Heavy Electrification & Conduits',
    category: 'Electrical Works',
    subtitle: 'Fire-retardant wiring and safety earthing',
    description: 'Concealed ISI-certified PVC conduit network, heavy copper phase wiring, modular metal gang boxes, MCB distribution panel, and copper plate earthing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC24niseNBqsEgmjyFiCFHm9EC9j6KDdavot2ywNcV926oyB2TYY4yzUzCalKjO-XsFh_A0Qrtk0znMq9_30ShB7b1kcH_yg3WxjVJNmXb2O9_U__IKu3p0AsnylX91zDNJY5_Z7FbsIzIiffcalQeKN3HycIJiO5lhzwVx8sJmcZV5x0tVRK7n0lDf_uLhERd2dfwa-cEpSXerZrK7KC1lV1lNJwvkWMfmbwPwveshyBgFukmV5EJCBg',
    tag: 'Illustrative Work Sample'
  },
  {
    id: 'gal-6',
    title: 'Architectural Facade Illumination',
    category: 'Electrical Works',
    subtitle: 'Weatherproof exterior lighting execution',
    description: 'IP67 exterior LED uplighting, warm soffit perimeter strips, garden pathway bollards, and automated twilight timer integration for dramatic night presence.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2MZ-OGL8TGTh8-dq7fyn3boPmqY80pLoEiBxXgRNZg9qd0n5FOMXSgK6yR1_1uuqLShhMQnQqWt3xNrJ1-jX_eDqEL7MGjjtMrt09lSNkIZTR0tqJAAigEQug9LdiV9r5IE-6RD4LFY2Ug9074nbcMUq59-4zQmT2C1-hkiFMWzhDDER4ZRf3YsMQedfXtTU-oDYYLtqS_1wPfojYYOxyzDv2X9PLnhTmhEXx0CCRgYfDCkqmeWa69Q',
    tag: 'Illustrative Work Sample'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: 'hub',
    title: 'All 4 Services Under One Roof',
    subtitle: 'ZERO INTER-VENDOR CONFLICT',
    description: 'No juggling separate sub-contractors for land, civil, paint, and electrical. One synchronized team manages every dependency without delays.'
  },
  {
    icon: 'support_agent',
    title: 'Direct Owner Supervision',
    subtitle: 'DIRECT PROPRIETOR ACCESS',
    description: 'Direct access to Balaji R for prompt updates and zero middlemen. Speak straight to the person responsible for the actual concrete pour.'
  },
  {
    icon: 'high_quality',
    title: 'Quality Materials & Workmanship',
    subtitle: 'DOCUMENTED SPECIFICATIONS',
    description: 'Strict adherence to certified cement grades, high-grade steel, copper wiring standards, and branded paint finishes without compromise.'
  },
  {
    icon: 'schedule',
    title: 'Coordinated Timelines & Milestones',
    subtitle: 'PHASE-WISE CLEARANCE',
    description: 'Transparent phase-wise execution with milestone-linked progress reporting. You pay as work completes satisfactorily on site.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discuss Your Requirements',
    description: 'Initial consultation regarding your land preferences, architectural requirements, or individual contracting needs (civil, paint, or electrical).',
    details: ['Land requirement & Vastu orientation briefing', 'Architectural wishlist & floor space discussion', 'Budget boundary & timeline expectation setup']
  },
  {
    step: '02',
    title: 'Planning & Detailed Estimate',
    description: 'Transparent cost breakdown, clear material specifications, schedule of finishes, and unambiguous project scope with milestone stages.',
    details: ['Soil verification and structural drawing sign-off', 'Itemized BOQ (Bill of Quantities) without hidden line items', 'Milestone payment calendar linked to slab/finishing stages']
  },
  {
    step: '03',
    title: 'Execution of Work',
    description: 'Systematic on-site construction, strict safety standards, continuous material grade checks, and direct supervision by Balaji R.',
    details: ['Foundation casting, curing rigor and column alignment', 'Continuous batch testing for cement and steel grades', 'Concealed electrical conduit and plumbing piping fitout']
  },
  {
    step: '04',
    title: 'Final Inspection & Handover',
    description: 'Meticulous quality punch-list check, deep site cleaning, functional wiring testing, and smooth key handover with complete documentation.',
    details: ['Multi-point quality audit & electrical load balancing check', 'Complete surface cleaning & paint touchup', 'Handover file: Structural warranty, layout drawings & utility keys']
  }
];
