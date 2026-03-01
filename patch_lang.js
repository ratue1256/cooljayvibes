// Read lang.js and inject the missing fields

const fs = require('fs');

let langJs = fs.readFileSync('lang.js', 'utf8');

// I will define the missing dictionary parts
const missing = {
    en: {
        nav_login: "Login",
        compare_header: "Comparison",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Camera",
        spec_efficiency: "Efficiency",
        spec_privacy: "Privacy",
        selector_header: "Quick Selector",
        footer_rights: "© 2026 CoolJayVibe. All rights reserved.",
        footer_terms: "Terms of Service",
        footer_privacy: "Privacy Policy",
        footer_legal: "Legal Notice",
        phones_tested: "Tested & Analyzed: 2021-2026 Flagships"
    },
    fr: {
        nav_login: "Connexion",
        compare_header: "Comparaison",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Caméra",
        spec_efficiency: "Efficacité",
        spec_privacy: "Vie Privée",
        selector_header: "Sélecteur Rapide",
        footer_rights: "© 2026 CoolJayVibe. Tous droits réservés.",
        footer_terms: "Conditions d'utilisation",
        footer_privacy: "Politique de confidentialité",
        footer_legal: "Mentions légales",
        phones_tested: "Testés & Analysés : Flagships 2021-2026"
    },
    de: {
        nav_login: "Anmelden",
        compare_header: "Vergleich",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Kamera",
        spec_efficiency: "Effizienz",
        spec_privacy: "Privatsphäre",
        selector_header: "Schnellauswahl",
        footer_rights: "© 2026 CoolJayVibe. Alle Rechte vorbehalten.",
        footer_terms: "Nutzungsbedingungen",
        footer_privacy: "Datenschutzrichtlinie",
        footer_legal: "Impressum",
        phones_tested: "Getestet & Analysiert: 2021-2026 Flaggschiffe"
    },
    it: {
        nav_login: "Accedi",
        compare_header: "Confronto",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Fotocamera",
        spec_efficiency: "Efficienza",
        spec_privacy: "Privacy",
        selector_header: "Scelta Rapida",
        footer_rights: "© 2026 CoolJayVibe. Tutti i diritti riservati.",
        footer_terms: "Termini di Servizio",
        footer_privacy: "Politica sulla Privacy",
        footer_legal: "Note Legali",
        phones_tested: "Testati e Analizzati: Flagship 2021-2026"
    },
    es: {
        nav_login: "Iniciar sesión",
        compare_header: "Comparación",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Cámara",
        spec_efficiency: "Eficiencia",
        spec_privacy: "Privacidad",
        selector_header: "Selector Rápido",
        footer_rights: "© 2026 CoolJayVibe. Todos los derechos reservados.",
        footer_terms: "Términos de Servicio",
        footer_privacy: "Política de Privacidad",
        footer_legal: "Aviso Legal",
        phones_tested: "Probados y Analizados: Buques insignia 2021-2026"
    },
    pt: {
        nav_login: "Entrar",
        compare_header: "Comparação",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Câmera",
        spec_efficiency: "Eficiência",
        spec_privacy: "Privacidade",
        selector_header: "Seletor Rápido",
        footer_rights: "© 2026 CoolJayVibe. Todos os direitos reservados.",
        footer_terms: "Termos de Serviço",
        footer_privacy: "Política de Privacidade",
        footer_legal: "Aviso Legal",
        phones_tested: "Testados e Analisados: Flagships 2021-2026"
    },
    nl: {
        nav_login: "Inloggen",
        compare_header: "Vergelijking",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Camera",
        spec_efficiency: "Efficiëntie",
        spec_privacy: "Privacy",
        selector_header: "Snelle Selectie",
        footer_rights: "© 2026 CoolJayVibe. Alle rechten voorbehouden.",
        footer_terms: "Servicevoorwaarden",
        footer_privacy: "Privacybeleid",
        footer_legal: "Juridische Kennisgeving",
        phones_tested: "Getest & Geanalyseerd: 2021-2026 Vlaggenschepen"
    },
    sv: {
        nav_login: "Logga in",
        compare_header: "Jämförelse",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Kamera",
        spec_efficiency: "Effektivitet",
        spec_privacy: "Integritet",
        selector_header: "Snabbval",
        footer_rights: "© 2026 CoolJayVibe. Alla rättigheter förbehållna.",
        footer_terms: "Användarvillkor",
        footer_privacy: "Integritetspolicy",
        footer_legal: "Rättsligt Meddelande",
        phones_tested: "Testat & Analyserat: Flaggskep 2021-2026"
    },
    pl: {
        nav_login: "Zaloguj się",
        compare_header: "Porównanie",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "Kamera",
        spec_efficiency: "Wydajność",
        spec_privacy: "Prywatność",
        selector_header: "Szybki Wybór",
        footer_rights: "© 2026 CoolJayVibe. Wszelkie prawa zastrzeżone.",
        footer_terms: "Warunki świadczenia usług",
        footer_privacy: "Polityka Prywatności",
        footer_legal: "Nota Prawna",
        phones_tested: "Przetestowane i Przeanalizowane: Flagowce 2021-2026"
    },
    "zh-CN": {
        nav_login: "登录",
        compare_header: "比较",
        phone_pixel: "Pixel 10 Pro",
        phone_iphone: "iPhone 17",
        spec_camera: "照相机",
        spec_efficiency: "效能",
        spec_privacy: "隐私",
        selector_header: "快速选择",
        footer_rights: "© 2026 CoolJayVibe. 保留所有权利。",
        footer_terms: "服务条款",
        footer_privacy: "隐私政策",
        footer_legal: "法律声明",
        phones_tested: "已测试和分析的旗舰机型：2021-2026"
    }
};

let output = langJs;

for (const [lang, translations] of Object.entries(missing)) {
    // Find the lang section
    const langRegex = new RegExp(`(${lang === 'zh-CN' ? '"zh-CN"' : lang}: \\{[^}]+rights: "[^"]+")\\s*\\}`, 'g');
    if (langJs.match(langRegex)) {
        let block = "";
        for (const [k, v] of Object.entries(translations)) {
            block += `,\n        ${k}: "${v}"`;
        }
        output = output.replace(langRegex, `$1${block}\n    }`);
    }
}

fs.writeFileSync('lang.js', output, 'utf8');
console.log("Updated lang.js");
