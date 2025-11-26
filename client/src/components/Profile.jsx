import React, { useState } from 'react';
import { Star, Trophy, Award, Calendar, TrendingUp, Users, Medal, Shield, ChevronRight, Heart, MessageCircle } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('stats');
  
  // Mock user data
  const user = {
    username: 'Victor',
    pseudo: '@VictorJOGO',
    level: 42,
    xp: 8750,
    xpForNextLevel: 10000,
    rank: 'Platine',
    jogoCoins: 2450,
    matchesPlayed: 156,
    wins: 94,
    winRate: 60.3,
    bestRank: 'Diamant',
    endorsements: {
      teamPlayer: 45,
      leader: 32,
      sportsman: 51
    },
    stats: {
      vitesse: 85,
      endurance: 78,
      force: 72,
      technique: 88,
      mental: 80
    },
    badges: [
      { name: 'Champion Campus', icon: '🏆', date: '2024' },
      { name: 'Gagnant Arena S1', icon: '⚔️', date: '2024' },
      { name: 'Série de 10 Victoires', icon: '🔥', date: '2024' },
      { name: 'MVP x5', icon: '⭐', date: '2024' },
      { name: 'Elite Platine', icon: '💎', date: '2024' }
    ],
    recentMatches: [
      { date: '12/01', opponent: 'Team Alpha', result: 'W', score: '5-3' },
      { date: '11/01', opponent: 'Team Beta', result: 'W', score: '4-2' },
      { date: '10/01', opponent: 'Team Gamma', result: 'L', score: '2-3' },
      { date: '09/01', opponent: 'Team Delta', result: 'W', score: '6-1' }
    ]
  };

  const getRankColor = (rank) => {
    const colors = {
      'Bronze': 'from-amber-700 to-amber-900',
      'Argent': 'from-gray-300 to-gray-500',
      'Or': 'from-yellow-400 to-yellow-600',
      'Platine': 'from-cyan-400 to-blue-600',
      'Diamant': 'from-blue-400 to-purple-600',
      'Elite': 'from-purple-500 to-pink-600'
    };
    return colors[rank] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header avec bannière */}
      <div className={`relative h-48 bg-gradient-to-r ${getRankColor(user.rank)}`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end space-x-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-xl flex items-center justify-center text-3xl font-bold text-white">
              {user.username.charAt(0)}
            </div>
            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold text-white">{user.username}</h1>
              <p className="text-purple-200">{user.pseudo}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getRankColor(user.rank)} text-white text-sm font-bold`}>
                  {user.rank}
                </span>
                <span className="text-white font-semibold">Niveau {user.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Endorsements */}
      <div className="px-4 py-6 bg-gray-800/50">
        <h3 className="text-white font-semibold mb-4 flex items-center">
          <Heart className="mr-2" size={20} />
          Endorsements
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-3 text-center">
            <Users className="mx-auto mb-2 text-green-400" size={24} />
            <div className="text-2xl font-bold text-white">{user.endorsements.teamPlayer}</div>
            <div className="text-xs text-green-300">Team Player</div>
          </div>
          <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-3 text-center">
            <Shield className="mx-auto mb-2 text-yellow-400" size={24} />
            <div className="text-2xl font-bold text-white">{user.endorsements.leader}</div>
            <div className="text-xs text-yellow-300">Leader</div>
          </div>
          <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-3 text-center">
            <Award className="mx-auto mb-2 text-blue-400" size={24} />
            <div className="text-2xl font-bold text-white">{user.endorsements.sportsman}</div>
            <div className="text-xs text-blue-300">Sportif</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 bg-gray-800/50 px-4">
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === 'stats' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400'
          }`}
        >
          Statistiques
        </button>
        <button
          onClick={() => setActiveTab('badges')}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === 'badges' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400'
          }`}
        >
          Badges
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === 'history' 
              ? 'text-purple-400 border-b-2 border-purple-400' 
              : 'text-gray-400'
          }`}
        >
          Historique
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'stats' && (
          <div className="space-y-6">
            {/* Attributs */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Attributs du Joueur
              </h3>
              <div className="space-y-4">
                {Object.entries(user.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 capitalize">{key}</span>
                      <span className="text-white font-semibold">{value}/100</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <Trophy className="text-yellow-400 mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{user.wins}/{user.matchesPlayed}</div>
                <div className="text-sm text-gray-400">Victoires</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <TrendingUp className="text-green-400 mb-2" size={24} />
                <div className="text-2xl font-bold text-white">{user.winRate}%</div>
                <div className="text-sm text-gray-400">Taux de victoire</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="grid grid-cols-2 gap-4">
            {user.badges.map((badge, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="text-white font-semibold text-sm">{badge.name}</div>
                <div className="text-gray-400 text-xs mt-1">{badge.date}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-2">
            {user.recentMatches.map((match, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    match.result === 'W' ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    <span className="text-white font-bold text-lg">{match.result}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{match.opponent}</div>
                    <div className="text-gray-400 text-sm">{match.date}</div>
                  </div>
                </div>
                <div className="text-white font-bold">{match.score}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
