/**
 * VEDA CARE Holistic Wellness - Product Data & Configuration
 * 金額單位：台幣 (NT$)
 * 旗艦產品：EAA 完美互補植物蛋白 500g
 */
export const LINE_OFFICIAL_URL = "https://lin.ee/10DnnGU";
export interface Product {
  id: string;
  name: string;
  variant?: string;
  subtitle?: string;
  category: "plant-nutrition" | "frequency-resonance" | "veda-advisor";
  price: number;
  image: string;
  description: string;
  benefits: string[];
  footerHook?: string;
  dietaryBadge?: string;
  ingredients?: string[];
  howToUse?: string;
  suitableFor?: string;
  featured?: boolean;
}
export interface CartItem {
  productId: string;
  quantity: number;
}
export const CATEGORIES = [
  { id: "plant-nutrition", name: "補足生理基底", icon: "🌱", tag: "身" },
  { id: "frequency-resonance", name: "重拾內在平衡", icon: "🧘", tag: "心" },
  { id: "veda-advisor", name: "VEDA 專屬導航", icon: "✨", tag: "靈" },
] as const;
export const SOCIAL_LINKS = {
  lineOfficial: LINE_OFFICIAL_URL,
  instagram: "https://instagram.com",
  facebook: "https://www.facebook.com/profile.php?id=61586536747116",
  youtube: "https://youtube.com",
} as const;
export const PRODUCTS: Product[] = [
  {
    id: "product-1",
    name: "植物蛋白完美互補配方（全素 EAA 盒裝）",
    variant: "黑芝麻風味・25g × 15單包",
    category: "plant-nutrition",
    price: 990,
    image: "/eaa-box.png",
    description: "不只是補給，更是為妳的明天預約一份從容。妳的忙碌，值得更精準的對待。這款全素 EAA 配方，不堆疊負擔，只專注於補足妳最核心的生理基底。無論是午後的能量續航，還是睡前的沉靜底氣，單包隨身精準應援，隨時補足能量缺口。",
    benefits: [
      "EAA 植物來源，補充必需胺基酸。",
      "9 種胺基酸完整配比，不缺席。",
      "膳食纖維，有助維持消化道機能。",
      "零糖零甜劑，純粹天然本味。",
      "多種微量元素與維生素日常補充，優化生理機能維護品質。",
    ],
    ingredients: [
      "大豆分離蛋白",
      "芝麻蛋白",
      "黑芝麻粉",
      "黑豆粉",
      "菊苣纖維",
      "難消化性麥芽糊精",
      "海藻鈣",
      "關華豆膠",
      "米蛋白",
      "豌豆蛋白",
    ],
    howToUse: "建議每份 25g 搭配 250cc 溫熱水沖泡使用",
    suitableFor: "成人日常保養與營養支持。孕婦及哺乳婦女請先咨詢醫療人員。",
    featured: true,
  },
  {
    id: "product-2",
    name: "植物蛋白完美互補配方（全素 EAA 袋裝）",
    variant: "黑芝麻風味・500g 環保包裝",
    subtitle: "穩定，是給身體最深情的告白。",
    category: "plant-nutrition",
    price: 990,
    image: "/eaa-bag.png",
    description: "最好的滋養，不在於偶爾的衝刺，而在於每日的堅持。500g 居家補充，為妳省去過度包裝，留下最純粹的營養基石。讓這份「大容量的守護」成為妳餐桌上的日常儀式，在每個清晨或運動後，紮實地撐起妳的動能需求。",
    benefits: [
      "黃金比例 EAA，補充每日蛋白質。",
      "PDCAAS=1，9 種胺基酸完整覆蓋。",
      "膳食纖維，有助維持消化道機能。",
      "無添加糖，黑芝麻天然醇香。",
      "每日一杯，補充微量元素與維生素，優化生理機能維護品質。",
    ],
    footerHook: "這不只是完美互補植物蛋白，更是妳對身體「主導權」的長期投資。",
    ingredients: [
      "大豆分離蛋白",
      "芝麻蛋白",
      "黑芝麻粉",
      "黑豆粉",
      "菊苣纖維",
      "難消化性麥芽糊精",
      "海藻鈣",
      "關華豆膠",
      "米蛋白",
      "豌豆蛋白",
    ],
    howToUse: "建議每份 25g 搭配 250cc 溫熱水沖泡使用",
    suitableFor: "成人日常保養與營養支持。孕婦及哺乳婦女請先咨詢醫療人員。",
    featured: true,
  },
  {
    id: "product-3",
    name: "敏捷素",
    variant: "盒裝・20g × 10包",
    subtitle: "靈活，是給身體最優雅的底氣。",
    category: "plant-nutrition",
    price: 1200,
    image: "/good-joint.png",
    description: "不該讓細微的卡頓，限制了妳對生活的想像。這款高階植萃胜肽配方，揉合了靈活應援的關鍵組件——MSM、薑黃與植物性葡萄糖胺。專為追求「行動主導權」的妳打造，讓每一次的跨步與轉身，都維持在最絲滑的節奏，預約明天那份游刃有餘的從容。",
    dietaryBadge: "奶素可食",
    benefits: [
      "MSM 與薑黃，支持日常行動節奏。",
      "植萃胜肽與多元成分，提供非藥物介入的營養支持。",
      "維生素 K2，有助骨骼蛋白質的鈣化。",
      "胡椒鹼專利，有助提升吸收效率。",
      "台灣製造，無多餘添加，植萃本色。",
    ],
    ingredients: [
      "大豆分離蛋白",
      "定序大豆胜肽",
      "植物性葡萄糖胺",
      "MSM（甲基硫醯基甲烷）",
      "海藻鈣",
      "薑黃萃取物",
      "專利余甘子萃取",
      "專利胡椒鹼",
      "維生素 K2",
    ],
    howToUse: "建議每份 20g 搭配 250cc 溫熱水沖泡使用",
    suitableFor: "成人日常保養與行動力維護。孕婦及哺乳婦女請先諮詢醫療人員。",
    featured: true,
  },
  {
    id: "service-1",
    name: "健康校準 1對1",
    category: "veda-advisor",
    price: 399,
    image: "/service-consultation.png",
    description: "每個人的身體，都有一份只屬於自己的節奏。30 分鐘，由 VEDA 親自與妳深度梳理現況——哪些補充是真正值得的，哪些只是徒增負擔。我們不開藥方，只幫妳整理出一份最清晰的「個人補充清單」，讓妳帶著具體答案離開。",
    benefits: [
      "梳理身體現況，找回補充節奏。",
      "精準去除冗餘，留下值得的選擇。",
      "30 分鐘對焦，帶走行動清單。",
      "逾 20 年實戰，由 VEDA 親自主持。",
    ],
    howToUse: "1. 加入官方 LINE@\n2. 留言「1對1體驗」\n3. 完成體驗付款\n4. 規劃師確認專屬諮詢時段",
    suitableFor: "想告別盲目補充、重新認識自己身體需求的成人",
    featured: true,
  },
];
// 產品展示順序：先盒裝(product-1)，再袋裝(product-2)，最後敏捷素(product-3)
export const BRAND_STORY = {
  title: "減法才能讓生活「變」從容",
  subtitle: "最好的狀態，從來不是無止盡的堆疊。",
  content: `看了 20 多年，有太多人為了生活拼搏、卻透支底氣，捨不得保養自己。有些人是看到什麼補什麼，以為有補就是好，其實是大錯特錯。

我們以精準的植萃高機能，取代盲目的補充。那些繁瑣的成分比對與科研調研交給我，好商品未必會貴，而那份「隨心所欲」的生活主導權，還給您自己。

把生活塞滿不叫充實，保養身體亦是如此。`,
};
export const BRAND_PHILOSOPHY = {
  title: "品牌理念",
  pillars: [
    {
      title: "減法智慧",
      description: "屏除堆疊\n精準填補的缺口",
    },
    {
      title: "頂級萃取",
      description: "極致純提\n淬煉高質的能量",
    },
    {
      title: "穩定基底",
      description: "穩定節奏\n補充日常的動能",
    },
    {
      title: "自主協調",
      description: "身體聽話\n拿回生活主導權",
    },
  ],
};
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
export const COOKIE_NAME = "veda-care-theme";
export const CUSTOMER_EMAIL = "ucc25888@gmail.com";
export const POLICIES = {
  privacy: {
    title: "隱私政策",
    content: "VEDA CARE 致力於保護您的隱私。我們蒐集的個人資訊僅用於改進服務品質和提供更好的購物體驗。\n\n我們不會與第三方分享您的個人資訊，除非法律要求或經過您的同意。\n\n如有任何隱私相關的疑問，歡迎與我們聯繫。"
  },
  terms: {
    title: "使用條款",
    content: "歡迎使用 VEDA CARE 線上購物平台。使用本平台即表示您同意遵守以下條款。\n\n本平台上的所有內容均受著作權保護。未經授權，不得複製、轉載或使用。\n\n我們保留隨時修改本條款的權利，修改後的條款將在網站上公告。\n\n如有任何疑問，請與我們聯繫。"
  },
  shipping: {
    title: "配送說明",
    content: "感謝您的購買。我們提供以下運送選項：\n\n宅配服務：訂單滿 NT$3,000 免運費，未滿需支付運費。\n\n貨到付款：支持貨到付款服務（限台灣地區）。\n\n配送時間：一般訂單於下單後 3-5 個工作天內出貨。\n\n如有任何運送相關的疑問，歡迎與我們聯繫。"
  }
} as const;

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: string;
  headline: string;
  problem: string;
  experience: string;
  improvement: string;
  recommendation: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "林先生",
    title: "上班族",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/testimonial-lin-male-PUAkQSoJGL3FvHvcr2JdiY.webp",
    headline: "以前過中午後就得猛灌咖啡硬撐",
    problem: "",
    experience: "",
    improvement: "",
    recommendation: "以前過中午後就得猛灌咖啡硬撐，本來以為自己只是老了。後來聽 VEDA 團隊建議換了保養方式，把以前亂吃的一堆瓶瓶罐罐整理一遍。現在整個下午比較有精神，下班後還有心力去運動，整個人感覺輕鬆很多！"
  },
  {
    id: "testimonial-2",
    name: "張小姐",
    title: "上班族兼二寶媽",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/testimonial-zhang-female-L6xeAQqQCsrRnaQW9EDsBN.webp",
    headline: "坐久了或蹲著玩，站起來身體總覺得有點卡",
    problem: "",
    experience: "",
    improvement: "",
    recommendation: "這兩年只要在辦公室坐久一點，或者陪小孩蹲在地上玩，站起來那瞬間總覺得身體有點『卡卡的』，不像以前那麼俐落。後來調整日常保養習慣，加入了 VEDA 的敏捷素，身體慢慢感覺比較自在。現在上下樓梯或出門走一整天，那種卡卡的感覺比以前少，整體感覺輕盈了一些。"
  },
  {
    id: "testimonial-3",
    name: "王小姐",
    title: "健身愛好者",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/testimonial-wang-female-v2-MRDqnH8ZGUoBJWkQn4TEAS.webp",
    headline: "體質敏感，以前喝蛋白喝完肚子就咕嚕叫",
    problem: "",
    experience: "",
    improvement: "",
    recommendation: "我體質比較敏感，以前喝過幾款高蛋白或營養品，喝完肚子都會脹氣、咕嚕咕嚕叫，超級不舒服。後來試了 VEDA 的 EAA，口感順，最開心的是喝完肚子安安靜靜，完全沒有負擔感，現在已經成了每天的習慣。"
  }
];
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
