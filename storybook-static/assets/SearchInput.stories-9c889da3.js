import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import{I as F,a as N,G as V}from"./variables-6f5a091d.js";import{v as q}from"./v4-4a60fe23.js";import"./_commonjsHelpers-725317a4.js";import"./index-778010da.js";const G="_input_bcjxw_1",H="_inputWrapper_bcjxw_6",R="_autocompleteField_bcjxw_10",$="_autocompleteItem_bcjxw_27",f={input:G,inputWrapper:H,autocompleteField:R,autocompleteItem:$},h=a.forwardRef((i,o)=>{const{labelName:r="",hasError:d,errorMessage:c,searchingList:n,itemClickHandler:u,hasFilter:t=!0,...v}=i,p=`label-${q()}`,[_,l]=a.useState(!1),[x,I]=a.useState(""),A=t?n.filter(e=>e.title.toLowerCase().includes(String(x).toLowerCase())).sort((e,m)=>e.title>m.title?1:-1):n;async function E(e,m){await e(m),I(""),l(!1)}const g=a.useRef(null);return a.useEffect(()=>{const e=m=>{g&&g.current&&!g.current.contains(m.target)&&l(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),s.jsxs("div",{className:f.input,children:[r&&s.jsx(F,{labelId:p,children:r}),s.jsxs("div",{className:f.inputWrapper,ref:g,children:[s.jsx(N,{labelId:p,hasError:d,errorMessage:c,ref:o,value:x,onFocus:()=>l(!0),onChange:e=>I(e.target.value),...v}),_&&s.jsx("ul",{className:f.autocompleteField,children:A.map(e=>s.jsx("li",{className:f.autocompleteItem,onClick:()=>E(u,e),children:e.title},e.id))})]})]})});try{h.displayName="SearchInput",h.__docgenInfo={description:"",displayName:"SearchInput",props:{labelName:{defaultValue:null,description:"",name:"labelName",required:!1,type:{name:"string"}},searchingList:{defaultValue:null,description:"",name:"searchingList",required:!0,type:{name:"SearchingItem[]"}},itemClickHandler:{defaultValue:null,description:"",name:"itemClickHandler",required:!0,type:{name:"(e: SearchingItem) => void"}},hasFilter:{defaultValue:null,description:"",name:"hasFilter",required:!1,type:{name:"boolean"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"rubble"'},{value:'"downarrow"'},{value:'"uparrow"'},{value:'"magnify"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"icon_left"'},{value:'"icon_right"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}}}}}catch{}const O=[{id:"1",name:"Футбол"},{id:"2",name:"Хоккей"},{id:"3",name:"Баскетбол"},{id:"4",name:"Теннис"},{id:"5",name:"Айкидо"},{id:"6",name:"Гандбол"},{id:"7",name:"Бокс"},{id:"8",name:"Дзюдо"}],U={title:"ui/SearchInput",component:h,parameters:{layout:"centered"},tags:["autodocs"],decorators:[i=>s.jsx("div",{style:{width:"600px"},children:s.jsx(i,{})})]},S={args:{searchingList:O,placeholder:"Поиск",type:"text"},render:function(o){const[r,d]=a.useState(null),[c,n]=a.useState(""),u=t=>{d(t),n("")};return r&&console.log(r),s.jsx(h,{...o,value:c,onChange:t=>n(t.target.value),itemClickHandler:u})}},y={args:{labelName:"Адрес",placeholder:"Поиск",type:"text",hasFilter:!1,searchingList:[]},render:function(o){const[r,d]=a.useState(""),[c,n]=a.useState([]),u=async t=>{d(t);const p=await(await fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=${V}&text=${t}&types=locality,street,house&print_address=1`)).json();if(p.results){const _=p.results.map(l=>({id:l.address.formatted_address,name:l.address.formatted_address}));n(_)}};return s.jsx(h,{...o,searchingList:c,value:r,onChange:t=>u(t.target.value),itemClickHandler:t=>d(t.name)})}};var C,L,k;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    searchingList: sports,
    placeholder: "Поиск",
    type: "text"
  },
  render: function Render(args) {
    const [item, setItem] = useState<unknown>(null);
    const [searchedSport, setSearchedSport] = useState("");
    const handleItemClick = (sport: unknown) => {
      setItem(sport);
      setSearchedSport("");
    };
    if (item) {
      console.log(item);
    }
    return <SearchInput {...args} value={searchedSport} onChange={e => setSearchedSport(e.target.value)} itemClickHandler={handleItemClick} />;
  }
}`,...(k=(L=S.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var w,b,j;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    labelName: "Адрес",
    placeholder: "Поиск",
    type: "text",
    hasFilter: false,
    searchingList: []
  },
  render: function Render(args) {
    const [searchingAddress, setSearchingAddress] = useState("");
    const [addressList, setAddressList] = useState<SearchingItem[]>([]);
    const handleChange = async (value: string) => {
      setSearchingAddress(value);
      const res = await fetch(\`https://suggest-maps.yandex.ru/v1/suggest?apikey=\${GEOSUGGEST_KEY}&text=\${value}&types=locality,street,house&print_address=1\`);
      const addresses: YandexAnswer = await res.json();
      if (addresses.results) {
        const formattedAddresses = addresses.results.map(address => ({
          id: address.address.formatted_address,
          name: address.address.formatted_address
        }));
        setAddressList(formattedAddresses);
      }
    };
    return <SearchInput {...args} searchingList={addressList} value={searchingAddress} onChange={e => handleChange(e.target.value)} itemClickHandler={(e: SearchingItem) => setSearchingAddress(e.name)} />;
  }
}`,...(j=(b=y.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const z=["SportSearching","AddressSearching"];export{y as AddressSearching,S as SportSearching,z as __namedExportsOrder,U as default};
//# sourceMappingURL=SearchInput.stories-9c889da3.js.map
