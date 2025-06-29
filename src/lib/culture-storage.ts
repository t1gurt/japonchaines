/**
 * Utilities pour la gestion du localStorage pour l'expérience culturelle
 * Gère la persistance des progrès utilisateur selon le plan update.md
 */

import { 
  UserProgress, 
  CultureLevel, 
  Mission, 
  CompletedMission, 
  RelationshipProgress,
  ProgressStats,
  MissionType,
  CULTURE_LEVEL_THRESHOLDS,
  MISSION_POINTS 
} from '@/types/culture';

const STORAGE_KEY = 'japonchaines-culture-progress';

/**
 * Obtient les progrès de l'utilisateur depuis le localStorage
 */
export function getUserProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return getDefaultProgress();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return getDefaultProgress();
    }

    const parsed = JSON.parse(stored) as UserProgress;
    
    // Validation basique de la structure
    if (!parsed.visitedChains || !parsed.completedMissions) {
      return getDefaultProgress();
    }

    return parsed;
  } catch (error) {
    console.error('Erreur lors de la lecture des progrès:', error);
    return getDefaultProgress();
  }
}

/**
 * Sauvegarde les progrès de l'utilisateur dans le localStorage
 */
export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des progrès:', error);
  }
}

/**
 * Retourne les progrès par défaut pour un nouvel utilisateur
 */
export function getDefaultProgress(): UserProgress {
  return {
    visitedChains: [],
    completedMissions: [],
    cultureLevel: 'beginner',
    favoriteChains: [],
    relationshipProgress: [],
    totalPoints: 0,
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  };
}

/**
 * Marque une mission comme complétée
 */
export function completeMission(missionId: string, chainId: string, missionType: MissionType, notes?: string): void {
  const progress = getUserProgress();
  
  // Vérifier si la mission n'est pas déjà complétée
  const alreadyCompleted = progress.completedMissions.some(
    mission => mission.chainId === chainId && missionId === mission.chainId + '-' + missionType
  );
  
  if (alreadyCompleted) {
    return;
  }

  const points = MISSION_POINTS[missionType];
  
  const completedMission: CompletedMission = {
    chainId,
    missionType,
    completedDate: new Date().toISOString(),
    notes,
    points
  };

  progress.completedMissions.push(completedMission);
  progress.totalPoints += points;
  
  // Ajouter la chaîne aux chaînes visitées si pas déjà présente
  if (!progress.visitedChains.includes(chainId)) {
    progress.visitedChains.push(chainId);
  }

  // Mettre à jour le niveau culturel
  progress.cultureLevel = calculateCultureLevel(progress.totalPoints);

  saveUserProgress(progress);
}

/**
 * Ajoute une visite à une chaîne et met à jour les relations
 */
export function addChainVisit(chainId: string, interaction?: {
  description: string;
  japaneseUsed: boolean;
  staffResponse: 'cold' | 'neutral' | 'warm' | 'friendly';
  notes?: string;
}): void {
  const progress = getUserProgress();
  
  // Trouver ou créer le progrès relationnel pour cette chaîne
  let relationshipProgress = progress.relationshipProgress.find(r => r.chainId === chainId);
  
  if (!relationshipProgress) {
    relationshipProgress = {
      chainId,
      visitCount: 0,
      relationshipLevel: 'stranger',
      staffInteractions: []
    };
    progress.relationshipProgress.push(relationshipProgress);
  }

  // Incrémenter le nombre de visites
  relationshipProgress.visitCount++;
  
  // Ajouter l'interaction si fournie
  if (interaction) {
    relationshipProgress.staffInteractions.push({
      date: new Date().toISOString(),
      interaction: interaction.description,
      japaneseUsed: interaction.japaneseUsed,
      staffResponse: interaction.staffResponse,
      notes: interaction.notes
    });
  }

  // Mettre à jour le niveau de relation
  relationshipProgress.relationshipLevel = calculateRelationshipLevel(relationshipProgress.visitCount);

  // Ajouter la chaîne aux chaînes visitées si pas déjà présente
  if (!progress.visitedChains.includes(chainId)) {
    progress.visitedChains.push(chainId);
  }

  saveUserProgress(progress);
}

