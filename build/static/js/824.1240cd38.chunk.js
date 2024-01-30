"use strict";(self.webpackChunk_minimal_kit_simple_cra_js=self.webpackChunk_minimal_kit_simple_cra_js||[]).push([[824],{32869:function(e,t,n){n.d(t,{Ds:function(){return r.Ds}});var r=n(58518);n(58764)},25824:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(6907),a=n(4942),o=n(1413),c=n(74165),s=n(15861),i=n(29439),u=n(12065),l=n(64554),d=n(89164),p=n(4567),h=n(57088),x=n(72791),f=n(30439),v=n(25228),Z=n(61474),m=n(61889),g=n(93006),j=n(63466),b=n(73590),k=n(5403),P=n(43513),w=n(52073),y=n(18406),B=n(99615),S=n(88014),V=n(32869),_=n(80184),C={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60%",bgcolor:"background.paper",boxShadow:24,borderRadius:"10px",p:3};function I(){var e=(0,h.K$)(),t=(0,V.Ds)().enqueueSnackbar,n=(0,x.useState)("one"),r=(0,i.Z)(n,2),I=r[0],A=r[1],z=(0,x.useState)(""),F=(0,i.Z)(z,2),H=F[0],U=F[1],R=(0,x.useState)(!1),W=(0,i.Z)(R,2),q=W[0],D=W[1],T=(0,x.useState)(!1),E=(0,i.Z)(T,2),N=(E[0],E[1]),O=(0,x.useState)(!1),G=(0,i.Z)(O,2),$=G[0],K=G[1],L=(0,x.useState)([]),M=(0,i.Z)(L,2),J=M[0],Q=M[1],X=(0,x.useState)({_id:"",percentageValue:"",value:""}),Y=(0,i.Z)(X,2),ee=Y[0],te=Y[1],ne=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,r,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(w._.keyUserToken),r=(0,y.sw)(n),e.next=5,B.ZP.post(B.Hv.productBarcodeValues.details,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&(console.log(a),N(!1),a.data.data&&Object.keys(a.data.data).length>0&&te(a.data.data)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t("Failed to fetch Barcode Values!",{variant:"error"}),N(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),re=function(e,t){te((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,a.Z)({},e,t))}))},ae=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,r,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(w._.keyUserToken),r=(0,y.sw)(n),e.next=5,B.ZP.post(B.Hv.product.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(a=e.sent)&&(K(!1),Q(a.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t("Failed to fetch products!",{variant:"error"}),K(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),oe=(0,x.useState)(null),ce=(0,i.Z)(oe,2),se=ce[0],ie=(ce[1],Boolean(se),(0,x.useState)({})),ue=(0,i.Z)(ie,2);ue[0],ue[1];(0,x.useEffect)((function(){N(!0),ne(),K(!0),ae()}),[]);var le=function(){return D(!1)},de=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem(w._.keyUserToken),r=(0,y.sw)(n),B.ZP.post(B.Hv.productBarcodeValues.add,ee,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){t("Barcode Values created successfully!",{variant:"success"}),te(e.data.data),le()})).catch((function(e){t(e.error||e.msg,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem(w._.keyUserToken),r=(0,y.sw)(n),B.ZP.post(B.Hv.productBarcodeValues.update,ee,{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){t("Barcode Values updated successfully!",{variant:"success"}),le()})).catch((function(e){t(e.error||e.msg,{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=[{name:"Product Name",selector:function(e){return e.name},sortable:!0,width:"auto"},{name:"Product Barcode",selector:function(e){return e.barcode},sortable:!0,width:"auto",center:"true"},{name:"Last Updated",selector:function(e){return(0,y.p6)(e.updatedAt)},sortable:!0,width:"auto",center:"true"},{name:"Actions",width:"auto",center:"true",cell:function(e){return(0,_.jsx)(f.Z,{onClick:function(){},style:{color:y.$_.actionButton},variant:"outlined",endIcon:(0,_.jsx)(S.Z,{}),children:"Print"})}}],xe=J.filter((function(e){var t;return null===e||void 0===e||null===(t=e.barcode)||void 0===t?void 0:t.toString().includes(H)}));return(0,_.jsxs)(d.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,_.jsx)(p.Z,{variant:"h4",children:" Product Barcode "}),(0,_.jsxs)(v.Z,{sx:{mt:2},value:I,onChange:function(e,t){A(t)},textColor:"secondary",indicatorColor:"secondary","aria-label":"secondary tabs example",children:[(0,_.jsx)(Z.Z,{value:"one",label:"Barcode"}),(0,_.jsx)(Z.Z,{value:"two",label:"Barcode Values"})]}),"one"===I&&(0,_.jsx)(l.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,u.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,_.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,_.jsx)(m.ZP,{item:!0,xs:12,children:(0,_.jsx)(g.Z,{size:"small",onChange:function(e){return U(e.target.value)},type:"text",placeholder:"Search Barcode",InputProps:{endAdornment:(0,_.jsx)(j.Z,{position:"end",children:(0,_.jsx)(k.Z,{})})}})}),(0,_.jsx)(m.ZP,{item:!0,xs:12,children:(0,_.jsx)(P.ZP,{style:{borderRadius:"20px"},title:"Barcodes",data:xe,columns:he,progressPending:$,pagination:!0})})]})}),"two"===I&&(0,_.jsx)(l.Z,{sx:{mt:2,width:1,p:2,borderRadius:2,bgcolor:function(e){return(0,u.Fq)(e.palette.grey[500],.04)},border:function(e){return"dashed 1px ".concat(e.palette.divider)}},children:(0,_.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,_.jsx)(m.ZP,{item:!0,xs:6,children:(0,_.jsx)(g.Z,{fullWidth:!0,label:"Percentage Value",name:"percentageValue",value:ee.percentageValue,InputProps:{endAdornment:(0,_.jsx)(j.Z,{position:"end",children:"%"})},disabled:!0})}),(0,_.jsx)(m.ZP,{item:!0,xs:6,children:(0,_.jsx)(g.Z,{fullWidth:!0,label:"Value",name:"value",value:ee.value,disabled:!0})}),(0,_.jsx)(m.ZP,{item:!0,xs:12,children:(0,_.jsx)(f.Z,{variant:"contained",onClick:function(){return D(!0)},children:"CONFIGURE"})})]})}),(0,_.jsx)(b.Z,{open:q,children:(0,_.jsx)(l.Z,{sx:C,children:(0,_.jsxs)(m.ZP,{container:!0,spacing:2,children:[(0,_.jsx)(m.ZP,{item:!0,xs:6,children:(0,_.jsx)(g.Z,{fullWidth:!0,type:"number",label:"Percentage Value",name:"percentageValue",value:ee.percentageValue,InputProps:{endAdornment:(0,_.jsx)(j.Z,{position:"end",children:"%"})},onChange:function(e){return re("percentageValue",e.target.value)}})}),(0,_.jsx)(m.ZP,{item:!0,xs:6,children:(0,_.jsx)(g.Z,{fullWidth:!0,type:"number",label:"Value",name:"value",value:ee.value,onChange:function(e){return re("value",e.target.value)}})}),(0,_.jsxs)(m.ZP,{item:!0,xs:12,display:"flex",justifyContent:"flex-end",gap:"10px",children:[(0,_.jsx)(f.Z,{variant:"contained",onClick:function(){ee._id.length>0?pe():de()},disabled:!ee.percentageValue||!ee.value,children:"CONFIGURE"}),(0,_.jsx)(f.Z,{variant:"contained",color:"error",onClick:le,children:"Cancel"})]})]})})})]})}function A(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.ql,{children:(0,_.jsx)("title",{children:" Dashboard : Barcodes"})}),(0,_.jsx)(I,{})]})}},88014:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(45649)),o=n(80184);t.Z=(0,a.default)((0,o.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print")}}]);
//# sourceMappingURL=824.1240cd38.chunk.js.map