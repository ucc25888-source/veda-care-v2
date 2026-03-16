import { useState } from "react";

interface ShareButtonProps {
  title: string;
  text: string;
  url?: string;
  label?: string;
}

export default function ShareButton({ title, text, url, label = "分享測驗連結" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url ?? window.location.href;

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl });
      } catch {
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]"
      style={{
        background: copied ? "rgba(45,79,30,0.12)" : "rgba(45,79,30,0.07)",
        color: copied ? "#2D4F1E" : "rgba(45,79,30,0.6)",
        border: "1px solid rgba(45,79,30,0.16)",
      }}
    >
      {copied ? (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          已複製連結
        </>
      ) : (
        <>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}
