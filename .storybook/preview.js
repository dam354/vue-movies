import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "blue",
    values: [
      {
        name: "blue",
        value: "#10141E",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
