import React, { useState } from 'react';
import { Trophy, Users, Building, Heart, Calendar, MapPin, Clock, ChevronRight, Plus, Filter, Search } from 'lucide-react';

const Leagues = () => {
  const [activeLeague, setActiveLeague] = useState('campus'); // 'campus', 'corp', 'friends'
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for leagues
  const leagues = {
    campus: [
      {
        id: 1,
        name: 'Université Paris Saclay',
        participants: 156,
        rank: 3,
        points: 2450,
        nextMatch: '15/01/2024',
        status: 'active',
        logo: '🏫'
      },
      {
        id: 2,
        name: 'Sorbonne Université',
        participants: 189,
        rank: 1,
        points: 3200,
        nextMatch: '18/01/2024',
        status: 'active',
        logo: '🏫'
      },
      {
        id: 3,
        name: 'Sciences Po',
        participants: 124,
        rank: 7,
        points: 1850,
        nextMatch: '20/01/2024',
        status: 'pending',
        logo: '🏫'
      }
    ],
    corp: [
      {
        id: 1,
        name: 'Google France',
        participants: 245,
        rank: 2,
        points: 2980,
        nextMatch: '16/01/2024',
        status: 'active',
        logo: '🏮'
      },
      {
        id: 2,
        name: 'Total Energies',
        participants: 198,
        rank: 5,
        points: 2100,
        nextMatch: '19/01/2024',
        status: 'active',
        logo: '🏮'
      },
      {
        id: 3,
        name: 'BNP Paribas',
        participants: 167,
        rank: 4,
        points: 2350,
        nextMatch: '21/01/2024',
        status: 'pending',
        logo: '🏮'
      }
    ],
    friends: [
      {
        id: 1,
        name: 'Les Champions',
        participants: 8,
        rank: 1,
        points: 1200,
        nextMatch: '14/01/2024',
        status: 'active',
        logo: '👊'
      },
      {
        id: 2,
        name: 'Team Rocket',
        participants: 12,
        rank: 2,
        points: 980,
        nextMatch: '17/01/2024',
        status: 'active',
        logo: '🚀'
      },
      {
        id: 3,
        name: 'Les Invincibles',
        participants: 10,
        rank: 3,
        points: 850,
        nextMatch: '22/01/2024',
        status: 'pending',
        logo: '⚡'
      }
    ]
  };

  const getLeagueIcon = (type) => {
    switch(type) {
      case 'campus':
        return <Building className="text-blue-400" size={24} />;
      case 'corp':
        return <Trophy className="text-purple-400" size={24} />;
      case 'friends':
        return <Heart className="text-pink-400" size={24} />;
      default:
        return <Trophy className="text-gray-400" size={24} />;
    }
  };

  const getLeagueTitle = (type) => {
    switch(type) {
      case 'campus':
        return 'Campus League';
      case 'corp':
        return 'Entreprise League';
      case 'friends':
        return 'Friends League';
      default:
        return 'League';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-500' : 'bg-yellow-500';
  };

  const filteredLeagues = leagues[activeLeague].filter(league =>
    league.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      {/* Header */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            {getLeagueIcon(activeLeague)}
            <div>
              <h1 className="text-3xl font-bold text-white">{getLeagueTitle(activeLeague)}</h1>
              <p className="text-gray-400">Rejoignez et compétitionnez dans les ligues</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold transition-colors flex items-center">
            <Plus className="mr-2" size={20} />
            Créer une League
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher une league..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* League Type Tabs */}
      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveLeague('campus')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            activeLeague === 'campus'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Building size={20} />
          <span>Campus</span>
        </button>
        <button
          onClick={() => setActiveLeague('corp')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            activeLeague === 'corp'
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Trophy size={20} />
          <span>Entreprise</span>
        </button>
        <button
          onClick={() => setActiveLeague('friends')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            activeLeague === 'friends'
              ? 'bg-pink-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Heart size={20} />
          <span>Amis</span>
        </button>
      </div>

      {/* Leagues List */}
      <div className="space-y-4">
        {filteredLeagues.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-lg">Aucune league trouvée</p>
          </div>
        ) : (
          filteredLeagues.map((league) => (
            <div
              key={league.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                {/* League Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                    {league.logo}
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-white font-bold text-xl">{league.name}</h3>
                      <span className={`w-3 h-3 rounded-full ${getStatusColor(league.status)}`} />
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {league.participants} joueurs
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        Prochain: {league.nextMatch}
                      </div>
                    </div>
                  </div>
                </div>

                {/* League Stats */}
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">#{league.rank}</div>
                    <div className="text-xs text-gray-400">Rang</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{league.points}</div>
                    <div className="text-xs text-gray-400">Points</div>
                  </div>
                  <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                    <ChevronRight className="text-white" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats Summary */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 text-sm">Total Leagues</p>
              <p className="text-3xl font-bold text-white">{leagues[activeLeague].length}</p>
            </div>
            <Trophy className="text-blue-200" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-sm">Actives</p>
              <p className="text-3xl font-bold text-white">
                {leagues[activeLeague].filter(l => l.status === 'active').length}
              </p>
            </div>
            <Users className="text-purple-200" size={40} />
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-200 text-sm">Participants</p>
              <p className="text-3xl font-bold text-white">
                {leagues[activeLeague].reduce((sum, l) => sum + l.participants, 0)}
              </p>
            </div>
            <Heart className="text-pink-200" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
