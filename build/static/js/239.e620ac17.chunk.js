"use strict";(self.webpackChunk_minimal_kit_simple_cra_js=self.webpackChunk_minimal_kit_simple_cra_js||[]).push([[239],{32869:function(e,n,i){i.d(n,{Ds:function(){return r.Ds}});var r=i(58518);i(58764)},60239:function(e,n,i){i.r(n),i.d(n,{default:function(){return $}});var r=i(6907),t=i(4942),a=i(1413),l=i(74165),o=i(15861),s=i(29439),c=i(72791),d=i(64554),m=i(89164),u=i(4567),p=i(57088),b=i(30439),h=i(71715),y=i(82626),Z=i(93006),g=i(63466),x=i(73590),v=i(61889),f=i(68096),j=i(50168),A=i(58406),N=i(5574),C=i(65661),k=i(39157),P=i(97123),S=i(26759),T=i(42419),w=i(5403),I=i(42716),_=i(18406),D=i(99615),W=i(52073),E=i(32869),L=i(43513),R=i(80184),B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",bgcolor:"background.paper",borderRadius:"10px",boxShadow:24,p:2,backgroundColor:_.$_.modalbackground,height:"90%",overflow:"auto"},M={id:"",name:"",email:"",mobileNumber:"",type:"",company:{name:"",gstNumber:"",billingAddress:{line1:"",line2:"",city:"",state:"",pincode:""}}},V={name:!1,email:!1,mobileNumber:!1,type:!1,company:{name:!1,gstNumber:!1,billingAddress:{line1:!1,line2:!1,city:!1,state:!1,pincode:!1}}};function z(){var e=(0,p.K$)(),n=(0,E.Ds)().enqueueSnackbar,i=(0,c.useState)(!1),r=(0,s.Z)(i,2),z=r[0],$=r[1],q=(0,c.useState)({}),H=(0,s.Z)(q,2),O=H[0],U=H[1],F=(0,c.useState)(!1),G=(0,s.Z)(F,2),X=G[0],K=G[1],J=(0,c.useState)([]),Q=(0,s.Z)(J,2),Y=Q[0],ee=Q[1],ne=(0,c.useState)(M),ie=(0,s.Z)(ne,2),re=ie[0],te=ie[1];console.log({vendor:re});var ae=(0,c.useState)(V),le=(0,s.Z)(ae,2),oe=le[0],se=le[1],ce=(0,c.useState)(!1),de=(0,s.Z)(ce,2),me=de[0],ue=de[1],pe=(0,c.useState)(""),be=(0,s.Z)(pe,2),he=be[0],ye=be[1],Ze=(0,c.useState)(null),ge=(0,s.Z)(Ze,2),xe=ge[0],ve=ge[1],fe=Boolean(xe),je=(0,c.useState)(!1),Ae=(0,s.Z)(je,2),Ne=Ae[0],Ce=Ae[1],ke=function(){return $(!1)},Pe=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var i,r,t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=localStorage.getItem(W._.keyUserToken),r=(0,_.sw)(i),e.next=5,D.ZP.post(D.Hv.vendor.list,{},{headers:{Authorization:"Bearer ".concat(r)}});case 5:(t=e.sent)&&(K(!1),ee(t.data.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n("Failed to fetch vendors!",{variant:"error"}),K(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){K(!0),Pe()}),[]);var Se=function(e){var n=e.target,i=n.name,r=n.value;te((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},i,r))})),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},i,!1))}))},Te=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var i,r,t,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,a.Z)({},V),re.name?i.name=!1:i.name=!0,re.email?i.email=!1:i.email=!0,re.mobileNumber&&/^[0-9]*$/.test(re.mobileNumber)&&10===re.mobileNumber.length?i.mobileNumber=!1:i.mobileNumber=!0,re.type?i.type=!1:i.type=!0,re.company.name?i.company.name=!1:i.company.name=!0,re.company.gstNumber?15!==re.company.gstNumber.length?i.company.gstNumber=!0:i.company.gstNumber=!1:i.company.gstNumber=!0,(r=re.company.billingAddress).line1&&r.line2&&r.city&&r.state&&r.pincode?/^[0-9]*$/.test(r.pincode)?i.company.billingAddress={line1:!1,line2:!1,city:!1,state:!1,pincode:!1}:i.company.billingAddress.pincode=!0:i.company.billingAddress={line1:!r.line1,line2:!r.line2,city:!r.city,state:!r.state,pincode:!r.pincode},!(Object.values(i).some((function(e){return!0===e}))||Object.values(i.company.billingAddress).some((function(e){return!0===e}))||i.company.name||i.company.gstNumber)){e.next=12;break}return se(i),e.abrupt("return");case 12:t=localStorage.getItem(W._.keyUserToken),o=(0,_.sw)(t),D.ZP.post(D.Hv.vendor.add,re,{headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){n("Vendor created successfully!",{variant:"success"}),ke(),se(V),te(M),Pe()})).catch((function(e){n(e.error||e.msg,{variant:"error"})}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=(0,o.Z)((0,l.Z)().mark((function e(){var i,r,t,o;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,a.Z)({},V),re.name?i.name=!1:i.name=!0,re.email?i.email=!1:i.email=!0,re.mobileNumber&&/^[0-9]*$/.test(re.mobileNumber)&&10===re.mobileNumber.length?i.mobileNumber=!1:i.mobileNumber=!0,re.type?i.type=!1:i.type=!0,re.company.name?i.company.name=!1:i.company.name=!0,re.company.gstNumber?15!==re.company.gstNumber.length?i.company.gstNumber=!0:i.company.gstNumber=!1:i.company.gstNumber=!0,(r=re.company.billingAddress).line1&&r.line2&&r.city&&r.state&&r.pincode?/^[0-9]*$/.test(r.pincode)?i.company.billingAddress={line1:!1,line2:!1,city:!1,state:!1,pincode:!1}:i.company.billingAddress.pincode=!0:i.company.billingAddress={line1:!r.line1,line2:!r.line2,city:!r.city,state:!r.state,pincode:!r.pincode},!(Object.values(i).some((function(e){return!0===e}))||Object.values(i.company.billingAddress).some((function(e){return!0===e}))||i.company.name||i.company.gstNumber)){e.next=12;break}return se(i),e.abrupt("return");case 12:t=localStorage.getItem(W._.keyUserToken),o=(0,_.sw)(t),D.ZP.post(D.Hv.vendor.update,re,{headers:{Authorization:"Bearer ".concat(o)}}).then((function(e){n("Vendor updated successfully!",{variant:"success"}),ke(),se(V),te(M),Pe()})).catch((function(e){n(e.error||e.msg,{variant:"error"})}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=[{name:"Name",selector:function(e){return e.name},sortable:!0},{name:"Company Name",selector:function(e){return e.company.name},sortable:!0},{name:"Email Address",selector:function(e){return e.email},sortable:!0},{name:"Contact Number",selector:function(e){return e.mobileNumber},sortable:!0},{name:"GST Number",selector:function(e){return e.company.gstNumber},sortable:!0},{name:"Actions",cell:function(e,n){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(b.Z,{onClick:function(n){ve(n.currentTarget),U(e)},style:{color:_.$_.actionButton},variant:"outlined",endIcon:(0,R.jsx)(S.Z,{}),children:"Action"}),(0,R.jsxs)(h.Z,{id:"basic-menu",anchorEl:xe,open:fe,onClose:function(){ve(null),U({})},MenuListProps:{"aria-labelledby":"basic-button-".concat(n)},children:[(0,R.jsx)(y.Z,{onClick:function(){return function(){ue(!0),ve(null);var e={id:O._id,name:O.name,email:O.email,mobileNumber:O.mobileNumber.slice(3),type:O.type,company:{name:O.company.name,gstNumber:O.company.gstNumber,billingAddress:{line1:O.company.billingAddress.line1,line2:O.company.billingAddress.line2,city:O.company.billingAddress.city,state:O.company.billingAddress.state,pincode:O.company.billingAddress.pincode}}};te(e),$(!0),U({})}()},children:"Edit Details"}),(0,R.jsx)(y.Z,{onClick:function(){return te((function(e){return(0,a.Z)((0,a.Z)({},e),{},{id:O._id})})),Ce(!0),ve(null),void U({})},children:"Remove"})]})]})}}],_e=Y.length>0?Y.filter((function(e){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(null===he||void 0===he?void 0:he.toLowerCase())})):Y;return(0,R.jsxs)(m.Z,{maxWidth:!e.themeStretch&&"xl",children:[(0,R.jsx)(u.Z,{variant:"h4",children:" Vendor Master "}),(0,R.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[(0,R.jsx)(Z.Z,{size:"small",onChange:function(e){return ye(e.target.value)},type:"text",placeholder:"Search",InputProps:{endAdornment:(0,R.jsx)(g.Z,{position:"end",children:(0,R.jsx)(w.Z,{})})}}),(0,R.jsx)(b.Z,{startIcon:(0,R.jsx)(T.Z,{}),variant:"contained",color:"primary",onClick:function(){$(!0),ue(!1)},children:"ADD VENDOR"})]}),(0,R.jsx)(x.Z,{open:z,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(d.Z,{sx:B,children:[(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,R.jsx)(u.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Basic Details"}),(0,R.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,R.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Name",name:"name",value:re.name,onChange:Se,error:oe.name,helperText:oe.name?"Invalid vendor name!..":null,fullWidth:!0,required:!0})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Email",name:"email",value:re.email,onChange:Se,error:oe.email,helperText:oe.email?"Invalid vendor email!..":null,fullWidth:!0,required:!0})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Mobile Number",name:"mobileNumber",value:re.mobileNumber,onChange:Se,error:oe.mobileNumber,helperText:oe.mobileNumber?"Invalid vendor mobile number!..":null,fullWidth:!0,required:!0,inputProps:{maxLength:10},InputProps:{startAdornment:(0,R.jsxs)(g.Z,{position:"start",children:[(0,R.jsx)(I.Z,{})," +91"]})}})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsxs)(f.Z,{fullWidth:!0,children:[(0,R.jsx)(j.Z,{id:"demo-simple-select-label",children:"Type"}),(0,R.jsxs)(A.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:re.type,label:"Type",name:"type",onChange:Se,error:oe.type,children:[(0,R.jsx)(y.Z,{value:"TAXABLE",children:"Taxable"}),(0,R.jsx)(y.Z,{value:"EXEMPTED",children:"Exempted"})]})]})})]})}),(0,R.jsx)(u.Z,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Company Details"}),(0,R.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,R.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Company Name",fullWidth:!0,value:re.company.name,error:oe.company.name,helperText:oe.company.name?"Invalid company name!..":null,onChange:function(e){var n=(0,a.Z)({},re);re.company.name=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{name:!1})})}))}})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"GST Number",fullWidth:!0,error:oe.company.gstNumber,helperText:oe.company.gstNumber?"Invalid GST Number!..":null,value:re.company.gstNumber,onChange:function(e){var n=(0,a.Z)({},re);re.company.gstNumber=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{gstNumber:!1})})}))},inputProps:{maxLength:15}})})]})}),(0,R.jsx)("div",{style:{padding:"10px",backgroundColor:"white",borderRadius:"10px"},children:(0,R.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(v.ZP,{item:!0,xs:12,children:(0,R.jsx)(u.Z,{variant:"h6",children:"Billing Address"})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Address Line 1",error:oe.company.billingAddress.line1,helperText:oe.company.billingAddress.line1?"Invalid line1 address!..":null,value:re.company.billingAddress.line1,onChange:function(e){var n=(0,a.Z)({},re);re.company.billingAddress.line1=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{billingAddress:(0,a.Z)((0,a.Z)({},e.company.billingAddress),{},{line1:!1})})})}))},fullWidth:!0})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Address Line 2",error:oe.company.billingAddress.line2,helperText:oe.company.billingAddress.line2?"Invalid line2 address!..":null,value:re.company.billingAddress.line2,onChange:function(e){var n=(0,a.Z)({},re);re.company.billingAddress.line2=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{billingAddress:(0,a.Z)((0,a.Z)({},e.company.billingAddress),{},{line2:!1})})})}))},fullWidth:!0})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"City",error:oe.company.billingAddress.city,helperText:oe.company.billingAddress.city?"Invalid city name!..":null,value:re.company.billingAddress.city,onChange:function(e){var n=(0,a.Z)({},re);re.company.billingAddress.city=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{billingAddress:(0,a.Z)((0,a.Z)({},e.company.billingAddress),{},{city:!1})})})}))},fullWidth:!0})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsxs)(f.Z,{fullWidth:!0,children:[(0,R.jsx)(j.Z,{id:"demo-simple-select-label",children:"Select State"}),(0,R.jsx)(A.Z,{labelId:"demo-simple-select-label",error:oe.company.billingAddress.state,id:"demo-simple-select",value:re.company.billingAddress.state,onChange:function(e){var n=(0,a.Z)({},re);re.company.billingAddress.state=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{billingAddress:(0,a.Z)((0,a.Z)({},e.company.billingAddress),{},{state:!1})})})}))},label:"Select State",children:_.$q.map((function(e,n){return(0,R.jsx)(y.Z,{value:e,children:e},n)}))})]})}),(0,R.jsx)(v.ZP,{item:!0,xs:6,children:(0,R.jsx)(Z.Z,{label:"Pincode",name:"pincode",value:re.company.billingAddress.pincode,error:oe.company.billingAddress.pincode,helperText:oe.company.billingAddress.pincode?"Invalid pincode!..":null,onChange:function(e){var n=(0,a.Z)({},re);re.company.billingAddress.pincode=e.target.value,te(n),se((function(e){return(0,a.Z)((0,a.Z)({},e),{},{company:(0,a.Z)((0,a.Z)({},e.company),{},{billingAddress:(0,a.Z)((0,a.Z)({},e.company.billingAddress),{},{pincode:!1})})})}))},fullWidth:!0,required:!0,inputProps:{maxLength:6}})})]})})]}),(0,R.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"10px",justifyContent:"flex-end",padding:"10px"},children:[(0,R.jsx)(b.Z,{variant:"contained",color:"primary",onClick:me?we:Te,children:me?"Update":"Save"}),(0,R.jsx)(b.Z,{variant:"outlined",onClick:function(){se(V),me&&(te(M),ue(!1)),$(!1),U({})},children:"Cancel"})]})]})}),(0,R.jsx)("div",{style:{marginTop:"20px"},children:(0,R.jsx)(L.ZP,{columns:Ie,data:_e,pagination:!0,progressPending:X})}),(0,R.jsxs)(N.Z,{open:Ne,onClose:function(){return Ce(!1)},children:[(0,R.jsx)(C.Z,{children:"Remove Vendor"}),(0,R.jsx)(k.Z,{children:"Are you sure you want to delete this vendor?"}),(0,R.jsxs)(P.Z,{children:[(0,R.jsx)(b.Z,{onClick:function(){return Ce(!1)},children:"Cancel"}),(0,R.jsx)(b.Z,{onClick:function(){var e=localStorage.getItem(W._.keyUserToken),i=(0,_.sw)(e),r={headers:{Authorization:"Bearer ".concat(i)}};D.ZP.post(D.Hv.vendor.delete,{id:re.id},r).then((function(e){e&&(n("Vendor deleted successfully!",{variant:"success"}),Ce(!1),te(M),Pe())})).catch((function(e){n(e.msg||e.error,{variant:"error"})}))},variant:"contained",color:"error",children:"Delete"})]})]})]})}function $(){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(r.ql,{children:(0,R.jsx)("title",{children:" Dashboard : Vendor"})}),(0,R.jsx)(z,{})]})}},42419:function(e,n,i){var r=i(64836);n.Z=void 0;var t=r(i(45649)),a=i(80184);n.Z=(0,t.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},42716:function(e,n,i){var r=i(64836);n.Z=void 0;var t=r(i(45649)),a=i(80184);n.Z=(0,t.default)((0,a.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"}),"Phone")},5403:function(e,n,i){var r=i(64836);n.Z=void 0;var t=r(i(45649)),a=i(80184);n.Z=(0,t.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},65661:function(e,n,i){var r=i(87462),t=i(63366),a=i(72791),l=i(28182),o=i(94419),s=i(4567),c=i(66934),d=i(31402),m=i(17673),u=i(85090),p=i(80184),b=["className","id"],h=(0,c.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),y=a.forwardRef((function(e,n){var i=(0,d.Z)({props:e,name:"MuiDialogTitle"}),s=i.className,c=i.id,y=(0,t.Z)(i,b),Z=i,g=function(e){var n=e.classes;return(0,o.Z)({root:["root"]},m.a,n)}(Z),x=a.useContext(u.Z).titleId,v=void 0===x?c:x;return(0,p.jsx)(h,(0,r.Z)({component:"h2",className:(0,l.Z)(g.root,s),ownerState:Z,ref:n,variant:"h6",id:null!=c?c:v},y))}));n.Z=y}}]);
//# sourceMappingURL=239.e620ac17.chunk.js.map