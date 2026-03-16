import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_STORY, BRAND_PHILOSOPHY } from "@/../../shared/const";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Brand Hero — Magazine Split Layout: text left / photo right */}
        <section className="min-h-screen flex items-center bg-[#f9f8f5]">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">

            {/* Left: Copy — clean background, no photo behind */}
            <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-24 lg:px-20 order-last md:order-first">

              <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: '#2D4F1E', fontWeight: 500 }}>
                VEDA CARE &nbsp;｜&nbsp; 郝營養
              </p>

              <h1 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#2D4F1E', lineHeight: '1.5' }}>
                最好的營養學，<br />是妳一聽就懂的日常。
              </h1>

              <p className="text-base font-bold mb-10 pb-10 border-b border-[#2D4F1E]/20" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                「健康不該是一道艱澀的數學題，<br className="hidden md:block" />而是一份說走就走的底氣。」
              </p>

              <div className="space-y-6">
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  看了 20 多年為了生活拼搏、卻透支底氣的妳，我深知：保養不該是無止盡的堆疊。
                </p>
                <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  VEDA 已經為妳過濾掉繁瑣的研究與術語。關於成分比對與科研篩選的苦工，我已經替妳把關好了。把複雜的調研留給我，而那份「隨心所欲」的生活主導權，還給妳自己。
                </p>
                <p className="text-base font-bold pt-2" style={{ color: '#4A4A4A', lineHeight: '1.9' }}>
                  專業的事交給我，妳只需要負責輕鬆地變好。
                </p>
              </div>
            </div>

            {/* Right: Photo — full panel, face fully visible, no text overlay */}
            <div className="relative min-h-[90vw] md:min-h-screen order-first md:order-last">
              <img
                src="/brand-hero.png"
                alt="VEDA CARE 品牌形象"
                className="absolute inset-0 w-full h-full object-cover object-[40%_center]"
              />
            </div>

          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#4A4A4A', lineHeight: '1.4' }}>
              {BRAND_STORY.title}
            </h2>
            <p className="text-base md:text-lg font-bold text-primary mb-10 md:mb-12" style={{ lineHeight: '1.8' }}>
              {BRAND_STORY.subtitle}
            </p>

            <div className="space-y-6">
              {BRAND_STORY.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-green-50/20 to-background border-y border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center" style={{ color: '#4A4A4A' }}>
              {BRAND_PHILOSOPHY.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {BRAND_PHILOSOPHY.pillars.map((pillar, index) => (
                <div key={pillar.title} className={`card-wellness p-5 md:p-8 ${index === 3 ? 'md:col-start-2' : ''}`}>
                  <h3 className="font-bold text-lg md:text-xl mb-3 text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-base" style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                    {pillar.description}
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
