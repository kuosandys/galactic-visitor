(this["webpackJsonpgalactic-visitor"]=this["webpackJsonpgalactic-visitor"]||[]).push([[0],{35:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a,i,r,o,s=t(1),c=t.n(s),l=t(26),h=t.n(l),p=(t(35),t(30)),d=t(23),u=t(10),m=t(3),f=t(4),g=t(2),x=t(6),b=t(12),j=t.n(b),y=g.b.button(a||(a=Object(m.a)(["\n  padding: 10px 14px;\n  border: none;\n  border-radius: 3px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1;\n  background: ",";\n  color: ",";\n\n  :hover {\n    background: ",";\n    cursor: pointer;\n  }\n\n  :focus,\n  :active {\n    border: none;\n    outline: none;\n  }\n"])),(function(e){return e.theme.mainColor}),(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.secondaryColor})),w=g.b.div(i||(i=Object(m.a)(["\n  position: absolute;\n  top: 60px;\n  right: 20px;\n  z-index: 5;\n  padding-bottom: 5px;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: ",";\n\n  * {\n    margin: 5px 0 5px 0;\n  }\n\n  p {\n    width: 100%;\n    padding: 10px;\n    text-align: right;\n    color: ",";\n    font-size: 14px;\n    border-bottom: 0.5px solid ",";\n\n    span {\n      font-weight: 700;\n      color: ",";\n    }\n  }\n"])),(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.bottomShadow}),(function(e){return e.theme.darkTextColor}),(function(e){return e.theme.lightSecondaryColor}),(function(e){return e.theme.darkTextColor})),v=g.b.div(r||(r=Object(m.a)(["\n  width: 100%;\n  height: 80px;\n  position: relative;\n  padding: 20px;\n  border-bottom: 0.5px solid ",";\n\n  img {\n    height: 60px;\n    width: 40px;\n    position: absolute;\n    left: 20px;\n    top: 4px;\n  }\n\n  p {\n    padding: 0;\n    margin-left: 60px;\n    text-align: left;\n    color: ",";\n    font-size: 14px;\n    border: none;\n\n    span {\n      font-weight: 700;\n    }\n  }\n\n  a {\n    font-size: 16px;\n    margin-left: 60px;\n    overflow-x: ellipsis;\n    color: ",";\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n"])),(function(e){return e.theme.lightSecondaryColor}),(function(e){return e.theme.darkTextColor}),(function(e){return e.theme.darkTextColor})),O=Object(g.b)(y)(o||(o=Object(m.a)(["\n  font-weight: 700;\n\n  i {\n    margin-right: 5px;\n  }\n\n  &.active {\n    background: ",";\n  }\n"])),(function(e){return e.theme.secondaryColor})),k=t(0);function T(e){var n=e.cartItems,t=e.onExpandCart,a=e.cartExpanded,i=Object(s.useState)(0),r=Object(u.a)(i,2),o=r[0],c=r[1];return Object(s.useEffect)((function(){var e=n.reduce((function(e,n){return+e+n.count}),0);c(e)}),[n]),Object(k.jsx)("div",{children:Object(k.jsxs)(O,{onClick:t,className:a?"active":"",children:[Object(k.jsx)("i",{className:"fas fa-rocket"}),Object(k.jsx)("span",{children:o})]})})}function S(e){var n=e.cartItems,t=e.total;return Object(k.jsxs)(w,{children:[Object(k.jsxs)("p",{children:["Total: ",Object(k.jsxs)("span",{children:["$",t]})]}),n.map((function(e){return e.count>0?Object(k.jsx)(C,{fileName:e.fileName,image:e.imageFile,name:e.name,count:e.count,price:e.price},j()()):null})),Object(k.jsxs)(x.b,{to:"/galactic-visitor/checkout",children:[" ",Object(k.jsx)(y,{children:"Check Out "})]})]})}function C(e){return Object(k.jsxs)(v,{children:[Object(k.jsx)("img",{src:e.image,alt:""}),Object(k.jsx)(x.b,{to:"/galactic-visitor/tours"+e.fileName,children:e.fileName}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{children:e.count})," x ",Object(k.jsxs)("span",{children:["$",e.price]})]})]})}var N,z=t(13),A=g.b.nav(N||(N=Object(m.a)(["\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  background-color: ",";\n  padding: 10px 20px;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: ",";\n  z-index: 10;\n\n  * {\n    margin: 0;\n    color: ",";\n  }\n\n  .navHome {\n    font-size: 24px;\n    text-transform: uppercase;\n    letter-spacing: -0.7px;\n\n    i {\n      margin-right: 7px;\n    }\n  }\n\n  .navLinks {\n    flex-grow: 1;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    font-size: 20px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n\n    .navLink {\n      margin: 0 10px;\n\n      :hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"])),(function(e){return e.theme.mainColor}),(function(e){return e.theme.bottomShadow}),(function(e){return e.theme.lightTextColor}));var E,F,J=function(e){var n=e.cartItems,t=e.total,a=Object(s.useState)(!1),i=Object(u.a)(a,2),r=i[0],o=i[1],c=Object(z.useMediaQuery)({query:"(max-width: 500px)"});return Object(k.jsxs)(A,{children:[Object(k.jsxs)(x.b,{to:"/galactic-visitor/",className:"navHome",children:[Object(k.jsx)("i",{className:"fas fa-stroopwafel"}),"Galactic Visitor"]}),Object(k.jsxs)("div",{className:"navLinks",children:[!c&&Object(k.jsx)(x.b,{className:"navLink",to:"/galactic-visitor/tours",children:"Tours"}),Object(k.jsx)(T,{className:"cart",cartItems:n,onExpandCart:function(){o(!r)},cartExpanded:r})]}),r&&Object(k.jsx)(S,{className:"cart",cartItems:n,total:t})]})},P=g.b.form(E||(E=Object(m.a)(["\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 3px;\n\n  > * {\n    margin: 0 4px;\n  }\n\n  input {\n    border: none;\n    border: 1.5px solid ",";\n    border-radius: 3px;\n    font-size: 15px;\n    color: ",";\n    font-weight: 700;\n    padding-left: 3px;\n    :focus,\n    :active {\n      outline: none;\n    }\n  }\n\n  label {\n    color: ",";\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.mainColor}),(function(e){return e.theme.darkTextColor}),(function(e){return e.theme.darkTextColor})),D=Object(g.b)(y)(F||(F=Object(m.a)(["\n  margin-left: 20px;\n"])));var I,M,q=function(e){var n=e.onAddToCart,t=e.tourData,a=Object(s.useState)(e.tourData.count),i=Object(u.a)(a,2),r=i[0],o=i[1];return Object(k.jsxs)(P,{onSubmit:function(t){return n(t,e.tourData.fileName,r)},children:[Object(k.jsx)("label",{children:Object(k.jsx)("i",{className:"fas fa-user-astronaut"})}),Object(k.jsx)("input",{type:"number",name:t.fileName,defaultValue:t.count,max:"10",min:"1",onChange:function(e){o(+e.target.value)}}),Object(k.jsx)(D,{type:"submit",children:"Update Cart"})]})},R=g.b.div(I||(I=Object(m.a)(["\n  position: relative;\n  padding-top: 65px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 250px;\n  max-width: 750px;\n  height: 100vh;\n  margin: 0 auto;\n  background-color: ",";\n  color: ",";\n\n  h1 {\n    font-weight: 400;\n    font-size: 24px;\n    text-transform: uppercase;\n    letter-spacing: -0.4px;\n  }\n\n  > p {\n    text-transform: uppercase;\n    font-size: 14px;\n    color: ",";\n    font-weight: 700;\n\n    span {\n      color: ",";\n      font-size: 16px;\n    }\n  }\n"])),(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.darkTextColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.darkTextColor})),K=g.b.div(M||(M=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: no-wrap;\n  flex-direction: row;\n  height: 200px;\n  min-width: 300px;\n  margin: 5px auto;\n  padding: 20px 10px;\n  border-radius: 3px;\n  box-shadow: ",";\n  > * {\n    margin: 0 10px;\n  }\n\n  div {\n    display: flex;\n    flex-wrap: no-wrap;\n    flex-direction: column;\n    align-items: stretch;\n    text-align: ",";\n    justify-content: space-between;\n    font-size: 16px;\n    > * {\n      margin: 0;\n      color: ",";\n    }\n\n    * {\n      /* align-items: flex-end; */\n      justify-content: space-between;\n    }\n\n    p {\n      margin: 0;\n    }\n\n    .title {\n      font-size: 20px;\n\n      :hover {\n        text-decoration: underline;\n      }\n    }\n\n    .price {\n      font-weight: 700;\n    }\n\n    .subtotal {\n      text-align: ",";\n      text-transform: uppercase;\n      font-size: 14px;\n      color: ",";\n      font-weight: 700;\n\n      span {\n        font-size: 16px;\n        color: ",";\n      }\n    }\n  }\n\n  img {\n    height: 100%;\n    width: auto;\n    margin: auto;\n    display: ",";\n  }\n"])),(function(e){return e.theme.lightShadow}),(function(e){return e.isSmallScreen?"center":"left"}),(function(e){return e.theme.darkTextColor}),(function(e){return e.isSmallScreen?"center":"right"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.darkTextColor}),(function(e){return e.isSmallScreen?"none":"initial"}));function L(e){var n=Object(z.useMediaQuery)({query:"(max-width: 400px)"});return console.log(n),Object(k.jsxs)(K,{isSmallScreen:n,children:[Object(k.jsx)("img",{src:e.imageFile,alt:""}),Object(k.jsxs)("div",{children:[Object(k.jsx)(x.b,{to:"/galactic-visitor/tours"+e.fileName,children:Object(k.jsx)("p",{className:"title",children:e.name})}),Object(k.jsxs)("p",{className:"price",children:["$",e.price]}),Object(k.jsx)(q,{onAddToCart:e.onAddToCart,tourData:e.tourData}),Object(k.jsxs)("p",{className:"subtotal",children:["Subtotal: ",Object(k.jsxs)("span",{children:["$",e.price*e.count]})]})]})]})}var B,V,$,W,H=function(e){var n=e.cartItems,t=e.total,a=e.onAddToCart;return Object(k.jsxs)(R,{children:[Object(k.jsx)("h1",{children:"Cart"}),n.map((function(e){return e.count>0?Object(k.jsx)(L,{imageFile:e.imageFile,name:e.name,price:e.price,count:e.count,onAddToCart:a,tourData:e},j()()):null})),Object(k.jsxs)("p",{children:["Total: ",Object(k.jsxs)("span",{children:["$",t]})]})]})},G=Object(g.c)(B||(B=Object(m.a)(["\n  from {\n    transform: scale(1)\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.9);\n    opacity: 0.4;\n  }\n"]))),Q=Object(g.c)(V||(V=Object(m.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),U=Object(g.c)($||($=Object(m.a)(["\n  from {\n    transform: scale(1)\n  }\n\n  to {\n    transform: scale(1.05)\n  }\n"]))),X=g.b.div(W||(W=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  overflow: hidden;\n\n  &:hover {\n    img {\n      animation: "," 1s forwards;\n    }\n\n    p {\n      animation: "," 1s forwards;\n    }\n  }\n\n  * {\n    z-index: 3;\n  }\n\n  p {\n    opacity: ",";\n    color: ",";\n    font-weight: 700;\n    text-shadow: ",",\n      ",";\n  }\n\n  img {\n    position: absolute;\n    top: -450px;\n    z-index: 2;\n    filter: grayscale(0.3);\n  }\n\n  .tourName {\n    font-size: 24px;\n    text-transform: uppercase;\n\n    :hover {\n      text-decoration: underline;\n    }\n  }\n\n  .tourPrice {\n    font-size: 18px;\n  }\n"])),G,Q,(function(e){return e.isSmallScreen?"1":"0"}),(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.aroundShadow}),(function(e){return e.theme.sharpShadow}));var Y,Z=function(e){var n=Object(z.useMediaQuery)({query:"(max-width: 500px)"});return Object(k.jsxs)(X,{isSmallScreen:n,children:[Object(k.jsx)("img",{src:e.imageSrc,alt:""},e.imageSrc),Object(k.jsx)("p",{className:"tourName",children:e.tourName}),Object(k.jsxs)("p",{className:"tourPrice",children:["$",e.price]})]})},_=g.b.div(Y||(Y=Object(m.a)(["\n  padding-top: 60px;\n  width: 100vw;\n  max-width: 750px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));var ee,ne,te=function(e){var n=Object(f.g)(),t=e.toursData;return Object(k.jsx)(_,{children:Object(k.jsx)(f.c,{children:Object(k.jsx)(f.a,{exact:!0,path:"".concat(n.path),children:t.map((function(e){return Object(k.jsx)(x.b,{to:"".concat(n.url,"/").concat(e.fileName),children:Object(k.jsx)(Z,{imageSrc:e.imageFile,tourName:e.name,price:e.price})},j()())}))})})})},ae=t.p+"static/media/background.2bc4062b.jpg",ie=g.b.div(ee||(ee=Object(m.a)(["\n  height: 100vh;\n  padding-top: 100px;\n  background: url(",") center top no-repeat;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  opacity: 0;\n  animation: "," 2s forwards;\n  animation-delay: 0.5s;\n\n  * {\n    color: ",";\n    margin: 40px 0;\n  }\n\n  h1 {\n    font-size: 45px;\n    font-style: italic;\n    font-weight: 400;\n    text-shadow: ",";\n    text-align: center;\n    opacity: 0;\n    animation: "," 2s forwards;\n    animation-delay: 1s;\n    margin: 30px 10px;\n  }\n"])),ae,Q,(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.sharpShadow}),Q),re=Object(g.b)(y)(ne||(ne=Object(m.a)(["\n  box-shadow: ",";\n  font-size: 20px;\n  background-color: ",";\n  height: auto;\n  padding: 15px 20px;\n\n  :hover {\n    animation: "," 0.3s forwards;\n  }\n"])),(function(e){return e.theme.aroundShadow}),(function(e){return e.theme.mainColor}),U);var oe,se=function(){return Object(k.jsxs)(ie,{children:[Object(k.jsx)("h1",{children:"The galaxy at your fingertips"}),Object(k.jsx)(x.b,{to:"/galactic-visitor/tours",children:Object(k.jsx)(re,{children:"Explore Our Tours"})})]})},ce=g.b.div(oe||(oe=Object(m.a)(["\n  position: relative;\n  padding-top: 65px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 250px;\n  max-width: 750px;\n  margin: 0 auto;\n  background-color: ",";\n  color: ",";\n\n  a {\n    position: absolute;\n    left: 0;\n    top: 75px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    color: ",";\n    :hover {\n      text-decoration: underline;\n    }\n  }\n\n  h1 {\n    margin-top: 20px;\n    font-weight: 400;\n    font-size: 24px;\n    text-transform: uppercase;\n    letter-spacing: -0.4px;\n  }\n  img {\n    width: 200px;\n    height: auto;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 1.6;\n    span {\n      font-weight: 700;\n    }\n\n    .quotes {\n      color: ",";\n      letter-spacing: 2px;\n      font-size: 24px;\n      line-height: 16px;\n\n      font-weight: 700;\n      font-family: ",";\n    }\n  }\n\n  > * {\n    margin: 0 40px 20px 40px;\n  }\n"])),(function(e){return e.theme.lightTextColor}),(function(e){return e.theme.darkTextColor}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.secondaryFont}));var le,he=function(e){var n=Object(f.f)().tourName,t=e.toursData,a=e.onAddToCart,i=t.filter((function(e){return e.fileName===n}))[0];return Object(k.jsxs)(ce,{children:[Object(k.jsx)(x.b,{to:"/galactic-visitor/tours",children:"Back"}),Object(k.jsxs)("h1",{children:[" ",i.name]}),Object(k.jsx)("img",{src:i.imageFile,alt:""}),Object(k.jsxs)("p",{children:["Trip Distance: ",Object(k.jsx)("span",{children:i.distance})]}),Object(k.jsxs)("p",{children:["First-Class Ticket Price: ",Object(k.jsxs)("span",{children:["$",i.price]})]}),Object(k.jsx)(q,{onAddToCart:a,tourData:i}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{className:"quotes",children:'"'}),i.description,Object(k.jsx)("span",{className:"quotes",children:'"'})]})]})},pe=[{fileName:"51-pegasi-b",name:"51 Pegasi B",imageFile:t.p+"static/media/51-pegasi-b.82109763.jpg",distance:"48 light years",price:15e4,description:'While there is much debate over which exoplanet discovery is considered the "first, " one stands out from the rest. In 1995, scientists discovered 51 Pegasi b, forever changing the way we see the universe and our place in it. The exoplanet is about half the mass of Jupiter, with a seemingly impossible, star-hugging orbit of only 4.2 Earth days. Not only was it the first planet confirmed to orbit a sun-like star, it also ushered in a whole new class of planets called Hot Jupiters: hot, massive planets orbiting closer to their stars than Mercury. Today, powerful observatories like NASA\'s Kepler space telescope will continue the hunt of distant planets.'},{fileName:"55-cancri-e",name:"55 Cancri E",imageFile:t.p+"static/media/55-cancri-e.c53bc3aa.jpg",distance:"40 light years",price:13e4,description:"A global ocean of lava under sparkling, silicate skies reflecting the lava below: what better choice for an extrreme vacation? Planet Janssen, or 55 Cancri e, orbits a star called Copernicus only 41 light years away. The molten surface is completely uninhabitable, but you'll ride safely above, taking in breathtaking views: the burning horizon, Janssen's sister planet Galileo hanging in a dark sky, and curtains of glowing particles as you glide across the terminator to Janssen's dark side. Book your travel now to the hottest vacation spot in the galaxy, 55 Cancri e."},{fileName:"ceres",name:"Ceres",imageFile:t.p+"static/media/ceres.2a7c5290.jpg",distance:"557.2 million km",price:25e3,description:"Ceres is the closest dwarf planet to the Sun. It is the largest object in the main asteroid belt between Mars and Jupiter, with an equatorial diameter of about 965 kilometers. After being studied with telescopes for more than two centuries, Ceres became the first dwarf planet to be explored by a spacecraft, when NASA's Dawn probe arrived in orbit in March 2015. Dawn's ongoing detailed observations are revealing intriguing insights into the nature of this mysterious world of ice and rock."},{fileName:"earth",name:"Earth",imageFile:t.p+"static/media/earth.0d13b1c6.jpg",distance:"0 km",price:0,description:"There's no place like home. Warm, wet and with an atmosphere that's just right, Earth is the only place we know of with life \u2013 and lots of it. JPL's Earth science missions monitor our home planet and how it's changing so it can continue to provide a safe haven as we reach deeper into the cosmos."},{fileName:"enceladus",name:"Enceladus",imageFile:t.p+"static/media/enceladus.e129ee08.jpg",distance:"1.272 billion km",price:5e4,description:"The discovery of Enceladus' icy jets and their role in creating Saturn's E-ring is one of the top findings of the Cassini mission to Saturn. Further Cassini mission discoveries revealed strong evidence of a global ocean and the first signs of potential hydrothermal activity beyond Earth \u2013 making this tiny Saturnian moon one of the leading locations in the search for possible life beyond Earth."},{fileName:"europa",name:"Europa",imageFile:t.p+"static/media/europa.c5d40b7a.jpg",distance:"628.3 million km",price:3e4,description:"Astonishing geology and the potential to host the conditions for simple life make Jupiter's moon Europa a fascinating destination for future exploration. Beneath its icy surface, Europa is believed to conceal a global ocean of salty liquid water twice the volume of Earth's oceans. Tugging and flexing from Jupiter's gravity generates enough heat to keep the ocean from freezing. On Earth, wherever we find water, we find life. What will NASA's Europa mission find when it heads for this intriguing moon in the 2020s."},{fileName:"grand-tour",name:"Grand Tour",imageFile:t.p+"static/media/grand-tour.bec5d328.jpg",distance:"9.222 billion km",price:1e5,description:"NASA's Voyager mission took advantage of a once-every-175-year alignment of the outer planets for a grand tour of the solar system. The twin spacecraft revealed details about Jupiter, Saturn, Uranus and Neptune \u2013 using each planet's gravity to send them on to the next destination. Voyager set the stage for such ambitious orbiter missions as Galileo to Jupiter and Cassini to Saturn. Today both Voyager spacecraft continue to return valuable science from the far reaches of our solar system."},{fileName:"hd-40307g",name:"HD 40307g",imageFile:t.p+"static/media/hd-40307g.09f53407.jpg",distance:"42 light years",price:14e4,description:'Twice as big in volume as the Earth, HD 40307g straddles the line between "Super-Earth" and "mini-Neptune" and scientists aren\'t sure if it has a rocky surface or one that\'s buried beneath thick layers of gas and ice. One thing is certain though: at eight time the Earth\'s mass, its gravitational pull is much, much stronger.'},{fileName:"jupiter",name:"Jupiter",imageFile:t.p+"static/media/jupiter.1e538511.jpg",distance:"903.9 million km",price:4e4,description:"The Jovian cloudscape boasts the most spectacular light show in the solar system, with northern and southern lights to dazzle even the most jaded space traveler. Jupiter's auroras are hundreds of times more powerful than Earth's, and they form a glowing ring around each pole that's bigger than our home planet. Revolving outside this auroral oval are the glowing, electric \u201cfootprints\u201d of Jupiter's three largest moons. NASA's Juno mission will observe Jupiter's auroras from above the polar regions, studying them in a way never before possible."},{fileName:"kepler-16b",name:"Kepler 16b",imageFile:t.p+"static/media/kepler-16b.5b0b4059.jpg",distance:"200 light years",price:5e5,description:"Like Luke Skywalker's planet \"Tatooine\" in Star Wars, Kepler-16b orbits a pair of stars. Depicted here as a terrestrial planet, Kepler-16b might also be a gas giant like Saturn. Prospects for life on this unusual world aren't good, as it has a temperature similar to that of dry ice. But the discovery indicates that the movie's iconic double-sunset is anything but science fiction."},{fileName:"kepler-186f",name:"Kepler 186f",imageFile:t.p+"static/media/kepler-186f.5514cd44.jpg",distance:"558 light years",price:1e6,description:"Kepler-186f is the first Earth-size planet discovered in the potentially 'habitable zone' around another star, where liquid water could exist on the planet's surface. Its star is much cooler and redder than our Sun. If plant life does exist on a planet like Kepler-186f, its photosynthesis could have been influenced by the star's red-wavelength photons, making for a color palette that's very different than the greens on Earth. This discovery was made by Kepler, NASA's planet hunting telescope."},{fileName:"mars",name:"Mars",imageFile:t.p+"static/media/mars.3c10c651.jpg",distance:"199.4 million km",price:15e3,description:"NASA's Mars Exploration Program seeks to understand whether Mars was, is, or can be a habitable world. Missions like Mars Pathfinder, Mars Exploration Rovers, Mars Science Laboratory and Mars Reconnaissance Orbiter, among many others, have provided important information in understanding of the habitability of Mars. This poster imagines a future day when we have achieved our vision of human exploration of Mars and takes a nostalgic look back at the great imagined milestones of Mars exploration that will someday be celebrated as \u201chistoric sites.\u201d"},{fileName:"pso-j318.5-22",name:"PSO J318.5-22",imageFile:t.p+"static/media/pso-j318.5-22.2fe92570.jpg",distance:"80 light years",price:28e4,description:"Discovered in October 2013 using direct imaging, PSO J318.5-22 belongs to a special class of planets called rogue, or free-floating, planets. Wandering alone in the galaxy, they do not orbit a parent star. Not much is known about how these planets come to exist, but scientists theorize that they may be either failed stars or planets ejected from very young systems after an encounter with another planet. These rogue planets glow faintly from the heat of their formation. Once they cool down, they will be dancing in the dark."},{fileName:"titan",name:"Titan",imageFile:t.p+"static/media/titan.d41c44d1.jpg",distance:"1.638 billion km",price:6e4,description:"Frigid and alien, yet similar to our own planet billions of years ago, Saturn's largest moon, Titan, has a thick atmosphere, organic-rich chemistry and a surface shaped by rivers and lakes of liquid ethane and methane. Cold winds sculpt vast regions of hydrocarbon-rich dunes. There may even be cryovolcanoes of cold liquid water. NASA's Cassini orbiter was designed to peer through Titan's perpetual haze and unravel the mysteries of this planet-like moon."},{fileName:"trappist-1e",name:"Trappist 1e",imageFile:t.p+"static/media/trappist-1e.9fbe4896.jpg",distance:"40 light years",price:13e4,description:"Some 40 light-years from Earth, a planet called TRAPPIST-1e offers a heart-stopping view: brilliant objects in a red sky, looming like larger and smaller versions of our own moon. But these are no moons. They are Earth-sized planets in a spectacular planetary system outside our own. These seven rocky worlds huddle around their small, dim, red star, like a family around a campfire. Any of them could harbor liquid water, but the planet shown here, fourth from the TRAPPIST-1 star, is in the habitable zone, the area around the star where liquid water is most likely to be detected. This system was revealed by the TRAnsiting Planets and PlanetesImals Small Telescope (TRAPPIST) and NASA\u2019s Spitzer Space Telescope. The planets are also excellent targets for NASA\u2019s James Webb Space Telescope. Take a planet-hopping excursion through the TRAPPIST-1 system."},{fileName:"venus",name:"Venus",imageFile:t.p+"static/media/venus.2ebeafda.jpg",distance:"251.5 million km",price:2e4,description:"The rare science opportunity of planetary transits has long inspired bold voyages to exotic vantage points \u2013 journeys such as James Cook's trek to the South Pacific to watch Venus and Mercury cross the face of the Sun in 1769. Spacecraft now allow us the luxury to study these cosmic crossings at times of our choosing from unique locales across our solar system."}],de={mainColor:"hsl(189, 38%, 51%)",secondaryColor:"hsl(189,38%,61%)",lightSecondaryColor:"hsl(189, 38%, 85%)",lightTextColor:"hsl(0, 0%, 100%)",darkTextColor:"hsl(193, 18%, 24%)",bottomShadow:"1px 10px 10px hsla(0, 0%, 5%, 0.3)",aroundShadow:"0px 5px 50px hsla(0, 0%, 20%, 0.5), 0px -5px 50px hsla(0, 0%, 20%, 0.5), 5px 0px 50px hsla(0, 0%, 20%, 0.5), -5px 0px 50px hsla(0, 0%, 20%, 0.5)",sharpShadow:"0px 3px 10px hsla(0, 0%, 20%, 0.7), 0px -3px 10px hsla(0, 0%, 20%, 0.7), 3px 0px 10px hsla(0, 0%, 20%, 0.7), -3px 0px 10px hsla(0, 0%, 20%, 0.7)",lightShadow:"0px 3px 10px hsla(0, 0%, 20%, 0.1), 0px -3px 10px hsla(0, 0%, 20%, 0.1), 3px 0px 10px hsla(0, 0%, 20%, 0.1), -3px 0px 10px hsla(0, 0%, 20%, 0.1)",secondaryFont:"Times New Roman"},ue=g.b.div(le||(le=Object(m.a)(["\n  height: 100%;\n"])));var me=function(){var e=Object(s.useState)(pe.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{count:0})}))),n=Object(u.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)(0),r=Object(u.a)(i,2),o=r[0],c=r[1],l=function(e,n,i){e.preventDefault();var r=Object(p.a)(t);r[t.findIndex((function(e){return e.fileName===n}))].count=i,a(r)};return Object(s.useEffect)((function(){var e=t.reduce((function(e,n){return+e+n.count*n.price}),0);c(e)}),[t]),Object(k.jsx)(g.a,{theme:de,children:Object(k.jsxs)(ue,{className:"App",children:[Object(k.jsx)(J,{cartItems:t,total:o}),Object(k.jsxs)(f.c,{children:[Object(k.jsx)(f.a,{path:"/galactic-visitor/checkout",children:Object(k.jsx)(H,{cartItems:t,total:o,onAddToCart:l})}),Object(k.jsx)(f.a,{path:"/galactic-visitor/tours/:tourName",children:Object(k.jsx)(he,{toursData:t,onAddToCart:l})}),Object(k.jsx)(f.a,{exact:!0,path:"/galactic-visitor/tours",children:Object(k.jsx)(te,{toursData:pe})}),Object(k.jsx)(f.a,{exact:!0,path:"/galactic-visitor/",children:Object(k.jsx)(se,{})})]})]})})};h.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(x.a,{children:Object(k.jsx)(me,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a9cfe7cd.chunk.js.map