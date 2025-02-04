import React from 'react'

const styled = {
  div: (styles: any) => React.forwardRef((props: any, ref) => <div ref={ref} {...props} />),
  button: (styles: any) => React.forwardRef((props: any, ref) => <button ref={ref} {...props} />),
  input: (styles: any) => React.forwardRef((props: any, ref) => <input ref={ref} {...props} />),
  form: (styles: any) => React.forwardRef((props: any, ref) => <form ref={ref} {...props} />),
  span: (styles: any) => React.forwardRef((props: any, ref) => <span ref={ref} {...props} />),
  p: (styles: any) => React.forwardRef((props: any, ref) => <p ref={ref} {...props} />),
  h1: (styles: any) => React.forwardRef((props: any, ref) => <h1 ref={ref} {...props} />),
  h2: (styles: any) => React.forwardRef((props: any, ref) => <h2 ref={ref} {...props} />),
  h3: (styles: any) => React.forwardRef((props: any, ref) => <h3 ref={ref} {...props} />),
  section: (styles: any) => React.forwardRef((props: any, ref) => <section ref={ref} {...props} />),
  article: (styles: any) => React.forwardRef((props: any, ref) => <article ref={ref} {...props} />),
  main: (styles: any) => React.forwardRef((props: any, ref) => <main ref={ref} {...props} />),
  aside: (styles: any) => React.forwardRef((props: any, ref) => <aside ref={ref} {...props} />),
  nav: (styles: any) => React.forwardRef((props: any, ref) => <nav ref={ref} {...props} />),
  header: (styles: any) => React.forwardRef((props: any, ref) => <header ref={ref} {...props} />),
  footer: (styles: any) => React.forwardRef((props: any, ref) => <footer ref={ref} {...props} />)
}

export default styled

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const createGlobalStyle = () => () => null
export const css = (...args: any[]) => ''
export const keyframes = () => ''
