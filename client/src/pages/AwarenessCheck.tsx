import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizAppetizer from "@/components/QuizAppetizer";
import ShareButton from "@/components/ShareButton";

export default function AwarenessCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f5]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start py-14 px-4">
        <div className="w-full max-w-xl">

          {/* Page header */}
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.28em] uppercase font-semibold mb-3"
              style={{ color: "rgba(45,79,30,0.5)" }}>
              VEDA CARE &nbsp;｜&nbsp; Route A · 覺察檢測
            </p>
            <h1 className="text-xl md:text-2xl font-bold mb-2"
              style={{ color: "#2D4F1E", lineHeight: "1.55" }}>
              【身體主導權】覺察檢測
            </h1>
            <p className="text-sm mb-5" style={{ color: "rgba(45,79,30,0.55)", lineHeight: "1.8" }}>
              妳正在「預支明天」嗎？4 題，60 秒，即刻知道。
            </p>
            <ShareButton
              title="【身體主導權】覺察檢測 — VEDA CARE"
              text="4 個問題，60 秒，看看妳是否正在預支明天的能量。"
            />
          </div>

          <QuizAppetizer />

        </div>
      </main>

      <Footer />
    </div>
  );
}
