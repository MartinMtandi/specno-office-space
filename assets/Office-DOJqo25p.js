import{d as o,r as f,j as t,M as y,a as D,T as g,B as h,b as L,c as N,e as A,f as U,h as B,i as I,k as F,I as P,l as O,u as Q,m as Z,n as R,o as T,p as V,q as K,S as b,s as G,O as S,t as H}from"./index-wcPKsRUh.js";import{C as q,s as W}from"./SpecnoLogo_Blue-DH5fIxD3.js";import{P as C,O as M}from"./OfficeForm-iCrwSm0p.js";const z="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.5%207C13.6%207%2014.5%206.1%2014.5%205C14.5%203.9%2013.6%203%2012.5%203C11.4%203%2010.5%203.9%2010.5%205C10.5%206.1%2011.4%207%2012.5%207ZM12.5%2010C11.4%2010%2010.5%2010.9%2010.5%2012C10.5%2013.1%2011.4%2014%2012.5%2014C13.6%2014%2014.5%2013.1%2014.5%2012C14.5%2010.9%2013.6%2010%2012.5%2010ZM10.5%2019C10.5%2017.9%2011.4%2017%2012.5%2017C13.6%2017%2014.5%2017.9%2014.5%2019C14.5%2020.1%2013.6%2021%2012.5%2021C11.4%2021%2010.5%2020.1%2010.5%2019Z'%20fill='%2322282F'/%3e%3c/svg%3e",J=({isOpen:e,onClose:r,member:s,onEdit:m,onDelete:a})=>{const[i,c]=f.useState(!1);return i?t.jsx(y,{isOpen:e,onClose:r,children:t.jsxs($,{children:[t.jsxs(Y,{children:[t.jsx(_,{onClick:()=>c(!1),children:t.jsx("img",{src:D,alt:"Go back",width:24,height:24})}),t.jsx(g,{variant:"h4",children:"Are you sure you want to delete staff member?"})]}),t.jsxs(X,{children:[t.jsx(h,{variant:"danger",onClick:()=>{a(s),r()},children:"Delete Member"}),t.jsx(h,{variant:"secondary",onClick:()=>{c(!1),r()},children:"Keep Member"})]})]})}):t.jsx(y,{isOpen:e,onClose:r,children:t.jsxs($,{children:[t.jsx(h,{variant:"primary",onClick:()=>{m(s),r()},children:"Edit Staff Member"}),t.jsx(h,{variant:"warning",onClick:()=>c(!0),children:"Delete Staff Member"})]})})},$=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.layout.gap.md};
  min-width: 300px;
`,X=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.layout.gap.md};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,Y=o.div`
  display: flex;
  align-items: start;
  gap: ${({theme:e})=>e.layout.gap.xs};
  width: 100%;
`,_=o.button`
  background: none;
  border: none;
  padding: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`,E={avatar01:L,avatar02:N,avatar03:A,avatar04:U,avatar05:B,avatar06:I,avatar07:F},ee=({members:e,onEditMember:r,onDeleteMember:s})=>{const[m,a]=f.useState(null);return t.jsxs(te,{children:[t.jsxs(ae,{children:[t.jsx(g,{variant:"h3-semibold",children:"Staff Members In Office"}),t.jsx(g,{variant:"body-m",children:e.length})]}),t.jsx(ne,{children:e.map(i=>t.jsxs(se,{children:[t.jsxs(ie,{children:[t.jsx(oe,{src:i.avatar?E[i.avatar]:E.avatar01,alt:`${i.firstName} ${i.lastName}`}),t.jsx(re,{children:t.jsxs(g,{variant:"body-m",children:[i.firstName," ",i.lastName]})})]}),t.jsx(ce,{onClick:()=>a(i),children:t.jsx("img",{src:z,alt:"More options",width:24,height:24})})]},i.id))}),m&&t.jsx(J,{isOpen:!!m,onClose:()=>a(null),member:m,onEdit:r,onDelete:s})]})},te=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.layout.gap.md};
  padding: ${({theme:e})=>e.spacing.lg} 0;
`,ae=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ne=o.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.layout.gap.sm};
`,se=o.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:  ${({theme:e})=>e.layout.gap.sm};
  padding: ${({theme:e})=>e.spacing.sm} 0;
  border-radius: ${({theme:e})=>e.layout.borderRadius.sm};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.background.main};
  }
`,ie=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.layout.gap.sm}
`,oe=o.img`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.layout.borderRadius.full};
`,re=o.div`
  display: flex;
  flex-direction: column;
`,ce=o.button`
  background: none;
  border: none;
  padding: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.layout.borderRadius.full};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.border.main};
  }

  img {
    display: block;
  }
`,de=({officeName:e,onDelete:r,onKeep:s})=>t.jsxs(le,{children:[t.jsxs(g,{variant:"h4",children:["Are you sure you want to delete ",e," office?"]}),t.jsxs(fe,{children:[t.jsx(h,{type:"button",variant:"danger",onClick:r,children:"Delete office"}),t.jsx(h,{type:"button",variant:"secondary",onClick:s,children:"Keep office"})]})]}),le=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.layout.gap.md};
  min-width: 300px;
`,fe=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.layout.gap.md};
  margin-top: ${({theme:e})=>e.spacing.xxxl};
