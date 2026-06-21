export default function Card({ title, description, icon, actionText }) {
  return (
    <div className="group relative rounded-2xl glass hover:glass-strong p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-primary" id={`card-${title?.toLowerCase().replace(/\s+/g, "-")}`}>
      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative">
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {description}
        </p>

        {/* Optional action */}
        {actionText && (
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
            {actionText}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
