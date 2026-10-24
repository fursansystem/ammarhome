/**
 * إعداد Tailwind الموحّد لكل صفحات الموقع الثابت.
 * يُشغّل من جذر المشروع: npm run css
 *
 * لوحة brand هي لون هوية عمار هوم ‎#355C8A نفسه المعلن في
 * <meta name="theme-color"> في كل صفحة. كانت صفحات المشاريع
 * تستخدم لوحة زرقاء مختلفة (‎#0069e0) فوُحّدت هنا.
 */
module.exports = {
  content: [
    './index.html',
    './about.html',
    './thank-you.html',
    './projects/*.html',
    './assets/js/main.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2f8',
          100: '#d9e1ee',
          200: '#b7c6dc',
          300: '#8aa4c4',
          400: '#5f83ac',
          500: '#3d6a99',
          600: '#355C8A',
          700: '#2d4f78',
          800: '#27466A',
          900: '#1f3853',
          950: '#16293d',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
