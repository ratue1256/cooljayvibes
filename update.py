import re

# 1. Update configurator.html
with open('configurator.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert recommendation_engine script if missing
if 'recommendation_engine.js' not in content:
    content = content.replace('<script src="lang.js"></script>', '<script src="recommendation_engine.js"></script>\n<script src="lang.js"></script>')

new_script = """    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const nextBtn = document.getElementById('btn-next');
            const stepLabel = document.querySelector('.text-xs');
            const stepTitle = document.querySelector('h3');
            const cardContainer = document.querySelector('.apple-card');
            const btnContainer = document.querySelector('.grid.grid-cols-1');

            let currentStep = 0;
            let selectedOption = null;
            
            const userPrefs = {
                ecosystem: '',
                productivity: '',
                ai_importance: '',
                photo_philosophy: ''
            };

            const steps = [
                {
                    title: "What's your primary operating system?",
                    options: [
                        { icon: 'laptop_mac', text: 'macOS / iOS', value: 'apple', key: 'ecosystem' },
                        { icon: 'desktop_windows', text: 'Windows / Android', value: 'google', key: 'ecosystem' }
                    ]
                },
                {
                    title: "How important is Native AI to your workflow?",
                    options: [
                        { icon: 'memory', text: 'Crucial (Generation, Summaries)', value: 'high', key: 'ai_importance' },
                        { icon: 'bolt', text: 'Nice to have / Not important', value: 'low', key: 'ai_importance' }
                    ]
                },
                {
                    title: "What is your photo philosophy?",
                    options: [
                        { icon: 'photo_camera', text: '100% Natural, No filters', value: 'natural', key: 'photo_philosophy' },
                        { icon: 'videocam', text: 'Pro Video & Cinematic', value: 'video_pro', key: 'photo_philosophy' },
                        { icon: 'zoom_in', text: 'Total Versatility & Zoom', value: 'versatile', key: 'photo_philosophy' }
                    ]
                },
                {
                    title: "What represents your main productivity suite?",
                    options: [
                        { icon: 'cloud', text: 'Google Suite (Docs, Drive)', value: 'google_suite', key: 'productivity' },
                        { icon: 'palette', text: 'Creative / Office', value: 'creative', key: 'productivity' }
                    ]
                }
            ];

            function resetButtons() {
                const allBtns = document.querySelectorAll('.os-btn');
                allBtns.forEach(b => {
                    b.classList.remove('border-primary', 'bg-primary/10');
                    b.classList.add('border-white/10');
                    b.querySelector('span.material-symbols-outlined').classList.remove('text-primary');
                    b.querySelector('span.material-symbols-outlined').classList.add('text-white');
                });
                selectedOption = null;
                nextBtn.disabled = true;
                nextBtn.classList.add('bg-white/50', 'cursor-not-allowed');
                nextBtn.classList.remove('bg-white', 'hover:bg-gray-200');
            }

            function loadStep(stepIndex) {
                const stepData = steps[stepIndex];
                stepLabel.innerText = 'Step ' + (stepIndex + 1) + ' of ' + steps.length;
                stepTitle.innerText = stepData.title;
                
                btnContainer.innerHTML = '';
                
                stepData.options.forEach((opt) => {
                    const btn = document.createElement('button');
                    btn.className = 'os-btn flex flex-col items-center justify-center p-8 rounded-[1.5rem] border border-white/10 hover:border-primary hover:bg-primary/5 transition-all group';
                    btn.innerHTML = `<span class="material-symbols-outlined text-4xl mb-4 group-hover:text-primary transition-colors text-white">${opt.icon}</span><span class="font-semibold text-center text-white">${opt.text}</span>`;
                    
                    btn.addEventListener('click', () => {
                        resetButtons();
                        
                        btn.classList.remove('border-white/10');
                        btn.classList.add('border-primary', 'bg-primary/10');
                        const icon = btn.querySelector('span.material-symbols-outlined');
                        icon.classList.remove('text-white');
                        icon.classList.add('text-primary');
                        
                        selectedOption = opt;
                        
                        nextBtn.disabled = false;
                        nextBtn.classList.remove('bg-white/50', 'cursor-not-allowed');
                        nextBtn.classList.add('bg-white', 'hover:bg-gray-200');
                    });
                    
                    btnContainer.appendChild(btn);
                });

                resetButtons();
            }

            nextBtn.addEventListener('click', () => {
                if (!selectedOption) return;
                
                userPrefs[selectedOption.key] = selectedOption.value;

                nextBtn.innerHTML = '<span class="material-symbols-outlined animate-spin text-sm">progress_activity</span> Loading...';
                nextBtn.disabled = true;

                setTimeout(() => {
                    currentStep++;

                    if (currentStep < steps.length) {
                        nextBtn.innerHTML = 'Next Step';
                        loadStep(currentStep);
                    } else {
                        // Show final analysis
                        cardContainer.innerHTML = `
                            <div class="flex flex-col items-center justify-center text-center py-12 animate-pulse">
                                <span class="material-symbols-outlined text-6xl text-primary mb-6 animate-spin">memory</span>
                                <h3 class="text-3xl font-bold text-white mb-2">Analyzing the matrix...</h3>
                                <p class="text-text-secondary">Correlating millions of data points across global supply chains.</p>
                            </div>
                        `;

                        setTimeout(() => {
                            let result = window.calculateBestDevice ? window.calculateBestDevice(userPrefs) : { winner: "Pixel 10 Pro XL", reason: "AI Focus", runnerUp: "iPhone 17 Pro Max" };
                            
                            cardContainer.classList.remove('p-10');
                            cardContainer.classList.add('p-0');

                            cardContainer.innerHTML = `
                                <div class="bg-[#2c2c2e]/50 border-b border-white/5 p-8 text-center bg-gradient-to-b from-primary/10 to-transparent rounded-t-[2.5rem]">
                                    <div class="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                                        Optimization Complete
                                    </div>
                                    <h3 class="text-3xl font-bold text-white mb-2">The Recommended Workflow</h3>
                                </div>
                                <div class="p-8">
                                    <div class="space-y-6">
                                        <div class="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10">
                                            <div class="w-16 h-16 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                                                <span class="material-symbols-outlined text-3xl">emoji_events</span>
                                            </div>
                                            <div>
                                                <div class="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Winner</div>
                                                <h4 class="text-lg font-bold text-white">${result.winner}</h4>
                                                <p class="text-sm text-text-secondary mt-1">${result.reason}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10">
                                            <div class="w-16 h-16 rounded-xl bg-gray-200 border border-white/10 flex items-center justify-center text-black shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                                                <span class="material-symbols-outlined text-3xl">star_half</span>
                                            </div>
                                            <div>
                                                <div class="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Runner Up</div>
                                                <h4 class="text-lg font-bold text-white">${result.runnerUp}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-10 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-white/5 pt-8">
                                        <a href="guides.html" class="text-text-secondary hover:text-white transition-colors text-sm font-medium">View Migration Guides &rarr;</a>
                                        <button onclick="window.location.reload()" class="bg-primary hover:bg-[#47a5ff] text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 w-full md:w-auto justify-center">
                                            <span class="material-symbols-outlined text-[20px]">refresh</span>
                                            Start Over
                                        </button>
                                    </div>
                                </div>
                            `;
                        }, 2500);
                    }

                }, 400);
            });

            // Initial load
            loadStep(0);
        });
    </script>"""

# Find the start of the <script> block
script_start = content.find('    <script>\n        document.addEventListener(\'DOMContentLoaded\'')
script_end = content.find('</script>\n<script src="lang.js"></script>')

if script_start != -1 and script_end != -1:
    content = content[:script_start] + new_script + content[script_end + len('</script>'):]
    with open('configurator.html', 'w', encoding='utf-8') as f:
        f.write(content)
else:
    print("Could not find script block bounds in configurator.html")


# 2. Update guides.html
with open('guides.html', 'r', encoding='utf-8') as f:
    guidesContent = f.read()

guidesContent = guidesContent.replace('<span class="material-symbols-outlined text-4xl mb-6 text-white">apple</span>', '<svg class="w-9 h-9 mb-6 text-white fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.6 88.5-84.6 100.8-121.2-46.7-20.9-59.5-68.5-59.9-89.4zM258 87.7c26.9-32.9 23.3-71.1 22.4-74.5-27.1 1.4-60.6 18.2-78.1 39.3-15.3 18.2-22.9 44.6-21.7 69.4 30.6 2.3 58-15.5 77.4-34.2z"/></svg>')

guidesHtmlReplacement = """            <div class="w-full max-w-3xl grid grid-cols-1 gap-6 text-left" id="guides-container">
                <div
                    class="apple-card rounded-[2rem] p-8 flex flex-col group cursor-pointer hover:border-emerald-500/50" onclick="toggleGuide('android-to-ios')">
                    <span class="material-symbols-outlined text-4xl mb-6 text-emerald-400">android</span>
                    <h3 class="text-2xl font-bold text-white mb-2">Android to iOS</h3>
                    <p class="text-text-secondary text-sm leading-relaxed mb-4">Understanding iCloud, breaking free from Google Drive, and setting up an Apple ID the right way.</p>
                    
                    <div id="guide-android-to-ios" class="hidden mt-4 pt-4 border-t border-white/10 text-white/80 space-y-4 text-sm animate-pulse-fade">
                        <p><strong class="text-white">1. Data Backup:</strong> Instead of relying on 'Move to iOS' which can be bugged with large WhatsApp files, manually backup Google Drive files using Google Takeout. Use WhatsApp's native iOS transfer feature.</p>
                        <p><strong class="text-white">2. Password Management:</strong> Do not trap yourself in iCloud Keychain if you ever plan to switch again. Export from Google Password Manager to ProtonPass or Bitwarden before switching.</p>
                        <p><strong class="text-white">3. Two-Factor Authentication:</strong> Before resetting your Android, transfer your Google Authenticator or Authy codes to the iOS device or use Ente Auth for cross-platform freedom.</p>
                        <button class="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full font-semibold mt-2 hover:bg-emerald-500/30 transition-colors cursor-default">View Deep Dive Article</button>
                    </div>
                </div>
                
                <div class="apple-card rounded-[2rem] p-8 flex flex-col group cursor-pointer hover:border-text-secondary/50" onclick="toggleGuide('ios-to-android')">
                    <svg class="w-9 h-9 mb-6 text-white fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.6 88.5-84.6 100.8-121.2-46.7-20.9-59.5-68.5-59.9-89.4zM258 87.7c26.9-32.9 23.3-71.1 22.4-74.5-27.1 1.4-60.6 18.2-78.1 39.3-15.3 18.2-22.9 44.6-21.7 69.4 30.6 2.3 58-15.5 77.4-34.2z"/></svg>
                    <h3 class="text-2xl font-bold text-white mb-2">iOS to Android</h3>
                    <p class="text-text-secondary text-sm leading-relaxed mb-4">The complete guide to migrating without losing iMessage groups, photos, or your sanity.</p>
                    
                    <div id="guide-ios-to-android" class="hidden mt-4 pt-4 border-t border-white/10 text-white/80 space-y-4 text-sm animate-pulse-fade">
                        <p><strong class="text-white">1. The iMessage Trap:</strong> Deregister iMessage online using Apple's official tool <em class="text-primary cursor-pointer hover:underline">before</em> moving your SIM card. Otherwise, your texts from iPhone users will get stuck in Apple's servers.</p>
                        <p><strong class="text-white">2. Photos & iCloud:</strong> Use Apple's official "Transfer a copy of your data" via privacy.apple.com to directly port your entire iCloud Photos library to Google Photos overnight.</p>
                        <p><strong class="text-white">3. Notes & Reminders:</strong> Apple Notes lock-in is real. Use Google Keep or Notion. You will have to manually copy crucial notes, as Apple provides no bulk export option.</p>
                        <button class="bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full font-semibold mt-2 hover:bg-gray-500/30 transition-colors cursor-default">View Deep Dive Article</button>
                    </div>
                </div>
            </div>"""

guides_start = guidesContent.find('<div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 text-left">')
guides_end = guidesContent.find('</main>')

if guides_start != -1 and guides_end != -1:
    guidesContent = guidesContent[:guides_start] + guidesHtmlReplacement + "\n        " + guidesContent[guides_end:]
    
    toggle_script = """    <script>
        function toggleGuide(id) {
            const el = document.getElementById('guide-' + id);
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    </script>
</body>"""
    if 'function toggleGuide' not in guidesContent:
        guidesContent = guidesContent.replace('</body>', toggle_script)

    with open('guides.html', 'w', encoding='utf-8') as f:
        f.write(guidesContent)
else:
    print("Could not find dynamic bounds in guides.html")

print("Python update successful")
