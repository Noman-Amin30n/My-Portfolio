# Content Update Guide

This guide shows you exactly where to update content to personalize your portfolio.

## ✅ Already Configured

The following content has been set up with your information:

- Personal name, role, email
- Bio and professional story
- Skills and technologies
- Services offered
- Placeholder projects structure

## 🔄 What You Need to Update

### 1. Project Images

**Location**: `public/projects/`

Create this directory and add your project images:

```
public/
  projects/
    project-name-1.png
    project-name-2.png
    ...
```

Then update image paths in `src/data/projects.ts`.

### 2. Real Projects

**File**: `src/data/projects.ts`

Replace the placeholder projects with your real projects:

- Update titles, descriptions, and long descriptions
- Add real challenge, solution, and results
- Update tags to match technologies used
- Add real GitHub repository links
- Add real live site/Vercel deployment links
- Replace image paths with your project images

### 3. Social Media Links

**File**: `src/data/personal.ts`

Update the `socialLinks` array with your real social media URLs:

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/YOUR-USERNAME", // ← Update this
    icon: "Github",
  },
  // ... update other links
];
```

### 4. Resume/CV (Optional)

**File**: `public/resume.pdf`

Add your resume PDF file to the public directory and it will be linked automatically.

### 5. Testimonials (When Available)

**File**: `src/data/testimonials.ts`

Replace placeholder testimonials with real client feedback when you have them.

### 6. Environment Variables

**File**: `.env.local` (create from `.env.example`)

Required for contact form to work:

```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-brevo-email
SMTP_PASSWORD=your-smtp-key
CONTACT_EMAIL=nomankhan30n@gmail.com
```

Get SMTP credentials from [Brevo](https://www.brevo.com/) (free tier available).

## 📸 Adding Project Images

### Option 1: Use Real Project Screenshots

1. Take high-quality screenshots of your projects
2. Optimize images (use tools like TinyPNG)
3. Save them in `public/projects/`
4. Update paths in `src/data/projects.ts`

### Option 2: Generate Placeholder Images

Until you have real screenshots:

1. Use placeholder image services
2. Or keep the emoji-based placeholders
3. Update later with real images

## 🎨 Optional Customizations

### Change Colors

**File**: `src/app/globals.css`

Modify CSS variables:

```css
--color-primary: #ff6b35; /* Your brand color */
--color-cream: #fff5e4;
/* ... other colors */
```

### Update Fonts

**File**: `src/app/layout.tsx`

Change Google Fonts imports and variables.

### Modify Services

**File**: `src/data/services.ts`

Add, remove, or edit services you offer.

## ✨ Ready to Deploy?

Once you've updated:

1. ✅ Personal information
2. ✅ Social media links
3. ✅ Environment variables
4. ✅ At least 2-3 real projects with images

You're ready to deploy to Vercel!

## 🚀 Deployment Checklist

- [ ] Update all personal information
- [ ] Add real project data and images
- [ ] Configure environment variables in Vercel
- [ ] Test contact form
- [ ] Update meta tags and OG images
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Deploy! 🎉

---

Need help? Check the README.md for detailed instructions.
