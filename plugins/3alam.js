import fetch from 'node-fetch';

let timeout = 30000; // مدة اللعبة بالمللي ثانية
let poin = 3999; // نقاط الجائزة
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tokitoki = conn.tokitoki ? conn.tokitoki : {};
    let id = m.chat;

    if (id in conn.tokitoki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة على السؤال بعد┃❌ ❯', conn.tokitoki[id][0]);
        throw false;
    }

    let src = await (await fetch('https://raw.githubusercontent.com/ze819/game/master/src/game.js/luffy1.json')).json();
    let json = src[Math.floor(Math.random() * src.length)];
    let caption = `❰❖── 『شهد』──❖❱\n •┇❖↞استخدم انسحب للانسحاب┇🇸🇦❯\n •┃❖↞الوقت⏳↞ ${(timeout / 1000).toFixed(2)} ثانية┇❯\n •┃❖↞الجائزة💰↞ ${poin} نقطة┇❯\n ❰❖── 『شهد』──❖❱`.trim();

    conn.tokitoki[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tokitoki[id]) {
                conn.reply(m.chat, `❮ ⌛┇انتهى الوقت┇⌛❯\n❖↞┇الإجابة الصحيحة✅↞ ${json.name} ┇❯`, conn.tokitoki[id][0]);
                delete conn.tokitoki[id];
            }
        }, timeout)
    ];
};

handler.help = ['guesseye'];
handler.tags = ['game'];
handler.command = /^علم$/i;

export default handler;
