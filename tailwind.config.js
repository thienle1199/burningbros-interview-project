/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: "Pretendard Variable",
      },
      fontSize: {
        headline1: ["24px", { fontWeight: 600, lineHeight: "30px" }],
        headline2: ["20px", { fontWeight: 600, lineHeight: "24px" }],
        headline3: ["18px", { fontWeight: 600, lineHeight: "22px" }],
        headline4: ["16px", { fontWeight: 600, lineHeight: "20px" }],
        body1: ["16px", { fontWeight: 400, lineHeight: "20px" }],
        body2: ["14px", { fontWeight: 400, lineHeight: "18px" }],
      },
      boxShadow: {
        basic:
          "filter: drop-shadow(2px 6px 12px rgb(0 0 0 / 0.12)) drop-shadow(0 0 4px rgb(0 0 0 / 0.12))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      "primary-100": "#6713EF",
      "primary-90": "#762bf1",
      "primary-80": "#8542f2",
      "primary-70": "#955af4",
      "primary-60": "#a471f5",
      "primary-50": "#b389f7",
      "primary-40": "#c2a1f9",
      "primary-30": "#d1b8fa",
      "primary-20": "#e1d0fc",
      "primary-10": "#f0e7fd",
      "neutral-0": "#202020",
      "neutral-1": "#353C49",
      "neutral-2": "#505866",
      "neutral-3": "#B1B8C0",
      "neutral-4": "#D9E0E8",
      "neutral-5": "#E9EDF1",
      "neutral-6": "#F2F4F6",
      "neutral-7": "#F8F8F9",
      "text-0": "#353C49",
      "text-1": "#676E7B",
      "text-2": "#9198A0",
      "text-3": "#B1B8C0",
      "text-4": "#D1D6DA",
      "text-5": "#FFFFFF",
      transparent: "transparent",
      white: "#fff",
    },
  },
  plugins: [],
};
