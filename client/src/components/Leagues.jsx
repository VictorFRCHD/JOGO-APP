import React, { useState, useEffect } from 'react';
import { Trophy, Users, TrendingUp, Target, Medal, Flame, Clock, MapPin, Users2, Crown, Award, Zap } from 'lucide-react';

const Leagues = () => {
  const [activeLeague, setActiveLeague] = useState('campus');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('points');
  const [filterRank, setFilterRank] = useState('all');

  const leaguesData = {
    campus: {
      name: 'Ligue Campus',
      icon: '🎓',
      description: 'Compétition entre universités',
      participants: 2450,
      season: 'Automne 2024',
      leaderboard: [
        { rank: 1, name: 'Université Paris Saclay', points: 5420, wins: 45, tier: 'Elite', streak: 8, region: 'Île-de-France' },
        { rank: 2, name: 'Sorbonne Université', points: 4890, wins: 42, tier: 'Diamant', streak: 5, region: 'Île-de-France' },
        { rank: 3, name: 'PSL', points: 4650, wins: 38, tier: 'Diamant', streak: 3, region: 'Île-de-France' },
        { rank: 4, name: 'Université Lyon', points: 4120, wins: 35, tier: 'Platine', streak: 6, region: 'Auvergne-Rhône-Alpes' },
        { rank: 5, name: 'Université Bordeaux', points: 3890, wins: 32, tier: 'Platine', streak: 2, region: 'Nouvelle-Aquitaine' },
      ]
    },
    corporate: {
      name: 'Ligue Entreprise',
      icon: '💼',
      description: 'Compétition professionnelle',
      participants: 1850,
      season: 'Automne 2024',
      leaderboard: [
        { rank: 1, name: 'Google Sports Team', points: 6200, wins: 52, tier: 'Elite', streak: 12, region: 'Île-de-France' },
        { rank: 2, name: 'Microsoft Gaming', points: 5890, wins: 48, tier: 'Elite', streak: 9, region: 'Paris' },
        { rank: 3, name: 'Amazon Athletes', points: 5450, wins: 44, tier: 'Diamant', streak: 7, region: 'Paris' },
        { rank: 4, name: 'Apple Team', points: 4920, wins: 40, tier: 'Platine', streak: 4, region: 'Versailles' },
        { rank: 5, name: 'Meta Sports', points: 4680, wins: 38, tier: 'Platine', streak: 3, region: 'Paris' },
      ]
    },
    friends: {
      name: 'Ligue Amis',
      icon: '👥',
      description: 'Défiez vos amis',
      participants: 892,
      season: 'Automne 2024',
      leaderboard: [
        { rank: 1, name: 'Équipe Elite Gaming', points: 4320, wins: 38, tier: 'Platine', streak: 11, region: 'Paris' },
        { rank: 2, name: 'The Legends', points: 3950, wins: 33, tier: 'Platine', streak: 8, region: 'Lyon' },
        { rank: 3, name: 'Kings of Arena', points: 3680, wins: 29, tier: 'Or', streak: 6, region: 'Marseille' },
        { rank: 4, name: 'Champion Squad', points: 3420, wins: 27, tier: 'Or', streak: 4, region: 'Toulouse' },
        { rank: 5, name: 'Victory Players', points: 3180, wins: 24, tier: 'Or', streak: 2, region: 'Nice' },
      ]
    }
  };

  const getTierColor = (tier) => {
    const colors = {
      'Elite': 'from-purple-500 to-pink-600',
      'Diamant': 'from-blue-400 to-blue-600',
      'Platine': 'from-cyan-400 to-cyan-600',
      'Or': 'from-yellow-400 to-yellow-600'
    };
    return colors[tier] || 'from-gray-500 to-gray-700';
  };

  const getCurrentLeague = () => leaguesData[activeLeague];
  const league = getCurrentLeague();
  
  const filteredLeaderboard = league.leaderboard.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{league.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gradient">{league.name}</h1>
              <p className="text-gray-400">{league.description}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Users size={16} /> {league.participants.toLocaleString()} participants</span>
            <span className="flex items-center gap-1"><Clock size={16} /> Saison {league.season}</span>
          </div>
        </div>

        {/* League Selector */}
        <div className="flex gap-3 mb-8 flex-wrap animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {Object.entries(leaguesData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveLeague(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeLeague === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow-blue'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {data.icon} {data.name}
            </button>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="glass-card p-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Rechercher une équipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="points">Trier par Points</option>
              <option value="wins">Trier par Victoires</option>
              <option value="streak">Trier par Série</option>
            </select>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {filteredLeaderboard.map((team, index) => {
            const isTopThree = team.rank <= 3;
            return (
              <div
                key={team.rank}
                className={`glass-card p-6 card-hover ${
                  isTopThree ? `bg-gradient-to-r ${getTierColor(team.tier)} opacity-20 border border-opacity-50` : ''
                }`}
                style={{animationDelay: `${0.4 + index * 0.05}s`, animation: 'fadeInUp 0.5s ease-out forwards'}}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    {/* Rank Badge */}
                    <div className="flex-shrink-0">
                      {isTopThree ? (
                        <div className="relative w-12 h-12">
                          <Medal className="w-full h-full text-yellow-500" />
                          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                            {team.rank}
                          </span>
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-300">
                          {team.rank}
                        </div>
                      )}
                    </div>

                    {/* Team Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{team.name}</h3>
                      <div className="flex gap-6 flex-wrap text-sm">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Trophy size={16} /> {team.wins} victoires
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                          <Flame size={16} /> Série: {team.streak}
                        </div>
                        <div className="flex items-center gap-2 text-purple-400">
                          <MapPin size={16} /> {team.region}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-8">
                    {/* Tier Badge */}
                    <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${getTierColor(team.tier)} text-white font-bold text-center min-w-32`}>
                      {team.tier}
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white">{team.points.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">Points</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="glass-card p-6 text-center">
            <Crown className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
            <p className="text-gray-400 mb-2">Leader</p>
            <p className="text-2xl font-bold text-white">{league.leaderboard[0].name}</p>
            <p className="text-sm text-yellow-500 mt-2">{league.leaderboard[0].points} points</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Award className="w-8 h-8 mx-auto mb-3 text-blue-500" />
            <p className="text-gray-400 mb-2">Top 3 Classement</p>
            <p className="text-2xl font-bold text-white">3 Équipes</p>
            <p className="text-sm text-blue-500 mt-2">{league.leaderboard.slice(0, 3).reduce((sum, t) => sum + t.wins, 0)} victoires</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Zap className="w-8 h-8 mx-auto mb-3 text-orange-500" />
            <p className="text-gray-400 mb-2">Meilleure Série</p>
            <p className="text-2xl font-bold text-white">{Math.max(...league.leaderboard.map(t => t.streak))}</p>
            <p className="text-sm text-orange-500 mt-2">Victoires consécutives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
