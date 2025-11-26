import React, { useState } from 'react';
import { Sword, Trophy, Users, TrendingUp, Flame, Target, Clock, BarChart3, Zap, Shield, Award, Radio } from 'lucide-react';

const Arena = () => {
  const [selectedMode, setSelectedMode] = useState('ranked');
  const [searching, setSearching] = useState(false);
  const [matchFound, setMatchFound] = useState(false);
  const [matchHistory, setMatchHistory] = useState([
    { id: 1, opponent: 'ProRunner', result: 'VICTOIRE', score: '3-1', xp: 250, coins: 150, date: '2h ago', mode: 'Ranked', tier: 'Diamant' },
    { id: 2, opponent: 'Champion88', result: 'DÉFAITE', score: '1-3', xp: 100, coins: 50, date: '4h ago', mode: 'Ranked', tier: 'Diamant' },
    { id: 3, opponent: 'Sporting99', result: 'VICTOIRE', score: '2-0', xp: 200, coins: 120, date: '1d ago', mode: 'Casual', tier: 'Elite' },
    { id: 4, opponent: 'FastRunner', result: 'VICTOIRE', score: '2-1', xp: 220, coins: 130, date: '2d ago', mode: 'Ranked', tier: 'Diamant' },
  ]);

  const [potentialOpponents, setPotentialOpponents] = useState([
    { id: 1, username: 'Sporting99', rating: 2854, wins: 342, tier: 'Elite', streak: 8, region: 'Paris', style: 'Offensif', lastSeen: '5m ago' },
    { id: 2, username: 'ProRunner', rating: 2745, wins: 298, tier: 'Elite', streak: 5, region: 'Lyon', style: 'Equilibré', lastSeen: '10m ago' },
    { id: 3, username: 'Champion88', rating: 2638, wins: 267, tier: 'Diamant', streak: 3, region: 'Marseille', style: 'Défensif', lastSeen: '2m ago' },
    { id: 4, username: 'Player123', rating: 2428, wins: 189, tier: 'Diamant', streak: 12, region: 'Toulouse', style: 'Offensif', lastSeen: '1h ago' },
  ]);

  const [currentStats] = useState({
    rating: 2428,
    wins: 189,
    losses: 58,
    winRate: 76.5,
    streak: 5,
    tier: 'Diamant',
    playtime: '145h'
  });

  const gameModes = [
    { id: 'ranked', name: 'Classique', icon: Crown, color: 'from-yellow-500 to-orange-600', desc: 'Compétition classée' },
    { id: 'casual', name: 'Casual', icon: Users, color: 'from-blue-500 to-purple-600', desc: 'Match amical' },
    { id: '1v1', name: '1v1 Duel', icon: Sword, color: 'from-red-500 to-pink-600', desc: 'Combat singulier' },
    { id: 'tournament', name: 'Tournoi', icon: Trophy, color: 'from-green-500 to-teal-600', desc: 'Compétition élimin' },
  ];

  const getTierColor = (tier) => {
    const colors = {
      'Elite': 'from-purple-500 to-pink-600',
      'Diamant': 'from-blue-400 to-blue-600',
      'Platine': 'from-cyan-400 to-cyan-600',
      'Or': 'from-yellow-400 to-yellow-600'
    };
    return colors[tier] || 'from-gray-500 to-gray-700';
  };

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setMatchFound(true);
    }, 3000);
  };

  const getMode = () => gameModes.find(m => m.id === selectedMode);
  const Mode = getMode()?.icon || Trophy;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gradient mb-2">JOGO Arena</h1>
          <p className="text-gray-400">Entrez en compétition et défiez les meilleurs joueurs</p>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {[
            { label: 'Rating', value: currentStats.rating, icon: BarChart3, color: 'blue' },
            { label: 'Victories', value: currentStats.wins, icon: Trophy, color: 'yellow' },
            { label: 'Taux', value: `${currentStats.winRate}%`, icon: TrendingUp, color: 'green' },
            { label: 'Série', value: currentStats.streak, icon: Flame, color: 'red' },
            { label: 'Rang', value: currentStats.tier, icon: Award, color: 'purple' },
          ].map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="glass-card p-4 text-center card-hover" style={{animationDelay: `${0.2 + idx * 0.1}s`}}>
                <StatIcon className={`w-6 h-6 mx-auto mb-2 text-${stat.color}-500`} />
                <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Game Modes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {gameModes.map((mode, idx) => {
            const ModeIcon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`glass-card p-6 card-hover text-center transition-all ${
                  selectedMode === mode.id ? 'ring-2 ring-blue-500 neon-glow-blue' : ''
                }`}
                style={{animationDelay: `${0.3 + idx * 0.1}s`}}
              >
                <div className={`bg-gradient-to-br ${mode.color} p-4 rounded-lg mb-3 inline-block`}>
                  <ModeIcon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{mode.name}</h3>
                <p className="text-xs text-gray-400">{mode.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Search or Match Found */}
        {!matchFound ? (
          <div className="glass-card p-8 mb-8 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button
              onClick={handleSearch}
              disabled={searching}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                searching
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
              }`}
            >
              {searching ? (
                <span className="flex items-center gap-2 justify-center">
                  <Radio size={20} className="animate-spin" /> Recherche en cours...
                </span>
              ) : (
                'Chercher un Adversaire'
              )}
            </button>
          </div>
        ) : (
          <div className="glass-card p-8 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">ADVERSAIRE TROUVÉ!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Player */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg">
                <p className="text-gray-400 mb-2">Vous</p>
                <p className="text-3xl font-bold text-white mb-4">Player123</p>
                <div className={`bg-gradient-to-br ${getTierColor(currentStats.tier)} p-3 rounded-lg mb-4 inline-block`}>
                  <p className="text-white font-bold">{currentStats.tier}</p>
                </div>
                <p className="text-yellow-500 font-bold text-xl">Rating: {currentStats.rating}</p>
              </div>

              {/* Opponent */}
              <div className="text-center p-6 bg-gradient-to-br from-red-500/10 to-pink-600/10 rounded-lg">
                <p className="text-gray-400 mb-2">Adversaire</p>
                <p className="text-3xl font-bold text-white mb-4">Sporting99</p>
                <div className={`bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg mb-4 inline-block`}>
                  <p className="text-white font-bold">Elite</p>
                </div>
                <p className="text-yellow-500 font-bold text-xl">Rating: 2854</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                Accepter le Défi
              </button>
              <button onClick={() => setMatchFound(false)} className="px-8 py-3 bg-gray-700 text-gray-400 rounded-lg font-bold hover:bg-gray-600 transition-all">
                Refuser
              </button>
            </div>
          </div>
        )}

        {/* Match History */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock size={28} className="text-blue-500" />
            Historique des Matchs
          </h2>
          <div className="space-y-3">
            {matchHistory.map((match, idx) => (
              <div
                key={match.id}
                className={`glass-card p-4 card-hover border-l-4 ${
                  match.result === 'VICTOIRE' ? 'border-green-500' : 'border-red-500'
                }`}
                style={{animationDelay: `${0.6 + idx * 0.1}s`}}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-bold text-xl ${
                        match.result === 'VICTOIRE' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {match.result}
                      </span>
                      <p className="text-white font-semibold">vs {match.opponent}</p>
                      <span className="text-gray-400 text-sm">({match.mode})</span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <span className="text-gray-400">Score: <span className="text-blue-400">{match.score}</span></span>
                      <span className="text-gray-400">+{match.xp} <span className="text-blue-400">XP</span></span>
                      <span className="text-gray-400">+{match.coins} <span className="text-yellow-400">Coins</span></span>
                      <span className="text-gray-400">{match.date}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${getTierColor(match.tier)}`}>
                    {match.tier}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
