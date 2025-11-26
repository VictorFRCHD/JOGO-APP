import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Moon, Sun, Lock, User, Globe, Shield, Eye, Smartphone } from 'lucide-react';

function Settings() {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    // Account Settings
    username: 'Victor',
    email: 'victor@jogo.com',
    bio: 'Passionné de sport et de compétition',
    privateProfile: false,
    
    // Notifications
    pushNotifications: true,
    emailNotifications: true,
    matchReminders: true,
    friendRequests: true,
    leagueUpdates: true,
    achievementAlerts: true,
    
    // Privacy
    showOnlineStatus: true,
    showMatchHistory: true,
    showStatistics: true,
    allowFriendRequests: true,
    
    // Appearance
    darkMode: true,
    language: 'fr',
    animations: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderAccountSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Nom d'utilisateur</label>
        <input
          type="text"
          value={settings.username}
          onChange={(e) => handleChange('username', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
        <input
          type="email"
          value={settings.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Bio</label>
        <textarea
          value={settings.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        />
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <Lock className="text-purple-400" size={20} />
          <div>
            <div className="text-white font-semibold">Profil privé</div>
            <div className="text-gray-400 text-sm">Seuls vos amis peuvent voir votre profil</div>
          </div>
        </div>
        <button
          onClick={() => handleToggle('privateProfile')}
          className={`relative w-12 h-6 rounded-full transition-colors ${settings.privateProfile ? 'bg-purple-600' : 'bg-gray-600'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.privateProfile ? 'translate-x-6' : ''}`} />
        </button>
      </div>
      
      <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
        Changer le mot de passe
      </button>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-4">
      {[
        { key: 'pushNotifications', icon: Smartphone, label: 'Notifications Push', desc: 'Recevoir des notifications mobiles' },
        { key: 'emailNotifications', icon: Bell, label: 'Notifications Email', desc: 'Recevoir des emails de notification' },
        { key: 'matchReminders', icon: Bell, label: 'Rappels de matchs', desc: 'Rappels avant vos matchs programmés' },
        { key: 'friendRequests', icon: User, label: 'Demandes d\'amis', desc: 'Notifications pour nouvelles demandes' },
        { key: 'leagueUpdates', icon: Globe, label: 'Mises à jour des ligues', desc: 'Nouveautés dans vos ligues' },
        { key: 'achievementAlerts', icon: Shield, label: 'Succès débloqués', desc: 'Alertes pour nouveaux succès' },
      ].map(({ key, icon: Icon, label, desc }) => (
        <div key={key} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon className="text-purple-400" size={20} />
            <div>
              <div className="text-white font-semibold">{label}</div>
              <div className="text-gray-400 text-sm">{desc}</div>
            </div>
          </div>
          <button
            onClick={() => handleToggle(key)}
            className={`relative w-12 h-6 rounded-full transition-colors ${settings[key] ? 'bg-purple-600' : 'bg-gray-600'}`}
          >
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings[key] ? 'translate-x-6' : ''}`} />
          </button>
        </div>
      ))}
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-4">
      {[
        { key: 'showOnlineStatus', icon: Eye, label: 'Statut en ligne', desc: 'Montrer quand vous êtes en ligne' },
        { key: 'showMatchHistory', icon: Eye, label: 'Historique des matchs', desc: 'Afficher votre historique public' },
        { key: 'showStatistics', icon: Eye, label: 'Statistiques', desc: 'Rendre vos stats visibles' },
        { key: 'allowFriendRequests', icon: User, label: 'Demandes d\'amis', desc: 'Autoriser les demandes d\'amis' },
      ].map(({ key, icon: Icon, label, desc }) => (
        <div key={key} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon className="text-purple-400" size={20} />
            <div>
              <div className="text-white font-semibold">{label}</div>
              <div className="text-gray-400 text-sm">{desc}</div>
            </div>
          </div>
          <button
            onClick={() => handleToggle(key)}
            className={`relative w-12 h-6 rounded-full transition-colors ${settings[key] ? 'bg-purple-600' : 'bg-gray-600'}`}
          >
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings[key] ? 'translate-x-6' : ''}`} />
          </button>
        </div>
      ))}
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          {settings.darkMode ? <Moon className="text-purple-400" size={20} /> : <Sun className="text-yellow-400" size={20} />}
          <div>
            <div className="text-white font-semibold">Mode sombre</div>
            <div className="text-gray-400 text-sm">Thème d'affichage de l'application</div>
          </div>
        </div>
        <button
          onClick={() => handleToggle('darkMode')}
          className={`relative w-12 h-6 rounded-full transition-colors ${settings.darkMode ? 'bg-purple-600' : 'bg-gray-600'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.darkMode ? 'translate-x-6' : ''}`} />
        </button>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">Langue</label>
        <select
          value={settings.language}
          onChange={(e) => handleChange('language', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
        <div className="flex items-center space-x-3">
          <SettingsIcon className="text-purple-400" size={20} />
          <div>
            <div className="text-white font-semibold">Animations</div>
            <div className="text-gray-400 text-sm">Activer les animations de l'interface</div>
          </div>
        </div>
        <button
          onClick={() => handleToggle('animations')}
          className={`relative w-12 h-6 rounded-full transition-colors ${settings.animations ? 'bg-purple-600' : 'bg-gray-600'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.animations ? 'translate-x-6' : ''}`} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Paramètres</h1>
        <p className="text-gray-400">Gérez vos préférences et paramètres de compte</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tabs Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-2 space-y-1">
            {[
              { id: 'account', label: 'Compte', icon: User },
              { id: 'notifications', label: 'Notifications', icon: Bell },
              { id: 'privacy', label: 'Confidentialité', icon: Shield },
              { id: 'appearance', label: 'Apparence', icon: SettingsIcon },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-800 rounded-lg p-6">
            {activeTab === 'account' && renderAccountSettings()}
            {activeTab === 'notifications' && renderNotificationSettings()}
            {activeTab === 'privacy' && renderPrivacySettings()}
            {activeTab === 'appearance' && renderAppearanceSettings()}
            
            <div className="mt-6 pt-6 border-t border-gray-700 flex justify-end space-x-4">
              <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors">
                Annuler
              </button>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
