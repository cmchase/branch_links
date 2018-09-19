chrome.runtime.onMessage.addListener((msg, sender, callback) => {
  if (msg.text === 'branch_link') {
    callback({subdomain: msg.subdomain, url: msg.url, branch_name: document.querySelector('.branch-name').innerText});
  }
});