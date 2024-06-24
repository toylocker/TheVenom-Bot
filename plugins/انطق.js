import gtts from 'node-gtts';
import { readFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const defaultLang = 'ar';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    if (!text && m.quoted?.text) {
        text = m.quoted.text;
    }

    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        text = args.join(' ');
        if (!text) throw `يرجى كتابة نص لتحويله إلى صوتية. مثل:\n*${usedPrefix + command} ar مرحبا*`;
        res = await tts(text, defaultLang);
    } finally {
        if (res) {
            conn.sendFile(m.chat, res, 'tts.opus', null, m, true);
        }
    }
};

handler.help = ['tts <لغة> <نص>'];
handler.tags = ['tools'];
handler.command = /^g?tts|انطق$/i;

export default handler;

async function tts(text, lang = 'es') {
    console.log(lang, text);
    return new Promise((resolve, reject) => {
        try {
            let tts = gtts(lang);
            let tmpDir = join(__dirname, '../tmp');

            if (!existsSync(tmpDir)) {
                mkdirSync(tmpDir, { recursive: true });
            }

            let filePath = join(tmpDir, (1 * new Date()) + '.wav');

            tts.save(filePath, text, () => {
                resolve(readFileSync(filePath));
                unlinkSync(filePath);
            });
        } catch (e) {
            reject(e);
        }
    });
}
