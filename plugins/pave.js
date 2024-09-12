const { cmd } = require('../command');

cmd({
    pattern: "pave",
    desc: "Affiche le message pour PAVE-FIGHTING",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const messageText = `
*🎮 \`PAVE-FIGHTING\`🔶*
*═════════════════*
*🔸Name:* 
*🔸Distance:* 

💬:
*═════════════════*
*🔻Actions:*

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
*🎮ZOE'S 𝗥𝗣: \`INFINITA\`🔶*
`;

    try {
        // Envoi du message avec le texte formaté
        await conn.sendMessage(from, { text: messageText }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message PAVE-FIGHTING :", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message. Réessaie plus tard.");
    }
});
