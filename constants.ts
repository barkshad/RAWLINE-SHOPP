
import { Product } from './types';

export const COLORS = {
  clay: '#D4C7B0',
  blueprint: '#2D3E50',
  sage: '#8A9A8A',
  stone: '#A8A8A8',
  ink: '#1A1A1A'
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'RL-V01',
    name: '70s Belgian Work Shell',
    category: 'Outerwear',
    price: 185,
    description: 'Found in Brussels. Heavy-duty sun-faded canvas with original patina.',
    editorial: `The Belgian Work Shell is a testament to durability. Recovered from a workshop outside Brussels, its sun-bleached shoulders and reinforced elbows speak of decades of utility. We've restyled it with a modern crop to emphasize the boxy 70s geometry, bringing historical workwear into a contemporary silhouette.`,
    fabric: 'Aged Heavy Cotton Canvas. Original buttons retained.',
    fit: 'Boxy 70s Utility Fit. Re-tailored for a modern modular drape.',
    images: ['https://picsum.photos/1000/1500?random=110', 'https://picsum.photos/1000/1500?random=111'],
    status: 'published',
    createdAt: Date.now()
  },
  {
    id: 'RL-V02',
    name: '90s Pleated Archive Trouser',
    category: 'Bottoms',
    price: 145,
    description: 'Japanese office-wear discovery. Deep pleats and high-waist architectural cut.',
    editorial: `Discovered in a small basement archive in Tokyo. This trouser represents the peak of 90s minimalist corporate structure. The deep double pleats create an architectural volume that is nearly impossible to find in modern fast-fashion. It has been steam-restored and styled for a relaxed, high-fashion context.`,
    fabric: 'Fine Wool Gabardine. High-twist yarn for permanent drape.',
    fit: 'High-rise, wide-leg architecture. Original structural pleats.',
    images: ['https://picsum.photos/1000/1500?random=120', 'https://picsum.photos/1000/1500?random=121'],
    status: 'published',
    createdAt: Date.now() - 86400000
  },
  {
    id: 'RL-V03',
    name: 'Industrial Heavy Knit',
    category: 'Tops',
    price: 120,
    description: 'Soviet-era naval knitwear. Extremely dense weave, styled for modern layering.',
    editorial: `There is a weight to historical knits that modern machinery has forgotten. Found in Berlin, this heavy wool piece was originally intended for nautical thermal protection. We’ve identified it for its unique high-neck structure and restyled it as a foundational layer for the slow-fashion wardrobe.`,
    fabric: '100% Boiled Virgin Wool. High-density interlock.',
    fit: 'Structured close-to-body fit. Weighted hem and cuffs.',
    images: ['https://picsum.photos/1000/1500?random=130', 'https://picsum.photos/1000/1500?random=131'],
    status: 'published',
    createdAt: Date.now() - 172800000
  },
  {
    id: 'RL-V04',
    name: 'Found Leather Modular Vest',
    category: 'Outerwear',
    price: 210,
    description: 'Restructured from a found 80s biker jacket. Zero-waste restoration.',
    editorial: `A rescue project. We identified an 80s motorcycle jacket with compromised sleeves and restructured the core into a modular vest. By retaining the original industrial hardware and character-heavy leather, we extend the life of a high-quality material that would otherwise be discarded.`,
    fabric: 'Aged Full-Grain Cowhide. Restored with natural oils.',
    fit: 'Cropped modular fit. Original hardware architecture.',
    images: ['https://picsum.photos/1000/1500?random=140', 'https://picsum.photos/1000/1500?random=141'],
    status: 'published',
    createdAt: Date.now() - 259200000
  }
];

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
