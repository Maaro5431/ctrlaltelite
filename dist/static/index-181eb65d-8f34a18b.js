import{s as b,j as t,P as j,_ as P,u as g,f as L,b as w,c as B,B as k,d as A,A as C,p as T,r as v,e as D,z as O,y as S}from"./sanity-fff0ac21.js";import{P as H}from"./PaneItem-cc425889-eb2ce23c.js";const W=o=>{let{index:n,menuItems:a,menuItemGroups:i,title:d}=o;const{features:c}=g(),{collapsed:l,isLast:p}=L(),u=p&&!l?-1:0;return t.jsx(w,{actions:t.jsx(B,{menuItems:a,menuItemGroups:i}),backButton:c.backButton&&n>0&&t.jsx(k,{as:A,"data-as":"a",icon:C,mode:"bleed"}),tabIndex:u,title:d})};var x=Object.freeze,z=Object.defineProperty,E=(o,n)=>x(z(o,"raw",{value:x(n||o.slice())})),I;const G=b.hr(I||(I=E([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function R(o){const{childItemId:n,items:a,isActive:i,layout:d,showIcons:c,title:l}=o,{collapsed:p}=T(),u=v.useCallback(e=>{var s;return((s=a==null?void 0:a.find((r,h)=>h===e))==null?void 0:s.type)==="divider"},[a]),m=v.useCallback(e=>{var s;const r=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof r<"u"?r!==!1:c!==!1},[c]),f=v.useCallback((e,s)=>{const{virtualIndex:r}=s;if(e.type==="divider")return t.jsx(D,{marginTop:1,marginBottom:2,children:t.jsx(G,{})},"divider-".concat(r));const h=!i&&n===e.id,y=i&&n===e.id,_=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return t.jsx(H,{icon:m(e)?e.icon:!1,id:e.id,layout:d,marginBottom:1,pressed:h,schemaType:e.schemaType,selected:y,title:e.title,value:_},e.id)},[n,i,d,m]);return t.jsx(O,{overflow:p?"hidden":"auto",children:a&&a.length>0&&t.jsx(S,{activeItemDataAttr:"data-hovered",ariaLabel:"List of ".concat(l),canReceiveFocus:!0,focusRingOffset:-3,getItemDisabled:u,itemHeight:51,items:a,onlyShowSelectionWhenActive:!0,padding:2,paddingBottom:1,renderItem:f,wrapAround:!1})})}function M(o){const{childItemId:n,index:a,isActive:i,isSelected:d,pane:c,paneKey:l}=o,{defaultLayout:p,displayOptions:u,items:m,menuItems:f,menuItemGroups:e,title:s}=c,r=(u==null?void 0:u.showIcons)!==!1;return t.jsxs(j,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:d,children:[P,t.jsx(W,{index:a,menuItems:f,menuItemGroups:e,title:s}),t.jsx(R,{childItemId:n,isActive:i,items:m,layout:p,showIcons:r,title:s},l)]})}export{M as default};
