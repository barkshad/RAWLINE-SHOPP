
import { Product } from './types';

export const COLORS = {
  parchment: '#F2EDE4', /* Tea-stained paper */
  clay: '#B09E80',     /* Sun-dried river mud */
  mineral: '#2D3E50',  /* Archival vintage indigo */
  moss: '#4A5649',     /* Aged safari canvas */
  ochre: '#8E4E35',    /* Nairobi red soil */
  ink: '#1A1816',      /* 1920s typewriter ink */
  sepia: '#5E4B3C'     /* Oxidized photographic silver */
};

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
  },
  {
    id: 'RL-ARCH-003',
    name: 'Colonial Era Naval Knit',
    category: 'Tops',
    price: 950,
    description: 'Recovered from Mombasa naval stores. Heavy-density virgin wool with hand-linked neck restoration.',
    editorial: `Recovered from the coastal archives of Mombasa, this heavy naval knit represents a lost era of textile density. The Maison has hand-restored the collar and cuffs, maintaining the original 'salt-worn' character while ensuring the structural geometry meets modern luxury standards.`,
    fabric: '100% Boiled Virgin Wool. Hand-linked restoration.',
    fit: 'Structured close-to-body vintage silhouette.',
    images: ['https://picsum.photos/1000/1500?random=430', 'https://picsum.photos/1000/1500?random=431'],
    status: 'published',
    createdAt: Date.now() - 172800000
  },
  {
    id: 'RL-ARCH-004',
    name: 'Post-Independence Cuir',
    category: 'Outerwear',
    price: 3200,
    description: 'Deconstructed 1960s hide. Restructured using Nairobi-architectural pattern logic.',
    editorial: `A study in historical resilience. We identified this 1960s leather hide in a private estate in Karen. Its seasoned patina tells a story of Kenya's early independence era. We have deconstructed the original garment and re-stated its purpose as a modular vest, utilizing zero-waste patterns to preserve every inch of the archival leather.`,
    fabric: '100% Full-Grain Archival Hide. Natural Shea Butter finish.',
    fit: 'Cropped Modular Architecture. Original industrial hardware.',
    images: ['https://picsum.photos/1000/1500?random=440', 'https://picsum.photos/1000/1500?random=441'],
    status: 'published',
    createdAt: Date.now() - 259200000
  }
];

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
