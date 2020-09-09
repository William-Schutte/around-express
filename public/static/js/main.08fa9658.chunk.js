(this["webpackJsonpproject-10-11-react"]=this["webpackJsonpproject-10-11-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(15),a(9)),l=a(1),s=a(6),u=a.n(s);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:u.a,alt:"Around the U.S. Logo"}))},d=r.a.createContext();var f=function(e){var t=r.a.useContext(d),a=e.card.owner._id===t._id,n="card__delete-button ".concat(a?"card__delete-button_visible":"card__delete-button_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),c="card__fav-button ".concat(o&&"card__fav-button_active");return r.a.createElement("li",{className:"card"},r.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{type:"button","aria-label":"Card Delete Button",className:n,onClick:function(){e.onCardDelete(e.card)}}),r.a.createElement("div",{className:"card__overlay"},r.a.createElement("h2",{className:"card__name"},e.card.name),r.a.createElement("div",{className:"card__like-column"},r.a.createElement("button",{type:"button","aria-label":"Card Favorite Button",className:c,onClick:function(){e.onCardLike(e.card)}}),r.a.createElement("p",{className:"card__like-count"},e.card.likes.length))))};var p=function(e){var t=r.a.useContext(d);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("button",{type:"button",className:"profile__pic-button",onClick:e.onEditAvatar}),r.a.createElement("div",{className:"profile__picture",style:{backgroundImage:"url(".concat(t.avatar,")")},alt:"My Profile Pic"}),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("p",{className:"profile__occupation"},t.about)),r.a.createElement("button",{type:"button","aria-label":"Edit Profile Button",className:"profile__edit-button btn-animate",onClick:e.onEditProfile}),r.a.createElement("button",{type:"button","aria-label":"Add Card Button",className:"profile__add-button btn-animate",onClick:e.onAddPlace})),r.a.createElement("section",{className:"cards"},r.a.createElement("ul",{className:"cards__container"},e.cards.map((function(t){return r.a.createElement(f,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,onClose:e.onClose})})))))};var h=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa92020 William Schutte. Around the U.S."))};var _=function(e){return r.a.createElement("form",{className:"form ".concat(e.name," ").concat(e.isOpen&&"popup-opened"),name:e.name,onSubmit:e.onSubmit},r.a.createElement("div",{className:"form__container"},r.a.createElement("h2",{className:"form__title"},e.title),e.children,r.a.createElement("button",{type:"submit",className:"form__save-button btn-animate"},e.btnText),r.a.createElement("button",{type:"button","aria-label":"Close Form Button",className:"form__exit-button btn-animate",onClick:e.onClose})))};var b=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"picture ".concat(t&&"popup-opened")},r.a.createElement("div",{className:"picture__column"},r.a.createElement("img",{className:"picture__img",src:t?t.link:"",alt:t?t.name:""}),r.a.createElement("h2",{className:"picture__title"},t&&t.name),r.a.createElement("button",{type:"button","aria-label":"Close Picture Button",className:"form__exit-button btn-animate",onClick:a})))},E=a(7),v=a(8),C=new(function(){function e(t){Object(E.a)(this,e),this.options=t}return Object(v.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.options.baseUrl,"/users/me"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"patchUserPic",value:function(e){var t=e.avatar;return fetch("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.options.baseUrl,"/cards"),{headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify({name:t,link:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return t?fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})):fetch("".concat(this.options.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:this.options.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"b3ddd9c8-cc64-4470-93b1-0840e92522c5","Content-Type":"application/json"}});var N=function(e){var t=r.a.useContext(d);r.a.useEffect((function(){c(t.name),m(t.about)}),[t]);var a=r.a.useState(t.name),n=Object(l.a)(a,2),o=n[0],c=n[1],i=r.a.useState(t.about),s=Object(l.a)(i,2),u=s[0],m=s[1];return r.a.createElement(_,{name:"form-edit",title:"Edit profile",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u}),e.onClose()}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-name",name:"primary",className:"form__name form__input",type:"text",value:o,onChange:function(e){c(e.target.value)},required:!0,minLength:"2",maxLength:"40",pattern:"[A-Za-z -]*"}),r.a.createElement("span",{id:"form-name-error",className:"form__error"})),r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-occupation",name:"secondary",className:"form__occupation form__input secondary",type:"text",value:u,onChange:function(e){m(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),r.a.createElement("span",{id:"form-occupation-error",className:"form__error"})))};var k=function(e){var t=r.a.useContext(d),a=r.a.useRef();return r.a.createElement(_,{name:"form-pic",title:"Change userpic",isOpen:e.isOpen,btnText:"Save",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a.current.value}),e.onClose(),a.current.value=null}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{ref:a,id:"form-name",name:"primary",className:"form__name form__input",type:"url",placeholder:t.avatar,required:!0}),r.a.createElement("span",{id:"form-name-error",className:"form__error"})))};var g=function(e){var t=r.a.useState(null),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState(null),i=Object(l.a)(c,2),s=i[0],u=i[1];return r.a.createElement(_,{name:"form-add",title:"New place",isOpen:e.isOpen,btnText:"Create",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:s}),e.onClose()}},r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-place",name:"primary",className:"form__place form__input",type:"text",placeholder:"Title",value:n,onChange:function(e){o(e.target.value)},required:!0,minLength:"1",maxLength:"30"}),r.a.createElement("span",{id:"form-place-error",className:"form__error"})),r.a.createElement("label",{className:"form__input-field"},r.a.createElement("input",{id:"form-url",name:"secondary",className:"form__url form__input",type:"url",placeholder:"Image link",value:s,onChange:function(e){u(e.target.value)},required:!0}),r.a.createElement("span",{id:"form-url-error",className:"form__error"})))};var y=function(){var e=r.a.useState({}),t=Object(l.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){C.getUserInfo().then((function(e){n(e)})).catch((function(e){console.log(e)}))}),[]);var o=r.a.useState(!1),c=Object(l.a)(o,2),s=c[0],u=c[1],f=r.a.useState(!1),E=Object(l.a)(f,2),v=E[0],y=E[1],j=r.a.useState(!1),O=Object(l.a)(j,2),P=O[0],S=O[1],U=r.a.useState(null),x=Object(l.a)(U,2),A=x[0],w=x[1];function L(){S(!1),u(!1),y(!1),w(null)}var T=r.a.useState([]),D=Object(l.a)(T,2),I=D[0],B=D[1];return r.a.useEffect((function(){C.getInitialCards().then((function(e){B(e)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(d.Provider,{value:a},r.a.createElement(m,null),r.a.createElement(p,{onEditProfile:function(){u(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){S(!0)},onCardClick:function(e){w(e)},onClose:L,cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));C.likeCard(e,t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));B(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){C.deleteCard(e._id).then((function(){var t=I.filter((function(t){return t._id!==e._id}));B(t)}))}}),r.a.createElement(h,null),r.a.createElement(N,{isOpen:s,onClose:L,onUpdateUser:function(e){C.patchUserInfo(e).then((function(e){n(e)})).catch((function(e){console.log(e)}))}}),r.a.createElement(k,{isOpen:P,onClose:L,onUpdateAvatar:function(e){C.patchUserPic(e).then((function(e){n(e)})).catch((function(e){console.log(e)}))}}),r.a.createElement(g,{isOpen:v,onClose:L,onAddPlace:function(e){C.addNewCard(e).then((function(e){var t=[].concat(Object(i.a)(I),[e]);B(t)}))}}),r.a.createElement(_,{name:"form-delete",title:"Are you sure?",isOpen:null,btnText:"Yes",onClose:L}),r.a.createElement(b,{card:A,onClose:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/header-logo.8f7611ae.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.08fa9658.chunk.js.map