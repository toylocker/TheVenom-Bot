import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix, text, isPrems }) => {
  try {
    let vn = './Menu.png'
    let pp = imagen4
    let img = await (await fetch('https://telegra.ph/.')).buffer()
    let d = new Date(new Date() + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let user = global.db.data.users[m.sender]
    let { money, joincount, exp, limit, level, role } = user
    let { min, xp, max } = xpRange(level, global.multiplier)
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
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
*✍︎☢︎︎🎟️مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}

*✍︎☢︎︎اسـم الـبوت : شهد*👺
*✍︎☢︎︎ حط قبل كل امر:* (.)
*✍︎☢︎︎ اســم الـمطور طنجرة😎*👺
*✍︎☢︎︎ ⁩ تفضل القائمة يا:* ${taguser}

_☠︎︎🔏☠︎︎━━ │الـجـروب│━━☠︎︎🔏☠︎︎_

*✓ ✍︎☫ ✓│ضيف👺⭐* 
*✓ ✍︎☫ ✓│طرد👺⭐*
*✓ ✍︎☫ ✓│ترقية👺⭐*
*✓ ✍︎☫ ✓│اعفاء👺⭐*
*✓ ✍︎☫ ✓│تحذير👺⭐*
*✓ ✍︎☫ ✓│حذف_تحذير👺⭐*
*✓ ✍︎☫ ✓│حذف👺⭐*
*✓ ✍︎☫ ✓│منشن👺⭐*
*✓ ✍︎☫ ✓│مخفي👺⭐*
*✓ ✍︎☫ ✓│المشرفين👺⭐*
*✓ ✍︎☫ ✓│لمنشن👺⭐*
*✓ ✍︎☫ ✓│بروفايل👺⭐*
*✓ ✍︎☫ ✓│الجروب👺⭐*
*✓ ✍︎☫ ✓│دعوه👺⭐*
*✓ ✍︎☫ ✓│تغيير_اللينك👺⭐*
*✓ ✍︎☫ ✓│لفل👺⭐*
*✓ ✍︎☫ ✓│جروب👺⭐*
*✓ ✍︎☫ ✓│الترحيب👺⭐*
*✓ ✍︎☫ ✓│المغادره👺⭐*
*✓ ✍︎☫ ✓│ايات👺⭐*
*✓ ✍︎☫ ✓│جروب قفل  فتح👺⭐*
*✓ ✍︎☫ ✓│خط👺⭐*
*✓ ✍︎☫ ✓│توب👺⭐*
*✓ ✍︎☫ ✓│لينك👺⭐*
*✓ ✍︎☫ ✓│يومي👺⭐*
*✓ ✍︎☫ ✓│الماس👺⭐*
*✓ ✍︎☫ ✓│ترتيب_البنك👺⭐*
*✓ ✍︎☫ ✓│شراء👺⭐*
*✓ ✍︎☫ ✓│هجوم👺⭐*

_🂱❣️✓ ━━│قسم الديني│━━✓❣️🂱_

*✓ ✍︎☫ ✓│سورة📿🌌*
*✓ ✍︎☫ ✓│حديث📿🌌*
*✓ ✍︎☫ ✓│قران📿🌌*
*✓ ✍︎☫ ✓│الله📿🌌*

_✓⬇️✯ ━━│الـتـنزيـل│━━✯⬇️✓_

*✓ ✍︎☫ ✓│انستغرام🎯🤖*
*✓ ✍︎☫ ✓│انستا🎯🤖*
*✓ ✍︎☫ ✓│شغل🎯🤖*
*✓ ✍︎☫ ✓│تيكتوك🎯🤖*
*✓ ✍︎☫ ✓│تويتر🎯🤖*
*✓ ✍︎☫ ✓│اغنية🎯🤖*
*✓ ✍︎☫ ✓│بحث🎯🤖*
*✓ ✍︎☫ ✓│فيديو🎯🤖*
*✓ ✍︎☫ ✓│تطبيق🎯🤖*
*✓ ✍︎☫ ✓│صوره🎯🤖*

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

*✓ ✍︎☫ ✓│ملصق⚔️⚗️*
*✓ ✍︎☫ ✓│سرقة⚔️⚗️*
*✓ ✍︎☫ ✓│لفيديو⚔️⚗️*
*✓ ✍︎☫ ✓│لصورة⚔️⚗️*
*✓ ✍︎☫ ✓│لانمي⚔️⚗️*
*✓ ✍︎☫ ✓│تخيل⚔️⚗️*
*✓ ✍︎☫ ✓│مكس⚔️⚗️*
*✓ ✍︎☫ ✓│لجواهر⚔️⚗️*
*✓ ✍︎☫ ✓│ستك⚔️⚗️*
*✓ ✍︎☫ ✓│تلجراف⚔️⚗️*
*✓ ✍︎☫ ✓│لكرتون⚔️⚗️*
*✓ ✍︎☫ ✓│باركود⚔️⚗️*

_✓🔊❏━━│الـصوتـيات│━━❏🔊✓_

*✓ ✍︎☫ ✓│عميق🔊🔕*
*✓ ✍︎☫ ✓│منفوخ🔊🔕*
*✓ ✍︎☫ ✓│تخين🔊🔕*
*✓ ✍︎☫ ✓│صاخب🔊🔕*
*✓ ✍︎☫ ✓│سريع🔊🔕*
*✓ ✍︎☫ ✓│تخينن🔊🔕*
*✓ ✍︎☫ ✓│رفيع🔊🔕*
*✓ ✍︎☫ ✓│روبوت🔊🔕*

_☬⌬✓━━│✯الاوامر✯│━━✓⌬☬_

*✓ ✍︎☫ ✓│ترتيب👑⚡*
*✓ ✍︎☫ ✓│منشن👑⚡*
*✓ ✍︎☫ ✓│اكتب👑⚡*
*✓ ✍︎☫ ✓│رد👑⚡*
*✓ ✍︎☫ ✓│احظر👑⚡*
*✓ ✍︎☫ ✓│حذف👑⚡*
*✓ ✍︎☫ ✓│احظر👑⚡*
*✓ ✍︎☫ ✓│دعوة👑⚡*

`.trim()
    conn.sendFile(m.chat, vn, 'Menu.png', str, m, true, { contextInfo: { mentionedJid: conn.parseMention(str) }})
  } catch (e) {
    console.error(e)
    conn.reply(m.chat, 'عذراً، حدث خطأ أثناء توليد القائمة. يرجى المحاولة لاحقاً.', m)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|القائمة|الاوامر)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' ساعة ', m, ' دقيقة ', s, ' ثانية '].map(v => v.toString().padStart(2, 0)).join('')
}
