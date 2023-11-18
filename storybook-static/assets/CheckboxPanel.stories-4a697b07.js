import{j as o}from"./jsx-runtime-6eef64cc.js";import{r as R}from"./index-c013ead5.js";import{c as k}from"./index-778010da.js";import{C as S,a as t}from"./index-29ff6470.js";import"./_commonjsHelpers-725317a4.js";const P="_panel_1b4ni_1",N={panel:P},a=i=>{const{className:u="",setOption:C,btns:x}=i,[b,z]=R.useState(1),h=k({[u]:!0,[N.panel]:!0});return o.jsx("div",{className:h,children:x.map(e=>o.jsx(S,{isActive:b===e.id,size:e.size,onClick:()=>{z(e.id),C(e.id)},children:e.title},e.id))})};try{a.displayName="CheckboxPanel",a.__docgenInfo={description:"",displayName:"CheckboxPanel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},setOption:{defaultValue:null,description:"",name:"setOption",required:!0,type:{name:"(btnId: number) => void"}},btns:{defaultValue:null,description:"",name:"btns",required:!0,type:{name:"Btn[]"}}}}}catch{}const f={title:"ui/CheckboxPanel",component:a,parameters:{docs:{description:{component:"составной чекбокс"}},layout:"centered"},tags:["autodocs"]},s={args:{className:"custom-class",btns:[{id:1,title:"не важно",size:t.PRIMARY},{id:2,title:"1 км от дома",size:t.PRIMARY},{id:3,title:"3 км от дома",size:t.PRIMARY}]}},n={args:{className:"custom-class",btns:[{id:1,title:"не важно",size:t.SECONDARY},{id:2,title:"1 км от дома",size:t.SECONDARY},{id:3,title:"3 км от дома",size:t.SECONDARY}]}};var c,r,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    btns: [{
      id: 1,
      title: "не важно",
      size: CheckboxBtnSize.PRIMARY
    }, {
      id: 2,
      title: "1 км от дома",
      size: CheckboxBtnSize.PRIMARY
    }, {
      id: 3,
      title: "3 км от дома",
      size: CheckboxBtnSize.PRIMARY
    }]
  }
}`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    btns: [{
      id: 1,
      title: "не важно",
      size: CheckboxBtnSize.SECONDARY
    }, {
      id: 2,
      title: "1 км от дома",
      size: CheckboxBtnSize.SECONDARY
    }, {
      id: 3,
      title: "3 км от дома",
      size: CheckboxBtnSize.SECONDARY
    }]
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const g=["CheckboxButtonPanelPrimary","CheckboxButtonPanelSecondary"];export{s as CheckboxButtonPanelPrimary,n as CheckboxButtonPanelSecondary,g as __namedExportsOrder,f as default};
//# sourceMappingURL=CheckboxPanel.stories-4a697b07.js.map
