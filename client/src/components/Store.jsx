import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Heart, Star, Zap, Shield, Coins, Filter, Search, TrendingUp } from 'lucide-react';

const Store = () => {
  const [coins, setCoins] = useState(2500);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  const items = [
    { id: 1, name: 'XP Boost x2', price: 500, category: 'boosts', icon: Zap, color: 'from-yellow-500 to-orange-600', desc: '+100% XP pendant 1h', rarity: 'rare' },
    { id: 2, name: 'Badge Premium', price: 1200, category: 'cosmetics', icon: Sparkles, color: 'from-purple-500 to-pink-600', desc: 'Badge exclusif premium', rarity: 'epic' },
    { id: 3, name: 'Protection Rang', price: 800, category: 'protection', icon: Shield, color: 'from-blue-500 to-cyan-600', desc: 'Protége votre rang', rarity: 'rare' },
    { id: 4, name: 'Vie Supplémentaire', price: 300, category: 'items', icon: Heart, color: 'from-red-500 to-pink-600', desc: '+1 vie en tournoi', rarity: 'uncommon' },
    { id: 5, name: 'Mega XP Boost', price: 1500, category: 'boosts', icon: TrendingUp, color: 'from-green-500 to-teal-600', desc: '+200% XP pendant 2h', rarity: 'legendary' },
    { id: 6, name: 'Avatar Premium', price: 2000, category: 'cosmetics', icon: Sparkles, color: 'from-indigo-500 to-purple-600', desc: 'Avatar animé exclusif', rarity: 'legendary' },
    { id: 7, name: 'XP Boost x1.5', price: 250, category: 'boosts', icon: Zap, color: 'from-yellow-400 to-yellow-600', desc: '+50% XP pendant 30min', rarity: 'common' },
    { id: 8, name: 'Border Elite', price: 1800, category: 'cosmetics', icon: Star, color: 'from-pink-500 to-rose-600', desc: 'Bordure de profil Elite', rarity: 'epic' },
    { id: 9, name: 'Double Coins', price: 600, category: 'boosts', icon: Coins, color: 'from-yellow-500 to-amber-600', desc: 'Double pièces 1h', rarity: 'rare' },
    { id: 10, name: 'Emote VIP', price: 400, category: 'cosmetics', icon: Sparkles, color: 'from-violet-500 to-purple-600', desc: 'Émote exclusive VIP', rarity: 'uncommon' },
  ];

  const categories = [
    { id: 'all', name: 'Tous', icon: ShoppingBag, count: items.length },
    { id: 'boosts', name: 'Boosts', icon: Zap, count: items.filter(i => i.category === 'boosts').length },
    { id: 'cosmetics', name: 'Cosmétiques', icon: Sparkles, count: items.filter(i => i.category === 'cosmetics').length },
    { id: 'protection', name: 'Protection', icon: Shield, count: items.filter(i => i.category === 'protection').length },
    { id: 'items', name: 'Articles', icon: Heart, count: items.filter(i => i.category === 'items').length },
  ];

  const getRarityColor = (rarity) => {
    const colors = {
      'common': 'text-gray-400',
      'uncommon': 'text-green-400',
      'rare': 'text-blue-400',
      'epic': 'text-purple-400',
      'legendary': 'text-yellow-400'
    };
    return colors[rarity] || 'text-gray-400';
  };

  const getRarityBg = (rarity) => {
    const colors = {
      'common': 'bg-gray-800/50',
      'uncommon': 'bg-green-800/20',
      'rare': 'bg-blue-800/20',
      'epic': 'bg-purple-800/20',
      'legendary': 'bg-yellow-800/20'
    };
    return colors[rarity] || 'bg-gray-800/50';
  };

  const toggleFavorite = (id) => {
    setFavorites(fav => fav.includes(id) ? fav.filter(f => f !== id) : [...fav, id]);
  };

  const buyItem = (item) => {
    if (coins >= item.price) {
      setCoins(coins - item.price);
      setCart([...cart, item]);
      setTimeout(() => {
        setCart(cart.filter(c => c.id !== item.id));
      }, 2000);
    }
  };

  const filteredItems = items.filter(item => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return items.indexOf(a) - items.indexOf(b);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gradient">JOGO Store</h1>
              <p className="text-gray-400">Achetez des boosts, cosmétiques et plus</p>
            </div>
            <div className="glass-card p-4 flex items-center gap-3">
              <Coins className="text-yellow-500" size={32} />
              <div>
                <p className="text-sm text-gray-400">JOGO Coins</p>
                <p className="text-3xl font-bold text-yellow-500">{coins.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="glass-card p-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-64 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Plus populaires</option>
              <option value="price-low">Prix croissant</option>
              <option value="price-high">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow-blue'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon size={16} />
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {filteredItems.map((item, idx) => {
            const Icon = item.icon;
            const isFavorite = favorites.includes(item.id);
            return (
              <div
                key={item.id}
                className={`group glass-card p-6 card-hover overflow-hidden`}
                style={{animationDelay: `${0.4 + idx * 0.05}s`}}
              >
                {/* Rarity Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${getRarityBg(item.rarity)} ${getRarityColor(item.rarity)}`}>
                  {item.rarity.toUpperCase()}
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-br ${item.color} p-8 rounded-lg mb-4 flex items-center justify-center`}>
                  <Icon className="text-white" size={48} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.desc}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="text-yellow-500" size={20} />
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className={`p-2 rounded-lg transition-all ${
                        isFavorite
                          ? 'bg-red-500/20 text-red-500'
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                    </button>
                    <button
                      onClick={() => buyItem(item)}
                      disabled={coins < item.price}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        coins >= item.price
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Notification */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 glass-card p-4 border border-green-500/50 animate-slide-in-up">
            <p className="text-green-500 font-semibold">✓ {cart.length} article(s) acheté(s)!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
