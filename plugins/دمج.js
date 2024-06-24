import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

const handler = async (m, { conn, text, args }) => {
    if (!args[0]) throw '*يجب استخدام هذا الأمر بالشكل التالي #دمج <إيموجي1>+<إيموجي2>*\n*مثال:*\n*.دمج 😊+😍*'
    
    let [emoji1, emoji2] = text.split('+')
    
    // جلب البيانات من API من Tenor لدمج الإيموجيات
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    
    // تكرار عبر النتائج وإنشاء الملصقات
    for (let res of anu.results) {
        let stiker = await sticker(false, res.url, global.packname, global.author)
        conn.sendFile(m.chat, stiker, null, { asSticker: true })
    }
}

handler.help = ['دمج <إيموجي1>+<إيموجي2>']
handler.tags = ['fun']
handler.command = /^(دمج)$/i

export default handler

// دالة لجلب بيانات JSON من URL
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
        resolve(json)
    })
    .catch((err) => {
        reject(err)
    })
})
