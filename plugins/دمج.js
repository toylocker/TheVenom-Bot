import { sticker } from '../lib/sticker.js';
import fetch from 'node-fetch';
import fs from 'fs';
import MessageType from '@adiwajshing/baileys';

let handler = async (m, { conn, text, args }) => {
    if (!args[0]) throw '*باستخدام هذا الأمر يجب ان يكون #دمج <ايموجي 1>+<ايموجي 2>*\n*مثال:*\n*.دمج 🤨+😣*';
    let [emoji1, emoji2] = text.split`+`;
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
    for (let res of anu.results) {
        let stiker = await sticker(false, res.media_formats.gif.url, global.packname, global.author);
        await conn.sendFile(m.chat, stiker, null, { asSticker: true });
    }
};

handler.help = ['دمج <emot1>+<emot2>'];
handler.tags = ['fun'];
handler.command = /^(دمج)$/i;

export default handler;

const fetchJson = (url, options) => new Promise((resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
});
