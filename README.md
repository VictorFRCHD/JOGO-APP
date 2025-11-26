# 🎮 JOGO - Application Sportive Gamifiée

> **Application mobile pour la pratique sportive avec gamification et ubérisation**

JOGO est une plateforme mobile complète qui permet à n'importe qui de s'inscrire, créer et rejoindre des événements sportifs organisés par des particuliers. L'application combine gamification du sport et ubérisation pour créer une expérience unique.

## ✨ Fonctionnalités Principales

### 🏠 Dashboard Gamifié
- **Système XP et Niveaux** : Progressez en jouant
- **Badges et Récompenses** : Débloquez des achievements
- **Stats hebdomadaires** : Suivez votre activité
- **Profil personnalisé** : Avatar, bio, statistiques

### 🔍 Explorer les Matchs
- **Recherche par sport** : Football, Basketball, Padel, Tennis
- **Filtres avancés** : Niveau, distance, horaire
- **Carte interactive** : Visualisez les événements proches
- **Détails complets** : Participants, lieu, niveau requis

### ⚔️ L'Arène Compétitive
- **Système de Rangs** : Bronze → Argent → Or → Platine → Diamant → Elite
- **Matchmaking automatique** : Trouvez des adversaires de votre niveau
- **Points compétitifs** : Montez dans le classement
- **Historique des matchs** : Suivez vos performances
- **Récompenses de saison** : Badges exclusifs et titres

### 🎫 JOGO Pass (Battle Pass)
- **Système de niveaux** : 50 paliers à débloquer
- **Récompenses gratuites** : Coins, badges, bannières
- **Version Premium** : Récompenses exclusives
- **Défis hebdomadaires** : XP bonus

### 🏪 Store In-App
- **Équipements virtuels** : Maillots, crampons, accessoires
- **Boosts XP** : Accélérez votre progression
- **Cosmétiques** : Personnalisez votre profil
- **Monnaie virtuelle** : Coins et Gems

### 👤 Profil Utilisateur
- **Attributs joueur** : Vitesse, Tir, Passe, Dribble, Défense, Physique
- **Graphique radar** : Visualisez vos stats
- **Historique de matchs** : Tous vos résultats
- **Endorsements** : Recommandations des autres joueurs
- **Coéquipiers fréquents** : Créez votre équipe

### 🏢 Modules Communautaires
- **Campus** : Compétitions entre établissements
- **Entreprise** : Tournois corporates
- **Ligues d'Amis** : Créez vos propres ligues

### 📅 Calendrier & Notifications
- **Vue hebdomadaire** : Tous vos matchs à venir
- **Rappels automatiques** : Ne ratez plus un match
- **Invitations** : Rejoignez les matchs de vos amis
- **Actualités** : Restez informé des saisons et events

### ⚽ Création d'Événements
- **Interface guidée** : Créez un match en quelques clics
- **Choix du terrain** : Sélectionnez sur carte
- **Gestion des participants** : Nombres de places, niveau requis
- **Options premium** : Match privé, payant, etc.

## 🛠️ Technologies Utilisées

### Front-End
- **React** : Framework UI
- **Tailwind CSS** : Styling moderne
- **Lucide Icons** : Bibliothèque d'icônes

### Back-End
- **Node.js** : Runtime JavaScript
- **Express.js** : Framework serveur
- **MongoDB** : Base de données NoSQL
- **JWT** : Authentification sécurisée

### Services
- **Stripe API** : Paiements sécurisés
- **Socket.io** : Notifications en temps réel
- **Google Maps API** : Géolocalisation

## 📦 Installation

### Prérequis
```bash
Node.js >= 16.x
npm >= 8.x
MongoDB >= 5.x
```

### Installation du projet
```bash
# Cloner le repository
git clone https://github.com/VictorFRCHD/JOGO-APP.git
cd JOGO-APP

# Installer les dépendances client
cd client
npm install

# Installer les dépendances serveur
cd ../server
npm install
```

### Configuration
Créez un fichier `.env` dans le dossier `server/` :
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jogo
JWT_SECRET=votre_secret_jwt
STRIPE_SECRET_KEY=sk_test_votre_cle
```

### Lancement
```bash
# Terminal 1 - Back-end
cd server
npm start

# Terminal 2 - Front-end
cd client
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 📱 Structure du Projet

```
jogo-app/
├── client/                 # Application React
│   ├── src/
│   │   ├── App.jsx        # Composant principal
│   │   ├── components/    # Composants réutilisables
│   │   ├── screens/       # Écrans de l'app
│   │   └── utils/         # Fonctions utilitaires
│   └── public/
├── server/                # API Node.js
│   ├── models/           # Modèles MongoDB
│   ├── routes/           # Routes API
│   ├── middleware/       # Middlewares
│   └── server.js         # Point d'entrée
└── docs/                 # Documentation
```

## 🎯 Roadmap

### Phase 1 (MVP) ✅
- [x] Système d'authentification
- [x] Création/recherche d'événements
- [x] Profils utilisateurs
- [x] Système XP et niveaux

### Phase 2 (En cours)
- [ ] Arène compétitive complète
- [ ] JOGO Pass avec 50 niveaux
- [ ] Store in-app fonctionnel
- [ ] Paiements Stripe

### Phase 3 (À venir)
- [ ] Application mobile native (React Native)
- [ ] Chat en temps réel
- [ ] Streaming de matchs
- [ ] IA pour matchmaking optimal

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Victor FRECHEDE**
- GitHub: [@VictorFRCHD](https://github.com/VictorFRCHD)

## 🙏 Remerciements

- Tous les contributeurs du projet
- La communauté sportive
- Les testeurs beta

---

⭐️ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !
