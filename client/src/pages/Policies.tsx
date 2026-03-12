import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POLICIES } from "@/../../shared/const";

export default function Policies() {
  const [match, params] = useRoute("/policies/:id");
  const policyId = params?.id as keyof typeof POLICIES;
  const policy = policyId && POLICIES[policyId];

  if (!match || !policy) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
            政策中心
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {(Object.keys(POLICIES) as Array<keyof typeof POLICIES>).map(
              (key) => (
                <Link key={key} href={`/policies/${key}`} className="card-wellness p-6 hover:shadow-lg transition-shadow block">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {POLICIES[key].title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    了解我們的{key === 'shipping' ? '運送' : key === 'privacy' ? '隱私' : '使用'}政策
                  </p>
                </Link>
              )
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
          <div className="container">
            <Link href="/policies" className="text-sm text-foreground/60 hover:text-foreground mb-4 inline-block">
              ← Back to Policies
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {policy.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="prose prose-sm max-w-none">
              {policy.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground/75 leading-relaxed mb-6 whitespace-pre-wrap"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-8 bg-muted/30 rounded-lg border border-border">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                有任何疑問嗎？
              </h3>
              <p className="text-foreground/70 mb-4">
                如果您對我們的政策有任何疑問，歡迎與我們联繫。
              </p>
              <a
                href="mailto:ucc25888@gmail.com"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                ucc25888@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Other Policies */}
        <section className="py-16 md:py-24 bg-muted/20 border-t border-border">
          <div className="container">
            <h3 className="font-display font-bold text-lg text-foreground mb-6">
              其他政策
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(POLICIES) as Array<keyof typeof POLICIES>).map(
                (key) =>
                  key !== policyId && (
                    <Link key={key} href={`/policies/${key}`} className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors block">
                      <p className="font-medium text-foreground hover:text-primary transition-colors">
                        {(POLICIES[key] as any).title}
                      </p>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
