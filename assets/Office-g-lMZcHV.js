import{d as s,t as a,r as c,j as e,M as h,b as G,T as p,B as u,a as H,c as Q,e as V,f as q,h as W,i as z,k as J,u as X,l as Y,m as _,n as j,I as ee,S as O,o as te,O as w,p as ae,s as ne,q as se,v as ie}from"./index-opTrD4oB.js";import{O as oe,P as re}from"./OfficeForm-C2zSy2Dw.js";import{C as le,s as ce}from"./SpecnoLogo_Blue-D7wkmeGh.js";const de="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.5%207C13.6%207%2014.5%206.1%2014.5%205C14.5%203.9%2013.6%203%2012.5%203C11.4%203%2010.5%203.9%2010.5%205C10.5%206.1%2011.4%207%2012.5%207ZM12.5%2010C11.4%2010%2010.5%2010.9%2010.5%2012C10.5%2013.1%2011.4%2014%2012.5%2014C13.6%2014%2014.5%2013.1%2014.5%2012C14.5%2010.9%2013.6%2010%2012.5%2010ZM10.5%2019C10.5%2017.9%2011.4%2017%2012.5%2017C13.6%2017%2014.5%2017.9%2014.5%2019C14.5%2020.1%2013.6%2021%2012.5%2021C11.4%2021%2010.5%2020.1%2010.5%2019Z'%20fill='%2322282F'/%3e%3c/svg%3e",fe=({isOpen:i,onClose:d,member:r,onEdit:m,onDelete:t})=>{const[o,g]=c.useState(!1);return o?e.jsx(h,{isOpen:i,onClose:d,children:e.jsxs(A,{children:[e.jsxs(ue,{children:[e.jsx(pe,{onClick:()=>g(!1),children:e.jsx("img",{src:G,alt:"Go back",width:24,height:24})}),e.jsx(p,{variant:"h4",children:"Are you sure you want to delete staff member?"})]}),e.jsxs(me,{children:[e.jsx(u,{variant:"danger",onClick:()=>{t(r),d()},children:"Delete Member"}),e.jsx(u,{variant:"secondary",onClick:()=>{g(!1),d()},children:"Keep Member"})]})]})}):e.jsx(h,{isOpen:i,onClose:d,children:e.jsxs(A,{children:[e.jsx(u,{variant:"primary",onClick:()=>{m(r),d()},children:"Edit Staff Member"}),e.jsx(u,{variant:"warning",onClick:()=>g(!0),children:"Delete Staff Member"})]})})},A=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  min-width: 300px;
`,me=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
  margin-top: ${a.spacing.sm};
`,ue=s.div`
  display: flex;
  align-items: start;
  gap: ${a.layout.gap.xs};
  width: 100%;
`,pe=s.button`
  background: none;
  border: none;
  padding: ${a.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`,E={avatar01:H,avatar02:Q,avatar03:V,avatar04:q,avatar05:W,avatar06:z,avatar07:J},ge=({members:i,onEditMember:d,onDeleteMember:r})=>{const[m,t]=c.useState(null);return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(p,{variant:"h3-semibold",children:"Staff Members In Office"}),e.jsx(p,{variant:"body-m",children:i.length})]}),e.jsx(ye,{children:i.map(o=>e.jsxs(ve,{children:[e.jsxs(be,{children:[e.jsx(je,{src:o.avatar?E[o.avatar]:E.avatar01,alt:`${o.firstName} ${o.lastName}`}),e.jsx(Ce,{children:e.jsxs(p,{variant:"body-m",children:[o.firstName," ",o.lastName]})})]}),e.jsx(we,{onClick:()=>t(o),children:e.jsx("img",{src:de,alt:"More options",width:24,height:24})})]},o.id))}),m&&e.jsx(fe,{isOpen:!!m,onClose:()=>t(null),member:m,onEdit:d,onDelete:r})]})},he=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
  padding: ${a.spacing.lg} 0;
`,xe=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ye=s.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.sm};
`,ve=s.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:  ${a.layout.gap.sm};
  padding: ${a.spacing.sm} 0;
  border-radius: ${a.layout.borderRadius.sm};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${a.colors.background.main};
  }
`,be=s.div`
  display: flex;
  align-items: center;
  gap: ${a.layout.gap.sm}
`,je=s.img`
  width: 40px;
  height: 40px;
  border-radius: ${a.layout.borderRadius.full};
`,Ce=s.div`
  display: flex;
  flex-direction: column;
`,we=s.button`
  background: none;
  border: none;
  padding: ${a.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${a.layout.borderRadius.full};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${a.colors.border.main};
  }

  img {
    display: block;
  }
