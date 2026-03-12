/**
 * CMS Schema Definition — Lalane Dental Team
 *
 * This file documents the data structure for future CMS integration.
 * When connecting to Sanity, Strapi, or another headless CMS:
 *
 * 1. Create these content types in the CMS
 * 2. Replace the static imports in each section with API calls
 * 3. Use SWR or React Query for data fetching with caching
 *
 * Example with Sanity:
 *   import { createClient } from '@sanity/client'
 *   const client = createClient({ projectId: 'YOUR_ID', dataset: 'production', apiVersion: '2024-01-01' })
 *   const services = await client.fetch('*[_type == "service"] | order(number asc)')
 */

// ═══════ CONTENT TYPES ═══════

export interface CMS_Service {
  _type: 'service';
  slug: string;           // URL slug
  number: string;         // "01", "02", etc.
  icon: string;           // Unicode icon
  title: string;          // "ORTODONCIA"
  subtitle: string;       // "Alineación de Precisión"
  description: string;    // Short description
  longDescription: string;// Full page description
  details: string[];      // Treatment list
  benefits: string[];     // Benefits list
  faqs: { question: string; answer: string }[];
  category: 'estetica' | 'cirugia' | 'prevencion' | 'diagnostico';
}

export interface CMS_TeamMember {
  _type: 'teamMember';
  name: string;           // "Dr. Alejandro Reyes"
  specialty: string;      // "Director Médico"
  bio: string;            // Short biography
  photo: string;          // Image URL or asset reference
  order: number;          // Display order
}

export interface CMS_Testimonial {
  _type: 'testimonial';
  text: string;           // Review text
  name: string;           // Patient name
  treatment: string;      // "Implantes + Carillas"
  rating: number;         // 1-5
  avatar: string;         // Photo URL
}

export interface CMS_BlogPost {
  _type: 'blogPost';
  slug: string;
  category: string;       // "Estética", "Implantes", etc.
  title: string;
  excerpt: string;
  content: string;        // Rich text / Portable Text
  image: string;
  readTime: string;       // "4 min"
  publishedAt: string;    // ISO date
}

export interface CMS_Insurance {
  _type: 'insurance';
  name: string;           // "ARS Humano"
  type: string;           // "Seguro Médico"
  logo?: string;          // Optional logo asset
}

export interface CMS_FAQ {
  _type: 'faq';
  question: string;
  answer: string;
  category?: string;      // Optional grouping
  order: number;
}

export interface CMS_Promotion {
  _type: 'promotion';
  title: string;          // "PRIMERA CONSULTA GRATIS"
  subtitle: string;
  value: string;          // "RD$3,500"
  ctaText: string;
  disclaimer: string;
  active: boolean;        // Enable/disable promotion
  startDate?: string;
  endDate?: string;
}

export interface CMS_Settings {
  _type: 'siteSettings';
  clinicName: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  hours: { day: string; open: string; close: string }[];
  socialLinks: { platform: string; url: string }[];
  googleMapsUrl: string;
  googleReviewsUrl: string;
}

// ═══════ DATA FETCHING HOOKS (placeholder) ═══════

/**
 * TODO: Implement these hooks when CMS is connected
 *
 * export function useServices() { return useSWR('services', fetchServices) }
 * export function useTeam() { return useSWR('team', fetchTeam) }
 * export function useBlogPosts() { return useSWR('blog', fetchBlogPosts) }
 * export function useTestimonials() { return useSWR('testimonials', fetchTestimonials) }
 * export function useSiteSettings() { return useSWR('settings', fetchSettings) }
 */
