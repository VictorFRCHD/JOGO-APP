import React, { useState } from 'react';
import { Sword, Trophy, Users, Crown, TrendingUp, Flame, Shield, Target } from 'lucide-react';

const Arena = () => {
  const [selectedMode, setSelectedMode] = useState('ranked');
  const [searchingMatch, setSearchingMatch] = useState(false);

  const leaderboard = [
    { rank: 1, username: 'SportKing99', rating: 2854, wins: 342, tier: 'Elite' },
    { rank: 2, username: 'ProRunner', rating: 2745, wins: 298, tier: 'Elite' },
    { rank: 3, username: 'Champion88', rating: 2638, wins: 267, tier: 'Diamant' },
    { rank: 4, username: 'Player123', rating: 2420, wins: 189, tier: 'Diamant' },
    { rank: 5, username: 'FastRunner', rating: 2315, wins: 178, tier: 'Platine' },
    { rank: 6, username: 'SportStar', rating: 2198, wins: 156, tier: 'Platine' },
    { rank: 7, username: 'Victory777', rating: 2076, wins: 143, tier: 'Platine' },
    { rank: 8, username: 'Champion21', rating: 1945, wins: 128, tier: 'Or' }
  ];

  const gameModes = [
    { id: 'ranked', name: 'Ranked', icon: Crown, color: 'from-yellow-500 to-orange-600', desc: 'Compétition classée' },
    { id: 'casual', name: 'Casual', icon: Users, color: 'from-blue-500 to-purple-600', desc: 'Match amical' },
    { id: '1v1', name: '1v1 Duel', icon: Sword, color: 'from-red-500 to-pink-600', desc: 'Combat singulier' },
    { id: 'tournament', name: 'Tournoi', icon: Trophy, color: 'from-green-500 to-teal-600', desc: 'Compétition à élimination' }
  ];

  const getTierColor = (tier) => {
    const colors = {
      'Elite': 'from-purple-500 to-pink-500',
      'Diamant': 'from-blue-400 to-blue-600',
      'Platine': 'from-cyan-400 to-cyan-600',
      'Or': 'from-yellow-400 to-yellow-600',
      'Argent': 'from-gray-400 to-gray-600',
      'Bronze': 'from-orange-700 to-orange-900'
    };
    return colors[tier] || 'from-gray-500 to-gray-700';
  };

  const startMatchmaking = () => {
    setSearchingMatch(true);
    setTimeout(() => setSearchingMatch(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
              <Sword className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Arena</h1>
              <p className="text-gray-400">Affrontez les meilleurs joueurs</p>
            </div>
          </div>
        </div>

        {/* Modes de jeu */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modes de Jeu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gameModes.map(mode => {
              const Icon = mode.icon;
              return (
                <div
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`bg-gradient-to-br ${mode.color} rounded-xl p-6 cursor-pointer transform transition-all hover:scale-105 ${
                    selectedMode === mode.id ? 'ring-4 ring-white' : ''
                  }`}
                >
                  <Icon className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{mode.name}</h3>
                  <p className="text-sm opacity-90">{mode.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistiques du joueur */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-bold">2420</span>
            </div>
            <div className="text-sm text-gray-400">Rating</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <span className="text-2xl font-bold">189</span>
            </div>
            <div className="text-sm text-gray-400">Victoires</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span className="text-2xl font-bold">68%</span>
            </div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-6 h-6 text-orange-400" />
              <span className="text-2xl font-bold">12</span>
            </div>
            <div className="text-sm text-gray-400">Serie</div>
          </div>
        </div>

        {/* Bouton Matchmaking */}
        <div className="mb-8">
          <button
            onClick={startMatchmaking}
            disabled={searchingMatch}
            className={`w-full py-6 rounded-xl font-bold text-xl transition-all ${
              searchingMatch
                ? 'bg-gray-700 cursor-not-allowed animate-pulse'
                : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transform hover:scale-[1.02]'
            }`}
          >
            {searchingMatch ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Recherche d'adversaire...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                <Sword className="w-6 h-6" />
                <span>TROUVER UN MATCH</span>
              </div>
            )}
          </button>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Classement Global</h2>
          </div>
          <div className="space-y-3">
            {leaderboard.map((player) => (
              <div
                key={player.rank}
                className="bg-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                    player.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    player.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                    player.rank === 3 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                    'bg-gray-600'
                  }`}>
                    {player.rank <= 3 ? (
                      <Crown className="w-6 h-6" />
                    ) : (
                      `#${player.rank}`
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{player.username}</div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTierColor(player.tier)} font-semibold`}>
                        {player.tier}
                      </span>
                      <span className="text-gray-400">{player.wins} victoires</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">{player.rating}</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Récompenses de saison */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
            Récompenses de Saison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <Shield className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
              <div className="font-bold">Badge Elite</div>
              <div className="text-sm text-gray-300">Top 100 joueurs</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-2 text-blue-400" />
              <div className="font-bold">5000 JOGO Coins</div>
              <div className="text-sm text-gray-300">Top 500 joueurs</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center">
              <Crown className="w-12 h-12 mx-auto mb-2 text-purple-400" />
              <div className="font-bold">Skin Exclusif</div>
              <div className="text-sm text-gray-300">Top 1000 joueurs</div>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-300">
            Fin de saison dans: <span className="font-bold text-white">23 jours 14h 32m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
