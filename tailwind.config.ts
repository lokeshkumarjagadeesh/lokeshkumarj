import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-animated': 'var(--gradient-animated)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-aurora': 'var(--gradient-aurora)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-accent': 'var(--gradient-accent)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'intense': 'var(--shadow-intense)',
				'aurora': 'var(--shadow-aurora)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-30px) rotate(180deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)' },
					'50%': { transform: 'translateX(-50%) translateY(-50%) rotate(180deg) scale(1.2)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.3)' }
				},
				'drift': {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(50px, -50px) rotate(90deg)' },
					'50%': { transform: 'translate(30px, 30px) rotate(180deg)' },
					'75%': { transform: 'translate(-40px, 10px) rotate(270deg)' },
					'100%': { transform: 'translate(0, 0) rotate(360deg)' }
				},
				'aurora': {
					'0%, 100%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(100%)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' }
				},
				'wave': {
					'0%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(1.5)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
				'drift': 'drift 25s ease-in-out infinite',
				'aurora': 'aurora 15s ease-in-out infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'orbit': 'orbit 30s linear infinite',
				'wave': 'wave 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
