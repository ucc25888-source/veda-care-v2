import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LINE_URL = "https://lin.ee/10DnnGU";

/*
  Scoring logic (new):
  Count the number of "A" answers.
    A >= 4  →  Level 3: Power Crisis      (全面修復型)
    A = 2–3 →  Level 2: Energy Warning    (主動調整型)
    A <= 1  →  Level 1: Balanced Potential (活力掌控型)
*/

const QUESTIONS = [
  {
    id: 1,
    topic: "關於「午餐後的斷電」",
    question:
      "明明午餐吃得很豐盛，但一回到辦公桌前，大腦卻像被強行關機，甚至想躲進茶水間偷偷瞇 5 分鐘？",
    options: [
      { key: "A", label: "每天下午都發生，咖啡也救不了。" },
      { key: "B", label: "偶爾發生，特別是壓力大的時候。" },
      { key: "C", label: "精神穩定，下午依然能保持高效。" },
    ],
  },
  {
    id: 2,
    topic: "關於「起床後的假性清醒」",
    question:
      "早上鬧鐘響了，身體卻沉重得像被黏在床上？必須靠一杯濃縮咖啡或意志力，才能啟動這一天？",
    options: [
      { key: "A", label: "沒錯，感覺睡再久都沒有真正「重啟」過。" },
      { key: "B", label: "起床需要一點時間暖機，但還可以。" },
      { key: "C", label: "醒來就感覺充飽電，神清氣爽。" },
    ],
  },
  {
    id: 3,
    topic: "關於「莫名其妙的卡頓」",
    question:
      "蹲下站起、或是想大步趕公車時，身體突然傳來一聲細微的「抗議」，提醒妳：妳已經不是 20 歲了？",
    options: [
      { key: "A", label: "越來越頻繁，開始下意識避開大幅度動作。" },
      { key: "B", label: "運動量大時才有感，平常還好。" },
      { key: "C", label: "行動自如，完全沒想過這件事。" },
    ],
  },
  {
    id: 4,
    topic: "關於「精力的斷崖式下滑」",
    question:
      "到了下午四、五點，耐心突然變得很差？一點小事就想翻臉，只想趕快回家躺平，什麼社交都不想參與？",
    options: [
      { key: "A", label: "這就是我的寫照，回家後連說話都覺得累。" },
      { key: "B", label: "看工作量，有時候會覺得特別疲憊。" },
      { key: "C", label: "下班後還有精力處理個人興趣或健身。" },
    ],
  },
  {
    id: 5,
    topic: "關於「修復力的遲緩」",
    question:
      "以前熬個夜、累一天，睡一覺就回來了。現在累一天，感覺要花一個週末才能補回來，而且臉色總是帶點「灰塵感」？",
    options: [
      { key: "A", label: "真的！感覺修復速度永遠趕不上消耗速度。" },
      { key: "B", label: "需要多休息幾天，但還能恢復。" },
      { key: "C", label: "恢復力極佳，隔天又是全新的自己。" },
    ],
  },
  {
    id: 6,
    topic: "關於「營養的盲目堆疊」",
    question:
      "抽屜裡塞滿了各種聽說很厲害的保健品，但妳其實不確定它們到底有沒有用，只是「求個心安」？",
    options: [
      { key: "A", label: "中肯！我有在補，但身體的感覺卻沒什麼變。" },
      { key: "B", label: "有針對特定需求補，感覺還可以。" },
      { key: "C", label: "我很清楚身體缺什麼，精準補充。" },
    ],
  },
];

type ResultType = "crisis" | "warning" | "balanced";

