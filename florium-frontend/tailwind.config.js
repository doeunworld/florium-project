/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#4a6741",
                "primary-dark": "#2c4c24",
                "accent": "#d4a373",
                "background-light": "#fdfbf7",
                "background-dark": "#1c1c1a",
                "surface-light": "#f4f1ea",
                "surface-dark": "#2a2a26",
                "text-main": "#3e3e3b",
                "text-muted": "#8c8c88",
                "paper-border": "#e3e0d6",
            },
            fontFamily: {
                "display": ["Playfair Display", "serif"],
                "sans": ["Work Sans", "sans-serif"]
            },
            backgroundImage: {
                'paper-texture': "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.08\\'/%3E%3C/svg%3E')",
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.25rem",
                "2xl": "0.5rem",
                "full": "9999px"
            },
            boxShadow: {
                'journal': '2px 2px 5px 0 rgba(62, 62, 59, 0.1), -1px -1px 2px 0 rgba(255, 255, 255, 0.5)',
            }
        },
    },
    plugins: [],
}
