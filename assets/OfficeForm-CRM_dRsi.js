import{d as c,x as y,j as r,T as g,p as v,B as p,a as C,y as $,z as l,A as j,C as B,I as u,l as F,D as f,E as h}from"./index-D6WuAkoI.js";const N=["#FFBE0B","#FF9B71","#FB5607","#97512C","#DBBADD","#FF006E","#A9F0D1","#00B402","#489DDA","#0072E8","#8338EC"],O=({name:e,value:i="#FFBE0B",onChange:d,onBlur:s})=>r.jsxs(E,{children:[r.jsx(g,{color:"#000000",variant:"h3-semibold",children:"Office Colour"}),r.jsx(k,{children:N.map(t=>r.jsx(q,{$color:t,$isSelected:i===t,onClick:()=>{d(t),s==null||s()},type:"button",name:e,"aria-label":`Select color ${t}`},t))})]}),E=c.div`
  margin-top: 20px;
`,q=c.button`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.layout.borderRadius.lg};
  border: none;
  background-color: ${e=>e.$color};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.default};
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  ${e=>e.$isSelected&&y`
    border: 4px solid ${({theme:i})=>i.colors.border.dark};
    border-radius: ${({theme:i})=>i.layout.borderRadius.lg};
  `}
`,k=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.layout.gap.xl} ${({theme:e})=>e.layout.gap.lg};
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
`,w=({title:e,onBack:i})=>{const d=v(),s=()=>{i?i():d(-1)};return r.jsxs(A,{children:[r.jsx(p,{className:"back-button",variant:"back",onClick:s,icon:C}),r.jsx(g,{variant:"sub-heading",children:e})]})},A=c.div`
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
`,D=$({officeName:l().required("Office name is required").min(2,"Office name must be at least 2 characters").max(50,"Office name must be less than 50 characters"),address:l().required("Address is required").min(5,"Address must be at least 5 characters"),email:l().required("Email is required").email("Invalid email address"),phone:l().required("Phone number is required").matches(/^[0-9+\-() ]+$/,"Invalid phone number format"),capacity:j().required("Capacity is required").positive("Capacity must be a positive number").integer("Capacity must be a whole number").max(999,"Capacity is too large"),accent:l().required("Color is required")}),T=({onUpdate:e,onSave:i,onDelete:d,error:s,initialValues:t})=>{const a=B({initialValues:t||{officeName:"",address:"",email:"",phone:"",capacity:"",accent:"#FFBE0B"},validate:n=>{const o={};if(t&&t.id){const m=F(t.id);m&&parseInt(n.capacity)<m.members.length&&(o.capacity=`Capacity cannot be less than current staff count (${m.members.length})`)}return o},validationSchema:D,onSubmit:n=>{const o={...n,officeName:f(n.officeName),email:h(n.email),address:f(n.address)};t&&e?e(o):i&&i(o)}}),x=n=>{const o=n.target.value;a.setFieldValue("email",h(o))},b=n=>{const o=n.target.value;a.setFieldValue("officeName",o)};return r.jsxs(r.Fragment,{children:[r.jsx(w,{title:t?"Edit Office":"New Office"}),r.jsxs(P,{onSubmit:a.handleSubmit,children:[s&&r.jsx(S,{children:s}),r.jsx(u,{name:"officeName",type:"text",placeholder:"Office Name",value:a.values.officeName,onChange:b,onBlur:a.handleBlur,error:a.touched.officeName?a.errors.officeName:void 0}),r.jsx(u,{name:"address",type:"text",placeholder:"Physical Address",value:a.values.address,onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.address?a.errors.address:void 0}),r.jsx(u,{name:"email",type:"email",placeholder:"Email Address",value:a.values.email,onChange:x,onBlur:a.handleBlur,error:a.touched.email?a.errors.email:void 0}),r.jsx(u,{name:"phone",type:"tel",placeholder:"Phone Number",value:a.values.phone,onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.phone?a.errors.phone:void 0}),r.jsx(u,{name:"capacity",type:"number",placeholder:"Maximum Capacity",value:a.values.capacity,onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.capacity?a.errors.capacity:void 0}),r.jsx(O,{name:"accent",value:a.values.accent,onChange:n=>a.setFieldValue("accent",n),onBlur:()=>a.setFieldTouched("accent"),error:a.touched.accent?a.errors.accent:void 0}),r.jsxs(I,{children:[r.jsx(p,{type:"submit",variant:"primary",children:t?"Update Office":"Add Office"}),d&&r.jsx(p,{type:"button",variant:"warning",onClick:d,children:"Delete Office"})]})]})]})},P=c.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.layout.gap.md};
  max-width: ${({theme:e})=>e.layout.maxContentWidth};
  margin: 0 auto;
`,I=c.div`
  display: flex;
  gap: ${({theme:e})=>e.layout.gap.md};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme:e})=>e.spacing.xl};
`,S=c.div`
  color: ${({theme:e})=>e.colors.danger.main};
  background: ${({theme:e})=>e.colors.danger.light};
  padding: ${({theme:e})=>e.spacing.md};
  border-radius: ${({theme:e})=>e.layout.borderRadius.xs};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
`;export{T as O,w as P};
