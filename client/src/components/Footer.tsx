import { Link } from "wouter";
import { POLICIES, SOCIAL_LINKS } from "@/../../shared/const";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer style={{ background: '#f5f4f0', borderTop: '1px solid rgba(45,79,30,0.1)' }}>

      {/* ── Top editorial strip ── */}
      <div style={{ borderBottom: '1px solid rgba(45,79,30,0.1)', padding: '56px 0 48px' }}>
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            {/* Brand identity */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png"
                alt="VEDA CARE"
                className="h-12 w-auto mb-5"
              />
              <p
                className="text-xs uppercase tracking-[0.35em] font-semibold mb-3"
                style={{ color: '#2D4F1E' }}
              >
                VEDA CARE
              </p>
              <p
                className="text-sm italic"
                style={{ color: '#888', lineHeight: '1.8', letterSpacing: '0.04em', maxWidth: 260 }}
              >
                在繁忙的時光裡，預留一份愛給身體。
              </p>
            </div>

            {/* Newsletter — minimal */}
            <div style={{ maxWidth: 280, width: '100%' }}>
              <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: '#2D4F1E' }}>
                掌握最新
              </p>
              <form onSubmit={handleSubscribe}>
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(45,79,30,0.35)', paddingBottom: 8, gap: 8, alignItems: 'center' }}>
                  <input
                    type="email"
                    placeholder="您的電子郵件"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontSize: 13,
                      color: '#3a3a3a',
                      letterSpacing: '0.05em',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      color: '#2D4F1E',
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {subscribed ? "✓ 感謝" : "訂閱 →"}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* ── Middle link columns ── */}
      <div style={{ padding: '44px 0 40px', borderBottom: '1px solid rgba(45,79,30,0.08)' }}>
        <div className="container max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* Col 1 — Policies */}
            <div>
              <p className="text-xs uppercase tracking-[0.28em] font-semibold mb-5" style={{ color: '#2D4F1E' }}>
                安心保障
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {(Object.keys(POLICIES) as Array<keyof typeof POLICIES>).map((key) => (
                  <li key={key}>
                    <Link
                      href={`/policies/${key}`}
                      style={{ fontSize: 13, color: '#777', letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.2s' }}
                      className="hover:text-[#2D4F1E]"
                    >
                      {POLICIES[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Social */}
            <div>
              <p className="text-xs uppercase tracking-[0.28em] font-semibold mb-5" style={{ color: '#2D4F1E' }}>
                與我們同行
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { label: 'LINE@', href: SOCIAL_LINKS.lineOfficial },
                  { label: 'Facebook', href: SOCIAL_LINKS.facebook },
                  { label: 'Instagram', href: SOCIAL_LINKS.instagram },
                  { label: 'Mail', href: 'mailto:ucc25888@gmail.com' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      style={{ fontSize: 13, color: '#777', letterSpacing: '0.06em', textDecoration: 'none', transition: 'color 0.2s' }}
                      className="hover:text-[#2D4F1E]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Brand values */}
            <div className="col-span-2 md:col-span-2">
              <p className="text-xs uppercase tracking-[0.28em] font-semibold mb-5" style={{ color: '#2D4F1E' }}>
                品牌理念
              </p>
              <p style={{ fontSize: 13, color: '#888', lineHeight: '2.0', letterSpacing: '0.06em', maxWidth: 320 }}>
                VEDA CARE 以「減法」為核心——<br />
                精準補充、去除負擔，<br />
                讓身體回到最自在的狀態。
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ padding: '44px 0' }}>
        <div className="container" style={{ maxWidth: 520 }}>
          <p
            className="text-xs uppercase tracking-[0.28em] font-semibold text-center mb-8"
            style={{ color: '#2D4F1E' }}
          >
            常見問題
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                q: '如何加入 LINE@ 客服？',
                a: '點擊網站上的「加入 LINE@ 訂購」按鈕，或在 LINE 中搜尋「@vedacare」。加入後即可領取新好友限定禮物《生活微調術》，並獲得即時諮詢服務。',
              },
              {
                q: '貨到付款的流程是什麼？',
                a: '加入官方 LINE@ → 告知商品與數量 → 確認訂單 → 宅配送達 → 現場付款給宅配人員。滿 NT$3,000 免運費，未滿運費 NT$100。',
              },
              {
                q: '新好友禮物《生活微調術》是什麼？',
                a: '加入 LINE@ 後自動發送的獨家禮物，內含實用的健康生活建議與產品使用指南，無需額外申請。',
              },
              {
                q: '產品有保存期限嗎？',
                a: '所有產品均清楚標示有效期限，請依包裝說明妥善保存。如有疑問歡迎透過 LINE@ 諮詢。',
              },
            ].map(({ q, a }, i, arr) => (
              <details
                key={q}
                className="group cursor-pointer"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(45,79,30,0.1)' : 'none', paddingBottom: 14 }}
              >
                <summary
                  style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', cursor: 'pointer' }}
                >
                  <span style={{ fontSize: 14, fontWeight: 400, color: '#4A4A4A', letterSpacing: '0.08em' }}>{q}</span>
                  <svg
                    className="group-open:rotate-180 transition-transform duration-200"
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="rgba(45,79,30,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginLeft: 12 }}
                  >
                    <polyline points="2,4 7,10 12,4" />
                  </svg>
                </summary>
                <p style={{ fontSize: 13, fontWeight: 300, color: '#999', lineHeight: '1.9', letterSpacing: '0.06em', paddingBottom: 8 }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div style={{ borderTop: '1px solid rgba(45,79,30,0.1)', padding: '32px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <p style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.18em', marginBottom: 10, textTransform: 'uppercase' }}>
            © 2026 VEDA CARE Holistic Wellness
          </p>
          <p style={{ fontSize: 11, color: '#bbb', lineHeight: '1.7', letterSpacing: '0.04em' }}>
            免責聲明：本網頁所稱「專家」及專業形象，係指擁有 20 年身體維護經驗之健康促進管理師；產品研發基於專利技術與學術合作，非指醫療法規範之醫事人員。
          </p>
        </div>
      </div>

    </footer>
  );
}
