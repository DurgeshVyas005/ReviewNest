import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mesh" id="hero-section">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-xs font-medium text-accent-400 tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              AI-Powered Analytics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
              Transform Guest Reviews into{" "}
              <span className="text-gradient">Actionable Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Analyze sentiment, discover trends, and improve customer
              satisfaction with AI-powered review intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/dashboard"
                id="hero-cta-primary"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Get Started
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/about"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-text-secondary glass hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Illustration / Visual */}
          <div className="flex-1 max-w-lg w-full animate-fade-in-up animate-delay-200">
            <div className="relative">
              {/* Floating card visual */}
              <div className="glass-strong rounded-2xl p-6 glow-primary">
                {/* Mini dashboard mockup */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <div className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-text-muted font-mono">ReviewNest AI</span>
                </div>

                {/* Simulated analysis rows */}
                <div className="space-y-3">
                  {[
                    { text: "Amazing location and views!", sentiment: "Positive", color: "bg-emerald-400" },
                    { text: "Room could have been cleaner", sentiment: "Negative", color: "bg-rose-400" },
                    { text: "Friendly staff, fair pricing", sentiment: "Positive", color: "bg-emerald-400" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 rounded-lg bg-white/3 px-4 py-3 border border-border-subtle"
                    >
                      <span className="text-sm text-text-secondary truncate flex-1">
                        &quot;{row.text}&quot;
                      </span>
                      <span className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${row.color}/15 text-white`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${row.color}`} />
                        {row.sentiment}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div className="mt-5 flex items-end gap-2 h-16">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 68].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary-500/60 to-accent-500/40 transition-all duration-500 hover:from-primary-400/80 hover:to-accent-400/60"
                        style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-2 glow-accent animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="text-xs text-text-muted">Accuracy</div>
                    <div className="text-sm font-bold text-white">98.5%</div>
                  </div>
                </div>
              </div>

              {/* Another floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-2 glow-primary animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-xs text-text-muted">Reviews</div>
                    <div className="text-sm font-bold text-white">12.4K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
