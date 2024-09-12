import pkg from "@whiskeysockets/baileys";
const { proto, generateWAMessageFromContent, generateWAMessageContent } = pkg;
const { cmd } = require('../command');

cmd({
    pattern: "test",
    desc: "Commande de test pour envoyer un message interactif avec des boutons",
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
                        text: "Voici un message interactif avec des boutons !"
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "Texte de pied de page (facultatif)"
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        title: "Titre de l'en-tête",
                        hasMediaAttachment: true, // Si tu veux ajouter une image ou vidéo
                        imageMessage: await generate("image", "https://i.imgur.com/NBYjSbe.jpeg"), // Mets ici le chemin ou URL de l'image
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            name: "quick_reply",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Bouton Menu", // Texte affiché sur le bouton
                                id: ".menu" // Commande exécutée lorsque le bouton est cliqué
                            })
                        },{
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Abonnez-vous à ma chaîne YouTube!",
                                url: "https://youtube.com/@fannmods", // URL de redirection
                                merchant_url: "https://youtube.com"
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
