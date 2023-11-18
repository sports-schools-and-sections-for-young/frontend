import{j as a}from"./jsx-runtime-6eef64cc.js";import{r as v}from"./index-c013ead5.js";import{c as b}from"./index-778010da.js";import{I as C,a as f,b as R}from"./Icon-2e4d1518.js";import"./_commonjsHelpers-725317a4.js";const B="_button_dbx59_1",I="_active_dbx59_18",x="_primary_dbx59_22",N="_secondary_dbx59_26",l={button:B,active:I,primary:x,secondary:N},o=t=>{const{className:n="",children:e,isActive:s,color:r,..._}=t,S=b({[n]:!0,[l.button]:!0,[l.active]:s,[l[r]]:!0});return a.jsx("button",{type:"button",className:S,..._,children:e})};try{o.displayName="Badge",o.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}var d=(t=>(t.PRIMARY="primary",t.SECONDARY="secondary",t))(d||{});const D={title:"ui/Badge",component:o,parameters:{docs:{description:{component:"Бейдж"}},layout:"centered"},tags:["autodocs"]},c={args:{type:"button",isActive:!1,color:d.PRIMARY},render:function(n){const[e,s]=v.useState(!1),r=()=>{s(!e)};return a.jsxs(o,{...n,type:"button",isActive:e,onClick:r,children:["Гимнастика",e&&a.jsx(C,{type:f.CROSS,color:R.SECONDARY})]})}},i={args:{type:"button",isActive:!1,color:d.SECONDARY},render:function(n){const[e,s]=v.useState(!1),r=()=>{s(!e)};return a.jsxs(o,{...n,type:"button",isActive:e,onClick:r,children:["Сбросить все фильтры",e&&a.jsx(C,{type:f.CROSS,color:R.SECONDARY})]})}};var u,p,m;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "button",
    isActive: false,
    color: BadgeColor.PRIMARY
  },
  render: function Render(args) {
    const [isActive, setIsActive] = useState(false);
    const handleBadgeClick = () => {
      setIsActive(!isActive);
    };
    return <Badge {...args} type="button" isActive={isActive} onClick={handleBadgeClick}>
        Гимнастика
        {isActive && <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />}
      </Badge>;
  }
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,A,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "button",
    isActive: false,
    color: BadgeColor.SECONDARY
  },
  render: function Render(args) {
    const [isActive, setIsActive] = useState(false);
    const handleBadgeClick = () => {
      setIsActive(!isActive);
    };
    return <Badge {...args} type="button" isActive={isActive} onClick={handleBadgeClick}>
        Сбросить все фильтры
        {isActive && <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />}
      </Badge>;
  }
}`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const j=["DefaultBadge","TransparentBadge"];export{c as DefaultBadge,i as TransparentBadge,j as __namedExportsOrder,D as default};
//# sourceMappingURL=Badge.stories-a203f9d5.js.map
