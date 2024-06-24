let timeout = 30000; // وقت الاستجابة بالميلي ثانية (30 ثانية)

let handler = async (m, { conn }) => {
    let id = m.chat;

    if (id in conn.mathquiz) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.mathquiz[id][0]);
        throw false;
    }

    // إنشاء عملية رياضية بسيطة: جمع لأرقام عشوائية
    let num1 = Math.floor(Math.random() * 100); // رقم عشوائي بين 0 و 100
    let num2 = Math.floor(Math.random() * 100); // رقم عشوائي بين 0 و 100
    let answer = num1 + num2; // إجابة العملية الرياضية

    let caption = `
*❰❖── ~『شهد』~──❖❱
*•┃❖↞ اكتب الإجابة الصحيحة للعملية التالية:* 
*•┃❖↞ ${num1} + ${num2} = ❓*
*•┃❖↞ استخدم .انسحب للانسحاب*
*•┃❖↞ الوقت: ${(timeout / 1000).toFixed(2)} ثانية*
*❰❖── ~『شهد』~──❖❱*
`.trim();

    let file = await conn.sendFile(m.chat, '', '', caption, m);
    
    conn.mathquiz[id] = [
        file,
        answer,
        setTimeout(() => {
            if (conn.mathquiz[id]) {
                conn.reply(m.chat, `*❮ ⌛┇انتهـى الـوقـت┇⌛❯*\n*❖↞┇الاجـابـة✅↞ ${answer}* *┇❯*`, conn.mathquiz[id][0]);
                delete conn.mathquiz[id];
            }
        }, timeout)
    ];
};

handler.help = ['mathquiz'];
handler.tags = ['game'];
handler.command = /^رياضيات/i;

export default handler;