`,me="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.75%2011C3.75%206.99594%206.99594%203.75%2011%203.75C15.0041%203.75%2018.25%206.99594%2018.25%2011C18.25%2015.0041%2015.0041%2018.25%2011%2018.25C6.99594%2018.25%203.75%2015.0041%203.75%2011ZM11%202.25C6.16751%202.25%202.25%206.16751%202.25%2011C2.25%2015.8325%206.16751%2019.75%2011%2019.75C13.1462%2019.75%2015.112%2018.9773%2016.6342%2017.6949L19.4697%2020.5303C19.7626%2020.8232%2020.2374%2020.8232%2020.5303%2020.5303C20.8232%2020.2374%2020.8232%2019.7626%2020.5303%2019.4697L17.6949%2016.6342C18.9773%2015.112%2019.75%2013.1462%2019.75%2011C19.75%206.16751%2015.8325%202.25%2011%202.25Z'%20fill='%2322282F'/%3e%3c/svg%3e",pe=({office:e,searchQuery:r,onSearch:s})=>t.jsxs(t.Fragment,{children:[t.jsx(q,{id:e.id,companyName:e.officeName,totalStaff:e.members.length,officeCapacity:parseInt(e.capacity),phoneNumber:e.phone,emailAddress:e.email,companyAddress:e.address,accent:e.accent}),e.members.length>0&&t.jsx(ue,{children:t.jsx(P,{name:"search",type:"text",placeholder:"Search",value:r,onChange:s,icon:t.jsx("img",{src:me,alt:"Search"}),iconPosition:"right"})})]}),ue=o.div`
  width: 100%;
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
`,he=e=>{const[r,s]=f.useState(null),[m,a]=f.useState(null),[i,c]=f.useState(Date.now());return f.useEffect(()=>{if(e){const p=O(e);p&&s(p)}},[e,i]),f.useEffect(()=>{const p=()=>c(Date.now());return window.addEventListener("officeUpdated",p),()=>window.removeEventListener("officeUpdated",p)},[]),{office:r,setOffice:s,error:m,setError:a,lastUpdate:i,setLastUpdate:c}},ge=e=>{const[r,s]=f.useState(!1),[m,a]=f.useState(!1),[i,c]=f.useState(null),[p,n]=f.useState("");return{showAddMemberModal:r,setShowAddMemberModal:s,isEditingStaff:m,setIsEditingStaff:a,selectedMember:i,setSelectedMember:c,searchQuery:p,setSearchQuery:n,handleEditStaff:u=>{c(u),a(!0)},handleUpdateStaff:u=>{i&&(Q(e,u),window.dispatchEvent(new Event("officeUpdated")),a(!1),c(null))},handleDeleteStaff:u=>{Z(e,u.id),window.dispatchEvent(new Event("officeUpdated"))}}},Se=()=>{const{id:e}=R(),[r]=T(),s=V(),m=r.get("mode")==="edit",{office:a,setOffice:i,error:c,setError:p}=he(e),n=ge(e),[v,x]=f.useState(!1),w=d=>{try{const l=G(d);window.dispatchEvent(new Event("officeUpdated")),s(`/office/${l.id}`)}catch(l){p(l instanceof S?l.message:"Failed to create office")}},u=d=>{try{if(!a)return;const l=H(a,d);i(l),window.dispatchEvent(new Event("officeUpdated")),s(`/office/${e}`)}catch(l){p(l instanceof S?l.message:"Failed to update office")}},k=()=>{if(a&&e){const d=O(e);d&&i({...d,members:d.members||[]})}n.setShowAddMemberModal(!1)};return a?m?t.jsxs(j,{children:[t.jsx(M,{initialValues:{id:a.id,officeName:a.officeName,address:a.address,email:a.email,phone:a.phone,capacity:a.capacity,accent:a.accent},onUpdate:u,onDelete:()=>x(!0),error:c}),v&&t.jsx(y,{isOpen:v,onClose:()=>x(!1),children:t.jsx(de,{officeName:a.officeName,onDelete:()=>{e&&(K(e),x(!1),s("/"))},onKeep:()=>x(!1)})})]}):t.jsxs(j,{children:[t.jsx(C,{title:"Office",onBack:()=>s("/")}),t.jsx(pe,{office:a,searchQuery:n.searchQuery,onSearch:d=>n.setSearchQuery(d.target.value)}),a.members.length===0?t.jsx(xe,{children:t.jsxs(ye,{children:[t.jsx(ve,{children:t.jsx("img",{src:W,alt:"Specno Logo"})}),t.jsx(g,{children:"Add staff members to this office using the + button"})]})}):t.jsx(ee,{members:a.members.filter(d=>{const l=n.searchQuery.toLowerCase();return(d.firstName||"").toLowerCase().includes(l)||(d.lastName||"").toLowerCase().includes(l)}),onEditMember:n.handleEditStaff,onDeleteMember:n.handleDeleteStaff}),n.showAddMemberModal&&t.jsx(y,{isOpen:n.showAddMemberModal,onClose:()=>n.setShowAddMemberModal(!1),children:t.jsx(b,{office:a,onClose:()=>n.setShowAddMemberModal(!1),onSubmit:k})}),n.isEditingStaff&&t.jsx(y,{isOpen:n.isEditingStaff,onClose:()=>{n.setIsEditingStaff(!1),n.setSelectedMember(null)},children:t.jsx(b,{office:a,onClose:()=>{n.setIsEditingStaff(!1),n.setSelectedMember(null)},onSubmit:n.handleUpdateStaff,initialValues:n.selectedMember||void 0})})]}):t.jsxs(j,{children:[t.jsx(C,{title:"New Office",onBack:()=>s("/")}),t.jsx(M,{initialValues:{officeName:"",address:"",email:"",phone:"",capacity:"0",accent:"#000000"},onUpdate:w,error:c})]})},j=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.layout.gap.md};
`,xe=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 400px;
  color: ${({theme:e})=>e.colors.text.muted};
  padding: ${({theme:e})=>e.spacing.xl};
`,ye=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.layout.gap.md};
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xl};
`,ve=o.div`
  width: 200px;
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  img {
    width: 100%;
    height: auto;
  }
`;export{Se as default};
