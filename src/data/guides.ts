import { ArrowLeft, Book, Utensils, Heart, Globe, ChefHat, HelpCircle, Brain, Wine, LucideIcon } from 'lucide-react';

export interface Guide {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: string;
    available: boolean;
    highlights: string[];
}

export const guides: Guide[] = [
    {
        id: 'comprendre-culture-japonaise',
        title: 'Comprendre la Culture Japonaise',
        subtitle: 'Guide complet de la mentalité japonaise',
        description: 'Analyse approfondie de l\'esprit japonais au-delà des stéréotypes. Décryptez les concepts de honne/tatemae, uchi/soto et la communication indirecte pour une compréhension authentique.',
        icon: Brain,
        color: 'purple',
        available: true,
        highlights: [
            'Fondements historiques et géographiques',
            'Concepts clés : honne/tatemae, uchi/soto',
            'Psychologie sociale japonaise',
            'Communication interculturelle efficace'
        ]
    },
    {
        id: 'comment-choisir-restaurant-japonais',
        title: 'Comment Choisir un Restaurant Japonais',
        subtitle: 'Guide de sélection selon votre situation',
        description: 'Conseils pratiques pour choisir le restaurant japonais idéal selon votre budget, groupe et préférences alimentaires.',
        icon: HelpCircle,
        color: 'orange',
        available: true,
        highlights: [
            'Facteurs de décision clés',
            'Types de restaurants par difficulté',
            'Conseils budget et recommandations',
            'Éviter les pièges touristiques'
        ]
    },
    {
        id: 'comment-commander',
        title: 'Comment Commander',
        subtitle: 'Maîtrisez tous les systèmes de commande japonais',
        description: 'Guide complet des distributeurs automatiques, écrans tactiles, QR codes et phrases utiles pour commander sans stress.',
        icon: Utensils,
        color: 'red',
        available: true,
        highlights: [
            'Distributeurs de tickets étape par étape',
            'Écrans tactiles interactifs',
            'Commande par QR code',
            'Phrases essentielles en 3 langues'
        ]
    },
    {
        id: 'restaurant-sushi',
        title: 'Guide des Restaurants Sushi',
        subtitle: 'Choisissez le restaurant sushi parfait',
        description: 'Guide complet pour naviguer dans l\'univers des restaurants sushi japonais : kaiten-zushi, sushi-ya traditionnels et chaînes modernes.',
        icon: ChefHat,
        color: 'blue',
        available: true,
        highlights: [
            'Comparaison des types de restaurants',
            'Top 3 des chaînes de sushi',
            'Conseils de choix par situation',
            'Guide des prix et budgets'
        ]
    },
    {
        id: 'regimes-alimentaires',
        title: 'Guide des Régimes Alimentaires',
        subtitle: 'Mangez selon vos besoins et convictions',
        description: 'Informations détaillées pour végétariens, vegans, halal et allergies alimentaires dans chaque chaîne.',
        icon: Heart,
        color: 'green',
        available: true,
        highlights: [
            'Options végétariennes et vegan',
            'Aliments halal et sans porc',
            'Guide des allergènes',
            'Conseils par chaîne de restaurant'
        ]
    },
    {
        id: 'culture-etiquette',
        title: 'Culture & Étiquette',
        subtitle: 'Découvrez les codes culturels japonais',
        description: 'Apprenez les bonnes manières, le vocabulaire culinaire et les traditions pour une expérience authentique.',
        icon: Globe,
        color: 'blue',
        available: true,
        highlights: [
            'Glossaire de la cuisine japonaise',
            'Étiquette au restaurant',
            'Traditions culinaires',
            'Expressions courantes'
        ]
    },
    {
        id: 'boissons-japonaises',
        title: 'Guide des Boissons Japonaises',
        subtitle: 'L\'art de boire au Japon',
        description: 'Guide complet des boissons japonaises : saké, shochu, whisky japonais, bière. Culture, étiquette et accords parfaits pour une expérience authentique.',
        icon: Wine,
        color: 'purple',
        available: true,
        highlights: [
            'Saké : classifications et températures',
            'Shochu et whisky japonais',
            'Étiquette et culture du service',
            'Accords mets-boissons experts'
        ]
    },
    {
        id: 'articles',
        title: 'Articles de Fond',
        subtitle: 'Plongez dans la culture culinaire japonaise',
        description: 'Articles approfondis sur l\'histoire des plats, comparaisons entre chaînes et secrets de la gastronomie japonaise.',
        icon: Book,
        color: 'purple',
        available: true,
        highlights: [
            'Histoire du ramen',
            'Secrets du dashi',
            'Comparatif des chaînes gyūdon',
            'Évolution de la cuisine japonaise'
        ]
    }
];
