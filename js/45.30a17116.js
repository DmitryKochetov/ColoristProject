"use strict";(self["webpackChunkdiplom"]=self["webpackChunkdiplom"]||[]).push([[45],{9045:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var n=s(3396),r=s(9242),a=s(7139);const i=e=>((0,n.dD)("data-v-a8db023a"),e=e(),(0,n.Cn)(),e),l={class:"container"},o={class:"content"},u={class:"hair"},d=i((()=>(0,n._)("div",{class:"hair__heading"},"Запись",-1))),h={class:"hair__box"},_=i((()=>(0,n._)("div",{class:"hair__h3"}," Вы можете заполнить форму и я свяжусь с вами, чтобы уточнить детали и записать вас на указанное время, если оно свободно ",-1))),c={key:0},m=i((()=>(0,n._)("b",null,"Форма еще не отправлена: ",-1))),p={class:"errorsList"},v=i((()=>(0,n._)("input",{type:"submit",value:"Отправить",class:"formButton"},null,-1)));function k(e,t,s,i,k,f){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",o,[(0,n._)("div",u,[d,(0,n._)("div",h,[_,(0,n._)("form",{onSubmit:t[3]||(t[3]=(...e)=>f.checkForm&&f.checkForm(...e)),action:"https://formspree.io/f/meqyovzn",method:"POST"},[(0,n._)("label",null,[(0,n.Uk)(" Ваше имя: "),(0,n.wy)((0,n._)("input",{type:"text",name:"userName","onUpdate:modelValue":t[0]||(t[0]=e=>k.name=e)},null,512),[[r.nr,k.name]])]),(0,n._)("label",null,[(0,n.Uk)(" Ваш телефон: "),(0,n.wy)((0,n._)("input",{type:"phone",name:"UserPhone","onUpdate:modelValue":t[1]||(t[1]=e=>k.phone=e),placeholder:"+7 (___) ___ __ __"},null,512),[[r.nr,k.phone]])]),(0,n._)("label",null,[(0,n.Uk)(" Напишите, что вас интересует и какое время для вас удобно: "),(0,n.wy)((0,n._)("textarea",{name:"userMessage","onUpdate:modelValue":t[2]||(t[2]=e=>k.userText=e)},null,512),[[r.nr,k.userText]])]),k.errors.length?((0,n.wg)(),(0,n.iD)("div",c,[m,(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.errors,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},(0,a.zw)(e),1)))),128))])])):(0,n.kq)("",!0),v],32)])])])])}s(560);var f=s(6530),V={components:{},data(){return{errors:[],name:"",phone:null,userText:"",Text:null}},computed:{isPhoneValid(){const e=/^((8|\+7)[ ]?)?(\(?\d{3}\)?[ ]?)?[\d\- ]{7,10}$/;return e.test(this.phone)},isUserTextValid(){return this.userText.length>6},isNameValid(){return this.name.length>1}},methods:{checkForm(e){if(this.isPhoneValid&&this.isNameValid&&this.isUserTextValid)return!0;this.errors=[],this.isNameValid||this.errors.push("Требуется указать имя (минимум 2 символа)"),this.isUserTextValid||this.errors.push("Требуется указать ваши пожелания (минимум 6 символов)"),this.isPhoneValid||this.errors.push("требуется корректно указать номер телефона"),e.preventDefault()}},setup(){(0,f.u)({title:"Запись",meta:[{name:"description",content:"Запись на окрашивание"}]})}},b=s(89);const x=(0,b.Z)(V,[["render",k],["__scopeId","data-v-a8db023a"]]);var w=x}}]);
//# sourceMappingURL=45.30a17116.js.map