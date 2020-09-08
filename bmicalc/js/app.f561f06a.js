(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],d=0,h=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://JohnSmith-Wang.github.io/bmicalc/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4454:function(t,e,a){"use strict";var s=a("81d3"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("Navbar")],1),a("div",[a("router-view")],1)])},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[a("span",{staticClass:"navbar-brand"},[t._v("BMI計算機")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-content"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("介紹")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/bmi"}},[t._v("成品")])],1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-content","aria-controls":"navbar-content","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("2877"),c={},u=Object(o["a"])(c,l,r,!1,null,null,null),d=u.exports,h={components:{Navbar:d}},v=h,b=(a("5c0b"),Object(o["a"])(v,i,n,!1,null,null,null)),p=b.exports,f=a("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"mainArea container-fluid"},[a("div",{staticClass:"col-12 col-xl-6"},[a("h4",[t._v("★ 練習項目")]),a("ul",[a("li",[t._v("Locale Stoarge 應用")]),a("li",[t._v("Vuex 應用")])])]),a("div",{staticClass:"col-12 col-xl-6"},[a("h4",[t._v("★ 功能簡述")]),a("ul",[a("li",[t._v("計算BMI數值")]),a("li",[t._v("使用紀錄會被記錄到Local Storge")]),a("li",[t._v("使用者下次使用相同瀏覽器時，會讀取上一次的紀錄")]),a("li",[t._v("點擊該紀錄兩下，會詢問是否刪除該筆紀錄")]),a("li",[t._v("提供 「清除所有紀錄」 的功能")])])]),a("div",{staticClass:"col-12 col-xl-6"},[a("h4",[t._v("★ 更新履歷")]),a("ul",[a("li",[t._v("8/01 初次建立")]),a("li",[t._v("8/25 更新RWD功能，歷史紀錄介面重新設計，修正按鈕顏色跑掉的BUG")]),a("li",[t._v("9/07 修正CSS的ID選擇器名稱重複的問題")])])])])}],_=(a("dd64"),{}),C=Object(o["a"])(_,g,m,!1,null,"559bd2a8",null),y=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bmiPage container-fluid"},[a("div",{staticClass:"calcArea col-12 col-xl-12"},[a("Calculator")],1),a("hr"),a("div",{staticClass:"listArea col-12 col-xl-8"},[a("div",{staticClass:"bmiList"},[a("h3",[t._v("歷史紀錄")]),a("table",{staticClass:"table rwdTable"},[t._m(0),a("tbody",t._l(t.listIndex,(function(t){return a("Resultlist",{key:t,attrs:{index:t}})})),1)])]),a("div",{staticClass:"col-12 cleanBtn"},[a("button",{staticClass:"btn btn-md btn-dark",on:{click:t.allClean}},[t._v("清除所有紀錄")])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("評價")]),a("th",{attrs:{scope:"col"}},[t._v("BMI")]),a("th",{attrs:{scope:"col"}},[t._v("身高(cm)")]),a("th",{attrs:{scope:"col"}},[t._v("體重")]),a("th",{attrs:{scope:"col"}},[t._v("測量日期")]),a("th",{attrs:{scope:"col"}})])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"calcPanel",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)}}},[t._m(0),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Height,expression:"Height"}],staticClass:"form-control",attrs:{type:"text",id:"inputHeight",placeholder:"請輸入你的身高",disabled:t.isResult,onkeyup:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:t.Height},on:{input:function(e){e.target.composing||(t.Height=e.target.value)}}}),a("label",{attrs:{for:"inputHeight"}},[t._v("請輸入你的身高 (cm)")])]),a("div",{staticClass:"form-label-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Weight,expression:"Weight"}],staticClass:"form-control",attrs:{type:"text",id:"inputWeight",placeholder:"請輸入你的體重",disabled:t.isResult,onkeyup:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:t.Weight},on:{input:function(e){e.target.composing||(t.Weight=e.target.value)}}}),a("label",{attrs:{for:"inputWeight"}},[t._v("請輸入你的體重 (kg)")])]),a("div",{staticClass:"btnArea"},[t.isResult?a("div",{staticClass:"row justify-content-between"},[a("span",{staticClass:"btn btn-lg col-8 customText",class:t.labelColor,attrs:{id:"customBtn"}},[t._v(" "+t._s(t.Range)+" ("+t._s(t.BMI)+") ")]),a("button",{staticClass:"btn btn-lg btn-dark col-3",attrs:{type:"button"},on:{click:t.cancel}},[a("i",{staticClass:"fas fa-undo"})])]):a("div",{staticClass:"row justify-content-between"},[a("button",{staticClass:"btn btn-lg btn-dark col-12",attrs:{type:"button"},on:{click:t.submitHandler}},[t._v(" 開始計算 ")])])]),t.nullCheck?a("p",{staticClass:"null-warning"},[t._v("請確實填寫資料!!")]):t._e()])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bmiTitle"},[a("h3",[t._v("BMI 計算機")])])}],S=(a("b680"),{data:function(){return{Height:"",Weight:"",Resultcolor:"",BMI:"",Range:"",Date:"",labelColor:"",isResult:!1,nullCheck:!1}},methods:{submitHandler:function(){this.Height&&this.Weight?(this.bmiHandler(),this.rangeHandler(this.BMI),this.dateHandler(),this.nullCheck=!1,this.isResult=!0,this.$store.commit("ADD_LIST",{result:this.Range,bmi:this.BMI,height:this.Height,weight:this.Weight,color:this.Resultcolor,date:this.Date})):this.nullCheck=!0},bmiHandler:function(){var t=this.Height/100,e=(this.Weight/(t*t)).toFixed(1);this.BMI=e},rangeHandler:function(t){t>=35?(this.Range="重度肥胖",this.Resultcolor="red",this.labelColor="bg-danger"):30<=t&&t<35?(this.Range="中度肥胖",this.Resultcolor="pink",this.labelColor="bg-pink"):27<=t&&t<30?(this.Range="輕度肥胖",this.Resultcolor="orange",this.labelColor="bg-orange"):24<=t&&t<27?(this.Range="肥胖",this.Resultcolor="yellow",this.labelColor="bg-yellow"):18.5<=t&&t<24?(this.Range="健康",this.Resultcolor="green",this.labelColor="bg-success"):(this.Range="過輕",this.Resultcolor="blue",this.labelColor="bg-primary")},dateHandler:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,s=t.getDate(),i=a+"-"+s+"-"+e;this.Date=i},cancel:function(){this.isResult=!1,this.Height="",this.Weight=""}}}),T=S,R=(a("98be"),Object(o["a"])(T,k,I,!1,null,"9d234c88",null)),L=R.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{attrs:{scope:"col"}},[a("strong",[a("span",{staticClass:"colorTag",class:t.getdata.color},[t._v(t._s(t.getdata.result))])]),a("span",{staticClass:"rwddel",on:{click:t.destoryItem}},[a("i",{staticClass:"icon text-danger fas fa-trash-alt"})])]),a("td",{staticClass:"rwdTitle",attrs:{scope:"col","data-title":"BMI"}},[a("strong",[t._v(t._s(t.getdata.bmi))])]),a("td",{staticClass:"rwdTitle",attrs:{scope:"col","data-title":"身高"}},[t._v(t._s(t.getdata.height)+"cm")]),a("td",{staticClass:"rwdTitle",attrs:{scope:"col","data-title":"體重"}},[t._v(t._s(t.getdata.weight)+"kg")]),a("td",{staticClass:"rwdTitle",attrs:{scope:"col","data-title":"測量日期"}},[t._v(t._s(t.getdata.date))]),a("td",{staticClass:"del",attrs:{scope:"col"}},[a("span",{on:{click:t.destoryItem}},[a("i",{staticClass:"fas fa-trash-alt text-danger icon"})])])])},H=[],j=(a("a9e3"),{data:function(){return{}},props:{index:{type:Number,required:!0}},methods:{destoryItem:function(){confirm("確定要刪除此紀錄嗎?")&&this.$store.commit("DEL_LIST",this.index)}},computed:{getdata:function(){return this.$store.state.bmiList[this.index]}}}),$=j,E=(a("6a33"),Object(o["a"])($,O,H,!1,null,"1a885192",null)),M=E.exports,B={components:{Calculator:L,Resultlist:M},computed:{listIndex:function(){return this.$store.getters["listIndex"]}},methods:{allClean:function(){confirm("確定要刪除全部的紀錄嗎?")&&this.$store.commit("SET_LIST",[])}},mounted:function(){this.$store.dispatch("INIT_LIST")}},D=B,W=(a("4454"),Object(o["a"])(D,x,w,!1,null,"d6121b3e",null)),P=W.exports;s["a"].use(f["a"]);var N=[{path:"/",name:"Home",component:y},{path:"/bmi",name:"Bmi",component:P}],A=new f["a"]({routes:N,linkActiveClass:"active"}),J=A,F=(a("c975"),a("d81d"),a("a434"),a("2f62"));s["a"].use(F["a"]);var q={save:function(t){localStorage.setItem("bmi-list",JSON.stringify(t))},load:function(){return JSON.parse(localStorage.getItem("bmi-list")||"[]")}},G=new F["a"].Store({strict:!0,state:{bmiList:[{result:"過胖",bmi:"25",height:"150",weight:"50",color:"red",date:"5-5-2020"},{result:"過輕",bmi:"20",height:"140",weight:"40",color:"red",date:"5-6-2020"},{result:"肥胖",bmi:"10",height:"130",weight:"30",color:"red",date:"5-7-2020"}]},getters:{listIndex:function(t){return t.bmiList.map((function(e){return t.bmiList.indexOf(e)}))}},mutations:{SET_LIST:function(t,e){t.bmiList=e,q.save(t.bmiList)},ADD_LIST:function(t,e){t.bmiList.push(e),q.save(t.bmiList)},DEL_LIST:function(t,e){t.bmiList.splice(e,1),q.save(t.bmiList)}},actions:{INIT_LIST:function(t){var e=t.commit;e("SET_LIST",q.load())}}}),U=a("31bd");a("4989");s["a"].config.productionTip=!1,Object(U["sync"])(G,J),s["a"].directive("focus",{inserted:function(t){t.focus()}}),s["a"].config.productionTip=!1,new s["a"]({router:J,store:G,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"6a33":function(t,e,a){"use strict";var s=a("dec3"),i=a.n(s);i.a},"81d3":function(t,e,a){},8422:function(t,e,a){},"98be":function(t,e,a){"use strict";var s=a("8422"),i=a.n(s);i.a},"9b89":function(t,e,a){},"9c0c":function(t,e,a){},dd64:function(t,e,a){"use strict";var s=a("9b89"),i=a.n(s);i.a},dec3:function(t,e,a){}});
//# sourceMappingURL=app.f561f06a.js.map