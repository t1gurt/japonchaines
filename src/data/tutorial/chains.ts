// src/data/tutorial/chains.ts

export interface Chain {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const chains: Chain[] = [
  { id: 'yoshinoya', name: '吉野家', category: 'Gyudon', description: '言わずと知れた牛丼の元祖。' },
  { id: 'sukiya', name: 'すき家', category: 'Gyudon', description: '牛丼チェーン店舗数日本一。' },
  { id: 'matsuya', name: '松屋', category: 'Gyudon', description: '牛めしとカレーが人気。' },
  { id: 'ichiran', name: '一蘭', category: 'Ramen', description: '味集中カウンターで有名な豚骨ラーメン店。' },
  { id: 'ippudo', name: '一風堂', category: 'Ramen', description: '世界中に展開する博多発のラーメン店。' },
  { id: 'sushiro', name: 'スシロー', category: 'Kaiten-zushi', description: '業界最大手の回転寿司チェーン。' },
  { id: 'kura-sushi', name: 'くら寿司', category: 'Kaiten-zushi', description: '「ビッくらポン！」が人気の回転寿司。' },
  { id: 'saizeriya', name: 'サイゼリヤ', category: 'Family Restaurant', description: '低価格でイタリアンを提供するファミリーレストラン。' },
  { id: 'gusto', name: 'ガスト', category: 'Family Restaurant', description: 'すかいらーくグループが運営する最大手のファミレス。' },
];