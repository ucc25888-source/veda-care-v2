import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MISCONCEPTIONS = [
  {
    index: "01",
    myth: "看到熱門成分就補，以為「多」就是好。",
    truth: "盲目堆疊只會增加代謝負擔。VEDA 主張「精準減法」，只給身體認得出的純粹。",
    insight: "你知道嗎？同時補充過多種類的保健品，反而可能干擾彼此的吸收率。「精準」才是最高效的日常保養策略。",
  },
  {
    index: "02",
    myth: "累了就喝咖啡或提神飲料，快速充電。",
    truth: "那只是在預支未來的能量。真正的底氣，來自於日常穩健的生理基底維護。",
    insight: "你知道嗎？咖啡因的提神效果通常只維持 3-5 小時，之後反而會有「能量谷底」效應。穩定的植萃日常補充，才是更持久的能量基礎。",
  },
  {
    index: "03",
    myth: "保養是為了「以後」不生病。",
    truth: "保養是為了「現在」就能隨心所欲。最好的狀態，是妳想走就走的自由。",
    insight: "你知道嗎？研究顯示，把保養當成「現在的投資」而非「未來的保險」的人，更容易建立持久的健康習慣，並對自己的狀態感到滿意。",
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

              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: '#2D4F1E', fontWeight: 500 }}>
                VEDA CARE &nbsp;｜&nbsp; 郝營養
              </p>

              <h1 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#2D4F1E', lineHeight: '1.5' }}>
                最好的營養學，<br />是妳一聽就懂的日常。
              </h1>

              <p className="text-base font-semibold mb-10 pb-10 border-b border-[#2D4F1E]/20" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                「健康不該是一道艱澀的數學題，<br className="hidden md:block" />而是一份說走就走的底氣。」
              </p>

              <div className="space-y-5">
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  看了 20 多年，有太多人為了生活拼搏、卻透支底氣，捨不得保養自己。有些人是看到什麼補什麼，以為有補就是好，其實大錯特錯。
                </p>
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  我們以精準的植萃高機能，取代盲目的補充。那些繁瑣的成分比對與科研調研交給我，好商品未必會貴，而那份「隨心所欲」的生活主導權，還給妳自己。
                </p>
                <p className="text-base" style={{ color: '#666666', lineHeight: '1.9', fontStyle: 'italic' }}>
                  把生活塞滿不叫充實，保養身體亦是如此。
                </p>
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
              別再事倍功半！這三大誤區，妳中了嗎？
            </p>

            <div className="space-y-6">
              {MISCONCEPTIONS.map((item) => (
                <div key={item.index}
                  className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
                  style={{ border: '1px solid rgba(45,79,30,0.12)' }}>

                  {/* Myth — warm tinted */}
                  <div className="p-7 md:p-9" style={{ background: 'rgba(45,79,30,0.04)' }}>
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold tracking-widest mt-1 shrink-0" style={{ color: 'rgba(45,79,30,0.35)' }}>
                        {item.index}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(45,79,30,0.5)' }}>
                          誤 區
                        </p>
                        <p className="text-base font-semibold" style={{ color: '#2D4F1E', lineHeight: '1.8' }}>
                          {item.myth}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Truth — clean white */}
                  <div className="p-7 md:p-9 bg-white">
                    <div className="flex items-start gap-4">
                      <span className="text-lg shrink-0 mt-0.5">✦</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2D4F1E' }}>
                          真 相
                        </p>
                        <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '1.9' }}>
                          {item.truth}
                        </p>
                        <InsightTooltip text={item.insight} />
                      </div>
                    </div>
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
              30 秒，看見妳渴望的從容
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
        <section className="py-20 md:py-28"
          style={{ background: 'linear-gradient(135deg, #2D4F1E 0%, #3d6b28 100%)' }}>
          <div className="container max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] mb-6"
              style={{ color: 'rgba(255,255,255,0.6)' }}>
              VEDA CARE &nbsp;｜&nbsp; 第一步
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: '#ffffff', lineHeight: '1.6' }}>
              不再讓身體拖妳後腿，<br />從這一步開始。
            </h2>

            <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: '2.0' }}>
              6 個問題，找出妳現在最需要的健康支持。由 VEDA 為妳精準規劃。
            </p>

            <Link href="/quiz"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: '#ffffff',
                color: '#2D4F1E',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                fontSize: '0.95rem',
              }}>
              立即進行健康主導權檢測 →
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
