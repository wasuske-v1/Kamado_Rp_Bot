const { cmd } = require('../command');
const config = require('../config'); // Si tu utilises un fichier de configuration pour l'image

cmd({
    pattern: "duel",
    desc: "Annonce un duel avec une image et un texte prédéfini",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {

    const duelText = `
*🔊 ANNONCE-DUEL🔶*
*═════════════════* 
* *PLAYER A* 🆚 *PLAYER B*
*═════════════════*
*🎙️Commentaire*

* *Player A[PI]:*

* *Player B[PI]:*
*═════════════════*
*🏆 Winner:* *@PLAYER* *[+1.000🪙]*
*═════════════════*
*🧮Note: /10*
*🚦Modo: @Pseudo*
*🏰ARENA: @Arène*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           
    *🔶LAUREAT-GAMING🎮*
`;

    // URL de l'image à afficher
    const imageUrl = 'https://example.com/image.jpg'; // Remplace par ton image ou config.ALIVE_IMG

    try {
        // Envoi de l'image avec la légende
        return await conn.sendMessage(from, {
            image: { url: imageUrl },  // Utilisation de l'URL de l'image
            caption: duelText,         // Texte à afficher en légende
        }, { quoted: mek });

    } catch (err) {
        console.error("Erreur lors de l'envoi de l'image:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de l'image. Réessaie plus tard.");
    }
});
