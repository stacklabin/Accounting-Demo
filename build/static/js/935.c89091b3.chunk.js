"use strict";(self.webpackChunk_minimal_kit_simple_cra_js=self.webpackChunk_minimal_kit_simple_cra_js||[]).push([[935],{26759:function(e,r,o){var a=o(64836);r.Z=void 0;var n=a(o(45649)),i=o(80184);r.Z=(0,n.default)((0,i.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown")},97123:function(e,r,o){o.d(r,{Z:function(){return Z}});var a=o(63366),n=o(87462),i=o(72791),t=o(28182),l=o(94419),c=o(66934),s=o(31402),d=o(75878),p=o(21217);function u(e){return(0,p.Z)("MuiDialogActions",e)}(0,d.Z)("MuiDialogActions",["root","spacing"]);var v=o(80184),f=["className","disableSpacing"],m=(0,c.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,!o.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,n.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),Z=i.forwardRef((function(e,r){var o=(0,s.Z)({props:e,name:"MuiDialogActions"}),i=o.className,c=o.disableSpacing,d=void 0!==c&&c,p=(0,a.Z)(o,f),Z=(0,n.Z)({},o,{disableSpacing:d}),h=function(e){var r=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,l.Z)(o,u,r)}(Z);return(0,v.jsx)(m,(0,n.Z)({className:(0,t.Z)(h.root,i),ownerState:Z,ref:r},p))}))},39157:function(e,r,o){o.d(r,{Z:function(){return x}});var a=o(4942),n=o(63366),i=o(87462),t=o(72791),l=o(28182),c=o(94419),s=o(66934),d=o(31402),p=o(75878),u=o(21217);function v(e){return(0,u.Z)("MuiDialogContent",e)}(0,p.Z)("MuiDialogContent",["root","dividers"]);var f=o(17673),m=o(80184),Z=["className","dividers"],h=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.dividers&&r.dividers]}})((function(e){var r=e.theme,o=e.ownerState;return(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},o.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((r.vars||r).palette.divider),borderBottom:"1px solid ".concat((r.vars||r).palette.divider)}:(0,a.Z)({},".".concat(f.Z.root," + &"),{paddingTop:0}))})),x=t.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiDialogContent"}),a=o.className,t=o.dividers,s=void 0!==t&&t,p=(0,n.Z)(o,Z),u=(0,i.Z)({},o,{dividers:s}),f=function(e){var r=e.classes,o={root:["root",e.dividers&&"dividers"]};return(0,c.Z)(o,v,r)}(u);return(0,m.jsx)(h,(0,i.Z)({className:(0,l.Z)(f.root,a),ownerState:u,ref:r},p))}))},17673:function(e,r,o){o.d(r,{a:function(){return i}});var a=o(75878),n=o(21217);function i(e){return(0,n.Z)("MuiDialogTitle",e)}var t=(0,a.Z)("MuiDialogTitle",["root"]);r.Z=t},5574:function(e,r,o){var a=o(4942),n=o(63366),i=o(87462),t=o(72791),l=o(28182),c=o(94419),s=o(18252),d=o(14036),p=o(73590),u=o(60627),v=o(27938),f=o(31402),m=o(66934),Z=o(17780),h=o(85090),x=o(52739),g=o(13967),b=o(80184),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],w=(0,m.ZP)(x.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,r){return r.backdrop}})({zIndex:-1}),W=(0,m.ZP)(p.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,r){return r.root}})({"@media print":{position:"absolute !important"}}),k=(0,m.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,r){var o=e.ownerState;return[r.container,r["scroll".concat((0,d.Z)(o.scroll))]]}})((function(e){var r=e.ownerState;return(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===r.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===r.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),D=(0,m.ZP)(v.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,r){var o=e.ownerState;return[r.paper,r["scrollPaper".concat((0,d.Z)(o.scroll))],r["paperWidth".concat((0,d.Z)(String(o.maxWidth)))],o.fullWidth&&r.paperFullWidth,o.fullScreen&&r.paperFullScreen]}})((function(e){var r=e.theme,o=e.ownerState;return(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===o.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===o.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===o.maxWidth&&(0,a.Z)({maxWidth:"px"===r.breakpoints.unit?Math.max(r.breakpoints.values.xs,444):"max(".concat(r.breakpoints.values.xs).concat(r.breakpoints.unit,", 444px)")},"&.".concat(Z.Z.paperScrollBody),(0,a.Z)({},r.breakpoints.down(Math.max(r.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),o.maxWidth&&"xs"!==o.maxWidth&&(0,a.Z)({maxWidth:"".concat(r.breakpoints.values[o.maxWidth]).concat(r.breakpoints.unit)},"&.".concat(Z.Z.paperScrollBody),(0,a.Z)({},r.breakpoints.down(r.breakpoints.values[o.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&(0,a.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(Z.Z.paperScrollBody),{margin:0,maxWidth:"100%"}))})),y=t.forwardRef((function(e,r){var o=(0,f.Z)({props:e,name:"MuiDialog"}),a=(0,g.Z)(),p={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},m=o["aria-describedby"],x=o["aria-labelledby"],y=o.BackdropComponent,C=o.BackdropProps,M=o.children,P=o.className,B=o.disableEscapeKeyDown,R=void 0!==B&&B,j=o.fullScreen,N=void 0!==j&&j,A=o.fullWidth,T=void 0!==A&&A,_=o.maxWidth,F=void 0===_?"sm":_,E=o.onBackdropClick,I=o.onClose,K=o.open,Y=o.PaperComponent,X=void 0===Y?v.Z:Y,z=o.PaperProps,H=void 0===z?{}:z,L=o.scroll,O=void 0===L?"paper":L,q=o.TransitionComponent,G=void 0===q?u.Z:q,J=o.transitionDuration,Q=void 0===J?p:J,U=o.TransitionProps,V=(0,n.Z)(o,S),$=(0,i.Z)({},o,{disableEscapeKeyDown:R,fullScreen:N,fullWidth:T,maxWidth:F,scroll:O}),ee=function(e){var r=e.classes,o=e.scroll,a=e.maxWidth,n=e.fullWidth,i=e.fullScreen,t={root:["root"],container:["container","scroll".concat((0,d.Z)(o))],paper:["paper","paperScroll".concat((0,d.Z)(o)),"paperWidth".concat((0,d.Z)(String(a))),n&&"paperFullWidth",i&&"paperFullScreen"]};return(0,c.Z)(t,Z.D,r)}($),re=t.useRef(),oe=(0,s.Z)(x),ae=t.useMemo((function(){return{titleId:oe}}),[oe]);return(0,b.jsx)(W,(0,i.Z)({className:(0,l.Z)(ee.root,P),closeAfterTransition:!0,components:{Backdrop:w},componentsProps:{backdrop:(0,i.Z)({transitionDuration:Q,as:y},C)},disableEscapeKeyDown:R,onClose:I,open:K,ref:r,onClick:function(e){re.current&&(re.current=null,E&&E(e),I&&I(e,"backdropClick"))},ownerState:$},V,{children:(0,b.jsx)(G,(0,i.Z)({appear:!0,in:K,timeout:Q,role:"presentation"},U,{children:(0,b.jsx)(k,{className:(0,l.Z)(ee.container),onMouseDown:function(e){re.current=e.target===e.currentTarget},ownerState:$,children:(0,b.jsx)(D,(0,i.Z)({as:X,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":oe},H,{className:(0,l.Z)(ee.paper,H.className),ownerState:$,children:(0,b.jsx)(h.Z.Provider,{value:ae,children:M})}))})}))}))}));r.Z=y},85090:function(e,r,o){var a=o(72791).createContext({});r.Z=a},17780:function(e,r,o){o.d(r,{D:function(){return i}});var a=o(75878),n=o(21217);function i(e){return(0,n.Z)("MuiDialog",e)}var t=(0,a.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);r.Z=t}}]);
//# sourceMappingURL=935.c89091b3.chunk.js.map