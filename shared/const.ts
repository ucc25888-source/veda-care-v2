/**
 * VEDA CARE Holistic Wellness - Product Data & Configuration
 * 金額單位：台幣 (NT$)
 * 旗艦產品：EAA 完美互補植物蛋白 500g
 */
export const LINE_OFFICIAL_URL = "https://lin.ee/10DnnGU";
export interface Product {
  id: string;
  name: string;
  category: "plant-nutrition" | "frequency-resonance" | "veda-advisor";
  price: number;
  image: string;
  description: string;
  benefits: string[];
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
  { id: "plant-nutrition", name: "🔋 補足生理基底", icon: "🌿" },
  { id: "frequency-resonance", name: "🌿 重拾內在平衡", icon: "✨" },
  { id: "veda-advisor", name: "VEDA 專屬導航", icon: "💬" },
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
    name: "EAA 完美互補植物蛋白 (盒裝)",
    category: "plant-nutrition",
    price: 990,
    image: "/eaa-box.png",
    description: "含有完整 EAA 胺基酸的植物性蛋白粉 (全素可食)。高優質均衡蛋白質、高優質纖維。📦 15包裝隨身精準防禦 / 便捷簡易補給。台灣製造。",
    benefits: [
      "高PER蛋白質效率化",
      "最均衡PDCAAS=1",
      "健康不飽和脂肪酸與饍食纖維",
      "非人工甘味劑、天然不加糖",
      "添加每天需要量1/3的微量元素及維生素",
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
    suitableFor: "成人日常保養使用。孕婦及哺乳婦女請先咨詢醫療人員",
    featured: true,
  },
  {
    id: "product-2",
    name: "EAA 完美互補植物蛋白 (環保袋裝)",
    category: "plant-nutrition",
    price: 990,
    image: "/eaa-bag.png",
    description: "含有完整 EAA 胺基酸的植物性蛋白粉 (全素可食)。高優質均衡蛋白質、高優質纖維。📦 500g 居家穩健打底 / 全方位機能補給。台灣製造。",
    benefits: [
      "高PER蛋白質效率化",
      "最均衡PDCAAS=1",
      "健康不飽和脂肪酸與饍食纖維",
      "非人工甘味劑、天然不加糖",
      "添加每天需要量1/3的微量元素及維生素",
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
    suitableFor: "成人日常保養使用。孕婦及哺乳婦女請先咨詢醫療人員",
    featured: true,
  },
  {
    id: "product-3",
    name: "GOOD JOINT 敏捷素",
    category: "plant-nutrition",
    price: 1200,
    image: "/good-joint.png",
    description: "新一代高階胜肽補給，蘊含 50+ 植萃機能胜肽、珍貴三胜肽，並揉合穩健基底所需的礦物質與維生素 K2。小分子胜肽結構帶來極致順暢的吸收體驗，專為追求「流暢行動力」與「頂尖運動狀態」的您精準打造。台灣嚴謹製造，支持您的每一個躍動瞬間。",
    benefits: [
      "50+ 健康功能性胜肽",
      "超級三胜肽",
      "螯合礦物質與維生素 K2",
      "支持動能節奏",
      "小分子胜肽結構",
    ],
    ingredients: [
      "膠原蛋白胜肽",
      "玻尿酸",
      "白芍萃取",
      "薑黃萃取",
      "螯合鈣",
      "螯合鎂",
      "維生素 K2",
      "維生素 C",
    ],
    howToUse: "建議每份 20g 搭配 250cc 溫熱水沖泡使用",
    suitableFor: "成人日常保養使用。孕婦及哺乳婦女請先訪詢醫療人員",
    featured: true,
  },
  {
    id: "service-1",
    name: "VEDA線上1對1精準諮詢體驗",
    category: "veda-advisor",
    price: 399,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/veda-experience-price_5e65f480.png",
    description: "30分鐘的線上一對一精準諮詢體驗。由 VEDA CARE 專業團隊為您進行個人化健康評估與建議，幫助您了解自己的健康需求，找到最適合自己的精準方案。先加入官方 LINE@ ，並留言「1對1體驗」，付款完成後，我們將為您安排諮詢時間。",
    benefits: [
      "個人化健康評估",
      "精準產品推薦",
      "30分鐘線上諮詢",
      "專家一對一服務",
    ],
    howToUse: "1. 加入官方 LINE@\n2. 留言『1對1體驗』\n3. 完成付款\n4. 我們將為您安排諮詢時間。",
    suitableFor: "所有對健康有興趣的人士",
    featured: true,
  },
];
// 產品展示順序：先盒裝(product-1)，再袋裝(product-2)，最後敏捷素(product-3)
export const BRAND_STORY = {
  title: "拿回生活的從容：這一次，我們做減法",
  subtitle: "真正的財富，是當生活推擠時，您依然能『游刃有餘』。",
  content: `看了 20 多年為了生活拼搏、卻透支底氣的現代人，我深知：保養不該是無止盡的堆疊。忘了那些瓶瓶罐罐吧！我們用精準的植萃高機能，取代盲目的補給。您不必再糾結炸雞能不能吃、成分表怎麼看，因為這份功課，我已經替您做完了。

把複雜的保養交給 VEDA CARE，把那份久違的鬆弛感，還給您自己。`,
};
export const BRAND_PHILOSOPHY = {
  title: "品牌理念",
  pillars: [
    {
      title: "減法智慧",
      description: "精準守護，而非無止盡的堆疊",
    },
    {
      title: "系統性平衡",
      description: "身體、心理與生活節奏的完整平衡",
    },
    {
      title: "精準植萃",
      description: "20 年生命科學專業，高機能植物萃取",
    },
    {
      title: "生活主導權",
      description: "幫助您重新拿回生活的從容與鬆弛",
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
    recommendation: "以前過中午後就得猛灌咖啡硬撐，本來以為自己只是老了。後來聽 VEDA 團隊建議換了保養方式，把以前亂吃的一堆瓶瓶罐罐停掉。現在最明顯的感覺是下午不再突然『斷電』，下班居然還有體力去運動，整個人狀態穩很多！"
  },
  {
    id: "testimonial-2",
    name: "上班族兼二寶媽",
    title: "張小姐",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/testimonial-zhang-female-L6xeAQqQCsrRnaQW9EDsBN.webp",
    headline: "坐久了或蹲著玩，站起來身體『卡卡的』",
    problem: "",
    experience: "",
    improvement: "",
    recommendation: "這兩年只要在辦公室坐久一點，或者陪小孩蹲在地上玩，站起來那瞬間總覺得身體有點『卡卡的』，不像以前那麼俐落。後來開始吃 VEDA 的敏捷素，慢慢覺得日常活動順暢很多！現在上下樓梯或出門走一整天，那種討厭的『卡頓感』少了很多，終於找回身體輕盈的感覺了。"
  },
  {
    id: "testimonial-3",
    name: "王小姐",
    title: "健身愛好者",
    avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/testimonial-wang-female-v2-MRDqnH8ZGUoBJWkQn4TEAS.webp",
    headline: "我體質比較敏感，以前喝過幾款高蛋白都會脹氣",
    problem: "",
    experience: "",
    improvement: "",
    recommendation: "我體質比較敏感，以前喝過幾款高蛋白或營養品，喝完肚子都會脹氣、咕嚕咕嚕叫，超級不舒服。這款 EAA 真的救了我！口感順，最感動的是喝完肚子安安靜靜，完全沒有負擔感，現在每天一杯真的有差。"
  }
];
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = 'Please login (10001)';
export const NOT_ADMIN_ERR_MSG = 'You do not have required permission (10002)';
