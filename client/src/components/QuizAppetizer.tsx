import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import ShareButton from "@/components/ShareButton";

const QUICK_QUESTIONS = [
  {
    id: 1,
    icon: "🧠",
    tag: "午後斷電",
    q: "午餐後不到兩小時，大腦像被強制關機，甚至想躲起來偷瞇五分鐘？",
    opts: [
      { key: "A", text: "是，每天都這樣，咖啡也救不了" },
      { key: "B", text: "偶爾，壓力特別大時才會" },
      { key: "C", text: "不會，我下午依然高效清醒" },
    ],
  },
  {
    id: 2,
    icon: "🛏️",
    tag: "起床沉重",
    q: "鬧鐘響了，身體沉得像被黏在床上——必須靠咖啡或意志力才能啟動這一天？",
    opts: [
      { key: "A", text: "沒錯，睡再久都沒有真正「重啟」過" },
      { key: "B", text: "需要暖機 15 分鐘，還算可以接受" },
      { key: "C", text: "醒來就充飽電，第一時間精神飽滿" },
    ],
  },
  {
    id: 3,
    icon: "⚡",
    tag: "能量斷崖",
    q: "下午四、五點，耐心急速下降，只想趕快回家躺平，什麼都不想做？",
    opts: [
      { key: "A", text: "幾乎每天，回家後連說話都覺得累" },
      { key: "B", text: "特別忙碌的時候才會這樣" },
      { key: "C", text: "下班後還有精力運動或做喜歡的事" },
    ],
  },
  {
    id: 4,
    icon: "🔋",
    tag: "修護力警訊",
    q: "以前累一天睡一覺就回來了。現在，要花整個週末才能補回來？",
    opts: [
      { key: "A", text: "對！感覺修護速度永遠追不上消耗" },
      { key: "B", text: "需要多休息幾天，但大致能回來" },
      { key: "C", text: "隔天又是充飽電的自己，恢復力很強" },
    ],
  },
];

const DRAIN_RESULTS = {
  high: {
    badge: "高度透支",
    badgeColor: "#C0392B",
    headline: "🚨 妳正在大量預支未來的能量",
    desc: "身體已發出清晰的訊號——這不是年紀的問題，而是補給方向走錯了。VEDA 的精準減法，幫妳找到真正的漏電點，停止用意志力硬撐。",
    barPct: 84,
  },
  medium: {
    badge: "輕度透支",
    badgeColor: "#CA6F1E",
    headline: "⚠️ 妳已感受到身體的警訊",
    desc: "狀態時好時壞，身體在提醒妳：再不調整，漏電會加速。是時候從日常精準補充開始，找到最薄弱的環節。",
    barPct: 52,
  },
  low: {
    badge: "能量穩健",
    badgeColor: "#2D4F1E",
    headline: "✅ 妳的自我維護意識很強",
    desc: "繼續精準鞏固，才是最高效的日常保養策略。VEDA 幫妳把好習慣做得更精準、更持久，讓從容成為日常。",
    barPct: 16,
  },
};

type Phase = "idle" | "quiz" | "result" | "unlocking" | "unlocked";

