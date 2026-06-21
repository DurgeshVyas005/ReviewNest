import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";

const footerLinks = {
  Product: [
    { label: "Features", to: "/" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Pricing", to: "/" },
    { label: "Integrations", to: "/" },
  ],
  Company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/" },
    { label: "Blog", to: "/" },
    { label: "Press", to: "/" },
  ],
  Support: [
    { label: "Documentation", to: "/" },
    { label: "Help Center", to: "/" },
    { label: "API Reference", to: "/" },
    { label: "Status", to: "/" },
  ],
};

const socialIcons = [
  {
    label: "Twitter",
    path: "M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17A4.77 4.77 0 0015.11 4c-2.64 0-4.78 2.14-4.78 4.78 0 .37.04.74.12 1.09C6.97 9.66 3.8 7.74 1.67 4.92c-.41.7-.64 1.52-.64 2.39 0 1.66.84 3.12 2.13 3.97-.79-.02-1.53-.24-2.18-.6v.06c0 2.32 1.65 4.25 3.84 4.69-.4.11-.82.17-1.26.17-.31 0-.61-.03-.9-.08.61 1.9 2.37 3.29 4.46 3.33A9.58 9.58 0 011 19.54 13.5 13.5 0 008.29 22c8.76 0 13.54-7.26 13.54-13.54 0-.21 0-.42-.01-.62.93-.67 1.74-1.51 2.38-2.47L22.46 6z",
  },
  {
    label: "GitHub",
    path: "M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.83 0 1.67.11 2.45.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.82-4.58 5.08.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z",
  },
  {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.76 1.76 0 0024 22.27V1.73A1.76 1.76 0 0022.22 0z",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface" id="footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg transition-transform group-hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-text-primary">
                Review<span className="text-gradient">Nest</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed mb-6">
              AI-powered guest review analysis platform. Understand your guests
              better, one review at a time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-text-muted hover:text-white hover:bg-white/8 transition-all duration-200"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © 2026 ReviewNest. All Rights Reserved.
          </p>
          <p className="text-sm text-text-muted flex items-center gap-1">
            Made with <HiOutlineHeart className="h-4 w-4 text-rose-400" /> for better hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}