const RESULTS: Record<ResultType, {
  level: string;
  label: string;
  subtitle: string;
  description: string;
  recommendation: string;
  cta: string;
}> = {
  crisis: {
    level: "Level 3",
    label: "全面修復型",
    subtitle: "妳的身體一直在撐著妳，現在換妳好好回應它",
    description:
      "長期靠咖啡撐著、睡了還是累、關節開始抗議、情緒容易斷線⋯⋯這不是妳的錯，也不是「年紀大了」的必然。這是現代生活的高消耗對身體造成的累積性損耗。妳值得比「撐過去」更好的狀態。",
    recommendation:
      "VEDA 建議妳：停止用意志力硬撐。從日常能量補充、維持良好睡眠品質與支持關節靈活度開始，讓身體重新找回屬於妳的主導權。專業的事交給 VEDA，妳只需要負責輕鬆地變好。",
    cta: "立即與郝營養諮詢我的調養計畫",
  },
  warning: {
    level: "Level 2",
    label: "主動調整型",
    subtitle: "妳已感受到身體的訊號，現在正是翻轉的關鍵時刻",
    description:
      "妳的狀態有起有伏——某些時刻感覺還好，但下午的疲倦、偶爾卡頓的關節、睡了還是累的早晨⋯⋯這些都是身體在向妳發出「需要更好支持」的訊號。妳已察覺，這是最珍貴的第一步。",
    recommendation:
      "VEDA 建議妳：不要等到真的撐不住才行動。針對妳最薄弱的環節——能量、睡眠品質、還是身體流暢感——進行定點強化補充。精準補給，才是效率最高的日常保養投資。",
    cta: "找到我最需要的調整方案",
  },
  balanced: {
    level: "Level 1",
    label: "活力掌控型",
    subtitle: "妳的身心已進入高效運轉模式，現在是精準鞏固的最好時機",
    description:
      "妳清楚知道自己的節奏，身體的流暢感與能量續航力都維持在理想狀態。這種「掌控感」正是 VEDA 所追求的核心——不是拼命補，而是精準給。但即使狀態穩健，環境壓力與季節變化仍會悄悄消耗健康儲備。",
    recommendation:
      "VEDA 建議妳：以「科學鞏固」取代過度補給。用最精準的植萃配方，持續支撐妳已建立的活力根基，讓這份從容走得更遠、更穩。",
    cta: "了解適合我的精準鞏固方案",
  },
};

function getResult(aCount: number): ResultType {
  if (aCount >= 4) return "crisis";
  if (aCount >= 2) return "warning";
  return "balanced";
}

