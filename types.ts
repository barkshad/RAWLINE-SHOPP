
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

export interface Note {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SiteContent {
  brand: {
    name: string;
    subBrand: string;
    location: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    manifestoQuote: string;
  };
  philosophy: {
    title: string;
    documentId: string;
    mainParagraph: string;
    sec1Title: string;
    sec1Content: string;
    sec2Content: string;
    quote: string;
    footerTitle: string;
    footerContent: string;
  };
  process: {
    title: string;
    documentId: string;
    steps: ProcessStep[];
  };
  notes: {
    title: string;
    documentId: string;
    entries: Note[];
  };
}
