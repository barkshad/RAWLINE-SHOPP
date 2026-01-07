
import { 
  collection, 
  getDocs, 
  setDoc, 
  doc, 
  getDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from "firebase/firestore";
import { db } from "./firebase";
import { Product, SiteContent } from "../types";
import { INITIAL_SITE_CONTENT } from "../constants";

const PRODUCTS_COLLECTION = "products";
const CONTENT_COLLECTION = "site_content";
const CONTENT_DOC_ID = "main";

export const fetchProducts = async (): Promise<Product[]> => {
  const q = query(collection(db, PRODUCTS_COLLECTION), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Product));
};

export const saveProduct = async (product: Product): Promise<void> => {
  await setDoc(doc(db, PRODUCTS_COLLECTION, product.id), product);
};

export const removeProduct = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
};

export const fetchSiteContent = async (): Promise<SiteContent> => {
  const docRef = doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as SiteContent;
  } else {
    // Initialize with defaults if empty
    await setDoc(docRef, INITIAL_SITE_CONTENT);
    return INITIAL_SITE_CONTENT;
  }
};

export const saveSiteContent = async (content: SiteContent): Promise<void> => {
  await setDoc(doc(db, CONTENT_COLLECTION, CONTENT_DOC_ID), content);
};
