import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Star, Zap, Shield, Heart, TrendingUp } from 'lucide-react';

const Store = () => {
  const [coins, setCoins] = useState(2500);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: 'XP Boost x2', price: 500, category: 'boosts', icon: Zap, color: 'from-yellow-500 to-orange-500', desc: '+100% XP pendant 1h' },
    { id: 2, name: 'Badge Premium', price: 1200, category: 'cosmetics', icon: Star, color: 'from-purple-500 to-pink-500', desc: 'Badge exclusif' },
    { id: 3, name: 'Protection Rang', price: 800, category: 'protection', icon: Shield, color: 'from-blue-500 to-cyan-500', desc: 'Protège votre rang pendant 7j' },
    { id: 4, name: 'Vie Supplémentaire', price: 300, category: 'items', icon: Heart, color: 'from-red-500 to-pink-500', desc: '+1 vie en tournoi' },
    { id: 5, name: 'Mega XP Boost', price: 1500, category: 'boosts', icon: TrendingUp, color: 'from-green-500 to-teal-500', desc: '+200% XP pendant 3h' },
    { id: 6, name: 'Avatar Premium', price: 2000, category: 'cosmetics', icon: Sparkles, color: 'from-indigo-500 to-purple-500', desc: 'Avatar animé unique' },
    { id: 7, name: 'XP Boost x1.5', price: 250, category: 'boosts', icon: Zap, color: 'from-yellow-400 to-yellow-600', desc: '+50% XP pendant 30min' },
    { id: 8, name: 'Border Elite', price: 1800, category: 'cosmetics', icon: Star, color: 'from-pink-500 to-rose-500', desc: 'Bordure de profil Elite' }
  ];

  const categories = [
    { id: 'all', name: 'Tout', count: items.length },
    { id: 'boosts', name: 'Boosts', count: items.filter(i => i.category === 'boosts').length },
    { id: 'cosmetics', name: 'Cosmétiques', count: items.filter(i => i.category === 'cosmetics').length },
    { id: 'protection', name: 'Protection', count: items.filter(i => i.category === 'protection').length },
    { id: 'items', name: 'Items', count: items.filter(i => i.category === 'items').length }
  ];

  const filteredItems = selectedCategory === 'all' ? items : items.filter(item => item.category === selectedCategory);

  const buyItem = (item) => {
    if (coins >= item.price) {
      setCoins(coins - item.price);
      setCart([...cart, item]);
      alert(`${item.name} acheté avec succès!`);
    } else {
      alert('JOGO Coins insuffisants!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">JOGO Store</h1>
              <p className="text-gray-400">Améliorez votre expérience</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400">{coins} 🪙</div>
            <div className="text-sm text-gray-400">JOGO Coins</div>
          </div>
        </div>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-105'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all transform hover:scale-105 cursor-pointer"
              >
                <div className={`w-full h-32 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-yellow-400">{item.price} 🪙</div>
                  <button
                    onClick={() => buyItem(item)}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg font-semibold transition-all"
                  >
                    Acheter
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-green-900 to-teal-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Achats récents</h2>
            <div className="flex flex-wrap gap-3">
              {cart.map((item, index) => (
                <div key={index} className="px-4 py-2 bg-black/30 rounded-lg">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 bg-gradient-to-r from-yellow-900 to-orange-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-yellow-400" />
            Offres Spéciales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">500 🪙</div>
              <div className="text-sm text-gray-300 mb-3">Pack Débutant</div>
              <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold">
                2.99€
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center border-2 border-yellow-500">
              <div className="text-sm text-yellow-400 font-bold mb-2">POPULAIRE</div>
              <div className="text-3xl font-bold mb-2">1500 🪙</div>
              <div className="text-sm text-gray-300 mb-3">Pack Pro</div>
              <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">
                7.99€
              </button>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-2">3500 🪙</div>
              <div className="text-sm text-gray-300 mb-3">Pack Elite</div>
              <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold">
                14.99€
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
