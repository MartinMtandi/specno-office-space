import styled, { css } from 'styled-components';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

interface TypographyProps {
  variant?: TypographyVariant;
  color?: string;
  children: React.ReactNode;
}

const variantStyles = {
  h1: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  `,
  h2: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  `,
  h3: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  `,
  body: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  caption: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `
};

const StyledTypography = styled.p<{ variant: TypographyVariant; color?: string }>`
  margin: 0;
  color: ${props => props.color || 'inherit'};
  ${props => variantStyles[props.variant]}
`;

export const Typography = ({ variant = 'body', color, children }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};
