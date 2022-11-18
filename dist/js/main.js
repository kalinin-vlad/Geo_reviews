!function(){"use strict";let e;var t=(new Date).toLocaleDateString();function o(e){let o="";for(const s of n())e.some((e=>JSON.stringify(e.geometry._coordinates)===JSON.stringify(s.coords)))&&(o+=`\n      <div class="review">\n        <div class="review__item"><b class="review__item__author">${s.author}</b> ${s.place} ${t}</div>\n        <div class="review__item">${s.reviewText}</div>\n      </div>\n      `);return o}function n(){const e=localStorage.reviews;return JSON.parse(e||"[]")}function s(t){const o=[];for(const e of n()||[]){const n=new ymaps.Placemark(e.coords,{},{preset:"islands#greenIcon"});n.events.add("click",(e=>{e.stopPropagation(),a(t,e.get("coords"),[e.get("target")])})),o.push(n)}e.removeAll(),t.geoObjects.remove(e),e.add(o),t.geoObjects.add(e)}async function a(e,t,a){await e.balloon.open(t,{content:`<div class="reviews">${o(a)}</div>\n<form id="add-form" class="form">\n  <h3 class="form__title">Отзыв:</h3>\n  <div class="form__row">\n    <input type="text" placeholder="Укажите ваше имя" name="author" class="form__input">\n  </div>\n  <div class="form__row">\n    <input type="text" placeholder="Укажите место" name="place" class="form__input">\n  </div>\n  <div class="form__row">\n    <textarea placeholder="Оставить отзыв" name="review" class="form__input form__input--textarea"></textarea>\n  </div>\n  <button id="add-btn" class="btn">Добавить</button>\n</form>\n`}),document.querySelector("#add-form").addEventListener("submit",(function(o){o.preventDefault();const a={coords:t,author:this.elements.author.value,place:this.elements.place.value,reviewText:this.elements.review.value};localStorage.reviews=JSON.stringify([...n(),a]),s(e),e.balloon.close()}))}window.onload=void ymaps.ready((()=>{const t=new ymaps.Map("map",{center:[51.660779,39.200292],zoom:13,controls:["zoomControl"]});t.events.add("click",(async function(e){const o=e.get("coords");a(t,o,[])})),e=new ymaps.Clusterer({clusterDisableClickZoom:!0,preset:"islands#blueClusterIcons"}),e.options.set("hasBalloon",!1),s(t),e.events.add("click",(function(e){let o=e.get("target").getGeoObjects();a(t,e.get("coords"),o)}))}))}();