import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LINE_URL = "https://lin.ee/10DnnGU";

const QUESTIONS = [
  {
    id: 1,
    question: "最近一個月，你的整體能量狀態如何？",
    options: [
      { label: "每天活力充沛，狀態穩定", score: 4 },
      { label: "大部分還好，偶爾疲倦", score: 3 },
      { label: "容易疲倦，需要靠咖啡撐著", score: 2 },
      { label: "幾乎天天疲憊，提不起勁", score: 1 },
    ],
  },
  {
    id: 2,
    question: "你的睡眠品質如何？",
    options: [
      { label: "睡得好，早上精神飽滿", score: 4 },
      { label: "偶爾淺眠或入睡困難", score: 3 },
      { label: "常半夜醒來或多夢", score: 2 },
      { label: "長期失眠，睡再久也覺得累", score: 1 },
    ],
  },
  {
    id: 3,
    question: "面對壓力時，你的身心反應？",
    options: [
      { label: "能平穩應對，恢復快", score: 4 },
      { label: "輕微不適，休息後能緩解", score: 3 },
      { label: "常感胸悶、心跳加速、焦慮", score: 2 },
      { label: "壓力一來整個人就垮，難以復原", score: 1 },
    ],
  },
  {
    id: 4,
    question: "你的消化與腸胃狀況？",
    options: [
      { label: "規律正常，少有不適", score: 4 },
      { label: "偶爾脹氣或消化不良", score: 3 },
      { label: "常有腹脹、便秘或腹瀉", score: 2 },
      { label: "長期腸胃困擾，嚴重影響生活", score: 1 },
    ],
  },
  {
    id: 5,
    question: "你目前的情緒狀態？",
    options: [
      { label: "平穩愉快，能享受生活", score: 4 },
      { label: "偶爾煩躁，但能自我調節", score: 3 },
      { label: "經常焦慮鬱悶，難以放鬆", score: 2 },
      { label: "情緒波動大，常有無力感", score: 1 },
    ],
  },
  {
    id: 6,
    question: "你對目前健康狀態的整體滿意度？",
    options: [
      { label: "非常滿意，繼續維持", score: 4 },
      { label: "還不錯，但有改善空間", score: 3 },
      { label: "不太滿意，想認真改變", score: 2 },
      { label: "很不滿意，需要立刻採取行動", score: 1 },
    ],
  },
];

type ResultType = "vibrant" | "optimizing" | "restore";

const RESULTS: Record<ResultType, {
  label: string;
  subtitle: string;
  color: string;
  description: string;
  recommendation: string;
  cta: string;
}> = {
  vibrant: {
    label: "活力守護型",
    subtitle: "你的健康根基扎實，現在是精準優化的最好時機",
    color: "#2D4F1E",
    description:
      "你的身心狀態相當穩健，能量充沛、情緒平穩。這正是許多人羨慕的理想狀態。但「維持」本身也需要策略——環境壓力、季節變化，都可能悄悄消耗你的健康儲備。",
    recommendation:
      "VEDA 建議你：以「精準鞏固」取代盲目補給。用科學配方維持你現有的活力基礎，讓好狀態持續更久。",
    cta: "了解適合我的鞏固方案",
  },
  optimizing: {
    label: "主動調整型",
    subtitle: "你已察覺身體的訊號，現在正是扭轉的關鍵時刻",
    color: "#2D4F1E",
    description:
      "你的狀態有起有伏——某些面向表現不錯，但另一些正在悄悄發出警訊。這種「時好時壞」的感受，往往是身體在告訴你：是時候給自己一個更有系統的支持了。",
    recommendation:
      "VEDA 建議你：針對你最薄弱的環節（睡眠？消化？壓力？）進行定點修復，而不是什麼都補一點。精準，才是最有效率的健康投資。",
    cta: "找到我最需要的支持方案",
  },
  restore: {
    label: "全面修復型",
    subtitle: "你的身體在向你求救，它需要一個真正懂它的盟友",
    color: "#2D4F1E",
    description:
      "長期的耗損已在你的身心留下痕跡。疲憊、睡不好、情緒不穩定、腸胃不適……這些不是「個性問題」，也不是「年紀大了」——這是身體在告訴你，它需要被認真對待了。",
    recommendation:
      "VEDA 建議你：不要再用意志力硬撐。讓專業的全方位修復方案，從根本重建你的健康底氣。你值得被好好照顧。",
    cta: "立即與 VEDA 諮詢我的修復計畫",
  },
};

function getResult(score: number): ResultType {
  if (score >= 20) return "vibrant";
  if (score >= 13) return "optimizing";
  return "restore";
}

