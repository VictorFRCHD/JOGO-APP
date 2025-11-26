import React, { useState } from 'react';
import { UserPlus, Users, MessageCircle, UserCheck, UserX, Search, Trophy, Gamepad2 } from 'lucide-react';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('friends');
  const [searchTerm, setSearchTerm] = useState('');

  const friends = [
    { id: 1, name: 'Alex Martin', rank: 'Diamant', level: 45, status: 'online', matches: 245 },
    { id: 2, name: 'Sophie Dupont', rank: 'Platine', level: 38, status: 'online', matches: 189 },
    { id: 3, name: 'Thomas Bernard', rank: 'Or', level: 32, status: 'offline', matches: 156 },
    { id: 4, name: 'Marie Laurent', rank: 'Platine', level: 41, status: 'in-game', matches: 203 }
  ];

  const friendRequests = [
    { id: 1, name: 'Lucas Petit', rank: 'Argent', level: 28 },
    { id: 2, name: 'Emma Moreau', rank: 'Or', level: 35 }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'in-game': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-white flex items-center">
            <Users className="mr-3 text-purple-400" size={32} />
            Amis
          </h1>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white flex items-center">
            <UserPlus className="mr-2" size={20} />
            Ajouter un Ami
          </button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Rechercher un ami..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>

      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
        <button onClick={() => setActiveTab('friends')} className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${activeTab === 'friends' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}>
          Mes Amis ({friends.length})
        </button>
        <button onClick={() => setActiveTab('requests')} className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${activeTab === 'requests' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}>
          Demandes ({friendRequests.length})
        </button>
      </div>

      {activeTab === 'friends' ? (
        <div className="space-y-4">
          {friends.map(friend => (
            <div key={friend.id} className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">{friend.name.charAt(0)}</div>
                  <span className={`absolute bottom-0 right-0 w-4 h-4 ${getStatusColor(friend.status)} rounded-full border-2 border-gray-800`} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{friend.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{friend.rank} - Niv. {friend.level}</span>
                    <span className="flex items-center"><Gamepad2 size={14} className="mr-1" />{friend.matches} matchs</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg"><MessageCircle size={20} /></button>
                <button className="p-3 bg-green-600 hover:bg-green-700 rounded-lg"><Trophy size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {friendRequests.map(request => (
            <div key={request.id} className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">{request.name.charAt(0)}</div>
                <div>
                  <h3 className="text-white font-bold text-lg">{request.name}</h3>
                  <p className="text-sm text-gray-400">{request.rank} - Niv. {request.level}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center"><UserCheck size={18} className="mr-2" />Accepter</button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg flex items-center"><UserX size={18} className="mr-2" />Refuser</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
