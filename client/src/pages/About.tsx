import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_STORY, BRAND_PHILOSOPHY } from "@/../../shared/const";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Brand Hero — Full-width cinematic layout */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* Background image — full width */}
          <img
            src="/brand-hero.png"
            alt="VEDA CARE 品牌形象"
            className="absolute inset-0 w-full h-full object-cover object-[62%_center]"
          />

          {/* Left gradient overlay for text readability + color cohesion */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, rgba(45,79,30,0.82) 0%, rgba(45,79,30,0.70) 38%, rgba(45,79,30,0.30) 62%, rgba(45,79,30,0.0) 78%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-xl px-8 py-24 md:max-w-2xl md:px-14 md:py-32 lg:px-20">

            <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>
              VEDA CARE &nbsp;｜&nbsp; 郝營養
            </p>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#ffffff', lineHeight: '1.6' }}>
              最好的營養學，<br />是妳一聽就懂的日常。
            </h1>

            <p className="text-base md:text-lg font-bold mb-10 pb-10" style={{ color: 'rgba(255,255,255,0.90)', lineHeight: '1.9', borderBottom: '1px solid rgba(255,255,255,0.25)' }}>
              「健康不該是一道艱澀的數學題，<br className="hidden md:block" />而是一份說走就走的底氣。」
            </p>

            <div className="space-y-5">
              <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '2.0', fontWeight: 400 }}>
                看了 20 多年為了生活拼搏、卻透支底氣的妳，我深知：保養不該是無止盡的堆疊。
              </p>
              <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '2.0', fontWeight: 400 }}>
                VEDA 已經為妳過濾掉繁瑣的研究與術語。關於成分比對與科研篩選的苦工，我已經替妳把關好了。把複雜的調研留給我，而那份「隨心所欲」的生活主導權，還給妳自己。
              </p>
              <p className="text-sm md:text-base font-bold pt-2" style={{ color: '#ffffff', lineHeight: '1.9' }}>
                專業的事交給我，妳只需要負責輕鬆地變好。
              </p>
            </div>
          </div>

        </section>

        {/* Brand Story */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#333333', lineHeight: '1.4' }}>
              {BRAND_STORY.title}
            </h2>
            <p className="text-base md:text-lg font-bold text-primary mb-10 md:mb-12" style={{ lineHeight: '1.8' }}>
              {BRAND_STORY.subtitle}
            </p>

            <div className="space-y-6">
              {BRAND_STORY.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-base" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border">
          <div className="container max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333' }}>
              有任何疑問嗎？
            </h3>
            <p className="text-base mb-6" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
              歡迎與我們聯繫，我們很樂意為您解答關於產品或品牌理念的任何問題。
            </p>
            <a
              href="mailto:ucc25888@gmail.com"
              className="text-primary font-bold hover:text-primary/80 transition-colors text-base"
            >
              ucc25888@gmail.com
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-green-50/20 to-background border-y border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center" style={{ color: '#333333' }}>
              {BRAND_PHILOSOPHY.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {BRAND_PHILOSOPHY.pillars.map((pillar, index) => (
                <div key={pillar.title} className={`card-wellness p-5 md:p-8 ${index === 3 ? 'md:col-start-2' : ''}`}>
                  <h3 className="font-bold text-lg md:text-xl mb-3 text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-base" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
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
