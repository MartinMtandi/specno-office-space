import{d as i,t as a,r as l,j as e,M as h,b as H,T as g,B as u,a as Q,c as q,e as W,f as z,h as J,i as X,k as Y,u as _,l as ee,m as te,n as j,I as ae,S as E,o as ne,O as C,s as ie,p as se,q as oe,v as re}from"./index-C1k8SypV.js";import{P as A,O as N}from"./OfficeForm-CMEpVL3W.js";import{C as ce,s as le}from"./SpecnoLogo_Blue-Cj9ARGl4.js";const de="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.5%207C13.6%207%2014.5%206.1%2014.5%205C14.5%203.9%2013.6%203%2012.5%203C11.4%203%2010.5%203.9%2010.5%205C10.5%206.1%2011.4%207%2012.5%207ZM12.5%2010C11.4%2010%2010.5%2010.9%2010.5%2012C10.5%2013.1%2011.4%2014%2012.5%2014C13.6%2014%2014.5%2013.1%2014.5%2012C14.5%2010.9%2013.6%2010%2012.5%2010ZM10.5%2019C10.5%2017.9%2011.4%2017%2012.5%2017C13.6%2017%2014.5%2017.9%2014.5%2019C14.5%2020.1%2013.6%2021%2012.5%2021C11.4%2021%2010.5%2020.1%2010.5%2019Z'%20fill='%2322282F'/%3e%3c/svg%3e",fe=({isOpen:r,onClose:d,member:c,onEdit:m,onDelete:t})=>{const[o,p]=l.useState(!1);return o?e.jsx(h,{isOpen:r,onClose:d,children:e.jsxs(L,{children:[e.jsxs(pe,{children:[e.jsx(ue,{onClick:()=>p(!1),children:e.jsx("img",{src:H,alt:"Go back",width:24,height:24})}),e.jsx(g,{variant:"h4",children:"Are you sure you want to delete staff member?"})]}),e.jsxs(me,{children:[e.jsx(u,{variant:"danger",onClick:()=>{t(c),d()},children:"Delete Member"}),e.jsx(u,{variant:"secondary",onClick:()=>{p(!1),d()},children:"Keep Member"})]})]})}):e.jsx(h,{isOpen:r,onClose:d,children:e.jsxs(L,{children:[e.jsx(u,{variant:"primary",onClick:()=>{m(c),d()},children:"Edit Staff Member"}),e.jsx(u,{variant:"warning",onClick:()=>p(!0),children:"Delete Staff Member"})]})})},L=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  min-width: 300px;
`,me=i.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
  margin-top: ${a.spacing.sm};
`,pe=i.div`
  display: flex;
  align-items: start;
  gap: ${a.layout.gap.xs};
  width: 100%;
`,ue=i.button`
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
`,U={avatar01:Q,avatar02:q,avatar03:W,avatar04:z,avatar05:J,avatar06:X,avatar07:Y},ge=({members:r,onEditMember:d,onDeleteMember:c})=>{const[m,t]=l.useState(null);return e.jsxs(he,{children:[e.jsxs(xe,{children:[e.jsx(g,{variant:"h3-semibold",children:"Staff Members In Office"}),e.jsx(g,{variant:"body-m",children:r.length})]}),e.jsx(ve,{children:r.map(o=>e.jsxs(ye,{children:[e.jsxs(je,{children:[e.jsx(be,{src:o.avatar?U[o.avatar]:U.avatar01,alt:`${o.firstName} ${o.lastName}`}),e.jsx(we,{children:e.jsxs(g,{variant:"body-m",children:[o.firstName," ",o.lastName]})})]}),e.jsx(Ce,{onClick:()=>t(o),children:e.jsx("img",{src:de,alt:"More options",width:24,height:24})})]},o.id))}),m&&e.jsx(fe,{isOpen:!!m,onClose:()=>t(null),member:m,onEdit:d,onDelete:c})]})},he=i.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
  padding: ${a.spacing.lg} 0;
