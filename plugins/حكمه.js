/*By VENOM*/
//احلي مسا عليك 🐈
const handler = async (m, {conn, text}) => {
  m.reply(`╆❂━━━━━━❨🌿❩━━━━━━❂╆\n*〄⊱حـكـمة⊰☀️⊱الـيـوم⊰〄*\n\n➢ *"${pickRandom(global.hekma)}"*\n╆❂━━━━━━❨🌿❩━━━━━━❂╆`);
};
handler.tags = ['frasss'];
handler.command = ['حكمه','حكمة'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.hekma = [
    'اقبل كل التغيرات في حياتك ولا تقبل ان يتغير عليك احد.',
    'لا مزيد من التعلم. المعرفة هي أداة قوية.',
    'أن العناية بصحتك الجسدية والعقلية هي أساسيات لحياة كاملة.',
    'احصل على التسامح، حتى تتمكن من الحصول على نفس الشيء، لتحرير قلب.',
    'ن قيمة الوقت الذي تقضيه مع شغفك هو الهدية الأكثر قيمة التي يمكنك الحصول عليها واستلامها.',
    'كن ودودًا ورحيمًا مع الناس، فكل عمل مرتبط يمكنه أن يحدث فرقًا في حياتك.',
    'تحاول التعبير عن مشاعرك، الصدق ضروري في الحب.',
    'تعلم الأرز والتسوية، الحب يتطلب التضحية والبذل المتبادل.',
    'ان تخلي عنك الكل ف لا تيئس انت الأفضل.',
    'كل شخص لديه ميزه خارقه اجتهد لتعرف ميزتك.',
    'تذكر أن العلاقة مبنية على الثقة المتبادلة والاحترام.',
    'اختر شخصًا يكملك وسيكون إصدارًا أفضل لنفسك.',
    'الحب الحقيقي لن يصبح أقل، بل سيصبح أكثر.',
    'إذا كنت استباقيًا وتؤدي إلى المبادرة في عملك، فهذا سيكون ذا قيمة من جانب تفوقك.',
    'ابحث عن التوازن بين حياتك المهنية والشخصية، مع الجوانب المهمة.',
    'لا تجهد نفسك في البحث عن المساعدة أو البحث عن الإرشاد، دائمًا ما يكون هناك شيء جديد تتعلمه.',
    'تعرف على شعاراتك وقيمتها، واحتفل بنجاحاتك من خلال القليل منها.',
    'لا تضع آمالك في أشخاص محبطين، فقد تصبح واحدًا منهم.',
    'الحياة ليست عادلة، ولكنها على الأقل تعلمتنا كيف نتعامل مع الظلم.',
    'أحيانًا لا يكفي أن تكون صادقًا، عليك أيضًا أن تكون ذكيًا في اختيار كلماتك.',
];
