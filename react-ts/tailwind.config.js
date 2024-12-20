/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "selector",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ["ui-monospace", "SFMono-Regular"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        function ({ addUtilities }) {
            addUtilities({
                ".avoid-page-break": {
                    "page-break-inside": "avoid",
                    "break-inside": "avoid", // Untuk dukungan browser modern
                },
            });
        },
    ],
};
