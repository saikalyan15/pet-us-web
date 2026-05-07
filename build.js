const fs = require('fs-extra');
const path = require('path');

async function build() {
    console.log('🚀 Starting Build Engine...');
    
    const groomers = await fs.readJson('groomers.json');
    const template = await fs.readFile('pitch-template.html', 'utf8');
    const internalPreviews = [];

    // Ensure base directories exist
    await fs.ensureDir('groomers');

    for (const [slug, data] of Object.entries(groomers)) {
        if (data.status === 'ejected') {
            console.log(`- Skipping Ejected: ${slug}`);
            internalPreviews.push({ name: data.business_name, city: data.city, url: `groomers/${data.folder}/${slug}.html` });
            continue;
        }

        console.log(`- Generating: ${slug} (${data.status})`);

        // Generate Review HTML
        const reviewsHtml = data.reviews.map(r => `
            <div class="review-card">
                <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <p>"${r.text}"</p>
                <div class="review-meta"><strong>${r.author}</strong> • ${r.date} • via ${r.source}</div>
            </div>
        `).join('');

        // Generate Services HTML
        const servicesHtml = data.services.map(s => `
            <div class="service-tag">${s}</div>
        `).join('');

        // Handle Status Specific Content
        const robotsTag = data.status === 'preview' 
            ? '<meta name="robots" content="noindex, nofollow">' 
            : '<meta name="robots" content="index, follow">';
        
        const ownerFirstName = data.owner_first_name || data.business_name.split(' ')[0];

        const claimBannerHtml = data.status === 'preview'
            ? `
            <section class="section-padding container" style="text-align: center;">
                <div class="claim-banner">
                    <h2>${ownerFirstName}, this is your website preview.</h2>
                    <p style="margin-bottom: var(--space-md);">We built this for you — no charge yet. If you like it, claim your own .com domain and go live for $49/month.</p>
                    <a href="../../groomer-websites.html" class="btn btn-primary">Claim This Website — $49/mo</a>
                </div>
            </section>`
            : '';

        // Replace Placeholders
        let output = template
            .replace(/{{BUSINESS_NAME}}/g, data.business_name)
            .replace(/{{OWNER_FIRST_NAME}}/g, ownerFirstName)
            .replace(/{{CITY}}/g, data.city)
            .replace(/{{STATE}}/g, data.state)
            .replace(/{{TAGLINE}}/g, data.tagline)
            .replace(/{{PHONE_RAW}}/g, data.phone.replace(/\D/g, ''))
            .replace(/{{PHONE_DISPLAY}}/g, data.phone)
            .replace(/{{ROBOTS_TAG}}/g, robotsTag)
            .replace(/{{SERVICES_HTML}}/g, servicesHtml)
            .replace(/{{REVIEWS_HTML}}/g, reviewsHtml)
            .replace(/{{CLAIM_BANNER_HTML}}/g, claimBannerHtml);

        const folderPath = path.join('groomers', data.folder);
        await fs.ensureDir(folderPath);
        await fs.writeFile(path.join(folderPath, `${slug}.html`), output);
        
        internalPreviews.push({ name: data.business_name, city: data.city, url: `groomers/${data.folder}/${slug}.html` });
    }

    // Update internal-previews.html
    await generateInternalIndex(internalPreviews);

    console.log('✅ Build Complete!');
}

async function generateInternalIndex(previews) {
    let listHtml = previews.map(p => `
        <li style="margin-bottom: 10px;">
            <strong>${p.name}</strong> (${p.city})<br>
            <a href="${p.url}">onsitepetgrooming.com/${p.url}</a>
        </li>
    `).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>Internal Previews</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body style="background: #f4f7f6; padding: 40px;">
    <div class="container">
        <h1>Internal Previews</h1>
        <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <ul>${listHtml}</ul>
        </div>
    </div>
</body>
</html>`;
    await fs.writeFile('internal-previews.html', html);
}

build();
