// Recommendation Logic

window.calculateBestDevice = function (prefs) {
    const devices = [
        {
            id: 'iphone_16_pro_max',
            name: "iPhone 16 Pro Max", // Using logic for latest available flagship
            points: 0,
            traits: {
                ecosystem: ['apple'],
                intensity: ['power', 'business'],
                longevity: ['long', 'annual'],
                ai_level: ['cloud', 'native'],
                camera: ['pro_video', 'natural', 'versatile'],
                productivity: ['apple', 'microsoft'],
                form_factor: ['max'],
                gaming: ['casual', 'hardcore']
            },
            reason: "The ultimate Apple powerhouse, excelling in pro video, longevity, and intensive workloads."
        },
        {
            id: 'iphone_16_pro',
            name: "iPhone 16 Pro",
            points: 0,
            traits: {
                ecosystem: ['apple'],
                intensity: ['power', 'business', 'light'],
                longevity: ['long', 'annual'],
                ai_level: ['cloud', 'native'],
                camera: ['pro_video', 'natural'],
                productivity: ['apple', 'microsoft'],
                form_factor: ['compact'],
                gaming: ['casual', 'hardcore']
            },
            reason: "Pro-level performance and cinematic video in a compact, manageable form factor."
        },
        {
            id: 'pixel_10_pro_xl',
            name: "Google Pixel 10 Pro XL",
            points: 0,
            traits: {
                ecosystem: ['google'],
                intensity: ['power', 'business'],
                longevity: ['long'],
                ai_level: ['native'],
                camera: ['natural', 'versatile'],
                productivity: ['google'],
                form_factor: ['max'],
                gaming: ['none', 'casual']
            },
            reason: "The absolute best representation of Google's AI and computational photography with Gemini built-in."
        },
        {
            id: 'pixel_10_pro',
            name: "Google Pixel 10 Pro",
            points: 0,
            traits: {
                ecosystem: ['google'],
                intensity: ['power', 'business', 'light'],
                longevity: ['long'],
                ai_level: ['native'],
                camera: ['natural'],
                productivity: ['google'],
                form_factor: ['compact'],
                gaming: ['none', 'casual']
            },
            reason: "Flagship cameras and pure native AI smartly packed into a smaller form factor."
        },
        {
            id: 'samsung_s25_ultra',
            name: "Samsung Galaxy S25 Ultra",
            points: 0,
            traits: {
                ecosystem: ['google'],
                intensity: ['power'],
                longevity: ['long', 'annual'],
                ai_level: ['native', 'cloud'],
                camera: ['versatile', 'pro_video'],
                productivity: ['microsoft', 'google'],
                form_factor: ['max'],
                gaming: ['hardcore', 'casual']
            },
            reason: "The maximalist \"do-everything\" phone with an S-Pen, insane zoom, and hyper-productivity."
        },
        {
            id: 'grapheneos_pixel',
            name: "GrapheneOS Pixel (De-Googled)",
            points: 0,
            traits: {
                ecosystem: ['custom_rom'],
                intensity: ['light', 'business'],
                longevity: ['long'],
                ai_level: ['none'],
                camera: ['basic', 'natural'],
                productivity: ['local'],
                form_factor: ['compact', 'max'],
                gaming: ['none']
            },
            reason: "Maximum privacy baseline. No Big Tech telemetry, total digital sovereignty."
        },
        {
            id: 'z_fold_6',
            name: "Samsung Galaxy Z Fold 6",
            points: 0,
            traits: {
                ecosystem: ['google'],
                intensity: ['power', 'business'],
                longevity: ['annual'], // foldables are less durable
                ai_level: ['native', 'cloud'],
                camera: ['versatile', 'basic'],
                productivity: ['microsoft', 'google'],
                form_factor: ['foldable'],
                gaming: ['hardcore', 'casual']
            },
            reason: "A workstation in your pocket. Unmatched for multitasking, reading, and Microsoft Office."
        },
        {
            id: 'fairphone_5',
            name: "Fairphone 5",
            points: 0,
            traits: {
                ecosystem: ['google', 'custom_rom'],
                intensity: ['light'],
                longevity: ['repairable', 'long'],
                ai_level: ['none', 'cloud'],
                camera: ['basic'],
                productivity: ['local', 'google'],
                form_factor: ['compact'],
                gaming: ['none']
            },
            reason: "The ethical, repairable choice. Designed to be kept for 5+ years with easy battery swaps."
        }
    ];

    // Defaults in case prefs is missing keys
    const p = Object.assign({
        ecosystem: '',
        longevity: '',
        ai_level: '',
        camera: '',
        productivity: '',
        form_factor: '',
        gaming: '',
        intensity: ''
    }, prefs);

    // Scoring Loop
    devices.forEach(device => {
        // Base matches
        if (device.traits.ecosystem.includes(p.ecosystem)) device.points += 30;

        // Penalty if looking for privacy/custom ROM and it's heavily commercial
        if (p.ecosystem === 'custom_rom' && !device.traits.ecosystem.includes('custom_rom')) {
            device.points -= 50;
        }

        if (device.traits.form_factor.includes(p.form_factor)) device.points += 20;

        if (device.traits.intensity.includes(p.intensity)) device.points += 15;
        if (device.traits.longevity.includes(p.longevity)) device.points += 15;

        // AI 
        if (device.traits.ai_level.includes(p.ai_level)) device.points += 15;
        if (p.ai_level === 'none' && device.traits.ai_level.includes('native')) device.points -= 20;

        if (device.traits.camera.includes(p.camera)) device.points += 20;
        if (device.traits.productivity.includes(p.productivity)) device.points += 15;

        if (device.traits.gaming.includes(p.gaming)) device.points += 10;

        // Micro-additions for tiebreaking
        device.points += Math.random() * 2;
    });

    // Sort descending by points
    devices.sort((a, b) => b.points - a.points);

    return {
        winner: devices[0].name,
        reason: devices[0].reason,
        runnerUp: devices[1].name
    };
};
