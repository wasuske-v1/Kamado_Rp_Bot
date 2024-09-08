const { cmd } = require('../command');
const config = require('../config'); // Si tu utilises un fichier de configuration pour l'image

cmd({
    pattern: "ma",
    desc: "Affiche les informations MA-FIGHTING avec une image",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {
    const maText = `
*🎮 MA-FIGHTING🔶*
*═════════════════*
*🔸Name:* 
*🔸Distance :*
💬:
*═════════════════*
*🔻Actions:*

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
*🎮MODE AVENTURE: INFINITA🔶*
`;

    // URL de l'image à afficher
    const imageUrl = 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image
            caption: maText,           // Texte à afficher en légende
        }, { quoted: mek });

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'image:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de l'image. Réessaie plus tard.");
    }
});
