const { cmd } = require('../command');
const { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys');

cmd({
    pattern: "channel",
    desc: "Partage la chaîne de LAUREAT",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply, isOwner }) => {

    const channelText = `
*🔶 LAUREAT'S CHANNEL📺*
*_________*

*👤Welcoming : Bien le bonjour, bonsoir, bonne nuit. Nous vous souhaitons la bienvenue dans la chaîne de LAUREAT, 🔶LAUREAT-TV📰. Installez-vous et suivez nos de très belles actualités sur le royaume de 🔶LAUREAT🎮 ainsi que les guerriers de la 🔶W.I.N🎮, << WARRIOR INFINITA NATION >>.*
*Bien évidement nous n'allons pas nous limiter à notre RP, au contraire nous sommes ouverts au monde extérieur également. Que ce soit RP ou pas, tout va figurer ici.*
*Je ne vous en dirai pas plus, alors accrochez-vous pour en découvrir plus ❗*
*_________*
*@starkproduction🔸*
*_________*
       *🔶 LAUREAT-TV📰*
`;

    try {
        // Création du bouton avec un lien URL (CTA URL)
        const buttonMessage = {
            text: channelText, // Le texte que tu veux afficher
            footer: '🔶 LAUREAT-TV📰',
            buttons: [
                {
                    buttonId: 'join_channel',
                    buttonText: { displayText: 'JOIN' }, // Texte affiché sur le bouton
                    type: 1,
                    urlButton: { 
                        displayText: '↪️JOIN', 
                        url: 'https://chat.whatsapp.com/IntF7YkXGMZHR9d8Xqz1wO' // Lien vers la chaîne WhatsApp
                    }
                }
            ],
            headerType: 1 // Indique que le message contient uniquement du texte
        };

        // Envoyer le message avec le bouton
        await conn.sendMessage(from, buttonMessage, { quoted: mek });
        
    } catch (err) {
        console.error("Erreur lors de l'envoi du canal LAUREAT:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message. Réessaie plus tard.");
    }
});
