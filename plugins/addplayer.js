const { cmd } = require('../command');
const Player = require('../lib/playersdb'); // Importer le modèle de base de données des joueurs

// Commande pour créer un nouveau joueur
cmd({
    pattern: "addplayer",
    alias: ["createplayer"],
    desc: "Ajoute un nouveau joueur avec ses informations",
    category: "basic",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return reply("❌ *Seul le propriétaire peut ajouter des joueurs.*");

    // Extraction des informations du joueur à partir de la commande
    const args = q.split(",");
    if (args.length < 2) {
        return reply("❗ *Veuillez fournir le nom du joueur et son grade.*\nExemple: .addplayer John Doe, Novice");
    }

    const [name, grade] = args.map(arg => arg.trim());

    try {
        // Vérification si le joueur existe déjà
        const existingPlayer = await Player.findOne({ name });
        if (existingPlayer) {
            return reply(`⚠️ *Le joueur ${name} existe déjà.*`);
        }

        // Création du nouveau joueur avec les valeurs par défaut
        const newPlayer = new Player({
            name,
            grade,
            level: 1, // Le joueur commence au niveau 1
            title: 'Aventurier',
            card: 'Standard',
            stuff: 'Basic',
            pocket: [],
            plays: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            exp: 0,
            avatar: 'https://default-avatar-url.jpg', // URL de l'image par défaut
        });

        await newPlayer.save();
        reply(`✅ *Le joueur ${name} a été ajouté avec succès.*`);
    } catch (error) {
        console.error(error.message);
        reply(`❌ *Erreur lors de l'ajout du joueur.*\n${error.message}`);
    }
});

// Commande pour afficher les informations d'un joueur
cmd({
    pattern: "playerinfo",
    alias: ["profile"],
    desc: "Affiche les informations d'un joueur",
    category: "basic",
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
