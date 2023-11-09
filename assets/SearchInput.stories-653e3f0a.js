import{j as t}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import{I as w,a as N,G as F}from"./variables-c2977bc8.js";import{v as q}from"./v4-4a60fe23.js";import"./_commonjsHelpers-725317a4.js";import"./index-778010da.js";const G="_inputWrapper_cumai_1",H="_icon_cumai_5",R="_autocompleteField_cumai_15",V="_autocompleteItem_cumai_32",m={inputWrapper:G,icon:H,autocompleteField:R,autocompleteItem:V},p=a.forwardRef((d,o)=>{const{labelName:r="",hasError:i,errorMessage:c,searchingList:n,itemClickHandler:l,hasFilter:e=!0,value:I="",...h}=d,g=`label-${q()}`,[f,x]=a.useState(!1),E=e?n.filter(s=>s.name.toLowerCase().includes(String(I).toLowerCase())).sort((s,u)=>s.name>u.name?1:-1):n;async function b(s,u){await s(u),x(!1)}const S=a.useRef(null);return a.useEffect(()=>{const s=u=>{S&&S.current&&!S.current.contains(u.target)&&x(!1)};return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[]),t.jsxs("div",{className:m.input,children:[r&&t.jsx(w,{labelId:g,children:r}),t.jsxs("div",{className:m.inputWrapper,ref:S,children:[t.jsx(N,{labelId:g,hasError:i,errorMessage:c,ref:o,value:I,onFocus:()=>x(!0),...h}),t.jsx("span",{className:m.icon}),f&&t.jsx("ul",{className:m.autocompleteField,children:E.map(s=>t.jsx("li",{className:m.autocompleteItem,onClick:()=>b(l,s),children:s.name},s.id))})]})]})});try{p.displayName="SearchInput",p.__docgenInfo={description:"",displayName:"SearchInput",props:{labelName:{defaultValue:null,description:"",name:"labelName",required:!1,type:{name:"string"}},searchingList:{defaultValue:null,description:"",name:"searchingList",required:!0,type:{name:"SearchingItem[]"}},itemClickHandler:{defaultValue:null,description:"",name:"itemClickHandler",required:!0,type:{name:"(e: SearchingItem) => void"}},hasFilter:{defaultValue:null,description:"",name:"hasFilter",required:!1,type:{name:"boolean"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}}}}}catch{}const $=[{id:"1",name:"Футбол"},{id:"2",name:"Хоккей"},{id:"3",name:"Баскетбол"},{id:"4",name:"Теннис"},{id:"5",name:"Айкидо"},{id:"6",name:"Гандбол"},{id:"7",name:"Бокс"},{id:"8",name:"Дзюдо"}],U={title:"ui/SearchInput",component:p,parameters:{layout:"centered"},tags:["autodocs"],decorators:[d=>t.jsx("div",{style:{width:"600px"},children:t.jsx(d,{})})]},_={args:{searchingList:$,placeholder:"Поиск",type:"text"},render:function(o){const[r,i]=a.useState(null),[c,n]=a.useState(""),l=e=>{i(e),n("")};return r&&console.log(r),t.jsx(p,{...o,value:c,onChange:e=>n(e.target.value),itemClickHandler:l})}},y={args:{labelName:"Адрес",placeholder:"Поиск",type:"text",hasFilter:!1,searchingList:[]},render:function(o){const[r,i]=a.useState(""),[c,n]=a.useState([]),l=async e=>{i(e);const h=await(await fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=${F}&text=${e}&types=locality,street,house&print_address=1`)).json();if(h.results){const g=h.results.map(f=>({id:f.address.formatted_address,name:f.address.formatted_address}));n(g)}};return t.jsx(p,{...o,searchingList:c,value:r,onChange:e=>l(e.target.value),itemClickHandler:e=>i(e.name)})}};var v,C,L;_.parameters={..._.parameters,docs:{...(v=_.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(C=_.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,A,j;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(A=y.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const z=["SportSearching","AddressSearching"];export{y as AddressSearching,_ as SportSearching,z as __namedExportsOrder,U as default};
//# sourceMappingURL=SearchInput.stories-653e3f0a.js.map
