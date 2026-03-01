const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix the CSS for title & card animations
html = html.replace('.anim-ready.anim-go {', '.anim-ready.anim-go,\n        #hero-headline.anim-go {');

// 2. Fix the HTML of the hero text to guarantee visibility of the second line on mobile WebKit
html = html.replace(
    'class="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] text-gradient-subtle">',
    'class="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] anim-ready text-white">');

html = html.replace(
    '<span data-i18n="hero_line1">Don\'t buy a phone.</span><br /><span class="opacity-60"',
    '<span class="text-gradient-subtle" style="display:inline-block;" data-i18n="hero_line1">Don\'t buy a phone.</span><br /><span class="opacity-60 text-[#A1A1AA]"'
);

// 3. Make sure the cards have the animation class statically in HTML to prevent flashes
// We will replace all `<section class="... apple-card">` with `<section class="... apple-card anim-card">` for the small ones.
html = html.replace(
    /class="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-\[2\.5rem\] bg-card-dark border border-white\/5 flex flex-col relative group overflow-hidden shadow-lg apple-card/g,
    'class="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-[2.5rem] bg-card-dark border border-white/5 flex flex-col relative group overflow-hidden shadow-lg apple-card anim-card"'
);

// 4. Update IntersectionObserver to be more forgiving (threshold 0.05 instead of 0.12)
// Also ensure any element that starts visible immediately gets triggered even without scroll.
html = html.replace(/threshold: 0.12/g, "threshold: 0.02");

// 5. Hardcode the stagger animation delay in HTML so we don't rely only on JS
let cardMatchCount = 0;
html = html.replace(/anim-card"/g, (match) => {
    cardMatchCount++;
    // The delay increments for each matched small card
    const delay = cardMatchCount * 0.1;
    return `anim-card" style="animation-delay: ${delay}s"`;
});

// Since the JS also adds it, let's remove the JS part that adds animationDelay to prevent doubling up issues.
html = html.replace(
    /\/\/ Stagger cards \(exclude hero card\)[\s\S]*?\}\);/g,
    "" // removed the dynamic stagger JS loop
);

// 6. Ensure hero headline gets anim-go
// (It's already in the JS, but let's double check)
html = html.replace(
    /requestAnimationFrame\(\(\) => \{\s*headline\.classList\.add\('anim-go'\);\s*\}\);/,
    "setTimeout(() => { headline.classList.add('anim-go'); }, 50);" // setTimeout is often more reliable on initial paint than requestAnimationFrame across all mobile browsers
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed visibility and animations patches applied.');
