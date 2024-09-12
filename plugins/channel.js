const { cmd } = require('../command');

cmd({
    pattern: "channel",
    desc: "Partager un lien d'invitation avec aperçu caché",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const messageText = `
🔶 *LAUREAT'S CHANNEL📺*
_________

👤 *Welcoming :* Bien le bonjour, bonsoir, bonne nuit. Nous vous souhaitons la bienvenue dans la chaîne de LAUREAT, 🔶LAUREAT-TV📰. Installez-vous et suivez nos belles actualités sur le royaume de 🔶LAUREAT🎮 ainsi que les guerriers de la 🔶W.I.N🎮 (WARRIOR INFINITA NATION).
Bien évidemment, nous sommes ouverts au monde extérieur également. Que ce soit RP ou pas, tout va figurer ici.
Je ne vous en dirai pas plus, alors accrochez-vous pour en découvrir plus ❗

_________
@starkproduction🔸
_________
🔶 *LAUREAT-TV📰*
`;

    const groupLink = "https://chat.whatsapp.com/FgnA1ANKadWE9FXilOCiWq"; // Lien d'invitation WhatsApp

    try {
        // Envoi du message avec aperçu caché du lien
        await conn.sendMessage(from, {
            text: messageText,
            contextInfo: {
                externalAdReply: {
                    title: "Rejoignez notre groupe WhatsApp", // Titre de l'aperçu
                    body: "Invitation à une discussion de groupe", // Description de l'aperçu
                    previewType: "LINK",
                    thumbnailUrl: "https://i.imgur.com/9dH1Llt.jpeg", // URL de l'image de prévisualisation
                    mediaType: 2,
                    mediaUrl: groupLink, // Le lien que tu veux inclure dans l'aperçu
                }
            }
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message avec aperçu :", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message avec aperçu. Réessaie plus tard.");
    }
});
