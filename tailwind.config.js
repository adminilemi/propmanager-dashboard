/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#5f259f',
        mainLight: '#e0def7',
        mainDark: '#100a55',
        black: '#1e1e1e',
        white: '#fff',
        grey: {
          DEFAULT: '#394150',
          100: '#565c69',
          150: '#bdc0ce',
          200: '#f4f5f8',
          250: '#e5e7ef',
          300: '#7e8494',
          400: '#f7f7fd',
        },
        Grey2: '#565c69',
        Grey3: '#bdc0ce',
        Grey4: '#f4f5f8',
        Grey5: '#e5e7ef',
        Grey6: '#7e8494',
        Grey7: '#f7f7fd',
        Line: '#e0def7',
        rated: '#ffb154',
        positive: '#27ae60',
        negative: '#fd0000',
        receiver: '#eeeff2',
        sender: '#3b70fb',
      },
    },
  },
  plugins: [],
};