export default function WellnessQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const resultKey = getResult(totalScore);
  const result = RESULTS[resultKey];

  function handleSelect(score: number) {
    setSelected(score);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  }

  const progress = ((current) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {!done ? (
          /* ── Quiz Questions ── */
          <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-16"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)" }}>

            <div className="w-full max-w-xl">
              {/* Header badge */}
              <p className="text-xs tracking-[0.3em] uppercase text-center mb-6 font-medium"
                style={{ color: '#2D4F1E' }}>
                VEDA CARE &nbsp;｜&nbsp; 健康活力測驗
              </p>

              {/* Progress bar */}
              <div className="w-full h-1 rounded-full mb-8" style={{ background: 'rgba(45,79,30,0.12)' }}>
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: '#2D4F1E' }}
                />
              </div>

              {/* Question counter */}
              <p className="text-xs font-medium mb-4" style={{ color: 'rgba(45,79,30,0.55)' }}>
                第 {current + 1} 題，共 {QUESTIONS.length} 題
              </p>

              {/* Question */}
              <h2 className="text-xl md:text-2xl font-bold mb-8"
                style={{ color: '#2D4F1E', lineHeight: '1.6' }}>
                {QUESTIONS[current].question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-10">
                {QUESTIONS[current].options.map((opt) => (
                  <button
                    key={opt.score}
                    onClick={() => handleSelect(opt.score)}
                    className="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium text-base"
                    style={{
                      borderColor: selected === opt.score ? '#2D4F1E' : 'rgba(45,79,30,0.18)',
                      background: selected === opt.score ? '#2D4F1E' : '#ffffff',
                      color: selected === opt.score ? '#ffffff' : '#333333',
                      lineHeight: '1.6',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={selected === null}
                className="w-full py-4 rounded-xl font-bold text-base transition-all duration-200"
                style={{
                  background: selected !== null ? '#2D4F1E' : 'rgba(45,79,30,0.25)',
                  color: '#ffffff',
                  cursor: selected !== null ? 'pointer' : 'not-allowed',
                }}
              >
                {current + 1 === QUESTIONS.length ? "查看我的結果 →" : "下一題 →"}
              </button>
            </div>
          </section>

        ) : (
          /* ── Results ── */
          <section className="min-h-[calc(100vh-80px)] flex flex-col"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)" }}>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto w-full px-4 py-12 gap-10 items-center">

              {/* Left: Photo */}
              <div className="flex justify-center order-first md:order-first">
                <div className="relative w-64 md:w-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/quiz-result.png"
                    alt="VEDA CARE 郝營養"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                    style={{ background: 'rgba(45,79,30,0.85)' }}>
                    <p className="text-white text-xs font-medium tracking-wider text-center">郝營養 ｜ VEDA CARE</p>
                  </div>
                </div>
              </div>

              {/* Right: Result content */}
              <div className="order-last md:order-last">
                <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4"
                  style={{ color: '#2D4F1E' }}>
                  你的健康類型
                </p>

                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4"
                  style={{ background: '#2D4F1E', color: '#ffffff' }}>
                  {result.label}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: '#2D4F1E', lineHeight: '1.5' }}>
                  {result.subtitle}
                </h2>

                <div className="w-12 h-0.5 mb-6" style={{ background: '#2D4F1E' }} />

                <p className="text-base mb-5" style={{ color: '#333333', lineHeight: '2.0', fontWeight: 400 }}>
                  {result.description}
                </p>

                <div className="p-5 rounded-xl mb-8"
                  style={{ background: 'rgba(45,79,30,0.07)', borderLeft: '3px solid #2D4F1E' }}>
                  <p className="text-sm font-medium" style={{ color: '#2D4F1E', lineHeight: '1.9' }}>
                    {result.recommendation}
                  </p>
                </div>

                {/* LINE CTA */}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-xl font-bold text-base mb-4 transition-opacity hover:opacity-90"
                  style={{ background: '#2D4F1E', color: '#ffffff', lineHeight: '1.5' }}
                >
                  {result.cta}
                </a>

                <button
                  onClick={handleRestart}
                  className="w-full text-center py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: '#2D4F1E', border: '1.5px solid rgba(45,79,30,0.3)', background: 'transparent' }}
                >
                  重新測驗
                </button>
              </div>
            </div>

            {/* Score note */}
            <div className="text-center pb-10">
              <p className="text-xs" style={{ color: 'rgba(45,79,30,0.45)' }}>
                測驗分數：{totalScore} / 24 &nbsp;｜&nbsp; 結果僅供參考，如有疑問請諮詢專業建議
              </p>
            </div>

          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
