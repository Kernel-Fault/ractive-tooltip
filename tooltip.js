!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.tooltip=t():e.tooltip=t()}(this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function a(e,t,r){var a={x:e.pageX,y:e.pageY},n=a.y-r.offsetHeight-5,o=a.x+r.offsetWidth-window.innerWidth,i=e.pageY-r.offsetHeight-5,d=e.pageX-5;o>0&&(d-=o),0>n&&(i+=2*r.offsetHeight-5),r.style.left=d+"px",r.style.top=i+"px"}function n(e,t,r){var n,i,d;r=r||"above",o||(o=document.createElement("div"),o.className="ractive-tooltip-container",document.body.appendChild(o)),i={mouseenter:function(r){n||(n=document.createElement("div"),n.className="tooltip",n.textContent=t),e.classList.add("tooltipped"),o.contains(n)||o.appendChild(n),a(r,e,n)},mousemove:function(t){n&&a(t,e,n)},mouseleave:function(){n&&n.parentNode&&(n.parentNode.removeChild(n),e.classList.remove("tooltipped"))}};for(d in i)i.hasOwnProperty(d)&&e.addEventListener(d,i[d],!1);return{teardown:function(){n&&n.parentNode&&(n.parentNode.removeChild(n),n=null);for(d in i)i.hasOwnProperty(d)&&e.removeEventListener(d,i[d],!1)}}}r(1);var o;e.exports=n},function(e,t,r){var a=r(2);"string"==typeof a&&(a=[[e.id,a,""]]);r(4)(a,{});a.placeholders&&(e.exports=a.placeholders)},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".ractive-datatable td,.ractive-datatable th{text-align:left;padding:.5em 1em;white-space:nowrap}.ractive-datatable{display:block;max-width:100%}.ractive-datatable .scroll{overflow:scroll}.ractive-datatable table{border-collapse:collapse;border-spacing:0;width:100%}.ractive-datatable tbody{border:0 solid rgba(0,0,0,.25);border-bottom-width:1px;border-top-width:1px}.ractive-datatable thead.sortable th{cursor:pointer}.ractive-datatable th{font-size:1.2em}.ractive-datatable th.sort:after{content:'';border:5px solid transparent;display:inline-block;margin-left:5px;vertical-align:middle}.ractive-datatable th.sort.desc:after{border-top-color:currentColor}.ractive-datatable th.sort.asc:after{border-bottom-color:currentColor;position:relative;top:-5px}.ractive-datatable td.editing{padding:0}.ractive-datatable td.editing input{padding:.5em 1em;background:0 0;border:none;outline:0;width:100%;font-size:1em;border-bottom:1px dotted #333}.ractive-datatable .highlight{background:linear-gradient(rgba(107,206,255,.5),rgba(0,146,219,.5));color:rgba(0,0,0,.9);border-radius:3px;box-shadow:0 1px rgba(255,255,255,.5) inset;border:1px solid #0092db}.ractive-datatable tr{background:#fff}.ractive-datatable tr:nth-child(even){background:#fafafa}.ractive-datatable tr+tr{border-top:1px solid #ddd}.ractive-datatable tr:hover td{background:rgba(0,0,0,.05)}.ractive-datatable>div{margin-top:5px}.ractive-datatable .pagination{float:right;user-select:none}.ractive-datatable .pagination .disabled{opacity:.15;cursor:default;user-select:none}.ractive-datatable .pagination a{display:inline-block;cursor:pointer}.ractive-datatable .pages a{width:2em;text-align:center}.ractive-datatable .pages a.active{font-weight:700;text-decoration:underline}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(a[o]=!0)}for(var n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&a[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function a(e,t){for(var r=0;r<e.length;r++){var a=e[r],n=p[a.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](a.parts[o]);for(;o<a.parts.length;o++)n.parts.push(d(a.parts[o],t))}else{for(var i=[],o=0;o<a.parts.length;o++)i.push(d(a.parts[o],t));p[a.id]={id:a.id,refs:1,parts:i}}}}function n(e){for(var t=[],r={},a=0;a<e.length;a++){var n=e[a],o=n[0],i=n[1],d=n[2],s=n[3],l={css:i,media:d,sourceMap:s};r[o]?r[o].parts.push(l):t.push(r[o]={id:o,parts:[l]})}return t}function o(){var e=document.createElement("style"),t=v();return e.type="text/css",t.appendChild(e),e}function i(){var e=document.createElement("link"),t=v();return e.rel="stylesheet",t.appendChild(e),e}function d(e,t){var r,a,n;if(t.singleton){var d=b++;r=h||(h=o()),a=s.bind(null,r,d,!1),n=s.bind(null,r,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=i(),a=c.bind(null,r),n=function(){r.parentNode.removeChild(r),r.href&&URL.revokeObjectURL(r.href)}):(r=o(),a=l.bind(null,r),n=function(){r.parentNode.removeChild(r)});return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}function s(e,t,r,a){var n=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function l(e,t){var r=t.css,a=t.media;t.sourceMap;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function c(e,t){var r=t.css,a=(t.media,t.sourceMap);a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(a))+" */");var n=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var p={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},u=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,b=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=u());var r=n(e);return a(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var d=r[i],s=p[d.id];s.refs--,o.push(s)}if(e){var l=n(e);a(l,t)}for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()}])});