/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      wedey: "Poppins, monospace",
    },

    extend: {
      backgroundImage: {
        linearGradient:
          "linear-gradient(-45deg, #ee7752, #ff006275, #23a6d5, #23d5ab)",
        aboutGradient: "linear-gradient(45deg, #06bae4, #b9d644, #f37244)",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 9s ease infinite",
      },
      backgroundSize: {
        "size-200": "400% 400%",
      },
    },
  },
  plugins: [],
};

// animation: {
//   backgroundChange: "backgroundChange 5s ease infinite",
// },
// keyframes: {
//   backgroundChange: {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
// },

// },
