import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";

const LINE_URL = "https://lin.ee/10DnnGU";

/*
  Scoring logic:
  Weighted points per answer: A = 3, B = 1, C = 0
  Total score range: 0–18
    score >= 12  →  Level 3: Power Crisis      (全面修復型)
    score >= 4   →  Level 2: Energy Warning    (主動調整型)
    score <  4   →  Level 1: Balanced Potential (活力掌控型)

  This preserves the original A-only thresholds (4A=12pts, 2A=6pts, 1A=3pts)
  while correctly placing all-B selections (6pts) at Level 2.
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
    cta: "官方LINE@| 適配專屬鞏固方案",
  },
  warning: {
    level: "Level 2",
    label: "主動調整型",
    subtitle: "妳已感受到身體的訊號，現在正是翻轉的關鍵時刻",
    description:
      "妳的狀態有起有伏——某些時刻感覺還好，但下午的疲倦、偶爾卡頓的關節、睡了還是累的早晨⋯⋯這些都是身體在向妳發出「需要更好支持」的訊號。妳已察覺，這是最珍貴的第一步。",
    recommendation:
      "VEDA 建議妳：不要等到真的撐不住才行動。針對妳最薄弱的環節——能量、睡眠品質、還是身體流暢感——進行定點強化補充。精準補給，才是效率最高的日常保養投資。",
    cta: "官方LINE@| 適配專屬鞏固方案",
  },
  balanced: {
    level: "Level 1",
    label: "活力掌控型",
    subtitle: "妳的身心已進入高效運轉模式，現在是精準鞏固的最好時機",
    description:
      "妳清楚知道自己的節奏，身體的流暢感與能量續航力都維持在理想狀態。這種「掌控感」正是 VEDA 所追求的核心——不是拼命補，而是精準給。但即使狀態穩健，環境壓力與季節變化仍會悄悄消耗健康儲備。",
    recommendation:
      "VEDA 建議妳：以「科學鞏固」取代過度補給。用最精準的植萃配方，持續支撐妳已建立的活力根基，讓這份從容走得更遠、更穩。",
    cta: "官方LINE@| 適配專屬鞏固方案",
  },
};

function getScore(answers: string[]): number {
  return answers.reduce((sum, a) => {
    if (a === "A") return sum + 3;
    if (a === "B") return sum + 1;
    return sum;
  }, 0);
}

function getResult(answers: string[]): ResultType {
  const score = getScore(answers);
  if (score >= 12) return "crisis";
  if (score >= 4) return "warning";
  return "balanced";
}

export default function WellnessQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const aCount = answers.filter((a) => a === "A").length;
  const resultKey = getResult(answers);
  const result = RESULTS[resultKey];
  const progress = ((current + (selectedKey ? 0.5 : 0)) / QUESTIONS.length) * 100;

  function handleSelect(key: string) {
    setSelectedKey(key);
    const isLast = current + 1 >= QUESTIONS.length;
    if (!isLast) {
      setTimeout(() => {
        const newAnswers = [...answers, key];
        setAnswers(newAnswers);
        setSelectedKey(null);
        setAnimKey((k) => k + 1);
        setCurrent((c) => c + 1);
      }, 420);
    }
  }

  function handleNext() {
    if (!selectedKey) return;
    const newAnswers = [...answers, selectedKey];
    setAnswers(newAnswers);
    setSelectedKey(null);
    setDone(true);
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
            style={{ background: "linear-gradient(160deg, #f4f7f5 0%, #edf2ef 100%)" }}
          >
            <div className="w-full max-w-xl">

              {/* Clinical badge */}
              <div className="flex items-center justify-center gap-3 mb-7">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2D4F1E', animation: 'scanPulse 1.5s ease-in-out infinite' }} />
                <p className="text-xs tracking-[0.22em] uppercase font-semibold text-center"
                  style={{ color: '#2D4F1E' }}>
                  VEDA LABS &nbsp;｜&nbsp; 科研匹配分析
                </p>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2D4F1E', animation: 'scanPulse 1.5s ease-in-out infinite 0.75s' }} />
              </div>

              {/* Share link */}
              {current === 0 && (
                <div className="flex justify-center mb-5">
                  <ShareButton
                    title="【VEDA 精準方案】匹配諮詢 — VEDA CARE"
                    text="6 個問題，獲取妳的科研專屬健康路徑。"
                  />
                </div>
              )}

              {/* Progress — clinical scan style */}
              <div className="mb-2 flex items-center gap-3">
                <div className="flex-1 h-[2px] rounded-full" style={{ background: 'rgba(45,79,30,0.1)' }}>
                  <div
                    className="h-[2px] rounded-full"
                    style={{ width: `${progress}%`, background: '#2D4F1E', transition: 'width 0.7s cubic-bezier(0.34,1.02,0.64,1)' }}
                  />
                </div>
                <span className="text-[10px] font-bold tracking-widest shrink-0"
                  style={{ color: '#2D4F1E', animation: 'scanPulse 2s ease-in-out infinite' }}>
                  SCANNING
                </span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="text-xs font-medium" style={{ color: 'rgba(45,79,30,0.5)' }}>
                  分析項目 {current + 1} / {QUESTIONS.length}
                </span>
                <span className="text-xs font-medium" style={{ color: 'rgba(45,79,30,0.35)' }}>
                  {Math.round((current / QUESTIONS.length) * 100)}% 完成
                </span>
              </div>

              {/* Question card — spring animation */}
              <div
                key={animKey}
                style={{ animation: 'springIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}
              >
                {/* Category chip */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-4"
                  style={{ background: 'rgba(45,79,30,0.07)', border: '1px solid rgba(45,79,30,0.12)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#2D4F1E' }} />
                  <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: '#2D4F1E' }}>
                    {q.topic}
                  </span>
                </div>

                {/* Question */}
                <h2 className="text-lg md:text-xl font-bold mb-7"
                  style={{ color: '#1a2e12', lineHeight: '1.7' }}>
                  {q.question}
                </h2>

                {/* Options — clinical line style */}
                <div className="space-y-2.5 mb-8">
                  {q.options.map((opt) => {
                    const isSelected = selectedKey === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => handleSelect(opt.key)}
                        className="w-full text-left rounded-xl transition-all duration-250"
                        style={{
                          border: isSelected ? '1.5px solid #2D4F1E' : '1.5px solid rgba(45,79,30,0.14)',
                          background: isSelected ? 'rgba(45,79,30,0.05)' : '#ffffff',
                          borderLeft: isSelected ? '4px solid #2D4F1E' : '4px solid transparent',
                          boxShadow: isSelected ? '0 2px 16px rgba(45,79,30,0.10)' : '0 1px 3px rgba(0,0,0,0.03)',
                        }}
                      >
                        <div className="flex items-start gap-4 px-5 py-4">
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 transition-all duration-200"
                            style={{
                              background: isSelected ? '#2D4F1E' : 'rgba(45,79,30,0.07)',
                              color: isSelected ? '#ffffff' : '#2D4F1E',
                              fontFamily: 'monospace',
                            }}
                          >
                            {isSelected ? '✓' : opt.key}
                          </span>
                          <span
                            className="text-sm md:text-base"
                            style={{ color: '#4A4A4A', lineHeight: '1.75', fontWeight: isSelected ? 500 : 400 }}
                          >
                            {opt.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Confirm — only on last question */}
                {current + 1 === QUESTIONS.length ? (
                  <button
                    onClick={handleNext}
                    disabled={!selectedKey}
                    className="w-full py-4 rounded-xl font-bold transition-all duration-200"
                    style={{
                      background: selectedKey ? '#2D4F1E' : 'rgba(45,79,30,0.18)',
                      color: '#ffffff',
                      cursor: selectedKey ? 'pointer' : 'not-allowed',
                      letterSpacing: '0.04em',
                      fontSize: '14px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    🔓 解鎖我的專屬報告
                  </button>
                ) : (
                  <p className="text-center text-xs" style={{ color: 'rgba(45,79,30,0.4)', letterSpacing: '0.05em' }}>
                    點選選項後自動前進
                  </p>
                )}
              </div>

            </div>
          </section>

        ) : (
          /* ── Results ── */
          <section
            className="flex flex-col"
            style={{ background: "linear-gradient(160deg, #f4f7f5 0%, #edf2ef 100%)", animation: 'springIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both' }}
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
                <p className="text-white text-xs font-medium tracking-widest">VEDA CARE ｜ 郝營養</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto w-full px-6 py-10 md:py-14">

              {/* Clinical report header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[rgba(45,79,30,0.10)]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ background: '#2D4F1E' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(45,79,30,0.3)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(45,79,30,0.1)' }} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(45,79,30,0.5)' }}>
                  VEDA PERSONAL REPORT
                </span>
              </div>

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
                {([
                  { letter: "A", label: "嚴重耗損", desc: "長期疲勞、難以恢復" },
                  { letter: "B", label: "偶有乏力", desc: "偶爾疲憊、起伏不定" },
                  { letter: "C", label: "精力充沛", desc: "狀態穩定、活力良好" },
                ] as const).map(({ letter, label, desc }) => {
                  const count = answers.filter((a) => a === letter).length;
                  const isHighlight = count > 0 && count === Math.max(...["A","B","C"].map(l => answers.filter(a => a === l).length));
                  return (
                    <div key={letter} className="flex-1 rounded-xl py-5 px-3 text-center flex flex-col items-center gap-1.5"
                      style={{
                        background: isHighlight ? 'rgba(45,79,30,0.12)' : 'rgba(45,79,30,0.05)',
                        border: isHighlight ? '1.5px solid rgba(45,79,30,0.25)' : '1.5px solid transparent',
                      }}>
                      <p className="text-2xl font-bold leading-none" style={{ color: '#2D4F1E' }}>{count}</p>
                      <p className="text-xs" style={{ color: 'rgba(45,79,30,0.55)' }}>選項 {letter}</p>
                      <p className="text-sm font-bold whitespace-nowrap" style={{ color: '#2D4F1E' }}>{label}</p>
                      <p className="text-xs leading-snug" style={{ color: 'rgba(45,79,30,0.55)' }}>{desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* 專屬重啟預覽 — YouTube Shorts */}
              <div className="mb-8">
                <p className="text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
                  style={{ color: '#2D4F1E' }}>
                  <span>🔓</span>
                  <span>已解鎖：專屬妳的重啟預覽</span>
                </p>
                <div className="relative w-full overflow-hidden rounded-2xl"
                  style={{ paddingBottom: '56.25%', background: '#000' }}>
                  <iframe
                    src="https://www.youtube.com/embed/lizoLrUM4NA?rel=0&modestbranding=1"
                    title="VEDA CARE 重啟預覽"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <p className="text-xs text-center mt-3" style={{ color: 'rgba(45,79,30,0.5)', letterSpacing: '0.05em' }}>
                  30 秒，看見渴望的從容
                </p>
              </div>

              {/* LINE CTA */}
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 rounded-2xl font-bold mb-3 transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: '#2D4F1E', color: '#ffffff', lineHeight: '1.5', fontSize: '14px', whiteSpace: 'nowrap' }}
              >
                {result.cta}
              </a>

              {/* 回到首頁 */}
              <a
                href="/"
                className="block w-full text-center py-3 rounded-2xl font-medium mb-3 transition-colors hover:bg-[rgba(45,79,30,0.06)]"
                style={{ color: '#2D4F1E', border: '1.5px solid rgba(45,79,30,0.25)', background: 'transparent', fontSize: '14px', textDecoration: 'none' }}
              >
                探索首頁 | VEDA CARE 減法生活
              </a>

              <button
                onClick={handleRestart}
                className="w-full text-center py-3 rounded-2xl text-sm font-medium transition-colors hover:opacity-60"
                style={{ color: 'rgba(45,79,30,0.4)', border: '1px solid rgba(45,79,30,0.15)', background: 'transparent' }}
              >
                再玩一次測驗
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
