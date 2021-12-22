module.exports = {
    plugins: [
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
    ],
    mode: 'jit',
    purge: ["./pages/**/*.{js.ts.jsx.tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
}