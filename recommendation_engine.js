// Auto-generated Recommendation Engine

window.calculateBestDevice = function (prefs) {
    const devices = [
        {
            id: "iphone_17_pro_max",
            name: "iPhone 17 Pro Max",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "The ultimate Apple powerhouse, excelling in pro video."
        },
        {
            id: "iphone_17_pro",
            name: "iPhone 17 Pro",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The ultimate Apple powerhouse, excelling in pro video."
        },
        {
            id: "iphone_17",
            name: "iPhone 17",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_16_pro_max",
            name: "iPhone 16 Pro Max",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "The ultimate Apple powerhouse, excelling in pro video."
        },
        {
            id: "iphone_16_pro",
            name: "iPhone 16 Pro",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The ultimate Apple powerhouse, excelling in pro video."
        },
        {
            id: "iphone_16",
            name: "iPhone 16",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_15_pro_max",
            name: "iPhone 15 Pro Max",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_15_pro",
            name: "iPhone 15 Pro",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_15",
            name: "iPhone 15",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_14_pro_max",
            name: "iPhone 14 Pro Max",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_14_pro",
            name: "iPhone 14 Pro",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_14",
            name: "iPhone 14",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_13_pro_max",
            name: "iPhone 13 Pro Max",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_13_pro",
            name: "iPhone 13 Pro",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "iphone_13",
            name: "iPhone 13",
            points: 0,
            traits: {"ecosystem": ["apple"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["apple", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s26_ultra",
            name: "Galaxy S26 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "The maximalist do-everything phone with an S-Pen, insane zoom."
        },
        {
            id: "galaxy_s26plus",
            name: "Galaxy S26+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s26",
            name: "Galaxy S26",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s25_ultra",
            name: "Galaxy S25 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "The maximalist do-everything phone with an S-Pen, insane zoom."
        },
        {
            id: "galaxy_s25plus",
            name: "Galaxy S25+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s25",
            name: "Galaxy S25",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s24_ultra",
            name: "Galaxy S24 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s24plus",
            name: "Galaxy S24+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s24",
            name: "Galaxy S24",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s23_ultra",
            name: "Galaxy S23 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s23plus",
            name: "Galaxy S23+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s23",
            name: "Galaxy S23",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s22_ultra",
            name: "Galaxy S22 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s22plus",
            name: "Galaxy S22+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s22",
            name: "Galaxy S22",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s21_ultra",
            name: "Galaxy S21 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s21plus",
            name: "Galaxy S21+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "galaxy_s21",
            name: "Galaxy S21",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_10_pro_xl",
            name: "Pixel 10 Pro XL",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_10_pro",
            name: "Pixel 10 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_10",
            name: "Pixel 10",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_9_pro_xl",
            name: "Pixel 9 Pro XL",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_9_pro",
            name: "Pixel 9 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_9",
            name: "Pixel 9",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "The absolute best representation of Google AI and computational photography."
        },
        {
            id: "pixel_8_pro",
            name: "Pixel 8 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_8",
            name: "Pixel 8",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_7_pro",
            name: "Pixel 7 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_7",
            name: "Pixel 7",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_6_pro",
            name: "Pixel 6 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "pixel_6",
            name: "Pixel 6",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Solid, reliable, and capable choice that matches your unique criteria."
        },
        {
            id: "xiaomi_15_ultra",
            name: "Xiaomi 15 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_15_pro",
            name: "Xiaomi 15 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_15",
            name: "Xiaomi 15",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_14_ultra",
            name: "Xiaomi 14 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_14_pro",
            name: "Xiaomi 14 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_14",
            name: "Xiaomi 14",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_13_ultra",
            name: "Xiaomi 13 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_13_pro",
            name: "Xiaomi 13 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_13",
            name: "Xiaomi 13",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_12s_ultra",
            name: "Xiaomi 12S Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_12_pro",
            name: "Xiaomi 12 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_12",
            name: "Xiaomi 12",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_11_ultra",
            name: "Xiaomi 11 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_11_pro",
            name: "Xiaomi 11 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "xiaomi_11",
            name: "Xiaomi 11",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_7_pro",
            name: "Honor Magic 7 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_7",
            name: "Honor Magic 7",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_6_rsr",
            name: "Honor Magic 6 RSR",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_6_pro",
            name: "Honor Magic 6 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_6",
            name: "Honor Magic 6",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_5_ultimate",
            name: "Honor Magic 5 Ultimate",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_5_pro",
            name: "Honor Magic 5 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_5",
            name: "Honor Magic 5",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_4_ultimate",
            name: "Honor Magic 4 Ultimate",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_4_pro",
            name: "Honor Magic 4 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_4",
            name: "Honor Magic 4",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_3_proplus",
            name: "Honor Magic 3 Pro+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_3_pro",
            name: "Honor Magic 3 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["long"], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "honor_magic_3",
            name: "Honor Magic 3",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x8_ultra",
            name: "Oppo Find X8 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x8_pro",
            name: "Oppo Find X8 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x8",
            name: "Oppo Find X8",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x7_ultra",
            name: "Oppo Find X7 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x7",
            name: "Oppo Find X7",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x6_pro",
            name: "Oppo Find X6 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x6",
            name: "Oppo Find X6",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x5_pro",
            name: "Oppo Find X5 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x5",
            name: "Oppo Find X5",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oppo_find_x3_pro",
            name: "Oppo Find X3 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x100_ultra",
            name: "Vivo X100 Ultra",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x100_pro",
            name: "Vivo X100 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x100",
            name: "Vivo X100",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x90_proplus",
            name: "Vivo X90 Pro+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x90_pro",
            name: "Vivo X90 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x90",
            name: "Vivo X90",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x80_pro",
            name: "Vivo X80 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x80",
            name: "Vivo X80",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "vivo_x70_proplus",
            name: "Vivo X70 Pro+",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["max"], "gaming": ["hardcore", "casual"]},
            reason: "Incredible hardware innovation, insane speeds, and competitive tech."
        },
        {
            id: "oneplus_14",
            name: "OnePlus 14",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_13",
            name: "OnePlus 13",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_12",
            name: "OnePlus 12",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_11",
            name: "OnePlus 11",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_10_pro",
            name: "OnePlus 10 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": ["annual", "long"], "ai_level": ["native", "cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_9_pro",
            name: "OnePlus 9 Pro",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["zoom", "pro_video"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["hardcore", "casual"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "oneplus_9",
            name: "OnePlus 9",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["cloud"], "camera": ["basic", "natural"], "productivity": ["google", "microsoft"], "form_factor": ["compact"], "gaming": ["casual", "none"]},
            reason: "Fast, smooth, oxygen OS experience with top-tier performance."
        },
        {
            id: "grapheneos_pixel",
            name: "GrapheneOS Pixel",
            points: 0,
            traits: {"ecosystem": ["custom_rom"], "intensity": ["light", "business"], "longevity": [], "ai_level": ["none"], "camera": ["basic", "natural"], "productivity": ["local"], "form_factor": ["compact"], "gaming": ["casual", "none", "none"]},
            reason: "Maximum privacy baseline. No Big Tech telemetry."
        },
        {
            id: "fairphone_5",
            name: "Fairphone 5",
            points: 0,
            traits: {"ecosystem": ["custom_rom"], "intensity": [], "longevity": ["repairable", "long"], "ai_level": ["none"], "camera": [], "productivity": ["local"], "form_factor": ["compact"], "gaming": ["none"]},
            reason: "The ethical, repairable choice. Keep it for 5+ years."
        },
        {
            id: "samsung_galaxy_z_fold_6",
            name: "Samsung Galaxy Z Fold 6",
            points: 0,
            traits: {"ecosystem": ["google", "custom_rom"], "intensity": ["power", "business"], "longevity": [], "ai_level": ["cloud"], "camera": [], "productivity": ["google", "microsoft"], "form_factor": ["foldable"], "gaming": []},
            reason: "A workstation in your pocket. Unmatched for multitasking."
        }
    ];

    const p = Object.assign({
        ecosystem: '', longevity: '', ai_level: '', camera: '',
        productivity: '', form_factor: '', gaming: '', intensity: ''
    }, prefs);

    devices.forEach(device => {
        if (device.traits.ecosystem.includes(p.ecosystem)) device.points += 30;
        if (p.ecosystem === 'custom_rom' && !device.traits.ecosystem.includes('custom_rom')) device.points -= 50; 
        if (device.traits.form_factor.includes(p.form_factor)) device.points += 20;
        if (device.traits.intensity.includes(p.intensity)) device.points += 15;
        if (device.traits.longevity.includes(p.longevity)) device.points += 15;
        if (device.traits.ai_level.includes(p.ai_level)) device.points += 15;
        if (p.ai_level === 'none' && device.traits.ai_level.includes('native')) device.points -= 20;
        if (device.traits.camera.includes(p.camera)) device.points += 20;
        if (device.traits.productivity.includes(p.productivity)) device.points += 15;
        if (device.traits.gaming.includes(p.gaming)) device.points += 10;
        
        let isNewer = false;
        ['17', '16', '26', '25', '10', '15', '9'].forEach(val => {
            if (device.name.includes(val)) isNewer = true;
        });
        if (isNewer) device.points += 5;
        device.points += Math.random() * 2;
    });

    devices.sort((a, b) => b.points - a.points);
    return { winner: devices[0].name, reason: devices[0].reason, runnerUp: devices[1].name };
};
