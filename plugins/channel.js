const { cmd } = require('../command');

cmd({
    pattern: "channel",
    desc: "Partage la chaîne de LAUREAT",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const channelText = `
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

    const link = "https://chat.whatsapp.com/FgnA1ANKadWE9FXilOCiWq"; // Le lien à inclure pour l'aperçu

    try {
        // Envoi du message formaté avec l'aperçu du lien mais sans afficher le lien dans le texte
        await conn.sendMessage(from, {
            text: channelText,
            contextInfo: { 
                externalAdReply: {
                    title: "Rejoignez la chaîne LAUREAT-TV", // Titre de l'aperçu
                    body: "Cliquez ici pour rejoindre", // Description
                    previewType: "LINK",
                    // thumbnailUrl: "URL_de_votre_image_de_prévisualisation", // Optionnel, mettre l'URL d'une image si besoin
                    mediaType: 1,
                    mediaUrl: link // Le lien sera caché mais avec un aperçu visible
                }
            }
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message du canal LAUREAT:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message. Réessaie plus tard.");
    }
});
