// ==UserScript==
// @name         📖 Read Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Floating Read: button for Edge Reader View
// @author       Kevin Endres
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var btn = document.createElement('button');
    btn.innerText = '📖 Read:';
    btn.style.cssText = 'position:fixed;top:10px;right:10px;z-index:9999;background:#4285f4;color:white;border:none;padding:10px 15px;border-radius:5px;cursor:pointer;font-size:14px;box-shadow:0 2px 10px rgba(0,0,0,0.2);';
    btn.onclick = () => { location.href = 'read:' + location.href.replace(/#.*/, ''); };
    document.body.appendChild(btn);
})();
