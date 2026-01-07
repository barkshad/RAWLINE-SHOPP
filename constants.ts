
import { Product, SiteContent, GalleryItem } from './types';

export const COLORS = {
  parchment: '#F2EDE4', /* Tea-stained paper */
  clay: '#B09E80',     /* Sun-dried river mud */
  mineral: '#2D3E50',  /* Archival vintage indigo */
  moss: '#4A5649',     /* Aged safari canvas */
  ochre: '#8E4E35',    /* Nairobi red soil */
  ink: '#1A1816',      /* 1920s typewriter ink */
  sepia: '#5E4B3C'     /* Oxidized photographic silver */
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'look-01', image: 'https://picsum.photos/seed/look01/800/1200', title: 'Look 01: Coastal Drift', description: 'Featuring the Mombasa Linen Trouser and a 70s silk shirt find.' },
  { id: 'look-02', image: 'https://picsum.photos/seed/look02/900/1200', title: 'Look 02: Rift Valley Form', description: 'A study in structure with the Gikomba Work Shell.' },
  { id: 'look-03', image: 'https://picsum.photos/seed/look03/800/1000', title: 'Look 03: Urban Archive', description: 'Eastleigh Pleat Archive paired with a deadstock leather harness.' },
  { id: 'look-04', image: 'https://picsum.photos/seed/look04/900/1400', title: 'Look 04: Monochromatic Study', description: 'Layered textures of charcoal and ink-dyed canvas.' },
  { id: 'look-05', image: 'https://picsum.photos/seed/look05/800/1100', title: 'Look 05: The Curator', description: 'A minimalist approach to archival workwear.' },
  { id: 'look-06', image: 'https://picsum.photos/seed/look06/900/1300', title: 'Look 06: Sepia Tones', description: 'Exploring the warmth of ochre and sun-bleached cotton.' },
  { id: 'look-07', image: 'https://picsum.photos/seed/look07/800/1200', title: 'Look 07: Industrial Silhouette', description: 'The intersection of utility and form.' },
  { id: 'look-08', image: 'https://picsum.photos/seed/look08/900/1100', title: 'Look 08: Soft Structure', description: 'Gabardine and silk in a dialogue of movement.' },
  { id: 'look-09', image: 'https://picsum.photos/seed/look09/800/1300', title: 'Look 09: Found Object', description: 'Styling a single, significant archival discovery.' },
  { id: 'look-10', image: 'https://picsum.photos/seed/look10/900/1200', title: 'Look 10: The Long Line', description: 'An emphasis on verticality and drape.' },
  { id: 'look-11', image: 'https://picsum.photos/seed/look11/800/1000', title: 'Look 11: Atelier Study', description: 'An informal studio documentation of a work-in-progress.' },
  { id: 'look-12', image: 'https://picsum.photos/seed/look12/900/1500', title: 'Look 12: Heritage Form', description: 'A direct conversation with a historical Kenyan textile.' },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'RL-ARCH-001',
    name: 'Gikomba Work Shell',
    category: 'Outerwear',
    price: 1650,
    description: 'Found in the deep archives of Gikomba. A 1970s structural shell, re-tailored with architectural padding and sun-bleached patina.',
    editorial: `This study began in the sprawling markets of Gikomba, where we identified a 1970s industrial shell with rare heavy-gauge canvas integrity. The Maison has restructured the shoulders and introduced a basalt-dyed silk lining, bridging the gap between historical labor and Nairobi high-fashion.`,
    fabric: 'Aged Heavy Cotton Canvas / Italian Silk Lining.',
    fit: 'Restored 70s Boxy Fit. Architectural shoulder reconstruction.',
    images: ['https://picsum.photos/1000/1500?random=410', 'https://picsum.photos/1000/1500?random=411'],
    status: 'published',
    createdAt: Date.now()
  },
  {
    id: 'RL-ARCH-002',
    name: 'Eastleigh Pleat Archive',
    category: 'Bottoms',
    price: 1100,
    description: 'A 1990s minimalist trouser discovery from Eastleigh. Permanent triple-pleat restoration and Nairobi-indigo dip.',
    editorial: `A 90s corporate finding from Eastleigh’s garment archives. This trouser features a unique triple-pleat volume that we have permanently set using heat-press technology. The fabric has been over-dyed in our Kilimani studio using traditional Kenyan indigo techniques to deepen the mineral hue.`,
    fabric: 'Wool Gabardine / Organic Indigo Over-dye.',
    fit: 'High-Rise Architectural Wide-Leg. Permanent structural pleats.',
    images: ['https://picsum.photos/1000/1500?random=420', 'https://picsum.photos/1000/1500?random=421'],
    status: 'published',
    createdAt: Date.now() - 86400000
  }
];

export const INITIAL_SITE_CONTENT: SiteContent = {
  brand: {
    name: "RAWLINE",
    subBrand: "MAISON D'ARCHIVE",
    location: "NAIROBI",
    description: "A world-class fashion house and high-luxury investigation into Kenya's historical silhouettes. We identify, rescue, and restructure timeless fits from our heritage for the next generation.",
    heroTitle: "Found & Restored.",
    heroSubtitle: "Timeless fits, restored for the modern archive.",
    heroTagline: "Designed & Styled in Kenya",
    manifestoQuote: "We identify historical excellence and re-state its purpose for the next 50 years. True luxury is the longevity of the found form."
  },
  philosophy: {
    title: "Philosophy of the Found Fit.",
    documentId: "Document 01 — Manifest",
    mainParagraph: "RAWLINE rejects the cycle of mass production. We believe that the world already contains all the beautiful clothing it needs. Our mission is to identify, rescue, and restyle found objects into a modern slow-fashion narrative.",
    sec1Title: "Curation over Creation",
    sec1Content: "To find a 40-year-old garment with perfect structural integrity and a soul earned through use is far more rewarding than making something new. Our registry is a study in longevity.",
    sec2Content: "By thrifting historical fits, we promote a lifestyle that values history, quality, and the environmental necessity of re-use.",
    quote: "The most sustainable garment is the one that already exists.",
    footerTitle: "Curation is our quiet protest.",
    footerContent: "RAWLINE does not participate in the seasonal calendar. We follow the calendar of discovery. We identify historical excellence and style it for today's quiet investigation of form."
  },
  process: {
    title: "Identification Process.",
    documentId: "Document 03 — Methodology",
    steps: [
      {
        id: 'step-1',
        title: 'Step 01 — Identification',
        description: 'We scour deadstock archives and vintage markets for historical silhouettes. We look for structural integrity, material quality, and the "long line"—garments that have already survived for decades.',
        image: 'https://picsum.photos/1000/1500?random=190'
      },
      {
        id: 'step-2',
        title: 'Step 02 — Restoration & Styling',
        description: 'Once found, a piece is steam-restored and its story is documented. We style it for a modern context, proving that a thrifted high-quality fit is more relevant today than any seasonal trend.',
        image: 'https://picsum.photos/1000/1500?random=191'
      }
    ]
  },
  notes: {
    title: "Registry Notes.",
    documentId: "Document 04 — Journal",
    entries: [
      {
        id: 'note-1',
        title: 'On Restraint',
        date: 'OCTOBER 12, 2024',
        content: 'Restraint is the hardest discipline. To leave a hem raw is to admit it is already enough. To leave a seam exposed is to celebrate the labor. We are constantly learning to trust the material to speak for itself.'
      }
    ]
  }
};

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];