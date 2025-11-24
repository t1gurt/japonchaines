import Link from 'next/link';
import { Metadata } from 'next';
import CategoryViewTracker from '@/components/CategoryViewTracker';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import ResourceGrid from '@/components/ResourceGrid';
import ResourceCard from '@/components/ResourceCard';

const ramenChains = [
  {
    name: "Ichiran",
    japanese: "一蘭",
    description: "Célèbre pour ses ramen tonkotsu et son système de commande unique avec box individuels.",
    specialties: ["Tonkotsu Ramen", "Ramen sans ail", "Ramen extra épicé"],
    priceRange: "¥800-1200",
    orderingMethod: "Formulaire papier personnalisé",
    vegetarianOptions: "Non disponibles",
    uniqueFeatures: ["Système 'Ajimi-Shūchū'", "Box individuels", "Commande sans interaction"],
    founded: "1960",
    href: "/chaines/ichiran"
  },
  {
    name: "Ippudo",
    japanese: "一風堂",
    description: "Chaîne haut de gamme spécialisée dans les ramen tonkotsu de Hakata, fondée à Fukuoka.",
    specialties: ["Shiromaru Motoaji", "Akamaru Shinaji", "Karaka-men"],
    priceRange: "¥900-1500",
    orderingMethod: "Commande au serveur",
    vegetarianOptions: "Ramen végétarien disponible",
    uniqueFeatures: ["Expansion internationale", "Design moderne", "Qualité premium"],
    founded: "1985",
    href: "/chaines/ippudo"
  },
  {
    name: "Tenkaippin",
    japanese: "天下一品",
    description: "Connue pour son bouillon kotteri (épais et riche) unique à base d'os de porc et légumes.",
    specialties: ["Kotteri Ramen", "Assari Ramen", "Karaage"],
    priceRange: "¥700-1100",
    orderingMethod: "Distributeur automatique",
    vegetarianOptions: "Limitées",
    uniqueFeatures: ["Bouillon 'kotteri' signature", "Fans dévoués", "Texture unique"],
    founded: "1971",
    href: "/chaines/tenkaippin"
  }
];

const ramenTypes = [
  {
    name: "Tonkotsu Ramen",
    japanese: "豚骨ラーメン",
    description: "Bouillon blanc et crémeux à base d'os de porc mijotés pendant des heures",
    region: "Kyushu (Fukuoka)",
    characteristics: "Riche, crémeux, saveur intense",
    toppings: "Chashu, œuf mariné, oignons verts, algues nori",
    history: "Né en 1947 à Kurume par accident, quand un cuisinier a oublié d'éteindre le feu sous les os de porc"
  },
  {
    name: "Shoyu Ramen",
    japanese: "醤油ラーメン",
    description: "Bouillon clair à base de sauce soja, le style le plus traditionnel",
    region: "Tokyo",
    characteristics: "Léger, savoureux, équilibré",
    toppings: "Chashu, menma, oignons verts, naruto",
    history: "Créé en 1910 au restaurant Rairaiken d'Asakusa, premier ramen adapté au goût japonais"
  },
  {
    name: "Shio Ramen",
    japanese: "塩ラーメン",
    description: "Bouillon salé le plus léger, souvent à base de fruits de mer",
    region: "Hakodate",
    characteristics: "Délicat, clair, rafraîchissant",
    toppings: "Chashu, wonbok, oignons verts",
    history: "Le plus ancien style, permettant de goûter purement la qualité du bouillon"
  },
  {
    name: "Miso Ramen",
    japanese: "味噌ラーメン",
    description: "Bouillon à base de pâte miso, souvent plus robuste et épicé",
    region: "Sapporo",
    characteristics: "Riche, salé, complexe",
    toppings: "Chashu, maïs, beurre, oignons verts",
    history: "Inventé en 1954 au restaurant Aji no Sanpei à Sapporo, révolutionnant le monde du ramen"
  }
];

