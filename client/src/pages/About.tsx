import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MISCONCEPTIONS = [
  {
    index: "01",
    myth: "看到熱門成分就補，以為「多」就是好。",
    truth: "盲目堆疊只會增加代謝負擔。VEDA 主張「精準減法」，只給身體認得出的純粹。",
    insight: "你知道嗎？同時補充過多種類的保健品，反而可能干擾彼此的吸收率。「精準選擇」才是更適合日常維持的保養策略。",
  },
  {
    index: "02",
    myth: "累了就喝咖啡或提神飲料，快速充電。",
    truth: "那只是在預支未來的能量。真正的底氣，來自於日常穩健的生理基底維護。",
    insight: "你知道嗎？咖啡因的提神效果通常只維持 3-5 小時，之後反而會有「能量谷底」效應。穩定的植萃日常補充，有助於支持更穩定的日常底氣。",
  },
  {
    index: "03",
    myth: "保養是為了「以後」不生病。",
    truth: "保養是為了「現在」就能隨心所欲。最好的狀態，是妳想走就走的自由。",
    insight: "你知道嗎？把保養當成「現在的日常」而非「未來的保險」，更容易維持穩定的補充節奏，讓身體有機會一點一點找回自己的節奏。",
  },
];

function InsightTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
        style={{
          background: open ? '#2D4F1E' : 'rgba(45,79,30,0.08)',
          color: open ? '#ffffff' : '#2D4F1E',
          border: '1px solid rgba(45,79,30,0.18)',
        }}
      >
        <span>💡</span>
        <span>深入解析</span>
        <span style={{ transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>▾</span>
      </button>
      {open && (
        <div
          className="mt-2 p-4 rounded-2xl text-sm"
          style={{
            background: 'rgba(45,79,30,0.06)',
            border: '1px solid rgba(45,79,30,0.14)',
            color: '#4A4A4A',
            lineHeight: '1.85',
            animation: 'tooltipReveal 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">

        {/* I. Hero — Magazine Split: text left / Veda photo right */}
        <section className="min-h-screen flex items-center bg-[#f9f8f5]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">

            {/* Left: Copy */}
            <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-24 lg:px-20 order-last md:order-first">

              <p className="text-sm tracking-[0.25em] uppercase mb-10" style={{ color: '#2D4F1E', fontWeight: 600 }}>
                VEDA CARE &nbsp;｜&nbsp; 郝營養
              </p>

              <h1 className="font-bold mb-8" style={{ color: '#2D4F1E', lineHeight: '1.55' }}>
                <span style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(18px, 5vw, 30px)' }}>最好的營養學，</span>
                <span style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(18px, 5vw, 30px)' }}>是妳一聽就懂的日常。</span>
              </h1>

              <p className="font-semibold mb-10 pb-10 border-b border-[#2D4F1E]/20" style={{ color: '#2D4F1E', lineHeight: '1.9', fontSize: 'clamp(11px, 3.5vw, 15px)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                「健康，應該是妳說走就走的底氣。」
              </p>

              <div className="space-y-5">
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  看了 20 多年，有太多人為了生活拼搏、卻透支底氣，捨不得保養自己。有些人是看到什麼補什麼，以為有補就是好，其實大錯特錯。
                </p>
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  我們以精準的植萃高機能，取代盲目的補充。那些繁瑣的成分比對與科研調研交給我，好商品未必會貴，而那份「隨心所欲」的生活主導權，還給妳自己。
                </p>

                {/* Signature quote — 最喜歡那句 */}
                <div style={{ borderLeft: '3px solid #2D4F1E', paddingLeft: 18, marginTop: 28 }}>
                  <p style={{ fontSize: 17, fontWeight: 600, color: '#2D4F1E', lineHeight: 1.85, fontStyle: 'italic', letterSpacing: '0.04em' }}>
                    把生活塞滿不叫充實，<br />保養身體亦是如此。
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="relative min-h-[90vw] md:min-h-screen order-first md:order-last">
              <img
                src="/brand-hero.png"
                alt="VEDA CARE 品牌形象"
                className="absolute inset-0 w-full h-full object-cover object-[40%_center]"
              />
            </div>

          </div>
        </section>

        {/* II. Misconception vs Truth */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container max-w-3xl">

            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-5 text-center" style={{ color: '#2D4F1E' }}>
              VEDA CARE &nbsp;｜&nbsp; 認知誤區
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: '#2D4F1E', lineHeight: '1.5' }}>
              妳以為的保養，<br className="md:hidden" />是否正在透支妳？
            </h2>
            <p className="text-sm text-center mb-16" style={{ color: '#666666', lineHeight: '1.9' }}>
              事倍功半！三大誤區，妳中了嗎？
            </p>

            <div className="space-y-5">
              {MISCONCEPTIONS.map((item) => (
                <div key={item.index}
                  style={{
                    background: '#ffffff',
                    borderRadius: 20,
                    border: '1px solid rgba(45,79,30,0.12)',
                    overflow: 'hidden',
                    boxShadow: '0 2px 16px rgba(45,79,30,0.05)',
                  }}>

                  {/* Myth */}
                  <div style={{ background: 'rgba(45,79,30,0.035)', padding: '26px 32px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(45,79,30,0.6)' }}>
                        {item.index}
                      </span>
                      <span style={{ width: 20, height: 1, background: 'rgba(45,79,30,0.18)', display: 'inline-block' }} />
                      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', color: 'rgba(45,79,30,0.75)', textTransform: 'uppercase' }}>
                        誤 區
                      </span>
                    </div>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#2D4F1E', lineHeight: 1.8 }}>
                      {item.myth}
                    </p>
                  </div>

                  {/* Connector */}
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 32px', background: '#fff', height: 36 }}>
                    <div style={{ flex: 1, height: 1, background: 'rgba(45,79,30,0.1)' }} />
                    <span style={{ padding: '0 14px', fontSize: 12, color: 'rgba(45,79,30,0.75)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      ✦ &nbsp;真 相
                    </span>
                    <div style={{ flex: 1, height: 1, background: 'rgba(45,79,30,0.1)' }} />
                  </div>

                  {/* Truth */}
                  <div style={{ padding: '18px 32px 28px', background: '#fff' }}>
                    <p style={{ fontSize: 15, color: '#444', lineHeight: 1.95, fontWeight: 400 }}>
                      {item.truth}
                    </p>
                    <InsightTooltip text={item.insight} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* III. Video Section */}
        <section className="py-20 md:py-28 bg-[#f9f8f5]">
          <div className="container max-w-3xl">

            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-5 text-center" style={{ color: '#2D4F1E' }}>
              VEDA CARE &nbsp;｜&nbsp; 品牌影片
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-12 text-center" style={{ color: '#2D4F1E', lineHeight: '1.6' }}>
              30 秒，看見渴望的從容
            </h2>

            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(45,79,30,0.14)', aspectRatio: '16/9', background: '#1a2e12' }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.85 }}
              >
                <source src="/veda_brand_video.mp4" type="video/mp4" />
              </video>

              {/* Overlay when no video — placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(45,79,30,0.72) 0%, rgba(26,46,18,0.55) 100%)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 cursor-pointer transition-transform hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.35)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.15em' }}>
                  品牌影片即將上線
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* IV. Final CTA */}
        <section className="py-24 md:py-36 relative overflow-hidden"
          style={{ background: '#1a2e12' }}>

          {/* Soft radial glow */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700, height: 500,
            background: 'radial-gradient(ellipse at center, rgba(61,99,40,0.55) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="container max-w-xl text-center relative" style={{ zIndex: 1 }}>

            {/* Top gold rule */}
            <div style={{ width: 40, height: 1, background: '#B59A6D', margin: '0 auto 32px' }} />

            {/* Label */}
            <p style={{ fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(181,154,109,0.9)', fontWeight: 600, marginBottom: 28 }}>
              VEDA CARE &nbsp;｜&nbsp; 開始妳的旅程
            </p>

            {/* Heading */}
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#ffffff', lineHeight: 1.7, marginBottom: 22, letterSpacing: '0.02em' }}>
              別讓身體拖了後腿，<br />從這一步開始。
            </h2>

            {/* Subtitle */}
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 2.1, marginBottom: 48, fontStyle: 'italic', letterSpacing: '0.05em' }}>
              六道問題，由 VEDA 親自為妳梳理<br />最值得優先關注的身體需求。
            </p>

            {/* CTA — champagne gold outline pill */}
            <Link href="/quiz"
              className="inline-flex items-center gap-3 transition-all duration-300 hover:bg-[rgba(181,154,109,0.12)] active:scale-95"
              style={{
                border: '1px solid rgba(181,154,109,0.65)',
                color: '#C8A97A',
                padding: '14px 40px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textDecoration: 'none',
              }}>
              立即測驗 &ensp;→
            </Link>

            {/* Bottom gold rule */}
            <div style={{ width: 40, height: 1, background: 'rgba(181,154,109,0.25)', margin: '44px auto 0' }} />

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
