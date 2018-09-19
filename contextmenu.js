const branchLinksMenu = chrome.contextMenus.create(
  {
    id: "branchLinksMenu",
    title: "BitBucket Branch Links",
    documentUrlPatterns: ["*://sf-source.citrite.net/*"]
  }
);
chrome.contextMenus.create(
  {
    id: "sharefile",
    title: "Sharefile",
    parentId: branchLinksMenu
  }
);
chrome.contextMenus.create(
  {
    id: "workspace",
    title: "Workspace",
    parentId: branchLinksMenu
  }
);

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const type = info.menuItemId;
  chrome.storage.sync.get(function(data) {
    chrome.tabs.sendMessage(
      tab.id,
      {
        subdomain: data.subdomains[type],
        url: data.urlPatterns[type],
        text: 'branch_link'
      },
      openBranchLink)
  });
 })