var Global;(()=>{const e=document.querySelectorAll(".review"),t=document.querySelectorAll(".review-bg"),l=document.querySelectorAll(".review2"),c=document.querySelectorAll(".review2-bg"),n=document.querySelector(".header"),i=document.querySelector(".catalog"),o=document.querySelector(".catalog-burger-btn"),s=document.querySelector(".catalog-btn"),a=document.querySelectorAll(".menu-btn"),d=document.querySelectorAll(".to-catalog-btn");if(e.forEach(((e,l)=>{const c=e.querySelector(".review__full-btn"),n=t[l];c.addEventListener("click",(()=>{e.classList.toggle("_full")}));const i=()=>{let t=e.getBoundingClientRect().left-n.parentElement.getBoundingClientRect().left,l=e.getBoundingClientRect().top-n.parentElement.getBoundingClientRect().top,c=e.getBoundingClientRect().width,i=e.getBoundingClientRect().height;n.style.left=t+c/2+"px",n.style.top=l+i/2+"px"};i(),window.addEventListener("resize",i)})),l.forEach(((e,t)=>{const l=e.querySelector(".review2__full-btn"),n=c[t];l.addEventListener("click",(()=>{e.classList.toggle("_full")}));const i=()=>{let t=e.getBoundingClientRect().left-n.parentElement.getBoundingClientRect().left,l=e.getBoundingClientRect().top-n.parentElement.getBoundingClientRect().top,c=e.getBoundingClientRect().width,i=e.getBoundingClientRect().height;n.style.left=t+c/2+"px",n.style.top=l+i/2+"px"};i(),window.addEventListener("resize",i)})),n){const e=()=>{const e=n.getBoundingClientRect().height;document.body.style.paddingTop=e+16+"px"};e(),window.addEventListener("resize",e)}if(i&&n){const e=()=>{const e=n.getBoundingClientRect().height-4;i.style.top=e+"px"};e(),window.addEventListener("resize",e);const t=i.querySelectorAll(".catalog__category-item");t.forEach(((e,l)=>{e.querySelector(".catalog__category-btn").addEventListener("click",(()=>{t.forEach(((e,t)=>{l!==t&&e.classList.remove("_active")})),e.classList.toggle("_active"),window.innerWidth>=990&&(i.scrollTop=0)}))}))}if(s||o){let e=null;a.forEach(((t,l)=>{t.classList.contains("_active")&&(e=l)})),s.addEventListener("click",(()=>{i.scrollTop=0,i.classList.toggle("_active"),s.classList.toggle("_active"),document.body.classList.toggle("no-scroll"),i.classList.contains("_active")?a[e].classList.remove("_active"):a[e].classList.add("_active")})),o.addEventListener("click",(()=>{i.classList.toggle("_active"),o.classList.toggle("_active"),document.body.classList.toggle("no-scroll")}))}d.forEach((e=>{i.scrollTop=0;let t=null;a.forEach(((e,l)=>{e.classList.contains("_active")&&(t=l)})),e.addEventListener("click",(()=>{i.classList.add("_active"),s.classList.add("_active"),o.classList.add("_active"),document.body.classList.add("no-scroll"),i.classList.contains("_active")?a[t].classList.remove("_active"):a[t].classList.add("_active")}))})),Global={}})();
//# sourceMappingURL=main.bundle.js.map