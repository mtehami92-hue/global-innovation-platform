// Simple i18n system (AR/EN) with direction switch
const dict = {
  ar: {
    brand: "المنصة العالمية للابتكار",
    tagline: "لا يجب أن تضيع فكرة قادرة على تغيير العالم بسبب الفقر أو الجغرافيا.",
    ctaGetStarted: "ابدأ الآن",
    ctaRegister: "سجّل ابتكارك",
    nav: {
      home: "الرئيسية",
      about: "عن المنصة",
      fast: "المسار الثوري",
      ai: "المساعد الذكي",
      modeling: "النمذجة",
      universities: "الجامعات",
      register: "التسجيل",
      contact: "تواصل",
    },
    hero: {
      title: "المنصة العالمية للابتكار",
      subtitle: "منظومة إنسانية موحدة لحماية وتحليل وتسريع الابتكارات — خصوصًا في البيئات المحرومة.",
    },
    about: {
      title: "لماذا هذه المنصة؟",
      p1: "في دول نامية أو مناطق نزاع، يصبح إيداع البراءة معقدًا ومكلفًا. نوفر مسارًا بسيطًا وآمنًا لتسجيل فكرتك وإثبات ملكيتها والوصول إلى دعم عالمي.",
      p2: "نسعى للتعاون مع المنظمة العالمية للملكية الفكرية WIPO لبناء ختم زمني وشهادة معترف بها قضائيًا دوليًا."
    },
    fast: {
      title: "المسار الثوري السريع",
      desc: "مسار خاص للاكتشافات الثورية التي تعالج تحديات إنسانية عاجلة.",
      bullets: ["مراجعة خبراء عاجلة", "تمويل طارئ أولي", "أرصدة محاكاة ونمذجة", "تسريع الحماية الدولية"]
    },
    ai: {
      title: "مساعد ذكاء اصطناعي متكامل",
      p1: "تحقق من الأصالة عبر قواعد المعرفة العالمية، وحدد الميزات التنافسية، وأنشئ خارطة طريق للتطوير.",
      p2: "بياناتك تحت سيطرتك: تشفير، وخصوصية بشكل افتراضي."
    },
    modeling: {
      title: "نمذجة ومحاكاة مجانية",
      items: [
        { t: "نمذجة ثلاثية الأبعاد", d: "منشئ مشاهد عبر المتصفح ومكتبة مكوّنات."},
        { t: "فيزياء", d: "محركات فيزيائية من بسيطة إلى متقدمة للاختبارات السريعة."},
        { t: "دوائر", d: "رسم مخططات وتشغيل محاكاة SPICE مبسّطة."},
        { t: "كيمياء", d: "تفاعلات جزيئية أولية وموازنة تفاعلات."},
      ]
    },
    universities: {
      title: "مسارات جامعية",
      p: "مطابقة مع البرامج الأكاديمية والبحثية والمنح باستخدام شهادة المنصة ومحفظة الابتكار الخاصة بك."
    },
    register: {
      title: "سجّل ابتكارك",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      category: "الفئة",
      desc: "وصف مختصر",
      submit: "إرسال",
      note: "هذا نموذج تجريبي ثابت. اربطه بخدمة خارجية للتشغيل الفعلي."
    },
    contact: {
      title: "تواصل وشراكات",
      org: "المنظمات / الجامعات",
      msg: "رسالتك",
      send: "إرسال"
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      made: "بُني لدعم الابتكار الإنساني."
    }
  },
  en: {
    brand: "Global Innovation Platform",
    tagline: "No world-changing idea should be lost to poverty or geography.",
    ctaGetStarted: "Get Started",
    ctaRegister: "Register Innovation",
    nav: {
      home: "Home",
      about: "About",
      fast: "Revolutionary Fast-Track",
      ai: "AI Assistant",
      modeling: "Modeling",
      universities: "Universities",
      register: "Register",
      contact: "Contact",
    },
    hero: {
      title: "The Global Platform for Innovation",
      subtitle: "A human-centered system that protects, analyzes, and accelerates inventions — especially from underserved communities.",
    },
    about: {
      title: "Why this platform?",
      p1: "In many developing regions or conflict zones, filing a patent is complex and costly. We provide a simple, secure path to record your idea, prove authorship, and access global support.",
      p2: "We aim to collaborate with WIPO to create a legally recognized timestamp and certificate standing up in international courts."
    },
    fast: {
      title: "Revolutionary Fast-Track",
      desc: "A special lane for breakthrough innovations addressing urgent global challenges.",
      bullets: ["Rapid expert review", "Emergency seed funding", "Simulation & prototyping credits", "Expedited global protection"]
    },
    ai: {
      title: "Integrated AI Assistant",
      p1: "Check originality against prior-art sources, map competitive edges, and generate development roadmaps.",
      p2: "You control your data: encrypted at rest, private by default."
    },
    modeling: {
      title: "Free Modeling & Simulation",
      items: [
        { t: "3D Modeling", d: "Browser-based scene builder and asset library."},
        { t: "Physics", d: "From basic to advanced physics engines for quick tests."},
        { t: "Circuits", d: "Schematic capture and simple SPICE runs."},
        { t: "Chemistry", d: "Intro molecular interactions and reaction balancer."},
      ]
    },
    universities: {
      title: "University Pathways",
      p: "Match with academic programs, research roles, and scholarships using your innovation portfolio and platform certificate."
    },
    register: {
      title: "Register Your Innovation",
      name: "Full Name",
      email: "Email",
      category: "Category",
      desc: "Short Description",
      submit: "Submit",
      note: "This demo form is static. Connect to Formspree / Firebase / Supabase for production."
    },
    contact: {
      title: "Contact & Partnerships",
      org: "Organizations / Universities",
      msg: "Message",
      send: "Send"
    },
    footer: {
      rights: "All rights reserved.",
      made: "Built for humanity-first innovation."
    }
  }
};

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

let current = 'ar';

function applyLang(lang) {
  current = lang;
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.getElementById('langToggle').textContent = isAr ? 'EN' : 'AR';

  const map = dict[lang];
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const path = node.getAttribute('data-i18n').split('.');
    let val = map;
    for (const p of path) { if (val && p in val) val = val[p]; }
    if (typeof val === 'string') node.textContent = val;
  });

  // Fast bullets special case
  const fastBullets = document.getElementById('fastBullets');
  if (fastBullets) {
    fastBullets.innerHTML = '';
    (map.fast.bullets || []).forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      fastBullets.appendChild(li);
    });
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(current === 'ar' ? 'en' : 'ar');
});

// Initialize
applyLang('ar');
