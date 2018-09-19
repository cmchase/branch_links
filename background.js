chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set(
    {
      subdomains: {sharefile: 'test', workspace: 'webfwtest3'},
      urlPatterns: {
        sharefile: 'https://{subdomain}.sharefiletest.com/branch/{branch}/',
        workspace: 'https://{subdomain}.cloudburrito.com/Citrix/StoreWeb/assets/workspace/{branch}/index.html'
      }
    }
  );

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'sf-source.citrite.net'},
        css: ['span.branch-name']
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});