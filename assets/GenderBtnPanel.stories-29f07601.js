import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as y}from"./index-c013ead5.js";import{c as _}from"./index-778010da.js";import{G as B}from"./GenderBtn-ee279a4a.js";import{I as f,b as G,a}from"./Icon-2e4d1518.js";import"./_commonjsHelpers-725317a4.js";const I="_panel_yls5n_1",x={panel:I},N=s=>{const{className:i="",setOption:l,btns:d}=s,[p,m]=y.useState(1),u=_({[i]:!0,[x.panel]:!0});return t.jsx("div",{className:u,children:d.map(e=>t.jsxs(B,{isActive:p===e.id,onClick:()=>{m(e.id),l(e.id)},children:[t.jsx(f,{type:e.icon,color:G.SECONDARY}),e.title]},e.id))})};try{GenderBtnPanel.displayName="GenderBtnPanel",GenderBtnPanel.__docgenInfo={description:"",displayName:"GenderBtnPanel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},setOption:{defaultValue:null,description:"",name:"setOption",required:!0,type:{name:"(btnId: number) => void"}},btns:{defaultValue:null,description:"",name:"btns",required:!0,type:{name:"Btn[]"}}}}}catch{}const b={title:"ui/GenderBtnPanel",component:N,parameters:{docs:{description:{component:"чекбокс мальчик-девочка"}},layout:"centered"},tags:["autodocs"]},n={args:{className:"custom-class",btns:[{id:1,title:"девочка",icon:a.GIRL},{id:2,title:"мальчик",icon:a.BOY}]}};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    btns: [{
      id: 1,
      title: "девочка",
      icon: IconTypes.GIRL
    }, {
      id: 2,
      title: "мальчик",
      icon: IconTypes.BOY
    }]
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const h=["GenderButtonPanel"];export{n as GenderButtonPanel,h as __namedExportsOrder,b as default};
//# sourceMappingURL=GenderBtnPanel.stories-29f07601.js.map
