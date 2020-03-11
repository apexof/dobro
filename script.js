"use strict";var lazyLoadInstance=new LazyLoad({elements_selector:".lazy"});
"use strict";$("#burger-button").click(function(){$("#burger-menu").slideDown("fast"),document.body.classList.add("no-scroll"),$("#burger-button").hide(),$("#close-burger-button").show()}),$("#close-burger-button").click(function(){$("#burger-menu").slideUp("fast"),document.body.classList.remove("no-scroll"),$("#burger-button").show(),$("#close-burger-button").hide()});
"use strict";$(".catalog-filter__btn").click(function(){$(".catalog-filter-modal").toggle()});
"use strict";$("#main-menu-button").click(function(){$("#main-menu-list").slideToggle("fast")});
"use strict";$(document).ready(function(){$(".select2").select2({minimumResultsForSearch:-1,width:"100%"})});
"use strict";$("body").on("scroll",function(){150<document.body.scrollTop?$("#sticky-header").show():$("#sticky-header").hide()});
"use strict";$(".search-form__toggle").click(function(){$(".search-form__input").toggle()});
"use strict";$("body").on("scroll",function(){120<document.body.scrollTop&&($(".header").addClass("sticky-header_desctop"),$(".cart-info").addClass("cart-info_sticky")),document.body.scrollTop<80&&($(".header").removeClass("sticky-header_desctop"),$(".cart-info").removeClass("cart-info_sticky"))});