webpackJsonp([0],{"07PK":function(t,a,s){"use strict";a.a={name:"HelloWorld",data:function(){return{data:"华瑞齿科",arrPic:["../static/img/nav1.png","../static/img/nav2.png","../static/img/nav3.png"],num:0,classactive:"active",s1:{left:0},arr:["../static/img/lei_1.png","../static/img/lei_2.png","../static/img/lei_3.png","../static/img/lei_4.png","../static/img/lei_5.png"],icon:[{src:"../static/img/you.png",title:"周边游"},{src:"../static/img/piao.png",title:"机票/火车票"},{src:"../static/img/ktv.png",title:"KTV"},{src:"../static/img/liren.png",title:"丽人/美发"},{src:"../static/img/zuliao.png",title:"足疗按摩"},{src:"../static/img/jingdian.png",title:"景点/门票"},{src:"../static/img/lvxing.png",title:"美团旅行"},{src:"../static/img/jiehun.png",title:"结婚/摄影"},{src:"../static/img/muying.png",title:"母婴亲子"},{src:"../static/img/quan.png",title:"全部分类"}],jieqian:"../static/img/jieqian.png",bannerA:[{h:"周二榜单",p:"5折好店",src:"../static/img/banner1.png"},{h:"周二特价",p:"泰国跟团甩卖",src:"../static/img/banner2.png"},{h:"限时福利",p:"抽100免单券",src:"../static/img/banner3.png"},{h:"周二特惠",p:"演唱会3折",src:"../static/img/banner4.png"},{h:"月卡免费",p:"新人7日免压",src:"../static/img/banner5.png"},{h:"免费专区",p:"免费抢不停",src:"../static/img/banner6.png"},{h:"10月必看",p:"抢备婚好物",src:"../static/img/banner7.png"},{h:"贴秋膘",p:"暖心暖胃爱你",src:"../static/img/banner8.png"}]}},created:function(){this.play()},methods:{autoPlay:function(){this.num>=2?this.num=0:this.num++,this.s1.left=-6.4*this.num+"rem"},play:function(){setInterval(this.autoPlay,2e3)}}}},"09IH":function(t,a,s){t.exports=s.p+"static/img/tou_1.fef265d.jpg"},"1TVG":function(t,a){},"4juw":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my"},[s("div",{staticClass:"header"},[s("div",{staticClass:"icon_R"},t._l(t.arr,function(t){return s("a",{attrs:{href:""}},[s("img",{attrs:{src:t,alt:""}})])})),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"ban"},t._l(t.arrSrc,function(a){return s("a",{attrs:{href:""}},[s("img",{attrs:{src:a.src}}),t._v(t._s(a.text))])})),t._v(" "),s("Balance"),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("router-view"),t._v(" "),s("div",{staticClass:"money"},t._l(t.arrMoney,function(a){return s("router-link",{key:a.id,staticClass:"aa",attrs:{to:a.dd}},[s("img",{attrs:{src:a.src,alt:""}}),t._v(" "+t._s(a.text)+"\r\n\t\t\t"),s("span",{staticClass:"icon_big"},[t._v(">")]),t._v(" "),s("span",{staticClass:"icon_small"},[t._v(t._s(a.data))])])})),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"yewu"},t._l(t.arrYewu,function(a){return s("a",{staticClass:"aa",attrs:{href:""}},[s("img",{attrs:{src:a.src}}),t._v("\r\n    \t\t"+t._s(a.text)+"\r\n    \t\t"),s("span",{staticClass:"icon_big"},[t._v(">")]),t._v(" "),s("span",{staticClass:"icon_small"},[t._v(t._s(a.data))])])})),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"kong"})],1)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"tou"},[i("img",{attrs:{src:s("jQBE")}}),t._v(" "),i("div",{staticClass:"tou_R"},[i("p",[t._v("heheccmm "),i("img",{attrs:{src:s("09IH")}})]),t._v(" "),i("a",{attrs:{href:""}},[t._v("个人信息 "),i("img",{attrs:{src:s("Qq6w")}})])])])}],c={render:i,staticRenderFns:n};a.a=c},"7uMm":function(t,a,s){t.exports=s.p+"static/img/waimai1.6e155ed.png"},"8Isd":function(t,a){},D6PX:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"zong"},[s("div",{staticClass:"head"},[t._m(0),t._v(" "),s("div",{staticClass:"head_C"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],attrs:{type:"text"},domProps:{value:t.data},on:{input:function(a){a.target.composing||(t.data=a.target.value)}}}),t._v(" "),s("span")]),t._v(" "),s("a",{staticClass:"jia",attrs:{href:""}})]),t._v(" "),s("div",{staticClass:"nav"},[s("div",{staticClass:"navZ",style:[t.s1]},t._l(t.arrPic,function(t,a){return s("a",{attrs:{href:""}},[s("img",{attrs:{src:t}})])})),t._v(" "),s("ul",{staticClass:"yuandian"},t._l(t.arrPic.length,function(a,i){return s("li",{class:[t.num==i?t.classactive:""]})}))]),t._v(" "),s("div",{staticClass:"lei"},t._l(t.arr,function(t){return s("a",{attrs:{href:""}},[s("img",{attrs:{src:t,alt:""}})])})),t._v(" "),s("div",{staticClass:"icon-list"},t._l(t.icon,function(a){return s("a",{attrs:{href:""}},[s("img",{attrs:{src:a.src,alt:""}}),s("br"),t._v(t._s(a.title))])})),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"banner"},t._l(t.bannerA,function(a){return s("a",{attrs:{href:"#"}},[s("h3",[t._v(t._s(a.h))]),t._v(" "),s("p",[t._v(t._s(a.p))]),t._v(" "),s("img",{attrs:{src:a.src}})])})),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"jie"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:t.jieqian}})])]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"kongbai"})])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"di"},[t._v("北京"),s("span")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"waimai"},[i("div",{staticClass:"top"},[i("p",[t._v("-猜你喜欢-")])]),t._v(" "),i("div",{staticClass:"waimai_ban"},[i("a",{staticClass:"waimai_a",attrs:{href:""}},[i("img",{attrs:{src:s("7uMm")}}),t._v(" "),i("div",{staticClass:"waimai_R"},[i("p",{staticClass:"waimai_R_1"},[i("strong",[t._v("奶茶嫁给粉")]),i("span",[t._v("6.0km")])]),t._v(" "),i("p",{staticClass:"waimai_R_2"},[t._v("[8店通用]10元代金券1张，可叠加")]),t._v(" "),i("p",{staticClass:"waimai_R_3"},[i("strong",[t._v("￥8.5")]),i("span",[t._v("门市价:￥10")]),i("span",[t._v("已售39580")])])])])]),t._v(" "),i("div",{staticClass:"waimai_ban"},[i("a",{staticClass:"waimai_a",attrs:{href:""}},[i("img",{attrs:{src:s("7uMm")}}),t._v(" "),i("div",{staticClass:"waimai_R"},[i("p",{staticClass:"waimai_R_1"},[i("strong",[t._v("奶茶嫁给粉")]),i("span",[t._v("6.0km")])]),t._v(" "),i("p",{staticClass:"waimai_R_2"},[t._v("[8店通用]10元代金券1张，可叠加")]),t._v(" "),i("p",{staticClass:"waimai_R_3"},[i("strong",[t._v("￥8.5")]),i("span",[t._v("门市价:￥10")]),i("span",[t._v("已售39580")])])])])])])}],c={render:i,staticRenderFns:n};a.a=c},Edo8:function(t,a){},H2oi:function(t,a){},IWht:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"top"},[t._v("我的钱包：1000元")])])}],c={render:i,staticRenderFns:n};a.a=c},M93x:function(t,a,s){"use strict";function i(t){s("8Isd")}var n=s("xJD8"),c=s("Q7T8"),e=s("VU/8"),r=i,l=e(n.a,c.a,r,null,null);a.a=l.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7+uW"),n=s("M93x"),c=s("YaEn");!function(t,a){var s=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",n=function(){var t=s.clientWidth;t&&(s.style.fontSize=t>=640?"100px":t/640*100+"px")};t.addEventListener&&(a.addEventListener(i,n,!1),t.addEventListener("DOMContentLoaded",n,!1))}(document,window),i.a.config.productionTip=!1,new i.a({el:"#app",router:c.a,template:"<App/>",components:{App:n.a}})},NI5s:function(t,a,s){"use strict";function i(t){s("Edo8")}var n=s("NXPM"),c=s("4juw"),e=s("VU/8"),r=i,l=e(n.a,c.a,r,"data-v-4c4d4d8c",null);a.a=l.exports},NXPM:function(t,a,s){"use strict";var i=s("hdVd");a.a={name:"My",data:function(){return{arr:["../static/img/icon_t1.png","../static/img/icon_t2.png","../static/img/icon_t3.png"],arrSrc:[{src:"../static/img/ban1.png",text:"收藏"},{src:"../static/img/ban2.png",text:"评价"},{src:"../static/img/ban3.png",text:"清单"}],arrMoney:[{dd:"/my/ss",src:"../static/img/money1.png",text:"我的钱包",data:""},{dd:"/balance",src:"../static/img/money2.png",text:"余额",data:"￥0.00"},{dd:"",src:"../static/img/money3.png",text:"抵用券",data:"1张待使用"},{dd:"",src:"../static/img/money4.png",text:"卡包",data:"0张"}],arrYewu:[{src:"../static/img/ye1.png",text:"好友去哪",data:"跟好友一起玩"},{src:"../static/img/ye2.png",text:"会员中心",data:""},{src:"../static/img/ye3.png",text:"手机充值",data:"全网最低价"},{src:"../static/img/ye4.png",text:"发票助手",data:""},{src:"../static/img/ye5.png",text:"办信用卡",data:""},{src:"../static/img/ye6.png",text:"客服中心",data:""},{src:"../static/img/ye7.png",text:"我要合作",data:""},{src:"../static/img/ye8.png",text:"关于美团",data:""}]}},components:{Balance:i.a}}},Q7T8:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),s("div",{staticClass:"foot"},[s("ul",t._l(t.arrSrc,function(a,i){return s("li",{on:{click:function(a){t.fn1(i)}}},[s("router-link",{class:[i==t.num?t.classactive:""],attrs:{to:a.router}},[s("img",{attrs:{src:[i==t.num?a.src1:a.src],alt:""}}),t._v(t._s(a.text)+"\n        ")])],1)}))])],1)},n=[],c={render:i,staticRenderFns:n};a.a=c},Qq6w:function(t,a,s){t.exports=s.p+"static/img/tou_2.dbeaa1a.jpg"},UzR0:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"balance"},[t._v("\n\t\t我的余额：50元\n\t")])])}],c={render:i,staticRenderFns:n};a.a=c},WjyX:function(t,a,s){"use strict";a.a={name:"Balance",data:function(){return{}}}},YaEn:function(t,a,s){"use strict";var i=s("7+uW"),n=s("/ocq"),c=s("gORT"),e=s("NI5s"),r=s("uBEm"),l=s("hdVd");i.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Hello",component:c.a},{path:"/my",name:"My",component:e.a,children:[{path:"ss",name:"Wallet",component:r.a}]},{path:"/wallet",name:"Wallet",component:r.a},{path:"/balance",name:"Balance",component:l.a}]})},b5Yn:function(t,a,s){"use strict";a.a={name:"Wallet",data:function(){return{}}}},gORT:function(t,a,s){"use strict";function i(t){s("H2oi")}var n=s("07PK"),c=s("D6PX"),e=s("VU/8"),r=i,l=e(n.a,c.a,r,"data-v-478ff880",null);a.a=l.exports},hdVd:function(t,a,s){"use strict";function i(t){s("tuYy")}var n=s("WjyX"),c=s("UzR0"),e=s("VU/8"),r=i,l=e(n.a,c.a,r,"data-v-5635dd2c",null);a.a=l.exports},jQBE:function(t,a,s){t.exports=s.p+"static/img/tou.0b7a59d.jpg"},tuYy:function(t,a){},uBEm:function(t,a,s){"use strict";function i(t){s("1TVG")}var n=s("b5Yn"),c=s("IWht"),e=s("VU/8"),r=i,l=e(n.a,c.a,r,"data-v-442ec159",null);a.a=l.exports},xJD8:function(t,a,s){"use strict";a.a={name:"app",data:function(){return{arrSrc:[{router:"/",src:"../static/img/shouye.png",text:"首页",src1:"../static/img/shouye2.png"},{router:"/",src:"../static/img/fujin.png",text:"附近",src1:"../static/img/fujin.png"},{router:"/",src:"../static/img/guangyiguang.png",text:"逛一逛",src1:"../static/img/guangyiguang.png"},{router:"/",src:"../static/img/dingdan.png",text:"订单",src1:"../static/img/dingdan.png"},{router:"/my",src:"../static/img/wode.png",text:"我的",src1:"../static/img/wode2.png"}],classactive:"active",num:0}},methods:{fn1:function(t){this.num=t}}}}},["NHnr"]);
//# sourceMappingURL=app.dd1f1054fb3c9e653310.js.map