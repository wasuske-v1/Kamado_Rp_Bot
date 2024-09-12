const { cmd } = require('../command');
const config = require('../config'); // Si tu utilises un fichier de configuration pour l'image

cmd({
    pattern: "training",
    desc: "Affiche les informations PAVE-TRAINING avec une image",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {
    const trainingText = `
*🎮 PAVE-TRAINING🔶*
*═════════════════*
*🔸Name:*
*🔸Distance:*  

💬:
*═════════════════*
*🔻Actions:*

*🔸[Technique]:*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
*🎮ZOE'S 𝗥𝗣: INFINITA🔶*
`;

    // URL de l'image à afficher
    const imageUrl = 'https://i.imgur.com/NBYjSbe.jpeg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image
            caption: trainingText,     // Texte à afficher en légende
        }, { quoted: mek });

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'image:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de l'image. Réessaie plus tard.");
    }
});
