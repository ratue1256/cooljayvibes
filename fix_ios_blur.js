const fs = require('fs');

const FILES = ['index.html', 'configurator.html', 'reviews.html', 'guides.html', 'manifesto.html', 'comparison.html', 'compliance.html'];

for (let f of FILES) {
    if (!fs.existsSync(f)) continue;
    let html = fs.readFileSync(f, 'utf8');

    // Remove the blur from the keyframes which causes iOS Safari to turn text invisible
    html = html.replace(/filter:\s*blur\(\w+\);/g, '');

    // Ensure "Buy a workflow" has no opacity wrapper if it's already gray
    html = html.replace(/<span class="opacity-60 text-\[#A1A1AA\]"/g, '<span class="text-[#A1A1AA]"');

    fs.writeFileSync(f, html, 'utf8');
}
console.log('Fixed iOS Safari blur rendering bug.');
