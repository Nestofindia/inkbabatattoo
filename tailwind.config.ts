import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // Open Sans Condensed Light - for headers
        heading: ['Open Sans Condensed', 'sans-serif'],
        // Open Sans Regular - for main body text
        body: ['Open Sans', 'sans-serif'],
        // Open Sans Condensed Bold - for logo secondary text and sub-headings
        logo: ['Open Sans Condensed', 'sans-serif'],
        // Seminole Regular - for special headers
        special: ['Seminole', 'serif'],
      },
      fontWeight: {
        'condensed-light': '300',
        'condensed-semibold': '600',
        'condensed-bold': '700',
      },
      colors: {
        // New color palette
        pastel: {
          50: '#FEFCF8',
          100: '#FAD1A2',
          200: '#F8C894',
          300: '#F6BF86',
          400: '#F4B678',
          500: '#F2AD6A',
          600: '#E09A5C',
          700: '#CE874E',
          800: '#BC7440',
          900: '#AA6132',
        },
        accent: {
          50: '#F9F0E6',
          100: '#F2E1CC',
          200: '#EBD2B3',
          300: '#E5C399',
          400: '#DEB480',
          500: '#E5A65C',
          600: '#D89548',
          700: '#CB8434',
          800: '#BE7320',
          900: '#B1620C',
        },
        traditional: {
          50: '#F5F1ED',
          100: '#EBE3DB',
          200: '#D7C7B7',
          300: '#C3AB93',
          400: '#AF8F6F',
          500: '#9B734B',
          600: '#87573B',
          700: '#774321',
          800: '#5D3419',
          900: '#432511',
        },
        // Neutral colors for balance
        warm: {
          50: '#FEFDFB',
          100: '#FDF9F5',
          200: '#FAF3EB',
          300: '#F7EDE1',
          400: '#F4E7D7',
          500: '#F1E1CD',
          600: '#EEDBC3',
          700: '#EBD5B9',
          800: '#E8CFAF',
          900: '#E5C9A5',
        },
      },
      backgroundImage: {
        'mandala-pattern':
          "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23774321\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3Ccircle cx=\"15\" cy=\"15\" r=\"1\"/%3E%3Ccircle cx=\"45\" cy=\"15\" r=\"1\"/%3E%3Ccircle cx=\"15\" cy=\"45\" r=\"1\"/%3E%3Ccircle cx=\"45\" cy=\"45\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'traditional-pattern':
          "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23774321\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        traditional: '0 4px 20px rgba(119, 67, 33, 0.1)',
        accent: '0 4px 20px rgba(229, 166, 92, 0.2)',
        soft: '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
