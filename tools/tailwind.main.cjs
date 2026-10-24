/**
 * يُشغّل من جذر المشروع عبر npm run css
 * إعداد Tailwind للصفحات الرئيسية (index / about / thank-you).
 * منقول حرفياً عن كتلة tailwind.config التي كانت مضمّنة في تلك الصفحات،
 * حتى يخرج ملف CSS مطابق تماماً لما كان الـ CDN يولّده في المتصفح.
 */
module.exports = {
  content: [
    './index.html',
    './about.html',
    './thank-you.html',
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
        },
      },
      fontFamily: {
        sans: ['Cairo', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
