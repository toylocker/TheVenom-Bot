import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
  try {
    let vn = './Menu.png' // تحقق من مسار الملف إذا كان صحيحًا
    let pp = 'image path' // تأكد من تعيين مسار الصورة هنا
    let img = await (await fetch('https://telegra.ph/file/example.png')).buffer() // ضع رابط الصورة الصحيح

    let d = new Date(new Date() + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let user = global.db.data.users[m.sender]
    let { money, joincount, exp, limit, level, role } = user
    let { min, xp, max } = xpRange(level, global.multiplier)
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered).length 
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850)   
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

    let str = `
*☢︎︎☠︎︎📆تاريخ:* ${date}
*☢︎︎☠︎︎🕛وقت نشط:* ${uptime}
*☢︎︎☠︎︎⚡مستخدمين:* ${rtotalreg}
*☢︎︎☠︎︎🎖️ مستوى:* ${level}
*☢︎︎☠︎︎🧰 خبرة:* ${exp}
*☢︎︎☠︎︎⚓ الدور:* ${role}

*✍︎☢︎︎💎الماس:* ${limit}
*✍︎☢︎︎👾عملات:* ${money}
*✍︎☢︎︎🪙الرموز:* ${joincount}
*✍︎☢︎︎🎟️مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌')}

*✍︎☢︎︎ اسـم الـبوت : شهد* 🤩😍
*✍︎☢︎︎ حط قبل كل امر* (.)
*✍︎☢︎︎ اســم الـمطور  Mحط اسمك* 🤩😍
*✍︎☢︎︎ الـمنـصه  Render*
*✍︎☢︎︎ ⁩ تفضل القائمة يا* ${taguser}

_☠︎︎🔏☠︎︎━━ │الـجـروب│━━☠︎︎🔏☠︎︎_

*✓ ✍︎☫ ✓│ضيف👾⭐*
*✓ ✍︎☫ ✓│طرد👾⭐*
*✓ ✍︎☫ ✓│ترقية👾⭐*
*✓ ✍︎☫ ✓│اعفاء👾⭐*
*✓ ✍︎☫ ✓│تحذير👾⭐*
*✓ ✍︎☫ ✓│حذف_تحذير👾⭐*
*✓ ✍︎☫ ✓│حذف👾⭐*
*✓ ✍︎☫ ✓│منشن👾⭐*
*✓ ✍︎☫ ✓│مخفي👾⭐*
*✓ ✍︎☫ ✓│المشرفين👾⭐*
*✓ ✍︎☫ ✓│لمنشن👾⭐*
*✓ ✍︎☫ ✓│بروفايل👾⭐*
*✓ ✍︎☫ ✓│الجروب👾⭐*
*✓ ✍︎☫ ✓│دعوه👾⭐*
*✓ ✍︎☫ ✓│تغيير_اللينك👾⭐*
*✓ ✍︎☫ ✓│لفل👾⭐*
*✓ ✍︎☫ ✓│جروب👾⭐*
*✓ ✍︎☫ ✓│الترحيب👾⭐*
*✓ ✍︎☫ ✓│المغادره👾⭐*
*✓ ✍︎☫ ✓│ايات👾⭐*
*✓ ✍︎☫ ✓│جروب قفل فتح👾⭐*
*✓ ✍︎☫ ✓│خط👾⭐*
*✓ ✍︎☫ ✓│توب👾⭐*
*✓ ✍︎☫ ✓│يومي👾⭐*
*✓ ✍︎☫ ✓│الماس👾⭐*
*✓ ✍︎☫ ✓│ترتيب_البنك👾⭐*
*✓ ✍︎☫ ✓│شراء👾⭐*
*✓ ✍︎☫ ✓│هجوم👾⭐*

_🂱❣️✓ ━━│قسم الديني│━━✓❣️🂱_

*✓ ✍︎☫ ✓│سورة📿🌌*
*✓ ✍︎☫ ✓│حديث📿🌌*
*✓ ✍︎☫ ✓│قران📿🌌*
*✓ ✍︎☫ ✓│الله📿🌌*

_✓⬇️✯ ━━│الـتـنزيـل│━━✯⬇️✓_

*✓ ✍︎☫ ✓│انستغرام🎯👾*
*✓ ✍︎☫ ✓│انستا🎯👾*
*✓ ✍︎☫ ✓│شغل🎯👾*
*✓ ✍︎☫ ✓│تيكتوك🎯👾*
*✓ ✍︎☫ ✓│تويتر🎯👾*
*✓ ✍︎☫ ✓│اغنية🎯👾*
*✓ ✍︎☫ ✓│بحث🎯👾*
*✓ ✍︎☫ ✓│فيديو🎯👾*
*✓ ✍︎☫ ✓│تطبيق🎯👾*
*✓ ✍︎☫ ✓│صوره🎯👾*

_✓🎮✘ ━━│الـــتـرفــيـه│━━✘🎮✓_

*✓ ✍︎☫ ✓│اكس او💫🧿*
*✓ ✍︎☫ ✓│كت💫🧿*
*✓ ✍︎☫ ✓│صراحه💫🧿*
*✓ ✍︎☫ ✓│لو💫🧿*
*✓ ✍︎☫ ✓│هل💫🧿*
*✓ ✍︎☫ ✓│ترجم💫🧿*
*✓ ✍︎☫ ✓│احزر💫🧿*
*✓ ✍︎☫ ✓│زواج💫🧿*
*✓ ✍︎☫ ✓│انطق💫🧿*
*✓ ✍︎☫ ✓│تاج💫🧿*
*✓ ✍︎☫ ✓│حكمه💫🧿*
*✓ ✍︎☫ ✓│ميمز💫🧿*
*✓ ✍︎☫ ✓│سوال💫🧿*

_✓🔃✠━━│الـتحـويل│━━✠🔃✓_

*✓ ✍︎☫ ✓│ملصق⚔️👾*
*✓ ✍︎☫ ✓│سرقة⚔️*
*✓ ✍︎☫ ✓│لفيديو⚔️👾*
*✓ ✍︎☫ ✓│لصورة⚔️⚗️👾*
*✓ ✍︎☫ ✓│لانمي⚔️⚗👾*
*✓ ✍︎☫ ✓│تخيل⚔️⚗👾*
*✓ ✍︎☫ ✓│مكس⚔️⚗👾*
*✓ ✍︎☫ ✓│لجواهر⚔️⚗👾*
*✓ ✍︎☫ ✓│ستك⚔️⚗👾*
*✓ ✍︎☫ ✓│تلجراف⚔️⚗👾*
*✓ ✍︎☫ ✓│لكرتون⚔️⚗👾*
*✓ ✍︎☫ ✓│باركود⚔️⚗👾*

_✓🔊❏━━│الـصوتـيات│━━❏🔊✓_

*✓ ✍︎☫ ✓│عميق🔊🔕*
*✓ ✍︎☫ ✓│منفوخ🔊🔕*
*✓ ✍︎☫ ✓│تخين🔊🔕*
*✓ ✍︎☫ ✓│صاخب🔊🔕*
*✓ ✍︎☫ ✓│سريع🔊🔕*
*✓ ✍︎☫ ✓│تخينن🔊🔕*
*✓ ✍︎☫ ✓│رفيع🔊🔕*
*✓ ✍︎☫ ✓│روبوت🔊🔕*
*✓ ✍︎☫ ✓│الخطه🔊🔕*

_☑️😜✥━━│الـملـصـقات│━━✥😜☑️_

*✓ ✍︎☫ ✓│اجلدني😜🌀*
*✓ ✍︎☫ ✓│غني😜🌀*
*✓ ✍︎☫ ✓│قلبي😜🌀*
*✓ ✍︎☫ ✓│خبيث😜🌀*
*✓ ✍︎☫ ✓│متفاجىء😜🌀*
*✓ ✍︎☫ ✓│سلام😜🌀*
*✓ ✍︎☫ ✓│شجاع😜🌀*
*✓ ✍︎☫ ✓│جميل😜🌀*
*✓ ✍︎☫ ✓│صاير😜🌀*
*✓ ✍︎☫ ✓│مع السلامه😜🌀*
*✓ ✍︎☫ ✓│ابن😜🌀*

    `.trim()

    conn.sendFile(m.chat, img, 'image.jpg', str, m, false, { thumbnail: img })
  } catch (e) {
    console.error(e)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|start)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
