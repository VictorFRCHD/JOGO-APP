Notifications.jsx  import React, { useState } from 'react';
import { Bell, Trophy, UserPlus, Calendar, MessageCircle, Award, TrendingUp, X, Check, Clock } from 'lucide-react';

function Notifications() {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'friend_request',
      icon: UserPlus,
      title: 'Nouvelle demande d\'ami',
      message: 'Alexandre veut devenir votre ami',
      time: '5 min',
      read: false,
      actions: true
    },
    {
      id: 2,
      type: 'match',
      icon: Trophy,
      title: 'Match terminé',
      message: 'Victoire contre léquipe Phoenix! +50 XP',
      time: '1h',
      read: false,
      actions: false
    },
    {
      id: 3,
      type: 'achievement',
      icon: Award,
      title: 'Nouveau succès débloqué',
      message: 'Champion Junior: Gagnez 10 matchs consécutifs',
      time: '2h',
      read: false,
      actions: false
    },
    {
      id: 4,
      type: 'league',
      icon: TrendingUp,
      title: 'Nouveau classement',
      message: 'Vous êtes maintenant 3ème dans la Ligue Campus',
      time: '3h',
      read: true,
      actions: false
    },
    {
      id: 5,
      type: 'event',
      icon: Calendar,
      title: 'Rappel d\'Evenement',
      message: 'Tournoi de football dans 30 minutes',
      time: '30 min',
      read: false,
      actions: false
    },
    {
      id: 6,
      type: 'message',
      icon: MessageCircle,
      title: 'Nouveau message',
      message: 'Lucas: On se retrouve au terrain?',
      time: '1h',
      read: true,
      actions: false
    },
    {
      id: 7,
      type: 'match',
      icon: Trophy,
      title: 'Match à venir',
      message: 'Votre match contre les Dragons commence dans 1 heure',
      time: '45 min',
      read: false,
      actions: false
    },
    {
      id: 8,
      type: 'achievement',
      icon: Award,
      title: 'Badge obtenu',
      message: 'Vétéran: 100 matchs joués',
      time: '5h',
      read: true,
      actions: false
    },
  ]);

  const getIconColor = (type) => {
    const colors = {
      friend_request: 'text-blue-400',
      match: 'text-purple-400',
      achievement: 'text-yellow-400',
      league: 'text-green-400',
      event: 'text-pink-400',
      message: 'text-cyan-400',
    };
    return colors[type] || 'text-gray-400';
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.read;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
            <p className="text-gray-400">
              {unreadCount > 0 ? `${unreadCount} notification${unreadCount > 1 ? 's' : ''} non lue${unreadCount > 1 ? 's' : ''}` : 'Aucune nouvelle notification'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
            >
              <Check size={18} />
              <span>Tout marquer comme lu</span>
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'Toutes' },
            { id: 'unread', label: 'Non lues' },
            { id: 'friend_request', label: 'Amis' },
            { id: 'match', label: 'Matchs' },
            { id: 'achievement', label: 'Succès' },
            { id: 'league', label: 'Ligues' },
            { id: 'event', label: 'Événements' },
            { id: 'message', label: 'Messages' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                filter === id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <Bell className="mx-auto text-gray-600 mb-4" size={48} />
            <p className="text-gray-400 text-lg">Aucune notification</p>
          </div>
        ) : (
          filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className={`bg-gray-800 rounded-lg p-4 flex items-start space-x-4 transition-all hover:bg-gray-750 ${
                  !notif.read ? 'border-l-4 border-purple-600' : ''
                }`}
              >
                <div className={`p-3 rounded-full bg-gray-700 ${getIconColor(notif.type)}`}>
                  <Icon size={24} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-white font-semibold">{notif.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 text-sm flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{notif.time}</span>
                      </span>
                      {!notif.read && (
                        <button
                          onClick={() => markAsRead(notif.id)}
                          className="p-1 hover:bg-gray-600 rounded transition-colors"
                          title="Marquer comme lu"
                        >
                          <Check size={16} className="text-green-400" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notif.id)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors"
                        title="Supprimer"
                      >
                        <X size={16} className="text-red-400" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400">{notif.message}</p>
                  
                  {notif.actions && (
                    <div className="flex space-x-2 mt-3">
                      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-sm">
                        Accepter
                      </button>
                      <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors text-sm">
                        Refuser
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Notifications;
