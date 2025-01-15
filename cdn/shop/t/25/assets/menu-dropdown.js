class DropdownMenu extends HTMLElement{constructor(){super(),this.classes={hover:"is-hover",active:"is-active",animate:"show-from-bottom"},this.selectors={header:".shopify-section-header",background:".header-background",topMenuItem:".header__menu-item--top",menus:"dropdown-menu, mega-menu",wrapper:".list-menu",childAnimate:".list-menu-dropdown > .list-menu"},this.timeout,this.addEventListener("focusin",this.handleMouseover.bind(this)),this.addEventListener("mouseenter",this.handleMouseover.bind(this))}handleMouseover(){this.classList.contains(this.classes.active)||(this.bindEvent(),this.removeClasses(),this.addClasses(),this.resetBackground(),this.animateMenu())}handleMouseleave(){this.header&&(this.reset(),this.resetBackground(),this.header.classList.remove(this.classes.hover),this.wrapper.removeEventListener("mouseleave",this.onHeaderMouseLeaveEvent))}bindEvent(){this.onHeaderMouseLeaveEvent=this.onHeaderMouseLeaveEvent||this.handleMouseleave.bind(this),this.header=this.header||document.querySelector(this.selectors.header),this.wrapper=this.closest(this.selectors.wrapper),this.wrapper.addEventListener("mouseleave",this.onHeaderMouseLeaveEvent)}addClasses(){const isTopLevel=this.querySelector(this.selectors.topMenuItem);let delay=0;isTopLevel&&!this.isHover()&&(delay=150,(this.closest(".header--top-center")||this.closest(".header--top-left"))&&(delay=200)),this.timeout=setTimeout(()=>{this.isHover()&&this.classList.add(this.classes.active)},delay),this.header.classList.add(this.classes.hover)}removeClasses(){this.header.querySelectorAll(this.selectors.menus).forEach(menu=>{let found=!1;menu.querySelectorAll("dropdown-menu").forEach(element=>{if(element===this){found=!0;return}}),found||menu.reset()})}isHover(){return this.header.classList.contains(this.classes.hover)}reset(){this.classList.remove(this.classes.active);const childAnimate=this.querySelector(this.selectors.childAnimate);childAnimate&&childAnimate.classList.remove(this.classes.animate),clearTimeout(this.timeout)}resetBackground(){this.header.querySelector(this.selectors.background).classList.remove(this.classes.active)}animateMenu(){const childAnimate=this.querySelector(this.selectors.childAnimate);childAnimate&&setTimeout(()=>{childAnimate.classList.add(this.classes.animate)},150)}close(){this.handleMouseleave()}}customElements.define("dropdown-menu",DropdownMenu);class MegaMenu extends HTMLElement{constructor(){super(),this.classes={hover:"is-hover",active:"is-active",animate:"show-from-bottom"},this.selectors={header:".shopify-section-header",background:".header-background",dropdown:".list-menu-dropdown",menus:"dropdown-menu, mega-menu",wrapper:".list-menu",childAnimate:".mega-menu__item, .mega-menu__promo"},this.timeout=[],this.addEventListener("focusin",this.handleMouseover.bind(this)),this.addEventListener("mouseenter",this.handleMouseover.bind(this))}handleMouseover(){this.classList.contains(this.classes.active)||(this.bindEvent(),this.removeClasses(),this.addClasses(),this.showSublist())}handleMouseleave(){this.header&&(this.reset(),this.resetBackground(),this.header.classList.remove(this.classes.hover),this.wrapper.removeEventListener("mouseleave",this.onHeaderMouseLeaveEvent))}bindEvent(){this.onHeaderMouseLeaveEvent=this.onHeaderMouseLeaveEvent||this.handleMouseleave.bind(this),this.header=this.header||document.querySelector(this.selectors.header),this.wrapper=this.closest(this.selectors.wrapper),this.wrapper.addEventListener("mouseleave",this.onHeaderMouseLeaveEvent)}showSublist(){const dropdown=this.querySelector(this.selectors.dropdown),background=this.header.querySelector(this.selectors.background);background.style.setProperty("--height",this.header.clientHeight+dropdown.clientHeight+"px"),background.classList.add(this.classes.active)}addClasses(){this.classList.add(this.classes.active);const childAnimate=this.querySelectorAll(this.selectors.childAnimate),delay=childAnimate.length>5?75:150;childAnimate.forEach((element,index)=>{const timeout=setTimeout(()=>{element.classList.add(this.classes.animate)},delay*index+100);this.timeout.push(timeout)}),this.header.classList.add(this.classes.hover)}removeClasses(){this.header.querySelectorAll(this.selectors.menus).forEach(menu=>{menu.reset()})}reset(){this.classList.remove(this.classes.active),this.querySelectorAll(this.selectors.childAnimate).forEach(element=>{element.classList.remove(this.classes.animate)}),this.timeout.forEach(timeout=>{clearTimeout(timeout)})}resetBackground(){this.header.querySelector(this.selectors.background).classList.remove(this.classes.active)}close(){this.handleMouseleave()}}customElements.define("mega-menu",MegaMenu);
//# sourceMappingURL=/cdn/shop/t/25/assets/menu-dropdown.js.map?v=84406870153186263601700063543
