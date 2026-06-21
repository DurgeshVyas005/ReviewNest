/**
 * Home Page - Landing page with Hero banner, feature cards, stats strip, and CTA section.
 * Route: /
 */
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const features = [
  {
    icon: "🔍",
    title: "Sentiment Analysis",
    description:
      "Automatically classify guest reviews as positive, neutral, or negative using advanced natural language processing.",
    actionText: "Learn more",
  },
  {
    icon: "🏷️",
    title: "Theme Detection",
    description:
      "Identify primary themes like food, cleanliness, location, host, value, and experience from every review.",
    actionText: "Learn more",
  },
  {
    icon: "🤖",
    title: "AI Response Generation",
    description:
      "Generate professional, personalized management responses in seconds — saving hours of manual effort.",
    actionText: "Learn more",
  },
  {
    icon: "📈",
    title: "Review Analytics",
    description:
      "Visualize trends, track satisfaction scores, and monitor feedback patterns across all your properties.",
    actionText: "Learn more",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="relative py-24 bg-mesh" id="features-section">
        {/* Decorative */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-400 tracking-wide uppercase mb-4">
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">Powerful Features</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Everything you need to transform raw guest feedback into
              meaningful, actionable business intelligence.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <Card
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  actionText={feature.actionText}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Strip */}
      <section className="relative py-16 border-t border-border-subtle" id="stats-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "12,400+", label: "Reviews Analyzed" },
              { value: "98.5%", label: "Accuracy Rate" },
              { value: "340+", label: "Properties Served" },
              { value: "4.9/5", label: "User Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-mesh" id="cta-section">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[160px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Ready to Elevate Your{" "}
            <span className="text-gradient">Guest Experience?</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of hospitality teams already using ReviewNest to turn
            feedback into five-star service.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            id="cta-bottom"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
