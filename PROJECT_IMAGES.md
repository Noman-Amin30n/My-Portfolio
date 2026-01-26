# Project Images Guide

## 📸 Adding Your Project Images

The project cards now display **actual project images** instead of emojis!

### Image Requirements

1. **Format**: PNG, JPG, or WebP
2. **Aspect Ratio**: 16:9 (recommended)
3. **Resolution**: Minimum 1200x675px for best quality
4. **File Size**: Optimize images to < 500KB each

### Where to Add Images

Place your project images in the `/public` directory:

```
public/
  projects/
    project-1.png
    project-2.png
    project-3.png
    ...
```

### Updating Project Data

Edit `src/data/projects.ts` to update image paths:

```typescript
{
  id: 'my-project',
  title: 'My Awesome Project',
  image: '/projects/my-project-main.png',  // Main thumbnail
  images: [
    '/projects/my-project-1.png',  // Slider image 1
    '/projects/my-project-2.png',  // Slider image 2
    '/projects/my-project-3.png',  // Slider image 3 (optional)
  ],
  // ... other fields
}
```

### Features

✅ **Single Image**: Displays one image with hover zoom effect
✅ **Multiple Images**: Automatically shows Swiper slider with:
   - Auto-play (3s delay)
   - Navigation arrows (visible on hover)
   - Pagination dots
   - Loop enabled
   
✅ **Hover Effects**:
   - Image zoom on hover
   - Dark overlay with GitHub/Live links
   - Featured badge for featured projects
   
✅ **Optimized**:
   - Next.js Image component for automatic optimization
   - Lazy loading
   - Responsive sizes

### Current Placeholder

Until you add real project images, a beautiful gradient placeholder will be displayed.

**Placeholder location**: `/public/placeholder-project.png`

### Quick Start

1. Take screenshots of your projects
2. Optimize them (use tinypng.com or similar)
3. Save in `/public/projects/` folder
4. Update paths in `src/data/projects.ts`
5. Refresh to see your images!

---

**Pro Tip**: For projects with multiple screenshots, choose the most impressive ones (max 3-4 images) to keep the slider engaging without overwhelming users.
