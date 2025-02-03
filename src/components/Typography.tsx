import styled from 'styled-components';
import { memo } from 'react';
import { theme } from '../theme';

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
  color: ${props => props.color || theme.colors.text.secondary};
  ${props => {
    switch (props.$variant) {
      case 'h1':
        return `
          font-size: ${theme.fontSize.xxxl};
          font-weight: ${theme.fontWeight.semiBold};
          line-height: 42px;
        `
      case 'h2':
        return `
          font-size: 28px;
          font-weight: ${theme.fontWeight.semiBold};
          line-height: 34px;
        `
      case 'h3':
      case 'h3-semibold': {
        const h3BaseStyles = `
          font-size: ${theme.fontSize.xxl};
          line-height: 29px;
        `;
        return props.$variant === 'h3' ? `
          ${h3BaseStyles}
          font-weight: ${theme.fontWeight.extraBold};
        ` : `
          ${h3BaseStyles}
          font-weight: ${theme.fontWeight.semiBold};
        `
      }
      case 'h4':
        return `
          font-size: ${theme.fontSize.xl};
          font-weight: ${theme.fontWeight.bold};
          line-height: 24px;
          color: #000000;
        `
      case 'body-m':
          return `
            font-size: ${theme.fontSize.md};
            font-weight: ${theme.fontWeight.regular};
            line-height: 24px;
          `
      case 'sub-heading':
        return `
          font-size: ${theme.fontSize.lg};
          font-weight: ${theme.fontWeight.medium};
          line-height: 22px;
        `
      case 'body':
        return `
          font-size: ${theme.fontSize.xs};
          font-weight: ${theme.fontWeight.regular};
          line-height: 14px;
        `
    }
  }}
`;

const areEqual = (prevProps: TypographyProps, nextProps: TypographyProps) => {
  return (
    prevProps.variant === nextProps.variant &&
    prevProps.color === nextProps.color &&
    prevProps.children === nextProps.children
  )
}

export const Typography = memo(({ variant = 'body', color, children }: TypographyProps) => {
  const Component = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'p';
  return (
    <StyledTypography as={Component} $variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
}, areEqual);
