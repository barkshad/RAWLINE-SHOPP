
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  editorial: string;
  fabric: string;
  fit: string;
  images: string[];
  status: 'draft' | 'published';
  createdAt: number;
}

export interface SiteContent {
  homePhilosophy: string;
  aboutEssay: string;
  founderStory: string;
}
