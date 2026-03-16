import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LINE_URL = "https://lin.ee/10DnnGU";

/*
  Scoring logic:
  B (in-control / thriving) = 3 pts
  A (reactive / functional but aware) = 2 pts
  C (depleted / avoidant / gave up) = 1 pt
  Range: 6 – 18
    14–18 → 活力掌控型
     9–13 → 主動調整型
     6– 8 → 全面修復型
*/

const QUESTIONS = [
  {
    id: 1,
    topic: "關於早晨的儀式感",
    question: "當鬧鐘響起，妳看著鏡子裡的自己……",
    options: [
      { key: "A", label: "感覺身體重重的，想到今天排山倒海的瑣事就想嘆氣。", score: 2 },
      { key: "B", label: "雖然忙碌，但心裡清楚知道今天每一步的節奏都在掌控中。", score: 3 },
      { key: "C", label: "已經習慣靠咖啡跟維他命「撐」過這一天，沒想過什麼主導權。", score: 1 },
    ],
  },
  {
    id: 2,
    topic: "關於保養的態度",
    question: "面對滿桌的保養品與保健品，妳的真實想法是？",
    options: [
      { key: "A", label: "覺得保養很煩，但因為恐懼衰老，只好盲目地跟風堆疊。", score: 2 },
      { key: "B", label: "已經掌握「減法」精髓，只給身體最精準且必要的養分。", score: 3 },
      { key: "C", label: "看了很多成分研究與廣告，卻越看越迷惘，最後乾脆放棄。", score: 1 },
    ],
  },
  {
    id: 3,
    topic: "關於能量的續航力",
    question: "到了下午三點，妳的狀態通常是？",
    options: [
      { key: "A", label: "腦袋開機緩慢，必須靠甜食或手搖飲補血，但效果短暫。", score: 2 },
      { key: "B", label: "體力充沛，專注力依然能維持在早晨的高峰水準。", score: 3 },
      { key: "C", label: "感覺身體被掏空，連說話都覺得費力，只想原地斷電。", score: 1 },
    ],
  },
  {
    id: 4,
    topic: "關於身體的流暢感",
    question: "上下樓梯或蹲下站起時，妳的感受是？",
    options: [
      { key: "A", label: "感覺卡卡的，偶爾還會發出「抗議聲」，提醒妳歲月的存在。", score: 2 },
      { key: "B", label: "像裝了絲滑的齒輪，動作隨心所欲，沒有任何負擔。", score: 3 },
      { key: "C", label: "覺得關節沈重，開始避開需要大動作的活動，變得很被動。", score: 1 },
    ],
  },
  {
    id: 5,
    topic: "關於夜晚的修復感",
    question: "妳的睡眠通常帶給妳什麼感覺？",
    options: [
      { key: "A", label: "睡很久卻還是很累，像是大腦整晚都在加班，沒真正關機。", score: 2 },
      { key: "B", label: "一覺到天亮，起床時感受到前所未有的輕盈與清醒。", score: 3 },
      { key: "C", label: "入睡困難，或是半夜容易驚醒，身體修復力趕不上消耗。", score: 1 },
    ],
  },
  {
    id: 6,
    topic: "關於對未來的想像",
    question: "如果可以擁有一種超能力，妳最渴望？",
    options: [
      { key: "A", label: "永遠不乾枯的體力。", score: 2 },
      { key: "B", label: "極致的靈活度。", score: 3 },
      { key: "C", label: "全方位拿回生活的主導權。", score: 1 },
    ],
  },
];

type ResultType = "vibrant" | "adjusting" | "restore";

const RESULTS: Record<ResultType, {
  label: string;
  subtitle: string;
  description: string;
  recommendation: string;
  cta: string;
}> = {
  vibrant: {
    label: "活力掌控型",
    subtitle: "妳的身心已進入高效運轉模式，現在是精準鞏固的最好時機",
    description:
      "妳清楚知道自己的節奏，身體的流暢感與能量續航力都維持在理想狀態。這種「掌控感」正是 VEDA 所追求的核心——不是拼命補，而是精準給。但即使狀態穩健，環境壓力與季節變化仍會悄悄消耗健康儲備。",
    recommendation:
      "VEDA 建議妳：以「科學鞏固」取代過度補給。用最精準的植萃配方，持續支撐妳已建立的活力根基，讓這份從容走得更遠、更穩。",
    cta: "了解適合我的精準鞏固方案",
  },
  adjusting: {
    label: "主動調整型",
    subtitle: "妳已感受到身體的訊號，現在正是翻轉的關鍵時刻",
    description:
      "妳的狀態有起有伏——某些時刻感覺還好，但下午的疲倦、偶爾卡頓的關節、睡了還是累的早晨……這些都是身體在向妳發出「需要更好支持」的訊號。妳已察覺，這是最珍貴的第一步。",
    recommendation:
      "VEDA 建議妳：不要等到真的撐不住才行動。針對妳最薄弱的環節——能量、睡眠、還是身體流暢感——進行定點修復。精準介入，才是效率最高的健康投資。",
    cta: "找到我最需要的調整方案",
  },
  restore: {
    label: "全面修復型",
    subtitle: "妳的身體一直在撐著妳，現在換妳好好回應它",
    description:
      "長期靠咖啡撐著、睡了還是累、關節開始抗議、情緒容易斷線……這不是妳的錯，也不是「年紀大了」的必然。這是現代生活的高消耗對身體造成的累積性損耗。妳值得比「撐過去」更好的狀態。",
    recommendation:
      "VEDA 建議妳：停止用意志力對抗身體的求救訊號。從最根本的能量修復、睡眠深化與關節支撐開始，讓身體重新找回屬於妳的主導權。專業的事交給 VEDA，妳只需要負責輕鬆地變好。",
    cta: "立即與郝營養諮詢我的修復計畫",
  },
};

