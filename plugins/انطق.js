import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'ar' // اللغة الافتراضية هي العربية

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let lang = args[0]
  let text = args.slice(1).join(' ')
  
  // إذا كانت اللغة غير محددة أو غير صحيحة، استخدم اللغة الافتراضية
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  
  // إذا كان النص غير محدد ولكن هناك نص مقتبس، استخدم النص المقتبس
  if (!text && m.quoted?.text) text = m.quoted.text

  let res
  try {
    res = await tts(text, lang)
  } catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) throw `*هــكذا : ${usedPrefix}${command} مرحبا*`
    res = await tts(text, defaultLang)
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}

handler.help = ['tts <lang> <text>']
handler.tags = ['tools']
handler.command = ['tts', 'انطق']

export default handler

function tts(text, lang = 'en-en') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) {
      reject(e)
    }
  })
}
