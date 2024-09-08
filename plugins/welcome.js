const { cmd } = require('../command');

cmd({
    pattern: "welcome",
    desc: "Annonce une bienvenue avec un texte prédéfini",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    const welcomeText = `
*🔊 ANNONCE-WELCOMING🔶*
*═════════════════*  
*Nom du joueur :* 
*Personnage incarné ( PI ) :*

*🎙️Commentaire:*


*═════════════════*
*💰 Salaire d'acceuil:  +100.000🪙 + 100💎*
*═════════════════*
*🎉WELCOME TO ZOE'S RP : INFINITA🔶*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           
    *🔶LAUREAT-GAMING🎮*
`;

    try {
        // Envoi du message de bienvenue
        return await conn.sendMessage(from, { text: welcomeText }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message de bienvenue:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message de bienvenue. Réessaie plus tard.");
    }
});
