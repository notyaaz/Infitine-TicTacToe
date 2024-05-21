/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                backgroundColor: "#000518",
                greenColor: "#4fbf87",
                redColor: "#ce3b33",
                lightGray: "#bdc1c3",
                boxBackgroundColor: "#0f221d",
                bordersColor: "#2f383e",
            },
            fontFamily: {},
        },
    },
    plugins: [],
};