function getResult(score: number): ResultType {
  if (score >= 14) return "vibrant";
  if (score >= 9) return "adjusting";
  return "restore";
}

export default function WellnessQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const resultKey = getResult(totalScore);
  const result = RESULTS[resultKey];
  const progress = (current / QUESTIONS.length) * 100;

  function handleSelect(key: string, score: number) {
    setSelectedKey(key);
    setSelectedScore(score);
  }

  function handleNext() {
    if (selectedScore === null) return;
    const newAnswers = [...answers, selectedScore];
    setAnswers(newAnswers);
    setSelectedKey(null);
    setSelectedScore(null);
    if (current + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers([]);
    setSelectedKey(null);
    setSelectedScore(null);
    setDone(false);
  }

  const q = QUESTIONS[current];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {!done ? (
          /* ── Quiz Questions ── */
          <section
            className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-16"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)" }}
          >
            <div className="w-full max-w-xl">
              {/* Badge */}
              <p className="text-xs tracking-[0.3em] uppercase text-center mb-6 font-medium"
                style={{ color: '#2D4F1E' }}>
                VEDA CARE &nbsp;｜&nbsp; 健康活力測驗
              </p>

              {/* Progress bar */}
              <div className="w-full h-[3px] rounded-full mb-8" style={{ background: 'rgba(45,79,30,0.12)' }}>
                <div
                  className="h-[3px] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: '#2D4F1E' }}
                />
              </div>

              {/* Topic + counter */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: '#2D4F1E', opacity: 0.7 }}>
                  {q.topic}
                </span>
                <span className="text-xs font-medium" style={{ color: 'rgba(45,79,30,0.5)' }}>
                  {current + 1} / {QUESTIONS.length}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl md:text-2xl font-bold mb-8"
                style={{ color: '#2D4F1E', lineHeight: '1.65' }}>
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-10">
                {q.options.map((opt) => {
                  const isSelected = selectedKey === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelect(opt.key, opt.score)}
                      className="w-full text-left rounded-2xl border-2 transition-all duration-200"
                      style={{
                        borderColor: isSelected ? '#2D4F1E' : 'rgba(45,79,30,0.18)',
                        background: isSelected ? '#2D4F1E' : '#ffffff',
                        padding: '0',
                      }}
                    >
                      <div className="flex items-start gap-4 px-5 py-4">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                          style={{
                            background: isSelected ? 'rgba(255,255,255,0.2)' : 'rgba(45,79,30,0.08)',
                            color: isSelected ? '#ffffff' : '#2D4F1E',
                          }}
                        >
                          {opt.key}
                        </span>
                        <span
                          className="text-sm md:text-base leading-relaxed"
                          style={{ color: isSelected ? '#ffffff' : '#4A4A4A', lineHeight: '1.7' }}
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
                disabled={selectedKey === null}
                className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-200"
                style={{
                  background: selectedKey !== null ? '#2D4F1E' : 'rgba(45,79,30,0.22)',
                  color: '#ffffff',
                  cursor: selectedKey !== null ? 'pointer' : 'not-allowed',
                  letterSpacing: '0.02em',
                }}
              >
                {current + 1 === QUESTIONS.length ? "查看我的專屬結果 →" : "下一題 →"}
              </button>
            </div>
          </section>

        ) : (
          /* ── Results ── */
          <section
            className="flex flex-col"
            style={{ background: "linear-gradient(160deg, #f9f8f5 0%, #eef3ec 100%)" }}
          >
            {/* Hero photo — full width, landscape */}
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
                <p className="text-white text-xs font-medium tracking-widest">
                  郝營養 ｜ VEDA CARE
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto w-full px-6 py-10 md:py-14">

              {/* Result copy */}
              <div className="order-last md:order-last">
                <p className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: 'rgba(45,79,30,0.6)' }}>
                  妳的健康類型
                </p>

                <div
                  className="inline-block px-5 py-1.5 rounded-full text-sm font-bold mb-5"
                  style={{ background: '#2D4F1E', color: '#ffffff' }}
                >
                  {result.label}
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

                {/* LINE CTA */}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 rounded-2xl font-bold text-base mb-4 transition-opacity hover:opacity-90"
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
            </div>

            <div className="text-center pb-12">
              <p className="text-xs" style={{ color: 'rgba(45,79,30,0.4)' }}>
                測驗分數：{totalScore} / 18 &nbsp;｜&nbsp; 結果僅供參考，如有疑問歡迎諮詢專業建議
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
