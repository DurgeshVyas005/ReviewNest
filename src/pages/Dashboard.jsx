/**
 * Dashboard Page - Review analytics with KPI cards, sentiment trends, theme distribution, and reviews table.
 * Route: /dashboard
 */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiOutlineChatAlt2,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineStar,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const summaryCards = [
  {
    label: "Total Reviews",
    value: "1,248",
    change: "+12%",
    icon: <HiOutlineChatAlt2 className="h-5 w-5" />,
    color: "from-primary-500/20 to-primary-600/10",
    textColor: "text-primary-400",
  },
  {
    label: "Positive Reviews",
    value: "876",
    change: "+8%",
    icon: <HiOutlineThumbUp className="h-5 w-5" />,
    color: "from-emerald-500/20 to-emerald-600/10",
    textColor: "text-emerald-400",
  },
  {
    label: "Negative Reviews",
    value: "142",
    change: "-3%",
    icon: <HiOutlineThumbDown className="h-5 w-5" />,
    color: "from-rose-500/20 to-rose-600/10",
    textColor: "text-rose-400",
  },
  {
    label: "Average Rating",
    value: "4.6",
    change: "+0.2",
    icon: <HiOutlineStar className="h-5 w-5" />,
    color: "from-amber-500/20 to-amber-600/10",
    textColor: "text-amber-400",
  },
];

const recentReviews = [
  {
    id: 1,
    text: "The location was absolutely stunning — right by the beach with breathtaking sunset views.",
    sentiment: "Positive",
    theme: "Location",
    response: "Thank you for your kind words! We're delighted you enjoyed the beautiful beachside setting.",
  },
  {
    id: 2,
    text: "Room service was extremely slow and the food arrived cold.",
    sentiment: "Negative",
    theme: "Food",
    response: "We sincerely apologize for the delay; we're taking immediate steps to improve our room service speed.",
  },
  {
    id: 3,
    text: "The host was incredibly welcoming and went above and beyond to make us comfortable.",
    sentiment: "Positive",
    theme: "Host",
    response: "We'll share your wonderful feedback with our team — they truly care about every guest's comfort.",
  },
  {
    id: 4,
    text: "Decent stay overall but nothing special for the price we paid.",
    sentiment: "Neutral",
    theme: "Value",
    response: "We appreciate your honest feedback and are working on enhancing the value of every stay.",
  },
  {
    id: 5,
    text: "The bathrooms were not cleaned properly and there were stains on the sheets.",
    sentiment: "Negative",
    theme: "Cleanliness",
    response: "We deeply regret this experience and have implemented stricter housekeeping protocols immediately.",
  },
  {
    id: 6,
    text: "Had a wonderful overall experience — the spa, the dining, everything was top-notch!",
    sentiment: "Positive",
    theme: "Experience",
    response: "How wonderful to hear! We strive to make every part of your stay exceptional.",
  },
];

const themeDistribution = [
  { theme: "Location", percent: 28, color: "bg-primary-500" },
  { theme: "Food", percent: 22, color: "bg-amber-500" },
  { theme: "Host", percent: 18, color: "bg-emerald-500" },
  { theme: "Cleanliness", percent: 14, color: "bg-rose-500" },
  { theme: "Experience", percent: 12, color: "bg-accent-500" },
  { theme: "Value", percent: 6, color: "bg-cyan-500" },
];

const sentimentBadge = {
  Positive:
    "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",
  Negative:
    "bg-rose-400/10 text-rose-400 border-rose-400/20",
  Neutral:
    "bg-amber-400/10 text-amber-400 border-amber-400/20",
};

