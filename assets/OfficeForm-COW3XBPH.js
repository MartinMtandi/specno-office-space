import{d,t as r,j as a,T as x,m as v,B as f,b as C,x as $,y as u,z as j,A as B,I as m,n as F,C as h,D as g}from"./index-C7rSeGsq.js";const N=["#FFBE0B","#FF9B71","#FB5607","#97512C","#DBBADD","#FF006E","#A9F0D1","#00B402","#489DDA","#0072E8","#8338EC"],O=({name:i,value:c="#FFBE0B",onChange:l,onBlur:s})=>a.jsxs(E,{children:[a.jsx(x,{color:"#000000",variant:"h3-semibold",children:"Office Colour"}),a.jsx(q,{children:N.map(t=>a.jsx(k,{$color:t,$isSelected:c===t,onClick:()=>{l(t),s==null||s()},type:"button",name:i,"aria-label":`Select color ${t}`},t))})]}),E=d.div`
  margin-top: 20px;
`,k=d.button`
  width: 36px;
  height: 36px;
  border-radius: ${r.layout.borderRadius.lg};
  border: none;
  background-color: ${i=>i.$color};
  cursor: pointer;
  transition: ${r.transitions.default};
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  ${i=>i.$isSelected&&`
    border: 4px solid ${r.colors.border.dark};
    border-radius: ${r.layout.borderRadius.lg};
  `}
`,q=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${r.layout.gap.xl} ${r.layout.gap.lg};
  justify-content: center;
  margin-top: ${r.spacing.xl};
`,w=({title:i,onBack:c})=>{const l=v(),s=()=>{c?c():l(-1)};return a.jsxs(A,{children:[a.jsx(f,{className:"back-button",variant:"back",onClick:s,icon:C}),a.jsx(x,{variant:"sub-heading",children:i})]})},A=d.div`
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
`,D=$({officeName:u().required("Office name is required").min(2,"Office name must be at least 2 characters").max(50,"Office name must be less than 50 characters"),address:u().required("Address is required").min(5,"Address must be at least 5 characters"),email:u().required("Email is required").email("Invalid email address"),phone:u().required("Phone number is required").matches(/^[0-9+\-() ]+$/,"Invalid phone number format"),capacity:j().required("Capacity is required").positive("Capacity must be a positive number").integer("Capacity must be a whole number").max(999,"Capacity is too large"),accent:u().required("Color is required")}),T=({onUpdate:i,onSave:c,onDelete:l,error:s,initialValues:t})=>{const e=B({initialValues:t||{officeName:"",address:"",email:"",phone:"",capacity:"",accent:"#FFBE0B"},validate:n=>{const o={};if(t&&t.id){const p=F(t.id);p&&parseInt(n.capacity)<p.members.length&&(o.capacity=`Capacity cannot be less than current staff count (${p.members.length})`)}return o},validationSchema:D,onSubmit:n=>{const o={...n,officeName:h(n.officeName),email:g(n.email)};t&&i?i(o):c&&c(o)}}),b=n=>{const o=n.target.value;e.setFieldValue("email",g(o))},y=n=>{const o=n.target.value;e.setFieldValue("officeName",h(o))};return a.jsxs(a.Fragment,{children:[a.jsx(w,{title:t?"Edit Office":"New Office"}),a.jsxs(P,{onSubmit:e.handleSubmit,children:[s&&a.jsx(S,{children:s}),a.jsx(m,{name:"officeName",type:"text",placeholder:"Office Name",value:e.values.officeName,onChange:y,onBlur:e.handleBlur,error:e.touched.officeName?e.errors.officeName:void 0}),a.jsx(m,{name:"address",type:"text",placeholder:"Physical Address",value:e.values.address,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.address?e.errors.address:void 0}),a.jsx(m,{name:"email",type:"email",placeholder:"Email Address",value:e.values.email,onChange:b,onBlur:e.handleBlur,error:e.touched.email?e.errors.email:void 0}),a.jsx(m,{name:"phone",type:"tel",placeholder:"Phone Number",value:e.values.phone,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.phone?e.errors.phone:void 0}),a.jsx(m,{name:"capacity",type:"number",placeholder:"Maximum Capacity",value:e.values.capacity,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.capacity?e.errors.capacity:void 0}),a.jsx(O,{name:"accent",value:e.values.accent,onChange:n=>e.setFieldValue("accent",n),onBlur:()=>e.setFieldTouched("accent"),error:e.touched.accent?e.errors.accent:void 0}),a.jsxs(I,{children:[a.jsx(f,{type:"submit",variant:"primary",children:t?"Update Office":"Add Office"}),l&&a.jsx(f,{type:"button",variant:"warning",onClick:l,children:"Delete Office"})]})]})]})},P=d.form`
  display: flex;
  flex-direction: column;
  gap: ${r.layout.gap.md};
  max-width: ${r.layout.maxContentWidth};
  margin: 0 auto;
`,I=d.div`
  display: flex;
  gap: ${r.layout.gap.md};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${r.spacing.xl};
`,S=d.div`
  color: ${r.colors.danger.main};
  background: ${r.colors.danger.light};
  padding: ${r.spacing.md};
  border-radius: ${r.layout.borderRadius.xs};
  margin-bottom: ${r.spacing.sm};
`;export{T as O,w as P};
