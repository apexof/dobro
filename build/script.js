"use strict";var lazyLoadInstance=new LazyLoad({elements_selector:".lazy"});
"use strict";$("#burger-button").click(function(){$("#burger-menu").slideDown("fast"),document.body.classList.add("no-scroll"),$("#burger-button").hide(),$("#close-burger-button").show()}),$("#close-burger-button").click(function(){$("#burger-menu").slideUp("fast"),document.body.classList.remove("no-scroll"),$("#burger-button").show(),$("#close-burger-button").hide()});
"use strict";$("#main-menu-button").click(function(){$("#main-menu-list").slideToggle("fast")});
"use strict";$("select").customSelect();
"use strict";$("body").on("scroll",function(){150<document.body.scrollTop?$("#sticky-header").slideDown("fast"):$("#sticky-header").hide()});
"use strict";$(".search-form__toggle").click(function(){$(".search-form__input").toggle()});