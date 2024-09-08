const { cmd } = require('../command');

cmd({
    pattern: "save",
    desc: "Affiche la fiche profil d'un joueur",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    // Texte statique de la fiche profil
    const profileText = `
*👤FICHE-PLAYER PROFIL👤*
*_________*

*🔸 [Nom du joueur + PI]* 
*🔸 [Technique]*

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           
    *🔶LAUREAT-GAMING🎮*
`;

    try {
        // Envoi du message formaté sans image
        return await conn.sendMessage(from, { 
            text: profileText 
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi de la fiche profil:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi de la fiche profil. Réessaie plus tard.");
    }
});
