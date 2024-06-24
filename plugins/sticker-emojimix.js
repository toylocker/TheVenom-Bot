import { sticker } from '../lib/sticker.js';
import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
    if (!text.includes('+')) throw '*باستخدام هذا الأمر يجب أن يكون #دمج <ايموجي 1>+<ايموجي 2>*\n*مثال:*\n*.دمج 🤨+😣*';
    
    const [emoji1, emoji2] = text.split('+').map(e => e.trim());
    
    try {
        const url = `https://tenor.googleapis.com/v2/featured?key=YOUR_API_KEY&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`;
        
        const response = await fetch(url);
        const json = await response.json();
        
        if (!json.results || json.results.length === 0) {
            throw 'لم يتم العثور على نتائج للرموز التعبيرية المقدمة.';
        }
        
        for (let res of json.results) {
            const stickerData = await sticker(false, res.media[0].gif.url, global.packname, global.author);
            conn.sendFile(m.chat, stickerData, null, { asSticker: true });
        }
    } catch (error) {
        throw `حدث خطأ: ${error}`;
    }
};

handler.help = ['دمج <emot1>+<emot2>'];
handler.tags = ['fun'];
handler.command = /^(دمج)$/i;

export default handler;
