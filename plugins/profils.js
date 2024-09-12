const { cmd } = require('../command');

// Dictionnaire des profils de joueurs avec images
const profils = {
    "arthurL": {
        player: "LEYWIN",
        following: "arthurL",
        level: 29,
        grade: "Little Warrior",
        title: "???",
        card: "???",
        stuff: "Dawn's Ballad",
        pocket: "500.000🪙",
        plays: 3,
        wins: 2,
        losses: 1,
        draws: 0,
        exp: "19.500 EXP",
        image: "https://i.imgur.com/1hcoGk7.jpeg" // Lien vers l'image d'Arthur
    },
    "arthurB": {
    player: "NAVA",
    following: "arthurB",
    level: 21,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Excalibur FF",
    pocket: "250.000🪙",
    plays: 9,
    wins: 3,
    losses: 5,
    draws: 1,
    exp: "13.000 EXP",
    image: "https://i.imgur.com/9I4F1yC.jpeg" // Lien vers l'image de Nava
},

  "broly": {
    player: "MANUL",
    following: "broly",
    level: 10,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "200.000🪙",
    plays: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    exp: "5.300 EXP",
    image: "https://example.com/manul.jpg" // Lien vers l'image de Manul
},

  "gen": {
    player: "KUROSAKI",
    following: "yuan",
    level: 23,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "3 Sabres",
    pocket: "250.000🪙",
    plays: 16,
    wins: 4,
    losses: 11,
    draws: 1,
    exp: "14.800 EXP",
    image: "https://i.imgur.com/ZcDolnM.jpeg" // Lien vers l'image de Kurosaki
},

  "hajime": {
    player:"NEXUS",
    following: "hajime",
    level: 10,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "200.000🪙",
    plays: 1,
    wins: 0,
    losses: 1,
    draws: 0,
    exp: "5.300 EXP",
    image: "https://i.imgur.com/j7qN0jZ.jpeg" // Lien vers l'image de Nexus
},

  "goldy": {
    player: "SHOGUN",
    following: "goldy",
    level: 19,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Rhitta",
    pocket: "250.000🪙",
    plays: 4,
    wins: 4,
    losses: 0,
    draws: 0,
    exp: "11.600 EXP",
    image: "https://example.com/shogun.jpg" // Lien vers l'image de Shogun
},

  "irito": {
    player: "NAVA",
    following: "irito",
    level: 22,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Katana Yuta",
    pocket: "250.000🪙",
    plays: 11,
    wins: 9,
    losses: 2,
    draws: 0,
    exp: "13.700 EXP",
    image: "https://i.imgur.com/nfqoNLl.jpeg" // Lien vers l'image de Nava
},

  "jekfaster": {
    player: "jekfaster",
    following:  "JEKFASTER",
    level: 19,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "250.000🪙",
    plays: 1,
    wins: 0,
    losses: 1,
    draws: 0,
    exp: "11.600 EXP",
    image: "https://example.com/jekfaster.jpg" // Lien vers l'image de Jekfaster
},

  "indra": {
    player: "NO_NAME",
    following: "indra",
    level: 18,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Katana Indra",
    pocket: "250.000🪙",
    plays: 3,
    wins: 1,
    losses: 2,
    draws: 0,
    exp: "10.900 EXP",
    image: "https://i.imgur.com/aukAQKe.jpeg" // Lien vers l'image de No_Name
},

  "john": {
    player:"SMITH",
    following:  "john",
    level: 20,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Katana Do-wan",
    pocket: "250.000🪙",
    plays: 7,
    wins: 3,
    losses: 4,
    draws: 0,
    exp: "12.300 EXP",
    image: "https://i.imgur.com/G76aMNO.jpeg" // Lien vers l'image de Smith
},

"kun": {
    player: "KAISER",
    following: "kun",
    level: 23,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "2 Yoyo",
    pocket: "250.000🪙",
    plays: 14,
    wins: 4,
    losses: 9,
    draws: 1,
    exp: "14.400 EXP",
    image: "https://i.imgur.com/GyYhc0X.jpeg" // Lien vers l'image de Kaiser
},

    "jean": {
    player: "BENOIT",
    following: "jean",
    level: 12,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "250.000🪙",
    plays: 4,
    wins: 0,
    losses: 4,
    draws: 0,
    exp: "6.700 EXP",
    image: "https://i.imgur.com/0jM2jfK.jpeg" // Lien vers l'image de Benoit
},

    "regulus": {
    player: "SVAIN",
    following: "regulus",
    level: 22,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Katana Kyojuro",
    pocket: "500.000🪙",
    plays: 10,
    wins: 7,
    losses: 3,
    draws: 0,
    exp: "13.100 EXP",
    image: "https://i.imgur.com/rVi4YCp.jpeg" // Lien vers l'image de Svain
},

    "licht": {
    player: "WADO",
    following: "licht",  
    level: 25,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "500.000🪙",
    plays: 18,
    wins: 11,
    losses: 5,
    draws: 2,
    exp: "15.800 EXP",
    image: "https://i.imgur.com/aScHiq0.jpeg" // Lien vers l'image de Wado
},

    "loneA": {
    player: "ATLAS",
    following: "loneA",
    level: 29,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "???",
    pocket: "500.000🪙",
    plays: 33,
    wins: 27,
    losses: 6,
    draws: 0,
    exp: "19.500 EXP",
    image: "https://i.imgur.com/8rWEXfT.jpeg" // Lien vers l'image de Atlas
},

    "vecta": {
    player: "UCHIHA",
    following: "vecta",
    level: 24,
    grade: "Little Warrior",
    title: "Fier😌",
    card: "???",
    stuff: "Chaînes Kurapika",
    pocket: "500.000🪙",
    plays: 17,
    wins: 2,
    losses: 15,
    draws: 0,
    exp: "15.100 EXP",
    image: "https://i.imgur.com/etko8Xt.jpeg" // Lien vers l'image de Uchiha
},

    "gremmy": {
    player: "ODA",
    following: "gremmy",
    level: 30,
    grade: "Little Warrior",
    title: "Haineux🤬",
    card: "???",
    stuff: "???",
    pocket: "500.000🪙",
    plays: 35,
    wins: 7,
    losses: 27,
    draws: 1,
    exp: "20.500 EXP",
    image: "https://i.imgur.com/BMqPTqb.jpeg" // Lien vers l'image de Oda
},

    "mob": {
    player: "HELLS",
    following: "mob",
    level: 27,
    grade: "Little Warrior",
    title: "Vilain😈",
    card: "???",
    stuff: "???",
    pocket: "250.000🪙",
    plays: 21,
    wins: 17,
    losses: 3,
    draws: 1,
    exp: "17.500 EXP",
    image: "https://i.imgur.com/5AiwHAh.jpeg" // Lien vers l'image de Hells
},

    "mz": {
    player: "MZ",
    following: "mz",
    level: 10,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Bâton Frieren",
    pocket: "250.000🪙",
    plays: 3,
    wins: 0,
    losses: 3,
    draws: 0,
    exp: "5.300 EXP",
    image: "https://i.imgur.com/k5imlNH.jpeg" // Lien vers l'image de MZ
},

    "loneT": {
    player: "TEMPEST",
    following: "loneT",
    level: 29,
    grade: "???",
    title: "Impératrice👸🏼",
    card: "???",
    stuff: "Katana Limule",
    pocket: "500.000🪙",
    plays: 30,
    wins: 24,
    losses: 5,
    draws: 1,
    exp: "19.500 EXP",
    image: "https://i.imgur.com/nI6lzMb.jpeg" // Lien vers l'image de TEMPEST
},

    "desk": {
    player: "RUGER",
    following: "desk",
    level: 30,
    grade: "Little Warrior",
    title: "???",
    card: "???",
    stuff: "Kusanagi Sasuke",
    pocket: "800.000🪙",
    plays: 16,
    wins: 3,
    losses: 13,
    draws: 0,
    exp: "20.500 EXP",
    image: "https://i.imgur.com/PxcUJAp.jpeg" // Lien vers l'image de RUGER
}



  
    // Ajoute d'autres personnages ici avec leurs images
};

