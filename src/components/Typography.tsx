import styled from 'styled-components';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'body-m';

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
  color: ${props => props.color || 'inherit'};
  ${props => {
    switch (props.$variant) {
      case 'h1':
        return `
          font-size: 24px;
          font-weight: 700;
          line-height: 32px;
        `
      case 'h2':
        return `
          font-size: 20px;
          font-weight: 600;
          line-height: 28px;
        `
      case 'h3':
        return `
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
       `
      case 'body-m':
          return `
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          `
      case 'body':
        return `
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        `
      case 'caption':
        return `
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
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