const sentimentDot = {
  Positive: "bg-emerald-400",
  Negative: "bg-rose-400",
  Neutral: "bg-amber-400",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="pt-24 pb-16 bg-mesh min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-10 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Review Analytics{" "}
              <span className="text-gradient">Dashboard</span>
            </h1>
            <p className="text-text-secondary">
              Monitor guest sentiment trends, common themes, and management
              responses from a centralized dashboard.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {summaryCards.map((card, i) => (
              <div
                key={card.label}
                className="glass rounded-2xl p-5 hover:glass-strong hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
                id={`dashboard-card-${card.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} ${card.textColor}`}>
                    {card.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                    <HiOutlineTrendingUp className="h-3.5 w-3.5" />
                    {card.change}
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-text-primary">
                  {card.value}
                </div>
                <div className="text-xs text-text-muted mt-1">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Theme Distribution */}
            <div className="glass rounded-2xl p-6 animate-fade-in-up animate-delay-200" id="theme-distribution">
              <h3 className="text-lg font-semibold text-text-primary mb-5">
                Theme Distribution
              </h3>
              <div className="space-y-4">
                {themeDistribution.map((item) => (
                  <div key={item.theme}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-text-secondary">{item.theme}</span>
                      <span className="text-text-muted font-medium">
                        {item.percent}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} transition-all duration-700`}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Breakdown */}
            <div className="lg:col-span-2 glass rounded-2xl p-6 animate-fade-in-up animate-delay-300" id="sentiment-breakdown">
              <h3 className="text-lg font-semibold text-text-primary mb-5">
                Sentiment Trend (Last 7 Days)
              </h3>
              <div className="flex items-end gap-3 h-44">
                {[
                  { day: "Mon", pos: 72, neg: 12, neu: 16 },
                  { day: "Tue", pos: 68, neg: 18, neu: 14 },
                  { day: "Wed", pos: 80, neg: 8, neu: 12 },
                  { day: "Thu", pos: 65, neg: 20, neu: 15 },
                  { day: "Fri", pos: 75, neg: 10, neu: 15 },
                  { day: "Sat", pos: 82, neg: 7, neu: 11 },
                  { day: "Sun", pos: 78, neg: 9, neu: 13 },
                ].map((d) => (
                  <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col gap-0.5">
                      <div
                        className="w-full rounded-t-sm bg-emerald-500/70 transition-all duration-500 hover:bg-emerald-400"
                        style={{ height: `${d.pos * 1.5}px` }}
                        title={`Positive: ${d.pos}%`}
                      />
                      <div
                        className="w-full bg-amber-500/70 transition-all duration-500 hover:bg-amber-400"
                        style={{ height: `${d.neu * 1.5}px` }}
                        title={`Neutral: ${d.neu}%`}
                      />
                      <div
                        className="w-full rounded-b-sm bg-rose-500/70 transition-all duration-500 hover:bg-rose-400"
                        style={{ height: `${d.neg * 1.5}px` }}
                        title={`Negative: ${d.neg}%`}
                      />
                    </div>
                    <span className="text-[11px] text-text-muted mt-2">
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-5 mt-5 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Positive
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" /> Neutral
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-rose-500" /> Negative
                </span>
              </div>
            </div>
          </div>

          {/* Recent Reviews Table */}
          <div className="glass rounded-2xl overflow-hidden animate-fade-in-up animate-delay-400" id="reviews-table">
            <div className="p-6 border-b border-border-subtle">
              <h3 className="text-lg font-semibold text-text-primary">
                Recent Reviews
              </h3>
              <p className="text-sm text-text-muted mt-1">
                AI-analyzed guest reviews with sentiment, theme, and auto-generated responses.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Sentiment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Theme
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">
                      AI Response
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {recentReviews.map((review) => (
                    <tr
                      key={review.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-text-secondary max-w-xs">
                        <span className="line-clamp-2">&quot;{review.text}&quot;</span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${sentimentBadge[review.sentiment]}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${sentimentDot[review.sentiment]}`}
                          />
                          {review.sentiment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-text-muted px-2.5 py-1 rounded-lg bg-white/5">
                          {review.theme}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary max-w-sm">
                        <span className="line-clamp-2">{review.response}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-border-subtle">
              {recentReviews.map((review) => (
                <div key={review.id} className="p-5 space-y-3">
                  <p className="text-sm text-text-secondary">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${sentimentBadge[review.sentiment]}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${sentimentDot[review.sentiment]}`}
                      />
                      {review.sentiment}
                    </span>
                    <span className="text-xs font-medium text-text-muted px-2.5 py-1 rounded-lg bg-white/5">
                      {review.theme}
                    </span>
                  </div>
                  <div className="text-xs text-text-muted bg-white/3 rounded-lg p-3 border border-border-subtle">
                    <span className="font-semibold text-primary-400">AI Response: </span>
                    {review.response}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
