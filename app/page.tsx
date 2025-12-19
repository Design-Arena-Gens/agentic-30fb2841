import Link from "next/link";

const steps = [
  {
    title: "تأكد من جاهزية موقعك",
    points: [
      "تحقق من أن صفحات موقعك تعمل بسرعة وتعرض محتوى قيّم للزوار.",
      "تأكد من أن الموقع متوافق مع الهواتف الذكية ويستخدم اتصال HTTPS آمن.",
      "أنشئ صفحة رئيسية واضحة وروابط داخلية تساعد Google على فهم هيكل الموقع."
    ]
  },
  {
    title: "أرسل موقعك إلى Google Search Console",
    points: [
      "انتقل إلى Google Search Console وسجل الدخول بحساب Google الخاص بك.",
      "أضف موقعك كخاصية جديدة ثم قم بإثبات الملكية باستخدام إحدى الطرق المتاحة (ملف HTML، DNS، أو Google Analytics).",
      "بعد إثبات الملكية، استخدم أداة خرائط المواقع (Sitemaps) لإرسال ملف sitemap.xml."
    ],
    action: {
      label: "Google Search Console",
      href: "https://search.google.com/search-console/about"
    }
  },
  {
    title: "حسّن الفهرسة والمتابعة",
    points: [
      "استخدم قسم فحص العنوان (URL Inspection) لطلب فهرسة أي صفحات جديدة أو محدثة.",
      "راجع تقارير الفهرسة بانتظام لمعالجة الأخطاء والتحذيرات التي قد تمنع ظهور صفحاتك.",
      "احرص على تحديث المحتوى باستمرار وإضافة كلمات مفتاحية متعلقة بموضوع موقعك."
    ]
  },
  {
    title: "تابع الأداء واطلب الظهور في Google",
    points: [
      "راجع تقرير الأداء لمعرفة الكلمات المفتاحية التي تجلب الزيارات وتطوير المحتوى بناءً عليها.",
      "فعّل تكامل Google Analytics مع Search Console للحصول على رؤية شاملة لسلوك الزوار.",
      "شارك موقعك عبر الشبكات الاجتماعية ورسائل البريد لجذب زيارات أولية تساعد على تحسين ترتيبك."
    ]
  }
];

const resources = [
  {
    title: "ترتيب النتائج في Google",
    description: "مقدمة حول كيفية تقييم Google للصفحات وعوامل تحسين محركات البحث.",
    href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ar"
  },
  {
    title: "معاينة نتائج Google",
    description: "أدوات تساعدك على اختبار ظهور موقعك على الأجهزة المختلفة.",
    href: "https://search.google.com/test/mobile-friendly?hl=ar"
  },
  {
    title: "إنشاء خريطة موقع",
    description: "أنشئ ملف Sitemap لمساعدة Google في اكتشاف صفحاتك بسهولة.",
    href: "https://www.xml-sitemaps.com/"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            <span role="img" aria-label="rocket">
              🚀
            </span>
            <span>ابدأ اليوم</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-5xl">
            دليل ظهور موقعك في نتائج بحث Google
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            خطوات عملية مبسطة تساعدك على التأكد من أن موقعك جاهز للفهرسة، وتوضح كيفية استخدام أدوات
            Google لتحسين فرص ظهورك في النتائج الأولى.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#steps"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-200"
            >
              ابدأ بالخطوات الآن
            </Link>
            <Link
              href="https://support.google.com/webmasters/answer/34397?hl=ar"
              className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </section>

      <section id="steps" className="mx-auto grid max-w-5xl gap-10 px-6 py-16">
        {steps.map((step) => (
          <article key={step.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {step.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {step.action ? (
              <Link
                href={step.action.href}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                {step.action.label}
                <span aria-hidden>↗</span>
              </Link>
            ) : null}
          </article>
        ))}
      </section>

        <section className="bg-white/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900">موارد إضافية تساعدك</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-primary/60 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  فتح الرابط
                  <span aria-hidden>↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} ظهور موقعك في Google</p>
          <div className="flex items-center gap-4">
            <Link href="https://developers.google.com/search?hl=ar" target="_blank" rel="noopener noreferrer">
              مركز مساعدة Google Search
            </Link>
            <Link href="https://support.google.com/webmasters?hl=ar" target="_blank" rel="noopener noreferrer">
              دعم مشرفي المواقع
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