`,Se="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.75%2011C3.75%206.99594%206.99594%203.75%2011%203.75C15.0041%203.75%2018.25%206.99594%2018.25%2011C18.25%2015.0041%2015.0041%2018.25%2011%2018.25C6.99594%2018.25%203.75%2015.0041%203.75%2011ZM11%202.25C6.16751%202.25%202.25%206.16751%202.25%2011C2.25%2015.8325%206.16751%2019.75%2011%2019.75C13.1462%2019.75%2015.112%2018.9773%2016.6342%2017.6949L19.4697%2020.5303C19.7626%2020.8232%2020.2374%2020.8232%2020.5303%2020.5303C20.8232%2020.2374%2020.8232%2019.7626%2020.5303%2019.4697L17.6949%2016.6342C18.9773%2015.112%2019.75%2013.1462%2019.75%2011C19.75%206.16751%2015.8325%202.25%2011%202.25Z'%20fill='%2322282F'/%3e%3c/svg%3e",$e=({officeName:i,onDelete:d,onKeep:r})=>e.jsxs(Me,{children:[e.jsxs(p,{variant:"h4",children:["Are you sure you want to delete ",i," office?"]}),e.jsxs(ke,{children:[e.jsx(u,{type:"button",variant:"danger",onClick:d,children:"Delete office"}),e.jsx(u,{type:"button",variant:"secondary",onClick:r,children:"Keep office"})]})]}),Me=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  min-width: 300px;
`,ke=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  margin-top: ${a.spacing.xxxl};
`,Ie=()=>{const{id:i}=X(),[d]=Y(),r=_(),m=d.get("mode")==="edit",[t,o]=c.useState(null),[g,f]=c.useState(null),[S,C]=c.useState(!1),[N,x]=c.useState(Date.now()),[$,y]=c.useState(!1),[M,v]=c.useState(null),[k,B]=c.useState(""),[D,b]=c.useState(!1);c.useEffect(()=>{if(i){const n=j(i);n?o(n):r("/")}},[i,r,N]),c.useEffect(()=>{const n=()=>{x(Date.now())};return window.addEventListener("officeUpdated",n),()=>{window.removeEventListener("officeUpdated",n)}},[]);const I=()=>{if(i)try{te(i),b(!1),r("/")}catch(n){n instanceof w?f(n.message):f("Failed to delete office")}},F=()=>{b(!0)},U=n=>{f(null);try{if(!t)return;ae({...n,id:t.id,createdAt:t.createdAt,updatedAt:new Date().toISOString(),members:t.members||[]}),x(Date.now()),r(`/office/${i}`)}catch(l){l instanceof w?f(l.message):f("Failed to update office")}},P=n=>{f(null);try{if(!t)return;ne({...n,id:t.id,createdAt:t.createdAt,updatedAt:new Date().toISOString(),members:t.members||[]}),x(Date.now()),r(`/office/${i}`)}catch(l){l instanceof w?f(l.message):f("Failed to save office")}},R=()=>{if(t){const n=j(t.id);n&&(o({...n,members:n.members||[]}),x(Date.now()))}C(!1)},Z=n=>{v(n),y(!0)},T=n=>{if(t&&M){se(t.id,n);const l=j(t.id);o(l||null),y(!1),v(null)}},K=n=>{if(t){ie(t.id,n.id);const l=j(t.id);o(l||null)}};return t?m?e.jsxs(L,{children:[e.jsx(oe,{initialValues:{officeName:t.officeName,address:t.address,email:t.email,phone:t.phone,capacity:t.capacity,accent:t.accent},onUpdate:U,onSave:P,onDelete:F,error:g}),D&&t&&e.jsx(h,{isOpen:D,onClose:()=>b(!1),children:e.jsx($e,{officeName:t.officeName,onDelete:I,onKeep:()=>b(!1)})})]}):e.jsxs(L,{children:[e.jsx(re,{title:"Office",onBack:()=>r("/")}),e.jsx(le,{id:t.id,companyName:t.officeName,totalStaff:t.members.length,officeCapacity:parseInt(t.capacity),phoneNumber:t.phone,emailAddress:t.email,companyAddress:t.address,accent:t.accent}),t.members.length>0&&e.jsx(De,{children:e.jsx(ee,{name:"search",type:"text",placeholder:"Search",value:k,onChange:n=>B(n.target.value),icon:e.jsx("img",{src:Se,alt:"Search"}),iconPosition:"right"})}),t.members.length===0?e.jsx(Oe,{children:e.jsxs(Ae,{children:[e.jsx(Ee,{children:e.jsx("img",{src:ce,alt:"Specno Logo"})}),e.jsx(p,{children:"Add staff members to this office using the + button"})]})}):e.jsx(ge,{members:t.members.filter(n=>{const l=k.toLowerCase();return(n.firstName||"").toLowerCase().includes(l)||(n.lastName||"").toLowerCase().includes(l)}),onEditMember:Z,onDeleteMember:K}),S&&e.jsx(h,{isOpen:S,onClose:()=>C(!1),children:e.jsx(O,{office:t,onClose:()=>C(!1),onSubmit:R})}),$&&e.jsx(h,{isOpen:$,onClose:()=>{y(!1),v(null)},children:e.jsx(O,{office:t,onClose:()=>{y(!1),v(null)},onSubmit:T,initialValues:M||void 0})})]}):null},L=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
`,De=s.div`
  width: 100%;
  max-width: ${a.layout.maxContentWidth};
  margin: 0 auto;
  padding-top: ${a.spacing.sm};
`,Oe=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${a.colors.background.main};
  border-radius: ${a.layout.borderRadius.sm};
  padding: 48px ${a.spacing.xl};
  margin-top: ${a.spacing.lg};
`,Ae=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  text-align: center;
  color: ${a.colors.text.muted};
`,Ee=s.div`
  width: 200px;
  margin-bottom: ${a.spacing.sm};

  img {
    width: 100%;
    height: auto;
  }
`;export{Ie as default};
