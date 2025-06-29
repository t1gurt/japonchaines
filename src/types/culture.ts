/**
 * Types pour le système d'expérience culturelle japonaise
 * Inspiré du plan détaillé dans update.md
 */

export type CultureLevel = 'beginner' | 'intermediate' | 'advanced';
export type MissionType = 'basic' | 'cultural' | 'advanced' | 'relationship';
export type RelationshipLevel = 'stranger' | 'recognized' | 'friendly' | 'close';

export interface UserProgress {
  visitedChains: string[];           // Chaînes visitées
  completedMissions: CompletedMission[]; // Missions accomplies
  cultureLevel: CultureLevel;        // Niveau culturel actuel
  favoriteChains: string[];         // Chaînes favorites
  relationshipProgress: RelationshipProgress[]; // Progrès relationnel
  totalPoints: number;               // Points culturels totaux
  createdAt: string;                 // Date de création du profil
  lastUpdated: string;               // Dernière mise à jour
}

export interface CompletedMission {
  chainId: string;                   // ID de la chaîne (ex: "yoshinoya")
  missionType: MissionType;          // Type de mission
  completedDate: string;             // Date de completion (ISO string)
  notes?: string;                    // Notes optionnelles de l'utilisateur
  points: number;                    // Points gagnés
}

export interface Mission {
  id: string;                        // ID unique de la mission
  chainId: string;                   // Chaîne associée
  title: string;                     // Titre français
  titleJapanese?: string;            // Titre en japonais
  description: string;               // Description détaillée
  culturalContext: string;           // Contexte culturel
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;             // Temps estimé en minutes
  rewards: string[];                 // Récompenses/apprentissages
  requiredLevel: CultureLevel;       // Niveau requis
  points: number;                    // Points attribués
  prerequisites?: string[];          // Missions prérequises
}

export interface PhraseCard {
  id: string;                        // ID unique
  japanese: string;                  // Phrase en japonais
  hiragana?: string;                 // En hiragana (si applicable)
  romaji: string;                    // Transcription romaji
  french: string;                    // Traduction française
  context: string;                   // Contexte d'utilisation
  culturalNote?: string;             // Note culturelle
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  audioUrl?: string;                 // URL audio (future)
}

export interface RelationshipProgress {
  chainId: string;                   // ID de la chaîne
  visitCount: number;                // Nombre de visites
  relationshipLevel: RelationshipLevel; // Niveau de relation
  staffInteractions: StaffInteraction[]; // Interactions avec le staff
  favoriteStaff?: string;            // Staff préféré (nom ou description)
  personalNotes?: string;            // Notes personnelles
}

export interface StaffInteraction {
  date: string;                      // Date de l'interaction (ISO)
  interaction: string;               // Description de l'interaction
  japaneseUsed: boolean;             // Est-ce que le japonais a été utilisé
  staffResponse: 'cold' | 'neutral' | 'warm' | 'friendly'; // Réaction du staff
  notes?: string;                    // Notes additionnelles
}

export interface CultureExperience {
  id: string;                        // ID unique
  chainCategory: string;             // Catégorie (gyudon, ramen, etc.)
  culturalSignificance: string;      // Signification culturelle
  traditionalAspects: string[];      // Aspects traditionnels
  modernEvolution: string[];         // Évolution moderne
  etiquetteRules: string[];          // Règles d'étiquette
  languageTips: PhraseCard[];        // Conseils linguistiques
}

export interface ProgressStats {
  totalMissions: number;             // Missions totales disponibles
  completedMissions: number;         // Missions complétées
  chainsVisited: number;             // Chaînes visitées
  totalChains: number;               // Total chaînes disponibles
  cultureLevel: CultureLevel;        // Niveau actuel
  nextLevelProgress: number;         // Progrès vers niveau suivant (0-100)
  totalPoints: number;               // Points totaux
  relationshipCount: number;         // Nombre de relations développées
}

// Constantes pour les seuils de niveau
export const CULTURE_LEVEL_THRESHOLDS = {
  beginner: { min: 0, max: 500 },
  intermediate: { min: 501, max: 1500 },
  advanced: { min: 1501, max: Infinity }
};

// Points attribués par type de mission
export const MISSION_POINTS = {
  basic: 50,
  cultural: 100,
  advanced: 200,
  relationship: 150
};

// Seuils pour les niveaux de relation
export const RELATIONSHIP_THRESHOLDS = {
  stranger: { visits: 0 },
  recognized: { visits: 3 },
  friendly: { visits: 8 },
  close: { visits: 15 }
};
