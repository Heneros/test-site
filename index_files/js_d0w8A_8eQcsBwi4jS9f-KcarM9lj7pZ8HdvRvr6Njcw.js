/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
var animate=function(){var h=function(a){var b=a.length;return function d(){for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return f.length<b?function(){for(var a=arguments.length,b=Array(a),e=0;e<a;e++)b[e]=arguments[e];return d.apply(void 0,f.concat(b))}:a.apply(void 0,f)}},p=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduce(function(a,b){return b(a)},a)}},q=function(a){return function(){return!a.apply(void 0,arguments)}},
E={linear:function(a,b,c,d){return b+a/d*c},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeInCubic:function(a,b,c,d){return c*(a/=d)*a*a+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b},easeInQuint:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeInSine:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeInExpo:function(a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeInCirc:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeInElastic:function(a,b,c,d){var e=
4>=arguments.length||void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(1==(a/=d))return b+c;var e=d*(1-Math.min(e,999)/1E3),f=c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/c);return-(c*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e))+b},easeInBack:function(a,b,c,d){return c*(a/=d)*a*(2.70158*a-1.70158)+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeOutCubic:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeOutQuint:function(a,
b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeOutExpo:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeOutElastic:function(a,b,c,d){var e=4>=arguments.length||void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(1==(a/=d))return b+c;e=d*(1-Math.min(e,999)/1E3);return c*Math.pow(2,-10*a)*Math.sin(2*(a*d-(c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/
c)))*Math.PI/e)+c+b},easeOutBack:function(a,b,c,d){return c*((a=a/d-1)*a*(2.70158*a+1.70158)+1)+b},easeOutBounce:function(a,b,c,d){return(a/=d)<1/2.75?7.5625*c*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+.984375)+b},easeInOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},easeInOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b},easeInOutQuart:function(a,b,c,d){return 1>
(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b},easeInOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b},easeInOutSine:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b},easeInOutExpo:function(a,b,c,d){return 0==a?b:a==d?b+c:1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInOutCirc:function(a,b,c,d){return 1>(a/=d/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInOutElastic:function(a,b,c,d){var e=4>=arguments.length||
void 0===arguments[4]?500:arguments[4];if(0==a)return b;if(2==(a/=d/2))return b+c;var e=d*(1-Math.min(e,999)/1E3)*1.5,f=c<Math.abs(c)?e/4:e/(2*Math.PI)*Math.asin(c/c);return 1>a?-.5*c*Math.pow(2,10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)+b:c*Math.pow(2,-10*--a)*Math.sin(2*(a*d-f)*Math.PI/e)*.5+c+b},easeInOutBack:function(a,b,c,d){var e=1.70158;return 1>(a/=d/2)?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}},w=function(a){return a[0]},F=function(a){return a.reduce(function(a,c){return a.concat(c)})},
m=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:function(a,b){return a.some(function(a){return a===b})}}(),x=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e=F(c);return a.filter(function(a){return q(m)(e,a)})},G=function(){var a=function(a){var c=new Map;Object.keys(a).forEach(function(d){return c.set(d,a[d])});return c};return function(b){return b instanceof Map?b:a(b)}}(),H=function(a){return/^#/.test(a)},y=function(a){return/^rgb/.test(a)},
I=function(){var a=function(a){return 7>a.length?a.split("").reduce(function(a,b){return a+b+b}):a},b=function(a){return a.match(/[\d\w]{2}/g).map(function(a){return parseInt(a,16)})};return function(c){if(y(c))return c;c=p(a,b)(c);return"rgb("+c[0]+", "+c[1]+", "+c[2]+")"}}(),z=function(a){return J("string"==typeof a?document.querySelectorAll(a):a)},J=function(){var a=[NodeList,HTMLCollection,Set];return function(b){return Array.isArray(b)?b:a.some(function(a){return b instanceof a})?Array.from(b):
b.nodeType?[b]:b.get()}}(),l=new Map;"el delay begin complete loop direction".split(" ").forEach(function(a){return l.set(a,null)});l.set("duration",1E3);l.set("easing","easeOutElastic");var K=function(){var a=Array.from(l.keys()).filter(function(a){return l.get(a)}),b=function(b){return a.every(function(a){return b.has(a)})},c=function(b){var c=new Map(b);a.forEach(function(a){c.has(a)||c.set(a,l.get(a))});return c};return function(a){return b(a)?a:c(a)}}(),L=function(){var a=h(function(a,b){return Array.isArray(a.get(b))}),
b=function(b){return n(b).every(a(b))},c=function(b){return n(b).filter(q(a(b)))};return function(a){if(b(a))return a;var e=new Map(a);c(e).forEach(function(a){return e.set(a,[A.get(a),e.get(a)])});return e}}(),M=function(){var a=function(a){return/\D$/.test(a)},b=h(function(b,c){return a(c)||/scale/.test(b)?c:/rotate|skew/.test(b)?c+"deg":c+"px"}),c=function(b,c){return c.every(function(c){return b.get(c).every(a)})};return function(a){var e=n(a).filter(r);if(c(a,e))return a;var f=new Map(a);e.forEach(function(c){return f.set(c,
a.get(c).map(b(c)))});return f}}(),N=function(){var a=h(function(a,b){return a.get(b).some(H)}),b=function(b){return!B(b).some(a(b))},c=function(b){return B(b).filter(a(b))};return function(a){if(b(a))return a;var e=new Map(a);c(a).forEach(function(a){return e.set(a,e.get(a).map(I))});return e}}(),C=function(a){var b=new Map(a);t(a).forEach(function(a){return b.set(a,b.get(a).slice().reverse())});return b},O=p(G,K,L,M,N,function(a){return(new Map(a)).set("el",z(a.get("el")))},function(a){return"reverse"==
a.get("direction")?C(a):a}),t=function(){var a=Array.from(l.keys()),b=function(b){return q(m)(a,b)};return function(a){return Array.from(a.keys()).filter(b)}}(),Q=function(){var a=p(w,y),b=h(function(b,d){var e=b.get(d).map(P),f=e[0],g=e[1],e=new Map;e.set("prop",d);e.set("from",f);e.set("to",g);e.set("isTransformFunction",r(d));e.set("isColor",a(b.get(d)));/\d$/.test(b.get("easing"))?(f=b.get("easing").split(" "),g=f[1],e.set("easing",f[0]),e.set("frequency",g)):e.set("easing",b.get("easing"));return e});
return function(a,d){return t(a).map(b(a))}}(),n=function(){var a=function(a){return m(u,a)};return function(b){return Array.from(b.keys()).filter(a)}}(),B=function(a){return x(t(a),n(a))},u="opacity translateX translateY scale rotate scaleX scaleY rotateX rotateY perspective skewX skewY translateZ rotateZ scaleZ".split(" "),A=new Map;(function(){var a=["opacity","scale","scaleX","scaleY"];u.forEach(function(b){return A.set(b,m(a,b)?1:0)})})();var r=function(){var a=u.filter(function(a){return"opacity"!=
a});return function(b){return m(a,b)}}(),R=function(a){var b=n(a);if(b.length){var c=[];b.some(r)&&c.push("transform");m(b,"opacity")&&c.push("opacity");var d=c.join();a.get("el").forEach(function(a){a.style.willChange||(a.style.willChange=d)})}},S=function(a,b){return b.reduce(function(b,d,e){return b+a[e-1]+d})},P=function(){var a=/-?\d*\.?\d+/g;return function(b){var c=new Map;c.set("digits",("string"==typeof b?b:String(b)).match(a).map(Number));c.set("others",("string"==typeof b?b:String(b)).split(a));
return c}}(),T=h(function(a,b,c){var d=c.get("to").get("digits").map(function(d,f){var g=c.get("from").get("digits")[f];if(g==d)return g;var D=d-g,g=E[c.get("easing")](b,g,D,a.get("duration"),c.get("frequency"));return c.get("isColor")?Math.round(g):g});return S(d,c.get("to").get("others"))}),U=h(function(a,b){var c=a.get(b.get("prop"));return w(c.slice(-1))}),V=h(function(a,b,c){var d=void 0;a.forEach(function(a,f){a.get("isTransformFunction")?(d||(d=[]),d.push(a.get("prop")+"("+b[f]+")")):"opacity"==
a.get("prop")?c.style.opacity=b[f]:c.setAttribute(a.get("prop"),b[f])});d&&(c.style.transform=d.join(" "))}),W=function(){var a=function(a,c){c.get("begin")&&c.get("begin")(c.get("el"));requestAnimationFrame(a)};return function(b,c){return c.get("delay")?setTimeout(function(){return a(b,c)},c.get("delay")):a(b,c)}}(),X=function(a){return v(function(){if("alternate"==a.get("direction"))return C(a);if("reverse"==a.get("direction")){var b=new Map(a);b["delete"]("direction");return b}return a}())},k=
new Map,Y=function(){var a=0;return function(b){var c=a++;k=(new Map(k)).set(c,b);return c}}(),v=function(a){var b=O(a),c=Q(b),d=Y(b.get("el")),e=new Map;R(b);W(function g(a){if(k.has(d)){e.has("start")||e.set("start",a);e.set("elapsed",a-e.get("start"));a=e.get("elapsed")<b.get("duration");var h=c.map(a?T(b,e.get("elapsed")):U(b));k.get(d).forEach(V(c,h));a?requestAnimationFrame(g):(a=new Map(k),a["delete"](d),k=a,b.get("complete")&&b.get("complete")(b.get("el")),b.get("loop")&&X(b))}},b)};v.stop=
function(a){var b=z(a),c=new Map(k);c.forEach(function(a,e){var f=x(a,b);f.length?c.set(e,f):c["delete"](e)});k=c};return v}();"undefined"!=typeof module&&module.exports&&(module.exports=animate);;
/* Articulate.js (1.1.0). (C) 2017 Adam Coti. MIT @license: en.wikipedia.org/wiki/MIT_License
See Github page at: https://github.com/acoti/articulate.js
*/
!function(e){"use strict";var t,n,i,r,a=new Array,o=new Array,s=new Array,u=new Array,c=1.1,d=1,h=1,p=new Array;function l(e,t){this.prepend=e,this.append=t}function f(e,t){this.name=e,this.language=t}function g(){for(var e=speechSynthesis.getVoices(),t=0;t<e.length;t++)p.push(new f(e[t].name,e[t].lang))}if("speechSynthesis"in window&&g(),"undefined"!=typeof speechSynthesis&&void 0!==speechSynthesis.onvoiceschanged&&(speechSynthesis.onvoiceschanged=g),"speechSynthesis"in window){var y=new SpeechSynthesisUtterance;window.speechSynthesis.cancel()}var v=/chrome/i.test(navigator.userAgent),j=/edge/i.test(navigator.userAgent),m=v&&!j,w={speak:function(p){e.extend({},e.fn.articulate.defaults,p);var f,g,v,j="",w=new Array;w.q=new l("quote,",", unquote,"),w.ol=new l("Start of list.","End of list."),w.ul=new l("Start of list.","End of list."),w.blockquote=new l("Blockquote start.","Blockquote end."),w.img=new l("There's an embedded image with the description,",""),w.table=new l("There's an embedded table with the caption,",""),w.figure=new l("There's an embedded figure with the caption,","");var Q=["audio","button","canvas","code","del","dialog","dl","embed","form","head","iframe","meter","nav","noscript","object","s","script","select","style","textarea","video"];if("speechSynthesis"in window){if(!window.speechSynthesis.speaking)return this.each(function(){f=e(this).clone(),g=function(e){var t,n;if(o.length>0)for(var i in o){var r=Q.indexOf(o[i]);r>-1&&Q.splice(r,1)}for(var i in Q)jQuery(e).find(Q[i]).addBack(Q[i]).not("[data-articulate-recognize]").each(function(){jQuery(this).html("")});if(a.length>0)for(var i in a)jQuery(e).find(a[i]).addBack(a[i]).not("[data-articulate-recognize]").each(function(){jQuery(this).html("")});jQuery(e).find("[data-articulate-ignore]").addBack("[data-articulate-ignore]").each(function(){jQuery(this).html("")}),jQuery(e).find("[data-articulate-prepend]").addBack("[data-articulate-prepend]").each(function(){t=jQuery(this).data("articulate-prepend"),jQuery(this).prepend(t+" ")}),jQuery(e).find("[data-articulate-append]").addBack("[data-articulate-append]").each(function(){t=jQuery(this).data("articulate-append"),jQuery(this).append(" "+t)});var s=0;for(var c in w)++s<=4&&jQuery(e).find(c).each(function(){u[c]?(jQuery(this).prepend(u[c].prepend+" "),jQuery(this).append(" "+u[c].append)):(jQuery(this).prepend(w[c].prepend+" "),jQuery(this).append(" "+w[c].append))});return jQuery(e).find("h1,h2,h3,h4,h5,h6,li,p").addBack("h1,h2,h3,h4,h5,h6,li,p").each(function(){jQuery(this).append(". ")}),jQuery(e).find("br").each(function(){jQuery(this).after(", ")}),jQuery(e).find("figure").addBack("figure").each(function(){t=jQuery(this).find("figcaption").html(),n=u.figure?u.figure.prepend:w.figure.prepend,null!=t&&""!==t&&jQuery("<div>"+n+" "+t+".</div>").insertBefore(this),jQuery(this).remove()}),jQuery(e).find("img").addBack("img").each(function(){t=jQuery(this).attr("alt");var e=jQuery(this).parent(),i=e.get(0).tagName;n=u.img?u.img.prepend:w.img.prepend,void 0!==t&&""!=t&&("PICTURE"==i?jQuery("<div>"+n+" "+t+".</div>").insertBefore(e):jQuery("<div>"+n+" "+t+".</div>").insertBefore(this)),jQuery(this).remove()}),jQuery(e).find("table").addBack("table").each(function(){t=jQuery(this).find("caption").text(),n=u.table?u.table.prepend:w.table.prepend,void 0!==t&&""!=t&&jQuery("<div>"+n+" "+t+".</div>").insertBefore(this),jQuery(this).remove()}),jQuery(e).find("[data-articulate-swap]").addBack("[data-articulate-swap]").each(function(){t=jQuery(this).data("articulate-swap"),jQuery(this).text(t)}),jQuery(e).find("[data-articulate-spell]").addBack("[data-articulate-spell]").each(function(){t=(t=jQuery(this).text()).split("").join(" "),jQuery(this).text(t)}),e}(f),g=jQuery(g).html(),v=function(e){var t,n,i,r,a;for(;-1!=e.indexOf("\x3c!-- <articulate>")&&(t=e.indexOf("\x3c!-- <articulate>"),-1!=(n=e.indexOf("</articulate> --\x3e",t)));)i=e.substring(t+17,n),r=e.substring(0,t),a=e.substring(n+17),e=r+" "+i+" "+a;e=(e=e.replace(/<!--[\s\S]*?-->/g,"")).replace(/(<([^>]+)>)/gi,"");var o,c,d=s.length,h=0;for(;h<d;){o=(o=s[h]).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),c=s[h+1]+" ";var p=new RegExp(o,"gi"),e=e.replace(p,c);h+=2}e=u.q?(e=e.replace(/“/g,u.q.prepend+" ")).replace(/”/g," "+u.q.append):(e=e.replace(/“/g,w.q.prepend+" ")).replace(/”/g," "+w.q.append);e=(e=e.replace(/—/g,", ")).replace(/--/g,", ");var l=document.createElement("textarea");return l.innerHTML=e,e=(e=(e=(e=(e=(e=l.value).replace(/(\r\n|\n|\r)/gm,"")).replace(/  +/g," ")).replace(/\.\./g,".")).replace(/,,/g,",")).replace(/ ,/g,",")}(g),j=j+" "+v}),c=void 0!==t?t:1.1,d=void 0!==n?n:1,h=void 0!==i?i:1,(y=new SpeechSynthesisUtterance).text=j,y.rate=c,y.pitch=d,y.volume=h,m&&(y.voice=speechSynthesis.getVoices().filter(function(e){return"native"==e.name})[0]),void 0!==r&&(y.voice=speechSynthesis.getVoices().filter(function(e){return e.name==r})[0]),window.speechSynthesis.speak(y),this}else alert("Sorry, this browser does not support the Web Speech API.")},pause:function(){return window.speechSynthesis.pause(),this},resume:function(){return window.speechSynthesis.resume(),this},stop:function(){return window.speechSynthesis.cancel(),this},enabled:function(){return"speechSynthesis"in window},isSpeaking:function(){return window.speechSynthesis.speaking},isPaused:function(){return window.speechSynthesis.paused},rate:function(){var e=arguments[0];return e>=.1&&e<=10?t=e:void 0===e&&(t=void 0,c=1.1),this},pitch:function(){var e=arguments[0];return e>=.1&&e<=2?n=e:void 0===e&&(n=void 0,d=1),this},volume:function(){var e=arguments[0];return e>=0&&e<=1?i=e:void 0===e&&(i=void 0,h=1),this},ignore:function(){var e=arguments.length;for(a.length=0;e>0;)e--,a.push(arguments[e]);return this},recognize:function(){var e=arguments.length;for(o.length=0;e>0;)e--,o.push(arguments[e]);return this},replace:function(){var e=arguments.length;s.length=0;for(var t=0;t<e&&(s.push(arguments[t],arguments[t+1]),e-(t+=2)!=1););return this},customize:function(){var e=arguments.length;if(0==e&&(u=[]),2==e){if(-1==["img","table","figure"].indexOf(arguments[0]))return void console.log("Error: When customizing, tag indicated must be either 'img', 'table', or 'figure'.");u[arguments[0].toString()]=new l(arguments[1].toString())}if(3==e){if(-1==["q","ol","ul","blockquote"].indexOf(arguments[0]))return void console.log("Error: When customizing, tag indicated must be either 'q', 'ol', 'ul' or 'blockquote'.");u[arguments[0].toString()]=new l(arguments[1].toString(),arguments[2].toString())}return this},getVoices:function(){if(0==arguments.length)return p;var e=jQuery(arguments[0]),t="Choose a Different Voice";void 0!==arguments[1]&&(t=arguments[1]),e.append(jQuery("<select id='voiceSelect'><option value='none'>"+t+"</option></select>"));for(var n=0;n<p.length;n++){var i=document.createElement("option");i.textContent=p[n].name+" ("+p[n].language+")",i.setAttribute("value",p[n].name),i.setAttribute("data-articulate-language",p[n].language),e.find("select").append(i)}return e.on("change",function(){jQuery(this).find("option:selected").each(function(){"none"!=jQuery(this).val()&&(r=jQuery(this).val())})}),this},setVoice:function(){if(arguments.length<2)return this;var e,t;if("name"==arguments[0]){e=arguments[1];for(var n=0;n<p.length;n++)p[n].name==e&&(r=e)}if("language"==arguments[0])if(2==(t=arguments[1].toUpperCase()).length){for(n=0;n<p.length;n++)if(p[n].language.substring(0,2).toUpperCase()==t){r=p[n].name;break}}else for(n=0;n<p.length;n++)if(p[n].language==t){r=p[n].name;break}return this}};e.fn.articulate=function(e){return w[e]?w[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void jQuery.error("Method "+e+" does not exist on jQuery.articulate"):w.speak.apply(this,arguments)}}(jQuery);;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

