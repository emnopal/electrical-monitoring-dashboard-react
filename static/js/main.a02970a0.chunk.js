(this["webpackJsonpelectrical-monitoring-dashboard-react"]=this["webpackJsonpelectrical-monitoring-dashboard-react"]||[]).push([[0],{29:function(t,e,a){t.exports=a(41)},35:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var m=a(0),i=a.n(m),r=a(24),s=a.n(r),o=a(11),n=a(12),p=a(7),c=a(15),l=a(14),u=a(25),g=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.createStockChart()}},{key:"componentDidUpdate",value:function(){this.createStockChart()}},{key:"createStockChart",value:function(){var t,e=this;t=this.props.data.map((function(t){var a=new Date(1e3*(parseInt(t.timestamp)+25200)).getTime();return console.log(a),[a,t[e.props.title]]})).reverse(),u.stockChart("chart",{rangeSelector:{selected:1},title:{text:this.props.title},series:[{name:this.props.title,data:t,marker:{enabled:!0,radius:3},tooltip:{valueDecimals:2}}]})}},{key:"render",value:function(){return i.a.createElement("div",{id:"chart"},"Highstock")}}]),a}(m.Component),d=a(9),h=(a(35),a(18)),P=a(28),y=a(10),w=(a(36),a(21)),F=a(20),E=a(26),b=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(t){var m;return Object(o.a)(this,a),(m=e.call(this,t)).state={title:t.title,data:t.data,highest:m.sortObj(t.data,t.title)[0][t.title],lowest:m.sortObj(t.data,t.title,"desc")[0][t.title],timeHighest:m.convertLocale(m.sortObj(t.data,t.title)[0].timestamp),timeLowest:m.convertLocale(m.sortObj(t.data,t.title,"desc")[0].timestamp),mean:m.findMean(t.data,t.title),median:m.findMedian(t.data,t.title)},m}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(t,e,a){t.title!==this.props.title&&t.data!==this.props.data&&this.setState({title:this.props.title,data:this.props.data,highest:this.sortObj(this.props.data,this.props.title)[0][this.props.title],lowest:this.sortObj(this.props.data,this.props.title,"desc")[0][this.props.title],timeHighest:this.convertLocale(this.sortObj(this.props.data,this.props.title)[0].timestamp),timeLowest:this.convertLocale(this.sortObj(this.props.data,this.props.title,"desc")[0].timestamp),mean:this.findMean(this.props.data,this.props.title),median:this.findMedian(this.props.data,this.props.title)})}},{key:"sortObj",value:function(t,e,a){var m=Object(w.a)(t),i=1,r=-1;return"desc"===a&&(i=-1,r=1),m.sort((function(t,a){return t[e]<a[e]?i:r}))}},{key:"convertLocale",value:function(t){return new Date(1e3*t).toLocaleString("id-ID")}},{key:"findMean",value:function(t,e){var a=Object(w.a)(t),m=a.length;return a.reduce((function(t,a){return t+a[e]/m}),0)}},{key:"getArrFromObj",value:function(t,e){return this.sortObj(t,e).map((function(t){return t[e]}))}},{key:"findMedian",value:function(t,e){var a=this.getArrFromObj(t,e),m=(a.length+1)/2;return a.length%2===0?(a[m-1.5]+a[m-.5])/2:a[m-1]}},{key:"render",value:function(){return i.a.createElement(E.a,null,i.a.createElement(F.a,null,i.a.createElement("h6",null,"Highest ",this.state.title,": ",this.state.highest," (",this.state.timeHighest,")"),i.a.createElement("h6",null,"Lowest ",this.state.title,": ",this.state.lowest," (",this.state.timeLowest,")")),i.a.createElement(F.a,null,i.a.createElement("h6",null,"Mean ",this.state.title,": ",this.state.mean),i.a.createElement("h6",null,"Median ",this.state.title,": ",this.state.median)))}}]),a}(m.Component),v=[{Current:1.16,timestamp:"1670995507"},{Current:.64,timestamp:"1670994899"},{Current:.64,timestamp:"1670994292"},{Current:.71,timestamp:"1670993686"},{Current:1.11,timestamp:"1670993082"},{Current:1.13,timestamp:"1670992478"},{Current:1.98,timestamp:"1670991873"},{Current:4.35,timestamp:"1670991268"},{Current:.7,timestamp:"1670990661"},{Current:1.1,timestamp:"1670990057"},{Current:1.11,timestamp:"1670989453"},{Current:1.12,timestamp:"1670988847"},{Current:.7,timestamp:"1670988243"},{Current:.7,timestamp:"1670987637"},{Current:.71,timestamp:"1670987032"},{Current:2.56,timestamp:"1670986427"},{Current:1.13,timestamp:"1670985822"},{Current:3.13,timestamp:"1670985218"},{Current:2.61,timestamp:"1670984613"},{Current:2.62,timestamp:"1670984005"},{Current:2.62,timestamp:"1670983400"},{Current:3.12,timestamp:"1670982795"},{Current:3.13,timestamp:"1670982190"},{Current:3.1,timestamp:"1670981585"},{Current:2.6,timestamp:"1670980977"},{Current:2.61,timestamp:"1670980372"},{Current:2.61,timestamp:"1670979767"},{Current:3.11,timestamp:"1670979162"},{Current:3.12,timestamp:"1670978558"},{Current:4.11,timestamp:"1670977954"},{Current:2.62,timestamp:"1670977346"},{Current:2.62,timestamp:"1670976742"},{Current:3.12,timestamp:"1670976138"},{Current:3.11,timestamp:"1670975534"},{Current:3.11,timestamp:"1670974930"},{Current:2.59,timestamp:"1670974324"},{Current:2.61,timestamp:"1670973720"},{Current:2.61,timestamp:"1670973116"},{Current:3.09,timestamp:"1670972510"},{Current:3.09,timestamp:"1670971903"},{Current:3.07,timestamp:"1670971299"},{Current:3.06,timestamp:"1670970758"}],C=[{Energy:3.64,timestamp:"1670995507"},{Energy:3.6,timestamp:"1670994899"},{Energy:3.58,timestamp:"1670994292"},{Energy:3.54,timestamp:"1670993686"},{Energy:3.5,timestamp:"1670993082"},{Energy:3.42,timestamp:"1670992478"},{Energy:3.32,timestamp:"1670991873"},{Energy:3.24,timestamp:"1670991268"},{Energy:3.17,timestamp:"1670990661"},{Energy:3.13,timestamp:"1670990057"},{Energy:3.09,timestamp:"1670989453"},{Energy:3.04,timestamp:"1670988847"},{Energy:3.01,timestamp:"1670988243"},{Energy:2.97,timestamp:"1670987637"},{Energy:2.95,timestamp:"1670987032"},{Energy:2.91,timestamp:"1670986427"},{Energy:2.87,timestamp:"1670985822"},{Energy:2.78,timestamp:"1670985218"},{Energy:2.66,timestamp:"1670984613"},{Energy:2.56,timestamp:"1670984005"},{Energy:2.45,timestamp:"1670983400"},{Energy:2.33,timestamp:"1670982795"},{Energy:2.2,timestamp:"1670982190"},{Energy:2.09,timestamp:"1670981585"},{Energy:1.98,timestamp:"1670980977"},{Energy:1.87,timestamp:"1670980372"},{Energy:1.77,timestamp:"1670979767"},{Energy:1.64,timestamp:"1670979162"},{Energy:1.53,timestamp:"1670978558"},{Energy:1.4,timestamp:"1670977954"},{Energy:1.3,timestamp:"1670977346"},{Energy:1.2,timestamp:"1670976742"},{Energy:1.09,timestamp:"1670976138"},{Energy:.97,timestamp:"1670975534"},{Energy:.84,timestamp:"1670974930"},{Energy:.73,timestamp:"1670974324"},{Energy:.63,timestamp:"1670973720"},{Energy:.52,timestamp:"1670973116"},{Energy:.41,timestamp:"1670972510"},{Energy:.28,timestamp:"1670971903"},{Energy:.17,timestamp:"1670971299"},{Energy:.08,timestamp:"1670970758"}],f=[{Frequency:50,timestamp:"1670995507"},{Frequency:50,timestamp:"1670994899"},{Frequency:50,timestamp:"1670994292"},{Frequency:50,timestamp:"1670993686"},{Frequency:50,timestamp:"1670993082"},{Frequency:50,timestamp:"1670992478"},{Frequency:50,timestamp:"1670991873"},{Frequency:50,timestamp:"1670991268"},{Frequency:50,timestamp:"1670990661"},{Frequency:50,timestamp:"1670990057"},{Frequency:49.9,timestamp:"1670989453"},{Frequency:50,timestamp:"1670988847"},{Frequency:49.9,timestamp:"1670988243"},{Frequency:49.9,timestamp:"1670987637"},{Frequency:50,timestamp:"1670987032"},{Frequency:50,timestamp:"1670986427"},{Frequency:50,timestamp:"1670985822"},{Frequency:50,timestamp:"1670985218"},{Frequency:50,timestamp:"1670984613"},{Frequency:50,timestamp:"1670984005"},{Frequency:50,timestamp:"1670983400"},{Frequency:50,timestamp:"1670982795"},{Frequency:50,timestamp:"1670982190"},{Frequency:50,timestamp:"1670981585"},{Frequency:50,timestamp:"1670980977"},{Frequency:49.9,timestamp:"1670980372"},{Frequency:50,timestamp:"1670979767"},{Frequency:50,timestamp:"1670979162"},{Frequency:49.9,timestamp:"1670978558"},{Frequency:49.9,timestamp:"1670977954"},{Frequency:50,timestamp:"1670977346"},{Frequency:50,timestamp:"1670976742"},{Frequency:50,timestamp:"1670976138"},{Frequency:50,timestamp:"1670975534"},{Frequency:50,timestamp:"1670974930"},{Frequency:50,timestamp:"1670974324"},{Frequency:49.9,timestamp:"1670973720"},{Frequency:50,timestamp:"1670973116"},{Frequency:50,timestamp:"1670972510"},{Frequency:50,timestamp:"1670971903"},{Frequency:50,timestamp:"1670971299"},{Frequency:50,timestamp:"1670970758"}],q=[{Power:249.9,timestamp:"1670995507"},{Power:129,timestamp:"1670994899"},{Power:127.4,timestamp:"1670994292"},{Power:139.9,timestamp:"1670993686"},{Power:241.5,timestamp:"1670993082"},{Power:244.8,timestamp:"1670992478"},{Power:435.1,timestamp:"1670991873"},{Power:978,timestamp:"1670991268"},{Power:140.1,timestamp:"1670990661"},{Power:241.4,timestamp:"1670990057"},{Power:244.7,timestamp:"1670989453"},{Power:244.9,timestamp:"1670988847"},{Power:141,timestamp:"1670988243"},{Power:142,timestamp:"1670987637"},{Power:142.7,timestamp:"1670987032"},{Power:582.2,timestamp:"1670986427"},{Power:250,timestamp:"1670985822"},{Power:705.3,timestamp:"1670985218"},{Power:595.9,timestamp:"1670984613"},{Power:599.2,timestamp:"1670984005"},{Power:603.4,timestamp:"1670983400"},{Power:705.8,timestamp:"1670982795"},{Power:709.4,timestamp:"1670982190"},{Power:699.3,timestamp:"1670981585"},{Power:593,timestamp:"1670980977"},{Power:596.2,timestamp:"1670980372"},{Power:595.3,timestamp:"1670979767"},{Power:698.9,timestamp:"1670979162"},{Power:700.6,timestamp:"1670978558"},{Power:934.9,timestamp:"1670977954"},{Power:593.6,timestamp:"1670977346"},{Power:596.4,timestamp:"1670976742"},{Power:703.3,timestamp:"1670976138"},{Power:697.6,timestamp:"1670975534"},{Power:696.2,timestamp:"1670974930"},{Power:582.5,timestamp:"1670974324"},{Power:589.3,timestamp:"1670973720"},{Power:594.3,timestamp:"1670973116"},{Power:693.4,timestamp:"1670972510"},{Power:692.5,timestamp:"1670971903"},{Power:680.7,timestamp:"1670971299"},{Power:660.84,timestamp:"1670970758"}],T=[{"Power Factor":.95,timestamp:"1670995507"},{"Power Factor":.88,timestamp:"1670994899"},{"Power Factor":.88,timestamp:"1670994292"},{"Power Factor":.87,timestamp:"1670993686"},{"Power Factor":.96,timestamp:"1670993082"},{"Power Factor":.96,timestamp:"1670992478"},{"Power Factor":.97,timestamp:"1670991873"},{"Power Factor":.99,timestamp:"1670991268"},{"Power Factor":.87,timestamp:"1670990661"},{"Power Factor":.96,timestamp:"1670990057"},{"Power Factor":.96,timestamp:"1670989453"},{"Power Factor":.96,timestamp:"1670988847"},{"Power Factor":.87,timestamp:"1670988243"},{"Power Factor":.87,timestamp:"1670987637"},{"Power Factor":.87,timestamp:"1670987032"},{"Power Factor":1,timestamp:"1670986427"},{"Power Factor":.96,timestamp:"1670985822"},{"Power Factor":.98,timestamp:"1670985218"},{"Power Factor":.99,timestamp:"1670984613"},{"Power Factor":.99,timestamp:"1670984005"},{"Power Factor":.99,timestamp:"1670983400"},{"Power Factor":.98,timestamp:"1670982795"},{"Power Factor":.98,timestamp:"1670982190"},{"Power Factor":.98,timestamp:"1670981585"},{"Power Factor":.99,timestamp:"1670980977"},{"Power Factor":.99,timestamp:"1670980372"},{"Power Factor":.99,timestamp:"1670979767"},{"Power Factor":.98,timestamp:"1670979162"},{"Power Factor":.98,timestamp:"1670978558"},{"Power Factor":1,timestamp:"1670977954"},{"Power Factor":.99,timestamp:"1670977346"},{"Power Factor":.99,timestamp:"1670976742"},{"Power Factor":.98,timestamp:"1670976138"},{"Power Factor":.98,timestamp:"1670975534"},{"Power Factor":.98,timestamp:"1670974930"},{"Power Factor":.99,timestamp:"1670974324"},{"Power Factor":.99,timestamp:"1670973720"},{"Power Factor":.99,timestamp:"1670973116"},{"Power Factor":.98,timestamp:"1670972510"},{"Power Factor":.98,timestamp:"1670971903"},{"Power Factor":.99,timestamp:"1670971299"},{"Power Factor":.99,timestamp:"1670970758"}],V=[{"Total Price":5257.26,timestamp:"1670995507"},{"Total Price":5205.25,timestamp:"1670994899"},{"Total Price":5173.47,timestamp:"1670994292"},{"Total Price":5117.13,timestamp:"1670993686"},{"Total Price":5052.12,timestamp:"1670993082"},{"Total Price":4936.54,timestamp:"1670992478"},{"Total Price":4799.29,timestamp:"1670991873"},{"Total Price":4669.27,timestamp:"1670991268"},{"Total Price":4578.25,timestamp:"1670990661"},{"Total Price":4524.8,timestamp:"1670990057"},{"Total Price":4465.57,timestamp:"1670989453"},{"Total Price":4390.44,timestamp:"1670988847"},{"Total Price":4342.77,timestamp:"1670988243"},{"Total Price":4293.65,timestamp:"1670987637"},{"Total Price":4258.98,timestamp:"1670987032"},{"Total Price":4199.74,timestamp:"1670986427"},{"Total Price":4139.07,timestamp:"1670985822"},{"Total Price":4004.71,timestamp:"1670985218"},{"Total Price":3835.68,timestamp:"1670984613"},{"Total Price":3689.76,timestamp:"1670984005"},{"Total Price":3529.4,timestamp:"1670983400"},{"Total Price":3366.15,timestamp:"1670982795"},{"Total Price":3179.78,timestamp:"1670982190"},{"Total Price":3007.87,timestamp:"1670981585"},{"Total Price":2860.51,timestamp:"1670980977"},{"Total Price":2700.14,timestamp:"1670980372"},{"Total Price":2554.23,timestamp:"1670979767"},{"Total Price":2370.75,timestamp:"1670979162"},{"Total Price":2201.72,timestamp:"1670978558"},{"Total Price":2022.58,timestamp:"1670977954"},{"Total Price":1875.22,timestamp:"1670977346"},{"Total Price":1729.31,timestamp:"1670976742"},{"Total Price":1563.17,timestamp:"1670976138"},{"Total Price":1394.14,timestamp:"1670975534"},{"Total Price":1210.66,timestamp:"1670974930"},{"Total Price":1050.3,timestamp:"1670974324"},{"Total Price":908.72,timestamp:"1670973720"},{"Total Price":751.24,timestamp:"1670973116"},{"Total Price":590.88,timestamp:"1670972510"},{"Total Price":405.96,timestamp:"1670971903"},{"Total Price":238.38,timestamp:"1670971299"},{"Total Price":234.31,timestamp:"1670970758"}],S=[{Voltage:227.4,timestamp:"1670995507"},{Voltage:228.3,timestamp:"1670994899"},{Voltage:227.6,timestamp:"1670994292"},{Voltage:225.9,timestamp:"1670993686"},{Voltage:227.2,timestamp:"1670993082"},{Voltage:225.9,timestamp:"1670992478"},{Voltage:227.4,timestamp:"1670991873"},{Voltage:225.9,timestamp:"1670991268"},{Voltage:229.3,timestamp:"1670990661"},{Voltage:228.7,timestamp:"1670990057"},{Voltage:230,timestamp:"1670989453"},{Voltage:228.4,timestamp:"1670988847"},{Voltage:229.5,timestamp:"1670988243"},{Voltage:230.4,timestamp:"1670987637"},{Voltage:231.1,timestamp:"1670987032"},{Voltage:227.9,timestamp:"1670986427"},{Voltage:232.5,timestamp:"1670985822"},{Voltage:231.1,timestamp:"1670985218"},{Voltage:230.6,timestamp:"1670984613"},{Voltage:231.94,timestamp:"1670984005"},{Voltage:232.2,timestamp:"1670983400"},{Voltage:231.7,timestamp:"1670982795"},{Voltage:231.9,timestamp:"1670982190"},{Voltage:230.3,timestamp:"1670981585"},{Voltage:229.6,timestamp:"1670980977"},{Voltage:230,timestamp:"1670980372"},{Voltage:229.8,timestamp:"1670979767"},{Voltage:229.8,timestamp:"1670979162"},{Voltage:229.3,timestamp:"1670978558"},{Voltage:228.6,timestamp:"1670977954"},{Voltage:228.8,timestamp:"1670977346"},{Voltage:229.6,timestamp:"1670976742"},{Voltage:230.3,timestamp:"1670976138"},{Voltage:228.9,timestamp:"1670975534"},{Voltage:227.8,timestamp:"1670974930"},{Voltage:226.7,timestamp:"1670974324"},{Voltage:228,timestamp:"1670973720"},{Voltage:229.7,timestamp:"1670973116"},{Voltage:228.3,timestamp:"1670972510"},{Voltage:227.6,timestamp:"1670971903"},{Voltage:225.1,timestamp:"1670971299"},{Voltage:223.93,timestamp:"1670970758"}],k=function(t){Object(c.a)(a,t);var e=Object(l.a)(a);function a(t){var m;return Object(o.a)(this,a),(m=e.call(this,t)).state={selected:1,data:d.cloneDeep(v),title:"Current"},m.currentSelected=m.currentSelected.bind(Object(p.a)(m)),m.energySelected=m.energySelected.bind(Object(p.a)(m)),m.frequencySelected=m.frequencySelected.bind(Object(p.a)(m)),m.powerFactorSelected=m.powerFactorSelected.bind(Object(p.a)(m)),m.powerSelected=m.powerSelected.bind(Object(p.a)(m)),m.priceSelected=m.priceSelected.bind(Object(p.a)(m)),m.voltageSelected=m.voltageSelected.bind(Object(p.a)(m)),m}return Object(n.a)(a,[{key:"currentSelected",value:function(){this.setState({selected:1,data:d.cloneDeep(v),title:"Current"})}},{key:"energySelected",value:function(){this.setState({selected:2,data:d.cloneDeep(C),title:"Energy"})}},{key:"frequencySelected",value:function(){this.setState({selected:3,data:d.cloneDeep(f),title:"Frequency"})}},{key:"powerFactorSelected",value:function(){this.setState({selected:4,data:d.cloneDeep(T),title:"Power Factor"})}},{key:"powerSelected",value:function(){this.setState({selected:5,data:d.cloneDeep(q),title:"Power"})}},{key:"priceSelected",value:function(){this.setState({selected:6,data:d.cloneDeep(V),title:"Total Price"})}},{key:"voltageSelected",value:function(){this.setState({selected:7,data:d.cloneDeep(S),title:"Voltage"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h.a,null,i.a.createElement(h.a,null,i.a.createElement("h1",null,"Electric Monitoring")),i.a.createElement(P.a,null,i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(1===this.state.selected?"active":""),onClick:this.currentSelected},"Current"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(2===this.state.selected?"active":""),onClick:this.energySelected},"Energy"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(3===this.state.selected?"active":""),onClick:this.frequencySelected},"Frequency"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(4===this.state.selected?"active":""),onClick:this.powerFactorSelected},"Power Factor"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(5===this.state.selected?"active":""),onClick:this.powerSelected},"Power"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(6===this.state.selected?"active":""),onClick:this.priceSelected},"Total Price"),i.a.createElement(y.a,{type:"button",className:"btn btn-highchart "+(7===this.state.selected?"active":""),onClick:this.voltageSelected},"Voltage")),i.a.createElement("br",null),i.a.createElement(h.a,null,i.a.createElement(b,{data:this.state.data,title:this.state.title}),i.a.createElement(g,{data:this.state.data,title:this.state.title}))))}}]),a}(m.Component);a(40);s.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var t="".concat("/electrical-monitoring-dashboard-react","/service-worker.js");navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a02970a0.chunk.js.map