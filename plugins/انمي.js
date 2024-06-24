import translate from '@vitalets/google-translate-api';
import { Anime } from "@shineiichijo/marika";

const client = new Anime();

const handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`*[❗] يرجى إدخال اسم الأنمي الذي ترغب في البحث عنه*`);

    try {
        let anime = await client.searchAnime(text);
        let result = anime.data[0];

        // ترجمة النصوص إلى العربية
        let resultBackground = await translate(result.background, { to: 'ar', autoCorrect: true });
        let resultSynopsis = await translate(result.synopsis, { to: 'ar', autoCorrect: true });

        // إنشاء نص معلومات الأنمي
        let AnimeInfo = `
🎀 • *الاسم:* ${result.title}
🎋 • *النوع:* ${result.type}
📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *عدد الحلقات:* ${result.episodes}
🎈 • *المدة:* ${result.duration}
✨ • *مأخوذ من:* ${result.source.toUpperCase()}
💫 • *تاريخ البث:* ${result.aired.from}
🎗 • *تاريخ الانتهاء:* ${result.aired.to}
🎐 • *الشعبية:* ${result.popularity}
🎏 • *المفضلة:* ${result.favorites}
🎇 • *التقييم:* ${result.rating}
🏅 • *المرتبة:* ${result.rank}
♦ • *رابط العرض:* ${result.trailer.url}
🌐 • *على MyAnimeList:* ${result.url}
🎆 • *الخلفية:* ${resultBackground.text}
❄ • *الملخص:* ${resultSynopsis.text}
`;

        // إرسال صورة الأنمي مع معلوماته
        conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
    } catch (error) {
        throw `*[❗] حدث خطأ أثناء جلب معلومات الأنمي، يرجى المحاولة مرة أخرى.*`;
    }
}

handler.command = /^(anime|انمي)$/i;

export default handler;
