# OnSitePetGrooming.com — Pitch Plan
**Version 1.0 | May 2026**

---

## What We Are Doing and Why

Mobile groomers who rely solely on a Facebook page for their online presence are invisible to pet owners who search Google. Their Facebook page does not rank, cannot be found by someone typing "mobile dog groomer near me," and communicates nothing more than a follower count. They know this problem exists. They have simply never had a simple, affordable path out of it.

The pitch is not "pay me to build you a website." The pitch is: "I already built one for you. It has your real customer reviews on it and lets clients request appointments directly. Here is the link. If you want to keep it, it's $49/month and I handle everything."

There is no speculation in the offer. No promise of future traffic. No abstract value. The product exists at a URL before a single dollar changes hands.

---

## Target Data Set

**Total mobile-capable groomers in database:** 2,786

**Target segment — no website or social-only:** 631 groomers

| Category | Count |
|---|---|
| Facebook page only | 311 |
| No website at all | 296 |
| Instagram page only | 24 |
| **Total** | **631** |

**Reachability breakdown:**

| Channel | Available |
|---|---|
| Phone number | 609 of 631 (97%) |
| Email address | 0 of 631 |

The email gap is a direct consequence of how the data was collected — email addresses are scraped from websites, and these groomers have no website. **Facebook DM is the only viable digital outreach channel for this segment.** This is not a constraint; it is an advantage. A Facebook DM from one small business owner to another reads as human. A cold email to a scraped address reads as spam.

The 296 no-website groomers are reachable by phone only. We will not pursue them in Phase 1. They require a call, which adds friction and time. We stay with the 311 Facebook-only groomers first.

---

## City Targeting Strategy

### Why Not to Pick Cities Randomly

Outreach works best when you can follow up quickly within the same cluster. If one groomer in a city responds positively, you want to have 3–5 other pages in that same city already built or nearly ready. Volume in a city also matters: 5 groomers seeing the same person's work in their local Facebook grooming groups creates social proof. Starting in cities with the highest Facebook-only density gives you the best return on build time.

### Scoring Method

Cities were ranked on three factors:
1. **Facebook-only groomers in target segment** — these are the DM-able prospects
2. **Total segment size** — gives follow-up volume within the city
3. **Geographic diversity** — avoid clustering in one region

### Recommended First Five Cities

| Priority | City | State | Total in Segment | FB-Only | FB % | Rationale |
|---|---|---|---|---|---|---|
| 1 | **Canton** | OH | 6 | 5 | 83% | Highest FB density in Midwest, 5 named groomers ready, not an oversaturated market |
| 2 | **Broken Arrow** | OK | 5 | 5 | 100% | All five reachable via FB DM, tight suburban market |
| 3 | **Monroe** | LA | 6 | 4 | 67% | Mid-South coverage, 4 FB-reachable, 2 no-website groomers provide follow-up opportunity |
| 4 | **Medford** | OR | 5 | 4 | 80% | Pacific Northwest coverage, mix of FB and no-website |
| 5 | **Roanoke** | VA | 4 | 4 | 100% | All four FB-reachable, Southeast coverage |

**Start with Canton, OH.** It has five Facebook-only groomers within one small metro, all identifiable with business names and phone numbers. If the first pitch converts, the four others are sitting right there for immediate follow-up.

### Canton, OH — First Batch

| Business Name | Phone | Web Class | Facebook URL |
|---|---|---|---|
| Amber's Grooming Spa | (330) 371-2335 | Facebook only | facebook.com/ambersgroomingspa |
| Dana's Dog Spa | (330) 497-9000 | Facebook only | facebook.com/Danasdogspaohio |
| Mutt & Jeff's Beauty Pawlor | (330) 649-1112 | Facebook only | facebook.com/mutt&jeff's beauty pawlor |
| Roxy's Groom Room | (330) 617-3433 | Facebook only | facebook.com/roxy.s.groom.room |
| Suds & Scissors | (330) 477-0551 | Facebook only | facebook.com/Suds-Scissors |

