# Deepcomet

Modern website for [Deepcomet](https://deepcomet.space) — pioneering the next generation of AI, science, and space exploration.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, static export)
- **UI:** [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages with custom domain

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Pages

- **Home** — Hero section with space video background, focus areas, and CTA
- **About** — Mission, vision, values, and journey timeline
- **Research** — Active research areas, publications, and collaboration opportunities
- **Contact** — Contact methods and ways to get involved

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on push to `main`. The custom domain `deepcomet.space` is configured via the `CNAME` file.

### Custom Domain Setup

To configure the custom domain, add the following DNS records:

| Type  | Name | Value                    |
| ----- | ---- | ------------------------ |
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | DeepcometAI.github.io    |

## License

See [LICENSE](./LICENSE) for details.