/**
 * Calcule le niveau culturel basé sur les points totaux
 */
export function calculateCultureLevel(totalPoints: number): CultureLevel {
  if (totalPoints >= CULTURE_LEVEL_THRESHOLDS.advanced.min) {
    return 'advanced';
  } else if (totalPoints >= CULTURE_LEVEL_THRESHOLDS.intermediate.min) {
    return 'intermediate';
  } else {
    return 'beginner';
  }
}

/**
 * Calcule le niveau de relation basé sur le nombre de visites
 */
export function calculateRelationshipLevel(visitCount: number): RelationshipProgress['relationshipLevel'] {
  if (visitCount >= 15) {
    return 'close';
  } else if (visitCount >= 8) {
    return 'friendly';
  } else if (visitCount >= 3) {
    return 'recognized';
  } else {
    return 'stranger';
  }
}

/**
 * Calcule les statistiques de progression pour l'affichage
 */
export function calculateProgressStats(totalMissions: number = 50, totalChains: number = 47): ProgressStats {
  const progress = getUserProgress();
  
  const nextLevelThreshold = progress.cultureLevel === 'beginner' 
    ? CULTURE_LEVEL_THRESHOLDS.intermediate.min
    : progress.cultureLevel === 'intermediate'
    ? CULTURE_LEVEL_THRESHOLDS.advanced.min
    : CULTURE_LEVEL_THRESHOLDS.advanced.min;

  const currentLevelMin = progress.cultureLevel === 'beginner'
    ? CULTURE_LEVEL_THRESHOLDS.beginner.min
    : progress.cultureLevel === 'intermediate'
    ? CULTURE_LEVEL_THRESHOLDS.intermediate.min
    : CULTURE_LEVEL_THRESHOLDS.advanced.min;

  const nextLevelProgress = progress.cultureLevel === 'advanced' 
    ? 100 
    : ((progress.totalPoints - currentLevelMin) / (nextLevelThreshold - currentLevelMin)) * 100;

  return {
    totalMissions,
    completedMissions: progress.completedMissions.length,
    chainsVisited: progress.visitedChains.length,
    totalChains,
    cultureLevel: progress.cultureLevel,
    nextLevelProgress: Math.min(Math.max(nextLevelProgress, 0), 100),
    totalPoints: progress.totalPoints,
    relationshipCount: progress.relationshipProgress.filter(r => r.relationshipLevel !== 'stranger').length
  };
}

/**
 * Ajoute ou retire une chaîne des favoris
 */
export function toggleFavoriteChain(chainId: string): void {
  const progress = getUserProgress();
  
  const index = progress.favoriteChains.indexOf(chainId);
  if (index > -1) {
    progress.favoriteChains.splice(index, 1);
  } else {
    progress.favoriteChains.push(chainId);
  }

  saveUserProgress(progress);
}

/**
 * Remet à zéro tous les progrès (pour testing ou reset)
 */
export function resetProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Exporte les progrès pour sauvegarde/partage
 */
export function exportProgress(): string {
  const progress = getUserProgress();
  return JSON.stringify(progress, null, 2);
}

/**
 * Importe les progrès depuis une sauvegarde
 */
export function importProgress(progressData: string): boolean {
  try {
    const parsed = JSON.parse(progressData) as UserProgress;
    
    // Validation basique
    if (!parsed.visitedChains || !parsed.completedMissions) {
      throw new Error('Format de données invalide');
    }

    saveUserProgress(parsed);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'importation:', error);
    return false;
  }
}

/**
 * Hook personnalisé pour réagir aux changements de progrès
 */
export function useProgressListener(callback: (progress: UserProgress) => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      try {
        const newProgress = JSON.parse(e.newValue) as UserProgress;
        callback(newProgress);
      } catch (error) {
        console.error('Erreur lors de la lecture du changement de progression:', error);
      }
    }
  };

  window.addEventListener('storage', handleStorageChange);
  
  // Cleanup serait fait dans un useEffect dans un vrai hook React
  return () => window.removeEventListener('storage', handleStorageChange);
}
