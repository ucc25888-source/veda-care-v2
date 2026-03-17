import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "嗨～我是郝營養！很高興在這裡遇見你 ✨\n\n抱歉，這裡的訊息量真的比較大。為了能更即時、更精準地回覆您的需求，請直接點擊下方連結，加入我的 LINE@ 專屬空間。\n\n我在那裡準備了更詳細的「游刃有餘」健康指引與驚喜的初見禮等著您喔！\n\n🔗 立即加入 LINE@ 領取建議：\nhttps://lin.ee/10DnnGU\n\n我們 LINE 上見，讓我陪您一起拿回生活的主導權 💚",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.chat.message.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatMutation.mutateAsync({
        message: input,
        context: "VEDA CARE 是一家高端健康產品公司，提供放鬆支援、肌肉骨骼健康和日常保健補充品。客服名字是郝營養。",
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: "抱歉，我遇到了一些問題。請稍後再試。",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen && (
        <Card className="w-full max-w-sm md:w-96 h-[70vh] md:h-96 flex flex-col shadow-2xl border-primary/20 mb-4 rounded-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-3 md:p-4 rounded-t-lg flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <img
                src="/hao-avatar.png"
                alt="郝營養"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">VEDA 客服</h3>
                <p className="text-xs text-white/80">郝營養</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-background min-h-0">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-xs ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png"
                      alt="郝營養"
                      className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                    />
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-xs md:text-sm whitespace-pre-wrap break-words ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.content.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                      /^https?:\/\//.test(part) ? (
                        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-primary font-medium break-all">
                          {part}
                        </a>
                      ) : part
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663324990872/DdR9WuCya5pW9tctiweeFH/HealthPromotionManager_4e5e8b0f.png"
                    alt="郝營養"
                    className="w-6 h-6 rounded-full flex-shrink-0"
                  />
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 md:p-4 flex gap-2 flex-shrink-0">
            <Input
              placeholder="輸入訊息..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full shadow-xl overflow-hidden border-2 border-white/30 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
        style={{ background: "#2D4F1E" }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <img
            src="/hao-avatar.png"
            alt="郝營養客服"
            className="w-full h-full object-cover scale-[1.15]"
          />
        )}
      </button>
    </div>
  );
}
