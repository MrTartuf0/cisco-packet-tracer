import{d as h,aj as v,r as m,I as f,b as s,c as o,J as i,f as p,e as t,F as y,ah as C,p as k,i as b,t as g,l as I}from"./entry.CsppgHun.js";const n=e=>(k("data-v-9717fb3e"),e=e(),b(),e),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=h({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:l}=v(),c=m("init"),d=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(s(),o("div",S,B)):p("",!0),T,t("div",j,[(s(!0),o(y,null,C(i(d),r=>(s(),o("span",{key:r,class:"line"},[F,t("span",N,g(r),1)]))),128))]),i(c)!=="copied"?(s(),o("div",V," Click to copy ")):p("",!0)]))}}),E=I(q,[["__scopeId","data-v-9717fb3e"]]);export{E as default};