import { useState } from "react";
import { Link } from "wouter";
import { LINE_OFFICIAL_URL } from "@/../../shared/const";

const QUESTIONS = [
  {
    id: 1,
    category: "身體壓力",
    emoji: "🧬",
    question: "最近你的身體狀態如何？",
    options: [
      { text: "精力充沛，狀態良好", score: 0 },
      { text: "偶爾感到疲勞，尚可應付", score: 1 },
      { text: "常常感到疲憊，提不起勁", score: 2 },
      { text: "長期疲勞或身體不適", score: 3 },
    ],
  },
  {
    id: 2,
    category: "身體壓力",
    emoji: "😴",
    question: "你的睡眠品質如何？",
    options: [
      { text: "睡眠充足，容易入睡", score: 0 },
      { text: "偶爾失眠或早醒", score: 1 },
      { text: "經常睡不好，影響白天", score: 2 },
      { text: "幾乎每天都睡眠不足", score: 3 },
    ],
  },
  {
    id: 3,
    category: "情緒壓力",
    emoji: "🧠",
    question: "面對壓力時，你通常的狀態？",
    options: [
      { text: "冷靜應對，游刃有餘", score: 0 },
      { text: "偶爾焦慮，能自我調節", score: 1 },
      { text: "常常焦慮，情緒起伏大", score: 2 },
      { text: "長期焦慮，難以自控", score: 3 },
    ],
  },
  {
    id: 4,
    category: "情緒壓力",
    emoji: "💭",
    question: "最近你的心情狀態？",
    options: [
      { text: "情緒穩定，心情愉快", score: 0 },
      { text: "偶有低落，能自行恢復", score: 1 },
      { text: "情緒低落或煩躁居多", score: 2 },
      { text: "持續心情低落或憂鬱", score: 3 },
    ],
  },
  {
    id: 5,
    category: "社交壓力",
    emoji: "🤝",
    question: "你的人際關係與工作狀態？",
    options: [
      { text: "關係和諧，工作輕鬆自在", score: 0 },
      { text: "偶有摩擦，還在可控範圍", score: 1 },
      { text: "常感到社交壓力或職場緊張", score: 2 },
      { text: "人際關係讓我深感疲憊", score: 3 },
    ],
  },
  {
    id: 6,
    category: "生活負擔",
    emoji: "⚖️",
    question: "目前你的整體生活負擔感受？",
    options: [
      { text: "從容自在，生活平衡", score: 0 },
      { text: "稍有壓力，尚可應對", score: 1 },
      { text: "壓力偏重，開始影響生活品質", score: 2 },
      { text: "不堪重負，急需調整", score: 3 },
    ],
  },
];

type Screen = "start" | "test" | "result";

const RESULTS = {
  low: {
    label: "輕鬆自在型",
    sublabel: "壓力指數偏低",
    emoji: "🌿",
    scoreColor: "#4a7c59",
    badgeBg: "#e8f5ed",
    badgeText: "#4a7c59",
    tips: [
      "每天 7–8 小時優質睡眠",
      "補充植物性蛋白，維持能量穩定",
      "保持規律的放鬆與伸展習慣",
    ],
    message:
      "您目前身心狀態相對平衡，繼續保持這份從容。透過日常精準養護，讓健康底氣更穩固。",
    ctaText: "探索日常保健產品",
    ctaHref: "/shop",
    ctaExternal: false,
    ctaBg: "#4a7c59",
  },
  mid: {
    label: "壓力累積型",
    sublabel: "壓力指數中等",
    emoji: "🌱",
    scoreColor: "#c17d2e",
    badgeBg: "#fdf3e3",
    badgeText: "#c17d2e",
    tips: [
      "EAA 完美互補植物蛋白：穩定能量來源",
      "精準補足身體缺口，避免無效堆疊",
      "建立規律的休息與補給節奏",
    ],
    message:
      "您的壓力已有一定累積，身體正在發出訊號。現在是調整的好時機，精準補給能幫您找回節奏。",
    ctaText: "查看精選保健產品",
    ctaHref: "/shop",
    ctaExternal: false,
    ctaBg: "#c17d2e",
  },
  high: {
    label: "高壓警戒型",
    sublabel: "壓力指數偏高",
    emoji: "⚠️",
    scoreColor: "#b94040",
    badgeBg: "#fdeaea",
    badgeText: "#b94040",
    tips: [
      "立即停止無效堆疊，讓身體喘息",
      "預約 30 分鐘健康校準，獲得專屬清單",
      "由 20 年經驗的 VEDA 親自保駕護航",
    ],
    message:
      "您的壓力指數偏高，身體正發出明顯警訊。建議進行專業一對一健康校準，讓 VEDA 幫您找到突破口。",
    ctaText: "立即預約健康校準 1對1",
    ctaHref: LINE_OFFICIAL_URL,
    ctaExternal: true,
    ctaBg: "#b94040",
  },
};

