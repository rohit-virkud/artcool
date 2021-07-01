(this["webpackJsonpartcool-app"]=this["webpackJsonpartcool-app"]||[]).push([[0],{18:function(n,e,t){},19:function(n,e,t){},23:function(n,e,t){"use strict";t.r(e);var a,i=t(1),r=t.n(i),s=t(8),o=t.n(s),c=(t(18),t.p,t(19),t(2)),l=t(9),h=t(10),d=t(3),m=t.n(d),g=t(0),b=Object(h.a)(a||(a=Object(l.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\nbody\n{\noverflow: hidden; /* Hide scrollbars */ \n background-color: #ffffff;\n}\n.container::-webkit-scrollbar {\nwidth: 0;  /* Remove scrollbar space */\nbackground: transparent;  /* Optional: just make scrollbar invisible */\n}\n/* Optional: show position indicator in red */\n.container::-webkit-scrollbar-thumb {\nbackground: #FF0000;\n}\na{\ntext-decoration: none;\ncolor: inherit;\n}\n/*Loader*/\n\n.loader-div {\nwidth: 100%;\nheight: 100%;\nposition: fixed;\nbackground:#031222;\ntext-align: center;\nz-index: 999;\n\n\n}\n\n.loader-div h1 {\nmargin: 0;\npadding: 0;\n\nfont-weight: 300;\nfont-size: 4vw;\ncolor:#E4B464;\nposition: absolute;\ntop: 40%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n}\n\n.loader-div h1 span {\nposition: relative;\ntop: 0.63em;  \ndisplay: inline-block;\ntext-transform: uppercase;  \nopacity: 0;\ntransform: rotateX(-90deg);\n\n}\n\n.loader-div h1  .let1 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.2s;\n}\n\n.loader-div h1  .let2 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.3s;\n}\n\n.loader-div h1  .let3 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.4s;\n}\n\n.loader-div h1  .let4 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.5s;\n\n}\n\n.loader-div h1  .let5 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.6s;\n}\n\n.loader-div h1  .let6 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.7s;\n}\n\n.loader-div h1 .let7 {\nanimation: drop 1.2s ease-in-out infinite;\nanimation-delay: 1.8s;\n}\n\n@keyframes drop {\n  10% {\n      opacity: 0.5;\n  }\n  20% {\n      opacity: 1;\n      top: 3.78em;\n      transform: rotateX(-360deg);\n  }\n  80% {\n      opacity: 1;\n      top: 3.78em;\n      transform: rotateX(-360deg);\n  }\n  90% {\n      opacity: 0.5;\n  }\n  100% {\n      opacity: 0;\n      top: 6.94em\n  }\n}\n\n\n/**/\n.effect-wrapper\n{\n align-items: center;\n background-color: #000;\n display: flex;\n flex-shrink:0;\n flex-direction: column;\n perspective: 261.111vw;\n position: relative;\n width: 100%;\n \n overflow:hidden;\n}\n.effect\n{\n overflow: hidden;\ntransform-origin: 100% 0;\ntransition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\nwidth: 100%;\n\n}\n.active  {\ntransform: rotateX(-35deg);\n\n}\n.overlay {\nbackground: linear-gradient(#0000001f 0%, #0000009f 80%, #000000bf 100%);\nheight: 100%;\nopacity: 0;\nposition: absolute;\ntransition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);\ntop: 0;\nwidth: 100%;\npointer-events: none;\n}\n.overlayactive {\nopacity: 1;\n}\n\n.container-wrapper\n{\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nflex-shrink: 0;\njustify-content: center;\noverflow:hidden;\n\n}\n.container\n{\nwidth: 90%;\n\noverflow:scroll;\n}\n\n.image-container\n{\n\nwidth: 100%;\ntransform-origin: 50% 100%;\nposition: relative;\noverflow:hidden;\n\n}\n.image\n{\nwidth: 100%;\nheight: 100%;\nbackground-size: contain;\nbackground-position: center;\n\n\n}\nh1,p{\ncolor: white;\n}\nh1{\n\nfont-weight: 700;\nword-break: break-word;\n}\n\n\n.first-name,.last-name\n{\n\nwidth: 90%;\n  \nfont-family: Roboto;\nfont-style: normal;\nfont-weight: bold;\nfont-weight: 700;\n\n}\n\n.tag\n{\nwidth: 90%;\t\t\nfont-family: Roboto;\nfont-style: normal;\nfont-weight: 900;\t\t\nletter-spacing: 0.1em;\ncolor: #E9C49A;\n \n}\n\n\n\n .contact-container\n {\n     \n     width: 100%;\n     display: flex;\n     flex-shrink: 0;\n     align-items: center;\n }\n\n .contact-txt\n {\n   \n     font-weight: 300;\n     \n     width: 80%;\n\n }\n\n .fixed-buttons\n {\n     width: 90%;\n     \n     position: fixed;\n     top: auto;\n     display: flex;\n     flex-shrink: 0;\n     justify-content: center;\n     align-items: flex-end;\n     top:auto;\n     bottom: 1%;\n     z-index: 1;\n     overflow:hidden;\n    \n }\n\n .share-icon-holder\n {\n     display: flex;\n     flex-shrink: 0;\n     flex-direction: column;\n     -webkit-box-pack: center;\n     justify-content: center;\n     -webkit-box-align: center;\n     align-items: center;\n     transition: 0.1s ease-out opacity;\n }\n\n \n\n .share-menu,.share-menu-barcode {\nbackground: #06251B;\nbackground-blend-mode: screen;\nbottom: 0;\ndisplay: flex;\nflex-shrink: 0;\nflex-wrap: wrap;\nheight: 60vw;\nposition: absolute;\ntransform: translateY(60vw);\ntransition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\nwidth: 100%;\n\n}\n\n\n\n.open\n{\ntransform: translateY(0vw);\n}\n\n .heading-name-03\n {\n    \n     font-family: Roboto;\n     font-style: normal;\n     font-weight: bold;\n     \n     \n }\n\n .input\n{\n outline: none; \n box-shadow: none; \n border: none ;\n font-family: Roboto;\n font-style: normal;\n\n background: #FFFFFF;\n /* Light Grey */\n \n box-sizing: border-box;\n border-radius: 50px;\n\n border-radius: 50px;\n\n}\n\n.form\n{\n    display: flex;\n    flex-shrink: 0;\n    flex-direction: column;\n    width: 85%;\n}\n\n .primary-btn\n {\n    \n     font-family: Roboto;\n     font-style: normal;\n     font-weight: bold;\n    \n     color: #FFFFFF;;\n     background-color: #34413B;\n     border-radius: 50px;\n     background: #E4B464;\n     box-shadow: 0px 4px 20px rgba(86, 84, 84, 0.15);\n     background-size: cover;\n     background-position: center;\n     border: none;\n     /*box-shadow: 0px 2px 4px 50px rgba(255, 223, 161, 0.1);*/\n     display: inline-block;\n     \n\n    \n }\n\n .line\n {\n     width: 90%;\n     height: 1px;\n     background-color: white;\n    \n }\n\n\n /*share icons*/\n\n\n\n .share-slide\n {\n\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  \n }\n .close-icon\n {\n     position: absolute;\n     top:10%;\n     right: 7%;\n     \n }\n .share-slide-share-icons\n {\n\n     display: flex;\n    \n     flex-direction: column;\n     align-items: center;\n     flex-shrink: 0;\n     position: fixed;\n     top: 50%;\n     left: 50%; \n     /* bring your own prefixes */\n     transform: translate(-50%, -55%);\n    \n }\n .share-headline \n {\n     color: #ffffff;  \n }\n .scan-and-save-txt\n {\n    font-size: min(5vw,2.5vh);\n    margin-bottom:  min(4vw,4vh);\n     color: #1D3138;\n     \n     margin-top: 30%;\n    \n  \n     \n }\n\n\n \n .icon-grid\n {\n     display: grid;\n     width: 100%;\n     grid-template-columns: 11vw 11vw 11vw 11vw;\n     justify-content: center;\n\n }\n .icon-grid a\n {\n     display: flex;\n     justify-content: center;\n     align-items: center;\n     flex-shrink: 0;\n    \n }\n\n .qr-code-wrapper\n {\n     width: 100%;\n     height: 50vh;\n     display: flex;\n     flex-direction: column;\n     flex-shrink: 0;\n     color: #1D4B7A;\n     align-items: center;\n }\n .qr-code-container\n {\n     \n  \n     transition:  transform 1s ease-out;\n }\n .image{\n    animation: zoomLoop 10s infinite;\n }\n @keyframes zoomLoop {\n    0% {\n\n      transform: scale(1);\n      \n    }\n    50%{\n      transform: scale(1.1);\n    }\n    \n    100% {\n    transform: scale(1);\n\n    }\n  }\n\n  .arrow {\n\t\tposition: absolute;\n    text-align: center;\n    right: 3vw;\n    opacity: 0;\n    \n\t}\n     .arrow img{\n    \n      margin-top: 7.299vw;\n      margin-left: 1.217vw;\n      filter: invert(0%);\n\t}\n.bounce \n    {\n      opacity: 1;\n  \t\tanimation: bounce 2s infinite;\n\t}\n  .bounceBack \n  {\n    opacity: 1;\n    animation: bounceBack 2s infinite;\n}\n.bounceBack img\n{\n  transform: rotate(-180deg);\n}\n\n@keyframes bounce \n{\n    \n  0%, 20%, 50%, 80%, 100% \n\t{\n    transform: translateY(0);\n    }\n  40% \n   {\n    transform: translateY(-7.299vw);\n   }\n  60% \n   {\n    transform: translateY(-3.65vw);\n   }\n} \n\n@keyframes bounceBack \n{\n    \n  0%, 20%, 50%, 80%, 100% \n\t{\n    transform: translateY(0);\n    }\n  40% \n   {\n    transform: translateY(7.299vw);\n   }\n  60% \n   {\n    transform: translateY(3.65vw);\n   }\n}\n\n\n\n\n\n\n"]))),p=function(){var n=function(){var n=Object(i.useState)({width:void 0,height:void 0}),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(i.useEffect)((function(){function n(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}(),e=function(e,t){return"min(".concat(e,"vw, ").concat(n.height*t/100,"px)")},t=function(e){return"".concat(n.height*e/100,"px")},a=Object(i.useState)(!1),r=Object(c.a)(a,2),s=r[0],o=(r[1],Object(i.useState)("https://raw.githubusercontent.com/rohit-virkud/lawyer/main/img.jpg")),l=Object(c.a)(o,2),h=l[0],d=(l[1],Object(i.useState)("George")),p=Object(c.a)(d,2),f=p[0],j=(p[1],Object(i.useState)("Mask")),u=Object(c.a)(j,2),w=u[0],y=(u[1],Object(i.useState)("info@artcoolcards.gr")),O=Object(c.a)(y,2),x=O[0],v=(O[1],Object(i.useState)("Sr no:14/15, vitthal nagar colony , near sai ganesh apt, sinhagad road, pune - 51")),k=Object(c.a)(v,2),N=k[0],S=(k[1],Object(i.useState)("+91 8888306063")),T=Object(c.a)(S,2),z=T[0],L=(T[1],Object(i.useState)("+91 8888306063")),F=Object(c.a)(L,2),B=F[0],C=(F[1],Object(i.useState)("www.artcoolcards.com")),R=Object(c.a)(C,2),E=R[0],H=(R[1],Object(i.useState)("LAWYER")),Y=Object(c.a)(H,2),D=Y[0],_=(Y[1],Object(i.useState)("Follow Us")),A=Object(c.a)(_,2),q=A[0],M=(A[1],Object(i.useState)("Our Reviews")),X=Object(c.a)(M,2),G=X[0],I=(X[1],Object(i.useState)("Subscribe")),J=Object(c.a)(I,2),P=J[0],U=(J[1],Object(i.useState)("https://artcoolcards.gr/")),W=Object(c.a)(U,2),K=W[0],Q=(W[1],Object(i.useState)("https://artcoolcards.gr/")),V=Object(c.a)(Q,2),Z=V[0],$=(V[1],Object(i.useState)("https://artcoolcards.gr/")),nn=Object(c.a)($,2),en=nn[0],tn=(nn[1],Object(i.useState)("https://artcoolcards.gr/")),an=Object(c.a)(tn,2),rn=an[0],sn=(an[1],Object(i.useState)("https://artcoolcards.gr/")),on=Object(c.a)(sn,2),cn=on[0],ln=(on[1],Object(i.useState)("https://artcoolcards.gr/")),hn=Object(c.a)(ln,2),dn=hn[0],mn=(hn[1],Object(i.useState)("https://artcoolcards.gr/")),gn=Object(c.a)(mn,2),bn=gn[0],pn=(gn[1],Object(i.useState)("https://artcoolcards.gr/")),fn=Object(c.a)(pn,2),jn=fn[0],un=(fn[1],Object(i.useState)("https://artcoolcards.gr/")),wn=Object(c.a)(un,2),yn=wn[0],On=(wn[1],Object(i.useState)(!0)),xn=Object(c.a)(On,2),vn=xn[0],kn=(xn[1],Object(i.useState)(!0)),Nn=Object(c.a)(kn,2),Sn=Nn[0],Tn=(Nn[1],Object(i.useState)(!0)),zn=Object(c.a)(Tn,2),Ln=zn[0],Fn=(zn[1],Object(i.useState)(!0)),Bn=Object(c.a)(Fn,2),Cn=Bn[0],Rn=(Bn[1],Object(i.useState)(!0)),En=Object(c.a)(Rn,2),Hn=En[0],Yn=(En[1],Object(i.useState)(!0)),Dn=Object(c.a)(Yn,2),_n=Dn[0],An=(Dn[1],Object(i.useState)(!0)),qn=Object(c.a)(An,2),Mn=qn[0],Xn=(qn[1],Object(i.useState)(!0)),Gn=Object(c.a)(Xn,2),In=Gn[0],Jn=(Gn[1],Object(i.useState)(!0)),Pn=Object(c.a)(Jn,2),Un=Pn[0],Wn=(Pn[1],Object(i.useState)(!0)),Kn=Object(c.a)(Wn,2),Qn=Kn[0],Vn=(Kn[1],Object(i.useState)(!0)),Zn=Object(c.a)(Vn,2),$n=Zn[0],ne=(Zn[1],Object(i.useState)(!0)),ee=Object(c.a)(ne,2),te=ee[0],ae=(ee[1],Object(i.useState)(!0)),ie=Object(c.a)(ae,2),re=ie[0],se=(ie[1],Object(i.useState)(!0)),oe=Object(c.a)(se,2),ce=oe[0],le=(oe[1],Object(i.useState)(!0)),he=Object(c.a)(le,2),de=he[0],me=(he[1],Object(i.useState)(!0)),ge=Object(c.a)(me,2),be=ge[0],pe=(ge[1],Object(i.useState)(!0)),fe=Object(c.a)(pe,2),je=fe[0],ue=(fe[1],Object(i.useState)(!0)),we=Object(c.a)(ue,2),ye=we[0],Oe=(we[1],Object(i.useState)(!0)),xe=Object(c.a)(Oe,2),ve=xe[0];xe[1];return Object(i.useEffect)((function(){setTimeout((function(){m()(".loader-div span").fadeOut("fast"),m()(".loader-div").fadeOut()}),2e3);var n=function(n,e,t){return Math.max(e,Math.min(n,t))},e=document.querySelector(".container"),t=document.querySelector(".image-container");e.addEventListener("scroll",(function(a){var i=n((200-e.scrollTop+.3*72)/100,0,1),r=n((160-e.scrollTop+.3*72)/60,0,1);t.style.transform="scale(".concat(i,")"),t.style.opacity="".concat(r)}))}),[]),Object(g.jsxs)("div",{style:{overflow:"hidden",position:"relative"},children:[Object(g.jsx)(b,{}),Object(g.jsx)("div",{className:"loader-div",style:{backgroundColor:s?"#092F24":"#ffffff"},children:Object(g.jsxs)("h1",{style:{color:s?"#E4B464":"#000000"},children:[Object(g.jsx)("span",{className:"let1",children:"l"}),Object(g.jsx)("span",{className:"let2",children:"o"}),Object(g.jsx)("span",{className:"let3",children:"a"}),Object(g.jsx)("span",{className:"let4",children:"d"}),Object(g.jsx)("span",{className:"let5",children:"i"}),Object(g.jsx)("span",{className:"let6",children:"n"}),Object(g.jsx)("span",{className:"let7",children:"g"})]})}),Object(g.jsxs)("div",{className:"effect-wrapper",style:{height:t(100)},children:[Object(g.jsxs)("div",{className:"effect",style:{height:t(100),background:s?"linear-gradient(179.7deg,#0C201A 0.4%,#05130F 34.65%,rgba(1,31,22,0.98) 70.18%,rgba(0,40,28,0.96) 96.64%)":"linear-gradient(193.22deg, #FFFFFF 34.11%, #E7DFD5 113.1%)"},children:[Object(g.jsxs)("div",{className:"arrow bounce",style:{top:e(150,90),fontSize:e(2.433,1.2)},children:[Object(g.jsx)("p",{style:{transform:"rotate(-90deg)",color:s?"#fff":"#000"},children:"scroll down"}),Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/arrow.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/arrow-dark.png",alt:"arrow-img",style:{marginTop:"7.299vw",marginLeft:"1.217vw",width:e(2.5,1.2)}})]}),Object(g.jsxs)("div",{className:"container-wrapper",children:[Object(g.jsxs)("div",{className:"container",style:{height:t(88)},children:[Object(g.jsx)("div",{className:"image-container",style:{marginTop:e(5,3),borderRadius:e(5,3),height:t(25)},children:Object(g.jsx)("img",{src:h,alt:"image",className:"image"})}),Object(g.jsxs)("div",{className:"slide-01-wrapper",children:[Object(g.jsxs)("div",{className:"content-margin",style:{marginLeft:e(3,1.5),minHeight:t(60)},children:[Object(g.jsx)("h1",{className:"first-name",style:{marginTop:e(5,2.5),fontSize:e(7.5,3.5),lineHeight:e(8,4),color:s?"#fff":"#000"},children:f}),Object(g.jsx)("h1",{className:"last-name",style:{fontSize:e(7.5,3.5),lineHeight:e(8,4),color:s?"#fff":"#000"},children:w}),ve&&Object(g.jsx)("p",{className:"tag",style:{fontSize:e(3.2,1.6),marginTop:e(2,1),color:s?"#E9C49A":"#888888"},children:D}),Object(g.jsxs)("div",{className:"contact-container-wrapper",style:{marginTop:e(10.291,5.5)},children:[te&&Object(g.jsxs)("a",{href:"tel:".concat(z),className:"contact-container cc-top",children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/phone-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/phone-icon-dark.png",alt:"phone",className:"contact-icon",style:{width:e(8,5),height:e(8,5)}}),Object(g.jsx)("p",{className:"contact-txt",style:{marginLeft:e(4.116,2.5),fontSize:e(4,2),lineHeight:e(5,2.5),color:s?"#fff":"#000"},children:"+91 8888306064"})]}),re&&Object(g.jsxs)("a",{href:"tel:".concat(B),className:"contact-container",style:{marginTop:e(5.569,3.2)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/home-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/home-icon-dark.png",alt:"phone",className:"contact-icon",style:{width:e(8,5),height:e(8,5)}}),Object(g.jsx)("p",{className:"contact-txt",style:{marginLeft:e(4.116,2.5),fontSize:e(4,2),lineHeight:e(5,2.5),color:s?"#fff":"#000"},children:B})]}),Qn&&Object(g.jsxs)("a",{href:"mailto:".concat(x),className:"contact-container",style:{marginTop:e(5.569,3.2)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/msg-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/msg-icon-dark.png",alt:"phone",className:"contact-icon",style:{width:e(8,5),height:e(8,5)}}),Object(g.jsx)("p",{className:"contact-txt",style:{marginLeft:e(4.116,2.5),fontSize:e(4,2),lineHeight:e(5,2.5),color:s?"#fff":"#000"},children:x})]}),$n&&Object(g.jsxs)("a",{href:"https://maps.google.com/?q=".concat(N),target:"_blank",rel:"noopener noreferrer",className:"contact-container",style:{marginTop:e(5.569,3.2)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/location-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/location-icon-dark.png",alt:"phone",className:"contact-icon",style:{width:e(8,5),height:e(8,5)}}),Object(g.jsx)("p",{className:"contact-txt",style:{marginLeft:e(4.116,2.5),fontSize:e(4,2),lineHeight:e(5,2.5),color:s?"#fff":"#000"},children:N})]}),ce&&Object(g.jsxs)("a",{href:E,target:"_blank",rel:"noopener noreferrer",className:"contact-container",style:{marginTop:e(5.569,3.2),marginBottom:e(12.107,6.5)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/web-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/web-icon-dark.png",alt:"phone",className:"contact-icon",style:{width:e(8,5),height:e(8,5)}}),Object(g.jsx)("p",{className:"contact-txt",style:{marginLeft:e(4.116,2.5),fontSize:e(4,2),lineHeight:e(5,2.5),color:s?"#fff":"#000"},children:E})]})]})]}),Object(g.jsx)("div",{className:"line",style:{marginBottom:e(12.107,6.5),background:s?"#fff":"#000"}}),Object(g.jsxs)("div",{className:"container-03 socialmax",style:{marginTop:e(8,4)},children:[ye&&Object(g.jsxs)("div",{class:"social",style:{marginLeft:e(3,1.5)},children:[be&&Object(g.jsx)("h1",{className:"heading-name-03",style:{marginTop:e(8,4),fontSize:e(5,3),lineHeight:e(8.475,4.2),color:s?"#fff":"#000"},children:q}),Object(g.jsxs)("div",{className:"social-icons",style:{marginTop:e(4,2.5)},children:[vn&&Object(g.jsx)("a",{href:K,target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/fb.png",alt:"fb",style:{width:e(8,5),height:e(8,5)}})}),_n&&Object(g.jsx)("a",{href:Z,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/insta.png",alt:"insta",style:{width:e(8,5),height:e(8,5)}})}),Sn&&Object(g.jsx)("a",{href:rn,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/youtube.png",alt:"youtube",style:{width:e(8,5),height:e(8,5)}})}),Ln&&Object(g.jsx)("a",{href:bn,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/telegram.png",alt:"telegram",style:{width:e(8,5),height:e(8,5)}})}),Cn&&Object(g.jsx)("a",{href:cn,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/twitter.png",alt:"twitter",style:{width:e(8,5),height:e(8,5)}})}),Hn&&Object(g.jsx)("a",{href:dn,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/tiktok.png",alt:"tiktok",style:{width:e(8,5),height:e(8,5)}})}),Mn&&Object(g.jsx)("a",{href:en,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/linkedin.png",alt:"linkedin",style:{width:e(8,5),height:e(8,5)}})})]})]}),je&&Object(g.jsxs)("div",{class:"reviews",style:{marginLeft:e(3,1.5)},children:[de&&Object(g.jsx)("h1",{className:"heading-name-03",style:{marginTop:e(8,4),fontSize:e(5,3),lineHeight:e(8.475,4.2),color:s?"#fff":"#000"},children:G}),Object(g.jsxs)("div",{className:"social-icons",style:{marginTop:e(4,2.5)},children:[Un&&Object(g.jsx)("a",{href:jn,target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/Tripadvisor.png",alt:"fb",style:{width:e(8,5),height:e(8,5)}})}),In&&Object(g.jsx)("a",{href:yn,target:"_blank",rel:"noopener noreferrer",className:"mg-lt",style:{marginLeft:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/bookingcom.png",alt:"insta",style:{width:e(8,5),height:e(8,5)}})})]})]})]}),Object(g.jsxs)("div",{className:"form-wrapper",style:{marginLeft:e(3,1.5)},children:[Object(g.jsx)("h1",{className:"heading-name-03",style:{marginTop:e(12,6),fontSize:e(5,3),lineHeight:e(8.475,4.2),color:s?"#fff":"#000"},children:P}),Object(g.jsxs)("form",{method:"post",className:"form",style:{marginTop:e(4,3)},children:[Object(g.jsx)("input",{type:"name",name:"name",placeholder:"Enter Your Name",className:"input",style:{paddingTop:e(2.39,1.5),paddingBottom:e(2.39,1.5),paddingLeft:e(3.668,1.8),paddingRight:e(3.668,1.8),fontSize:e(3.405,1.8),lineHeight:e(5.085,3)}}),Object(g.jsx)("input",{type:"email",name:"email",placeholder:"Enter Your Email",className:"input",style:{marginTop:e(4,2),paddingTop:e(2.39,1.5),paddingBottom:e(2.39,1.5),paddingLeft:e(3.668,1.8),paddingRight:e(3.668,1.8),fontSize:e(3.405,1.8),lineHeight:e(5.085,3)}}),Object(g.jsx)("div",{className:"button-wrapper",children:Object(g.jsx)("input",{type:"submit",name:"submit",value:"SUBMIT",className:"primary-btn",style:{marginTop:e(4,2),width:"30%",marginLeft:e(1,.5),color:"#ffffff",marginBottom:e(10,5),border:"none",paddingTop:e(2.39,1.5),paddingBottom:e(2.39,1.5),paddingLeft:e(4,2),paddingRight:e(4,2),fontSize:e(3.405,1.8),lineHeight:e(5.085,3)}})})]})]})]})]}),Object(g.jsxs)("div",{className:"fixed-buttons",style:{height:t(12)},children:[Object(g.jsxs)("a",{href:"#!",className:"share-icon-holder",onClick:function(n){n.preventDefault(),m()(".effect").toggleClass("active"),m()(".overlay").css("opacity","1"),m()(".share-icon-holder").css("opacity","0"),m()(".share-menu").toggleClass("open")},style:{marginTop:e(1.6,1)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/share-button.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/share-button-dark.png",alt:"share",className:"share-icon",style:{width:e(10,6),height:e(10,6)}}),Object(g.jsx)("p",{className:"share-text",style:{fontSize:e(3,1.5),marginTop:e(2,1.5),color:s?"#fff":"#000"},children:"share"})]}),Object(g.jsxs)("a",{href:"#!",className:"share-icon-holder",children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/save-btn.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/save-btn-dark.png",alt:"share",className:"save-icon",style:{width:e(12,8),height:e(12,8),marginLeft:e(10,6),marginRight:e(10,6)}}),Object(g.jsx)("p",{className:"share-text",style:{fontSize:e(3,1.5),marginTop:e(2,1.5),color:s?"#fff":"#000"},children:"save contacts"})]}),Object(g.jsxs)("a",{href:"#!",className:"share-icon-holder",onClick:function(n){n.preventDefault(),m()(".effect").toggleClass("active"),m()(".overlay").css("opacity","1"),m()(".share-icon-holder").css("opacity","0"),m()(".share-menu-barcode").toggleClass("open")},style:{marginTop:e(1.8,1)},children:[Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/barcode.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/barcode-dark.png",alt:"share",className:"share-icon",style:{width:e(10,6),height:e(10,6)}}),Object(g.jsx)("p",{className:"share-text",style:{fontSize:e(3,1.5),marginTop:e(2,1.5),color:s?"#fff":"#000"},children:"qr code"})]})]})]})]}),Object(g.jsx)("div",{className:"overlay"})]}),Object(g.jsxs)("div",{className:"share-menu",style:{borderTopLeftRadius:e(5,3),borderTopRightRadius:e(5,3),background:s?"#06251B":"#F0ECE6"},children:[Object(g.jsx)("a",{href:"#!",onClick:function(n){n.preventDefault(),m()(".effect").toggleClass("active"),m()(".overlay").css("opacity","0"),m()(".share-icon-holder").css("opacity","1"),m()(".share-menu").toggleClass("open")},children:Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon-dark.png",alt:"close-icon",className:"close-icon",style:{width:e(5,3),height:e(5,3)}})}),Object(g.jsxs)("div",{className:"share-slide-share-icons",children:[Object(g.jsx)("h2",{className:"share-headline",style:{fontSize:e(5,2.5),marginBottom:e(4,3),color:s?"#fff":"#000"},children:"SHARE MY CARD"}),Object(g.jsxs)("div",{className:"icon-grid",style:{gridGap:e(1,.8)},children:[Object(g.jsx)("a",{href:"#!",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/sms.png",alt:"sms-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/cs.png",alt:"cs-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/whatsapp.png",alt:"whatsapp-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/dropbox 187.png",alt:"dropbox-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",style:{marginTop:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/fb-share.png",alt:"fb-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",style:{marginTop:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/telegram 191.png",alt:"tel-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",style:{marginTop:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/twitter-share.png",alt:"twit-img",style:{width:e(11,5),height:e(11,5)}})}),Object(g.jsx)("a",{href:"#!",style:{marginTop:e(2,1)},children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/linkedin-share.png",alt:"linkedin-img",style:{width:e(11,5),height:e(11,5)}})})]})]})]}),Object(g.jsxs)("div",{className:"share-menu-barcode",style:{borderTopLeftRadius:e(5,3),borderTopRightRadius:e(5,3),background:s?"#06251B":"#F0ECE6"},children:[Object(g.jsx)("a",{href:"#!",onClick:function(n){n.preventDefault(),m()(".effect").toggleClass("active"),m()(".overlay").css("opacity","0"),m()(".share-icon-holder").css("opacity","1"),m()(".share-menu-barcode").removeClass("open")},children:Object(g.jsx)("img",{src:s?"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon.png":"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/close-icon-dark.png",alt:"close-icon",className:"close-icon",style:{width:e(5,3),height:e(5,3)}})}),Object(g.jsxs)("div",{className:"share-slide-share-icons",children:[Object(g.jsx)("h2",{className:"share-headline",style:{fontSize:e(5,2.5),marginBottom:e(4,3),color:s?"#fff":"#000"},children:"SCAN AND SHARE"}),Object(g.jsx)("div",{className:"qr-code-container",children:Object(g.jsx)("img",{src:"https://raw.githubusercontent.com/rohit-virkud/lawyer/main/qr.png",alt:"qr-img",style:{width:e(30,20),height:e(30,20)}})})]})]})]})};var f=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(p,{})})},j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),a(n),i(n),r(n),s(n)}))};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root")),j()}},[[23,1,2]]]);
//# sourceMappingURL=main.0d8d3dec.chunk.js.map