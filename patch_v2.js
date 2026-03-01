const fs = require('fs');

const FILES = ['index.html', 'configurator.html', 'reviews.html', 'guides.html', 'manifesto.html', 'comparison.html', 'compliance.html'];

const OFFICIAL_FOOTER = `        <footer class="flex justify-center text-xs text-text-secondary py-8 border-t border-white/5 mt-4">
            <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <span data-i18n="footer_rights">© 2026 CoolJayVibe. All rights reserved.</span>
                <div class="flex items-center gap-6">
                    <a href="#" class="hover:text-white transition-colors" data-i18n="footer_terms">Terms of Service</a>
                    <a href="#" class="hover:text-white transition-colors" data-i18n="footer_privacy">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors" data-i18n="footer_legal">Legal Notice</a>
                </div>
            </div>
        </footer>`;

const PHONE_MARQUEE = `
            <section class="w-full overflow-hidden py-10 opacity-70">
                <div class="text-center mb-6">
                    <p class="text-xs font-bold text-text-secondary uppercase tracking-widest" data-i18n="phones_tested">Tested & Analyzed: 2021-2026 Flagships</p>
                </div>
                <div class="flex gap-8 whitespace-nowrap animate-[scroll_40s_linear_infinite]" style="animation: scroll 30s linear infinite;">
                    <style>@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }</style>
                    <div class="flex gap-8 min-w-max text-sm font-medium text-white/50">
                        <span>iPhone 17 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 10 Pro XL</span><span class="text-white/20">•</span>
                        <span>Galaxy S24 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 16 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 9 Pro XL</span><span class="text-white/20">•</span>
                        <span>Galaxy S23 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 15 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 8 Pro</span><span class="text-white/20">•</span>
                        <span>Galaxy S22 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 14 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 7 Pro</span><span class="text-white/20">•</span>
                        <span>iPhone 13 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 6 Pro</span><span class="text-white/20">•</span>
                        <span>Galaxy S21 Ultra</span>
                        <!-- duplicate for seamless loop -->
                        <span class="text-white/20">•</span><span>iPhone 17 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 10 Pro XL</span><span class="text-white/20">•</span>
                        <span>Galaxy S24 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 16 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 9 Pro XL</span><span class="text-white/20">•</span>
                        <span>Galaxy S23 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 15 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 8 Pro</span><span class="text-white/20">•</span>
                        <span>Galaxy S22 Ultra</span><span class="text-white/20">•</span>
                        <span>iPhone 14 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 7 Pro</span><span class="text-white/20">•</span>
                        <span>iPhone 13 Pro Max</span><span class="text-white/20">•</span>
                        <span>Pixel 6 Pro</span><span class="text-white/20">•</span>
                        <span>Galaxy S21 Ultra</span>
                    </div>
                </div>
            </section>`;

for (let f of FILES) {
    if (!fs.existsSync(f)) continue;
    let html = fs.readFileSync(f, 'utf8');

    // Replace footer
    html = html.replace(/<footer[\s\S]*?<\/footer>/, OFFICIAL_FOOTER);

    // Auto-inject missing data-i18n based on content via exact matches
    const textMappings = {
        'Login': 'nav_login',
        'CoolJayVibe': 'nav_brand',
        'Comparison': 'compare_header',
        'Pixel 10 Pro': 'phone_pixel',
        'iPhone 17': 'phone_iphone',
        'Camera': 'spec_camera',
        'Efficiency': 'spec_efficiency',
        'Privacy': 'spec_privacy',
        'Deep Analysis': 'compare_deep',
        'Quick Selector': 'selector_header',
        'Matches': 'selector_matches',
        'Follow on X': 'follow_x'
    };

    for (const [text, key] of Object.entries(textMappings)) {
        const regex = new RegExp(`>\\s*${text}\\s*<`, 'g');
        html = html.replace(regex, ` data-i18n="${key}">${text}<`);
    }

    // Fix Quick Selector texts
    html = html.replace(/>Work</g, ' data-i18n="selector_work">Work<');
    html = html.replace(/>Photo</g, ' data-i18n="selector_photo">Photo<');
    html = html.replace(/>Privacy</g, ' data-i18n="selector_privacy">Privacy<');
    html = html.replace(/>Gaming</g, ' data-i18n="selector_gaming">Gaming<');

    // Specifically index.html injections
    if (f === 'index.html' && !html.includes('phones_tested')) {
        // Find comparison section and inject phone marquee after it
        html = html.replace(/(<\/section>\s*)<section class="col-span-1 md:col-span-1 lg:col-span-1[^>]*>[\s\S]*?<\/form>\s*<\/div>\s*<\/section>/, (match, p1) => {
            return match + '\n' + PHONE_MARQUEE;
        });
    }

    fs.writeFileSync(f, html, 'utf8');
    console.log(`Patched ${f}`);
}
