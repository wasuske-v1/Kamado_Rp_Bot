const { cmd } = require('../command');

cmd({
    pattern: "post",
    desc: "Publie une annonce sur LAUREAT",
    category: "basics",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {

    const postText = `
*🔶 LAUREAT-POST📰*
*_________*
*🎙️:*
*_________*
*🆕From:*
*_________*
#[...] #[...] #[...]
`;

    try {
        // Envoi du message sans image
        return await conn.sendMessage(from, { 
            text: postText 
        }, { quoted: mek });
    } catch (err) {
        console.error("Erreur lors de l'envoi du post LAUREAT:", err);
        reply("🙇‍♂️ Erreur lors de l'envoi du post. Réessaie plus tard.");
    }
});
