const Player = require('../lib/playersdb');  // Le modèle des joueurs
const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');

cmd({
    pattern: "addplayer",
    desc: "Ajouter un nouveau joueur",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("Vous n'avez pas la permission d'utiliser cette commande.");

    const playerName = q.trim();
    if (!playerName) return reply("Veuillez spécifier un nom pour le joueur.");

    try {
        // Vérification si le joueur existe déjà
        let player = await Player.findOne({ name: playerName });
        if (player) return reply(`Le joueur ${playerName} existe déjà.`);

        // Création d'un nouveau joueur
        player = new Player({ name: playerName });
        await player.save();

        // Création du fichier du joueur dans le répertoire 'players'
        const playerFilePath = path.join(__dirname, '../players', `${playerName}.json`);
        const playerData = {
            name: player.name,
            level: player.level,
            grade: player.grade,
            title: player.title,
            card: player.card,
            stuff: player.stuff,
            pocket: player.pocket,
            plays: player.plays,
            wins: player.wins,
            losses: player.losses,
            draws: player.draws,
            exp: player.exp,
            avatar: player.avatar
        };

        // Sauvegarde des données dans un fichier JSON
        fs.writeFileSync(playerFilePath, JSON.stringify(playerData, null, 2));
        reply(`Le joueur ${playerName} a été ajouté et son fichier a été créé.`);

        // Mise à jour du menu pour inclure le joueur dans la section PROFILE
        updateMenuWithPlayer(playerName);

    } catch (error) {
        console.error(error);
        reply("Erreur lors de l'ajout du joueur.");
    }
});

// Fonction pour mettre à jour le menu avec le nouveau joueur
function updateMenuWithPlayer(playerName) {
    const menuFilePath = path.join(__dirname, '../menu.js');

    // Lecture du fichier menu.js
    let menuContent = fs.readFileSync(menuFilePath, 'utf-8');

    // Recherche de l'endroit où ajouter le joueur dans la catégorie PROFILE
    const profileSectionMarker = '┌ 👤 *PROFILE*  👤';
    const profileEndMarker = '╰━━━━━━━━━━━━❒';

    // Ajout du joueur avant la fin de la section PROFILE
    const updatedMenuContent = menuContent.replace(profileEndMarker, ` │${playerName}👥\n${profileEndMarker}`);

    // Sauvegarde des modifications dans menu.js
    fs.writeFileSync(menuFilePath, updatedMenuContent, 'utf-8');
    console.log(`Le joueur ${playerName} a été ajouté à la section PROFILE du menu.`);
}


// Commande pour afficher les informations d'un joueur
cmd({
    pattern: "playerinfo",
    alias: ["profile"],
    desc: "Affiche les informations d'un joueur",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply }) => {
    const name = q.trim();
    if (!name) {
        return reply("❗ *Veuillez fournir le nom du joueur.*\nExemple: .playerinfo John Doe");
    }

    try {
        // Recherche du joueur dans la base de données
        const player = await Player.findOne({ name });

        if (!player) {
            return reply(`❌ *Aucun joueur trouvé avec le nom ${name}.*`);
        }

        // Affichage des informations du joueur dans le template demandé
        const playerInfo = `
*👤 PLAYER : ${player.name} 📈*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           *👉🏼 Following:*
           *🧑‍🧒 LEVEL:* ${player.level}
*________*
*🥉 GRADE:* ${player.grade}
*🚹 TITLE:* ${player.title}
*💳 CARD:* ${player.card}
*📥 STUFF:* ${player.stuff}
*💰 POCKET:* ${player.pocket.length > 0 ? player.pocket.join(', ') : 'Empty'}
*________*
*🎮 PLAYS:* ${player.plays}
*✅ WINS :* ${player.wins}
*⭕ LOSSES:* ${player.losses}
*♻️ DRAWS:* ${player.draws}
*📶 EXP:* ${player.exp}
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           
    *🔶LAUREAT-PROFILE👤*`;

        // Affichage de l'image de profil avec les informations
        conn.sendMessage(from, { image: { url: player.avatar }, caption: playerInfo });

    } catch (error) {
        console.error(error.message);
        reply(`❌ *Erreur lors de la récupération des informations du joueur.*\n${error.message}`);
    }
});
