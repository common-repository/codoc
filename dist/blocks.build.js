!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n(2),a=(n.n(r),n(3)),s=(n.n(a),n(4)),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=wp.keycodes.ENTER,__=wp.i18n.__,p=wp.element.Component,d=wp.blocks.registerBlockType,f=wp.editor,b=f.InspectorControls,m=f.RichText,h=wp.components,w=h.SelectControl,y=h.PanelBody,v=h.ToggleControl,C=h.CheckboxControl,g=h.RangeControl,k=wp.blocks,E=k.getDefaultBlockName,S=k.createBlock,P=wp.compose.withState,_=OPTIONS.codoc_url,O=OPTIONS.codoc_usercode,x=OPTIONS.codoc_plugin_version,T=OPTIONS.codoc_account_is_pro,A=OPTIONS.codoc_currency_code,j=OPTIONS.codoc_currency_decimal_places,N=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.subscriptionsFetched=[],n.fetchSubscriptions(),n}return i(t,e),c(t,[{key:"fetchSubscriptions",value:function(){var e=this,t=this.props,n=t.setAttributes;if(!t.attributes.fetching){n({fetching:!0});var o=_+"/api/v1/cms/"+O+"/subscriptions?without_token=1";fetch(o).then(function(e){return e.json()}).then(function(t){var o=[];if(t.status&&t.subscriptions)for(var l=0;l<t.subscriptions.length;l++){var i={value:t.subscriptions[l].code,label:t.subscriptions[l].title};o[l]=i}o.length&&(e.subscriptionsFetched=o),n({fetching:!1})})}}},{key:"getShowPriceHelp",value:function(e){return e?__("Enable","codoc"):__("Disable","codoc")}},{key:"getShowSupportHelp",value:function(e){return e?__("Accept","codoc"):__("Do not accept","codoc")}},{key:"getShowPaywalledSupportHelp",value:function(e){return e?__('The paid part will be hidden upon access, but will be displayed after tapping "Pay to Read". Viewers can freely specify the amount to purchase based on the content. Please note that there may be cases where it is not purchased.',"codoc"):__(" ")}},{key:"getStatusLimitedHelp",value:function(e){return e?__("Unlisted","codoc"):__("Published","codoc")}},{key:"render",value:function(){var e=this,t=this.props,n=t.setAttributes,o=t.attributes,l=o.showPrice,i=o.price,r=o.limited,a=o.limitedCount,s=o.affiliateMode,c=o.affiliateRate,u=o.showSupport,p=o.showPaywalledSupport,d=o.statusLimited,f=o.subscriptions,m=function(){return n({showPrice:!l})},h=function(){return n({limited:!r})},k=function(){return n({showPaywalledSupport:!p})},E=function(){return n({statusLimited:!d})},S=function(){return n({affiliateMode:!s})},O=function(){return n({showSupport:!u})},x=P({checked_obj:Object.assign(new Object,f)})(function(t){var o=t.checked_obj,l=t.setState;return wp.element.createElement("ul",null,e.subscriptionsFetched.map(function(e){return wp.element.createElement("li",null,wp.element.createElement(C,{className:"check_items",label:e.label,checked:o[e.value],onChange:function(t){t?o[e.value]=!0:delete o[e.value],n({subscriptions:o}),l({checked_obj:o})}}))}))}),N=[{value:"0.0500",label:"5%"},{value:"0.1000",label:"10%"},{value:"0.1500",label:"15%"},{value:"0.2000",label:"20%"},{value:"0.2500",label:"25%"},{value:"0.3000",label:"30%"},{value:"0.3500",label:"35%"},{value:"0.4000",label:"40%"},{value:"0.4500",label:"45%"},{value:"0.5000",label:"50%"}];return wp.element.createElement(b,{key:"CodocControls"},wp.element.createElement(y,null,wp.element.createElement(v,{label:__("individual sale","codoc"),checked:!!l,help:this.getShowPriceHelp,ref:"showPrice",onChange:m}),wp.element.createElement("div",{style:{display:l?"initial":"none"}},wp.element.createElement(g,{label:__("price","codoc")+" "+(j>0?(i/100).toFixed(j):i)+" "+__(A)+__(p?"\u3010"+__("Displayed as the your suggested price","codoc")+"\u3011":""),value:i,initialPosition:i,onChange:function(e){n({price:e})},min:"100",max:1==T?1e5:5e4}),wp.element.createElement("br",null),wp.element.createElement(v,{label:__("Pay-what-you-want","codoc"),checked:!!p,help:this.getShowPaywalledSupportHelp,onChange:k}),wp.element.createElement("div",{style:{display:p?"none":"initial"}},wp.element.createElement(v,{label:__("Limited quantity sale","codoc"),checked:!!r,onChange:h}),wp.element.createElement("div",{style:{display:r?"initial":"none"}},wp.element.createElement(g,{label:__("Limited quantity","codoc"),value:a,onChange:function(e){n({limitedCount:e})},initialPosition:a,min:"0",max:"100"}),wp.element.createElement("br",null)),wp.element.createElement(v,{label:__("Affiliate","codoc"),checked:!!s,onChange:S}),wp.element.createElement("div",{style:{display:s?"initial":"none"}},wp.element.createElement(w,{label:__("Rate","codoc"),description:__("You can offer affiliate marketing at a specified rate for purchasers.","codoc"),options:N,value:c,onChange:function(e){n({affiliateRate:e})}}),wp.element.createElement("br",null)))),wp.element.createElement("div",{style:{display:p?"none":"initial"}},wp.element.createElement(v,{label:__("Tipping","codoc"),checked:!!u,value:"1",onChange:O,help:this.getShowSupportHelp})),wp.element.createElement("div",{style:{display:"initial"}},wp.element.createElement(v,{label:__("Unlisted","codoc"),checked:!!d,value:"1",onChange:E,help:this.getStatusLimitedHelp})),wp.element.createElement("div",{class:"codoc-subscription-title"},wp.element.createElement("label",null,__("Subscriptions","codoc")),wp.element.createElement("a",{href:_+"/me/subscriptions",target:"_blank",class:"codoc-subscription-add"},__("Add","codoc"))),wp.element.createElement(x,null)))}}]),t}(p),R=function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.props.setAttributes({version:x}),e.props.setAttributes({showPrice:null==e.props.attributes.showPrice||e.props.attributes.showPrice}),e.props.setAttributes({price:null==e.props.attributes.price?500:e.props.attributes.price}),e.props.setAttributes({limited:null!=e.props.attributes.limited&&e.props.attributes.limited}),e.props.setAttributes({limitedCount:null==e.props.attributes.limitedCount?10:e.props.attributes.limitedCount}),e.props.setAttributes({affiliateMode:null!=e.props.attributes.affiliateMode&&e.props.attributes.affiliateMode}),e.props.setAttributes({affiliateRate:null==e.props.attributes.affiliateRate?"0.0500":e.props.attributes.affiliateRate}),e.props.setAttributes({showSupport:null!=e.props.attributes.showSupport&&e.props.attributes.showSupport}),e.props.setAttributes({showPaywalledSupport:null!=e.props.attributes.showPaywalledSupport&&e.props.attributes.showPaywalledSupport}),e.props.setAttributes({statusLimited:null!=e.props.attributes.statusLimited&&e.props.attributes.statusLimited}),e.props.setAttributes({subscriptions:null==e.props.attributes.subscriptions?{}:e.props.attributes.subscriptions}),e.onChangeInput=e.onChangeInput.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.state={defaultText:__("To continue reading, ...","codoc")},e}return i(t,e),c(t,[{key:"onChangeInput",value:function(e){this.setState({defaultText:""});var t=0===e.target.value.length?void 0:e.target.value;this.props.setAttributes({customText:t})}},{key:"onKeyDown",value:function(e){var t=e.keyCode,n=this.props.insertBlocksAfter;t===u&&n([S(E())])}},{key:"render",value:function(){var e=this.props,t=e.attributes.customText,n=e.setAttributes,o=this.state.defaultText,l=t||o,i=l.length+10;return[wp.element.createElement(N,Object.assign({setAttributes:n},this.props)),wp.element.createElement("div",{className:"wp-block-more"},wp.element.createElement("input",{type:"text",value:l,size:i,onChange:this.onChangeInput,onKeyDown:this.onKeyDown}))]}}]),t}(p);d("codoc/codoc-block",{title:__("codoc","codoc"),description:__("The area from this block down is a paid area that only authenticated codoc users can view.","codoc"),icon:s.a,category:"layout",supports:{customClassName:!1,className:!1,html:!1,multiple:!1},keywords:[__("codoc Block","codoc"),__("plugin for codoc","codoc"),__("codoc-block","codoc")],attributes:{showPrice:{type:"boolean",default:null},price:{type:"number",default:null},limited:{type:"boolean",default:null},limitedCount:{type:"number",default:null},affiliateMode:{type:"boolean",default:null},affiliateRate:{type:"string",default:null},showSupport:{type:"boolean",default:null},showPaywalledSupport:{type:"boolean",default:null},statusLimited:{type:"boolean",default:null},subscriptions:{type:"object",default:null},customText:{type:"string",default:""},version:{type:"string",default:null}},edit:R,save:function(e){var t=(e.setAttributes,e.attributes.customText);return wp.element.createElement("div",{"data-id":"codoc-tag",className:"codoc-entries"},t&&!!t.length&&wp.element.createElement(m.Content,{value:t}))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(5);n.n(o);t.a=wp.element.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100%",viewBox:"0 0 256 256","enable-background":"new 0 0 256 256",xmlSpace:"preserve"},wp.element.createElement("path",{fill:"#ffffff",opacity:"1.000000",stroke:"none",d:"M141.000000,257.000000 C94.000000,257.000000 47.500004,257.000000 1.000006,257.000000 C1.000004,171.666672 1.000004,86.333351 1.000002,1.000018 C86.333321,1.000012 171.666641,1.000012 257.000000,1.000006 C257.000000,86.333313 257.000000,171.666626 257.000000,256.999969 C218.500000,257.000000 180.000000,257.000000 141.000000,257.000000 M146.503082,23.000164 C116.907616,22.080397 90.932098,31.832527 69.273537,51.527222 C43.720821,74.762970 31.318863,103.869339 33.861893,138.920883 C35.131977,156.427002 39.715271,172.783020 49.613323,187.221390 C76.307907,226.160965 114.954926,238.329178 159.853943,234.326080 C182.543427,232.303101 202.167206,222.083160 219.314758,207.096619 C222.639465,204.190887 222.785080,201.958481 219.541718,198.996063 C210.086426,190.359756 200.699310,181.646790 191.392899,172.850220 C185.639374,167.411880 185.677856,167.315521 179.461136,172.079407 C160.475082,186.628571 135.524796,187.942444 115.371788,175.056778 C97.697929,163.756256 89.467148,146.957764 90.253334,126.395493 C91.060989,105.271385 101.350311,89.188896 120.515396,79.896317 C141.850464,69.551582 162.308594,73.002220 181.405899,86.137695 C185.054901,88.647537 187.582901,89.016609 190.896500,85.704330 C199.132141,77.471970 207.729889,69.603195 216.037704,61.441307 C224.548111,53.080330 224.348465,52.176884 214.913849,44.925365 C195.019623,29.634516 172.687103,21.958462 146.503082,23.000164 z"}),wp.element.createElement("path",{fill:"#1B1D1F",opacity:"1.000000",stroke:"none",d:"M147.001526,23.000149 C172.687103,21.958462 195.019623,29.634516 214.913849,44.925365 C224.348465,52.176884 224.548111,53.080330 216.037704,61.441307 C207.729889,69.603195 199.132141,77.471970 190.896500,85.704330 C187.582901,89.016609 185.054901,88.647537 181.405899,86.137695 C162.308594,73.002220 141.850464,69.551582 120.515396,79.896317 C101.350311,89.188896 91.060989,105.271385 90.253334,126.395493 C89.467148,146.957764 97.697929,163.756256 115.371788,175.056778 C135.524796,187.942444 160.475082,186.628571 179.461136,172.079407 C185.677856,167.315521 185.639374,167.411880 191.392899,172.850220 C200.699310,181.646790 210.086426,190.359756 219.541718,198.996063 C222.785080,201.958481 222.639465,204.190887 219.314758,207.096619 C202.167206,222.083160 182.543427,232.303101 159.853943,234.326080 C114.954926,238.329178 76.307907,226.160965 49.613323,187.221390 C39.715271,172.783020 35.131977,156.427002 33.861893,138.920883 C31.318863,103.869339 43.720821,74.762970 69.273537,51.527222 C90.932098,31.832527 116.907616,22.080397 147.001526,23.000149 z"}))},function(e,t){e.exports=wp.components}]);