// Fonction pour générer et envoyer le profil avec image
const sendProfile = async (conn, mek, m, profileData) => {
    let profileText = `
*👤 PLAYER : ${profileData.player}📈*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           *👉🏼 Following: ${profileData.following}👥*
            *🧑‍🧒 LEVEL: ${profileData.level}🥉*
*____________________________________*
*🥉 GRADE: ${profileData.grade}*
*🚹 TITLE: ${profileData.title}*
*💳 CARD: ${profileData.card}*
*📥 STUFF: ${profileData.stuff}*
*💰 POCKET: ${profileData.pocket}*
*____________________________________*
*🎮 PLAYS: ${profileData.plays}*
*✅ WINS : ${profileData.wins}*
*⭕ LOSSES: ${profileData.losses}*
*♻ DRAWS: ${profileData.draws}*
*📶 EXP: ${profileData.exp}*
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
           
    🔶LAUREAT-PROFILE👤
    `;

    // Envoie l'image avec le texte du profil
    await conn.sendMessage(m.chat, {
        image: { url: profileData.image }, // Envoie l'image à partir de l'URL
        caption: profileText // Texte du profil en légende de l'image
    }, { quoted: mek });
};

// Commande pour chaque personnage
Object.keys(profils).forEach((key) => {
    cmd({
        pattern: key,
        category: "profile",
        filename: __filename
    }, async (conn, mek, m, { from, quoted, reply }) => {
        try {
            const profileData = profils[key];
            await sendProfile(conn, mek, m, profileData);
        } catch (e) {
            console.error(e);
            reply('❎ Erreur lors de l\'exécution de la commande.');
        }
    });
});

