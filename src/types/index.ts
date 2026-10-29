export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
  deliverables?: string[];
  icon: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  clientType: string;
  summary: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  beforeImage?: string;
  afterImage?: string;
  completionDate?: string;
  servicesProvided?: string[];
  keyHighlights?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarColor: string;
  stars?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  fullBio?: string;
  image: string;
  imagePosition?: string;
  qualifications?: string[];
  expertise?: string[];
  experience?: string;
  responsibilities?: string[];
  achievements?: string[];
}

export interface FaqItem {
  category: 'general' | 'construction' | 'interior' | 'renovation' | 'property' | 'paint' | 'payments' | 'support';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}
