import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mid-xl": "1440px", // x 900
        "2xl": "1536px",
        // 1600 x 900px,
        // 1920x 1080px,
        "3xl": "2560px", // x 1440 (for PC), 1600 (for MCBK Air13)
        // "4xl": "2880px", // x 1800 MCBK 15
        // "5xl": "3072px", // x 1920 MCBK Pro 16
        // "6xl": "3840px", // 2160 , 4K PC
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-x": "gradient-x 4s ease infinite",
        "gradient-y": "gradient-y 4s ease infinite",
        "gradient-xy": "gradient-xy 4s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 100%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
