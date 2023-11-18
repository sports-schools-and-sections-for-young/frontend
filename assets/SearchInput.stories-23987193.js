import{j as s}from"./jsx-runtime-6eef64cc.js";import{r as a}from"./index-c013ead5.js";import{I as j,a as F,G as N}from"./variables-d2659d1f.js";import{v as q}from"./v4-4a60fe23.js";import"./_commonjsHelpers-725317a4.js";import"./index-778010da.js";const V="_autocompleteField_79zof_1",G="_autocompleteItem_79zof_18",_={autocompleteField:V,autocompleteItem:G},m=a.forwardRef((d,l)=>{const{labelName:r="",hasError:o,errorMessage:i,searchingList:n,itemClickHandler:c,hasFilter:e=!0,value:y="",...p}=d,h=`label-${q()}`,[g,v]=a.useState(!1),E=e?n.filter(t=>t.name.toLowerCase().includes(String(y).toLowerCase())).sort((t,u)=>t.name>u.name?1:-1):n;async function b(t,u){await t(u),v(!1)}const I=a.useRef(null);return a.useEffect(()=>{const t=u=>{I&&I.current&&!I.current.contains(u.target)&&v(!1)};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[]),s.jsxs("div",{className:_.input,children:[r&&s.jsx(j,{labelId:h,children:r}),s.jsx(F,{labelId:h,hasError:o,errorMessage:i,ref:l,value:y,onFocus:()=>v(!0),...p}),g&&s.jsx("ul",{className:_.autocompleteField,children:E.map(t=>s.jsx("li",{className:_.autocompleteItem,onClick:()=>b(c,t),children:t.name},t.id))})]})});try{m.displayName="SearchInput",m.__docgenInfo={description:"",displayName:"SearchInput",props:{labelName:{defaultValue:null,description:"",name:"labelName",required:!1,type:{name:"string"}},searchingList:{defaultValue:null,description:"",name:"searchingList",required:!0,type:{name:"SearchingItem[]"}},itemClickHandler:{defaultValue:null,description:"",name:"itemClickHandler",required:!0,type:{name:"(e: SearchingItem) => void"}},hasFilter:{defaultValue:null,description:"",name:"hasFilter",required:!1,type:{name:"boolean"}},labelId:{defaultValue:null,description:"",name:"labelId",required:!1,type:{name:"string"}},iconType:{defaultValue:null,description:"",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"rubble"'},{value:'"downarrow"'},{value:'"uparrow"'},{value:'"magnify"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"icon_left"'},{value:'"icon_right"'}]}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}}}}}catch{}const H=[{id:"1",name:"Футбол"},{id:"2",name:"Хоккей"},{id:"3",name:"Баскетбол"},{id:"4",name:"Теннис"},{id:"5",name:"Айкидо"},{id:"6",name:"Гандбол"},{id:"7",name:"Бокс"},{id:"8",name:"Дзюдо"}],z={title:"ui/SearchInput",component:m,parameters:{layout:"centered"},tags:["autodocs"],decorators:[d=>s.jsx("div",{style:{width:"600px"},children:s.jsx(d,{})})]},f={args:{searchingList:H,placeholder:"Поиск",type:"text"},render:function(l){const[r,o]=a.useState(null),[i,n]=a.useState(""),c=e=>{o(e),n("")};return r&&console.log(r),s.jsx(m,{...l,value:i,onChange:e=>n(e.target.value),itemClickHandler:c})}},S={args:{labelName:"Адрес",placeholder:"Поиск",type:"text",hasFilter:!1,searchingList:[]},render:function(l){const[r,o]=a.useState(""),[i,n]=a.useState([]),c=async e=>{o(e);const p=await(await fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=${N}&text=${e}&types=locality,street,house&print_address=1`)).json();if(p.results){const h=p.results.map(g=>({id:g.address.formatted_address,name:g.address.formatted_address}));n(h)}};return s.jsx(m,{...l,searchingList:i,value:r,onChange:e=>c(e.target.value),itemClickHandler:e=>o(e.name)})}};var x,C,L;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(C=f.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,A,w;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(A=S.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const K=["SportSearching","AddressSearching"];export{S as AddressSearching,f as SportSearching,K as __namedExportsOrder,z as default};
//# sourceMappingURL=SearchInput.stories-23987193.js.map
