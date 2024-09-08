const { cmd } = require('../command');
const config = require('../config'); // Si tu utilises un fichier de configuration pour l'image

cmd({
    pattern: "modo",
    desc: "Affiche les règles MODO-PAVE avec une image",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {
    const modoText = `
*🎮 MODO-PAVE🔶*
*═════════════════*
*🛣️DISTANCE: 6m*
*🏰ARENA:*
*⏰LATENCE: 7min*
*🚦MODO:*
*═════════════════*
*🎮 Games rules:*
*1️⃣: Ne pas dévaloriser le verdict d'un modo sans preuve concrête sinon vous aurez une ammende de 500.000🪙 et 100💎 et sans oublier que vous avez jusqu'à quatre actions facultatives.*

*2️⃣: Tout votre pavé ne sera pas validé si vous êtes en retard donc après 7 + 1 minute, de plus le manque de précision va vous coûter l'annulation de vos actions. Il faut donc préciser tous les détails important.*

*3️⃣: En cas d'urgence vous pouvez demander une pause qui sera de 15 minutes d'attente maximum. Après ça le duel reprend son cours normal.*

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

   *🔶𝗟𝗔𝗨𝗥𝗘𝗔𝗧 𝗚𝗔𝗠𝗜𝗡𝗚🎮*
`;

    // URL de l'image à afficher
    const imageUrl = 'https://example.com/image.jpg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image
            caption: modoText,         // Texte à afficher en légende
        }, { quoted: mek });

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'image:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de l'image. Réessaie plus tard.");
    }
});
