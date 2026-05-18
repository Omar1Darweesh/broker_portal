export type Lang = 'en' | 'ar';

export interface PortalCopy {
  welcome: string;
  welcomeSub: string;
  email: string;
  emailPlaceholder: string;
  password: string;
  passwordPlaceholder: string;
  remember: string;
  forgot: string;
  login: string;
  support: string;
  headline: string;
  headlineSub: string;
  tagline: string;
  slogan: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  secureNote: string;
  loginError: string;
  brandBadge: string;
}

export const PORTAL_COPY: Record<Lang, PortalCopy> = {
  en: {
    welcome: 'Welcome',
    welcomeSub: 'Sign in to access your broker portal',
    email: 'Broker Account',
    emailPlaceholder: 'broker@company.com',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    remember: 'Remember me',
    forgot: 'Forgot password?',
    login: 'Sign In',
    support: 'Need broker support? Contact us',
    headline: 'Al Wataniya Insurance',
    headlineSub: 'Broker Service Portal',
    tagline:
      'Empowering brokers with faster policy servicing, quotes, and claims support.',
    slogan: 'Success Partner',
    feature1Title: 'Policy Tracking',
    feature1Desc:
      'Track client policy lifecycle and status from one secure workspace',
    feature2Title: 'Quote & Claims Management',
    feature2Desc:
      'Track quotes and claims status with real-time broker visibility',
    feature3Title: 'Dedicated Broker Support',
    feature3Desc: 'Priority assistance for brokers and corporate accounts',
    secureNote:
      'Al Wataniya Insurance · Licensed by the Financial Regulatory Authority',
    loginError: 'Invalid broker email or password. Please try again.',
    brandBadge: 'Your Secure Insurance Portal',
  },
  ar: {
    welcome: 'مرحبًا بك',
    welcomeSub: 'سجّل الدخول للوصول إلى بوابة الوسطاء',
    email: 'حساب الوسيط',
    emailPlaceholder: 'broker@company.com',
    password: 'كلمة المرور',
    passwordPlaceholder: 'أدخل كلمة المرور',
    remember: 'تذكرني',
    forgot: 'نسيت كلمة المرور؟',
    login: 'تسجيل الدخول',
    support: 'تحتاج دعم الوسطاء؟ تواصل معنا',
    headline: 'الوطنية للتأمين',
    headlineSub: 'بوابة خدمة الوسطاء',
    tagline:
      'منصة متكاملة للوسطاء لإدارة الوثائق، عروض الأسعار، ومتابعة المطالبات بسرعة.',
    slogan: 'شريك النجاح',
    feature1Title: 'متابعة الوثائق',
    feature1Desc: 'تتبّع دورة حياة وثائق العملاء وحالتها من لوحة عمل واحدة آمنة',
    feature2Title: 'إدارة العروض والمطالبات',
    feature2Desc: 'متابعة عروض الأسعار والمطالبات بتحديثات مباشرة للوسيط',
    feature3Title: 'دعم مخصص للوسطاء',
    feature3Desc: 'مساندة أولوية للوسطاء وحسابات الشركات',
    secureNote: 'الوطنية للتأمين · مرخصة ومعتمدة من هيئة الرقابة المالية',
    loginError: 'بريد الوسيط أو كلمة المرور غير صحيحة. حاول مرة أخرى.',
    brandBadge: 'بوابتك التأمينية الآمنة',
  },
};
