import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizAppetizer from "@/components/QuizAppetizer";

export default function AwarenessCheck() {
  useEffect(() => {
    document.title = "VEDA CARE ｜ 身體缺什麼？";
    return () => { document.title = "VEDA CARE 郝營養 | 科研級植萃精粹"; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f5]">
      <Header />

      {/* Hero Image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '260px' }}>
        <img
          src="/quiz-hero.png"
          alt="健康評估"
          className="w-full h-full object-cover object-top"
          style={{ display: 'block' }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-start py-10 px-4">
        <div className="w-full max-w-xl">

          {/* Intro */}
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.28em] uppercase font-semibold mb-3"
              style={{ color: "rgba(45,79,30,0.5)", fontSize: '11px' }}>
              VEDA CARE &nbsp;｜&nbsp; 身體覺察
            </p>
            <p className="font-semibold" style={{ color: 'rgba(45,79,30,0.65)', fontSize: '13px', lineHeight: '1.9', whiteSpace: 'nowrap' }}>
              4 道題，即刻了解妳的能量狀態
            </p>
          </div>

          <QuizAppetizer />

        </div>
      </main>

      <Footer />
    </div>
  );
}
