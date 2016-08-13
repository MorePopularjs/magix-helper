chrome.browserAction.onClicked.addListener(function(tab) {
 chrome.tabs.executeScript({
  code: "javascript:void((function(d,s){s=d.createElement('script');s.src='//thx.github.io/magix/assets/helper.js';s.charset='utf-8';d.body.appendChild(s)}(document)))"
});
});
