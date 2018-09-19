const branchLinks = document.querySelectorAll('.branchLink');
const bkp = chrome.extension.getBackgroundPage()
branchLinks.forEach((ele) => {
  ele.onclick = (element) => {
    // bkp.console.log(element)
    // element.preventDefault();
    const type = element.target.dataset.type;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.storage.sync.get(function(data) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            subdomain: data.subdomains[type],
            url: data.urlPatterns[type],
            text: 'branch_link'
          },
          openBranchLink)
      });
    });
  };
})