import { Link } from "wouter";
import { POLICIES, LINE_OFFICIAL_URL, SOCIAL_LINKS } from "@/../../shared/const";
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
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png" alt="VEDA CARE" className="h-16 w-auto mb-4" />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                VEDA CARE
              </h3>
              <p className="text-sm text-foreground/60">在繁忙的時光裡，預留一份愛給身體。</p>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-medium text-foreground mb-4">安心保障</h4>
            <ul className="space-y-2">
              {(Object.keys(POLICIES) as Array<keyof typeof POLICIES>).map((key) => (
                <li key={key}>
                  <Link href={`/policies/${key}`} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {POLICIES[key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">與健康同行</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={SOCIAL_LINKS.lineOfficial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  官方 LINE@
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:ucc25888@gmail.com"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  Mail 聯繫
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium text-foreground mb-4">掌握最新</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="您的電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                {subscribed ? "感謝你！" : "開啟旅程"}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-8 md:py-12" style={{ borderTop: '1px solid #EEE' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h3 className="font-display font-bold text-center mb-6" style={{ color: '#4A5D23', letterSpacing: '0.2em', fontSize: '1rem' }}>常見問題</h3>
            <div className="space-y-3">
              {/* FAQ Item 1 */}
              <details className="group cursor-pointer" style={{ borderBottom: '1px solid #EEE', paddingBottom: '12px' }}>
                <summary className="flex items-center justify-between transition-colors py-2" style={{ listStyle: 'none' }}>
                  <span style={{ fontSize: '15px', fontWeight: 300, color: '#4A4A4A', letterSpacing: '0.12em' }}>如何加入 LINE@ 客服？</span>
                  <svg className="group-open:rotate-180 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '12px' }}>
                    <polyline points="2,4 7,10 12,4"/>
                  </svg>
                </summary>
                <div className="pt-3 pl-2" style={{ fontSize: '14px', fontWeight: 300, color: '#888', lineHeight: '1.9', letterSpacing: '0.1em' }}>
                  <p>點擊網站上的「加入 LINE@ 訂購」按鈕，或在 LINE 中搜尋「@vedacare」即可加入。加入後即可領取新好友禮物《生活微調術》，並獲得即時諮詢服務。</p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group cursor-pointer" style={{ borderBottom: '1px solid #EEE', paddingBottom: '12px' }}>
                <summary className="flex items-center justify-between transition-colors py-2" style={{ listStyle: 'none' }}>
                  <span style={{ fontSize: '15px', fontWeight: 300, color: '#4A4A4A', letterSpacing: '0.12em' }}>貨到付款的流程是什麼？</span>
                  <svg className="group-open:rotate-180 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '12px' }}>
                    <polyline points="2,4 7,10 12,4"/>
                  </svg>
                </summary>
                <div className="pt-3 pl-2" style={{ fontSize: '14px', fontWeight: 300, color: '#888', lineHeight: '1.9', letterSpacing: '0.1em' }}>
                  <p>加入官方 LINE@ → 告知商品與數量 → 確認訂單 → 宅配送達 → 現場付款給宅配人員。滿 NT$3,000 免運費，未滿運費 NT$100。</p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group cursor-pointer" style={{ borderBottom: '1px solid #EEE', paddingBottom: '12px' }}>
                <summary className="flex items-center justify-between transition-colors py-2" style={{ listStyle: 'none' }}>
                  <span style={{ fontSize: '15px', fontWeight: 300, color: '#4A4A4A', letterSpacing: '0.12em' }}>新好友禮物《生活微調術》是什麼？</span>
                  <svg className="group-open:rotate-180 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '12px' }}>
                    <polyline points="2,4 7,10 12,4"/>
                  </svg>
                </summary>
                <div className="pt-3 pl-2" style={{ fontSize: '14px', fontWeight: 300, color: '#888', lineHeight: '1.9', letterSpacing: '0.1em' }}>
                  <p>加入 LINE@ 後自動發送的獨家禮物，內含實用的健康生活建議與產品使用指南，無需額外申請。</p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group cursor-pointer" style={{ paddingBottom: '12px' }}>
                <summary className="flex items-center justify-between transition-colors py-2" style={{ listStyle: 'none' }}>
                  <span style={{ fontSize: '15px', fontWeight: 300, color: '#4A4A4A', letterSpacing: '0.12em' }}>產品有保存期限嗎？</span>
                  <svg className="group-open:rotate-180 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginLeft: '12px' }}>
                    <polyline points="2,4 7,10 12,4"/>
                  </svg>
                </summary>
                <div className="pt-3 pl-2" style={{ fontSize: '14px', fontWeight: 300, color: '#888', lineHeight: '1.9', letterSpacing: '0.1em' }}>
                  <p>所有產品均清楚標示有效期限，請依包裝說明妥善保存。如有疑問歡迎透過 LINE@ 諮詢。</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border text-center space-y-3">

          {/* R&D Strength */}
          <p style={{ fontSize: '12px', color: '#4A4A4A', lineHeight: '1.8' }}>
            VEDA CARE 連結自有研發團隊與大學建教合作，以專利技術萃取植物高機能，為您的健康嚴謹把關。
          </p>

          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            &copy; 2026 VEDA CARE Holistic Wellness. 版權所有。
          </p>

          {/* Legal Disclaimer */}
          <p style={{ fontSize: '10px', color: '#CCCCCC', lineHeight: '1.8' }}>
            免責聲明：本網頁所稱「專家」及專業形象，係指擁有 20 年身體維護經驗之健康促進管理師；產品研發基於專利技術與學術合作，非指醫療法規範之醫事人員。
          </p>

        </div>
      </div>
    </footer>
  );
}
