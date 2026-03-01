const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const processed = content
    .replace(/data-i18n="[^"]+"\s+data-i18n="([^"]+)"/g, 'data-i18n="$1"')
    .replace(/<footer[^>]+>([\s\S]*?)<\/footer>/, (match, body) => {
        const scriptStart = body.indexOf('function showToast');
        if (scriptStart !== -1) {
            const footerContent = body.substring(0, scriptStart);
            const scriptContent = body.substring(scriptStart);
            // Clean up the weird characters in rights text if present
            const cleanFooter = footerContent.replace(/┬®/g, '©');
            return '<footer class="flex justify-center text-xs text-text-secondary py-8 border-t border-white/5 mt-4">' +
                cleanFooter +
                '</footer>\n<script>\ndocument.addEventListener(\'DOMContentLoaded\', () => {\n' +
                scriptContent.replace(/\/\/ ÔöÇÔöÇÔöÇ/g, '// ---') +
                '\n});\n</script>';
        }
        return match;
    });
fs.writeFileSync('index.html', processed, 'utf8');