export default function StressTest() {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = QUESTIONS.length * 3;
  const stressPercent = Math.round((totalScore / maxScore) * 100);

  const tier: "low" | "mid" | "high" =
    stressPercent <= 33 ? "low" : stressPercent <= 66 ? "mid" : "high";
  const result = RESULTS[tier];

  const handleAnswer = (score: number, idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, score];
      setAnswers(newAnswers);
      setSelected(null);
      if (currentQ + 1 < QUESTIONS.length) {
        setCurrentQ(currentQ + 1);
      } else {
        setScreen("result");
      }
    }, 420);
  };

  const restart = () => {
    setScreen("start");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  };

  const progress = ((currentQ) / QUESTIONS.length) * 100;
  const q = QUESTIONS[currentQ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(160deg, #f0f7f2 0%, #ffffff 60%, #f5f0e8 100%)" }}
    >
      <div className="w-full max-w-sm mx-auto">

        {/* ── START SCREEN ── */}
        {screen === "start" && (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-5 border-2 border-green-100">
                <span className="text-4xl">🌿</span>
              </div>
              <p className="text-xs font-semibold tracking-widest text-green-700 uppercase mb-2">
                Hao Ying Yang × VEDA CARE
              </p>
              <h1 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                身體壓力<br />自我校準測驗
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                只需 2 分鐘，透過 6 道題<br />
                找出您的壓力來源，獲得專屬健康建議。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-green-50 text-left space-y-3">
              {[
                { icon: "🧬", label: "身體壓力", desc: "疲勞 · 睡眠品質" },
                { icon: "🧠", label: "情緒壓力", desc: "焦慮 · 心情狀態" },
                { icon: "🤝", label: "社交與生活", desc: "人際 · 整體負擔" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setScreen("test")}
              className="w-full py-4 rounded-2xl text-white font-bold text-base shadow-md active:scale-95 transition-transform"
              style={{ background: "linear-gradient(135deg, #4a7c59 0%, #3a6347 100%)" }}
            >
              開始測驗 →
            </button>
            <Link href="/" className="block mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors">
              ← 返回首頁
            </Link>
          </div>
        )}

        {/* ── TEST SCREEN ── */}
        {screen === "test" && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "#e8f5ed", color: "#4a7c59" }}
              >
                {q.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {currentQ + 1} / {QUESTIONS.length}
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-7 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "#4a7c59" }}
              />
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl mb-4">{q.emoji}</div>
              <h2 className="text-lg font-bold text-gray-800 leading-snug">
                {q.question}
              </h2>
            </div>

            <div className="space-y-3">
              {q.options.map((opt, idx) => {
                const isSelected = selected === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt.score, idx)}
                    disabled={selected !== null}
                    className="w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-300 active:scale-98"
                    style={{
                      borderColor: isSelected ? "#4a7c59" : "#e5e7eb",
                      background: isSelected ? "#e8f5ed" : "#ffffff",
                      color: isSelected ? "#3a6347" : "#374151",
                      fontWeight: isSelected ? "600" : "400",
                      transform: isSelected ? "scale(0.98)" : "scale(1)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all"
                        style={{
                          borderColor: isSelected ? "#4a7c59" : "#d1d5db",
                          background: isSelected ? "#4a7c59" : "transparent",
                        }}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm leading-snug">{opt.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── RESULT SCREEN ── */}
        {screen === "result" && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
                您的壓力校準結果
              </p>

              <div className="relative w-36 h-36 mx-auto mb-4">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none"
                    stroke={result.scoreColor}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(stressPercent / 100) * 314} 314`}
                    style={{ transition: "stroke-dasharray 1s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black" style={{ color: result.scoreColor }}>
                    {stressPercent}%
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">壓力指數</span>
                </div>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-3"
                style={{ background: result.badgeBg, color: result.badgeText }}
              >
                <span>{result.emoji}</span>
                <span>{result.label}</span>
              </div>

              <p className="text-xs text-gray-500 font-medium">{result.sublabel}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {result.message}
              </p>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  專屬建議
                </p>
                {result.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span
                      className="text-xs font-bold mt-0.5 flex-shrink-0"
                      style={{ color: result.scoreColor }}
                    >
                      ✓
                    </span>
                    <p className="text-sm text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {result.ctaExternal ? (
              <a
                href={result.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-2xl text-white font-bold text-sm text-center shadow-md active:scale-95 transition-transform mb-3"
                style={{ background: result.ctaBg }}
              >
                {result.ctaText}
              </a>
            ) : (
              <Link href={result.ctaHref}>
                <span
                  className="block w-full py-4 rounded-2xl text-white font-bold text-sm text-center shadow-md active:scale-95 transition-transform mb-3 cursor-pointer"
                  style={{ background: result.ctaBg }}
                >
                  {result.ctaText}
                </span>
              </Link>
            )}

            <button
              onClick={restart}
              className="w-full py-3 rounded-2xl text-sm font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors active:scale-95"
            >
              重新測驗
            </button>
            <Link href="/" className="block mt-4 text-xs text-center text-gray-400 hover:text-gray-600 transition-colors">
              ← 返回首頁
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
