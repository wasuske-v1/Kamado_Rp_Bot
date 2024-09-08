const mongoose = require('mongoose');
const config = require('../config');

// Définir le schéma pour les joueurs (characters)
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, default: 1 }, // Niveau du joueur
    grade: { type: String, required: true }, // Grade du joueur (ex: novice, expert)
    title: { type: String, default: 'Aventurier' }, // Titre du joueur
    card: { type: String, default: 'Standard' }, // Type de carte (joueur peut avoir des cartes spéciales)
    stuff: { type: String, default: 'Basic' }, // Équipement (stuff) du joueur
    pocket: { type: Array, default: [] }, // Objets dans la poche du joueur
    plays: { type: Number, default: 0 }, // Nombre de parties jouées
    wins: { type: Number, default: 0 }, // Victoires
    losses: { type: Number, default: 0 }, // Défaites
    draws: { type: Number, default: 0 }, // Matchs nuls
    exp: { type: Number, default: 0 }, // Points d'expérience
    avatar: { type: String, default: 'https://default-avatar-url.jpg' }, // Image de profil du joueur
});

// Créer le modèle Player (Personnage)
const Player = mongoose.model('Player', playerSchema);

// Fonction de connexion à MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('🛜 MongoDB Connected ✅');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Fonction pour ajouter un nouveau joueur
const addPlayer = async (name, grade, avatar = 'https://default-avatar-url.jpg') => {
    try {
        const newPlayer = new Player({
            name,
            level: 1, // Par défaut, chaque joueur commence au niveau 1
            grade,
            title: 'Aventurier', // Titre par défaut
            card: 'Standard', // Carte par défaut
            stuff: 'Basic', // Équipement de base
            pocket: [], // Poche vide au départ
            plays: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            exp: 0, // Expérience initiale à 0
            avatar // Image de profil
        });

        await newPlayer.save();
        console.log(`✅ Player added: ${name}`);
    } catch (error) {
        console.error(`❌ Failed to add player: ${error.message}`);
    }
};

// Exports pour utilisation dans d'autres fichiers
module.exports = { connectDB, playersdb };
