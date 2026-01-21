// ==UserScript==
// @name         📖 Reader Button
// @match        *://*/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const btn = document.createElement('button');
    btn.textContent = '📖 Reader';
    btn.style.cssText = `
        position: fixed; top: 10px; right: 10px; z-index: 99999;
        background: #4285f4; color: white; border: none;
        padding: 12px 16px; border-radius: 8px; cursor: pointer;
        font-size: 14px; font-weight: 500; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    btn.onclick = () => {
        const url = location.href.split('#')[0];
        GM_openInTab(`microsoft-edge://read/?url=${encodeURIComponent(url)}`, {active: true});
    };
    document.body.appendChild(btn);
})();