Do not build all five at once. Build two, run the outreach on both, review the response before committing to the remaining three.

---

## What We Are Building Per Groomer

Each site is a **single HTML page**, hand-built, personalised to that groomer. There is no template engine, no CMS, no API calls. The page is ready when it looks like it was built specifically for that business and for no other.

### Page Sections

**Header**
Business name as the primary heading. Phone number as a visible click-to-call link top right. Minimal, no nav clutter.

**Hero**
- H1: Business name
- H2: "Mobile Pet Grooming in [City, State]"
- Two short sentences about the business written in plain human language — not the AI-generated description from the database, rewritten fresh
- Two buttons: "Call Now" (tel: link to their phone) and "Book on Facebook" (link to their existing Facebook page)

**Services**
Clean grid or list of their actual services pulled from the data. Label it "What We Offer."

**About**
Three to four sentences. This is where the page earns its personalisation. Reference their city, their specific service angle (anxious pets, senior dogs, cats), anything visible from their Facebook page that makes them distinct. This section takes the most time but it is the section groomers will read first.

**Customer Reviews**
This is the centrepiece. Manually copy three to five reviews from their Google Business listing:
- Star rating
- Review text (verbatim)
- Reviewer first name and last initial
- Month and year
- "via Google" attribution with a small Google icon

If they have fewer than three Google reviews, check their Facebook recommendations and use those instead. If combined reviews are still below three, skip the reviews section entirely rather than have a sparse section undermine the page.

**Contact Footer**
Phone number. City. Link back to onsitepetgrooming.com in small text. Nothing else.

### Technical Specifications

- Pure HTML and inline or embedded CSS only. No JavaScript frameworks. No build tools.
- Responsive by default — most groomers will view on mobile.
- `<meta name="robots" content="noindex, nofollow">` in the head of every pitch page. These pages are not for Google. They are for the groomer only.
- Hosted on onsitepetgrooming.com at path `/groomers/[city-businessname]` e.g. `/groomers/canton-ambers-grooming-spa`

---

## Pricing Strategy

### The Offer — $49/month

No setup fee. No contract. Cancel anytime.

What they get:

- Their own custom .com domain (e.g. `ambersgroomingspa.com`) — not a subdirectory on someone else's site
- A mobile-first groomer page with their services, live Google Reviews, and a booking request form
- Clients can submit their name, phone, pet, and preferred time directly from the site — no more missed DMs or phone tag
- We handle hosting, updates, and keeping the reviews current
- Local SEO markup so the page is structured to rank for city-level searches

What you do after they approve the preview:

1. Collect the first month via Dodo Payments (recurring link)
2. Register their domain and point it to the live page
3. Remove the noindex tag so the page becomes crawlable
4. Send them a short note telling them to update their Facebook "Website" field and Google Business Profile URL
5. Done. Total post-payment work: twenty minutes.

### What Is Not Included

- Bespoke design or custom code beyond the template
- Phone or video support — all communication by DM or email
- Changes to services or copy after launch — offer these as one-off updates at $30 each if asked

### Why Subscription, Not One-Time

Every one-time offer in this space reads as "pay once, then we disappear." A $49/month subscription signals active maintenance — reviews stay current, the site stays live, someone is accountable. It also produces compounding revenue: a groomer who signs up in month 1 and stays for a year is worth $588, not $149. The price point is below the "think twice" threshold for a solo operator and does not require justification. The finished site at the URL does the justifying.

---

## Outreach Process

### Channel

Facebook DM only, sent from your personal or business Facebook account, directly to the groomer's Facebook page. Do not use email for this segment — they have no email addresses on record.

### Timing

Send the DM at a time when small business owners check their messages: weekday morning between 8am and 10am US local time, or immediately after a post on their page shows they are active.

