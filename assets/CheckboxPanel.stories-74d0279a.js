import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as x}from"./index-c013ead5.js";import{c as _}from"./index-778010da.js";import{C as b}from"./CheckboxBtn-e3e7ba18.js";import"./_commonjsHelpers-725317a4.js";const h="_panel_ozapn_1",f={panel:h},s=a=>{const{className:i="",setOption:l,btns:d}=a,[p,m]=x.useState(1),u=_({[i]:!0,[f.panel]:!0});return n.jsx("div",{className:u,children:d.map(e=>n.jsx(b,{isActive:p===e.id,onClick:()=>{m(e.id),l(e.id)},children:e.title},e.id))})};try{s.displayName="CheckboxPanel",s.__docgenInfo={description:"",displayName:"CheckboxPanel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},setOption:{defaultValue:null,description:"",name:"setOption",required:!0,type:{name:"(btnId: number) => void"}},btns:{defaultValue:null,description:"",name:"btns",required:!0,type:{name:"Btn[]"}}}}}catch{}const P={title:"ui/CheckboxPanel",component:s,parameters:{docs:{description:{component:"составной чекбокс"}},layout:"centered"},tags:["autodocs"]},t={args:{className:"custom-class",btns:[{id:1,title:"не важно"},{id:2,title:"1 км от дома"},{id:3,title:"3 км от дома"}]}};var o,r,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    btns: [{
      id: 1,
      title: "не важно"
    }, {
      id: 2,
      title: "1 км от дома"
    }, {
      id: 3,
      title: "3 км от дома"
    }]
  }
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const v=["CheckboxButtonPanel"];export{t as CheckboxButtonPanel,v as __namedExportsOrder,P as default};
//# sourceMappingURL=CheckboxPanel.stories-74d0279a.js.map
