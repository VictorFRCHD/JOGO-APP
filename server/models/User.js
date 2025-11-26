const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Informations de base
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  
  // Profil
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ['male', 'female', 'other', 'prefer_not_to_say']
  },
  avatar: {
    type: String,
    default: 'default-avatar.png'
  },
  bio: {
    type: String,
    maxlength: 500
  },
  
  // Localisation
  location: {
    city: String,
    country: String,
    coordinates: {
      type: { type: String, default: 'Point' },
      coordinates: [Number] // [longitude, latitude]
    }
  },
  
  // Gamification
  xp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  rank: {
    type: String,
    enum: ['Bronze', 'Argent', 'Or', 'Platine', 'Diamant', 'Elite'],
    default: 'Bronze'
  },
  
  // Attributs du joueur
  attributes: {
    vitesse: { type: Number, default: 50 },
    endurance: { type: Number, default: 50 },
    force: { type: Number, default: 50 },
    technique: { type: Number, default: 50 },
    mental: { type: Number, default: 50 }
  },
  
  // Badges et réalisations
  badges: [{
    badgeId: String,
    name: String,
    description: String,
    icon: String,
    unlockedAt: { type: Date, default: Date.now }
  }],
  
  // Statistiques
  stats: {
    matchesPlayed: { type: Number, default: 0 },
    matchesWon: { type: Number, default: 0 },
    matchesLost: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    currentStreak: { type: Number, default: 0 },
    bestStreak: { type: Number, default: 0 }
  },
  
  // JOGO Pass
  jogoPass: {
    level: { type: Number, default: 1 },
    xp: { type: Number, default: 0 },
    isPremium: { type: Boolean, default: false },
    rewards: [{
      rewardId: String,
      name: String,
      claimed: { type: Boolean, default: false },
      claimedAt: Date
    }]
  },
  
  // Boutique & Inventaire
  coins: {
    type: Number,
    default: 100
  },
  inventory: [{
    itemId: String,
    name: String,
    type: String, // 'skin', 'emoji', 'boost', 'avatar_frame'
    purchasedAt: { type: Date, default: Date.now }
  }],
  
  // Sports préférés
  favoriteSports: [{
    type: String,
    enum: ['football', 'basketball', 'tennis', 'volleyball', 'running', 'cycling', 'swimming', 'fitness', 'other']
  }],
  
  // Niveau de compétence par sport
  sportLevels: [{
    sport: String,
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert']
    }
  }],
  
  // Amis et communauté
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  friendRequests: [{
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
  }],
  
  // Notifications
  notifications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Notification'
  }],
  notificationSettings: {
    matchInvites: { type: Boolean, default: true },
    friendRequests: { type: Boolean, default: true },
    achievements: { type: Boolean, default: true },
    messages: { type: Boolean, default: true },
    updates: { type: Boolean, default: true }
  },
  
  // Paramètres de confidentialité
  privacy: {
    profileVisibility: {
      type: String,
      enum: ['public', 'friends', 'private'],
      default: 'public'
    },
    showLocation: { type: Boolean, default: true },
    showStats: { type: Boolean, default: true },
    allowFriendRequests: { type: Boolean, default: true }
  },
  
  // Statut du compte
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  premiumExpiresAt: Date,
  
  // Authentification
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  verificationToken: String,
  
  // Dates
  lastLogin: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index pour la recherche géospatiale
userSchema.index({ 'location.coordinates': '2dsphere' });

// Middleware avant sauvegarde
userSchema.pre('save', async function(next) {
  // Hash le mot de passe si modifié
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  
  // Met à jour la date de modification
  this.updatedAt = Date.now();
  
  // Calcule le niveau basé sur l'XP
  this.level = Math.floor(this.xp / 1000) + 1;
  
  // Détermine le rang
  if (this.xp >= 50000) this.rank = 'Elite';
  else if (this.xp >= 25000) this.rank = 'Diamant';
  else if (this.xp >= 10000) this.rank = 'Platine';
  else if (this.xp >= 5000) this.rank = 'Or';
  else if (this.xp >= 1000) this.rank = 'Argent';
  else this.rank = 'Bronze';
  
  // Calcule le taux de victoire
  if (this.stats.matchesPlayed > 0) {
    this.stats.winRate = Math.round((this.stats.matchesWon / this.stats.matchesPlayed) * 100);
  }
  
  next();
});

// Méthode pour comparer les mots de passe
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Méthode pour ajouter de l'XP
userSchema.methods.addXP = function(amount) {
  this.xp += amount;
  return this.save();
};

// Méthode pour débloquer un badge
userSchema.methods.unlockBadge = function(badge) {
  const hasB adge = this.badges.some(b => b.badgeId === badge.badgeId);
  if (!hasBadge) {
    this.badges.push(badge);
    return this.save();
  }
  return Promise.resolve(this);
};

// Méthode pour acheter un objet
userSchema.methods.purchaseItem = function(item, cost) {
  if (this.coins >= cost) {
    this.coins -= cost;
    this.inventory.push(item);
    return this.save();
  }
  throw new Error('Insufficient coins');
};

module.exports = mongoose.model('User', userSchema);
