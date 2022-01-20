var Client;(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},770:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a="media/compass_fdb604b42070ed538e1a19724776f390.png"},514:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a="media/facebook_d27449d3893d1a0e8667c406112f3a21.png"},687:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a="media/github_bcf7ee3aeb239af59e10a9cb9818dab8.png"},409:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});const a="media/linkedin_4a22f01bde04fca6d4a50c89e70d326d.png"},395:(t,e,n)=>{var a=n(91),r=n(770),o=n(687),i=n(409),c=n(514),s='<html lang="en"> <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width,initial-scale=1"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Varela+Round&display=swap" rel="stylesheet"> <link href="'+a(r)+'" rel="icon" type="image/x-icon"/> <title>Travel App</title> </head> <body> <main class="main"> <section class="form"> <h3 class="headline">Where Would You Like To Go?</h3> <form class="form-panel" onsubmit="return Client.handleSubmit(event)"> <div class="place-panel"> <label for="place" class="panel-name">Destination</label> <input type="text" name="place" id="place" placeholder="Enter Your Destination Here"> <div id="error-msg">Please Enter Your Destination.</div> </div> <div class="start-date-panel"> <label for="start-date" class="panel-name">Start Date</label> <input type="date" name="start-date" id="start-date" placeholder="Start Date"> </div> <div class="end-date-panel"> <label for="end-date" class="panel-name">End Date</label> <input type="date" name="end-date" id="end-date" placeholder="End Date"> </div> <input type="submit" id="submit" value="Let\'s Plan!"> </form> </section> <div class="loader none"> <span></span> <span></span> <span></span> </div> <section class="detail"> <div class="menu-container"> <div class="menu-list"> <p class="tabs --active-tab" id="overview-tab" onclick=\'Client.handleTab(event,"overview-container")\'>Overview</p> <p class="tabs" id="forecast-tab" onclick=\'Client.handleTab(event,"weather-container")\'>Forecast</p> <p id="delete-btn" onclick="return Client.deleteTrip(event)">Delete</p> </div> </div> <div class="container" id="overview-container"></div> <div class="container none" id="weather-container"> <div class="forecast-summary-list"></div> <div class="forecast-detail-list"></div> </div> </section> <div class="background-img"> <div class="images" id="img-0"></div> </div> </main> <footer> <div class="social"> <a href="https://github.com/thasup" class="github"><img src="'+a(o)+'" alt="github"></a> <a href="https://www.linkedin.com/in/thanachon-supasatian-278292159/" class="linkedin"><img src="'+a(i)+'" alt="LinkedIn"></a> <a href="#" class="facebook"><img src="'+a(c)+'" alt="Facebook"></a> </div> <div class="copyright" id="about">&copy; Copyright Thanachon 2021</div> </footer> <script>"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js")}))<\/script> </body> </html>';t.exports=s},91:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,a=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,a){var r=e&&e.prototype instanceof m?e:m,o=Object.create(r.prototype),i=new T(a||[]);return o._invoke=function(t,e,n){var a=u;return function(r,o){if(a===h)throw new Error("Generator is already running");if(a===v){if("throw"===r)throw o;return M()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===u)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var s=d(t,e,n);if("normal"===s.type){if(a=n.done?v:p,s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=v,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u="suspendedStart",p="suspendedYield",h="executing",v="completed",f={};function m(){}function g(){}function y(){}var b={};s(b,o,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(_([])));L&&L!==n&&a.call(L,o)&&(b=L);var D=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(r,o,i,c){var s=d(t[r],t,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var r;this._invoke=function(t,a){function o(){return new e((function(e,r){n(t,a,e,r)}))}return r=r?r.then(o,o):o()}}function k(t,n){var a=t.iterator[n.method];if(a===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=d(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:e,done:!0}}return g.prototype=y,s(D,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(D),t},t.awrap=function(t){return{__await:t}},S(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new E(l(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(D),s(D,c,"Generator"),s(D,o,(function(){return this})),s(D,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(a,r){return c.type="throw",c.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;x(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:_(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{"use strict";function t(t){var e,n,a,r,o;t.preventDefault();var i=document.getElementById("place").value,c=document.getElementById("start-date").value,s=document.getElementById("end-date").value,l=new Date(c),d=new Date(s),u=new Date,p=l.getDate()-u.getDate(),h=d.getDate()-u.getDate(),v=d.getDate()-l.getDate()+1,f="https://thasup-travel-app.herokuapp.com";(!1==(0<=p<16&&0<=h<16)&&(p=0,h=6),console.log({getStartDate:l,getEndDate:d,getTodayDate:u}),console.log({departDateValue:p,returnDateValue:h,duration:v}),Client.handleLoader(),""!==i)?(console.log("::: GeoName Fetching ::: ".concat(f,"/place")),Client.postData("".concat(f,"/place"),{inputPlace:i}).then((function(t){console.log("::: Fetching Success :::"),e=t.geonames[0].lat,n=t.geonames[0].lng,a=t.geonames[0].countryName,console.log(t),console.log({inputLat:e,inputLng:n,country:a}),console.log({inputPlace:i,country:a,inputStartDate:c,inputEndDate:s})})).then((function(){console.log("::: WeatherBit Fetching :::"),Client.postData("".concat(f,"/forecast"),{inputLat:e,inputLng:n}).then((function(t){console.log("::: Fetching Success :::"),r=t.city_name,o=t.country_code,Client.updateWeather(t,v,p,p,h),console.log(t),console.log({city:r,countryCode:o})})).then((function(){console.log("::: PixaBay City Image Fetching :::"),Client.postData("".concat(f,"/image"),{city:r}).then((function(t){console.log("::: Initial Fetching Success :::"),0===t.totalHits?(console.log("::: Fail to Fetch City Image :::"),Client.postData("".concat(f,"/countryImage"),{country:a}).then((function(t){console.log("::: Fetching Country Image Success :::"),console.log(t),Client.updateImage(t)}))):(console.log("::: Fetching City Image Success :::"),console.log(t),Client.updateImage(t))})).then((function(){console.log("::: RestCountry Fetching :::"),Client.postData("".concat(f,"/countryInfo"),{countryCode:o}).then((function(t){console.log("::: Fetching Success :::"),Client.updateUI(i,a,c,s,v,t),console.log(t)}))}))}))}))):document.querySelector("#error-msg").style.display="block"}function e(t,e){var n=document.getElementsByClassName("tabs"),a=document.getElementsByClassName("container"),r=t.target;if(!r.classList.contains("--active-tab")){for(var o=0;o<n.length;o++)n[o].classList.remove("--active-tab");r.classList.add("--active-tab");for(var i=0;i<a.length;i++)a[i].classList.add("none");document.getElementById(e).classList.remove("none")}}function r(t){var e=t.totalHits;document.querySelector(".images").style.backgroundImage="url(".concat(t.hits[0].webformatURL,")");for(var n=1;n<e&&n<7;n++){var a=document.createElement("div"),r=t.hits[n].webformatURL,o="background-image: url(".concat(r,");");a.setAttribute("class","images"),a.setAttribute("id","img-".concat(n)),a.setAttribute("style",o),document.getElementsByClassName("background-img")[0].appendChild(a)}}function o(){var t=new Date,e=t.getDate(),n=t.getMonth(),a=t.getFullYear(),r="".concat(a,"-").concat(n+1,"-").concat(e),o="".concat(e," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ").concat(a),i=t.getDate(),c=t.getMonth()+1;i<10&&(i="0".concat(i)),c<10&&(c="0".concat(c));var s="".concat(a,"-").concat(c,"-").concat(i);return console.log({today:r,todayNameMonth:o,minDay:s}),document.getElementById("start-date").setAttribute("min",s),document.getElementById("end-date").setAttribute("min",s),s}function i(t,e,n,a,r,o){var i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=new Date(n),s=new Date(a),l="".concat(c.getDate()," ").concat(i[c.getMonth()]," ").concat(c.getFullYear()),d="".concat(s.getDate()," ").concat(i[s.getMonth()]," ").concat(s.getFullYear()),u=document.querySelector("#overview-container"),p=t.charAt(0).toUpperCase()+t.slice(1);u.innerHTML='<p><span id="highlight">'.concat(p,", ").concat(e,"</span></p>\n\n                            <p>").concat(l," - ").concat(d,"\n(").concat(r,' days)</p>\n                            <img id="flag" src="').concat(o[0].flag,'" alt="').concat(e,'_falg">\n\n                            <p><span id="keys">Capital : </span>').concat(o[0].capital,'</p>\n\n                            <p><span id="keys">Currency : </span>').concat(o[0].currencies[0].name," (").concat(o[0].currencies[0].symbol,')</p>\n\n                            <p><span id="keys">Language : </span>').concat(o[0].languages[0].name,'</p>\n\n                            <p><span id="keys">Population : </span>').concat(o[0].population.toLocaleString(),'</p>\n\n                            <p><span id="keys">Area : </span>').concat(o[0].area.toLocaleString()," sq.km</p>")}function c(t,e,n,a,r){var o=document.querySelector(".forecast-summary-list"),i=document.querySelector(".forecast-detail-list"),c="https://www.weatherbit.io/static/img/icons/";if(!0==(0<=a<16&&0<=r<16))for(var s=0;s<e;s++){var l=s+n,d=new Date(t.data[l].valid_date),u=d.getDate(),p=d.getMonth(),h="".concat(u," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][p]);o.innerHTML+='<div class="forecast-summary" id="forecast-summary-'.concat(s,'">\n                                                    <div id="date">').concat(h,'</div>\n                                                    <div id="icon"><img id="weather-icon" src="').concat(c).concat(t.data[l].weather.icon,'.png" alt="Weather_Icon"/></div>\n                                                    <div id="temp">').concat(t.data[l].temp,' <span id="cel">°C</span></div>\n                                                    <div id="condition">').concat(t.data[l].weather.description,"</div>\n                                                </div>"),i.innerHTML+='<div class="forecast-detail" id="forecast-detail-'.concat(s,'">\n                                                    <div id="precipitation">Precipitation   ').concat(t.data[l].pop,' %</div>\n                                                    <div id="wind-speed">Wind Speed   ').concat(t.data[l].wind_spd,' m/s</div>\n                                                    <div id="humidity">Humidity   ').concat(t.data[l].rh,' %</div>\n                                                    <div id="pressure">Pressure   ').concat(Math.round(t.data[l].pres),' mb</div>\n                                                    <div id="visibility">Visibility   ').concat(Math.round(t.data[l].vis)," km</div>\n                                                </div>")}else for(var v=0;v<7;v++){var f=new Date(t.data[v].valid_date),m=f.getDate(),g=f.getMonth(),y="".concat(m," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g]);o.innerHTML+='<div class="forecast-summary" id="forecast-summary-'.concat(v,'">\n                                                    <div id="date">').concat(y,'</div>\n                                                    <div id="icon"><img id="weather-icon" src="').concat(c).concat(t.data[v].weather.icon,'.png" alt="Weather_Icon"/></div>\n                                                    <div id="temp">').concat(t.data[v].temp,' <span id="cel">°C</span></div>\n                                                    <div id="condition">').concat(t.data[v].weather.description,"</div>\n                                                </div>"),i.innerHTML+='<div class="forecast-detail" id="forecast-detail-'.concat(v,'">\n                                                    <div id="precipitation">Precipitation   ').concat(t.data[v].pop,' %</div>\n                                                    <div id="wind-speed">Wind Speed   ').concat(t.data[v].wind_spd,' m/s</div>\n                                                    <div id="humidity">Humidity   ').concat(t.data[v].rh,' %</div>\n                                                    <div id="pressure">Pressure   ').concat(Math.round(t.data[v].pres),' mb</div>\n                                                    <div id="visibility">Visibility   ').concat(Math.round(t.data[v].vis)," km</div>\n                                                </div>")}}function s(){var t=document.getElementsByClassName("loader"),e=document.getElementsByClassName("detail");t[0].style.opacity=1,t[0].classList.remove("none"),e[0].style.display="block",setTimeout((function(){e[0].style.opacity=1,t[0].style.opacity=0,t[0].classList.add("none")}),5e3)}function l(){var t=document.getElementsByClassName("images"),e=function(t,e,a){setTimeout((function(){t.style.opacity=.75,setTimeout((function(){t.style.opacity=0,e===a&&n()}),6e3)}),6e3*e)},n=function(){for(var n=0;n<t.length;n++){var a=document.getElementById("img-".concat(n));e(a,n,t.length-1)}};n()}function d(t,e,n,a,r,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(a,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function i(t){d(o,a,r,i,c,"next",t)}function c(t){d(o,a,r,i,c,"throw",t)}i(void 0)}))}}n.r(a),n.d(a,{deleteTrip:()=>m,handleDate:()=>o,handleLoader:()=>s,handleSubmit:()=>t,handleTab:()=>e,loopImage:()=>l,postData:()=>v,updateImage:()=>r,updateUI:()=>i,updateWeather:()=>c});var p=n(757),h=n.n(p);function v(){return f.apply(this,arguments)}function f(){return f=u(h().mark((function t(){var e,n,a,r=arguments;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},t.next=4,fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=t.sent,t.prev=5,t.abrupt("return",a.json());case 9:t.prev=9,t.t0=t.catch(5),console.log({error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[5,9]])}))),f.apply(this,arguments)}var m=function(t){t.preventDefault();var e=document.querySelector("#place"),n=document.querySelector("#start-date"),a=document.querySelector("#end-date"),r=document.querySelector(".background-img"),o=document.querySelector("#overview-container"),i=document.querySelector(".forecast-summary-list"),c=document.querySelector(".forecast-detail-list");e.value="",n.value="",a.value="",r.innnerHTML='<div class="images" id="img-0"></div>',o.innnerHTML="",i.innnerHTML="",c.innnerHTML=""};n(395);window.addEventListener("load",(function(t){Client.handleDate()})),window.addEventListener("submit",(function(t){t.preventDefault(),Client.loopImage()}))})(),Client=a})();