`,xe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ve=i.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.sm};
`,ye=i.li`
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
`,je=i.div`
  display: flex;
  align-items: center;
  gap: ${a.layout.gap.sm}
`,be=i.img`
  width: 40px;
  height: 40px;
  border-radius: ${a.layout.borderRadius.full};
`,we=i.div`
  display: flex;
  flex-direction: column;
`,Ce=i.button`
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
`,Se="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.75%2011C3.75%206.99594%206.99594%203.75%2011%203.75C15.0041%203.75%2018.25%206.99594%2018.25%2011C18.25%2015.0041%2015.0041%2018.25%2011%2018.25C6.99594%2018.25%203.75%2015.0041%203.75%2011ZM11%202.25C6.16751%202.25%202.25%206.16751%202.25%2011C2.25%2015.8325%206.16751%2019.75%2011%2019.75C13.1462%2019.75%2015.112%2018.9773%2016.6342%2017.6949L19.4697%2020.5303C19.7626%2020.8232%2020.2374%2020.8232%2020.5303%2020.5303C20.8232%2020.2374%2020.8232%2019.7626%2020.5303%2019.4697L17.6949%2016.6342C18.9773%2015.112%2019.75%2013.1462%2019.75%2011C19.75%206.16751%2015.8325%202.25%2011%202.25Z'%20fill='%2322282F'/%3e%3c/svg%3e",$e=({officeName:r,onDelete:d,onKeep:c})=>e.jsxs(Me,{children:[e.jsxs(g,{variant:"h4",children:["Are you sure you want to delete ",r," office?"]}),e.jsxs(De,{children:[e.jsx(u,{type:"button",variant:"danger",onClick:d,children:"Delete office"}),e.jsx(u,{type:"button",variant:"secondary",onClick:c,children:"Keep office"})]})]}),Me=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  min-width: 300px;
`,De=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  margin-top: ${a.spacing.xxxl};
`,Ie=()=>{const{id:r}=_(),[d]=ee(),c=te(),m=d.get("mode")==="edit",[t,o]=l.useState(null),[p,f]=l.useState(null),[$,b]=l.useState(!1),[I,w]=l.useState(Date.now()),[M,x]=l.useState(!1),[D,v]=l.useState(null),[O,B]=l.useState(""),[k,y]=l.useState(!1);l.useEffect(()=>{if(r){const n=j(r);n?o(n):c("/")}},[r,c,I]),l.useEffect(()=>{const n=()=>{w(Date.now())};return window.addEventListener("officeUpdated",n),()=>{window.removeEventListener("officeUpdated",n)}},[]);const F=()=>{if(r)try{ne(r),y(!1),c("/")}catch(n){n instanceof C?f(n.message):f("Failed to delete office")}},P=()=>{y(!0)},R=n=>{f(null);try{const s={...n,id:crypto.randomUUID(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),members:[]};ie(s),window.dispatchEvent(new Event("officeUpdated")),c(`/office/${s.id}`)}catch(s){s instanceof C?f(s.message):f("Failed to create office")}},Z=n=>{f(null);try{if(!t)return;const s={...n,id:t.id,createdAt:t.createdAt,updatedAt:new Date().toISOString(),members:t.members||[]};se(s),o(s),window.dispatchEvent(new Event("officeUpdated")),w(Date.now()),c(`/office/${r}`)}catch(s){s instanceof C?f(s.message):f("Failed to update office")}},T=()=>{if(t){const n=j(t.id);n&&(o({...n,members:n.members||[]}),w(Date.now()))}b(!1)},K=n=>{v(n),x(!0)},V=n=>{if(t&&D){oe(t.id,n);const s=j(t.id);o(s||null),x(!1),v(null)}},G=n=>{if(t){re(t.id,n.id);const s=j(t.id);o(s||null),window.dispatchEvent(new Event("officeUpdated"))}};return t?m&&t?e.jsxs(S,{children:[e.jsx(N,{initialValues:{id:t.id,officeName:t.officeName,address:t.address,email:t.email,phone:t.phone,capacity:t.capacity,accent:t.accent},onUpdate:Z,onDelete:P,error:p}),k&&t&&e.jsx(h,{isOpen:k,onClose:()=>y(!1),children:e.jsx($e,{officeName:t.officeName,onDelete:F,onKeep:()=>y(!1)})})]}):e.jsxs(S,{children:[e.jsx(A,{title:"Office",onBack:()=>c("/")}),e.jsx(ce,{id:t.id,companyName:t.officeName,totalStaff:t.members.length,officeCapacity:parseInt(t.capacity),phoneNumber:t.phone,emailAddress:t.email,companyAddress:t.address,accent:t.accent}),t.members.length>0&&e.jsx(Oe,{children:e.jsx(ae,{name:"search",type:"text",placeholder:"Search",value:O,onChange:n=>B(n.target.value),icon:e.jsx("img",{src:Se,alt:"Search"}),iconPosition:"right"})}),t.members.length===0?e.jsx(ke,{children:e.jsxs(Ee,{children:[e.jsx(Ae,{children:e.jsx("img",{src:le,alt:"Specno Logo"})}),e.jsx(g,{children:"Add staff members to this office using the + button"})]})}):e.jsx(ge,{members:t.members.filter(n=>{const s=O.toLowerCase();return(n.firstName||"").toLowerCase().includes(s)||(n.lastName||"").toLowerCase().includes(s)}),onEditMember:K,onDeleteMember:G}),$&&e.jsx(h,{isOpen:$,onClose:()=>b(!1),children:e.jsx(E,{office:t,onClose:()=>b(!1),onSubmit:T})}),M&&e.jsx(h,{isOpen:M,onClose:()=>{x(!1),v(null)},children:e.jsx(E,{office:t,onClose:()=>{x(!1),v(null)},onSubmit:V,initialValues:D||void 0})})]}):e.jsxs(S,{children:[e.jsx(A,{title:"New Office",onBack:()=>c("/")}),e.jsx(N,{initialValues:{officeName:"",address:"",email:"",phone:"",capacity:"0",accent:"#000000"},onUpdate:R,error:p})]})},S=i.div`
  display: flex;
  flex-direction: column;
  gap: ${a.layout.gap.md};
`,Oe=i.div`
  width: 100%;
  max-width: ${a.layout.maxContentWidth};
  margin: 0 auto;
  padding-top: ${a.spacing.sm};
`,ke=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${a.colors.background.main};
  border-radius: ${a.layout.borderRadius.sm};
  padding: 48px ${a.spacing.xl};
  margin-top: ${a.spacing.lg};
`,Ee=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${a.layout.gap.md};
  text-align: center;
  color: ${a.colors.text.muted};
`,Ae=i.div`
  width: 200px;
  margin-bottom: ${a.spacing.sm};

  img {
    width: 100%;
    height: auto;
  }
`;export{Ie as default};
