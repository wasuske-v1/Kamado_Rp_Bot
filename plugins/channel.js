const { proto, generateWAMessageFromContent, generateWAMessageContent } =  require('@whiskeysockets/baileys');
const { cmd } = require('../command');

cmd({
    pattern: "channel",
    desc: "Partage la chaîne de LAUREAT",
    category: "basics",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {

    const generate = async (type, url) => {
        const generated = await generateWAMessageContent({
            [type]: { url }
        }, {
            upload: conn.waUploadToServer
        });
        return generated[`${type}Message`];
    };

    const msg = generateWAMessageFromContent(m.key.remoteJid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `
                        *🔶 LAUREAT'S CHANNEL📺*
                        *_________*
                        
                        *👤Welcoming : Bien le bonjour, bonsoir, bonne nuit. Nous vous souhaitons la bienvenue dans la chaîne de LAUREAT, 🔶LAUREAT-TV📰. Installez-vous et suivez nos de très belles actualités sur le royaume de 🔶LAUREAT🎮 ainsi que les guerriers de la 🔶W.I.N🎮, << WARRIOR INFINITA NATION >>.*
                        *Bien évidement nous n'allons pas nous limiter à notre RP, au contraire nous sommes ouverts au monde extérieur également. Que ce soit RP ou pas, tout va figurer ici.*
                        *Je ne vous en dirai pas plus, alors accrochez-vous pour en découvrir plus ❗*
                        *_________*
                        *@starkproduction🔸*
                        *_________*
                               *🔶 LAUREAT-TV📰*
                        `
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "LAUREAT-TV - Suivez-nous pour plus d'informations !"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "LAUREAT-TV",
                        hasMediaAttachment: false, // Si tu veux ajouter une image ou vidéo, mets true
                        // imageMessage: await generate("image", "url/image/path") // Ajoute ici une image si nécessaire
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "↪️ JOIN", // Texte affiché sur le bouton
                                url: "https://chat.whatsapp.com/IntF7YkXGMZHR9d8Xqz1wO", // URL du lien vers la chaîne WhatsApp
                                merchant_url: "https://chat.whatsapp.com" // URL de redirection
                            })
                        }]
                    })
                })
            }
        }
    }, {});

    try {
        // Envoi du message interactif avec les boutons
        await conn.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
    } catch (err) {
        console.error("Erreur lors de l'envoi du message interactif :", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du message interactif. Réessaie plus tard.");
    }
});
