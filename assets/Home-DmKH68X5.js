import{r as i,g as c,j as e,T as n,d as a}from"./index-wcPKsRUh.js";import{s as o,C as d}from"./SpecnoLogo_Blue-DH5fIxD3.js";const f=()=>{const[t,r]=i.useState([]);return i.useEffect(()=>{r(c())},[]),t.length===0?e.jsx(m,{children:e.jsxs(p,{children:[e.jsx(g,{children:e.jsx("img",{src:o,alt:"Specno Logo"})}),e.jsx(n,{variant:"h2",children:"No offices found"}),e.jsx(n,{children:"Get started by adding your first office"})]})}):e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(n,{variant:"h2",children:"All Offices"})}),t.map(s=>e.jsx(d,{id:s.id,companyName:s.officeName,totalStaff:s.members.length,officeCapacity:parseInt(s.capacity),phoneNumber:s.phone,emailAddress:s.email,companyAddress:s.address,accent:s.accent},s.id))]})},l=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,m=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 48px);
  color: ${({theme:t})=>t.colors.text.muted};
  margin: -${({theme:t})=>t.spacing.xl};
`,p=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.layout.gap.md};
  text-align: center;
  padding: ${({theme:t})=>t.spacing.xl};
`,g=a.div`
  width: 200px;
  margin-bottom:  ${({theme:t})=>t.spacing.xl};

  img {
    width: 100%;
    height: auto;
  }
`;export{f as default};