### Message Template

Keep it short. The URL is the pitch. The words around it just need to be human.

> Hi [First Name] — I run OnSitePetGrooming.com, a directory for mobile groomers. I noticed you do not have a website yet, so I built one for you using your business details and your Google reviews. It also lets clients request appointments directly.
>
> Here it is: [URL]
>
> No catch. If you like it and want to keep it live, it's $49/month and I handle everything. If not, no worries at all.

Do not add anything after that. No bullet points listing features. No "I specialise in helping small businesses." No "feel free to reach out with questions." The message ends after "no worries at all."

### After They Respond

If they say they like it or ask how to pay:
- Send a Stripe payment link or PayPal invoice for $149
- Tell them it takes two minutes to pay and the page stays up permanently after that

If they say they already have a website coming or are working on one:
- Reply with "Good luck with it — let me know if you ever want extra visibility on the directory." Then stop.

If they do not respond within five days:
- One follow-up only: "Just checking if you had a chance to see the page — [URL]. Happy to answer any questions." Then leave it.

If they say no or ask you to remove the page:
- Remove the page immediately, reply with "Done, removed. No problem at all." No argument.

---

## onsitepetgrooming.com Landing Page

The homepage needs to exist and look real so that when a groomer Googles the domain after receiving your DM, what they see confirms legitimacy.

### Minimum Required Sections

**Hero**
Headline: *"Find Mobile Pet Groomers That Come To You"*
One-line subheadline about the site's purpose.
Placeholder search bar or static city links.

**Browse By City**
Eight to ten real city names from your data with groomer counts. These do not need to be functional links yet. The presence of real places and numbers makes the site look operational.

**For Groomers Strip**
One horizontal band that says: *"Are you a mobile groomer? When new clients search 'mobile groomer near me,' are you showing up? Get a locally-optimized website with live Google Reviews for $49/month — we build it first, you approve it before paying."* Link to `groomer-websites.html`.

**Footer**
Contact email. Short description. Nothing else.

### Technical Notes

- robots.txt: allow all crawling
- sitemap.xml: homepage URL only — do not include pitch pages
- Submit sitemap in Google Search Console and request indexing on the homepage
- The pitch pages at `/groomers/[slug]` remain noindex and do not appear in GSC coverage

---

## Phase Timeline

| Phase | Action | Goal |
|---|---|---|
| **Phase 0** | Build homepage for onsitepetgrooming.com, submit to GSC | Domain looks real and credible |
| **Phase 1** | Build 2 pitch pages (Canton OH: Amber's Grooming Spa + Dana's Dog Spa). Send 2 FB DMs | First conversion signal |
| **Phase 2** | If 1 of 2 converts: build remaining 3 Canton pages + pitch them. If 0 of 2: review pitch wording, try 2 from Broken Arrow OK before changing the model | Scale within proven city or diagnose |
| **Phase 3** | After first $1K (approximately 7 conversions at $149): assess whether to expand cities, raise price, or add the GBP tier | Prove repeatability before scaling |

---

## What Success Looks Like at Each Stage

**One conversion:** The model is not broken. Someone saw a real product at a real URL and started paying $49/month. Proceed to Phase 2.

**Three conversions in one city:** The pitch is working in that geography. Move to a second city without changing the pitch.

**Seven subscribers across two cities:** You have $343/month in recurring revenue. The model is repeatable. This is the point to consider whether to keep doing this manually, build the generation tooling, or test a price increase to $59–69/month for new signups.

**Zero conversions after 10 DMs across two cities:** The pitch needs diagnosis. Reasons to investigate: the pages look too generic despite personalisation, the price is wrong, the FB DM channel is not landing, or the groomer segment is not motivated by website visibility the way we assumed. At that point, revisit before continuing.

---

*Attached: target_groomers.csv — 631 mobile-capable groomers with no website or social-only presence, sorted by state and city.*
