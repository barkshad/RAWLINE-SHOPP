
import { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Canvas Study 01',
    category: 'Outerwear',
    price: 340,
    description: 'A structural exploration of heavy cotton duck.',
    editorial: `Canvas Study 01 originated from a desire to see how a garment behaves before the softening process of industrial washing. We chose a 12oz cotton duck that stands on its own—literally. This jacket is an artifact of the cutting table. It does not hide its seams; it celebrates them. It is meant to be broken in by the wearer, becoming a unique map of their own movements over decades. It is stiff, it is loud, and it is honest.`,
    fabric: '100% Raw Organic Cotton Duck, Unbleached.',
    fit: 'Boxy, oversized silhouette. Dropped shoulders to allow for natural draping of the heavy material.',
    images: ['https://picsum.photos/800/1200?random=1', 'https://picsum.photos/800/1200?random=11'],
    status: 'published',
    createdAt: Date.now()
  },
  {
    id: '2',
    name: 'The First Draft Trouser',
    category: 'Bottoms',
    price: 220,
    description: 'Minimalist trousers with visible construction logic.',
    editorial: `Most trousers aim to conceal the complexity of their construction. The First Draft Trouser does the opposite. We’ve kept the internal bias tape exposed on the hem and utilized a high-contrast topstitch to highlight the structural integrity of the crotch and seat. It is a garment that explains itself as you wear it. Designed for those who appreciate the 'how' as much as the 'what'.`,
    fabric: 'Deadstock Wool Blend, sourced from a decommissioned mill in Northern Italy.',
    fit: 'Straight leg, high rise. Designed to sit at the natural waist without the need for a belt, though loops are provided for utility.',
    images: ['https://picsum.photos/800/1200?random=2', 'https://picsum.photos/800/1200?random=22'],
    status: 'published',
    createdAt: Date.now() - 100000
  },
  {
    id: '3',
    name: 'Muslin Mock-Up Tee',
    category: 'Tops',
    price: 85,
    description: 'A heavy jersey tee inspired by fitting room prototypes.',
    editorial: `In the design studio, the 'muslin' is the moment of truth. It is where the 2D sketch meets the 3D body. This tee captures that specific aesthetic of the prototype. The edges are serged but left without a traditional folded hem, allowing for a slight, intentional roll over time. It is a heavy-weight jersey that feels more like a tool than a luxury item.`,
    fabric: '280gsm Heavyweight Combed Cotton.',
    fit: 'Traditional relaxed fit. True to size.',
    images: ['https://picsum.photos/800/1200?random=3', 'https://picsum.photos/800/1200?random=33'],
    status: 'published',
    createdAt: Date.now() - 200000
  },
  {
    id: '4',
    name: 'Shearling Remnant Vest',
    category: 'Outerwear',
    price: 450,
    description: 'Constructed from archival production scraps.',
    editorial: `Waste is merely an idea that hasn't found its purpose yet. This vest is composed of varying textures of shearling remnants. Each piece is hand-selected and stitched together using a zigzag industrial machine, creating a patchwork that is entirely unique to every garment. It is a study in modularity and resourcefulness.`,
    fabric: 'Mixed Origin Shearling Scraps, Vegetable Tanned Leather Trim.',
    fit: 'Short, cropped fit intended for layering over heavy knits.',
    images: ['https://picsum.photos/800/1200?random=4', 'https://picsum.photos/800/1200?random=44'],
    status: 'published',
    createdAt: Date.now() - 300000
  }
];

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
