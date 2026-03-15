import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND_STORY, BRAND_PHILOSOPHY } from "@/../../shared/const";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header with Text Only */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#333333', lineHeight: '1.4' }}>
                  關於 VEDA CARE | 郝營養
                </h1>

                <p className="text-base md:text-xl font-bold text-primary mb-6" style={{ lineHeight: '1.8' }}>
                  最好的營養學，是妳一聽就懂的日常。
                </p>

                <p className="text-base font-bold text-primary mb-8" style={{ lineHeight: '1.9' }}>
                  「健康不該是一道艱澀的數學題，而是一份說走就走的底氣。」
                </p>

                <p className="text-base mb-6" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  看了 20 多年為了生活拼搏、卻透支底氣的人，我深知：保養不該是無止盡的堆疊。忘了那些令人糾結的成分表吧！我們用精準的植萃高機能，取代盲目的補給。
                </p>

                <p className="text-base mb-8" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  那些繁瑣的調研苦工，VEDA 已經替您把關好了。把複雜的保養留給我，而那份隨心所欲的生活主導權，還給您自己。
                </p>

                <p className="text-base font-bold mb-10 md:mb-12" style={{ color: '#333333', lineHeight: '1.9' }}>
                  專業的事交給我，您只需要負責輕鬆地變好。
                </p>

                <div className="mt-8">
                  <img
                    src="/brand-story.jpg"
                    alt="郝營養 營養教練"
                    className="w-3/4 sm:w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
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
