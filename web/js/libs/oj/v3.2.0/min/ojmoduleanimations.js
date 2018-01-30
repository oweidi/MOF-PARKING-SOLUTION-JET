/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","jquery","promise","ojs/ojanimation"],function(a,g,c){a.la={};a.la.l$=function(a,c){for(var e=g.virtualElements.firstChild(a);e;)1==e.nodeType?c.push(e):8==e.nodeType&&this.l$(e,c),e=g.virtualElements.nextSibling(e)};a.la.Bya=function(a,c){a._ojOldRoot=c};a.la.sEa=function(a){return a._ojOldRoot};a.la.JAa=function(b){if(b.isInitial)return!1;if(1==b.node.nodeType)return!0;if(8==b.node.nodeType){var c=[];a.la.l$(b.node,c);if(c&&1==c.length)return a.la.Bya(b,c[0]),!0}return!1};
a.la.HDa=function(b){var c;1==b.node.nodeType?c=b.node:8==b.node.nodeType&&(c=a.la.sEa(b));return c};a.la.$W=function(a){var d=c(document.createElement("div")),e={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};d.appendTo(a.offsetParent);d.css(e);d.addClass("oj-animation-host-viewport");a=document.createElement("div");a.className="oj-animation-host";d.append(a);return a};a.la.Bma=function(b,c,e){return{canAnimate:a.la.JAa,prepareAnimation:function(f){var g=
{};f=a.la.HDa(f);c&&!e&&(g.newViewParent=a.la.$W(f));b&&(g.oldViewParent=a.la.$W(f));c&&e&&(g.newViewParent=a.la.$W(f));return g},animate:function(e){var g=e.oldViewParent,k=e.newViewParent,l=[];g&&b&&l.push(a.ha.Yn(g,"close",b));k&&c&&l.push(a.ha.Yn(k,"open",c));return Promise.all(l).then(function(){a.la.XJa(e)})}}};o_("ModuleAnimations.createAnimation",a.la.Bma,a);a.la.Yia=function(a,c){var e=a[c];e&&(e=e.parentNode)&&e.parentNode&&e.parentNode.removeChild(e)};a.la.XJa=function(b){b.removeOldView();
b.insertNewView();a.la.Yia(b,"newViewParent");a.la.Yia(b,"oldViewParent")};a.la.BDa=function(b){null==a.la.K_&&(a.la.K_=a.wc.Kd("oj-animation-module-effects"));return a.la.K_?a.la.K_[b]:null};a.la.Jo=function(b){return(b=a.la.BDa(b))?a.la.Bma(b.oldViewEffect,b.newViewEffect,b.newViewOnTop):null};a.la.LY=function(b){null==a.la.O_&&(a.la.O_=a.wc.Kd("oj-animation-navigate-methods"));return a.la.O_?a.la.O_[b]:null};a.la.pJa=function(b,c){var e=a.la.LY(c);return a.ModuleAnimations[e]?null==a.ModuleAnimations[e].canAnimate||
a.ModuleAnimations[e].canAnimate(b):!1};a.la.qJa=function(b,c){var e=a.la.LY(c);return a.ModuleAnimations[e]&&a.ModuleAnimations[e].prepareAnimation?a.ModuleAnimations[e].prepareAnimation(b):null};a.la.oJa=function(b,c){var e=a.la.LY(c);return a.ModuleAnimations[e]&&a.ModuleAnimations[e].animate?a.ModuleAnimations[e].animate(b):Promise.resolve()};a.la.zN=function(b){return{canAnimate:function(c){return a.la.pJa(c,b)},prepareAnimation:function(c){return a.la.qJa(c,b)},animate:function(c){return a.la.oJa(c,
b)}}};a.la.zma=a.la.Jo("coverLeft");o_("ModuleAnimations.coverLeft",a.la.zma,a);a.la.Ama=a.la.Jo("coverRight");o_("ModuleAnimations.coverRight",a.la.Ama,a);a.la.Zqa=a.la.Jo("revealLeft");o_("ModuleAnimations.revealLeft",a.la.Zqa,a);a.la.$qa=a.la.Jo("revealRight");o_("ModuleAnimations.revealRight",a.la.$qa,a);a.la.WPa="rtl"===a.Q.Wj()?a.la.Ama:a.la.zma;o_("ModuleAnimations.coverStart",a.la.WPa,a);a.la.FUa="rtl"===a.Q.Wj()?a.la.Zqa:a.la.$qa;o_("ModuleAnimations.revealEnd",a.la.FUa,a);a.la.XPa=a.la.Jo("coverUp");
o_("ModuleAnimations.coverUp",a.la.XPa,a);a.la.EUa=a.la.Jo("revealDown");o_("ModuleAnimations.revealDown",a.la.EUa,a);a.la.V5=a.la.Jo("zoomIn");o_("ModuleAnimations.zoomIn",a.la.V5,a);a.la.W5=a.la.Jo("zoomOut");o_("ModuleAnimations.zoomOut",a.la.W5,a);a.la.IQa=a.la.Jo("fade");o_("ModuleAnimations.fade",a.la.IQa,a);a.la.XTa=a.la.Jo("pushStart");o_("ModuleAnimations.pushStart",a.la.XTa,a);a.la.WTa=a.la.Jo("pushEnd");o_("ModuleAnimations.pushEnd",a.la.WTa,a);a.la.eqa=a.la.zN("navChild");o_("ModuleAnimations.navChild",
a.la.eqa,a);a.la.fqa=a.la.zN("navParent");o_("ModuleAnimations.navParent",a.la.fqa,a);a.la.CQa=a.la.eqa;o_("ModuleAnimations.drillIn",a.la.CQa,a);a.la.DQa=a.la.fqa;o_("ModuleAnimations.drillOut",a.la.DQa,a);a.la.yTa=a.la.zN("navSiblingEarlier");o_("ModuleAnimations.navSiblingEarlier",a.la.yTa,a);a.la.zTa=a.la.zN("navSiblingLater");o_("ModuleAnimations.navSiblingLater",a.la.zTa,a);a.la.nVa=function(b){return new function(){function c(a){return function(b){return e[a].call(e,b)}}var e,f=this;this.canAnimate=
function(g){var k=b(g);e=null==k?null:a.ModuleAnimations[k];if(!e)return!1;for(var k=["prepareAnimation","animate"],l=0;l<k.length;l++){var m=k[l];f[m]=c(m)}return c("canAnimate")(g)}}};o_("ModuleAnimations.switcher",a.la.nVa,a)});