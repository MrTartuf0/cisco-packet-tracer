import{d as p,a7 as _,I as a,Y as f,b as o,X as i,w as m,f as g,n as x,J as S,a8 as b,E as h,k}from"./entry.e259a508.js";import{r as y}from"./slot.93e7737c.js";import"./node.676c5e99.js";const z=p({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:_("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const s=a(()=>((t=n)=>`{color.${t.color}.600}`)()),r=a(()=>((t=n)=>`{color.${t.color}.500}`)()),n=e,c={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:l}=f(n,c,{_YM9_buttonPrimary:s,_A23_buttonSecondary:r});return(t,H)=>{const u=b,d=h;return o(),i(d,{class:x(["button-link",[S(l)]]),to:e.href,target:e.blank?"_blank":void 0},{default:m(()=>[e.icon?(o(),i(u,{key:0,name:e.icon},null,8,["name"])):g("",!0),y(t.$slots,"default",{unwrap:"p ul li"},void 0,!0)]),_:3},8,["to","target","class"])}}});const C=k(z,[["__scopeId","data-v-a0fd7c8c"]]);export{C as default};
