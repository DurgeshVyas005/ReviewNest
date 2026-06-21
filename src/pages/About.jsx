import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

const values = [
  {
    icon: <HiOutlineLightBulb className="h-6 w-6" />,
    title: "Innovation First",
    description:
      "We push the boundaries of AI to deliver real-time, accurate guest feedback intelligence.",
  },
  {
    icon: <HiOutlineShieldCheck className="h-6 w-6" />,
    title: "Trust & Privacy",
    description:
      "Guest data is encrypted and never shared. We maintain the highest security and compliance standards.",
  },
  {
    icon: <HiOutlineGlobeAlt className="h-6 w-6" />,
    title: "Global Reach",
    description:
      "Multi-language support and culturally-aware analysis for properties around the world.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", avatar: "🧑‍💼" },
  { name: "Maya Patel", role: "CTO & Co-founder", avatar: "👩‍💻" },
  { name: "Jordan Rivera", role: "Head of AI", avatar: "🧑‍🔬" },
  { name: "Sam Okafor", role: "Design Lead", avatar: "🎨" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-16 bg-mesh">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-accent-400 tracking-wide uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            About <span className="text-gradient">ReviewNest</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            ReviewNest helps hospitality teams understand guest feedback using
            AI-driven sentiment analysis, theme detection, and actionable
            insights.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-t border-border-subtle" id="about-mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We believe every guest review holds a story. Our mission is to
                help hospitality teams listen at scale, turning thousands of
                reviews into clear, actionable intelligence that drives better
                service and happier guests.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Built by a team that understands both AI and hospitality,
                ReviewNest bridges the gap between raw feedback data and
                meaningful operational decisions.
              </p>
            </div>

            {/* Visual */}
            <div className="animate-fade-in-up animate-delay-200">
              <div className="glass-strong rounded-2xl p-8 glow-primary">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "2024", label: "Founded" },
                    { value: "25+", label: "Team Members" },
                    { value: "12K+", label: "Reviews/Day" },
                    { value: "40+", label: "Countries" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-xl bg-white/3 border border-border-subtle">
                      <div className="text-2xl font-extrabold text-gradient mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-mesh border-t border-border-subtle" id="about-values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              The principles that drive how we build, ship, and support
              ReviewNest every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-6 hover:glass-strong hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 text-primary-400 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 border-t border-border-subtle" id="about-team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              A passionate crew of engineers, designers, and hospitality experts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="glass rounded-2xl p-6 text-center hover:glass-strong hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="text-5xl mb-3">{member.avatar}</div>
                <h4 className="text-sm font-semibold text-text-primary">
                  {member.name}
                </h4>
                <p className="text-xs text-text-muted mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
