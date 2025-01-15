class MiniCart extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector("sticky-header"),this.drawer=document.querySelector("cart-drawer"),new IntersectionObserver(this.handleIntersection.bind(this)).observe(this)}handleIntersection(entries,observer){entries[0].isIntersecting&&(observer.unobserve(this),fetch(this.dataset.url).then(response=>response.text()).then(html=>{document.getElementById("mini-cart").innerHTML=this.getSectionInnerHTML(html,".shopify-section"),document.dispatchEvent(new CustomEvent("cartdrawer:opened"))}).catch(e=>{console.error(e)}))}open(){this.drawer.querySelector("details").hasAttribute("open")||this.drawer.openMenuDrawer()}renderContents(parsedState){this.productId=parsedState.id,this.getSectionsToRender().forEach(section=>{document.getElementById(section.id)&&(document.getElementById(section.id).innerHTML=this.getSectionInnerHTML(parsedState.sections[section.id],section.selector))}),this.open()}getSectionsToRender(){return[{id:"mini-cart",section:"mini-cart",selector:".shopify-section"},{id:"cart-icon-bubble",section:"cart-icon-bubble",selector:".shopify-section"},{id:"mobile-cart-icon-bubble",section:"mobile-cart-icon-bubble",selector:".shopify-section"}]}getSectionInnerHTML(html,selector=".shopify-section"){return new DOMParser().parseFromString(html,"text/html").querySelector(selector).innerHTML}}customElements.define("mini-cart",MiniCart);
//# sourceMappingURL=/cdn/shop/t/25/assets/cart-drawer.js.map?v=5420845715490320271700063543
