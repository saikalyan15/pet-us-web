# Implementation Plan: OnSitePetGrooming.com (V1)

## Goal
Build a high-quality, "Friendly & Approachable" landing page for OnSitePetGrooming.com using pure HTML/CSS, hosted on Vercel. This serves as an SEO-friendly directory placeholder and a sales landing page for custom groomer websites.

## Technical Stack
- **Languages:** HTML5, CSS3 (Vanilla + CSS Variables).
- **Hosting:** Vercel (Pure Static - **No ISR** to keep costs at zero/minimum).
- **Forms:** Formspree or Vercel Forms (Capturing leads without a backend).
- **Assets:** 
    - Google Fonts (Quicksand/Montserrat).
    - WebP format for images (with fallback).
    - CSS-based shapes/gradients for visual interest.

## Design Specs (Friendly & Approachable)
- **Palette (CSS Variables):**
  - `--primary-bg: #e0f2f1;` (Soft Teal)
  - `--accent-warm: #ffca28;` (Warm Amber)
  - `--text-main: #333333;`
  - `--white: #ffffff;`
- **Typography:** Rounded fonts (Quicksand) for headers, clean sans-serif (Montserrat) for body.
- **Visuals:** Rounded corners (`border-radius: 12px+`), subtle box shadows, hover-state animations on buttons and cards.

## File Structure
- `index.html`: Homepage (B2C focus).
- `groomer-websites.html`: Pitch page (B2B focus).
- `styles.css`: Central stylesheet (Mobile-first).
- `robots.txt`: SEO instruction.
- `sitemap.xml`: Basic sitemap.
- `assets/`: Folder for icons/images.

## Content Map

### Homepage (`index.html`)
1. **Header:** Simple logo placeholder and navigation (Cities, For Groomers).
2. **Hero:** 
   - H1: "Professional Grooming. Your Driveway."
   - P: "Find the best mobile pet groomers in your city. Stress-free care for your furry friends."
   - CTA: "Browse Cities" button.
3. **Browse Cities Section:** 
   - Grid of 10 featured cities (Anchorage, Fayetteville, Tucson, etc.).
   - *Strategy:* Keep city count low for V1 to maintain fast build times and manual control.
4. **Groomer Pitch Strip:**
   - High-contrast banner: "Are you a Mobile Groomer? Get a professional site for $149." 
   - Button: "Learn More" -> `groomer-websites.html`.
5. **Footer:** Simple links and "Made with love for pets."

### Pitch Page (`groomer-websites.html`)
1. **Hero:** "The $149 Website for Mobile Groomers."
2. **Features List:**
   - Google Reviews integration.
   - Mobile-first design.
   - Domain connection included.
3. **Contact Form:**
   - Simple Lead Form (Name, Email, Business Name, Message).
   - Powered by Formspree/Vercel Forms for reliable delivery.

## SEO & Metadata
- **Basic Meta:** Title, Description, Favicon.
- **Schema.org (JSON-LD):** 
    - Include `Service` and `Organization` schema to help Google understand the directory's purpose without needing thousands of pages yet.
- **Verification:** Google Search Console `<meta>` tag.

## Deployment
- Push to GitHub -> Connect to Vercel (Static).
