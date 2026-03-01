const DEVICE_DATABASE = {
    phones: [
        // Google
        { id: 'pixel_10_pro_xl', name: 'Google Pixel 10 Pro XL', brand: 'Google' },
        { id: 'pixel_9_pro_xl', name: 'Google Pixel 9 Pro XL', brand: 'Google' },
        { id: 'pixel_8_pro', name: 'Google Pixel 8 Pro', brand: 'Google' },

        // Samsung
        { id: 's26_ultra', name: 'Samsung Galaxy S26 Ultra', brand: 'Samsung' },
        { id: 's25_ultra', name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung' },
        { id: 's24_ultra', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung' },

        // Apple
        { id: 'iphone_17_pro_max', name: 'Apple iPhone 17 Pro Max', brand: 'Apple' },
        { id: 'iphone_16_pro_max', name: 'Apple iPhone 16 Pro Max', brand: 'Apple' },
        { id: 'iphone_15_pro_max', name: 'Apple iPhone 15 Pro Max', brand: 'Apple' },

        // Autres Marques Haut de gamme
        { id: 'xiaomi_15_ultra', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi' },
        { id: 'honor_magic_7_pro', name: 'Honor Magic 7 Pro', brand: 'Honor' },
        { id: 'oppo_find_x8_ultra', name: 'Oppo Find X8 Ultra', brand: 'Oppo' },
        { id: 'vivo_x100_ultra', name: 'Vivo X100 Ultra', brand: 'Vivo' },
        { id: 'oneplus_14', name: 'OnePlus 14', brand: 'OnePlus' }
    ],
    laptops: [
        { id: 'macbook_pro_m5', name: 'Apple MacBook Pro M5 (Silicon)', brand: 'Apple' },
        { id: 'macbook_air_m4', name: 'Apple MacBook Air M4', brand: 'Apple' },
        { id: 'dell_xps_16', name: 'Dell XPS 16', brand: 'Dell' },
        { id: 'thinkpad_x1_carbon', name: 'Lenovo ThinkPad X1 Carbon Gen 13', brand: 'Lenovo' },
        { id: 'surface_laptop_7', name: 'Microsoft Surface Laptop 7', brand: 'Microsoft' },
        { id: 'rog_zephyrus_g16', name: 'ASUS ROG Zephyrus G16', brand: 'ASUS' },
        { id: 'razer_blade_16', name: 'Razer Blade 16', brand: 'Razer' }
    ]
};

/**
 * Calcule le meilleur appareil en fonction du workflow de l'utilisateur.
 * 
 * @param {Object} userPreferences Les choix de l'utilisateur
 * @param {string} userPreferences.ecosystem "google", "apple", "mixed", ou "none"
 * @param {string} userPreferences.ai_importance "high", "medium", ou "low"
 * @param {string} userPreferences.photo_philosophy "natural", "video_pro", ou "versatile"
 * @param {string} userPreferences.productivity "google_suite", "office365", "creative", etc.
 * @returns {Object} { winner: string, runnerUp: string, reason: string }
 */
function calculateBestDevice(userPreferences) {
    let scores = {};

    // Initialisation des scores à 0
    DEVICE_DATABASE.phones.forEach(device => scores[device.id] = 0);

    // Bonus de base pour la génération la plus récente
    scores['pixel_10_pro_xl'] += 5;
    scores['s26_ultra'] += 5;
    scores['iphone_17_pro_max'] += 5;
    scores['xiaomi_15_ultra'] += 3;

    let explanationChunks = [];

    // --- 1. Critère "Écosystème & Productivité" ---
    if (userPreferences.ecosystem === 'google' || userPreferences.productivity === 'google_suite') {
        scores['pixel_10_pro_xl'] += 30;
        scores['s26_ultra'] += 20;
        scores['s25_ultra'] += 15;
        explanationChunks.push("Votre fort usage de la suite Google (Workspace, Gmail ultra poussé, Drive) donne un avantage massif au Pixel 10 Pro XL pour son intégration native et parfaite de ces services, suivi de très près par la productivité brute du Galaxy S26 Ultra.");
    }

    if (userPreferences.ecosystem === 'apple') {
        scores['iphone_17_pro_max'] += 35;
        scores['iphone_16_pro_max'] += 25;
        explanationChunks.push("Possédant déjà un écosystème Apple complet, l'iPad/Mac/Watch, l'iPhone 17 Pro Max est le choix rationnel pour une continuité matérielle fluide. Cependant, retenez que c'est un choix d'intégration de workflow (AirDrop, Universal Control) ; l'achat pour le simple statut social est une erreur, car techniquement, la concurrence offre parfois plus de flexibilité logicielle.");
    }

    // --- 2. Critère "Intelligence Artificielle" ---
    if (userPreferences.ai_importance === 'high') {
        scores['pixel_10_pro_xl'] += 25;
        scores['s26_ultra'] += 15;
        scores['s25_ultra'] += 10;
        scores['iphone_17_pro_max'] += 5; // AI Apple souvent retardée ou géobloquée

        explanationChunks.push("Puisque l'IA (génération, résumé, aide au mail) est primordiale pour vous, le Pixel 10 Pro XL remporte haut la main la catégorie grâce à l'intégration native de Gemini Nano au cœur de l'OS. Le Samsung S26 Ultra reste un excellent second choix matériellement parlant, bien qu'il faille prendre en compte la présence de la surcouche logicielle Samsung et la transition parfois doublonne entre Bixby et Gemini.");
    }

    // --- 3. Critère "Philosophie Photo" ---
    if (userPreferences.photo_philosophy === 'natural') {
        scores['pixel_10_pro_xl'] += 20;
        scores['pixel_9_pro_xl'] += 15;
        scores['vivo_x100_ultra'] += 10;
        explanationChunks.push("Conformément à votre philosophie photographique, vous recherchez un rendu 100% naturel, au contraste juste, sans avoir à ajouter de filtres. L'algorithme de colorimétrie et de post-traitement du Pixel est inégalé sur ce point.");
    } else if (userPreferences.photo_philosophy === 'video_pro') {
        scores['iphone_17_pro_max'] += 30;
        scores['iphone_16_pro_max'] += 20;
        explanationChunks.push("En matière d'imagerie, votre exigence penche vers la vidéo professionnelle. Pour la fluidité, le mode Cinématique et un encodage ProRes parfait, l'iPhone surclasse la concurrence.");
    } else if (userPreferences.photo_philosophy === 'versatile') {
        scores['s26_ultra'] += 25;
        scores['s25_ultra'] += 20;
        scores['xiaomi_15_ultra'] += 15;
        explanationChunks.push("S'agissant de l'appareil photo, vous exigez une polyvalence totale. Le Galaxy Ultra écrase la concurrence avec sa multiplicité d'objectifs (Zoom x5, x10 pur), couplé au stylet S-Pen qui offre un flux de retouche photo/vidéo direct de haute volée.");
    }

    // Tri des scores
    const sortedDeviceIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    // Récupération du Top 2
    const winnerId = sortedDeviceIds[0];
    const runnerUpId = sortedDeviceIds[1];

    const winnerPhone = DEVICE_DATABASE.phones.find(p => p.id === winnerId);
    const runnerUpPhone = DEVICE_DATABASE.phones.find(p => p.id === runnerUpId);

    // Génération du paragraphe d'explication final personnalisé
    const finalReason = explanationChunks.join(' ');

    return {
        winner: winnerPhone.name,
        runnerUp: runnerUpPhone.name,
        reason: finalReason
    };
}

// Exemple d'utilisation :
/*
const userPrefs = {
    ecosystem: 'google',           // 'google', 'apple', 'mixed'
    productivity: 'google_suite',  // 'google_suite', 'office365', 'creative'
    ai_importance: 'high',         // 'high', 'low'
    photo_philosophy: 'natural'    // 'natural', 'video_pro', 'versatile'
};

const result = calculateBestDevice(userPrefs);
console.log(result.winner); 
console.log(result.runnerUp);
console.log(result.reason);
*/

// Export for usage in other modules or HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateBestDevice, DEVICE_DATABASE };
} else {
    window.calculateBestDevice = calculateBestDevice;
    window.DEVICE_DATABASE = DEVICE_DATABASE;
}
