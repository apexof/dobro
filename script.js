"use strict";var lazyLoadInstance=new LazyLoad({elements_selector:".lazy"});
"use strict";$("#burger-button").click(function(){$("#burger-menu").show(),document.body.classList.add("no-scroll"),$("#burger-button").hide(),$("#close-burger-button").show(),$(".header-sticky-mobile").addClass("header-sticky-mobile_fixed")}),$("#close-burger-button").click(function(){$("#burger-menu").hide(),document.body.classList.remove("no-scroll"),$("#burger-button").show(),$("#close-burger-button").hide(),document.body.scrollTop<80&&$(".header-sticky-mobile").removeClass("header-sticky-mobile_fixed")});
"use strict";var $input=$(".cart-counter__input input"),$buffer=$(".input-buffer"),$plus=$(".cart-counter__plus"),$minus=$(".cart-counter__minus");function checkBuffer(){$buffer.text($input.val()),$input.width(Math.ceil($buffer.width())+34)}$input.on("input",checkBuffer),$plus.on("click",function(){$input.val(+$input.val()+1),checkBuffer(),$input.focus()}),$minus.on("click",function(){0<+$input.val()&&($input.val(+$input.val()-1),checkBuffer(),$input.focus())});
"use strict";$("#hide-filter-btn").click(function(){$("#catalog-filter").toggle(),$(".hide-filter-btn__text_hide").toggle(),$(".hide-filter-btn__text_show").toggle()});
"use strict";var mql=window.matchMedia("all and (min-width: 992px)");$("body").on("scroll",function(){mql.matches?(120<document.body.scrollTop&&($(".header").addClass("sticky-header_desctop"),$(".cart-info").addClass("cart-info_sticky")),document.body.scrollTop<80&&($(".header").removeClass("sticky-header_desctop"),$(".cart-info").removeClass("cart-info_sticky"))):(120<document.body.scrollTop&&$(".header-sticky-mobile").addClass("header-sticky-mobile_fixed"),document.body.scrollTop<80&&$(".header-sticky-mobile").removeClass("header-sticky-mobile_fixed"))});
"use strict";$("#main-menu-button").click(function(){$("#main-menu-list").slideToggle("fast")});
"use strict";$(document).ready(function(){$(".select2").select2({minimumResultsForSearch:-1,width:"100%"})});
"use strict";$(".search-form__toggle").click(function(){$(".search-form__input").toggle()});