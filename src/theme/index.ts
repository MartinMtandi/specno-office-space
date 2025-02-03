export const theme = {
  colors: {
    primary: {
      main: '#489DDA',
      dark: '#0D4477',
      light: '#E5F2FB'
    },
    secondary: {
      main: '#CBD5E1',
      dark: '#64748B',
      light: '#F1F5F9'
    },
    danger: {
      main: '#EF4444',
      dark: '#B91C1C',
      light: '#FEE2E2'
    },
    ghost: {
      main: '#334155',
      light: '#94A3B8'
    },
    text: {
      base: '#1E293B',
      primary: '#2B82C9',
      secondary: '#484954',
      muted: '#6B7280'
    },
    background: {
      main: '#F8FAFC',
      secondary: '#E5E5E5'
    },
    border: {
      main: '#E2E8F0',
      dark: '#475569'
    },
    white: '#FFFFFF'
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px'
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '36px',
  },
  layout: {
    maxContentWidth: '412px',
    
    borderRadius: {
      xs: '4px',
      sm: '8px',
      lg: '36px',
      full: '100px'
    },
    gap: {
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '36px',
    },
    padding: {
      card: '20px 20px 0 28px',
      button: '16px 28px',
      page: '16px'
    }
  },
  shadows: {
    sm: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    md: '0px 2px 2px rgba(0, 0, 0, 0.1)',
    lg: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    button: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    input: '0 0 0 2px rgba(59, 130, 246, 0.1)',
  },
  transitions: {
    default: 'all 0.2s ease-in-out',
    expand: 'all 0.3s ease-in-out',
    ease: 'transform 0.3s ease'
  }
} as const;

export type Theme = typeof theme;
