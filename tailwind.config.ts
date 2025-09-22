import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'blue-charcoal': '#000A1C',
        'red-devil': '#7E0020',
        'nero': '#1C0700',
        'midnight': '#011430',
        primary: {
          DEFAULT: '#000A1C', // Blue Charcoal as primary
          dark: '#000814',
          light: '#001A3D',
        },
        secondary: {
          DEFAULT: '#7E0020', // Red Devil as secondary
          dark: '#5E0018',
          light: '#9E0028',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#e9e9e9',
          200: '#d4d4d4',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Wix Madefor Display', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],    // 10px
        'xs': ['0.75rem', { lineHeight: '1rem' }],         // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],     // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],        // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px
        '3xl': ['1.75rem', { lineHeight: '2.25rem' }],     // 28px
        '4xl': ['2rem', { lineHeight: '2.5rem' }],         // 32px
        '5xl': ['2.25rem', { lineHeight: '1' }],           // 36px
        '6xl': ['2.5rem', { lineHeight: '1' }],            // 40px
        '7xl': ['3rem', { lineHeight: '1' }],              // 48px
        '8xl': ['3.5rem', { lineHeight: '1' }],            // 56px
        '9xl': ['4rem', { lineHeight: '1' }],              // 64px
        '10xl': ['4.5rem', { lineHeight: '1' }],           // 72px
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
        'elevation-4': '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(90deg, rgba(4,50,120,1) 0%, rgba(126,1,33,1) 100%)',
      },
      components: {
        '.btn': {
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'all 0.2s',
          
          '&-primary': {
            backgroundColor: 'var(--blue-charcoal)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'var(--catalina-blue)',
            }
          },
          
          '&-secondary': {
            backgroundColor: 'white',
            border: '1px solid var(--blue-charcoal)',
            color: 'var(--blue-charcoal)',
            '&:hover': {
              backgroundColor: 'var(--neutral-50)',
            }
          }
        },
        
        '.card': {
          padding: '1.5rem',
          borderRadius: '0.75rem',
          backgroundColor: 'white',
          boxShadow: 'var(--elevation-1)',
          
          '&-image': {
            borderRadius: '0.5rem',
            overflow: 'hidden',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }
          }
        }
      },
    },
  },
  plugins: [
  
  ],
} satisfies Config