export const metadata: Metadata = {
  title: "Ramen : Guide des Bouillons, Nouilles et Chaînes (Ichiran) | Japonchaines",
  description: "Explorez l'univers du ramen. Des bouillons tonkotsu, shoyu, shio, miso aux meilleures chaînes comme Ichiran et Ippudo.",
  keywords: "ramen, Ichiran, Ippudo, Tenkaippin, tonkotsu, shoyu, miso, nouilles japonaises",
  openGraph: {
    title: "Ramen : Guide des Bouillons, Nouilles et Chaînes (Ichiran) | Japonchaines",
    description: "Explorez l'univers du ramen. Des bouillons tonkotsu, shoyu, shio, miso aux meilleures chaînes comme Ichiran et Ippudo.",
    type: "article",
    url: "https://japonchaines.com/type-plat/ramen",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/ramen-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Ramen japonais - Guide des bouillons et chaînes"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramen : Guide des Bouillons, Nouilles et Chaînes (Ichiran) | Japonchaines",
    description: "Explorez l'univers du ramen. Des bouillons tonkotsu, shoyu, shio, miso aux meilleures chaînes comme Ichiran et Ippudo.",
    images: ["/images/ramen-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/ramen"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RamenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryViewTracker categoryName="ramen" />

      <PageHero
        title="Ramen"
        subtitle="ラーメン"
        description="Le plat de nouilles le plus emblématique du Japon. Nouilles de blé servies dans un bouillon savoureux avec diverses garnitures."
        badges={[
          "Prix : ¥700-1500",
          "Réconfortant",
          "Nombreuses variétés"
        ]}
        backgroundImage="/images/chaines/ippudo/shiromaru-motoaji.jpg"
      />

      <ContentSection title="Les Quatre Grands Types de Ramen" background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ramenTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
              <p className="text-gray-600 japanese-text text-sm mb-3">{type.japanese}</p>
              <p className="text-gray-600 text-sm mb-4">{type.description}</p>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Origine : </span>
                  <span className="text-gray-600">{type.region}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Caractère : </span>
                  <span className="text-gray-600">{type.characteristics}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Garnitures : </span>
                  <span className="text-gray-600">{type.toppings}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="font-semibold text-gray-900">Histoire : </span>
                  <span className="text-gray-600 text-xs">{type.history}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Principales Chaînes de Ramen" background="gray">
        <ResourceGrid columns={3}>
          {ramenChains.map((chain, index) => (
            <ResourceCard
              key={index}
              title={chain.name}
              subtitle={chain.japanese}
              description={chain.description}
              href={chain.href}
              tags={chain.specialties.slice(0, 2)}
              color="orange"
            />
          ))}
        </ResourceGrid>
      </ContentSection>

      <ContentSection title="Guide de Commande pour les Ramen" background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-orange-800 mb-4">🎫 Méthodes de Commande</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Distributeur :</strong> La majorité des chaînes</li>
              <li>• <strong>Formulaire :</strong> Ichiran (personnalisation)</li>
              <li>• <strong>Serveur :</strong> Restaurants haut de gamme</li>
              <li>• <strong>QR Code :</strong> Nouvelles chaînes modernes</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-red-800 mb-4">🍜 Personnalisation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>硬さ (Katasa) :</strong> Fermeté des nouilles</li>
              <li>• <strong>濃さ (Kosa) :</strong> Intensité du bouillon</li>
              <li>• <strong>油 (Abura) :</strong> Quantité d'huile</li>
              <li>• <strong>ニンニク (Ninniku) :</strong> Ail</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-800 mb-4">🥢 Étiquette Ramen</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Aspirez les nouilles bruyamment (OK !)</li>
              <li>• Mangez rapidement (les nouilles ramollissent)</li>
              <li>• Ne laissez pas de bouillon</li>
              <li>• Libérez votre place rapidement</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/guides/comment-commander"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Guide Complet de Commande
          </Link>
        </div>
      </ContentSection>

      <ContentSection title="Histoire et Culture du Ramen" subtitle="ラーメンの歴史と文化" background="gray">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🏮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Origines (1910-1920)</h3>
            <p className="text-gray-600 mb-4">
              Le ramen moderne naît en 1910 au restaurant <strong>Rairaiken</strong> d'Asakusa, Tokyo.
              Le propriétaire Ozaki Kanichi adapte les nouilles chinoises au goût japonais en utilisant
              un bouillon plus léger avec de la sauce soja.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🌊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expansion (1920-1950)</h3>
            <p className="text-gray-600 mb-4">
              Le <strong>Grand Séisme de Kantō (1923)</strong> disperse les cuisiniers de Tokyo dans tout
              le Japon. Puis, après la Seconde Guerre mondiale, les rapatriés de Chine et la farine
              américaine bon marché démocratisent le ramen.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation (1950-présent)</h3>
            <p className="text-gray-600 mb-4">
              Les années 1950-60 voient naître les grandes innovations : <strong>miso ramen</strong> (1954),
              <strong>tsukemen</strong> (1955), et l'invention du <strong>ramen instantané</strong> (1958)
              qui popularise mondialement le terme "ramen".
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Ramen Régionaux Emblématiques" subtitle="ご当地ラーメン" background="white">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">❄️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Sapporo Ramen</h3>
                <p className="text-gray-600">札幌ラーメン - Hokkaido</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Miso ramen</strong> né en 1954 au restaurant "Aji no Sanpei". Bouillon épais au miso,
              nouilles épaisses et ondulées, garni de maïs et beurre. L'épaisse couche de graisse
              protège du froid hivernal.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🌸</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Hakata Ramen</h3>
                <p className="text-gray-600">博多ラーメン - Fukuoka</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Tonkotsu</strong> au bouillon blanc crémeux, né par accident en 1947. Nouilles très fines,
              cuisson rapide. Système unique de "kaedama" (nouilles supplémentaires) car elles s'amollissent vite.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🏔️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Kitakata Ramen</h3>
                <p className="text-gray-600">喜多方ラーメン - Fukushima</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Tradition du <strong>"asa-ra"</strong> (ramen du matin) depuis 1925. Bouillon shoyu léger,
              nouilles plates et ondulées à haute teneur en eau. Chashu généreux recouvrant le bol.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">🌊</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Yokohama Iekei</h3>
                <p className="text-gray-600">横浜家系 - Kanagawa</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Créé en 1974 par Yoshimura Minoru. Fusion tonkotsu-shoyu avec huile de poulet (chi-yu).
              Personnalisation : dureté des nouilles, intensité du goût, quantité d'huile.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Tendances Modernes du Ramen" subtitle="現代のラーメントレンド" background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🌶️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Tantanmen</h3>
            <p className="text-gray-600 text-sm mb-3">
              Version japonaise du dandan chinois. Bouillon crémeux au sésame et miso, moins épicé que l'original.
            </p>
            <span className="text-xs text-orange-600 font-medium">Tendance croissante</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🍅</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Tomato Ramen</h3>
            <p className="text-gray-600 text-sm mb-3">
              Innovation moderne combinant bouillon traditionnel et tomates. Fusion East-West populaire.
            </p>
            <span className="text-xs text-green-600 font-medium">Innovation récente</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🥦</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Vegan Ramen</h3>
            <p className="text-gray-600 text-sm mb-3">
              Bouillons à base de légumes, miso et algues. Répond à la demande croissante pour des options végétales.
            </p>
            <span className="text-xs text-blue-600 font-medium">Marché émergent</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Mazesoba</h3>
            <p className="text-gray-600 text-sm mb-3">
              "Ramen sec" sans bouillon, mélangé avec une sauce épaisse. Alternative moderne très populaire.
            </p>
            <span className="text-xs text-purple-600 font-medium">Style établi</span>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Phrases Utiles pour Commander" subtitle="便利なフレーズ" background="white">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-green-800">
              Commande de Base
              <span className="block text-sm font-normal text-gray-600">基本注文</span>
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Ramen tonkotsu s'il vous plaît</p>
                <p className="text-lg text-gray-800 mb-1">豚骨ラーメンをお願いします</p>
                <p className="text-sm text-gray-600 italic">Tonkotsu rāmen o onegaishimasu</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Avec un œuf mariné</p>
                <p className="text-lg text-gray-800 mb-1">味玉付きで</p>
                <p className="text-sm text-gray-600 italic">Ajitama tsuki de</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Nouilles supplémentaires</p>
                <p className="text-lg text-gray-800 mb-1">替え玉お願いします</p>
                <p className="text-sm text-gray-600 italic">Kaedama onegaishimasu</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-blue-800">
              Personnalisation
              <span className="block text-sm font-normal text-gray-600">カスタマイズ</span>
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Nouilles fermes</p>
                <p className="text-lg text-gray-800 mb-1">麺硬めで</p>
                <p className="text-sm text-gray-600 italic">Men katame de</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Bouillon léger</p>
                <p className="text-lg text-gray-800 mb-1">あっさりで</p>
                <p className="text-sm text-gray-600 italic">Assari de</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Peu d'huile</p>
                <p className="text-lg text-gray-800 mb-1">油少なめで</p>
                <p className="text-sm text-gray-600 italic">Abura sukuname de</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-orange-800">
              Situations Utiles
              <span className="block text-sm font-normal text-gray-600">便利な場面</span>
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">C'est délicieux !</p>
                <p className="text-lg text-gray-800 mb-1">美味しいです！</p>
                <p className="text-sm text-gray-600 italic">Oishii desu!</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">L'addition s'il vous plaît</p>
                <p className="text-lg text-gray-800 mb-1">お会計お願いします</p>
                <p className="text-sm text-gray-600 italic">Okaikei onegaishimasu</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-medium text-gray-900 mb-1">Merci pour le repas</p>
                <p className="text-lg text-gray-800 mb-1">ごちそうさまでした</p>
                <p className="text-sm text-gray-600 italic">Gochisōsama deshita</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
