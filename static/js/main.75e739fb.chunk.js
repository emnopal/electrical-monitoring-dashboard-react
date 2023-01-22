/*! For license information please see main.75e739fb.chunk.js.LICENSE.txt */
(this["webpackJsonpelectrical-monitoring-dashboard-react"]=this["webpackJsonpelectrical-monitoring-dashboard-react"]||[]).push([[0],{46:function(t,e,a){t.exports=a(57)},52:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(40),o=a.n(i),c=a(12),l=a(2),s=a(3),u=a(15),h=a(6),d=a(7),p=a(41),m=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.createStockChart()}},{key:"componentDidUpdate",value:function(){this.createStockChart()}},{key:"createStockChart",value:function(){var t,e=this;t=this.props.data.map((function(t){return[new Date(1e3*(parseInt(t.timestamp)+25200)).getTime(),t[e.props.title]]})).reverse(),p.stockChart("chart",{rangeSelector:{selected:1},title:{text:this.props.title},series:[{name:this.props.title,data:t,marker:{enabled:!0,radius:3},tooltip:{valueDecimals:2}}]})}},{key:"render",value:function(){return n.a.createElement("div",{id:"chart"},"Highstock")}}]),a}(r.Component),f=a(32),b=(a(52),a(21)),y=a(33),v=a(16),g=(a(35),a(36),a(17)),E=a(29),j=a(42),w=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).state={title:t.title,data:t.data,highest:r.sortObj(t.data,t.title)[0][t.title],lowest:r.sortObj(t.data,t.title,"desc")[0][t.title],timeHighest:r.convertLocale(r.sortObj(t.data,t.title)[0].timestamp),timeLowest:r.convertLocale(r.sortObj(t.data,t.title,"desc")[0].timestamp),mean:r.findMean(t.data,t.title),median:r.findMedian(t.data,t.title),latestData:r.sortObj(t.data,"timestamp")[0][t.title],latestTime:r.convertLocale(r.sortObj(t.data,"timestamp")[0].timestamp),firstData:r.sortObj(t.data,"timestamp","desc")[0][t.title],firstTime:r.convertLocale(r.sortObj(t.data,"timestamp","desc")[0].timestamp)},r}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(t,e,a){t.title!==this.props.title&&t.data!==this.props.data&&this.setState({title:this.props.title,data:this.props.data,highest:this.sortObj(this.props.data,this.props.title)[0][this.props.title],lowest:this.sortObj(this.props.data,this.props.title,"desc")[0][this.props.title],timeHighest:this.convertLocale(this.sortObj(this.props.data,this.props.title)[0].timestamp),timeLowest:this.convertLocale(this.sortObj(this.props.data,this.props.title,"desc")[0].timestamp),mean:this.findMean(this.props.data,this.props.title),median:this.findMedian(this.props.data,this.props.title),latestData:this.sortObj(this.props.data,"timestamp")[0][this.props.title],latestTime:this.convertLocale(this.sortObj(this.props.data,"timestamp")[0].timestamp),firstData:this.sortObj(this.props.data,"timestamp","desc")[0][this.props.title],firstTime:this.convertLocale(this.sortObj(this.props.data,"timestamp","desc")[0].timestamp)})}},{key:"sortObj",value:function(t,e,a){var r=Object(g.a)(t),n=1,i=-1;return"desc"===a&&(n=-1,i=1),r.sort((function(t,a){return t[e]<a[e]?n:i}))}},{key:"convertLocale",value:function(t){return new Date(1e3*t).toLocaleString("id-ID")}},{key:"findMean",value:function(t,e){var a=Object(g.a)(t),r=a.length;return a.reduce((function(t,a){return t+a[e]/r}),0)}},{key:"getArrFromObj",value:function(t,e){return this.sortObj(t,e).map((function(t){return t[e]}))}},{key:"findMedian",value:function(t,e){var a=this.getArrFromObj(t,e),r=(a.length+1)/2;return a.length%2===0?(a[r-1.5]+a[r-.5])/2:a[r-1]}},{key:"render",value:function(){return n.a.createElement(j.a,null,n.a.createElement(E.a,null,n.a.createElement("h6",null,"Highest ",this.state.title,": ",this.state.highest," (",this.state.timeHighest,")"),n.a.createElement("h6",null,"Lowest ",this.state.title,": ",this.state.lowest," (",this.state.timeLowest,")")),n.a.createElement(E.a,null,n.a.createElement("h6",null,"Mean ",this.state.title,": ",this.state.mean),n.a.createElement("h6",null,"Median ",this.state.title,": ",this.state.median)),n.a.createElement(E.a,null,n.a.createElement("h6",null,"Latest Data of ",this.state.title,": ",this.state.latestData," (",this.state.latestTime,")"),n.a.createElement("h6",null,"First Data of ",this.state.title,": ",this.state.firstData," (",this.state.firstTime,")")))}}]),a}(r.Component),O=a(59),k=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).state={title:t.title,data:t.data},r}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(t,e,a){t.title!==this.props.title&&t.data!==this.props.data&&this.setState({title:this.props.title,data:this.props.data})}},{key:"convertLocale",value:function(t){return new Date(1e3*t).toLocaleString("id-ID")}},{key:"render",value:function(){var t=this;return n.a.createElement(O.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,this.state.title),n.a.createElement("th",null,"Timestamp"),n.a.createElement("th",null,"Readable Timestamp"))),n.a.createElement("tbody",null,this.state.data.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,e[t.state.title]),n.a.createElement("td",null,e.timestamp),n.a.createElement("td",null,t.convertLocale(e.timestamp)))}))))}}]),a}(r.Component),S=a(43),L=a(25),C=Object(S.a)({apiKey:"AIzaSyA_EQE5bF9HJf_Pc_S_xCYdB-dn7ikjkHs",authDomain:"electrical-monitoring-3303b.firebaseapp.com",databaseURL:"https://electrical-monitoring-3303b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"electrical-monitoring-3303b",storageBucket:"electrical-monitoring-3303b.appspot.com",messagingSenderId:"206511979734",appId:"1:206511979734:web:289e6e6fe3af55b8b4dd77",measurementId:"G-VW6VGF11K4"}),N=Object(L.c)(C),x=Object(L.d)(N),F=function(t){return new Intl.DateTimeFormat("id-ID",{dateStyle:"full",timeStyle:"long",timeZone:"UTC"}).format(new Date(t))},D=function(t,e){var a={};return Object.keys(t).forEach((function(e){Object.keys(t[e]).forEach((function(r){var n=t[e][r],i=n.timestamp;a[i]=t[e][r],a[i].Current=parseFloat(n.Current),a[i].Energy=parseFloat(n.Energy),a[i].Frequency=parseFloat(n.Frequency),a[i].Power=parseFloat(n.Power),a[i]["Power Factor"]=parseFloat(n["Power Factor"]),a[i]["Total Price"]=parseFloat(n["Total Price"]),a[i].Voltage=parseFloat(n.Voltage),a[i].readable_timestamp=F(1e3*n.timestamp)}))})),e?"json"===e.toLowerCase()?JSON.stringify(a,null,4):"array"===e.toLowerCase()?Object.values(a):JSON.stringify(a,null,4):a},T=function(){function t(e){Object(l.a)(this,t),this.obj=e}return Object(s.a)(t,[{key:"getKeys",value:function(){if(Array.isArray(this.obj))throw"Must be Object";return Object.keys(this.obj)}},{key:"getValue",value:function(t,e){var a=this.obj;return Array.isArray(a)?(a=this.sortObj(t,e)).map((function(e){return e[t]})):Object.values(a).map((function(e){return e[t]}))}},{key:"getValueObj",value:function(t,e,a){return this.getValueAll(t,e,a)}},{key:"getValueArr",value:function(t,e,a){return this.getValueAll(t,e,a,"array")}},{key:"getValueAll",value:function(t,e,a,r){var n=0;("string"===typeof t||t instanceof String)&&(t=[t],n=1);var i=this.sortObj(null!==e&&void 0!==e?e:"timestamp",a);if("array"===r){var o=i.map((function(e){return t.map((function(t){return e[t]}))}));return 1===n?o.flat(1):o}return i.map((function(e){var a={};return t.map((function(t){a[t]=e[t]})),a}))}},{key:"sortObj",value:function(t,e){var a=this.obj,r=1,n=-1;if(!Array.isArray(a))throw"Must be Array";return"desc"===e&&(r=-1,n=1),a.sort((function(e,a){return e[t]<a[t]?r:n}))}},{key:"getHighestObjByKey",value:function(t){return this.sortObj(t)[0]}},{key:"getLowestObjByKey",value:function(t){return this.sortObj(t,"desc")[0]}},{key:"getHighestValueByKey",value:function(t){return this.getHighestObjByKey(t)[t]}},{key:"getLowestValueByKey",value:function(t){return this.getLowestObjByKey(t)[t]}}]),t}();function P(){P=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,a){return t[e]=a}}function s(t,e,a,n){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),c=new S(n||[]);return r(o,"_invoke",{value:j(t,a,c)}),o}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var h={};function d(){}function p(){}function m(){}var f={};l(f,i,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(L([])));y&&y!==e&&a.call(y,i)&&(f=y);var v=m.prototype=d.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;r(this,"_invoke",{value:function(r,i){function o(){return new e((function(n,o){!function r(n,i,o,c){var l=u(t[n],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(h).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,c)}))}c(l.arg)}(r,i,n,o)}))}return n=n?n.then(o,o):o()}})}function j(t,e,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return C()}for(a.method=n,a.arg=i;;){var o=a.delegate;if(o){var c=w(o,a);if(c){if(c===h)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(t,e,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function w(t,e){var a=e.method,r=t.iterator[a];if(void 0===r)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),h;var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m,r(v,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,a,r,n,i){void 0===i&&(i=Promise);var o=new E(s(e,a,r,n),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},g(v),l(v,c,"Generator"),l(v,i,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(a,r){return o.type="throw",o.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),k(a),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var n=r.arg;k(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),h}},t}var A=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(l.a)(this,a),(r=e.call(this,t)).state={selected:0,data:f.cloneDeep([]),title:"init"},r.zeroSelected=r.zeroSelected.bind(Object(u.a)(r)),r.currentSelected=r.keySelected.bind(Object(u.a)(r),1,"Current"),r.energySelected=r.keySelected.bind(Object(u.a)(r),2,"Energy"),r.frequencySelected=r.keySelected.bind(Object(u.a)(r),3,"Frequency"),r.powerFactorSelected=r.keySelected.bind(Object(u.a)(r),4,"Power Factor"),r.powerSelected=r.keySelected.bind(Object(u.a)(r),5,"Power"),r.priceSelected=r.keySelected.bind(Object(u.a)(r),6,"Total Price"),r.voltageSelected=r.keySelected.bind(Object(u.a)(r),7,"Voltage"),r}return Object(s.a)(a,[{key:"keySelected",value:function(){var t=Object(c.a)(P().mark((function t(e,a){var r,n,i,o;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.b)(Object(L.a)(x,"UsersData/".concat("lj5wFISAS5UhwklM3NVWReXmbpm2")));case 2:(r=t.sent).exists()&&(n=D(r.val(),"array"),i=new T(n),o=i.getValueAll([a,"timestamp"],null,null,"object"),this.setState({selected:e,data:f.cloneDeep(o),title:a}));case 4:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"zeroSelected",value:function(){this.setState({selected:0,data:null,title:null})}},{key:"zeroHandlerSelected",value:function(){return n.a.createElement(b.a,null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(b.a,null,n.a.createElement("h1",null,"Electrical Monitoring Dashboard"),"Note: Time in UTC+7 (Asia/Jakarta)"),n.a.createElement("br",null),n.a.createElement(y.a,{className:"justify-content-center"},n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(0===this.state.selected?"active":""),onClick:this.zeroSelected},"Home"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(1===this.state.selected?"active":""),onClick:this.currentSelected},"Current"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(2===this.state.selected?"active":""),onClick:this.energySelected},"Energy"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(3===this.state.selected?"active":""),onClick:this.frequencySelected},"Frequency"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(4===this.state.selected?"active":""),onClick:this.powerFactorSelected},"Power Factor"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(5===this.state.selected?"active":""),onClick:this.powerSelected},"Power"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(6===this.state.selected?"active":""),onClick:this.priceSelected},"Total Price"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(7===this.state.selected?"active":""),onClick:this.voltageSelected},"Voltage")),n.a.createElement("br",null),n.a.createElement(b.a,null,n.a.createElement("h1",null,"Welcome!")))}},{key:"otherHandlerSelected",value:function(){return n.a.createElement(b.a,null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(b.a,null,n.a.createElement("h1",null,"Electrical Monitoring Dashboard"),"Note: Time in UTC+7 (Asia/Jakarta)"),n.a.createElement("br",null),n.a.createElement(y.a,{className:"justify-content-center"},n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(0===this.state.selected?"active":""),onClick:this.zeroSelected},"Home"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(1===this.state.selected?"active":""),onClick:this.currentSelected},"Current"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(2===this.state.selected?"active":""),onClick:this.energySelected},"Energy"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(3===this.state.selected?"active":""),onClick:this.frequencySelected},"Frequency"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(4===this.state.selected?"active":""),onClick:this.powerFactorSelected},"Power Factor"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(5===this.state.selected?"active":""),onClick:this.powerSelected},"Power"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(6===this.state.selected?"active":""),onClick:this.priceSelected},"Total Price"),n.a.createElement(v.a,{type:"button",className:"btn btn-highchart "+(7===this.state.selected?"active":""),onClick:this.voltageSelected},"Voltage")),n.a.createElement("br",null),n.a.createElement(b.a,null,n.a.createElement(w,{data:this.state.data,title:this.state.title}),n.a.createElement("br",null),n.a.createElement(m,{data:this.state.data,title:this.state.title}),n.a.createElement("br",null),n.a.createElement(k,{data:this.state.data,title:this.state.title})))}},{key:"render",value:function(){var t;return t=0===this.state.selected?this.zeroHandlerSelected():this.otherHandlerSelected(),n.a.createElement("div",{className:"App"},t)}}]),a}(r.Component);a(56);o.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var t="".concat("/electrical-monitoring-dashboard-react","/service-worker.js");navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}))}},[[46,1,2]]]);
//# sourceMappingURL=main.75e739fb.chunk.js.map