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
              <h2 className="text-lg sm:text-xl md:text-2xl font-display font-light mb-6"
                style={{ color: '#4A5D23', lineHeight: '1.5', letterSpacing: '0.08em', opacity: 0.8 }}>
                重塑生命平衡
              </h2>

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
                  🔓 解鎖專屬營養配方
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
        <section className="py-10 md:py-16 bg-gradient-to-b from-background via-orange-50/20 to-background">
          <div className="container max-w-3xl">
            <div className="text-center mb-6 md:mb-12">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png" alt="VEDA CARE" className="h-16 w-auto mx-auto mb-5" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
                <span className="block">歡迎來到</span>
                <span className="block">VEDA CARE</span>
              </h2>
              <p className="intro-text-refined text-base md:text-lg">
                我們相信真正的健康遠超越身體層面。它關乎心靈、身體與精神的和諧——這份平衡經常被現代生活所破壞。
              </p>
            </div>

            <div className="veda-philosophy-grid">
              {BRAND_PHILOSOPHY.pillars.map((pillar) => (
                <div key={pillar.title} className="philosophy-card">
                  <h3 className="philosophy-title">
                    {pillar.title}
                  </h3>
                  <p className="philosophy-desc">
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
        <section className="pt-0 pb-10 md:pb-32">
          {/* Divider between Brand Philosophy and Precision Strategy */}
          <div className="container mb-10 md:mb-16">
            <div className="h-px w-full" style={{ background: 'rgba(45,79,30,0.12)' }} />
          </div>

          <div className="container">
            <h2 className="text-xl md:text-4xl font-display font-bold text-primary mb-10 md:mb-14 text-center">
              精準對策
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((category) => {
                const copy: Record<string, string> = {
                  "plant-nutrition": "精準補充每日所需原料，為身體預約明天的從容。",
                  "frequency-resonance": "維持情緒平衡與良好睡眠品質，找回游刃有餘的生活節奏。",
                  "veda-advisor": "由 Veda 親自為您規劃，最適合您的精準健康方案。",
                };
                return (
                  <Link key={category.id} href={`/shop?category=${category.id}`} className="group block">
                    <div
                      className="p-6 md:p-8 rounded-2xl h-full flex flex-col transition-all duration-300"
                      style={{
                        background: 'rgba(45,79,30,0.05)',
                        border: '1.5px solid rgba(45,79,30,0.10)',
                        boxShadow: '0 1px 3px rgba(45,79,30,0.04)',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(45,79,30,0.13)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(45,79,30,0.22)';
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(45,79,30,0.08)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(45,79,30,0.04)';
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(45,79,30,0.10)';
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(45,79,30,0.05)';
                      }}
                    >
                      <div className="text-4xl md:text-5xl mb-4" style={{ lineHeight: 1 }}>{category.icon}</div>
                      <h3 className="font-display font-bold text-base md:text-xl mb-2 transition-colors"
                        style={{ color: '#2D4F1E' }}>
                        {category.name}
                      </h3>
                      <p className="text-sm flex-1 leading-relaxed" style={{ color: '#555555', lineHeight: '1.8' }}>
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
                );
              })}
            </div>
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
        <section className="py-10 md:py-16 bg-[#f9f8f5]">
          <div className="container max-w-xl">
            <QuizAppetizer />
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
                  植物 EAA 黃金比例，補充日常能量缺口。
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
                  MSM、薑黃、植萃胜肽，支持日常行動輕盈自如。
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

              <div className="space-y-5 mb-10">
                <p className="text-base" style={{ fontFamily: "'PingFang TC','Helvetica Neue',Helvetica,Arial,sans-serif", color: '#555', lineHeight: '2.2', fontWeight: 400, letterSpacing: '0.12em', wordBreak: 'keep-all' }}>
                  多年來，我深耕在專業保健領域與受邀出席的各種健康講座中，聽過無數對生活的焦慮。我發現大家最累的，其實不是缺乏營養，而是<strong style={{ color: '#2D4F1E', fontWeight: 700 }}>「選得太累」</strong>。
                </p>
                <p className="text-base" style={{ fontFamily: "'PingFang TC','Helvetica Neue',Helvetica,Arial,sans-serif", color: '#555', lineHeight: '2.2', fontWeight: 400, letterSpacing: '0.12em', wordBreak: 'keep-all' }}>
                  因為不忍心看妳盲目地「看到什麼補什麼」，我決定發揮我對成分的挑剔、以及這 20 年累積的嚴謹經驗，為妳過濾掉不必要的雜質與負擔。
                </p>
                <p className="text-base" style={{ fontFamily: "'PingFang TC','Helvetica Neue',Helvetica,Arial,sans-serif", color: '#555', lineHeight: '2.2', fontWeight: 400, letterSpacing: '0.12em', wordBreak: 'keep-all' }}>
                  我深信，身體是有靈性的，它聽得懂妳給了它什麼。這些年，我只讓家人和我自己補充這份經由時間驗證、專業篩選出的精準植萃精華，用最純粹的方式，支持妳每天滿滿的動能。
                </p>
                <p className="text-base" style={{ fontFamily: "'PingFang TC','Helvetica Neue',Helvetica,Arial,sans-serif", color: '#555', lineHeight: '2.2', fontWeight: 400, letterSpacing: '0.12em', wordBreak: 'keep-all' }}>
                  那些繁瑣的科研數據，交給我的經驗就好；而這份「隨心所欲」的從容，我幫妳完整地留下來。
                </p>
              </div>

              {/* Closing Signature */}
              <div className="mt-2 pt-8 border-t border-[#2D4F1E]/12 text-center">
                <p className="text-base italic"
                  style={{ color: '#666666', lineHeight: '2.0', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
                  我深信，身體是有靈性的，它能懂妳給了什麼。
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
                真實心聲：與 VEDA 一起找回生活從容
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
