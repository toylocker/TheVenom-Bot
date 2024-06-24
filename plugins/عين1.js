let timeout = 30000; // وقت اللعبة بالمللي ثانية
let poin =3000; // نقاط الجائزة

let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tokibendera = conn.tokibendera ? conn.tokibendera : {};

    let id = m.chat;

    if (id in conn.tokibendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة على السؤال بعد┃❌ ❯', conn.tokibendera[id][0]);
        throw false;
    }

    let src = await (await fetch('https://raw.githubusercontent.com/Xov445447533/Xov1111/master/src/Aesthetic/venom.json')).json();
    let random = src[Math.floor(Math.random() * src.length)];
    let caption = `*${command.toUpperC()}\x20*\n\x20\x20المده\x20*${(timeout / 0x3e8).toFixed(0x2)}\x20*\x20ثانيه\n\x20\x20استخدم\x20${usedPrefix}استسلم\x20للاستسلام\n\x20\x20الجائزه\x3a\x20${poin}\x20\x58\x50\n{global.venom}`;

    conn.tokibendera[id] = [
        await conn.sendFile(m.chat, random.img, '', caption, m),
        random, poin,
        setTimeout(() => {
            if (conn.tokibendera[id]) conn.reply(m.chat, `الوقت خلص!\nالاجابه هي *${random.name}*`, conn.tokibendera[id][0]);
            delete conn.tokibendera[id];
        }, timeout)
    ];
};

handler.help = ['عين'];
handler.tags = ['game'];
handler.command = /^game$/i;

export default handler;
