!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="public",n(n.s=0)}([function(t,e){var n=new(function(){function t(){this.index=0,this.data=["https://www.youtube.com/embed/w1oM3kQpXRo","https://www.youtube.com/embed/GkD20ajVxnY","https://www.youtube.com/embed/yCMqcFAigRg","https://www.youtube.com/embed/xKCek6_dB0M","https://www.youtube.com/embed/Jb2stN7kH28","https://www.youtube.com/embed/ptSjNWnzpjg","https://www.youtube.com/embed/Pb-K2tXWK4w","https://www.youtube.com/embed/8xg3vE8Ie_E","https://www.youtube.com/embed/D1Xr-JFLxik","https://www.youtube.com/embed/VuNIsY6JdUw"],this.proxy="?controls=0&autoplay=1&showinfo=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5500&widgetid=1"}return t.prototype.playSong=function(){document.getElementById("ytplayer").src=this.data[this.index]+this.proxy},t.prototype.nextSong=function(){9===this.index?(this.index=0,document.getElementById("n_value").value=this.data[this.index+1]+this.proxy,document.getElementById("p_value").value=this.data[0]+this.proxy,this.index+=1):8==this.index?(this.index+=1,document.getElementById("n_value").value=this.data[0]+this.proxy,document.getElementById("p_value").value=this.data[this.index-1]+this.proxy):(this.index+=1,document.getElementById("n_value").value=this.data[this.index+1]+this.proxy,document.getElementById("p_value").value=this.data[this.index-1]+this.proxy)},t.prototype.prevSong=function(){0===this.index?(this.index=9,document.getElementById("n_value").value=this.data[0]+this.proxy,document.getElementById("p_value").value=this.data[this.index-1]+this.proxy):1==this.index?(this.index-=1,document.getElementById("n_value").value=this.data[this.index+1]+this.proxy,document.getElementById("p_value").value=this.data[9]+this.proxy):(this.index-=1,document.getElementById("n_value").value=this.data[this.index+1]+this.proxy,document.getElementById("p_value").value=this.data[this.index-1]+this.proxy)},t}());n.playSong();var o=document.getElementById("button_fw");o&&o.addEventListener("click",(function(){n.nextSong()}));var i=document.getElementById("button_bw");i&&i.addEventListener("click",(function(){n.prevSong()}))}]);
