const { cmd } = require('../command');
const config = require('../config'); // Assure-toi que le chemin est correct

cmd({
    pattern: "info",
    desc: "Affiche des informations spécifiques sur LAUREAT",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    const infoText = `
*🎙️ INFO-LAUREAT🔶*
*═════════════════*
*💬 [ ]:*
*▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓*

   *🔶LAUREAT-GAMING🎮*
`;

    try {
        // Envoi du message avec l'image
        return await conn.sendMessage(from, { 
            image: { url: config.INFO_IMG }, 
            caption: infoText 
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message d'information:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi des informations. Réessaie plus tard.");
    }
});
