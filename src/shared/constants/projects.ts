import type { Project } from '@/features/projects/types/project'
import estatehubImage from '@/assets/projects/estatehub.png'
import vitaImage from '@/assets/projects/vita.png'
import luminaImage from '@/assets/projects/lumina.png'
import lumenImage from '@/assets/projects/lumen.png'

/**
 * Single source of truth for portfolio projects.
 * Set `featured: true` on exactly one project (or first featured wins).
 */
export const projects: Project[] = [
  {
    id: 'estatehub',
    slug: 'estatehub',
    title: 'EstateHub',
    categoryKey: 'realEstate',
    category: {
      en: 'Real Estate / Web Application',
      ar: 'عقارات / تطبيق ويب',
    },
    shortDescription: {
      en: 'A modern real estate web experience for exploring properties with a clean browsing flow and polished UI.',
      ar: 'تجربة ويب عقارية حديثة لاستكشاف العقارات بتدفّق تصفّح نظيف وواجهة مصقولة.',
    },
    description: {
      en: 'EstateHub is a real-estate oriented web application focused on clear property discovery, responsive layouts, and a professional presentation of listings.',
      ar: 'EstateHub تطبيق ويب موجّه للعقارات يركز على اكتشاف العقارات بوضوح، وتخطيطات متجاوبة، وعرض احترافي للقوائم.',
    },
    problem: {
      en: 'Property browsing experiences often feel cluttered, slow, or hard to navigate across devices.',
      ar: 'تجارب تصفح العقارات غالبًا ما تكون مزدحمة أو بطيئة أو صعبة الاستخدام عبر الأجهزة.',
    },
    solution: {
      en: 'A focused web application with clear hierarchy, responsive property presentation, and smooth navigation.',
      ar: 'تطبيق ويب مركّز بهيكلية واضحة، وعرض متجاوب للعقارات، وتنقل سلس.',
    },
    features: {
      en: [
        'Property-focused browsing experience',
        'Responsive layout for desktop and mobile',
        'Clean visual hierarchy for listings',
        'Modern UI patterns for exploration',
      ],
      ar: [
        'تجربة تصفح مركّزة على العقارات',
        'تخطيط متجاوب لسطح المكتب والموبايل',
        'تسلسل بصري نظيف للقوائم',
        'أنماط واجهة حديثة للاستكشاف',
      ],
    },
    challenges: {
      en: [
        'Balancing visual richness with fast page feel',
        'Keeping listing cards readable and premium',
      ],
      ar: [
        'الموازنة بين الثراء البصري وسرعة الإحساس بالصفحة',
        'الحفاظ على بطاقات القوائم مقروءة وفخمة',
      ],
    },
    results: {
      en: [
        'A polished demo suitable for portfolio presentation',
        'Clear information architecture for property exploration',
      ],
      ar: [
        'عرض تجريبي مصقول مناسب للبورتفوليو',
        'بنية معلومات واضحة لاستكشاف العقارات',
      ],
    },
    image: estatehubImage,
    technologies: ['React', 'TypeScript', 'CSS', 'Responsive Design'],
    liveUrl: 'https://alaa-kh.github.io/Estate-Hub/',
  },
  {
    id: 'vita',
    slug: 'vita',
    title: 'Vita',
    categoryKey: 'healthcare',
    category: {
      en: 'Healthcare / Clinic Web Application',
      ar: 'رعاية صحية / تطبيق عيادة ويب',
    },
    shortDescription: {
      en: 'A clinic-oriented web application with a calm interface designed for healthcare presentation and patient-facing flows.',
      ar: 'تطبيق ويب موجّه للعيادات بواجهة هادئة مصممة لعرض الرعاية الصحية وتدفقات موجهة للمرضى.',
    },
    description: {
      en: 'Vita presents a healthcare clinic experience with structured sections, approachable visual language, and a clean content layout.',
      ar: 'Vita يقدّم تجربة عيادة رعاية صحية بأقسام منظمة، ولغة بصرية ودّية، وتخطيط محتوى نظيف.',
    },
    problem: {
      en: 'Clinic websites often struggle to communicate trust, clarity, and service structure at the same time.',
      ar: 'مواقع العيادات غالبًا ما تواجه صعوبة في إيصال الثقة والوضوح وهيكلة الخدمات معًا.',
    },
    solution: {
      en: 'A composed clinic web app with clear sections, soft visual tone, and easy navigation.',
      ar: 'تطبيق عيادة ويب متماسك بأقسام واضحة، ونبرة بصرية ناعمة، وتنقل سهل.',
    },
    features: {
      en: [
        'Clinic-focused content structure',
        'Accessible visual hierarchy',
        'Responsive multi-section layout',
        'Calm healthcare-oriented UI',
      ],
      ar: [
        'هيكل محتوى موجّه للعيادة',
        'تسلسل بصري سهل الوصول',
        'تخطيط متعدد الأقسام ومتجاوب',
        'واجهة هادئة مناسبة للرعاية الصحية',
      ],
    },
    challenges: {
      en: [
        'Creating a trustworthy healthcare aesthetic',
        'Organizing service content without clutter',
      ],
      ar: [
        'بناء مظهر رعاية صحية يبعث على الثقة',
        'تنظيم محتوى الخدمات دون ازدحام',
      ],
    },
    results: {
      en: [
        'A cohesive clinic presentation',
        'Improved clarity in healthcare content browsing',
      ],
      ar: [
        'عرض عيادة متماسك',
        'وضوح أفضل في تصفح محتوى الرعاية الصحية',
      ],
    },
    image: vitaImage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://alaa-kh.github.io/Vita-Clinic/',
    featured: true,
  },
  {
    id: 'lumina-market',
    slug: 'lumina-market',
    title: 'Lumina Market',
    categoryKey: 'ecommerce',
    category: {
      en: 'E-Commerce',
      ar: 'تجارة إلكترونية',
    },
    shortDescription: {
      en: 'An e-commerce web experience focused on product browsing, catalog clarity, and modern shopping UI patterns.',
      ar: 'تجربة ويب للتجارة الإلكترونية تركز على تصفح المنتجات ووضوح الكتالوج وأنماط واجهة تسوق حديثة.',
    },
    description: {
      en: 'Lumina Market is an e-commerce platform concept built to demonstrate product discovery, catalog interaction, and a refined shopping interface.',
      ar: 'Lumina Market منصة تجارة إلكترونية مفاهيمية لإظهار اكتشاف المنتجات والتفاعل مع الكتالوج وواجهة تسوق راقية.',
    },
    problem: {
      en: 'Online stores need fast product discovery and a shopping UI that stays clear as catalog size grows.',
      ar: 'المتاجر الإلكترونية تحتاج اكتشاف منتجات سريع وواجهة تسوق تبقى واضحة مع نمو حجم الكتالوج.',
    },
    solution: {
      en: 'A product-centric storefront with structured browsing and modern commerce UI patterns.',
      ar: 'واجهة متجر مركّزة على المنتج مع تصفح منظم وأنماط واجهة تجارة حديثة.',
    },
    features: {
      en: [
        'Product catalog browsing',
        'Modern commerce UI patterns',
        'Responsive storefront layout',
        'Clear product presentation',
      ],
      ar: [
        'تصفح كتالوج المنتجات',
        'أنماط واجهة تجارة حديثة',
        'تخطيط متجر متجاوب',
        'عرض واضح للمنتجات',
      ],
    },
    challenges: {
      en: [
        'Keeping catalog UI clean and scannable',
        'Maintaining consistency across commerce screens',
      ],
      ar: [
        'الحفاظ على واجهة الكتالوج نظيفة وسهلة المسح بصريًا',
        'الحفاظ على الاتساق عبر شاشات التجارة',
      ],
    },
    results: {
      en: [
        'A portfolio-ready e-commerce showcase',
        'Strong visual system for product browsing',
      ],
      ar: [
        'عرض تجارة إلكترونية جاهز للبورتفوليو',
        'نظام بصري قوي لتصفح المنتجات',
      ],
    },
    image: luminaImage,
    technologies: ['React', 'TypeScript', 'TanStack Query', 'Redux Toolkit'],
    liveUrl: 'https://alaa-kh.github.io/Ecommerce-/',
  },
  {
    id: 'lumen',
    slug: 'lumen',
    title: 'Lumen',
    categoryKey: 'education',
    category: {
      en: 'Education / Courses Platform',
      ar: 'تعليم / منصة دورات',
    },
    shortDescription: {
      en: 'An education platform concept for presenting courses with clear structure and an inviting learning-oriented interface.',
      ar: 'مفهوم منصة تعليمية لعرض الدورات بهيكل واضح وواجهة جذابة موجّهة للتعلّم.',
    },
    description: {
      en: 'Lumen is a courses platform experience designed around clarity, course discovery, and a calm educational visual language.',
      ar: 'Lumen تجربة منصة دورات مصممة حول الوضوح واكتشاف الدورات ولغة بصرية تعليمية هادئة.',
    },
    problem: {
      en: 'Course platforms can become noisy, making it harder for users to evaluate and choose learning paths.',
      ar: 'منصات الدورات قد تصبح صاخبة، مما يصعّب على المستخدم تقييم مسارات التعلّم واختيارها.',
    },
    solution: {
      en: 'A course-centered interface with clear sections, readable cards, and approachable educational design.',
      ar: 'واجهة مركّزة على الدورات بأقسام واضحة وبطاقات مقروءة وتصميم تعليمي ودّي.',
    },
    features: {
      en: [
        'Course discovery layout',
        'Educational visual hierarchy',
        'Responsive learning-oriented UI',
        'Clear call-to-action structure',
      ],
      ar: [
        'تخطيط لاكتشاف الدورات',
        'تسلسل بصري تعليمي',
        'واجهة متجاوبة موجّهة للتعلّم',
        'هيكل واضح لأزرار الدعوة للعمل',
      ],
    },
    challenges: {
      en: [
        'Presenting course content without visual noise',
        'Creating a trustworthy education-oriented aesthetic',
      ],
      ar: [
        'عرض محتوى الدورات دون ضوضاء بصرية',
        'بناء مظهر تعليمي يبعث على الثقة',
      ],
    },
    results: {
      en: [
        'A clean courses platform presentation',
        'Improved readability for learning content',
      ],
      ar: [
        'عرض نظيف لمنصة الدورات',
        'قابلية قراءة أفضل لمحتوى التعلّم',
      ],
    },
    image: lumenImage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
    liveUrl: 'https://alaa-kh.github.io/Lumen-Courses/',
  },
]
