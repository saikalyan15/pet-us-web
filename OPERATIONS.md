# Operations Handbook: OnSitePetGrooming.com

This document outlines the business workflow, technical management, and pricing strategy for the $149 Website product.

---

## 1. Product Tiers & Pricing

Stick to these numbers to maintain high margins and fast delivery.

| Tier | Price | Deliverable | Build Time |
|---|---|---|---|
| **Standard Pitch** | **$0** | A personalized "Preview" page at `onsitepetgrooming.com/groomer/[name]` with 3-5 Google reviews. | 20 mins |
| **Claim (Standard)** | **$149** | Remove `noindex`, add to sitemap, link to their Facebook. Live on your domain. | 5 mins |
| **Domain Upsell** | **+$50-75** | Connecting their custom domain (e.g., `ambersgrooming.com`). *Groomer pays for the domain name separately.* | 15 mins |
| **Custom Integration** | **+$30-50** | Embedding a booking widget (MoeGo, Square) or a custom contact form. | 15 mins |
| **Maintenance** | **$30/hr** | Small text updates, changing hours, or swapping photos after the initial build. | As needed |

---

## 2. Technical Workflow (One Repo, Many Domains)

You do **not** need separate repositories for each client. Manage everything from the `pet-us-web` repo.

### File Structure
Keep it organized by city to handle the 1,900+ potential files:
```
/index.html (The Directory)
/styles.css
/groomers/
   /oh-canton/
      /ambers-grooming.html
      /danas-dog-spa.html
   /ok-broken-arrow/
      /paws-on-wheels.html
```

### Mapping Custom Domains
If a groomer pays for the "Domain Upsell":
1. **Vercel Settings:** Add their domain (e.g., `ambersgrooming.com`) to your project in the Vercel Dashboard.
2. **Configuration:** Use a `vercel.json` file in your root to map the domain to their specific page:
```json
{
  "rewrites": [
    {
      "source": "/",
      "has": [{ "type": "host", "value": "ambersgrooming.com" }],
      "destination": "/groomers/oh-canton/ambers-grooming.html"
    }
  ]
}
```
*This keeps Amber's site looking like a standalone site, even though it's just one file in your directory.*

---

## 3. Fulfillment Workflow

### Step 1: The Lead
- You receive a Formspree notification.
- You verify the groomer's info against your database.

### Step 2: The Invoice
- Reply with a payment link (Dodo Payments).
- **Pro Tip:** If they mention a custom domain in the "Anything else?" box, send an invoice for $199 ($149 + $50 domain fee) instead of $149.

### Step 3: Deployment
1. Open the `.html` file.
2. **Remove** `<meta name="robots" content="noindex">`.
3. **Add** the URL to `sitemap.xml`.
4. Git commit and push. Vercel deploys instantly.

### Step 4: Handoff
- Send the "It's Live!" email.
- Instructions for them to update their Google Business Profile and Facebook "Website" field.

---

## 4. Handling Special Cases

### Case: "I want to move my site away from you"
- **Policy:** You sell the code, not the platform.
- **Charge:** $50 "Export Fee."
- **Action:** Send them the `.html` and `styles.css` files. They are responsible for their own hosting from that point on.

### Case: "Can you add a scheduling system?"
- **Policy:** We don't build scheduling; we **integrate** it.
- **Action:** Ask them for their "Booking Embed Code" from their provider (MoeGo, Booksy, etc.).
- **Charge:** $30 one-time setup fee to paste the code into their page.

### Case: "I want to change all my photos"
- **Policy:** The first 3 photos are included. 
- **Charge:** $30 for a batch update of 5+ photos.

---

## 5. Why This Model Wins
- **Zero Overhead:** No databases to hack, no plugins to update.
- **SEO Compound Interest:** Every groomer you sign up adds a high-quality page to `onsitepetgrooming.com`, making the whole domain more powerful.
- **Portability:** If Vercel ever changes their pricing, you can move 1,900 files to any other host in 10 minutes.
