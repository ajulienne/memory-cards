(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add-card"],{"098f":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-card"},[n("h1",[e._v("Add a card")]),n("NewCardForm")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-card-form"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("div",{staticClass:"controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.questionTitle,expression:"questionTitle"}],attrs:{id:"questionTitle",placeholder:"Question",type:"text"},domProps:{value:e.questionTitle},on:{input:function(t){t.target.composing||(e.questionTitle=t.target.value)}}})]),n("div",{staticClass:"controls"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],attrs:{id:"question",placeholder:"Add additionnal informations here...",cols:"60",rows:"5"},domProps:{value:e.question},on:{input:function(t){t.target.composing||(e.question=t.target.value)}}})]),n("div",{staticClass:"controls"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answerTitle,expression:"answerTitle"}],attrs:{id:"answerTitle",placeholder:"Answer",type:"text"},domProps:{value:e.answerTitle},on:{input:function(t){t.target.composing||(e.answerTitle=t.target.value)}}})]),n("div",{staticClass:"controls"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{id:"answer",placeholder:"Add additionnal informations here..",cols:"60",rows:"5"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value)}}})]),e._m(0)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"buttons"},[n("input",{attrs:{type:"submit",value:"Add"}})])}],o={name:"NewCardForm",data:function(){return{questionTitle:null,answerTitle:null,question:null,answer:null}},methods:{submitForm:function(){var e=this,t={questionTitle:this.questionTitle,question:this.question,answerTitle:this.answerTitle,answer:this.answer,categoryId:+this.$route.params.id};this.$store.dispatch("createCard",t).then((function(){e.resetForm()}))},resetForm:function(){this.questionTitle=null,this.question=null,this.answerTitle=null,this.answer=null}}},l=o,u=(n("c27c"),n("2877")),c=Object(u["a"])(l,a,r,!1,null,null,null),d=c.exports,m={name:"AddCard",components:{NewCardForm:d}},p=m,v=Object(u["a"])(p,s,i,!1,null,null,null);t["default"]=v.exports},c27c:function(e,t,n){"use strict";var s=n("c627"),i=n.n(s);i.a},c627:function(e,t,n){}}]);
//# sourceMappingURL=add-card.930ecba5.js.map