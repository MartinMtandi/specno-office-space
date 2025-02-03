import styled from 'styled-components';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-m' | 'sub-heading' | 'h3-semibold';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: string;
  children: React.ReactNode;
}

interface StyledTypographyProps {
  $variant: TypographyVariant;
  color?: string;
}

const StyledTypography = styled.p<StyledTypographyProps>`
  margin: 0;
  color: ${props => props.color || '#484954'};
  ${props => {
    switch (props.$variant) {
      case 'h1':
        return `
          font-size: 32px;
          font-weight: 600;
          line-height: 42px;
        `
      case 'h2':
        return `
          font-size: 28px;
          font-weight: 600;
          line-height: 34px;
        `
      case 'h3':
      case 'h3-semibold': {
        const h3BaseStyles = `
          font-size: 24px;
          line-height: 29px;
        `;
        return props.$variant === 'h3' ? `
          ${h3BaseStyles}
          font-weight: 800;
        ` : `
          ${h3BaseStyles}
          font-weight: 600;
        `
      }
      case 'h4':
        return `
          font-size: 20px;
          font-weight: 700;
          line-height: 24px;
          color: #000000;
        `
      case 'body-m':
          return `
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          `
      case 'sub-heading':
        return `
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
        `
      case 'body':
        return `
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
        `
    }
  }}
`;

export const Typography = ({ variant = 'body', color, children }: TypographyProps) => {
  const Component = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'p';
  return (
    <StyledTypography as={Component} $variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};
