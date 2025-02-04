import{d as s,t as r,j as a,T as g,m as y,B as p,b as v,x as C,y as u,z as $,A as j,I as m,C as h,D as f}from"./index-u43Rvh0X.js";const B=["#FFBE0B","#FF9B71","#FB5607","#97512C","#DBBADD","#FF006E","#A9F0D1","#00B402","#489DDA","#0072E8","#8338EC"],F=({name:t,value:c="#FFBE0B",onChange:l,onBlur:o})=>a.jsxs(N,{children:[a.jsx(g,{color:"#000000",variant:"h3-semibold",children:"Office Colour"}),a.jsx(O,{children:B.map(n=>a.jsx(E,{$color:n,$isSelected:c===n,onClick:()=>{l(n),o==null||o()},type:"button",name:t,"aria-label":`Select color ${n}`},n))})]}),N=s.div`
  margin-top: 20px;
`,E=s.button`
  width: 36px;
  height: 36px;
  border-radius: ${r.layout.borderRadius.lg};
  border: none;
  background-color: ${t=>t.$color};
  cursor: pointer;
  transition: ${r.transitions.default};
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  ${t=>t.$isSelected&&`
    border: 4px solid ${r.colors.border.dark};
    border-radius: ${r.layout.borderRadius.lg};
  `}
`,O=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r.layout.gap.xl} ${r.layout.gap.lg};
  justify-content: center;
  margin-top: ${r.spacing.xl};
`,k=({title:t,onBack:c})=>{const l=y(),o=()=>{c?c():l(-1)};return a.jsxs(q,{children:[a.jsx(p,{className:"back-button",variant:"back",onClick:o,icon:v}),a.jsx(g,{variant:"sub-heading",children:t})]})},q=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  margin-bottom: 2rem;

  .back-button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`,w=C({officeName:u().required("Office name is required").min(2,"Office name must be at least 2 characters").max(50,"Office name must be less than 50 characters"),address:u().required("Address is required").min(5,"Address must be at least 5 characters"),email:u().required("Email is required").email("Invalid email address"),phone:u().required("Phone number is required").matches(/^[0-9+\-() ]+$/,"Invalid phone number format"),capacity:$().required("Capacity is required").positive("Capacity must be a positive number").integer("Capacity must be a whole number").max(999999,"Capacity is too large"),accent:u().required("Color is required")}),R=({onUpdate:t,onSave:c,onDelete:l,error:o,initialValues:n})=>{const e=j({initialValues:n||{officeName:"",address:"",email:"",phone:"",capacity:"",accent:"#FFBE0B"},validationSchema:w,onSubmit:i=>{const d={...i,officeName:h(i.officeName),email:f(i.email)};n&&t?t(d):c(d)}}),x=i=>{const d=i.target.value;e.setFieldValue("email",f(d))},b=i=>{const d=i.target.value;e.setFieldValue("officeName",h(d))};return a.jsxs(a.Fragment,{children:[a.jsx(k,{title:n?"Edit Office":"New Office"}),a.jsxs(A,{onSubmit:e.handleSubmit,children:[o&&a.jsx(P,{children:o}),a.jsx(m,{name:"officeName",type:"text",placeholder:"Office Name",value:e.values.officeName,onChange:b,onBlur:e.handleBlur,error:e.touched.officeName?e.errors.officeName:void 0}),a.jsx(m,{name:"address",type:"text",placeholder:"Physical Address",value:e.values.address,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.address?e.errors.address:void 0}),a.jsx(m,{name:"email",type:"email",placeholder:"Email Address",value:e.values.email,onChange:x,onBlur:e.handleBlur,error:e.touched.email?e.errors.email:void 0}),a.jsx(m,{name:"phone",type:"tel",placeholder:"Phone Number",value:e.values.phone,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.phone?e.errors.phone:void 0}),a.jsx(m,{name:"capacity",type:"number",placeholder:"Maximum Capacity",value:e.values.capacity,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.capacity?e.errors.capacity:void 0}),a.jsx(F,{name:"accent",value:e.values.accent,onChange:i=>e.setFieldValue("accent",i),onBlur:()=>e.setFieldTouched("accent"),error:e.touched.accent?e.errors.accent:void 0}),a.jsxs(D,{children:[a.jsx(p,{type:"submit",variant:"primary",children:n?"Update Office":"Add Office"}),l&&a.jsx(p,{type:"button",variant:"warning",onClick:l,children:"Delete Office"})]})]})]})},A=s.form`
  display: flex;
  flex-direction: column;
  gap: ${r.layout.gap.md};
  max-width: ${r.layout.maxContentWidth};
  margin: 0 auto;
`,D=s.div`
  display: flex;
  gap: ${r.layout.gap.md};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${r.spacing.xl};
`,P=s.div`
  color: ${r.colors.danger.main};
  background: ${r.colors.danger.light};
  padding: ${r.spacing.md};
  border-radius: ${r.layout.borderRadius.xs};
  margin-bottom: ${r.spacing.sm};
`;export{R as O,k as P};
