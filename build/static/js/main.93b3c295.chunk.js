(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(4),n=a.n(i),r=(a(25),"CHARACTERISTICS"),l="REVIEWS",o="CONTACTS",d=[{value:100,id:5},{value:80,id:4},{value:60,id:3},{value:40,id:2},{value:20,id:1}],j=["\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438","\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b","\u0423\u0441\u043b\u0443\u0433\u0438","\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"],m=["\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c","\u041a\u043b\u0438\u0435\u043d\u0442\u0430\u043c","\u0410\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e","\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433","\u041a\u0430\u043a \u043f\u0440\u043e\u0434\u0430\u0442\u044c \u0430\u0432\u0442\u043e","Trade-in","Test drive"],h=a.p+"static/media/logo.28d1aa68.svg",u=a(0);var b=function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("header",{className:"page-header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"page-header__content",children:[Object(u.jsx)("div",{className:"page-header__logo",children:Object(u.jsx)("img",{src:h,alt:"Auto-Moto"})}),Object(u.jsx)("nav",{className:"page-header__nav main-nav",children:Object(u.jsx)("ul",{className:"main-nav__list",children:j.map((function(e){return Object(u.jsx)("li",{className:"main-nav__item",children:Object(u.jsx)("a",{href:"#",className:"main-nav__link",children:e})},e)}))})}),Object(u.jsx)("button",{type:"button",className:"page-header__toggle",children:"\u041c\u0435\u043d\u044e"})]})})})})};var p=function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("footer",{className:"page-footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"page-footer__content",children:Object(u.jsx)("nav",{className:"page-footer__nav",children:Object(u.jsx)("ul",{className:"page-footer__list",children:m.map((function(e){return Object(u.jsx)("li",{className:"page-footer__item",children:Object(u.jsx)("a",{href:"#",className:"page-footer__link",children:e})},e)}))})})})})})})},_=a(7),v=a(8),O=a(5),x=a(11),g=a(10),f=a.p+"static/media/close.17d2d705.svg",N=a(3),y=function(e,t){return Object.assign({},e,t)},w={DATA:"DATA",UI:"UI"},C=w.DATA,k=function(e){return e[C].car},S=w.UI,R=function(e){return e[S].currentSlide},E=function(e){return e[S].currentTab},T=function(e){return e[S].isModalOpened},A=function(e){return e[S].isNameValid},F=function(e){return e[S].isCommentValid},I="INCREASE_SLIDE",M="REDUCE_SLIDE",D="SET_CURRENT_TAB",L="CHANGE_MODAL_STATUS",P="CHANGE_NAME_VALIDITY",V="CHANGE_COMMENT_VALIDITY",B={currentSlide:0,currentTab:r,isModalOpened:!1,isNameValid:!0,isCommentValid:!0},H=function(e){return{type:I,payload:e+=1}},U=function(e){return{type:M,payload:e-=1}},K=function(e){return{type:D,payload:e}},G=function(e){return{type:L,payload:e}},W=function(e){return{type:P,payload:e}},X=function(e){return{type:V,payload:e}},z="LOAD_car",J="ADD_NEW_REVIEW",Y={car:[]},Z=function(e){return{type:z,payload:e}},q=function(e){return{type:J,payload:e}},Q=a(2),$=a.n(Q),ee=$.a.arrayOf($.a.shape({name:$.a.string,value:$.a.string})),te=$.a.arrayOf($.a.shape({id:$.a.number,author:$.a.string,advantages:$.a.string,disadvantages:$.a.string,comment:$.a.string,rating:$.a.string,date:$.a.date})),ae=($.a.shape({id:$.a.number,name:$.a.string,price:$.a.shape({prevPrice:$.a.string,currentPrice:$.a.string,creditPrice:$.a.string}),shortCharacteristics:$.a.shape({fuel:$.a.string,transmission:$.a.string,power:$.a.string,engine:$.a.string}),characteristics:ee,photos:$.a.arrayOf($.a.string),reviews:te}),function(e){Object(x.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(_.a)(this,a),(s=t.call(this,e)).nameRef=c.a.createRef(),s.ratingRef=c.a.createRef(),s.advantagesRef=c.a.createRef(),s.disadvantagesRef=c.a.createRef(),s.commentRef=c.a.createRef(),s.rating="0",s.myStorage=window.localStorage,s._closeButtonClickHandler=s._closeButtonClickHandler.bind(Object(O.a)(s)),s._overlayClickHandler=s._overlayClickHandler.bind(Object(O.a)(s)),s._isEscKeyPressed=s._isEscKeyPressed.bind(Object(O.a)(s)),s._onModalFormSubmit=s._onModalFormSubmit.bind(Object(O.a)(s)),s._isFormValid=s._isFormValid.bind(Object(O.a)(s)),s}return Object(v.a)(a,[{key:"_closeButtonClickHandler",value:function(){this.props.popupClose(!1)}},{key:"_overlayClickHandler",value:function(e){e.target.matches(".modal__overlay")&&this.props.popupClose(!1)}},{key:"_isEscKeyPressed",value:function(e){27===e.keyCode&&this.props.popupClose(!1)}},{key:"_isFormValid",value:function(e,t){return e?(this.props.validateName(!0),t?(this.props.validateComment(!0),this.props.validateName(!0),this.props.validateComment(!0),!0):(this.props.validateComment(!1),!1)):(this.props.validateName(!1),!1)}},{key:"_onModalFormSubmit",value:function(e){e.preventDefault();var t=this.nameRef.current.value,a=this.advantagesRef.current.value,s=this.rating,c=this.disadvantagesRef.current.value,i=this.commentRef.current.value;if(this._isFormValid(t,i)){this.myStorage.setItem("author",t),this.myStorage.setItem("advantages",a),this.myStorage.setItem("disadvantages",c),this.myStorage.setItem("comment",i);var n=this.props.car.reviews.slice(0,this.props.car.reviews.lenght).concat({id:this.props.car.reviews.length+1,author:t,advantages:a,disadvantages:c,date:new Date,rating:s,comment:i});this.props.car.reviews=n;var r=y(this.props.car,{});this.props.addReview(r),this.props.popupClose(!1)}}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this._isEscKeyPressed);var e=this.nameRef.current,t=this.advantagesRef.current,a=this.disadvantagesRef.current,s=this.commentRef.current;e.focus(),this.myStorage.author&&(e.value=this.myStorage.author),this.myStorage.advantages&&(t.value=this.myStorage.advantages),this.myStorage.disadvantages&&(a.value=this.myStorage.disadvantages),this.myStorage.comment&&(s.value=this.myStorage.comment)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._isEscKeyPressed)}},{key:"render",value:function(){var e=this;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("section",{className:"modal",children:Object(u.jsx)("div",{className:"modal__overlay",onClick:this._overlayClickHandler,children:Object(u.jsxs)("form",{className:"modal__popup",onSubmit:this._onModalFormSubmit,children:[Object(u.jsx)("h2",{children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432 "}),Object(u.jsxs)("div",{className:"modal__wrapper",children:[Object(u.jsxs)("div",{className:this.props.isNameValid?"modal__item modal__item--name":"modal__item modal__item--name modal__item--invalid",children:[Object(u.jsx)("input",{ref:this.nameRef,type:"text",id:"name",placeholder:"* \u0418\u043c\u044f"}),Object(u.jsx)("label",{htmlFor:"name",children:Object(u.jsx)("span",{className:"visually-hidden",children:"\u0418\u043c\u044f"})})]}),Object(u.jsxs)("div",{className:"modal__item modal__item--advantages",children:[Object(u.jsx)("input",{ref:this.advantagesRef,type:"text",id:"advantages",placeholder:"\u0414\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0430"}),Object(u.jsx)("label",{htmlFor:"advantages",children:Object(u.jsx)("span",{className:"visually-hidden",children:"\u0414\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0430"})})]}),Object(u.jsxs)("div",{className:"modal__item modal__item--disadvantages",children:[Object(u.jsx)("input",{ref:this.disadvantagesRef,type:"text",id:"disadvantages",placeholder:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"}),Object(u.jsx)("label",{htmlFor:"disadvantages",children:Object(u.jsx)("span",{className:"visually-hidden",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"})})]}),Object(u.jsxs)("div",{className:"modal__rating",children:[Object(u.jsx)("span",{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440:"}),d.map((function(t){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("input",{ref:e.ratingRef,onChange:function(t){e.rating=t.target.value},className:"visually-hidden",type:"radio",id:t.id,name:"rating",value:t.value}),Object(u.jsx)("label",{htmlFor:t.id,children:Object(u.jsx)("svg",{width:"28",height:"27",viewBox:"0 0 17 16",children:Object(u.jsx)("path",{d:"M8.36875 0L10.2477 5.87336L16.3279 5.87336L11.4089 9.50329L13.2878 15.3766L8.36875 11.7467L3.44972 15.3766L5.32862 9.50329L0.409596 5.87336L6.48985 5.87336L8.36875 0Z"})})})]},t.id)}))]}),Object(u.jsxs)("div",{className:this.props.isCommentValid?"modal__item modal__item--comment":"modal__item modal__item--comment modal__item--invalid",children:[Object(u.jsx)("textarea",{ref:this.commentRef,id:"comment",placeholder:"* \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(u.jsx)("label",{htmlFor:"comment",children:Object(u.jsx)("span",{className:"visually-hidden",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})})]})]}),Object(u.jsx)("button",{type:"submit",className:"modal__submit button",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"}),Object(u.jsx)("button",{type:"button",className:"modal__close",onClick:this._closeButtonClickHandler,children:Object(u.jsx)("img",{src:f,alt:"close"})})]})})})})}}]),a}(c.a.PureComponent)),se=Object(N.b)((function(e){return{car:k(e),isNameValid:A(e),isCommentValid:F(e)}}),(function(e){return{popupClose:function(t){e(G(t))},validateName:function(t){e(W(t))},validateComment:function(t){e(X(t))},addReview:function(t){e(q(t))}}}))(ae),ce=a.p+"static/media/engine.c44f2101.svg",ie=a.p+"static/media/power.43cd54f5.svg",ne=a.p+"static/media/capacity.37b135b1.svg",re=a.p+"static/media/transmission.5ec2fbee.svg";var le=Object(N.b)((function(e){return{car:k(e)}}),null)((function(e){var t=e.car;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("section",{className:"description",children:[Object(u.jsx)("h1",{className:"description__name",children:t.name}),Object(u.jsxs)("ul",{className:"description__list",children:[Object(u.jsxs)("li",{className:"description__item",children:[Object(u.jsx)("img",{src:ce,alt:"Engine"}),Object(u.jsx)("span",{children:t.shortCharacteristics.fuel})]}),Object(u.jsxs)("li",{className:"description__item",children:[Object(u.jsx)("img",{src:re,alt:"Transmission"}),Object(u.jsx)("span",{children:t.shortCharacteristics.transmission})]}),Object(u.jsxs)("li",{className:"description__item",children:[Object(u.jsx)("img",{src:ie,alt:"Power"}),Object(u.jsx)("span",{children:t.shortCharacteristics.power})]}),Object(u.jsxs)("li",{className:"description__item",children:[Object(u.jsx)("img",{src:ne,alt:"Capacity"}),Object(u.jsx)("span",{children:t.shortCharacteristics.engine})]})]}),Object(u.jsxs)("div",{className:"description__wrapper",children:[Object(u.jsx)("p",{className:"description__current-price",children:t.price.currentPrice}),Object(u.jsx)("span",{className:"description__prev-price",children:t.price.prevPrice})]}),Object(u.jsx)("button",{type:"button",className:"description__submit button",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(u.jsxs)("button",{type:"button",className:"description__credit button",children:["\u0412 \u043a\u0440\u0435\u0434\u0438\u0442 \u043e\u0442 ",t.price.creditPrice]})]})})})),oe=a.p+"static/media/arrow.49c2c461.svg";var de=Object(N.b)((function(e){return{car:k(e),currentSlide:R(e)}}),(function(e){return{onPrevButtonClick:function(t){e(U(t))},onNextButtonClick:function(t){e(H(t))}}}))((function(e){var t=e.car,a=e.currentSlide,s=e.onNextButtonClick,i=e.onPrevButtonClick;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("section",{className:"photo-slider",children:[Object(u.jsx)("div",{className:"photo-slider__photo",children:Object(u.jsx)("img",{src:t.photos[a],alt:"Big_picture",width:"600",height:"375"})}),Object(u.jsxs)("div",{className:"photo-slider__container",children:[Object(u.jsx)("button",{type:"button",className:"photo-slider__button photo-slider__button--prev",onClick:function(){return i(a)},disabled:0===a,children:Object(u.jsx)("img",{src:oe,alt:"back",width:"14",height:"14"})}),t.photos.map((function(e){return Object(u.jsx)("div",{className:"photo-slider__miniature",children:Object(u.jsx)("img",{src:e,alt:"miniature",width:"128",height:"80"})},e)})),Object(u.jsx)("button",{type:"button",className:"photo-slider__button photo-slider__button--next",onClick:function(){return s(a)},disabled:a===t.photos.length-1,children:Object(u.jsx)("img",{src:oe,alt:"next",width:"14",height:"14"})})]})]})})}));var je=function(e){var t=e.characteristics;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("ul",{className:"tabs__characteristics characteristics",children:t.map((function(e){return Object(u.jsxs)("li",{className:"characteristics__item",children:[Object(u.jsx)("span",{className:"characteristics__name",children:e.name}),Object(u.jsx)("span",{className:"characteristics__value",children:e.value})]},e.name)}))})})},me=a.p+"static/media/stars.65421a20.svg",he=a.p+"static/media/stars-active.869fddf9.svg",ue=a(14),be=a.n(ue);a(33);var pe=Object(N.b)(null,(function(e){return{onReviewOpenButtonClick:function(t){e(G(t))}}}))((function(e){var t=e.reviews,a=e.onReviewOpenButtonClick;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("div",{className:"tabs__reviews reviews",children:[Object(u.jsx)("button",{onClick:function(){a(!0)},className:"reviews__button button",children:"\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"}),t.map((function(e){return Object(u.jsxs)("article",{className:"reviews__item",children:[Object(u.jsx)("h2",{className:"reviews__name",children:e.author}),Object(u.jsxs)("div",{className:"reviews__block reviews__block--advantages",children:[Object(u.jsx)("h3",{children:"\u0414\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u0430"}),Object(u.jsx)("p",{children:e.advantages})]}),Object(u.jsxs)("div",{className:"reviews__block reviews__block--disadvantages",children:[Object(u.jsx)("h3",{children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"}),Object(u.jsx)("p",{children:e.disadvantages})]}),Object(u.jsxs)("div",{className:"reviews__block reviews__block--comment",children:[Object(u.jsx)("h3",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(u.jsx)("p",{children:e.comment})]}),Object(u.jsxs)("div",{className:"reviews__rating",children:[Object(u.jsx)("img",{src:me,className:"reviews__stars",alt:""}),Object(u.jsx)("span",{className:"reviews__stars reviews__stars--active",style:{width:"".concat(e.rating,"%")},children:Object(u.jsx)("img",{src:he,alt:""})})]}),Object(u.jsxs)("div",{className:"reviews__wrapper",children:[Object(u.jsx)("p",{className:"reviews__date",children:be()(e.date).fromNow()}),Object(u.jsx)("a",{href:"#",className:"reviews__reply",children:"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]})]},e.id)}))]})})})),_e=a(20),ve=a.p+"static/media/location.c0b27bc9.svg",Oe=function(e){var t=e.source;return Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:t,alt:"marker"})})},xe=function(e){Object(x.a)(a,e);var t=Object(g.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{height:"271px",width:"431px"},children:Object(u.jsx)(_e.a,{bootstrapURLKeys:{key:"AIzaSyB-IcjyxAAjS1MXEKNDQgvTGo32JiW65P0"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(u.jsx)(Oe,{lat:59.96815,lng:30.316275,source:ve})})})}}]),a}(s.Component);xe.defaultProps={center:{lat:59.968137,lng:30.316263},zoom:18};var ge=xe;var fe=function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("div",{className:"tabs__contacts contacts",children:[Object(u.jsxs)("div",{className:"contacts__wrapper",children:[Object(u.jsxs)("div",{className:"contacts__item",children:[Object(u.jsx)("h3",{children:"\u0410\u0434\u0440\u0435\u0441"}),Object(u.jsxs)("p",{children:["\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, ",Object(u.jsx)("br",{})," \u043d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u0430\u044f \u0440\u0435\u043a\u0438 \u041a\u0430\u0440\u043f\u043e\u0432\u043a\u0438, \u0434\u043e\u043c 5"]})]}),Object(u.jsxs)("div",{className:"contacts__item",children:[Object(u.jsx)("h3",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b"}),Object(u.jsx)("p",{children:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e, \u0441 10:00 \u0434\u043e 21:00"})]}),Object(u.jsxs)("div",{className:"contacts__item",children:[Object(u.jsx)("h3",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(u.jsx)("a",{href:"tel:+78003335599",children:"8 (800) 333-55-99"})]}),Object(u.jsxs)("div",{className:"contacts__item",children:[Object(u.jsx)("h3",{children:"E-mail"}),Object(u.jsx)("a",{href:"mailto:info@avto-moto.ru",children:"info@avto-moto.ru"})]})]}),Object(u.jsx)("div",{className:"contacts__map",children:Object(u.jsx)(ge,{})})]})})};var Ne=Object(N.b)((function(e){return{car:k(e),currentTab:E(e)}}),(function(e){return{onTabButtonClick:function(t){e(K(t))}}}))((function(e){var t,a=e.car,s=e.currentTab,i=e.onTabButtonClick;return s===r&&(t=Object(u.jsx)(je,{characteristics:a.characteristics})),s===l&&(t=Object(u.jsx)(pe,{reviews:a.reviews})),s===o&&(t=Object(u.jsx)(fe,{})),Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)("section",{className:"tabs",children:[Object(u.jsxs)("div",{className:"tabs__controls",children:[Object(u.jsx)("button",{className:s===r?"tabs__control tabs__control--characteristics tabs__control--active":"tabs__control tabs__control--characteristics",onClick:function(){i(r)},children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),Object(u.jsx)("button",{className:s===l?"tabs__control tabs__control--reviews tabs__control--active":"tabs__control tabs__control--reviews",onClick:function(){i(l)},children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),Object(u.jsx)("button",{className:s===o?"tabs__control tabs__control--contacts tabs__control--active":"tabs__control tabs__control--contacts",onClick:function(){i(o)},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(u.jsx)("div",{className:"tabs__content",children:t})]})})}));var ye=function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("main",{className:"main-content",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"main-content__content",children:[Object(u.jsx)(de,{}),Object(u.jsx)(le,{}),Object(u.jsx)(Ne,{})]})})})})};var we,Ce=Object(N.b)((function(e){return{isModalOpened:T(e)}}),null)((function(e){var t=e.isModalOpened;return Object(u.jsxs)("div",{className:"App",children:[t?Object(u.jsx)(se,{}):"",Object(u.jsx)(b,{}),Object(u.jsx)(ye,{}),Object(u.jsx)(p,{})]})})),ke=a(9),Se=a(17),Re=Object(ke.b)((we={},Object(Se.a)(we,w.DATA,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:case J:return y(e,{car:t.payload});default:return e}})),Object(Se.a)(we,w.UI,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:case M:return y(e,{currentSlide:t.payload});case D:return y(e,{currentTab:t.payload});case L:return y(e,{isModalOpened:t.payload});case P:return y(e,{isNameValid:t.payload});case V:return y(e,{isCommentValid:t.payload});default:return e}})),we)),Ee={id:1,name:"\u041c\u0430\u0440\u043f\u0435\u0445 11",price:{prevPrice:"2 400 000 \u20bd",currentPrice:"2  300 000 \u20bd",creditPrice:"11 000 \u20bd"},shortCharacteristics:{fuel:"\u0431\u0435\u043d\u0437\u0438\u043d",transmission:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430",power:"100 \u043b.\u0441.",engine:"1.4 \u043b"},characteristics:[{name:"\u0422\u0440\u0430\u043d\u0441\u043c\u0438\u0441\u0441\u0438\u044f",value:"\u0420\u043e\u0431\u043e\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f"},{name:"\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043b.\u0441.",value:"249"},{name:"\u0422\u0438\u043f \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f",value:"\u0411\u0435\u043d\u0437\u0438\u043d\u043e\u0432\u044b\u0439"},{name:"\u041f\u0440\u0438\u0432\u043e\u0434",value:"\u041f\u043e\u043b\u043d\u044b\u0439"},{name:"\u041e\u0431\u044a\u0435\u043c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044f, \u043b",value:"2.4"},{name:"\u041c\u0430\u043a\u0441. \u043a\u0440\u0443\u0442\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442",value:"370/4500"},{name:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0438\u043b\u0438\u043d\u0434\u0440\u043e\u0432",value:"4"}],photos:[a.p+"static/media/slide-1.0b75fda0.jpg",a.p+"static/media/slide-2.68ed0219.jpg",a.p+"static/media/slide-3.66f42cfc.jpg"],reviews:[{id:0,author:"\u0411\u043e\u0440\u0438\u0441 \u0418\u0432\u0430\u043d\u043e\u0432",advantages:"\u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c, \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434",disadvantages:"\u0421\u043b\u0430\u0431\u044b\u0435 \u0442\u043e\u0440\u043c\u043e\u0437\u043d\u044b\u0435 \u043a\u043e\u043b\u043e\u0434\u043a\u0438 (\u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c)",comment:"\u0412\u0437\u044f\u043b\u0438 \u043f\u043e \u0442\u0440\u0435\u0439\u0434-\u0438\u043d, \u043d\u0430 \u0432\u044b\u0433\u043e\u0434\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0443 \u0434\u0438\u043b\u0435\u0440\u0430. \u0421\u0442\u0438\u043b\u044c\u043d\u0430\u044f \u0432\u043d\u0435\u0448\u043a\u0430 \u0438 \u043a\u0440\u0443\u0442 \u043f\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u043c \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u043c. \u041d\u0435 \u0434\u0443\u043c\u0430\u043b, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0441\u044f\u0434\u0443 \u043d\u0430 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043f\u0440\u043e\u043c, \u043d\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u043e\u043d\u044f\u044e \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u044e, \u0447\u0442\u043e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e\u0432\u043e\u043b\u0435\u043d.",rating:"80",date:"Mon Mar 29 2021 12:51:16 GMT+0300 (\u041c\u043e\u0441\u043a\u0432\u0430, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"},{id:1,author:"\u041c\u0430\u0440\u0441\u0435\u043b\u044c \u0418\u0441\u043c\u0430\u0433\u0438\u043b\u043e\u0432",advantages:"C\u0442\u0438\u043b\u044c, \u043a\u043e\u043c\u0444\u043e\u0440\u0442, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0441\u0442\u044c",disadvantages:"\u0414\u043e\u0440\u043e\u0433\u043e\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",comment:"\u0414\u0438\u0437\u0430\u0439\u043d \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u0439, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0448\u0438\u043a\u0430\u0440\u043d\u043e, \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044f \u0437\u0430 \u0440\u0443\u043b\u0451\u043c \u0442\u0430\u043a\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b \u043e\u0441\u043e\u0431\u044b\u0435. \u041d\u043e \u0440\u0435\u043c\u043e\u043d\u0442 \u043e\u0447\u0435\u043d\u044c \u0434\u043e\u0440\u043e\u0433\u043e\u0439. \u041f\u0430\u0440\u0443 \u043c\u0435\u0441\u044f\u0446\u0435\u0432 \u043d\u0430\u0437\u0430\u0434 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c. \u041f\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b\u0448\u043b\u043e \u043a\u0430\u043a \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c. \u0422\u0430\u043a \u0447\u0442\u043e, \u0435\u0441\u043b\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u044c \u044d\u0442\u0443 \u043c\u0430\u0448\u0438\u043d\u0443, \u043d\u0430\u0434\u043e \u0431\u044b\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u043c \u043a \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0440\u0430\u0441\u0445\u043e\u0434\u0430\u043c \u043d\u0430 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435.",rating:"60",date:"Mon Mar 29 2021 16:51:36 GMT+0300 (\u041c\u043e\u0441\u043a\u0432\u0430, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f)"}]},Te=Object(ke.c)(Re,window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e});Te.dispatch(Z(Ee)),n.a.render(Object(u.jsx)(N.a,{store:Te,children:Object(u.jsx)(Ce,{})}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.93b3c295.chunk.js.map