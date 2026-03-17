import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import QuizAppetizer from "@/components/QuizAppetizer";
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
        {/* Hero Section — 78vh so next section peeks at bottom */}
        <section className="relative flex items-center overflow-hidden" style={{ minHeight: '78vh', maxHeight: '860px' }}>
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          >
            {/* Warm overlay — lighter on the right so the model stays visible */}
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(105deg, rgba(249,248,245,0.72) 0%, rgba(249,248,245,0.38) 55%, rgba(249,248,245,0.10) 100%)' }} />
          </div>

          {/* Text — left-aligned, glassmorphism card */}
          <div className="relative container z-10 flex justify-start">
            <div
              className="w-full max-w-xl px-8 py-10 md:px-12 md:py-14 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.52)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.70)',
                boxShadow: '0 8px 40px rgba(45,79,30,0.08)',
              }}
            >
              {/* Eyebrow label */}
              <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-5"
                style={{ color: '#2D4F1E' }}>
                VEDA CARE &nbsp;｜&nbsp; 科研級精粹
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black mb-2"
                style={{ color: '#2D4F1E', lineHeight: '1.35', letterSpacing: '0.04em' }}>
                精準植萃補給
              </h1>
              <p className="text-base mb-6"
                style={{ color: '#2D4F1E', letterSpacing: '0.18em', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.2, opacity: 0.75 }}>
                重塑生命平衡
              </p>

              <p className="text-sm md:text-base mb-8"
                style={{ color: '#4A4A4A', lineHeight: '2.0' }}>
                身體的電量掉得比手機還快？這不是必然，而是警告。VEDA CARE 拒絕無止盡的堆疊，我們只給妳最精準的生理底氣。
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quiz"
                  className="inline-flex items-center justify-center text-center font-bold text-sm px-7 py-3.5 transition-all duration-200 active:scale-95 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #2D4F1E 0%, #4A5D23 100%)',
                    color: '#ffffff',
                    borderRadius: '1.25rem',
                    boxShadow: '0 4px 20px rgba(45,79,30,0.30)',
                    letterSpacing: '0.06em',
                    animation: 'ctaGlow 3s ease-in-out infinite',
                  }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', marginRight: 7, verticalAlign: 'middle', marginTop: -2 }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                  </svg>解鎖專屬營養配方
                </Link>
                <Link href="/about" className="btn-secondary text-center font-semibold">
                  認識我們
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator — bouncing chevron */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
            style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(45,79,30,0.55)', letterSpacing: '0.2em' }}>scroll</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(45,79,30,0.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>

        {/* Brand Introduction Section */}
        <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: '#1a2e12' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse at center, rgba(61,99,40,0.45) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="container max-w-3xl relative" style={{ zIndex: 1 }}>
            <div className="text-center mb-10 md:mb-16">
              <div style={{ width: 40, height: 1, background: '#B59A6D', margin: '0 auto 28px' }} />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png"
                alt="VEDA CARE"
                className="h-12 w-auto mx-auto mb-6"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.82 }}
              />
              <p style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(181,154,109,0.88)', fontWeight: 600, marginBottom: 14 }}>
                歡迎來到
              </p>
              <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', marginBottom: 24, lineHeight: 1.2 }}>
                VEDA CARE
              </h2>
              <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.28)', margin: '0 auto 22px' }} />
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.56)', lineHeight: 2.1, fontStyle: 'italic', letterSpacing: '0.05em', maxWidth: 440, margin: '0 auto' }}>
                我們相信真正的健康，是心靈、身體與精神的和諧共生。<br />這份平衡，值得被認真對待。
              </p>
            </div>

            <div className="veda-philosophy-grid">
              {BRAND_PHILOSOPHY.pillars.map((pillar) => (
                <div key={pillar.title} className="philosophy-card-dark">
                  <h3 className="philosophy-title-dark">
                    {pillar.title}
                  </h3>
                  <p className="philosophy-desc-dark">
                    {pillar.description.split('\n').map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Categories Section */}
        <section className="py-14 md:py-28">
          <div className="container">
            <div className="text-center mb-10 md:mb-14">
              <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.55)', margin: '0 auto 18px' }} />
              <h2 style={{ fontSize: 'clamp(22px, 5vw, 34px)', fontWeight: 700, color: '#1a2e12', letterSpacing: '0.1em', lineHeight: 1.3, display: 'inline-block' }}>
                精準對策
              </h2>
              <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.55)', margin: '18px auto 0' }} />
            </div>

            {(() => {
              const copy: Record<string, string> = {
                "plant-nutrition":    "精準補充每日所需原料，為身體預約明天的從容。",
                "frequency-resonance":"維持情緒平衡與良好睡眠品質，找回游刃有餘的生活節奏。",
                "veda-advisor":       "由 Veda 親自為妳梳理，最值得優先關注的精準健康方案。",
              };
              const icons: Record<string, JSX.Element> = {
                "plant-nutrition": (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B59A6D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                  </svg>
                ),
                "frequency-resonance": (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B59A6D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                "veda-advisor": (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B59A6D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                ),
              };
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CATEGORIES.map((category) => (
                    <Link key={category.id} href={`/shop?category=${category.id}`} className="group block">
                      <div
                        className="p-6 md:p-8 rounded-2xl h-full flex flex-col transition-all duration-300"
                        style={{
                          background: '#ffffff',
                          border: '1px solid rgba(45,79,30,0.10)',
                          boxShadow: 'inset 0 2px 0 rgba(181,154,109,0.35), 0 2px 12px rgba(45,79,30,0.04)',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = 'inset 0 2px 0 rgba(181,154,109,0.6), 0 10px 32px rgba(45,79,30,0.10)';
                          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(181,154,109,0.35)';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow = 'inset 0 2px 0 rgba(181,154,109,0.35), 0 2px 12px rgba(45,79,30,0.04)';
                          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(45,79,30,0.10)';
                        }}
                      >
                        {/* SVG icon */}
                        <div className="mb-5" style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(181,154,109,0.08)', borderRadius: 10 }}>
                          {icons[category.id]}
                        </div>

                        <h3 className="font-display font-bold text-base md:text-lg mb-2 transition-colors"
                          style={{ color: '#1a2e12' }}>
                          {category.name}
                        </h3>
                        <p className="text-sm flex-1" style={{ color: '#666', lineHeight: '1.9' }}>
                          {copy[category.id] ?? "探索精選產品"}
                        </p>
                        <div className="mt-5 flex justify-end">
                          <span
                            className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                            style={{ color: '#2D4F1E' }}
                          >
                            了解更多 <span className="text-sm">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* Journey Map — Discovery Path */}
        <section className="py-10 md:py-14 bg-[#f9f8f5]">
          <div className="container max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold text-center mb-8"
              style={{ color: 'rgba(45,79,30,0.5)' }}>
              VEDA CARE &nbsp;｜&nbsp; 妳的發現旅程
            </p>

            <div className="relative flex items-start justify-between gap-2">
              {/* Connecting line */}
              <div className="absolute top-[18px] left-[12.5%] right-[12.5%] h-[2px]"
                style={{ background: 'rgba(45,79,30,0.12)' }} />

              {[
                { step: "01", label: "覺察", sub: "發現漏電點", active: true },
                { step: "02", label: "深解", sub: "了解根本原因", active: false },
                { step: "03", label: "精準匹配", sub: "獲取科研方案", active: false },
              ].map((s) => (
                <div key={s.step} className="flex-1 flex flex-col items-center text-center relative z-10">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-2 transition-all duration-300"
                    style={{
                      background: s.active ? '#2D4F1E' : '#ffffff',
                      border: s.active ? '2px solid #2D4F1E' : '2px solid rgba(45,79,30,0.18)',
                      color: s.active ? '#ffffff' : 'rgba(45,79,30,0.4)',
                      boxShadow: s.active ? '0 0 0 5px rgba(45,79,30,0.10)' : 'none',
                      animation: s.active ? 'scanPulse 2.2s ease-in-out infinite' : 'none',
                    }}
                  >
                    {s.step}
                  </div>
                  <p className="text-xs font-bold mb-0.5"
                    style={{ color: s.active ? '#2D4F1E' : 'rgba(45,79,30,0.45)' }}>
                    {s.label}
                  </p>
                  <p className="text-[10px]" style={{ color: 'rgba(45,79,30,0.35)' }}>
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Route A — Appetizer Quiz */}
        <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: '#1a2e12' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse at center, rgba(61,99,40,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ width: 40, height: 1, background: '#B59A6D', margin: '0 auto 28px' }} />
          <div className="container max-w-xl relative" style={{ zIndex: 1 }}>
            <QuizAppetizer />
          </div>
          <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.25)', margin: '28px auto 0' }} />
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
                <p style={{fontSize:'18px', fontStyle:'italic', color:'#4A5D23', marginBottom:'20px', lineHeight:1.6, letterSpacing:'0.04em', borderLeft:'2px solid #C8D8A8', paddingLeft:'14px'}}>
                  妳以為是太累，<br />其實是缺口太大。
                </p>

                <p style={{fontSize:'11px', letterSpacing:'0.15em', color:'#8A9E6E', textTransform:'uppercase', marginBottom:'16px'}}>
                  植萃機能補給
                </p>

                <h2 style={{fontSize:'1.5rem', fontWeight:700, color:'#1a1a1a', marginBottom:'20px', lineHeight:1.4, letterSpacing:'0.03em'}}>
                  喝下底氣，贏回自己。
                </h2>

                <p style={{fontSize:'15px', fontWeight:600, color:'#2D4F1E', marginBottom:'6px'}}>
                  腸胃友善配方，全素日常無負擔。
                </p>
                <p style={{fontSize:'14px', color:'#777', fontWeight:300, marginBottom:'28px', lineHeight:1.8}}>
                  長時間不吃、或吃不夠多的日子，<br />
                  就是蛋白質缺口最大的時候。
                </p>

                <div style={{borderTop:'1px solid #e8e8e8', paddingTop:'16px', marginBottom:'28px'}}>
                  <p style={{fontSize:'11px', color:'#bbb', letterSpacing:'0.1em', marginBottom:'10px'}}>規 格 提 示</p>
                  <p style={{fontSize:'13px', color:'#666', fontWeight:300, lineHeight:2}}>
                    500g 環保包裝・全家補給<br />
                    15包單包攜帶・隨時補充
                  </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
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
                <p style={{fontSize:'18px', fontStyle:'italic', color:'#4A5D23', marginBottom:'20px', lineHeight:1.6, letterSpacing:'0.04em', borderLeft:'2px solid #C8D8A8', paddingLeft:'14px'}}>
                  上次起身不覺得卡，<br />是多久以前的事了？
                </p>

                <p style={{fontSize:'11px', letterSpacing:'0.15em', color:'#8A9E6E', textTransform:'uppercase', marginBottom:'16px'}}>
                  植萃機能補給
                </p>

                <h2 style={{fontSize:'1.5rem', fontWeight:700, color:'#1a1a1a', marginBottom:'20px', lineHeight:1.4, letterSpacing:'0.03em'}}>
                  身體不卡頓，生活更流暢
                </h2>

                <p style={{fontSize:'15px', fontWeight:600, color:'#2D4F1E', marginBottom:'6px'}}>
                  心之所向，身體無縫跟上。
                </p>
                <p style={{fontSize:'14px', color:'#777', fontWeight:300, marginBottom:'28px', lineHeight:1.8}}>
                  專為久坐久站、肌肉量偏少、偶爾蹲下就卡的妳設計。不是吃止痛，而是從源頭補充所需。
                </p>

                <div style={{borderTop:'1px solid #e8e8e8', paddingTop:'16px', marginBottom:'28px'}}>
                  <p style={{fontSize:'11px', color:'#bbb', letterSpacing:'0.1em', marginBottom:'10px'}}>關 鍵 成 分</p>
                  <p style={{fontSize:'13px', color:'#666', fontWeight:300, lineHeight:2}}>
                    MSM・薑黃萃取・植物性葡萄糖胺<br />
                    小分子植萃胜肽・維生素 K2
                  </p>
                </div>
                
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
            <div className="flex flex-col justify-center px-8 py-20 md:px-14 md:py-32 lg:px-20">

              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: '#2D4F1E', fontWeight: 500 }}>
                VEDA CARE &nbsp;｜&nbsp; 品牌理念
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#2D4F1E', lineHeight: '1.45' }}>
                減法才能讓<br />生活「變」從容
              </h2>

              <p className="text-base font-semibold mb-10 pb-10 border-b border-[#2D4F1E]/20" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                「最好的狀態，從來不是無止盡的堆疊。」
              </p>

              <div className="space-y-6 mb-10">
                <p className="text-base" style={{ color: '#555', lineHeight: '2.1', fontWeight: 400, letterSpacing: '0.08em', wordBreak: 'keep-all' }}>
                  妳不是不在乎健康，只是被太多選擇<strong style={{ color: '#2D4F1E', fontWeight: 700 }}>累壞了</strong>。每次想開始，就先卡在「不知道從哪裡補起」。
                </p>
                <p className="text-base" style={{ color: '#555', lineHeight: '2.1', fontWeight: 400, letterSpacing: '0.08em', wordBreak: 'keep-all' }}>
                  我在保健領域深耕逾 20 年，只做一件事：替妳把<strong style={{ color: '#2D4F1E', fontWeight: 700 }}>值得信任的留下來</strong>，把多餘的都篩掉。
                </p>
                <p className="text-base" style={{ color: '#555', lineHeight: '2.1', fontWeight: 400, letterSpacing: '0.08em', wordBreak: 'keep-all' }}>
                  繁瑣的成分研究，是我的工作；找回生活的從容，才是妳最重要的事。
                </p>
              </div>

              {/* Closing Signature */}
              <div className="pt-6 border-t border-[#2D4F1E]/12">
                <p className="text-base font-semibold italic"
                  style={{ color: '#2D4F1E', lineHeight: '1.8', letterSpacing: '0.05em' }}>
                  <span style={{ color: '#B59A6D', marginRight: '8px', fontStyle: 'normal' }}>✦</span>找我，就是把複雜留給我，把從容還給妳。
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* VEDA Advisor Section - Enhanced */}
        <section className="py-16 md:py-32 relative overflow-hidden"
          style={{ background: '#1a2e12' }}>
          {/* Radial centre glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 600, background: 'radial-gradient(ellipse at center, rgba(61,99,40,0.52) 0%, transparent 70%)', pointerEvents: 'none' }} />
          {/* Gold corner glows */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl" style={{ background: 'rgba(181,154,109,0.07)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full -ml-48 -mb-48 blur-3xl" style={{ background: 'rgba(181,154,109,0.07)' }} />

          <div className="container max-w-3xl text-center relative z-10">

            {/* Top gold rule */}
            <div style={{ width: 40, height: 1, background: '#B59A6D', margin: '0 auto 28px' }} />

            {/* Section label */}
            <p style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(181,154,109,0.92)', fontWeight: 600, marginBottom: 24 }}>
              VEDA CARE &nbsp;｜&nbsp; 專業顧問服務
            </p>

            <h2 className="font-bold text-2xl md:text-4xl text-white mb-5 leading-tight">
              減法保養對話
            </h2>
            <p className="text-sm md:text-base mb-12 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.62)', lineHeight: '2.0', fontStyle: 'italic', letterSpacing: '0.04em' }}>
              由專業顧問親自為妳梳理需求，<br />
              只留下身體真正需要的那份。
            </p>

            {/* Main prompt card */}
            <div className="rounded-2xl p-6 md:p-10 mb-10 text-center"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(181,154,109,0.3)', backdropFilter: 'blur(12px)' }}>
              <p className="text-xs mb-3" style={{ color: 'rgba(181,154,109,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                無需複雜的線上支付流程
              </p>
              <p className="text-base md:text-xl font-semibold text-white" style={{ lineHeight: '1.8', letterSpacing: '0.02em' }}>
                加入 LINE@，我們一站式為妳處理。
              </p>
            </div>

            {/* Three feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

              {/* Card 1 — Gift */}
              <div className="rounded-xl p-5 md:p-7 text-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(181,154,109,0.3)' }}>
                <div className="flex items-center justify-center mb-4 mx-auto" style={{ width: 40, height: 40 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(181,154,109,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm md:text-base tracking-wide">新好友限定尊享</h3>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>
                  成功加入即贈送<br />《生活微調術》專屬報告
                </p>
              </div>

              {/* Card 2 — Shipping */}
              <div className="rounded-xl p-5 md:p-7 text-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(181,154,109,0.3)' }}>
                <div className="flex items-center justify-center mb-4 mx-auto" style={{ width: 40, height: 40 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(181,154,109,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm md:text-base tracking-wide">滿三千免運</h3>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>
                  支持宅配、貨到付款<br />（限台灣地區）
                </p>
              </div>

              {/* Card 3 — Consultation */}
              <div className="rounded-xl p-5 md:p-7 text-center transition-all hover:bg-white/10"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(181,154,109,0.3)' }}>
                <div className="flex items-center justify-center mb-4 mx-auto" style={{ width: 40, height: 40 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(181,154,109,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm md:text-base tracking-wide">即時諮詢</h3>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>
                  隨時提問，獲得<br />快速專業回應
                </p>
              </div>

            </div>

            <a
              href={LINE_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 active:scale-95"
              style={{
                border: '1px solid rgba(181,154,109,0.65)',
                color: '#C8A97A',
                padding: '14px 44px',
                borderRadius: 100,
                fontSize: 13,
                letterSpacing: '0.14em',
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(181,154,109,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              加入官方 LINE@
            </a>

            {/* Bottom gold rule */}
            <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.25)', margin: '44px auto 0' }} />

          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-28 overflow-hidden" style={{ background: '#f9f8f5' }}>
          <div className="container max-w-5xl">

            {/* Header */}
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-5 text-center" style={{ color: '#2D4F1E' }}>
              VEDA CARE &nbsp;｜&nbsp; 使用者心聲
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-center mb-3 whitespace-nowrap" style={{ color: '#2D4F1E' }}>
              她們說的，妳也能感受到
            </h2>
            <p className="text-sm text-center mb-14 md:mb-20" style={{ color: '#999', lineHeight: '1.8' }}>
              真實生活中，遇見 VEDA 之後
            </p>

            {/* Cards — staggered grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={testimonial.id}
                  className={i === 1 ? 'md:mt-10' : ''}
                  style={{
                    background: '#ffffff',
                    borderRadius: 20,
                    padding: '32px 28px',
                    border: '1px solid rgba(45,79,30,0.1)',
                    boxShadow: '0 4px 28px rgba(45,79,30,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Decorative quote mark */}
                  <div style={{ fontSize: 72, lineHeight: 0.8, color: 'rgba(45,79,30,0.1)', fontFamily: 'Georgia, serif', marginBottom: 16, userSelect: 'none' }}>
                    "
                  </div>

                  {/* Pull quote — headline */}
                  <p style={{ fontSize: 15, fontWeight: 600, color: '#2D4F1E', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
                    {testimonial.headline}
                  </p>

                  {/* Thin divider */}
                  <div style={{ width: 36, height: 1, background: 'rgba(45,79,30,0.2)', marginBottom: 16 }} />

                  {/* Full testimonial */}
                  <p style={{ fontSize: 13, color: '#666', lineHeight: 2.0, marginBottom: 28, flex: 1 }}>
                    {testimonial.recommendation}
                  </p>

                  {/* Signature — avatar + name at bottom */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(45,79,30,0.08)', paddingTop: 20 }}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 600, color: '#3a3a3a', marginBottom: 2 }}>{testimonial.name}</p>
                      <p style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.05em' }}>{testimonial.title}</p>
                    </div>
                  </div>
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
