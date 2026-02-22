const fs = require('fs');
const path = require('path');

const files = ['index.html', 'configurator.html', 'reviews.html', 'guides.html', 'manifesto.html', 'comparison.html', 'compliance.html'];

const headerReplacement = `            <div class="flex items-center gap-4">
                <a href="https://x.com/cooljayvibes" target="_blank" class="hidden md:flex items-center gap-2 text-white hover:text-text-secondary transition-colors text-sm font-medium">
                    <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965h-1.92z"/></svg>
                    Follow
                </a>
                
                <div class="relative group">
                    <button class="flex items-center gap-1 text-white hover:text-text-secondary transition-colors text-sm font-medium">
                        <span class="material-symbols-outlined text-[18px]">language</span>
                        <span id="current-lang-display" class="uppercase">EN</span>
                        <span class="material-symbols-outlined text-[14px]">expand_more</span>
                    </button>
                    <div class="absolute right-0 top-full mt-2 w-48 bg-card-dark border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <div class="py-2 flex flex-col max-h-64 overflow-y-auto">
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="en">English</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="fr">Français</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="de">Deutsch</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="it">Italiano</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="es">Español</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="pt">Português</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="nl">Nederlands</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="sv">Svenska</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="pl">Polski</button>
                            <button class="lang-switch px-4 py-2 text-left text-sm text-text-secondary hover:bg-white/5 hover:text-white flex items-center justify-between" data-lang="zh-CN">中文 (Simplified)</button>
                        </div>
                    </div>
                </div>

                <button class="md:hidden text-white hover:text-text-secondary">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>`;

const cssString = `
        /* Auto Translate Hiding */
        body { top: 0px !important; }
        .skiptranslate { display: none !important; }
        .goog-te-banner-frame { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #google_translate_element { display: none !important; }
    </style>`;

const jsString = `
    <!-- Language Script -->
    <div id="google_translate_element" style="display:none;"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let currentLang = localStorage.getItem('cooljay_lang');
            
            if (!currentLang) {
                const userLang = navigator.language || navigator.userLanguage;
                const baseLang = userLang.split('-')[0];
                const supportedLangs = ['en', 'fr', 'de', 'it', 'es', 'pt', 'nl', 'sv', 'pl', 'zh'];
                currentLang = supportedLangs.includes(baseLang) ? baseLang : 'en';
                
                if (currentLang !== 'en') {
                    const gLang = currentLang === 'zh' ? 'zh-CN' : currentLang;
                    document.cookie = \`googtrans=/en/\${gLang}; path=/\`;
                }
                localStorage.setItem('cooljay_lang', currentLang);
                if (currentLang !== 'en') {
                    location.reload();
                }
            }

            const displayLang = currentLang === 'zh-CN' || currentLang === 'zh' ? 'ZH' : currentLang.toUpperCase();
            const displayElement = document.getElementById('current-lang-display');
            if (displayElement) displayElement.innerText = displayLang;

            document.querySelectorAll('.lang-switch').forEach(btn => {
                const btnLang = btn.dataset.lang;
                if (btnLang === currentLang || (currentLang === 'zh' && btnLang === 'zh-CN')) {
                    btn.classList.remove('text-text-secondary');
                    btn.classList.add('text-white', 'font-bold');
                    btn.innerHTML += '<span class="material-symbols-outlined text-[16px] ml-2">check</span>';
                }

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetLang = e.currentTarget.dataset.lang;
                    
                    if(targetLang === 'en') {
                        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        document.cookie = \`googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.\${location.hostname}; path=/;\`;
                    } else {
                        document.cookie = \`googtrans=/en/\${targetLang}; path=/\`;
                        document.cookie = \`googtrans=/en/\${targetLang}; domain=.\${location.hostname}; path=/\`;
                    }
                    
                    localStorage.setItem('cooljay_lang', targetLang);
                    location.reload();
                });
            });
        });
    </script>
</body>`;

for(const file of files) {
    if(!fs.existsSync(file)) {
        console.log("Missing:", file);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');

    // Remove login link
    content = content.replace(/<a[^>]*href="login\.html"[^>]*>Login<\/a>\s*/g, '');
    content = content.replace(/<a[^>]*href="\#"[^>]*>Login<\/a>\s*/g, '');

    // Replace Header
    const headerRegex = /<div class="flex items-center gap-4">[\s\S]*?<\/header>/;
    if(headerRegex.test(content)) {
        content = content.replace(headerRegex, headerReplacement + '\n        </header>');
    }

    // Add CSS
    if(!content.includes('goog-te-banner-frame')) {
        content = content.replace(/<\/style>/, cssString);
    }

    // Add JS
    if(!content.includes('google_translate_element')) {
        content = content.replace(/<\/body>/, jsString);
    }
    
    // Add X button to footer
    if (content.includes('<footer') && !content.includes('M18.244 2.25h3.308l-7.227 8.26')) {
        const footerRegex = /(<footer[^>]*>)([\s\S]*?)(<\/footer>)/;
        const match = content.match(footerRegex);
        if (match) {
            const xFooterHtml = `
            <div class="flex flex-1 items-center justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
                <a href="https://x.com/cooljayvibes" target="_blank" class="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
                    <svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965h-1.92z"/></svg>
                    Follow on X
                </a>
            </div>`;
            const footerContent = match[2];
            let newFooterContent = footerContent;
            
            // Re-arrange slightly logic
            newFooterContent = footerContent + xFooterHtml;
            
            content = content.replace(footerRegex, `$1${newFooterContent}$3`);
        }
    }

    fs.writeFileSync(file, content);
}
console.log("Successfully updated all files.");
