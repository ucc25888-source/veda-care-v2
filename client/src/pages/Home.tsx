import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import {
  PRODUCTS,
  BRAND_PHILOSOPHY,
  CATEGORIES,
  LINE_OFFICIAL_URL,
  TESTIMONIALS,
} from "@/../../shared/const";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero-bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          </div>

          <div className="relative container z-10 max-w-2xl">
            <div className="text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold mb-6 leading-relaxed" style={{ letterSpacing: '0.08em' }}>
                <span className="text-primary font-black">為什麼日子越過越好，</span>
                <br />
                <span className="text-primary font-black">身體的電量卻越掉越快？</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
                其實您需要的不是更多的休息，而是更精準的日常補給。VEDA CARE 專注於全方位機能調節，用最純粹的植萃力量，為您補足缺席的那一塊全人健康拼圖。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-secondary text-center font-bold">
                  認識我們
                </Link>
                <Link href="/shop" className="btn-primary text-center font-bold">
                  探索純粹植萃
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Introduction Section */}
        <section className="py-10 md:py-32 bg-gradient-to-b from-background via-orange-50/20 to-background">
          <div className="container max-w-3xl">
            <div className="text-center mb-8 md:mb-20">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png" alt="VEDA CARE" className="h-24 w-auto mx-auto mb-6" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                <span className="block">歡迎來到</span>
                <span className="block">VEDA CARE</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                我們相信真正的健康遠超越身體層面。它關乎心靈、身體與精神的和諧——這份平衡經常被現代生活所破壞。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {BRAND_PHILOSOPHY.pillars.map((pillar, index) => (
                <div key={pillar.title} className={`card-wellness p-5 md:p-8 text-center ${index === 3 ? 'md:col-start-2' : ''}`}>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Categories Section */}
        <section className="py-10 md:py-32">
          <div className="container">
            <h2 className="text-xl md:text-4xl font-display font-bold text-foreground mb-10 md:mb-20 text-center">
              精準對策
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CATEGORIES.map((category) => (
                <Link key={category.id} href={`/shop?category=${category.id}`} className="group block">
                    <div className="card-wellness p-5 md:p-8 text-center h-full">
                      <div className="text-3xl md:text-5xl mb-2 md:mb-4">{category.icon}</div>
                      <h3 className="font-display font-bold text-base md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-foreground/60">
                        探索我們精選的此類別產品
                      </p>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Carousel */}
        <section className="py-10 md:py-32 bg-gradient-to-b from-background via-green-50/20 to-background">
          <div className="container">
            <ProductCarousel products={featuredProducts} title="精選產品" />
          </div>
        </section>

        {/* EAA Product Section */}
        <section className="py-10 md:py-28 bg-gradient-to-r from-emerald-50/30 via-background to-emerald-50/30 relative overflow-hidden">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Content */}
              <div>
                <p className="text-sm font-medium text-primary/70 uppercase tracking-wide mb-3">
                  植萃機能補給
                </p>
                
                <h2 className="text-xl md:text-3xl font-sans font-bold text-foreground mb-6 leading-tight text-center" style={{ letterSpacing: '0.05em' }}>
                  喝下底氣，贏回自己。
                </h2>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-primary/10">
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-bold text-primary">真正的遊刃有餘，來自穩健的生理基底。</span>EAA 完美互補植物蛋白，摒棄多餘負擔，以黃金比例植萃精華，精準填補您日常消耗的能量缺口。
                  </p>
                </div>
                
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  不必非要成為誰的榜樣，您只需要在每一個起身與邁步間，感受身體那份久違的輕盈與聽話。
                </p>
                
                <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/20">
                  <p className="text-sm text-foreground/70 mb-3 font-medium">【規格提示】</p>
                  <div className="space-y-2 text-foreground/80">
                    <p>📦 <span className="font-medium">500g環保包裝</span> / 全家補給。</p>
                    <p>📦 <span className="font-medium">15包單包攜帶</span> / 隨時補充。</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/product/product-1" className="btn-primary text-center font-bold">
                    了解 EAA 完美互補
                  </Link>
                  <a
                    href={LINE_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center font-bold flex items-center justify-center gap-2"
                  >
                    <span>💚</span>
                    加入 LINE@ 訂購
                  </a>
                </div>
              </div>
              
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-3/4 sm:w-full max-w-sm">
                  <img
                    src="/eaa-box.png"
                    alt="EAA 完美互補植物蛋白"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Agility Product Section */}
        <section className="py-10 md:py-28 bg-gradient-to-r from-amber-50/30 via-background to-amber-50/30 relative overflow-hidden">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="w-3/4 sm:w-full max-w-sm">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/TPB1007_68856_b2263194.png"
                    alt="GOOD JOINT 敏捷素"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Product Content */}
              <div>
                <p className="text-sm font-medium text-primary/70 uppercase tracking-wide mb-3">
                  植萃機能補給
                </p>
                
                <h2 className="text-xl md:text-3xl font-sans font-bold text-foreground mb-6 leading-tight text-center" style={{ letterSpacing: '0.05em' }}>
                  身體不卡頓，生活更流暢
                </h2>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-primary/10">
                  <p className="text-lg text-foreground leading-relaxed">
                    <span className="font-bold text-primary">心之所向，身體就該無縫跟上。</span>敏捷素專為渴望「流暢生活」的您打造。頂級純粹的機能補給，為日常的每一個起身、邁步注入靈活的支持。
                  </p>
                </div>
                
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  把身體交給精準的植萃守護，把說走就走的自由，還給自己。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/product/product-3" className="btn-primary text-center font-bold">
                    了解敏捷素
                  </Link>
                  <a
                    href={LINE_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center font-bold flex items-center justify-center gap-2"
                  >
                    <span>💚</span>
                    加入 LINE@ 訂購
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story — Magazine Split Layout */}
        <section className="min-h-screen flex items-center bg-[#f9f8f5]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">

            {/* Left: Photo — shown first on mobile */}
            <div className="relative min-h-[70vw] md:min-h-screen order-first">
              <img
                src="/brand-hero-2.png"
                alt="VEDA CARE 生活主導權"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Right: Copy */}
            <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-24 lg:px-20">

              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: '#2D4F1E', fontWeight: 500 }}>
                VEDA CARE &nbsp;｜&nbsp; 品牌理念
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#2D4F1E', lineHeight: '1.5' }}>
                拿回生活的從容：<br />這一次，我們做減法
              </h2>

              <p className="text-base font-bold mb-10 pb-10 border-b border-[#2D4F1E]/20" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                「真正的財富，是當生活推擠時，<br className="hidden md:block" />您依然能『游刃有餘』。」
              </p>

              <div className="space-y-6">
                <p className="text-base" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  看了 20 多年為了生活拼搏、卻透支底氣的現代人，我深知：保養不該是無止盡的堆疊。
                </p>
                <p className="text-base" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  忘了那些令人焦慮的成分表吧！我們用精準的植萃高機能，取代盲目的補給。
                </p>
                <p className="text-base" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  那些繁瑣的成分比對與科研調研，VEDA 已經替您把關好了。把複雜的保養留給我，而那份隨心所欲的生活主導權，還給您自己。
                </p>
                <p className="text-base font-bold pt-2" style={{ color: '#333333', lineHeight: '1.9' }}>
                  專業的事交給我，您只需要負責輕鬆地變好。
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* VEDA Advisor Section - Enhanced */}
        <section className="py-10 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/85 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full -ml-48 -mb-48 blur-3xl" />
          
          <div className="container max-w-4xl text-center relative z-10">
            <div className="mb-6 text-3xl md:text-7xl animate-bounce">💬</div>
            
            <h2 className="font-display font-bold text-2xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight text-center">
              減法保養對話
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-center max-w-2xl mx-auto">
              由團隊為您精準找出問題，避免盲目堆疊購買
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 p-5 md:p-10 mb-8 md:mb-10 text-center">
              <p className="text-lg md:text-xl text-white/90 mb-4">
                無需複雜的線上支付流程
              </p>
              <p className="text-lg md:text-3xl font-bold text-white mb-0">
                只需加入 LINE@，告訴我們您想要的產品，我們幫您完成訂單！
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-8 md:mb-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">🎁</div>
                <h3 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">新好友禮物</h3>
                <p className="text-white/80 text-xs md:text-sm">加入即贈送《生活微調術》</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">🚚</div>
                <h3 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">滿三千免運</h3>
                <p className="text-white/80 text-xs md:text-sm">支持宅配、貨到付款（限台灣）</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">💬</div>
                <h3 className="font-bold text-white mb-1 md:mb-2 text-base md:text-lg">即時諮詢</h3>
                <p className="text-white/80 text-xs md:text-sm">隨時提問，獲得快速專業回應</p>
              </div>
            </div>
            
            <a
              href={LINE_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold text-base md:text-xl px-6 md:px-14 py-3 md:py-5 rounded-full hover:shadow-2xl transition-all hover:scale-105 mb-6 md:mb-8 group active:scale-95"
            >
              <span className="text-2xl md:text-3xl group-hover:animate-pulse">💚</span>
              加入官方 LINE@
            </a>
            
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              點擊按鈕加入，領取新好友禮物《生活微調術》，開始您的健康諮詢之旅。滿 NT$3,000 免運費，支持宅配與貨到付款（限台灣地區）。
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 md:py-32 bg-muted/20">
          <div className="container">
            <div className="text-center mb-8 md:mb-20">
              <h2 className="text-xl md:text-4xl font-display font-black text-foreground mb-4" style={{ letterSpacing: '0.05em' }}>
                客戶見證
              </h2>
              <p className="text-lg text-foreground/70">
                聽聽真實客戶如何透過 VEDA CARE 找回生活的從容
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background rounded-lg p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-foreground/60">{testimonial.title}</p>
                    </div>
                  </div>

                  {/* Headline */}
                  <h4 className="font-semibold text-lg text-foreground mb-6 leading-snug">
                    【{testimonial.title} {testimonial.name}】
                  </h4>

                  {/* Recommendation */}
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    「{testimonial.recommendation}」
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
