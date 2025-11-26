import React, { useState } from 'react';
import { Trophy, Gift, Lock, Star, Crown, Zap, Award, ChevronRight } from 'lucide-react';

const JOGOPass = () => {
  const [activeTab, setActiveTab] = useState('free'); // 'free' or 'premium'

  // Mock user progress
  const userProgress = {
    currentTier: 8,
    xp: 2400,
    xpForNextTier: 3000,
    hasPremiumPass: false
  };

  // Mock tiers data
  const tiers = [
    {
      tier: 1,
      xpRequired: 0,
      freeReward: { type: 'coins', amount: 50, icon: '🪙' },
      premiumReward: { type: 'badge', name: 'Badge Bronze', icon: '🥉' }
    },
    {
      tier: 2,
      xpRequired: 500,
      freeReward: { type: 'xp', amount: 100, icon: '⭐' },
      premiumReward: { type: 'coins', amount: 200, icon: '🪙' }
    },
    {
      tier: 3,
      xpRequired: 1000,
      freeReward: { type: 'coins', amount: 75, icon: '🪙' },
      premiumReward: { type: 'skin', name: 'Skin Élite', icon: '👕' }
    },
    {
      tier: 4,
      xpRequired: 1500,
      freeReward: { type: 'xp', amount: 150, icon: '⭐' },
      premiumReward: { type: 'coins', amount: 300, icon: '🪙' }
    },
    {
      tier: 5,
      xpRequired: 2000,
      freeReward: { type: 'coins', amount: 100, icon: '🪙' },
      premiumReward: { type: 'badge', name: 'Badge Argent', icon: '🥈' }
    },
    {
      tier: 6,
      xpRequired: 2500,
      freeReward: { type: 'xp', amount: 200, icon: '⭐' },
      premiumReward: { type: 'emote', name: 'Emote Victoire', icon: '🎉' }
    },
    {
      tier: 7,
      xpRequired: 3000,
      freeReward: { type: 'coins', amount: 125, icon: '🪙' },
      premiumReward: { type: 'coins', amount: 500, icon: '🪙' }
    },
    {
      tier: 8,
      xpRequired: 3500,
      freeReward: { type: 'xp', amount: 250, icon: '⭐' },
      premiumReward: { type: 'skin', name: 'Skin Légendaire', icon: '👕' }
    },
    {
      tier: 9,
      xpRequired: 4000,
      freeReward: { type: 'coins', amount: 150, icon: '🪙' },
      premiumReward: { type: 'badge', name: 'Badge Or', icon: '🥇' }
    },
    {
      tier: 10,
      xpRequired: 5000,
      freeReward: { type: 'badge', name: 'Badge Platine', icon: '💎' },
      premiumReward: { type: 'exclusive', name: 'Titre Exclusif', icon: '👑' }
    }
  ];

  const isUnlocked = (tier) => tier <= userProgress.currentTier;
  const isCurrent = (tier) => tier === userProgress.currentTier;

  const getRewardDisplay = (reward) => {
    if (reward.type === 'coins') {
      return `${reward.amount} JOGO Coins`;
    } else if (reward.type === 'xp') {
      return `${reward.amount} XP`;
    } else {
      return reward.name;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Crown className="mr-2" size={32} />
              JOGO Pass
            </h1>
            <p className="text-purple-100 mt-1">Saison 1 - Hiver 2024</p>
          </div>
          {!userProgress.hasPremiumPass && (
            <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg font-bold text-lg transition-colors flex items-center">
              <Zap className="mr-2" size={20} />
              Débloquer Premium
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-900/50 rounded-lg p-4">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Niveau {userProgress.currentTier}</span>
            <span>{userProgress.xp} / {userProgress.xpForNextTier} XP</span>
          </div>
          <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${(userProgress.xp / userProgress.xpForNextTier) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-purple-200 text-sm">
            {userProgress.xpForNextTier - userProgress.xp} XP jusqu'au prochain niveau
          </div>
        </div>
      </div>

      {/* Tab Toggle */}
      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('free')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
            activeTab === 'free' 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Gift className="mr-2" size={20} />
          Pass Gratuit
        </button>
        <button
          onClick={() => setActiveTab('premium')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
            activeTab === 'premium' 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Crown className="mr-2" size={20} />
          Pass Premium
        </button>
      </div>

      {/* Tiers List */}
      <div className="space-y-4">
        {tiers.map((tierData) => {
          const unlocked = isUnlocked(tierData.tier);
          const current = isCurrent(tierData.tier);
          const reward = activeTab === 'free' ? tierData.freeReward : tierData.premiumReward;

          return (
            <div
              key={tierData.tier}
              className={`bg-gray-800 rounded-lg p-4 ${
                current ? 'ring-2 ring-purple-500' : ''
              } ${
                !unlocked ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                {/* Tier Number */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                  unlocked 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {unlocked ? (
                    <Trophy size={24} />
                  ) : (
                    <Lock size={24} />
                  )}
                </div>

                {/* Tier Info */}
                <div className="flex-1 ml-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-semibold text-lg">
                      Niveau {tierData.tier}
                    </h3>
                    {current && (
                      <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-bold">
                        EN COURS
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {tierData.xpRequired} XP requis
                  </p>
                </div>

                {/* Reward */}
                <div className="ml-4 text-right">
                  <div className="flex items-center space-x-2">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl ${
                      activeTab === 'premium'
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                        : 'bg-gray-700'
                    }`}>
                      {unlocked ? reward.icon : <Lock className="text-gray-500" size={24} />}
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {unlocked ? getRewardDisplay(reward) : 'Verrouillé'}
                      </div>
                      {unlocked && (
                        <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                          Réclamer
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Upsell */}
      {!userProgress.hasPremiumPass && (
        <div className="mt-8 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Star className="mr-2" size={28} />
                Passez au Premium !
              </h3>
              <p className="text-white/90">
                Débloquez des récompenses exclusives et gagnez 2x plus d'XP
              </p>
              <ul className="mt-4 space-y-2">
                <li className="text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Récompenses exclusives à chaque niveau
                </li>
                <li className="text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Badges et skins uniques
                </li>
                <li className="text-white flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  Accès prioritaire aux événements
                </li>
              </ul>
            </div>
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-bold text-xl transition-colors">
              Acheter - 9.99€
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JOGOPass;