export default function QuizAppetizer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [advancing, setAdvancing] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (phase === "unlocking") {
      const t = setTimeout(() => setPhase("unlocked"), 1500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  const aCount = answers.filter((a) => a === "A").length;
  const drainLevel = aCount >= 3 ? "high" : aCount >= 1 ? "medium" : "low";
  const result = DRAIN_RESULTS[drainLevel];
  const progress = ((current + (selectedKey ? 0.5 : 0)) / QUICK_QUESTIONS.length) * 100;

  function handleOptionClick(key: string) {
    if (advancing || selectedKey) return;
    setSelectedKey(key);
    setAdvancing(true);
    setTimeout(() => {
      const next = [...answers, key];
      setAnswers(next);
      if (current + 1 >= QUICK_QUESTIONS.length) {
        setPhase("result");
      } else {
        setAnimKey((k) => k + 1);
        setCurrent((c) => c + 1);
      }
      setSelectedKey(null);
      setAdvancing(false);
    }, 680);
  }

  function restart() {
    setPhase("idle");
    setCurrent(0);
    setAnswers([]);
    setSelectedKey(null);
    setAdvancing(false);
    setAnimKey(0);
    setPlaying(false);
    if (videoRef.current) videoRef.current.pause();
  }

  const q = QUICK_QUESTIONS[current];

  if (phase === "idle") {
    return (
      <div
        className="rounded-3xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
        style={{
          background: "linear-gradient(135deg, #243d18 0%, #3a6226 100%)",
          boxShadow: "0 0 0 1px rgba(181,154,109,0.35), 0 24px 64px rgba(0,0,0,0.35)",
        }}
        onClick={() => setPhase("quiz")}
      >
        <div className="px-8 py-10 md:px-12 md:py-14 text-center">
          <div className="flex items-center justify-center mb-7">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap" }}
            >
              Route A · 覺察檢測
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#ffffff", lineHeight: "1.5" }}>
            【身體主導權】<br className="md:hidden" />覺察檢測
          </h3>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
            妳正在「預支明天」嗎？
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6 w-full">
            {QUICK_QUESTIONS.map((q) => (
              <span
                key={q.id}
                className="quiz-tag-breathe text-xs py-2 rounded-full flex items-center justify-center gap-1.5 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.7)" }}
              >
                {q.icon} {q.tag}
              </span>
            ))}
          </div>

          {/* Unlock hint */}
          <div
            className="flex items-center justify-center gap-2 mb-6 px-3.5 py-2.5 rounded-xl w-full"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(181,154,109,0.55)" }}
          >
            <span style={{ fontSize: "13px" }}>🔒</span>
            <span style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.6", fontSize: '13px', textAlign: 'center' }}>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>完成覺察，解鎖</span>
              <span style={{ display: 'block', whiteSpace: 'nowrap', color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>「精準方案匹配」</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div
              className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-2xl transition-all duration-300 group-hover:gap-3"
              style={{ background: "#ffffff", color: "#2D4F1E" }}
            >
              開始覺察 <span>→</span>
            </div>
            <ShareButton
              variant="dark"
              title="【身體主導權】覺察檢測 — VEDA CARE"
              text="4 個問題，60 秒，看看妳是否正在預支明天的能量。"
              url={typeof window !== "undefined" ? window.location.origin + "/awareness-check" : "/awareness-check"}
            />
          </div>
        </div>
      </div>
    );
  }

  if (phase === "result" || phase === "unlocking" || phase === "unlocked") {
    return (
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1.5px solid rgba(45,79,30,0.12)",
          boxShadow: "0 20px 56px rgba(45,79,30,0.10)",
          animation: "springIn 0.55s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div className="px-8 py-10 md:px-12 md:py-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{
                background: `${result.badgeColor}18`,
                color: result.badgeColor,
              }}
            >
              {result.badge}
            </span>
            <span className="text-xs" style={{ color: "rgba(45,79,30,0.35)" }}>
              覺察結果
            </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#2D4F1E", lineHeight: "1.55" }}>
            {result.headline}
          </h3>
          <p className="text-sm mb-7" style={{ color: "#4A4A4A", lineHeight: "1.95" }}>
            {result.desc}
          </p>

          {/* Energy drain meter */}
          <div className="mb-8 p-5 rounded-2xl" style={{ background: "rgba(45,79,30,0.04)" }}>
            <div className="flex justify-between mb-3">
              <span className="text-xs font-semibold" style={{ color: "#2D4F1E" }}>
                能量透支指數
              </span>
              <span className="text-xs font-bold" style={{ color: result.badgeColor }}>
                {result.barPct}%
              </span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(45,79,30,0.08)" }}>
              <div
                className="h-3 rounded-full"
                style={{
                  width: `${result.barPct}%`,
                  background: result.badgeColor,
                  transition: "width 1.2s cubic-bezier(0.34,1.02,0.64,1)",
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px]" style={{ color: "rgba(45,79,30,0.35)" }}>
                穩健
              </span>
              <span className="text-[10px]" style={{ color: "rgba(45,79,30,0.35)" }}>
                高度透支
              </span>
            </div>
          </div>

          {phase === "result" && (
            <button
              onClick={() => setPhase("unlocking")}
              className="w-full py-4 rounded-2xl font-bold mb-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "#2D4F1E", color: "#ffffff", fontSize: '14px' }}
            >
              🎁 解鎖：查看妳的<br />第一步引導方案
            </button>
          )}

          {/* ── Unlocking animation ── */}
          {phase === "unlocking" && (
            <div
              className="flex flex-col items-center justify-center py-10"
              style={{ animation: "unlockFadeIn 0.35s ease both" }}
            >
              <span
                className="text-6xl mb-4"
                style={{ animation: "lockPop 1.5s cubic-bezier(0.34,1.56,0.64,1) both", display: "block" }}
              >
                🔓
              </span>
              <p className="text-xs font-semibold tracking-widest"
                style={{ color: "rgba(45,79,30,0.5)", letterSpacing: "0.2em" }}>
                正在解鎖妳的專屬方案…
              </p>
            </div>
          )}

          {/* ── Unlocked: cinematic video reward ── */}
          {phase === "unlocked" && (
            <div style={{ animation: "unlockFadeIn 0.55s cubic-bezier(0.34,1.02,0.64,1) both" }}>

              {/* Caption above */}
              <p
                className="text-sm font-bold text-center mb-3"
                style={{ color: "#2D4F1E", letterSpacing: "0.04em" }}
              >
                🔓 已解鎖：專屬妳的重啟預覽
              </p>

              {/* Cinematic 16:9 video container */}
              <div
                className="rounded-2xl overflow-hidden mb-2"
                style={{
                  aspectRatio: "16/9",
                  background: "linear-gradient(135deg, #1a2e12 0%, #0f1d0a 100%)",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  poster="/brand-hero.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: playing ? 0.85 : 0.55 }}
                >
                  <source src="/veda_brand_video.mp4" type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: playing
                      ? "linear-gradient(to top, rgba(26,46,18,0.55) 0%, transparent 50%)"
                      : "linear-gradient(135deg, rgba(26,46,18,0.62) 0%, rgba(45,79,30,0.38) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Pulsing play button */}
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        animation: "playPulse 2s ease-in-out infinite",
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Pause icon when playing */}
                {playing && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center gap-1"
                      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                    >
                      <div className="w-1.5 h-5 rounded-full bg-white" />
                      <div className="w-1.5 h-5 rounded-full bg-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Caption below — Montserrat italic */}
              <p
                className="text-center mb-5"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "rgba(45,79,30,0.55)",
                  lineHeight: "1.6",
                }}
              >
                30 秒，看見渴望的從容
              </p>

              {/* Glowing CTA */}
              <Link
                href="/quiz"
                className="block w-full text-center py-4 rounded-2xl font-bold text-sm mb-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "#2D4F1E",
                  color: "#ffffff",
                  animation: "ctaGlow 2.4s ease-in-out infinite",
                  letterSpacing: "0.03em",
                }}
              >
                深度覺察身體狀態 →
              </Link>

              {/* 回到首頁 */}
              <Link
                href="/"
                className="block w-full text-center py-3 rounded-2xl font-medium mb-1 transition-colors"
                style={{ color: '#2D4F1E', border: '1.5px solid rgba(45,79,30,0.25)', background: 'transparent', fontSize: '14px', textDecoration: 'none' }}
              >
                探索首頁 | VEDA CARE 減法生活
              </Link>
            </div>
          )}

          <button
            onClick={restart}
            className="w-full text-center py-2 text-xs font-medium transition-opacity hover:opacity-60"
            style={{ color: "rgba(45,79,30,0.4)" }}
          >
            再玩一次測驗
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: "#ffffff",
        border: "1.5px solid rgba(45,79,30,0.12)",
        boxShadow: "0 20px 56px rgba(45,79,30,0.10)",
      }}
    >
      {/* Progress bar */}
      <div className="h-[3px]" style={{ background: "rgba(45,79,30,0.08)" }}>
        <div
          className="h-[3px]"
          style={{
            width: `${progress}%`,
            background: "#2D4F1E",
            transition: "width 0.7s cubic-bezier(0.34,1.02,0.64,1)",
          }}
        />
      </div>

      <div className="px-7 py-8 md:px-10 md:py-10">
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "rgba(45,79,30,0.5)" }}
          >
            快速覺察
          </span>
          <span className="text-xs" style={{ color: "rgba(45,79,30,0.4)" }}>
            {current + 1} / {QUICK_QUESTIONS.length}
          </span>
        </div>

        <div
          key={animKey}
          style={{ animation: "springIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <div className="flex items-start gap-4 mb-7">
            <span className="text-3xl shrink-0 mt-0.5">{q.icon}</span>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "rgba(45,79,30,0.5)" }}
              >
                {q.tag}
              </p>
              <p
                className="text-base font-bold"
                style={{ color: "#2D4F1E", lineHeight: "1.7" }}
              >
                {q.q}
              </p>
            </div>
          </div>

          <div className="space-y-2.5">
            {q.opts.map((opt) => {
              const isSelected = selectedKey === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => handleOptionClick(opt.key)}
                  disabled={!!selectedKey}
                  className="w-full text-left rounded-2xl transition-all duration-300"
                  style={{
                    padding: "13px 16px",
                    border: isSelected
                      ? "2px solid #2D4F1E"
                      : "2px solid rgba(45,79,30,0.13)",
                    background: isSelected ? "#2D4F1E" : "#ffffff",
                    boxShadow: isSelected
                      ? "0 0 0 4px rgba(45,79,30,0.10)"
                      : "none",
                    cursor: selectedKey ? "default" : "pointer",
                    transform: isSelected ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-200"
                      style={{
                        background: isSelected
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(45,79,30,0.07)",
                        color: isSelected ? "#fff" : "#2D4F1E",
                      }}
                    >
                      {isSelected ? "✓" : opt.key}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: isSelected ? "#ffffff" : "#4A4A4A",
                        lineHeight: "1.65",
                      }}
                    >
                      {opt.text}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <p
            className="text-center text-xs mt-5"
            style={{ color: "rgba(45,79,30,0.28)" }}
          >
            點選選項後自動前進
          </p>
        </div>
      </div>
    </div>
  );
}
