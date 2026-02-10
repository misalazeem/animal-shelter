// ═══════════════════════════════════════════════════════════════════════════
// RANDOM RESCUER - TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

export interface Animal {
  id: string;
  name: string;
  species: 'cat' | 'dog';
  breed?: string;
  age: string;
  ageCategory: 'kitten' | 'young' | 'adult' | 'senior';
  gender: 'male' | 'female';
  weight?: number;
  color: string;
  description: string;
  shortDescription: string;
  personality: string[];
  medicalNeeds?: string[];
  specialNeeds?: string[];
  goodWith: {
    cats: boolean;
    dogs: boolean;
    children: boolean;
  };
  images: string[];
  status: 'available' | 'pending' | 'adopted' | 'fostered';
  featured: boolean;
  adoptionFee: number;
  fosterParent?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialPlatform {
  id: string;
  name: 'facebook' | 'instagram' | 'twitter' | 'tiktok';
  enabled: boolean;
  accessToken?: string;
  pageId?: string;
  autoPost: boolean;
}

export interface SocialPost {
  id: string;
  animalId: string;
  platforms: SocialPlatform['name'][];
  content: string;
  images: string[];
  scheduledFor?: string;
  postedAt?: string;
  status: 'draft' | 'scheduled' | 'posted' | 'failed';
  results?: {
    platform: SocialPlatform['name'];
    success: boolean;
    postId?: string;
    error?: string;
  }[];
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  role: 'admin';
  createdAt: string;
  lastLogin?: string;
}

export interface DonationOption {
  id: string;
  name: string;
  description: string;
  suggestedAmounts: number[];
  icon: string;
}

export interface FosterApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  hasOtherPets: boolean;
  otherPetsDescription?: string;
  housingType: 'house' | 'apartment' | 'condo' | 'other';
  hasYard: boolean;
  experience: string;
  availability: string;
  preferredAnimalType?: 'cat' | 'dog' | 'any';
  specialNeedsOk: boolean;
  additionalInfo?: string;
  status: 'pending' | 'approved' | 'denied';
  submittedAt: string;
}

export interface SiteStats {
  totalAdoptions: number;
  currentFosters: number;
  animalsAvailable: number;
  volunteersActive: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'adopter' | 'foster' | 'volunteer' | 'donor';
  content: string;
  image?: string;
  animalName?: string;
  date: string;
}