export default function WellnessQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const aCount = answers.filter((a) => a === "A").length;
  const resultKey = getResult(aCount);
  const result = RESULTS[resultKey];
  const progress = ((current + (selectedKey ? 0.5 : 0)) / QUESTIONS.length) * 100;

  function handleSelect(key: string) {
    setSelectedKey(key);
  }

  function handleNext() {
    if (!selectedKey) return;
    const newAnswers = [...answers, selectedKey];
    setAnswers(newAnswers);
    setSelectedKey(null);
    if (current + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setAnimKey((k) => k + 1);
      setCurrent(current + 1);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers([]);
    setSelectedKey(null);
    setDone(false);
    setAnimKey(0);
  }

  const q = QUESTIONS[current];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {!done ? (
          <section
            className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-16"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)" }}
          >
            <div className="w-full max-w-xl">

              {/* Badge */}
              <p className="text-xs tracking-[0.3em] uppercase text-center mb-6 font-medium"
                style={{ color: '#2D4F1E' }}>
                VEDA CARE &nbsp;｜&nbsp; 身體自主意識測驗
              </p>

              {/* Progress bar */}
              <div className="w-full h-[3px] rounded-full mb-2" style={{ background: 'rgba(45,79,30,0.12)' }}>
                <div
                  className="h-[3px] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progress}%`, background: '#2D4F1E' }}
                />
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-xs font-medium" style={{ color: 'rgba(45,79,30,0.5)' }}>
                  Step {current + 1} / {QUESTIONS.length}
                </span>
                <span className="text-xs font-medium" style={{ color: 'rgba(45,79,30,0.35)' }}>
                  {Math.round(((current) / QUESTIONS.length) * 100)}% 完成
                </span>
              </div>

              {/* Question card — keyed for fade-slide animation */}
              <div
                key={animKey}
                style={{ animation: 'quizFadeSlide 0.42s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                {/* Topic */}
                <p className="text-xs font-semibold tracking-wider uppercase mb-3"
                  style={{ color: 'rgba(45,79,30,0.65)' }}>
                  {q.topic}
                </p>

                {/* Question */}
                <h2 className="text-lg md:text-xl font-bold mb-7"
                  style={{ color: '#2D4F1E', lineHeight: '1.7' }}>
                  {q.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {q.options.map((opt) => {
                    const isSelected = selectedKey === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelect(opt.key)}
                        className="w-full text-left rounded-2xl transition-all duration-200"
                        style={{
                          border: isSelected
                            ? '2px solid #2D4F1E'
                            : '2px solid rgba(45,79,30,0.16)',
                          background: isSelected ? '#2D4F1E' : '#ffffff',
                          boxShadow: isSelected
                            ? '0 0 0 4px rgba(45,79,30,0.12)'
                            : '0 1px 4px rgba(0,0,0,0.04)',
                        }}
                      >
                        <div className="flex items-start gap-4 px-5 py-4">
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-all duration-200"
                            style={{
                              background: isSelected ? 'rgba(255,255,255,0.22)' : 'rgba(45,79,30,0.08)',
                              color: isSelected ? '#ffffff' : '#2D4F1E',
                            }}
                          >
                            {opt.key}
                          </span>
                          <span
                            className="text-sm md:text-base"
                            style={{ color: isSelected ? '#ffffff' : '#4A4A4A', lineHeight: '1.75' }}
                          >
                            {opt.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Next / Submit */}
                <button
                  onClick={handleNext}
                  disabled={!selectedKey}
                  className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-200"
                  style={{
                    background: selectedKey ? '#2D4F1E' : 'rgba(45,79,30,0.20)',
                    color: '#ffffff',
                    cursor: selectedKey ? 'pointer' : 'not-allowed',
                    letterSpacing: '0.02em',
                    transform: selectedKey ? 'scale(1)' : 'scale(0.99)',
                  }}
                >
                  {current + 1 === QUESTIONS.length ? "查看我的專屬結果 →" : "下一題 →"}
                </button>
              </div>

            </div>
          </section>

        ) : (
          /* ── Results ── */
          <section
            className="flex flex-col"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)", animation: 'quizFadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            {/* Hero photo */}
            <div className="relative w-full overflow-hidden" style={{ maxHeight: '360px' }}>
              <img
                src="/quiz-result.png"
                alt="VEDA CARE 郝營養"
                className="w-full object-cover object-[50%_25%]"
                style={{ maxHeight: '360px' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(45,79,30,0) 40%, rgba(45,79,30,0.55) 100%)' }}
              />
              <div className="absolute bottom-4 left-6">
                <p className="text-white text-xs font-medium tracking-widest">郝營養 ｜ VEDA CARE</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto w-full px-6 py-10 md:py-14">

              <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: 'rgba(45,79,30,0.6)' }}>
                妳的健康類型
              </p>

              {/* Level badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(45,79,30,0.1)', color: '#2D4F1E' }}>
                  {result.level}
                </span>
                <span className="inline-block px-5 py-1.5 rounded-full text-sm font-bold"
                  style={{ background: '#2D4F1E', color: '#ffffff' }}>
                  {result.label}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-5"
                style={{ color: '#2D4F1E', lineHeight: '1.55' }}>
                {result.subtitle}
              </h2>

              <div className="w-10 h-[2px] mb-6" style={{ background: '#2D4F1E' }} />

              <p className="text-sm md:text-base mb-6"
                style={{ color: '#4A4A4A', lineHeight: '2.0', fontWeight: 400 }}>
                {result.description}
              </p>

              <div
                className="p-5 rounded-2xl mb-8"
                style={{ background: 'rgba(45,79,30,0.07)', borderLeft: '3px solid #2D4F1E' }}
              >
                <p className="text-sm font-medium" style={{ color: '#2D4F1E', lineHeight: '1.95' }}>
                  {result.recommendation}
                </p>
              </div>

              {/* A-count mini stats */}
              <div className="flex gap-3 mb-8">
                {["A", "B", "C"].map((letter) => {
                  const count = answers.filter((a) => a === letter).length;
                  return (
                    <div key={letter} className="flex-1 rounded-xl py-3 text-center"
                      style={{ background: letter === "A" && aCount >= 4 ? 'rgba(45,79,30,0.1)' : 'rgba(45,79,30,0.05)' }}>
                      <p className="text-lg font-bold" style={{ color: '#2D4F1E' }}>{count}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(45,79,30,0.55)' }}>選項 {letter}</p>
                    </div>
                  );
                })}
              </div>

              {/* LINE CTA */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl font-bold text-base mb-4 transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: '#2D4F1E', color: '#ffffff', lineHeight: '1.5' }}
              >
                {result.cta}
              </a>

              <button
                onClick={handleRestart}
                className="w-full text-center py-3 rounded-2xl text-sm font-medium transition-colors hover:bg-[rgba(45,79,30,0.06)]"
                style={{ color: '#2D4F1E', border: '1.5px solid rgba(45,79,30,0.25)', background: 'transparent' }}
              >
                重新測驗
              </button>
            </div>

            <div className="text-center pb-12">
              <p className="text-xs" style={{ color: 'rgba(45,79,30,0.4)' }}>
                A 選項數量：{aCount} / 6 &nbsp;｜&nbsp; 結果僅供參考，如有疑問歡迎諮詢專業建議
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
