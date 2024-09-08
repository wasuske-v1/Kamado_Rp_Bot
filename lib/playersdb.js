const mongoose = require('mongoose');
const config = require('./config'); // Assurez-vous que le chemin est correct

// Définition du schéma pour un joueur
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        default: 1
    },
    grade: {
        type: String,
        default: 'Novice'
    },
    title: {
        type: String,
        default: 'Aventurier'
    },
    card: {
        type: String,
        default: 'Standard'
    },
    stuff: {
        type: String,
        default: 'Basic'
    },
    pocket: {
        type: [String],  // Tableau d'objets ou d'éléments que le joueur possède
        default: []
    },
    plays: {
        type: Number,
        default: 0
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },
    draws: {
        type: Number,
        default: 0
    },
    exp: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: 'https://default-avatar-url.jpg' // URL de l'image par défaut du joueur
    }
}, { timestamps: true });

// Fonction de connexion à MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('🛜 MongoDB Connected ✅');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err.message);
        process.exit(1);
    }
};

// Création et exportation du modèle joueur
const Player = mongoose.model('Player', playerSchema);

module.exports = { connectDB, Player };
