const fs = require('fs');
const files = ['index.html', 'configurator.html', 'reviews.html', 'guides.html', 'manifesto.html', 'comparison.html', 'compliance.html'];

files.forEach(f => {
    if (fs.existsSync(f)) {
        const html = fs.readFileSync(f, 'utf8');
        // Extract tags with inner text but no data-i18n
        // This is just a rough heuristic script
        const matches = html.match(/<[^>]+>([^<]+)<\//g);
        if (matches) {
            console.log(`\n--- ${f} ---`);
            matches.forEach(m => {
                if (!m.includes('data-i18n') && !m.match(/<script|<style/)) {
                    const text = m.replace(/<[^>]+>/g, '').trim();
                    if (text.length > 2 && text !== 'menu' && !m.includes('material-symbols-outlined')) {
                        // only print if not just whitespace
                        console.log(text);
                    }
                }
            });
        }
    }
});