//Theme JavaScript
    $(document.body).css('padding-top', $('#mainNav').height() + 1);
    $(window).resize(function(){
        $(document.body).css('padding-top', $('#mainNav').height() + 1);
    });

    $('#map .title').html('');
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="stateTip"]').each( function(){
        $(this).toggle();
    });
    $('[data-toggle="statetooltip"]').hover(function() {
        var id = $(this).attr('id');
        $('.'+id).toggle();
    });
    
    var seen = {};
    $('.word-link').each(function() {
        var txt = $(this).text();
        var lcTxt = $(this).text().toLowerCase();
        if (seen[lcTxt]) {
            $(this).replaceWith(txt);
        }else{
            seen[lcTxt] = true;
            $(this).tooltip();
        }
    });

    if($().articulate('enabled')) {
        $('.audio-btn').bind('click', function(event) {
            var speaking = $().articulate('isSpeaking');
            var paused = $().articulate('isPaused');
            if (speaking) {
                if (paused) {
                    $(this).text('Pause');
                    $().articulate('resume');
                } else {
                    $(this).text('Read');
                    $().articulate('pause');
                }
            } else {
                $(this).text('Pause');
                $('.audio-container').articulate('setVoice','name','Samantha').articulate('rate', .8).articulate('speak');
            }

            event.preventDefault();
        });

        $('.audio-btn-stop').bind('click', function(event) {
            $('.audio-btn').text('Read');
            $().articulate('stop');
            event.preventDefault();
        });
    }else{
        $('.audio-controls').hide();
    }

    
    if(($('.messages.status').length > 0 || $('.messages.error').length > 0) && $('#messgModal').length > 0){
        var $message = $('.messages.status').length > 0 ? $('.messages.status').html() : $('.messages.error').html();
        $('#messgModal .modal-body').html($message);
        $('.messages.status').hide();
        $('.messages.error').hide();
        $('#messgModal').modal('show')
        .on('hidden.bs.modal', function () {
            $("#messgModal").off();
        });
    }

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $link = $(this).attr('href');
        var anchor = $link.substring($link.indexOf("#"));
        $('html, body').stop().animate({
            scrollTop: ($(anchor).offset().top - $('nav').height())
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /**  Open links with rel=external in a new window
     */
    $('body').on( "click",'a[rel*=external]',  function() {
        window.open(this.href);
        return false;
    });
    $('body').on( "click",'a[rel*=externalND]',  function() {
        window.open(this.href);
        return false;
    });

    $('a[rel*=externalND]').parent().append('<p class="small" style="margin-top: 6px;">Clicking this button will leave the Kid Zone! for a trusted site.</p>');

    //don't collapse audience fieldset in repos
    $('.form-item-field-audience-tid fieldset').removeClass('collapsed');

    //add status icon in state pages
    if($(".node-type-state-legislation").length > 0) {
        $(".has-requirement-status").each( function(){
            $(this).addClass($(this).text()+'-icon');
        });
    }

    if($(".contest-view").length > 0) {
        $('.rate-button').each( function(){
            $(this).text('Vote!');
        });
    }
    
    if($(".go-link").length > 0) {
        $( ".go-link a:contains('Download')" ).addClass( "btn btn-action btn-download" );
        $( ".go-link a:contains('Play')" ).addClass( "btn btn-action btn-go" );
        $( ".go-link a:contains('Read')" ).addClass( "btn btn-action btn-go" );
    }


    function paintStates(id, col) {
        var color = col || 'default';
        var States = {
            dyslexia :{
                Alabama : {
                    abr: "AL"
                },
                Arizona : {
                    abr : "AZ"
                },
                Arkansas : {
                    abr : "AR"
                },
                California : {
                    abr : "CA"
                },
                Colorado : {
                    abr : "CO"
                },
                Connecticut : {
                    abr : "CT"
                },
                Delaware : {
                    abr : "DE"
                },
                Florida : {
                    abr : "FL"
                },
                Georgia : {
                    abr : "GA"
                },
                Illinois : {
                    abr : "IL"
                },
                Indiana : {
                    abr : "IN"
                },
                Iowa : {
                    abr : "IA"
                },
                Kentucky : {
                    abr : "KY"
                },
                Louisiana : {
                    abr : "LA"
                },
                Maine : {
                    abr : "ME"
                },
                Maryland : {
                    abr : "MD"
                },
                Massachusetts : {
                    abr : "MA"
                },
                Minnesota : {
                    abr : "MN"
                },
                Mississippi : {
                    abr : "MS"
                },
                Missouri : {
                    abr : "MO"
                },
                Nebraska : {
                    abr : "NE"
                },
                Nevada : {
                    abr : "NV"
                },
                NewHampshire : {
                    abr : "NH"
                },
                NewJersey : {
                    abr : "NJ"
                },
                NewMexico : {
                    abr : "NM"
                },
                NewYork : {
                    abr : "NY"
                },
                NorthCarolina : {
                    abr : "NC"
                },
                Ohio : {
                    abr : "OH"
                },
                Oklahoma : {
                    abr : "OK"
                },
                Oregon : {
                    abr : "OR"
                },
                Pennsylvania : {
                    abr : "PA"
                },
                RhodeIsland : {
                    abr : "RI"
                },
                SouthCarolina : {
                    abr : "SC"
                },
               Tennessee : {
                    abr : "TN"
                },
               Texas : {
                    abr : "TX"
                },
               Utah : {
                    abr : "UT"
                },
                Vermont : {
                    abr : "VT"
                },
               Virginia : {
                    abr : "VA"
                },
               Washington : {
                    abr : "WA"
                },
               WestVirginia : {
                    abr : "WV"
                },
               Wyoming : {
                    abr : "WY"
                }
            },
            screening :{
                Alabama : {
                    abr: "AL"
                },
                Arizona : {
                    abr : "AZ"
                },
                Arkansas : {
                    abr : "AR"
                },
                Florida : {
                    abr : "FL"
                },
                Illinois : {
                    abr : "IL"
                },
                Louisiana : {
                    abr : "LA"
                },
                Maine : {
                    abr : "ME"
                },
                Minnesota : {
                    abr : "MN"
                },
                Mississippi : {
                    abr : "MS"
                },
                Missouri : {
                    abr : "MO"
                },
                Nevada : {
                    abr : "NV"
                },
                NewHampshire : {
                    abr : "NH"
                },
                NewJersey : {
                    abr : "NJ"
                },
                Oregon : {
                    abr : "OR"
                },
                RhodeIsland : {
                    abr : "RI"
                },
               Tennessee : {
                    abr : "TN"
                },
               Texas : {
                    abr : "TX"
                },
               Virginia : {
                    abr : "VA"
                },
                 Washington : {
                    abr : "WA"
                },
               WestVirginia : {
                    abr : "WV"
                },
               Wyoming : {
                    abr : "WY"
                }
            },
            preservice :{
                Arkansas : {
                    abr : "AR"
                },
                Connecticut : {
                    abr : "CT"
                },
                Florida : {
                    abr : "FL"
                },
                Illinois : {
                    abr : "IL"
                },
                Indiana : {
                    abr : "IN"
                },
                Iowa : {
                    abr : "IA"
                },
                NewHampshire : {
                    abr : "NH"
                },
                Oregon : {
                    abr : "OR"
                },
                Texas : {
                    abr : "TX"
                },
                Virginia : {
                    abr : "VA"
                }
            },
            inservice :{
               Alabama : {
                    abr: "AL"
                },
                Arkansas : {
                    abr : "AR"
                },
                Arizona : {
                    abr : "AZ"
                },
                Connecticut : {
                    abr : "CT"
                },
                Florida : {
                    abr : "FL"
                },
                Illinois : {
                    abr : "IL"
                },
                Louisiana : {
                    abr : "LA"
                },
                Maine : {
                    abr : "ME"
                },
                Minnesota : {
                    abr : "MN"
                },
                Missouri : {
                    abr : "MO"
                },
                Nevada : {
                    abr : "NV"
                },
                NewHampshire : {
                    abr : "NH"
                },
                NewJersey : {
                    abr : "NJ"
                },
                NewMexico : {
                    abr : "NM"
                },
                NorthCarolina : {
                    abr : "NC"
                },
                Oregon : {
                    abr : "OR"
                },
                SouthCarolina : {
                    abr : "SC"
                },
               Texas : {
                    abr : "TX"
                },
               Virginia : {
                    abr : "VA"
                }
            },
            intervention :{
                Alabama : {
                    abr: "AL"
                },
                Arkansas : {
                    abr : "AR"
                },
                Arizona : {
                    abr : "AZ"
                },
                Florida : {
                    abr : "FL"
                },
                Louisiana : {
                    abr : "LA"
                },
                Minnesota : {
                    abr : "MN"
                },
                Nevada : {
                    abr : "NV"
                },
                NewHampshire : {
                    abr : "NH"
                },
                NewJersey : {
                    abr : "NJ"
                },
                NewMexico : {
                    abr : "NM"
                },
                RhodeIsland : {
                    abr : "RI"
                },
               Tennessee : {
                    abr : "TN"
                },
               Texas : {
                    abr : "TX"
                },
                 Washington : {
                    abr : "WA"
                },
               Virginia : {
                    abr : "VA"
                }
            },
            above :{
                Arkansas : {
                    abr : "AR"
                },
                Florida : {
                    abr : "FL"
                },
                NewHampshire : {
                    abr : "NH"
                },
                Texas : {
                    abr : "TX"
                },
                Virginia : {
                    abr : "VA"
                }
            },
            simr :{
                Arizona : {
                    abr : "AZ"
                },
                Arkansas : {
                    abr : "AR"
                },
                California : {
                    abr : "CA"
                },
                Colorado : {
                    abr : "CO"
                },
                Connecticut : {
                    abr : "CT"
                },
                Delaware : {
                    abr : "DE"
                },
                Hawaii : {
                    abr : "HI"
                },
                Idaho : {
                    abr : "ID"
                },
                Illinois : {
                    abr : "IL"
                },
                Indiana : {
                    abr : "IN"
                },
                Iowa : {
                    abr : "IA"
                },
                Kansas : {
                    abr : "KS"
                },
                Louisiana : {
                    abr : "LA"
                },
                Michigan : {
                    abr : "MI"
                },
                Mississippi : {
                    abr : "MS"
                },
                Missouri : {
                    abr : "MO"
                },
                Nebraska : {
                    abr : "NE"
                },
                NewMexico : {
                    abr : "NM"
                },
                NewYork : {
                    abr : "NY"
                },
                Nevada : {
                    abr : "NV"
                },
                Oregon : {
                    abr : "OR"
                },
                Ohio : {
                    abr : "OH"
                },
                Oklahoma : {
                    abr : "OK"
                },
                SouthCarolina : {
                    abr : "SC"
                },
                SouthDakota : {
                    abr : "SD"
                },
                Tennessee : {
                    abr : "TN"
                },
                Texas : {
                    abr : "TX"
                },
                Washington : {
                    abr : "WA"
                },
                Wisconsin : {
                    abr : "WI"
                },
                Wyoming : {
                    abr : "WY"
                }
            },
            all :{
                Alabama : {
                    abr: "AL"
                },
                Alaska : {
                    abr : "AK"
                },
                Arizona : {
                    abr : "AZ"
                },
                Arkansas : {
                    abr : "AR"
                },
                California : {
                    abr : "CA"
                },
                Colorado : {
                    abr : "CO"
                },
                Connecticut : {
                    abr : "CT"
                },
                Delaware : {
                    abr : "DE"
                },
                DistrictOfColumbia : {
                    abr : "DC"
                },
                Florida : {
                    abr : "FL"
                },
                Georgia : {
                    abr : "GA"
                },
                Hawaii : {
                    abr : "HI"
                },
                Idaho : {
                    abr : "ID"
                },
                Illinois : {
                    abr : "IL"
                },
                Indiana : {
                    abr : "IN"
                },
                Iowa : {
                    abr : "IA"
                },
                Kansas : {
                    abr : "KS"
                },
                Kentucky : {
                    abr : "KY"
                },
                Louisiana : {
                    abr : "LA"
                },
                Maine : {
                    abr : "ME"
                },
                Maryland : {
                    abr : "MD"
                },
                Massachusetts : {
                    abr : "MA"
                },
                Michigan : {
                    abr : "MI"
                },
                Minnesota : {
                    abr : "MN"
                },
                Mississippi : {
                    abr : "MS"
                },
                Missouri : {
                    abr : "MO"
                },
                Nebraska : {
                    abr : "NE"
                },
                Nevada : {
                    abr : "NV"
                },
                NewHampshire : {
                    abr : "NH"
                },
                NewJersey : {
                    abr : "NJ"
                },
                NewMexico : {
                    abr : "NM"
                },
                NewYork : {
                    abr : "NY"
                },
                NorthCarolina : {
                    abr : "NC"
                },
                NorthDakota : {
                    abr : "ND"
                },
                Ohio : {
                    abr : "OH"
                },
                Oklahoma : {
                    abr : "OK"
                },
                Oregon : {
                    abr : "OR"
                },
                Pennsylvania : {
                    abr : "PA"
                },
                PuertoRico : {
                    abr : "PR"
                },
                RhodeIsland : {
                    abr : "RI"
                },
                SouthCarolina : {
                    abr : "SC"
                },
                SouthDakota : {
                    abr : "SD"
                },
               Tennessee : {
                    abr : "TN"
                },
               Texas : {
                    abr : "TX"
                },
               Utah : {
                    abr : "UT"
                },
               Vermont : {
                    abr : "VT"
                },
               Virginia : {
                    abr : "VA"
                },
               Washington : {
                    abr : "WA"
                },
               WestVirginia : {
                    abr : "WV"
                },
               Wisconsin : {
                    abr : "WI"
                },
               Wyoming : {
                    abr : "WY"
                }
            }
        };

        var theStates = States[id];
        Object.keys(theStates).forEach( function (state) {
            var st =  theStates[state].abr;
            if(id === "simr") {
                $('#'+st.toLowerCase()).find("g").attr('class', color);
            }else{
                 $('#'+st.toLowerCase()).attr('class', color);
            }
        });
    }


    if ($('#dyslexia').is(':checked')) {
        $('.isRequirements').removeAttr('disabled');
        paintStates('dyslexia', 'blue');
    }

    $('#stateMapForm').on('click', '#dyslexia', function(){
        if ($(this).is(':not(:checked)')) {
            $('input[type="radio"].decorated:checked').removeAttr("checked");
            $(".isRequirements legend i").remove();
            $('.isRequirements').attr('disabled', 'disabled');
            paintStates('all');
        }
        if ($(this).is(':checked')) {
            $('.isRequirements').removeAttr('disabled');
            paintStates('dyslexia', 'blue');
        }
    });

    $('#stateMapForm').on('click', '#simr', function(){
        if ($(this).is(':not(:checked)')) {
            paintStates('simr');
        }
        if ($(this).is(':checked')) {
            paintStates('simr', 'stripe');
        }
    });

    $('#stateMapForm').on('click', 'input[type="radio"].decorated', function(){
        var alreadyAdded = ($('.clearRequirements').length > 0);
        if(!alreadyAdded) {
            $(".isRequirements legend").append(" <i class='fa fa-times clearRequirements' title='Clear'></i>");
        }
        var id = $(this).attr('id');
        var color = $(this).closest('label').find('.decorated-target').attr('id');
        paintStates('dyslexia', 'blue');
        paintStates(id, color);
        if ($('#simr').is(':checked')) {
            paintStates('simr', 'stripe');
        }
    });

    $('#stateMapForm').on('click', '.clearRequirements', function(){
        $('input[type="radio"].decorated:checked').removeAttr("checked");
        $(".isRequirements legend i").remove();
        paintStates('dyslexia', 'blue');
        if ($('#simr').is(':checked')) {
            paintStates('simr', 'stripe');
        }

    });

    if($('.isGData .gisbn').length > 0) {

        var gisbn = $('.gisbn').text();
        $('.gisbn').hide();
        $('.isGData .label-inline').hide();
        if( gisbn.length > 0) {
            $.ajax({
              dataType: 'json',
              url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + gisbn,
              success: handleGoogleResponse
            });

            $('.isGData').prepend('<p><a href="" class="bookpreview" rel="external"><img src="/sites/improvingliteracy1.uoregon.edu/themes/ncil/images/gbs_preview_button.gif" alt="Google Preview"  /></a></p>');
            $('.isGData').prepend('<p><span class="book-author" /></span></p>');
        }
    }

    if($('.isBookData .wisbn').length > 0 || $('.isBookData .oclc').length > 0) {

        var wisbn = $('.wisbn').text();
        var oclc = $('.oclc').text();
        $('.isbn').hide();
        $('.isBookData .label-inline').hide();
        if(wisbn.length > 0) {
            $('.isBookData').append('<p><a rel="external" href="http://www.worldcat.org/isbn/'+ wisbn+'">Find Book at Your Library</a></p>');
        }else if(oclc.length > 0){
            $('.isBookData').append('<p><a rel="external" href="http://www.worldcat.org/oclc/'+ oclc+'">Find Book at Your Library</a></p>');
        }
    }

    function handleGoogleResponse( response ) {
        $.each( response.items, function( i, item ) {
            var author   = item.volumeInfo.authors[0];
            var preview   = item.volumeInfo.previewLink;

            if(author.length > 0) {
                author = 'Author: ' + author;
                $('.book-author').text( author );
            }
            if(preview.length > 0){
                $('.bookpreview').attr('href', preview);
            }else{
               $('.bookpreview').hide(); 
            }
        });
    };

    if($('#animateMe').length > 0) {
        var randomInt = function (min, max) {
          return Math.floor(Math.random() * ((max - min) + 1)) + min;
        };

        var maxX = window.innerWidth;
        var maxY = window.innerHeight;

        var randomColor = function () {
          var h = randomInt(0, 360);
          var s = randomInt(42, 98);
          var l = randomInt(38, 94);
          return "hsl(" + h + "," + s + "%," + l + "%)";
        };


        var svgNS = "http://www.w3.org/2000/svg";
        var create = function (el) {
          return document.createElementNS(svgNS, el);
        };

        var svg = create("svg");
        svg.setAttribute("version", 1.1);
        svg.setAttribute("xmlns", svgNS);


        var reactiveCircles = function() {
          svg.addEventListener("mouseover", function(e) {
            var el = e.target;
            if (el === svg) return;
            var map = new Map();
            map.set("el", [el]);
            map.set("cx", [el.getAttribute("cx"), randomInt(0, maxX)]);
            map.set("cy", [el.getAttribute("cy"), randomInt(0, maxY)]);
            map.set("duration", 3000);
            map.set("easing", "easeOutElastic");
            animate(map);
          });
        };


        var params = [];
        var i = 250;
        while (i--) {
          var circle = create("circle");
          circle.setAttribute("fill", randomColor());
          svg.appendChild(circle);

          var map = new Map();
          map.set("el", [circle]);
          map.set("cx", [maxX/2, randomInt(0, maxX)]);
          map.set("cy", [maxY/2, randomInt(0, maxY)]);
          map.set("r", [0, randomInt(4, 20)]);
          map.set("delay", i * 2);
          map.set("duration", 5000);
          map.set("easing", "easeOutElastic");
          if (i < 1) map.set("complete", reactiveCircles);
          params.push(map);
        }

        document.getElementById('animateMe').appendChild(svg);
        params.forEach(animate);

        $('.reloadAnimation').bind('click', function(event) {
            params.forEach(animate);
            event.preventDefault();
        });
    }

    if ( typeof (ga) !== "undefined" ) {
        //track clicks on partner links
        $(".partners a").click(function(){
            ga('send', 'event', 'Partner Links', 'Clicked', $(this).attr('href'));
        });

        //track clicks on other external resources links
        $(".isResourceLink").click(function(){
            ga('send', 'event', 'Resource Repository Links', 'Clicked', $(this).attr('href'));
        });

         //track clicks on other external resources links
        $(".isEventLink").click(function(){
            ga('send', 'event', 'Event Links', 'Clicked', $(this).attr('href'));
        });

        //track clicks on other external resources links
        $(".isFeaturedResource a").click(function(){
            ga('send', 'event', 'Featured Resources Links', 'Clicked', $(this).attr('href'));
        });

        //track clicks on action links 
        $(".action a").click(function(){
            ga('send', 'event', 'Action Links', 'Clicked', $(this).attr('href'));
        });

        //track clicks on social media links
        $(".social").click(function(){
            ga('send', 'event', 'Social Media Links', 'Clicked', $(this).attr('href'));
        });
    }

  }
};

})(jQuery, Drupal, this, this.document);;
