/*! For license information please see main.7acb6878.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-popout-v2-example"]=this["webpackJsonpreact-popout-v2-example"]||[]).push([[0],{36:function(e,t,n){e.exports=n(50)},37:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(37);var o=n(0),a=n.n(o),r=n(8),c=n.n(r),l=n(34),u=n(4),i=n(10),s=n(11),p=n(24),f=n(9),m=n(5),d=n(16),E=n(15),b=n(31),y=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent&&e.attachEvent("on"+t,n)};function v(e,t){return e(t={exports:{}},t.exports),t.exports}var h="function"===typeof Symbol&&Symbol.for,O=h?Symbol.for("react.element"):60103,C=h?Symbol.for("react.portal"):60106,w=h?Symbol.for("react.fragment"):60107,j=h?Symbol.for("react.strict_mode"):60108,g=h?Symbol.for("react.profiler"):60114,P=h?Symbol.for("react.provider"):60109,S=h?Symbol.for("react.context"):60110,k=h?Symbol.for("react.async_mode"):60111,x=h?Symbol.for("react.concurrent_mode"):60111,T=h?Symbol.for("react.forward_ref"):60112,$=h?Symbol.for("react.suspense"):60113,R=h?Symbol.for("react.suspense_list"):60120,D=h?Symbol.for("react.memo"):60115,A=h?Symbol.for("react.lazy"):60116,_=h?Symbol.for("react.block"):60121,M=h?Symbol.for("react.fundamental"):60117,F=h?Symbol.for("react.responder"):60118,I=h?Symbol.for("react.scope"):60119;function K(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case k:case x:case w:case g:case j:case $:return e;default:switch(e=e&&e.$$typeof){case S:case T:case A:case D:case P:return e;default:return t}}case C:return t}}}function U(e){return K(e)===x}var B={AsyncMode:k,ConcurrentMode:x,ContextConsumer:S,ContextProvider:P,Element:O,ForwardRef:T,Fragment:w,Lazy:A,Memo:D,Portal:C,Profiler:g,StrictMode:j,Suspense:$,isAsyncMode:function(e){return U(e)||K(e)===k},isConcurrentMode:U,isContextConsumer:function(e){return K(e)===S},isContextProvider:function(e){return K(e)===P},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===O},isForwardRef:function(e){return K(e)===T},isFragment:function(e){return K(e)===w},isLazy:function(e){return K(e)===A},isMemo:function(e){return K(e)===D},isPortal:function(e){return K(e)===C},isProfiler:function(e){return K(e)===g},isStrictMode:function(e){return K(e)===j},isSuspense:function(e){return K(e)===$},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===w||e===x||e===g||e===j||e===$||e===R||"object"===typeof e&&null!==e&&(e.$$typeof===A||e.$$typeof===D||e.$$typeof===P||e.$$typeof===S||e.$$typeof===T||e.$$typeof===M||e.$$typeof===F||e.$$typeof===I||e.$$typeof===_)},typeOf:K},N=(v((function(e,t){0})),v((function(e){e.exports=B})),Object.getOwnPropertySymbols),L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function q(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}})()&&Object.assign;var z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function H(e,t,n,o,a){}H.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function V(){}function J(){}J.resetWarningCache=V;var Y=v((function(e){e.exports=function(){function e(e,t,n,o,a,r){if(r!==z){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:V};return n.PropTypes=n,n}()})),X={toolbar:"no",location:"no",directories:"no",status:"no",menubar:"no",scrollbars:"yes",resizable:"yes",width:500,height:400,top:function(e,t){return(t.innerHeight-e.height)/2+t.screenY},left:function(e,t){return(t.innerWidth-e.width)/2+t.screenX}},G=a.a.forwardRef((function(e,t){var n=e.id,a=e.url,r=e.title,c=e.containerId,l=e.children,u=e.closeOnParentUnload,s=e.options,p=e.onClose,f=e.onError,m=e.parentWindow,d=e.reactDom,E=e.onCreate,v=Object(o.useState)(),h=Object(i.a)(v,2),O=h[0],C=h[1],w=Object(o.useState)(),j=Object(i.a)(w,2),g=j[0],P=j[1],S=d;Object(o.useEffect)((function(){return k(),$}),[]),Object(o.useEffect)((function(){O&&(u&&y(m,"beforeunload",$),y(O,"load",(function(){T(O)})))}),[O]),Object(o.useEffect)((function(){g&&(S.render(l,g),y(O,"unload",x))}),[g]),Object(o.useImperativeHandle)(t,(function(){return{close(){$()}}}));var k=function(){var e=m.open(a,n,function(){var e=Object(b.a)(Object(b.a)({},X),s);return Object.keys(e).map((function(t){return t+"="+("function"===typeof e[t]?e[t](e,m):e[t])})).join(",")}());e?(E(e),"about:blank"===a&&T(e),C(e)):f()},x=function(){p(),g&&S.unmountComponentAtNode(g)},T=function(e){if(!g){e.document.title=r;var t=e.document.createElement("div");t.id=c,e.document.body.appendChild(t),P(t)}},$=function e(){var t,n,o;O&&O.close(),n="unload",o=e,(t=m).removeEventListener?t.removeEventListener(n,o):t.detachEvent&&t.detachEvent("on"+n,o)};return null}));G.defaultProps={id:"react-popout",url:"about:blank",title:"Popout",containerId:"react-popout-root",closeOnParentUnload:!1,options:{},onClose:function(){},onError:function(){return console.log("Error on opening window please check, is popup blocker enabled?")},parentWindow:window,onCreate:function(){}},G.propTypes={id:Y.string,url:Y.string,title:Y.string,containerId:Y.string,children:Y.oneOfType([Y.object,Y.func]),closeOnParentUnload:Y.bool,options:Y.object,onClose:Y.func,onError:Y.func,parentWindow:Y.object,reactDom:Y.object.isRequired,onCreate:Y.func};var Q=G,Z=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Example 1:"),a.a.createElement("p",null,"Open popout and add content to it"),!n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){return r(!0)}},"Open Popout"),n&&a.a.createElement(Q,{id:"ex1",url:"/react-popout-v2/popout",reactDom:c.a,children:a.a.createElement(s.a,null,a.a.createElement(E.a,{variant:"success"},"This is a content of new popout!")),onClose:function(){return r(!1)}}),a.a.createElement(m.a,{className:"mt-4"},a.a.createElement(m.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Code"),a.a.createElement(m.a.Collapse,{eventKey:"0"},a.a.createElement(d.a.Body,null,a.a.createElement("pre",null,"\n                <Popout\n                  id={'ex1'}\n                  url={'/react-popout-v2/popout'}\n                  reactDom={ReactDOM}\n                  children={\n                    <Container>\n                      <Alert variant='success'>\n                        This is a content of new popout!\n                      </Alert>\n                    </Container>\n                  }\n                  onClose={() => setOpen(false)}\n                />")))))},ee=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Example 2:"),a.a.createElement("p",null,"Close the popout on either parent window refresh/close"),!n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){return r(!0)}},"Open Popout"),n&&a.a.createElement(Q,{id:"ex2",url:"/react-popout-v2/popout",reactDom:c.a,children:a.a.createElement(s.a,null,a.a.createElement(E.a,{variant:"success"},"This is a content of new popout!")),closeOnParentUnload:!0,onClose:function(){return r(!1)}}),a.a.createElement(m.a,{className:"mt-4"},a.a.createElement(m.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Code"),a.a.createElement(m.a.Collapse,{eventKey:"0"},a.a.createElement(d.a.Body,null,a.a.createElement("pre",null,"\n                <Popout\n                  id={'ex2'}\n                  url={'/react-popout-v2/popout'}\n                  reactDom={ReactDOM}\n                  children={\n                    <Container>\n                      <Alert variant='success'>\n                        This is a content of new popout!\n                      </Alert>\n                    </Container>\n                  }\n                  closeOnParentUnload={true}\n                  onClose={() => setOpen(false)}\n                />")))))},te=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Example 3:"),a.a.createElement("p",null,"Call back to handle the popout window close[Alert user/stop user]"),!n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){return r(!0)}},"Open Popout"),n&&a.a.createElement(Q,{id:"ex3",url:"/react-popout-v2/popout",reactDom:c.a,children:a.a.createElement(s.a,null,a.a.createElement(E.a,{variant:"success"},"This is a content of new popout!")),closeOnUnload:!0,onClose:function(){alert("On Close Event"),r(!1)}}),a.a.createElement(m.a,{className:"mt-4"},a.a.createElement(m.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Code"),a.a.createElement(m.a.Collapse,{eventKey:"0"},a.a.createElement(d.a.Body,null,a.a.createElement("pre",null,"\n                <Popout\n                  id={'ex3'}\n                  url={'/react-popout-v2/popout'}\n                  reactDom={ReactDOM}\n                  children={\n                    <Container>\n                      <Alert variant='success'>\n                        This is a content of new popout!\n                      </Alert>\n                    </Container>\n                  }\n                  onClose={() => {\n                            alert(\"On Close Event\")\n                            setOpen(false)\n                          }}\n                />")))))},ne=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Example 4:"),a.a.createElement("p",null,"Call back to get created instance of popout window [Can be used to modify popup,Close, etc...]"),a.a.createElement("p",null,"After click, open the console to find window object is printed"),!n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){return r(!0)}},"Open Popout"),n&&a.a.createElement(Q,{id:"ex4",url:"/react-popout-v2/popout",reactDom:c.a,children:a.a.createElement(s.a,null,a.a.createElement(E.a,{variant:"success"},"This is a content of new popout!")),closeOnUnload:!0,onCreate:function(e){console.log("created window object",e)}}),a.a.createElement(m.a,{className:"mt-4"},a.a.createElement(m.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Code"),a.a.createElement(m.a.Collapse,{eventKey:"0"},a.a.createElement(d.a.Body,null,a.a.createElement("pre",null,"\n                <Popout\n                  id={'ex4'}\n                  url={'/react-popout-v2/popout'}\n                  reactDom={ReactDOM}\n                  children={\n                    <Container>\n                      <Alert variant='success'>\n                        This is a content of new popout!\n                      </Alert>\n                    </Container>\n                  }\n                  onCreate={(window) => {\n                               console.log(\"created window object\", window)\n                          }}\n                  closeOnUnload={true}\n                />")))))},oe=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(o.useRef)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Example 5:"),a.a.createElement("p",null,"Close popout Programmatically"),!n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){return r(!0)}},"Open Popout"),n&&a.a.createElement(f.a,{variant:"dark",onClick:function(){r(!1),l.current.close()}},"Close Popout"),n&&a.a.createElement(Q,{id:"ex5",ref:l,url:"/react-popout-v2/popout",reactDom:c.a,children:a.a.createElement(s.a,null,a.a.createElement(E.a,{variant:"success"},"This is a content of new popout!")),onClose:function(){return r(!1)}}),a.a.createElement(m.a,{className:"mt-4"},a.a.createElement(m.a.Toggle,{as:f.a,variant:"link",eventKey:"0"},"Code"),a.a.createElement(m.a.Collapse,{eventKey:"0"},a.a.createElement(d.a.Body,null,a.a.createElement("pre",null,"\n          const childRef = useRef()\n              {isOpen && (\n                  <Button\n                    variant='dark'\n                    onClick={() => {\n                      setOpen(false)\n                      childRef.current.close()\n                    }}\n                  >\n                    Close Popout\n                  </Button>\n                )}\n                <Popout\n                  id={'ex5'}\n                  url={'/react-popout-v2/popout'}\n                  reactDom={ReactDOM}\n                  children={\n                    <Container>\n                      <Alert variant='success'>\n                        This is a content of new popout!\n                      </Alert>\n                    </Container>\n                  }\n                  onClose={() => setOpen(false)}\n                />")))))},ae=(n(46),function(){Object(o.useRef)();var e=Object(o.useState)(!1),t=Object(i.a)(e,2);t[0],t[1];return a.a.createElement(s.a,null,a.a.createElement(p.a,null,a.a.createElement("h1",null,"React Popout V2!"),a.a.createElement("p",null,"React popout is a util to handle the popout windows with ease and supports IE"),a.a.createElement(Z,null),a.a.createElement(ee,null),a.a.createElement(te,null),a.a.createElement(ne,null),a.a.createElement(oe,null)))});function re(){return a.a.createElement(l.a,null,a.a.createElement("div",null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/react-popout-v2/popout"},a.a.createElement(ce,null)),a.a.createElement(u.a,{path:"/"},a.a.createElement(ae,null)))))}function ce(){return a.a.createElement(p.a,null,a.a.createElement(s.a,null,a.a.createElement("h2",null,"Popout Page")))}c.a.render(a.a.createElement(re,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7acb6878.chunk.js.map