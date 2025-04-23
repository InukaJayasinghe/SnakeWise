// Type definitions for the snake information website

export type VenomLevel = 'Non-venomous' | 'Mildly venomous' | 'Moderately venomous' | 'Highly venomous' | 'Deadly venomous';

export interface Region {
  name: string;
  countries: string[];
}

export interface Snake {
  id: string;
  commonName: string;
  scientificName: string;
  venomLevel: VenomLevel;
  dangerLevel: 1 | 2 | 3 | 4 | 5; // 1 = harmless, 5 = extremely dangerous
  regions: string[]; // References to region names
  habitat: string[];
  description: string;
  appearance: string;
  behavior: string;
  imageUrl: string;
  thumbnailUrl: string;
  emergencyInfo: string;
  firstAid: string[];
}

export interface EmergencyContact {
  country: string;
  emergencyNumber: string;
  poisonControlCenter?: string;
  additionalInfo?: string;
}

export type FilterOptions = {
  searchTerm: string;
  region: string;
  venomLevel: VenomLevel | '';
};