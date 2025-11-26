// JOGO - Application Sportive Gamifiée Complete
import React, { useState } from 'react';
import { Home, Users, Trophy, ShoppingBag, User, Calendar as CalendarIcon, Crown, Sword, Menu, X, Bell, Coins, Settings as SettingsIcon } from 'lucide-react';
import './App.css';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import Store from './components/Store';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import JOGOPass from './components/JOGOPass';
import Leagues from './components/Leagues';
import Friends from './components/Friends';
import Settings from './components/Settings';
import Notifications from './components/Notifications';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  // Mock user data
  const user = {
    username: 'Victor',
    level: 42,
    xp: 8750,
    xpForNextLevel: 10000,
    rank: 'Platine',
    jogoCoins: 2450,
    notifications: 3
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

  const renderView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'arena':
        return <Arena />;
      case 'store':
        return <Store />;
      case 'profile':
        return <Profile />;
      case 'calendar':
        return <Calendar />;
      case 'jogopass':
        return <JOGOPass />;
            case 'leagues':
      return <Leagues />;
    case 'friends':
      return <Friends />;
    case 'settings':
      return <Settings />;
    case 'notifications':
      return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Top Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              JOGO
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* JOGO Coins */}
            <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-full">
              <Coins className="text-yellow-400" size={18} />
              <span className="text-white font-semibold">{user.jogoCoins}</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-white hover:bg-gray-700 rounded-lg transition-colors">
              <Bell size={20} />
              {user.notifications > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  {user.notifications}
                </span>
              )}
            </button>

            {/* User Info */}
            <div className="hidden md:flex items-center space-x-3 bg-gray-700 px-3 py-2 rounded-lg">
              <div className="text-right">
                <div className="text-white font-semibold text-sm">{user.username}</div>
                <div className={`text-xs bg-gradient-to-r ${getRankColor(user.rank)} bg-clip-text text-transparent font-bold`}>
                  {user.rank} - Niv. {user.level}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                {user.username.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Side Navigation */}
        <nav className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-800 border-r border-gray-700 transition-transform duration-300 ease-in-out`}>
          <div className="p-4 space-y-2 mt-16 lg:mt-0">
            <button
              onClick={() => { setCurrentView('dashboard'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Home size={20} />
              <span className="font-semibold">Dashboard</span>
            </button>

            <button
              onClick={() => { setCurrentView('arena'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'arena'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Sword size={20} />
              <span className="font-semibold">Arena</span>
            </button>

            <button
              onClick={() => { setCurrentView('calendar'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'calendar'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <CalendarIcon size={20} />
              <span className="font-semibold">Calendrier</span>
            </button>

            <button
              onClick={() => { setCurrentView('jogopass'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'jogopass'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Crown size={20} />
              <span className="font-semibold">JOGO Pass</span>
            </button>

            <button
              onClick={() => { setCurrentView('store'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'store'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <ShoppingBag size={20} />
              <span className="font-semibold">Store</span>
            </button>

            <button
              onClick={() => { setCurrentView('profile'); setMenuOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'profile'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
                          <User size={20} />
            <span className="font-semibold">Profil</span>
          </button>
          
          <button
            onClick={() => { setCurrentView('leagues'); setMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              currentView === 'leagues'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Trophy size={20} />
            <span className="font-semibold">Ligues</span>
          </button>
          
          <button
            onClick={() => { setCurrentView('friends'); setMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              currentView === 'friends'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Users size={20} />
            <span className="font-semibold">Amis</span>
          </button>
          
          <button
            onClick={() => { setCurrentView('settings'); setMenuOpen(false); }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              currentView === 'settings'
                ? 'bg-purple-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Settings size={20} />
            <span className="font-semibold">Paramètres</span>
          </button>
            >
              <User size={20} />
              <span className="font-semibold">Profil</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {renderView()}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </div>
  );
}

export default App;
