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
                <h1 className="text-2xl md:text-5xl font-display font-bold text-foreground mb-4">
                  關於 VEDA CARE | 郝營養
                </h1>
                <p className="text-base md:text-xl font-semibold text-primary mb-6">
                  20 年生命科學智慧：只為幫您找回生活的主導權
                </p>
                <p className="text-base text-primary font-bold mb-10 md:mb-12" style={{ lineHeight: '1.9' }}>
                  「健康不該是一道艱澀的數學題，而是一份說走就走的底氣。」
                </p>
                
                <p className="text-sm md:text-base text-foreground/70 font-light mb-6" style={{ lineHeight: '2.0' }}>
                  二十多年來，我們在身體維護的領域裡鑽研。這份資歷讓我們明白：最好的營養學，就是您一聽就懂的生活日常。
                </p>
                
                <p className="text-sm md:text-base text-foreground/70 font-light mb-6" style={{ lineHeight: '2.0' }}>
                  在這裡，我們不談生硬的術語。郝營養 已經為您過濾掉繁瑣的研究，把複雜的數據變成最簡單的選擇。
                </p>
                
                <p className="text-base text-primary font-bold mb-10 md:mb-12" style={{ lineHeight: '1.9' }}>
                  「專業的事交給我，您只需要負責輕鬆地變好。」
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
            <h2 className="text-xl md:text-4xl font-display font-bold text-foreground mb-6">
              {BRAND_STORY.title}
            </h2>
            <p className="text-lg text-primary font-semibold mb-10 md:mb-12">
              {BRAND_STORY.subtitle}
            </p>

            <div className="space-y-6 text-foreground/75 leading-relaxed">
              {BRAND_STORY.content.split("\n\n").map((paragraph, index) => {
                // Highlight key phrases in green - order matters to avoid double replacement
                let highlightedParagraph = paragraph
                  .replace(/保養，不該是無止盡的堆疊，而是一場減法的智慧/g, '<span className="text-primary font-bold">保養，不該是無止盡的堆疊，而是一場減法的智慧</span>')
                  .replace(/最大的財富不是擁有多少，而是能多游刃有餘地去體驗生活/g, '<span className="text-primary font-bold">最大的財富不是擁有多少，而是能多游刃有餘地去體驗生活</span>')
                  .replace(/系統性的平衡/g, '<span className="text-primary font-bold">系統性的平衡</span>')
                  .replace(/找回那份久違的從容/g, '<span className="text-primary font-bold">找回那份久違的從容</span>')
                  .replace(/減法/g, '<span className="text-primary font-bold">減法</span>');
                
                return (
                  <p key={index} className="text-base" dangerouslySetInnerHTML={{ __html: highlightedParagraph }} />
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border">
          <div className="container max-w-2xl text-center">
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
              有任何疑問嗎？
            </h3>
            <p className="text-lg text-foreground/70 mb-6">
              歡迎與我們聯繫，我們很樂意為您解答關於產品或品牌理念的任何問題。
            </p>
            <a
              href="mailto:ucc25888@gmail.com"
              className="text-primary font-medium hover:text-primary/80 transition-colors text-lg"
            >
              ucc25888@gmail.com
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background via-green-50/20 to-background border-y border-border">
          <div className="container">
            <h2 className="text-xl md:text-4xl font-display font-bold text-foreground mb-8 md:mb-12 text-center">
              {BRAND_PHILOSOPHY.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {BRAND_PHILOSOPHY.pillars.map((pillar, index) => (
                <div key={pillar.title} className={`card-wellness p-5 md:p-8 ${index === 3 ? 'md:col-start-2' : ''}`}>
                  <h3 className="font-display font-bold text-lg md:text-2xl text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
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
