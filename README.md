# Muhammad Noman Ameen - Portfolio Website

A modern, production-ready portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and advanced animations.

## 🚀 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS
- **Advanced Animations**: GSAP ScrollTrigger, Framer Motion
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Dynamic sitemap, robots.txt, meta tags, Open Graph
- **Accessible**: WCAG compliant, keyboard navigation, screen reader support
- **Contact Form**: React Hook Form with Nodemailer integration
- **Type-Safe**: Full TypeScript coverage with strict mode
- **Performance**: Optimized images, lazy loading, 90+ Lighthouse score

## 📦 Tech Stack

### Core

- Next.js 16 (App Router)
- React 19
- TypeScript 5

### Styling

- Tailwind CSS 4
- shadcn/ui components
- Framer Motion

### Animations

- GSAP with ScrollTrigger
- Framer Motion
- Lenis smooth scroll

### Forms & Validation

- React Hook Form
- Zod validation
- Nodemailer (Brevo SMTP)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Brevo account for email functionality (or any SMTP service)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:

```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-smtp-password
CONTACT_EMAIL=nomankhan30n@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Updating Content

### Personal Information

Edit `src/data/personal.ts` to update:

- Name, role, email
- Bio and professional story
- Social media links
- Availability status

### Projects

Edit `src/data/projects.ts` to add/update projects:

- Replace placeholder projects with your real projects
- Update images, descriptions, tags
- Add GitHub and live site links

### Services

Edit `src/data/services.ts` to customize your service offerings.

### Skills

Edit `src/data/skills.ts` to update your skills and proficiency levels.

### Testimonials

Edit `src/data/testimonials.ts` to add client testimonials.

## 🎨 Customization

### Colors

The design system uses a custom color palette defined in `src/app/globals.css`:

- Primary: `#FF6B35` (Orange)
- Cream: `#FFF5E4`
- Peach: `#FFE5D9`
- Lavender: `#E8E4F3`
- Navy: `#1A1F3D`

Update CSS variables to customize colors.

### Fonts

Google Fonts are configured in `src/app/layout.tsx`:

- Heading: Space Grotesk
- Body: Inter

## 📧 Email Configuration

The contact form uses Nodemailer with Brevo SMTP. To set up:

1. Create a free account at [Brevo](https://www.brevo.com/)
2. Go to SMTP & API settings
3. Copy your SMTP credentials
4. Add them to `.env.local`

Alternative SMTP providers (Gmail, SendGrid, etc.) can be configured in `src/app/api/contact/route.ts`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Performance

The site is optimized for:

- **Performance**: 90+ Lighthouse score
- **Accessibility**: 95+ score with WCAG compliance
- **SEO**: 100 score with comprehensive meta tags
- **Best Practices**: 95+ score

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 👤 Author

**Muhammad Noman Ameen**

- Email: nomankhan30n@gmail.com
- Portfolio: [Your Live Site]
- GitHub: [@yourusername]

---

Built with ❤️ using Next.js and TypeScript
