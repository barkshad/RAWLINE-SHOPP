
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
    id: 'REF-001',
    name: 'Structural Shell Study',
    category: 'Outerwear',
    price: 480,
    description: 'A study of tension and drape using heavy-gauge unbleached canvas.',
    editorial: `The Structural Shell Study explores the rigidity of form before the human silhouette intervenes. Built from 14oz raw cotton duck, the garment features internal architecture visible through high-contrast blueprint stitching. It is an exploration of the garment as a standalone object.`,
    fabric: '14oz Raw Organic Cotton Duck. Global Organic Textile Standard (GOTS) certified.',
    fit: 'Zero-waste pattern geometry. Oversized architectural silhouette with articulated sleeves.',
    images: ['https://picsum.photos/1000/1500?random=10', 'https://picsum.photos/1000/1500?random=11'],
    status: 'published',
    createdAt: Date.now()
  },
  {
    id: 'REF-002',
    name: 'Draft 04 Trouser',
    category: 'Bottoms',
    price: 295,
    description: 'Minimalist leg geometry with exposed structural bias binding.',
    editorial: `Most design focuses on the exterior. Draft 04 focuses on the interior logic. By exposing the bias binding and utilizing French seams across the entire piece, we've created a trouser that is as considered on the inside as the outside.`,
    fabric: 'Wool-Silk Crepe Deadstock. Sourced from archival Italian mill remnants.',
    fit: 'High-rise, architectural taper. Designed to hold shape through movement.',
    images: ['https://picsum.photos/1000/1500?random=20', 'https://picsum.photos/1000/1500?random=21'],
    status: 'published',
    createdAt: Date.now() - 86400000
  },
  {
    id: 'REF-003',
    name: 'Foundation Jersey',
    category: 'Tops',
    price: 110,
    description: 'Interlocked heavy jersey with overlocked contrast seams.',
    editorial: `The basic tee is often treated as an afterthought. At RAWLINE, it is a foundation. This piece uses a 300gsm interlock jersey that mimics the weight of a light jacket, providing structural integrity to the most basic of forms.`,
    fabric: '300gsm Pima Cotton Interlock. Enzyme-free finish for raw texture.',
    fit: 'Boxy foundation fit. Cropped length with weighted hem.',
    images: ['https://picsum.photos/1000/1500?random=30', 'https://picsum.photos/1000/1500?random=31'],
    status: 'published',
    createdAt: Date.now() - 172800000
  },
  {
    id: 'REF-004',
    name: 'Modular Grid Vest',
    category: 'Outerwear',
    price: 360,
    description: 'Constructed using a modular grid of production offcuts.',
    editorial: `The Modular Grid Vest is built from a strict geometric grid of shearling and leather offcuts, ensuring that no material from the cutting room floor is lost to time. It represents a commitment to zero-waste architectural assembly.`,
    fabric: 'Mixed Origin Leather and Shearling Remnants. Vegetable Tanned.',
    fit: 'Layer-focused fit. Open side seams with industrial webbing closures.',
    images: ['https://picsum.photos/1000/1500?random=40', 'https://picsum.photos/1000/1500?random=41'],
    status: 'published',
    createdAt: Date.now() - 259200000
  }
];

export const CATEGORIES = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'];
