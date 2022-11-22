const defaultTheme = require('tailwindcss/defaultTheme');
const { mainColor } = require("./tailwind/colors.js");
const { spaceSizes } = require("./tailwind/sizes.js");

module.exports = {
  mode: 'jit', //JITモードを有効化
  // パージの対象ファイルを設定
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      extend: {
        spacing: spaceSizes,
      },
      colors: Object.assign(mainColor),
      screens: {
        small: "750px",
        medium: "960px",
        large: "1200px",
        xlarge: "1600px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
