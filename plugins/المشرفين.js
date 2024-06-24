const handler = async (m, { conn, participants, groupMetadata, args }) => {
    // جلب صورة الملف الشخصي للمجموعة
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './Menu.jpg';
    
    // فلترة المشرفين في المجموعة
    const groupAdmins = participants.filter(p => p.isAdmin);
    
    // تحويل قائمة المشرفين إلى نص مفهرس
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    
    // تحديد مالك المجموعة
    const owner = groupMetadata.owner || groupAdmins.find(p => p.isAdmin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
    
    // إنشاء الرسالة النصية
    let pesan = args.join(' ');
    let oi = `*الرسالة:* ${pesan}`;
    let text = `*━「* قائمة المشرفين *」━*

${oi}

*المشرفون:*
${listAdmin}

*[ ⚠️ ] هذا الأمر للحالات الطارئة فقط!!*`.trim();
    
    // إرسال الرسالة مع صورة الملف الشخصي للمجموعة
    conn.sendFile(m.chat, pp, 'Menu.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] });
}

handler.help = ['admins <النص>'];
handler.tags = ['group'];
handler.command = /^(admins|مشرفين|الادمنز|المشرفين|الادمن)$/i;
handler.group = true;

export default handler;
