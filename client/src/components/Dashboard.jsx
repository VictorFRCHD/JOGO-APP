import React, { useState, useEffect } from 'react';
import { Trophy, Star, TrendingUp, Award, Target, Zap, Users, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState({
    username: 'Player123',
    level: 42,
    xp: 8450,
    xpToNextLevel: 10000,
    rank: 'Or',
    shopCoins: 2500,
    badges: ['first_win', 'speed_demon', 'team_player', 'marathon_runner'],
    stats: {
      vitesse: 85,
      endurance: 78,
      force: 72,
      technique: 90,
      mental: 88
    },
    recentMatches: 15,
    winRate: 68,
    streak: 5
  });

  const getRankColor = (rank) => {
    const colors = {
      'Bronze': 'from-orange-700 to-orange-900',
      'Argent': 'from-gray-400 to-gray-600',
      'Or': 'from-yellow-400 to-yellow-600',
      'Platine': 'from-cyan-400 to-cyan-600',
      'Diamant': 'from-blue-400 to-blue-600',
      'Elite': 'from-purple-500 to-pink-600'
    };
    return colors[rank] || 'from-gray-500 to-gray-700';
  };

  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Header avec profil */}
      <div className="max-w-7xl mx-auto">
        <div className={`bg-gradient-to-r ${getRankColor(user.rank)} rounded-2xl p-8 mb-6 shadow-2xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{user.username}</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-semibold">Niveau {user.level}</span>
                  <span className="px-4 py-1 bg-white/30 rounded-full text-sm font-bold">{user.rank}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-2">{user.shopCoins} 🪙</div>
              <div className="text-sm opacity-90">JOGO Coins</div>
            </div>
          </div>
          
          {/* Barre XP */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>XP: {user.xp} / {user.xpToNextLevel}</span>
              <span>{Math.round(xpPercentage)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8" />
              <span className="text-3xl font-bold">{user.recentMatches}</span>
            </div>
            <div className="text-sm opacity-90">Matchs joués</div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8" />
              <span className="text-3xl font-bold">{user.winRate}%</span>
            </div>
            <div className="text-sm opacity-90">Taux de victoire</div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8" />
              <span className="text-3xl font-bold">{user.streak}</span>
            </div>
            <div className="text-sm opacity-90">Série de victoires</div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8" />
              <span className="text-3xl font-bold">{user.badges.length}</span>
            </div>
            <div className="text-sm opacity-90">Badges débloqués</div>
          </div>
        </div>

        {/* Attributs du joueur */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-400" />
            Attributs du Joueur
          </h2>
          <div className="space-y-4">
            {Object.entries(user.stats).map(([stat, value]) => (
              <div key={stat}>
                <div className="flex justify-between text-sm mb-2 capitalize">
                  <span className="font-semibold">{stat}</span>
                  <span className="text-blue-400">{value}/100</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="w-6 h-6 mr-3 text-yellow-400" />
            Badges Récents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {user.badges.map((badge, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                <Award className="w-12 h-12 mx-auto mb-2" />
                <div className="text-xs font-semibold capitalize">{badge.replace('_', ' ')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prochains événements */}
        <div className="mt-6 bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-green-400" />
            Événements à venir
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">⚽ Football 5v5</div>
                  <div className="text-sm text-gray-400">Parc Central - 18h00</div>
                </div>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Rejoindre
                </button>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg">🏀 Basketball 3v3</div>
                  <div className="text-sm text-gray-400">Gymnase Nord - 20h00</div>
                </div>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Rejoindre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
