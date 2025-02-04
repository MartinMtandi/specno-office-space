import{r,g as c,j as t,T as n,d as a,t as s}from"./index-C7rSeGsq.js";import{s as d,C as l}from"./SpecnoLogo_Blue--qfh6BYA.js";const y=()=>{const[i,o]=r.useState(c());return r.useEffect(()=>{o(c())},[]),i.length===0?t.jsx(p,{children:t.jsxs(g,{children:[t.jsx(x,{children:t.jsx("img",{src:d,alt:"Specno Logo"})}),t.jsx(n,{variant:"h2",children:"No offices found"}),t.jsx(n,{children:"Get started by adding your first office"})]})}):t.jsxs(t.Fragment,{children:[t.jsx(m,{children:t.jsx(n,{variant:"h2",children:"All Offices"})}),i.map(e=>t.jsx(l,{id:e.id,companyName:e.officeName,totalStaff:e.members.length,officeCapacity:parseInt(e.capacity),phoneNumber:e.phone,emailAddress:e.email,companyAddress:e.address,accent:e.accent},e.id))]})},m=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${s.spacing.md};
`,p=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 48px);
  color: ${s.colors.text.muted};
  margin: -${s.spacing.xl};
`,g=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${s.layout.gap.md};
  text-align: center;
  padding: ${s.spacing.xl};
`,x=a.div`
  width: 200px;
  margin-bottom:  ${s.spacing.xl};

  img {
    width: 100%;
    height: auto;
  }
`;export{y as default};
