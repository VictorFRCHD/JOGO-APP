import React, { useState, useEffect } from 'react';
import { Trophy, Star, TrendingUp, Award, Target, Zap, Users, Calendar, Activity, BarChart3, Clock } from 'lucide-react';

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

  const [activities, setActivities] = useState([
    { id: 1, type: 'match', desc: 'Victoire en Arena', xp: 150, time: '2h ago', icon: Trophy },
    { id: 2, type: 'achievement', desc: 'Badge "Speed Demon" débloqué', xp: 200, time: '5h ago', icon: Award },
    { id: 3, type: 'league', desc: 'Monté en Ligue Campus', xp: 300, time: '1d ago', icon: TrendingUp },
    { id: 4, type: 'challenge', desc: 'Challenge hebdomadaire terminé', xp: 500, time: '2d ago', icon: Target },
    { id: 5, type: 'friend', desc: 'Nouveau match avec @Alex92', xp: 100, time: '3d ago', icon: Users }
  ]);

  const [achievements, setAchievements] = useState([
    { name: 'Marathon Runner', progress: 75, max: 100, icon: Activity },
    { name: 'Social Butterfly', progress: 32, max: 50, icon: Users },
    { name: 'Perfect Week', progress: 5, max: 7, icon: Calendar },
    { name: 'Coin Collector', progress: 2500, max: 5000, icon: Zap }
  ]);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gradient mb-2">Tableau de Bord</h1>
          <p className="text-gray-400">Bienvenue {user.username}! Suivez vos performances</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card p-6 card-hover animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl neon-glow-blue">
                <Star className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">{user.level}</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-2">Niveau</h3>
            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000" style={{width: `${xpPercentage}%`}}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">{user.xp} / {user.xpToNextLevel} XP</p>
          </div>

          <div className="glass-card p-6 card-hover animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${getRankColor(user.rank)} rounded-xl card-shine`}>
                <Trophy className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white">{user.rank}</span>
            </div>
            <h3 className="text-gray-400 text-sm">Rang Actuel</h3>
            <p className="text-xs text-gray-500 mt-2">Top 15% Global</p>
          </div>

          <div className="glass-card p-6 card-hover animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl neon-glow-green">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">{user.winRate}%</span>
            </div>
            <h3 className="text-gray-400 text-sm">Taux de Victoire</h3>
            <p className="text-xs text-green-500 mt-2">+5% ce mois</p>
          </div>

          <div className="glass-card p-6 card-hover animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl neon-glow-yellow">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-white">{user.shopCoins}</span>
            </div>
            <h3 className="text-gray-400 text-sm">JOGO Coins</h3>
            <p className="text-xs text-yellow-500 mt-2">+250 cette semaine</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 glass-card p-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Activity size={24} className="text-blue-500" />
                Activité Récente
              </h2>
              <span className="text-sm text-gray-400">{activities.length} activités</span>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all card-hover" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.desc}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-green-500 flex items-center gap-1"><Zap size={12} /> +{activity.xp} XP</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} /> {activity.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BarChart3 size={24} className="text-purple-500" />
              Statistiques
            </h2>
            <div className="space-y-4">
              {Object.entries(user.stats).map(([stat, value], index) => (
                <div key={stat} className="animate-slide-in-right" style={{animationDelay: `${0.7 + index * 0.1}s`}}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 capitalize text-sm">{stat}</span>
                    <span className="text-white font-bold">{value}</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000" style={{width: `${value}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">{user.recentMatches}</p>
                  <p className="text-xs text-gray-400">Matchs Joués</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-500 mb-1">{user.streak}</p>
                  <p className="text-xs text-gray-400">Série Actuelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Target size={24} className="text-green-500" />
              Progression des Objectifs
            </h2>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Voir tous</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const progress = (achievement.progress / achievement.max) * 100;
              return (
                <div key={achievement.name} className="p-4 bg-gray-800/50 rounded-lg card-hover" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                      <Icon size={20} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{achievement.name}</h3>
                      <p className="text-xs text-gray-400">{achievement.progress} / {achievement.max}</p>
                    </div>
                    <span className="text-lg font-bold text-purple-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" style={{width: `${progress}%`}}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
